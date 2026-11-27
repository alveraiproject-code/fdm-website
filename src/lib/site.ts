// =============================================================
// lib/site.ts — gemeinsame Angaben zur Website und Hilfen für Fachbereiche
// =============================================================
import type { Weiterbildung } from "./katalog";

export const BASE = "https://www.fdm-group.de";

// Feste Angaben zum Träger, die an mehreren Stellen gebraucht werden (Seiten, strukturierte Daten, llms.txt).
export const TRAEGER = {
  name: "FDM GmbH",
  marke: "FDM Akademie",
  ort: "Eislingen/Fils",
  strasse: "Schillerstraße 21",
  plz: "73054",
  telefon: "07161 6275120",
  telefonLink: "+4971616275120",
  email: "beratung@fdm-akademie.de",
  beratungEmail: "beratung@fdm-akademie.de",
  zertifikat: "Z-000473-2",
  zertifizierer: "GZQ GmbH (von der DAkkS akkreditierte Zertifizierungsstelle)",
  zertifikatBis: "17.10.2029",
} as const;

// JSON für <script type="application/ld+json"> entschärfen.
export const ldJson = (daten: unknown) => JSON.stringify(daten).replace(/</g, "\\u003c");

// „Gesundheit und Pflege“ → „gesundheit-und-pflege“
export const bereichSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const bereichPfad = (name: string) => `/weiterbildung/fachbereich/${bereichSlug(name)}`;

// Kurze Einordnung je Fachbereich: für wen die Kurse gedacht sind und welche Themen sie abdecken.
// Bewusst ohne Förderzusagen; die Fördermöglichkeiten klärt die Beratung.
const BEREICH_TEXTE: Record<string, { themen: string; fuerWen: string }> = {
  "IT und EDV": {
    themen:
      "Programmierung, Netzwerke und Server, Cloud-Plattformen, IT-Sicherheit, Datenbanken sowie Office- und PC-Anwendungen, viele davon mit Vorbereitung auf Herstellerzertifikate",
    fuerWen:
      "Quereinsteiger, die in die IT wechseln möchten, und IT-Fachkräfte, die ihr Wissen mit anerkannten Zertifikaten belegen wollen",
  },
  Kaufmännisch: {
    themen:
      "Finanzbuchhaltung mit DATEV, Lohn und Gehalt, Rechnungswesen, Controlling, Steuerrecht, Auftragsbearbeitung mit ERP-Software und kaufmännische Grundlagen",
    fuerWen:
      "kaufmännische Fachkräfte, Wiedereinsteiger und alle, die im Büro, in der Buchhaltung oder in der Sachbearbeitung arbeiten möchten",
  },
  "Sprachen und Schlüsselkompetenzen": {
    themen:
      "berufsbezogenes Deutsch und Englisch auf verschiedenen Niveaustufen, Vorbereitung auf Sprachzertifikate, Ausbildereignung (AEVO), Bewerbungstraining und Kommunikation",
    fuerWen:
      "Menschen, die ihre Sprachkenntnisse für den Beruf ausbauen oder überfachliche Kompetenzen nachweisen möchten",
  },
  "Technik und CAD": {
    themen:
      "CAD-Konstruktion mit AutoCAD, Inventor, SolidWorks, ArchiCAD und Allplan, CNC-Technik, SPS-Programmierung, Elektrotechnik und Logistik",
    fuerWen:
      "technische Zeichner, Konstrukteure, Facharbeiter und Techniker, die mit aktueller Software und Steuerungstechnik arbeiten wollen",
  },
  "Gesundheit und Pflege": {
    themen:
      "Praxismanagement und Abrechnung für Arzt- und Zahnarztpraxen, Hygiene, Betreuung und Pflegeberatung, E-Health sowie Qualitätsmanagement im Gesundheitswesen",
    fuerWen:
      "medizinische und zahnmedizinische Fachangestellte, Pflege- und Betreuungskräfte sowie Wiedereinsteiger im Gesundheits- und Sozialwesen",
  },
  "Medien und Design": {
    themen:
      "Grafik und Layout mit Adobe InDesign, Photoshop und Illustrator, Webdesign, Videobearbeitung und Animation, E-Commerce und barrierefreie Dokumente",
    fuerWen:
      "Mediengestalter, Marketing-Mitarbeitende und Kreative, die ihr Handwerkszeug erweitern oder in die Medienbranche einsteigen möchten",
  },
  "Umwelt und Energie": {
    themen:
      "Energieberatung für Wohn- und Nichtwohngebäude, Energie- und Umweltmanagement, Nachhaltigkeit, Ökobilanzierung und Auditierung",
    fuerWen:
      "Ingenieure, Techniker, Handwerksmeister und Fachkräfte, die sich auf Energieeffizienz, Umweltschutz und Nachhaltigkeit spezialisieren möchten",
  },
  "Management und Personal": {
    themen:
      "Projektmanagement klassisch und agil mit Scrum, Personalwesen, Personalentwicklung und Recruiting, Führung auf Distanz und neue Arbeitsformen",
    fuerWen:
      "angehende und erfahrene Führungskräfte, Projektleiter und Fachkräfte im Personalbereich",
  },
  Qualitätsmanagement: {
    themen:
      "Grundlagen des Qualitätsmanagements, Qualitätsfachkraft und Qualitätsmanagementbeauftragte mit TÜV-Abschluss, Auditierung, Beschwerde- und Gesundheitsmanagement",
    fuerWen:
      "Fachkräfte aus Produktion, Dienstleistung und Gesundheitswesen, die Qualitätsaufgaben übernehmen oder sich als Beauftragte qualifizieren möchten",
  },
  "Marketing und Vertrieb": {
    themen:
      "Online-Marketing und Social Media, Marketinginstrumente, Kundenbeziehungsmanagement (CRM) und digitaler Vertrieb",
    fuerWen:
      "Quereinsteiger ins Marketing, Vertriebsmitarbeitende und Selbstständige, die Kunden digital gewinnen möchten",
  },
  "3D und Digital Design": {
    themen:
      "3D-Modellierung und Visualisierung mit Blender, 3ds Max und Cinema 4D, Architekturvisualisierung und Echtzeit-Anwendungen mit der Unreal Engine",
    fuerWen:
      "Gestalter, Architekten und technische Zeichner, die fotorealistische Darstellungen und interaktive Anwendungen erstellen möchten",
  },
  "Künstliche Intelligenz": {
    themen:
      "Grundlagen der Künstlichen Intelligenz, KI-Werkzeuge für Unternehmen, Marketing und Gestaltung, Prompt-Design und Data Science",
    fuerWen:
      "Fach- und Führungskräfte, die KI im Berufsalltag sicher einsetzen wollen, sowie Einsteiger in datengetriebene Berufe",
  },
  "Hotel und Gastronomie": {
    themen: "Abläufe und Warenkunde sowie Bedienung und Service in Hotellerie und Gastronomie",
    fuerWen: "Quereinsteiger und Beschäftigte in Hotels, Restaurants und Gemeinschaftsverpflegung",
  },
  "Schutz und Sicherheit": {
    themen:
      "Vorbereitung auf die Sachkundeprüfung nach § 34a GewO, Geprüfte Schutz- und Sicherheitskraft (IHK), Objektschutz und rechtssicheres Handeln",
    fuerWen: "Menschen, die im Bewachungs- und Sicherheitsgewerbe arbeiten oder dort aufsteigen möchten",
  },
};

export const bereichText = (name: string) => BEREICH_TEXTE[name] ?? null;

// Kennzahlen eines Katalogs oder Fachbereichs für Texte und strukturierte Daten.
export function kennzahlen(kurse: Weiterbildung[]) {
  const vollzeit = kurse.filter((k) => k.zeitmodell === "vollzeit").length;
  return { gesamt: kurse.length, vollzeit, teilzeit: kurse.length - vollzeit };
}

// Derselbe Kurs im anderen Zeitmodell (VZ-K-2812 ↔ TZ-K-2812), falls es ihn gibt.
export function andereZeitform(kurs: Weiterbildung, alle: Weiterbildung[]) {
  const m = /^(VZ|TZ)-(.+)$/.exec(kurs.modul_nr);
  if (!m) return null;
  const gesucht = `${m[1] === "VZ" ? "TZ" : "VZ"}-${m[2]}`;
  return alle.find((k) => k.modul_nr === gesucht) ?? null;
}
