// =============================================================
// lib/kursdetails.ts — ausführliche Inhalte für eigene Lehrgänge
// Die Eckdaten kommen aus dem CRM-Katalog; hier stehen die Texte,
// die es nur für FDM-eigene Lehrgänge gibt.
// =============================================================

export interface Kursdetails {
  massnahme: string;
  teilnehmer: string;
  abschluss: string;
  // Dieselbe Maßnahme im anderen Zeitmodell
  varianten: { modul_nr: string; name: string }[];
  module: { titel: string; text: string }[];
  zielgruppe: string[];
  voraussetzungen: string[];
  lernformen: { titel: string; text: string }[];
}

const onlineMarketingExperte: Kursdetails = {
  massnahme: "621/214/24",
  teilnehmer: "max. 15 Personen",
  abschluss: "Abschlusszertifikat als Online Marketing Experte (m/w/d)",
  varianten: [
    { modul_nr: "FDM-OME-VZ", name: "Vollzeit, 48 Wochen" },
    { modul_nr: "FDM-OME-TZ", name: "Teilzeit, 96 Wochen" },
  ],
  module: [
    { titel: "Grundlagen des Online-Marketings", text: "Überblick über digitale Kanäle, Marketingziele und strategische Planung einer Online-Präsenz." },
    { titel: "Suchmaschinenoptimierung (SEO)", text: "On-Page- und Off-Page-Optimierung, Keyword-Recherche, technische SEO und Content-Strategie." },
    { titel: "Suchmaschinenwerbung (SEA) mit Google Ads", text: "Kampagnenplanung, Anzeigenformate, Gebotsstrategien und Conversion-Tracking in Google Ads." },
    { titel: "Social Media Marketing", text: "Plattformstrategien für LinkedIn, Instagram, Facebook und Co., Community Management und organische Reichweite." },
    { titel: "E-Mail-Marketing & CRM", text: "Newsletter-Konzeption, Automatisierungen, Segmentierung und rechtssichere Umsetzung (DSGVO)." },
    { titel: "Webanalyse & Google Analytics 4", text: "Datenerhebung und Interpretation mit GA4, Dashboards, KPI-Definitionen und datenbasierte Entscheidungen." },
    { titel: "Content-Marketing & Storytelling", text: "Redaktionsplanung, Textformate, Storytelling-Techniken und Content-Distribution über mehrere Kanäle." },
    { titel: "Performance Marketing & KPIs", text: "ROI-Berechnung, A/B-Testing, Conversion-Optimierung und kanalübergreifendes Kampagnen-Controlling." },
    { titel: "Projektarbeit: Online-Marketing-Strategie", text: "Eigenständige Erstellung einer vollständigen Online-Marketing-Strategie als Abschlussprojekt." },
  ],
  zielgruppe: [
    "Arbeitssuchende und Arbeitslose, die eine neue berufliche Perspektive suchen",
    "Quereinsteiger aus anderen Berufsfeldern mit Interesse an digitalem Marketing",
    "Berufsrückkehrer nach Elternzeit oder längerer Auszeit",
    "Personen, die ihre vorhandenen Marketing-Kenntnisse erweitern möchten",
  ],
  voraussetzungen: [
    "Schulabschluss mindestens Hauptschule",
    "Interesse an Marketing, Medien oder IT (wünschenswert, kein Muss)",
    "Deutschkenntnisse auf B2-Niveau (Wort und Schrift)",
    "Motivation zur selbständigen Online-Arbeit",
    "Stabile Internetverbindung, PC oder Laptop mit Webcam und Mikrofon",
  ],
  lernformen: [
    { titel: "Live-Webinare", text: "Interaktive Online-Sessions mit erfahrenen Dozenten." },
    { titel: "Selbstlernphasen", text: "Eigenständiges Erarbeiten der Inhalte mit umfangreichem Kursmaterial." },
    { titel: "Online-Tests", text: "Wissensüberprüfung nach jedem Modul." },
    { titel: "Projektarbeiten", text: "Praktische Aufgaben und abschließende Strategie-Projektarbeit." },
  ],
};

const DETAILS: Record<string, Kursdetails> = {
  "FDM-OME-VZ": onlineMarketingExperte,
  "FDM-OME-TZ": onlineMarketingExperte,
};

export const kursdetails = (modulNr: string): Kursdetails | null => DETAILS[modulNr] ?? null;

// Der zugelassene eigene Lehrgang, auf den Förderseiten und Startseite verweisen.
export const OME_PFAD = "/weiterbildung/FDM-OME-VZ";
