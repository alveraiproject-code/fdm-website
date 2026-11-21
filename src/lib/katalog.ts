// =============================================================
// lib/katalog.ts — Geförderte Weiterbildungen aus dem CRM
// Der Katalog kommt live aus dem CRM der FDM Akademie und enthält
// ausschließlich Kurse, die dort für den Katalog freigegeben sind.
// =============================================================

export const CRM_URL = "https://crm.fdm-akademie.de";

export interface Weiterbildung {
  modul_nr: string;
  titel: string;
  kurzbeschreibung: string | null;
  fachbereich: string | null;
  fachbereich_name: string;
  kursart: string;
  kursart_name: string;
  zeitmodell: string;
  zeitmodell_name: string;
  lerneinheiten: number | null;
  praktikumsstunden: number | null;
  dauer_wochen: number | null;
  laufender_einstieg: boolean | null;
  // Als FDM-Maßnahme nach AZAV zugelassen; steuert nur den Wortlaut des Förderhinweises.
  zugelassen?: boolean;
}

// Lädt den Katalog serverseitig und hält ihn fünf Minuten vor.
// Ist das CRM nicht erreichbar, bleibt die Seite mit leerem Katalog benutzbar.
export async function ladeKatalog(): Promise<Weiterbildung[]> {
  try {
    const antwort = await fetch(`${CRM_URL}/api/katalog`, {
      next: { revalidate: 300 },
    });
    if (!antwort.ok) return [];
    const daten = (await antwort.json()) as { kurse?: Weiterbildung[] };
    // Zugelassene Kurse stehen vorn, danach alphabetisch (so liefert es das CRM).
    return [...(daten.kurse ?? [])].sort((a, b) => Number(b.zugelassen ?? false) - Number(a.zugelassen ?? false));
  } catch {
    return [];
  }
}

// Ausführliche Beschreibung eines Kurses (Einleitung, Abschnitte, Fragen). Wird im CRM gepflegt.
export interface Kurstext {
  einleitung: string;
  abschnitte: { ueberschrift: string; text: string }[];
  fragen: { frage: string; antwort: string }[];
}

export async function ladeKurstext(modulNr: string): Promise<Kurstext | null> {
  try {
    const antwort = await fetch(`${CRM_URL}/api/kurs/${encodeURIComponent(modulNr)}`, {
      next: { revalidate: 600 },
    });
    if (!antwort.ok) return null;
    const text = ((await antwort.json()) as { langtext?: Kurstext | null }).langtext;
    return text && text.einleitung && Array.isArray(text.abschnitte) ? text : null;
  } catch {
    return null;
  }
}

export const kursPfad = (modulNr: string) => `/weiterbildung/${encodeURIComponent(modulNr)}`;

// Anzahl der Kurse je Fachbereich, größte zuerst (für die Übersicht auf der Startseite).
export function fachbereiche(kurse: Weiterbildung[]): { name: string; anzahl: number }[] {
  const zaehler = new Map<string, number>();
  for (const k of kurse) zaehler.set(k.fachbereich_name, (zaehler.get(k.fachbereich_name) ?? 0) + 1);
  return [...zaehler.entries()].map(([name, anzahl]) => ({ name, anzahl })).sort((a, b) => b.anzahl - a.anzahl);
}

export function dauerText(k: Pick<Weiterbildung, "dauer_wochen">): string | null {
  if (!k.dauer_wochen) return null;
  const wochen = Number(k.dauer_wochen);
  if (wochen >= 8) {
    const monate = Math.round(wochen / 4.345);
    return `ca. ${monate} Monate`;
  }
  return wochen === 1 ? "1 Woche" : `${wochen} Wochen`;
}
