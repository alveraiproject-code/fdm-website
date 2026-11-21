// =============================================================
// lib/ketten.ts — Kursketten: feste Abfolgen aufeinander aufbauender Weiterbildungen
// Die Ketten pflegt die FDM Akademie im CRM; sie kommen zusammen mit dem Katalog.
// =============================================================
import { CRM_URL, type Weiterbildung } from "./katalog";
import { bereichSlug } from "./site";

type KetteRoh = { name: string; beschreibung: string | null; stufen: { modul_nr: string; optional: boolean }[] };

export type Stufe = { nr: number; optional: boolean; kurs: Weiterbildung };

export interface Kurskette {
  name: string; // „Finanzbuchhaltung mit DATEV (Teilzeit)“
  titel: string; // ohne Zeitmodell: „Finanzbuchhaltung mit DATEV“
  slug: string;
  beschreibung: string | null;
  zeitmodell: string; // vollzeit | teilzeit
  zeitmodell_name: string;
  fachbereich_name: string;
  stufen: Stufe[];
  // Summen der Pflichtstufen und der gesamten Kette einschließlich optionaler Stufen
  grund: { stufen: number; ue: number; wochen: number };
  gesamt: { stufen: number; ue: number; wochen: number };
}

export const kettenPfad = (k: Pick<Kurskette, "slug">) => `/weiterbildung/kurskette/${k.slug}`;

const summe = (stufen: Stufe[]) => ({
  stufen: stufen.length,
  ue: stufen.reduce((s, x) => s + (x.kurs.lerneinheiten ?? 0), 0),
  wochen: stufen.reduce((s, x) => s + Number(x.kurs.dauer_wochen ?? 0), 0),
});

// Lädt die Ketten und verbindet sie mit den Kursen des Katalogs. Der Abruf nutzt dieselbe Adresse und
// dieselbe Vorhaltezeit wie der Katalog, es entsteht also keine zweite Anfrage an das CRM.
export async function ladeKetten(katalog: Weiterbildung[]): Promise<Kurskette[]> {
  let roh: KetteRoh[] = [];
  try {
    const antwort = await fetch(`${CRM_URL}/api/katalog`, { next: { revalidate: 300 } });
    if (antwort.ok) roh = ((await antwort.json()) as { ketten?: KetteRoh[] }).ketten ?? [];
  } catch {
    return [];
  }
  const kurse = new Map(katalog.map((k) => [k.modul_nr, k]));
  const ketten: Kurskette[] = [];
  for (const r of roh) {
    const stufen = r.stufen
      .map((s) => ({ optional: s.optional, kurs: kurse.get(s.modul_nr) }))
      .filter((s): s is { optional: boolean; kurs: Weiterbildung } => Boolean(s.kurs))
      .map((s, i) => ({ nr: i + 1, ...s }));
    const pflicht = stufen.filter((s) => !s.optional);
    if (pflicht.length < 2) continue;
    const erste = stufen[0].kurs;
    ketten.push({
      name: r.name,
      titel: r.name.replace(/\s*\((Vollzeit|Teilzeit)\)$/, ""),
      slug: bereichSlug(r.name),
      beschreibung: r.beschreibung,
      zeitmodell: erste.zeitmodell,
      zeitmodell_name: erste.zeitmodell_name,
      fachbereich_name: erste.fachbereich_name,
      stufen,
      grund: summe(pflicht),
      gesamt: summe(stufen),
    });
  }
  return ketten.sort((a, b) => a.name.localeCompare(b.name, "de"));
}

// Dieselbe Kette im anderen Zeitmodell.
export const andereKette = (kette: Kurskette, alle: Kurskette[]) =>
  alle.find((k) => k.titel === kette.titel && k.zeitmodell !== kette.zeitmodell) ?? null;

// Ketten, zu denen ein Kurs gehört, mit seiner Stufe.
export const kettenVonKurs = (modulNr: string, alle: Kurskette[]) =>
  alle.flatMap((k) => {
    const stufe = k.stufen.find((s) => s.kurs.modul_nr === modulNr);
    return stufe ? [{ kette: k, stufe }] : [];
  });

// „4 Wochen“, „ca. 4 Monate“
export function dauerInWorten(wochen: number) {
  if (wochen >= 8) return `ca. ${Math.round(wochen / 4.345)} Monate (${wochen} Wochen)`;
  return wochen === 1 ? "1 Woche" : `${wochen} Wochen`;
}
