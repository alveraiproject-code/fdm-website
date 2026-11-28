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
    { modul_nr: "FDM-OME-VZ", name: "Vollzeit, 12 Monate" },
    { modul_nr: "FDM-OME-TZ", name: "Teilzeit, 24 Monate" },
  ],
  // Abschnitte wie bei der Agentur für Arbeit angemeldet (Anlage 1 „Maßnahmeabschnitte“).
  module: [
    { titel: "Grundlagen des Online Marketings", text: "Einführung in das Online-Marketing, digitale Geschäftsmodelle sowie wichtige Tools und Plattformen." },
    { titel: "Content Marketing & SEO", text: "Einführung in Content Marketing, SEO-Grundlagen und Keyword-Recherche, Content-Management-Systeme wie WordPress." },
    { titel: "Social Media Management", text: "Plattformen und ihre Zielgruppen, Strategie und Redaktionsplanung, Community Management, Social Media Ads und Kennzahlen." },
    { titel: "Performance Marketing & Online Werbung", text: "Google Ads, Meta Ads und Display Advertising, Kampagnenaufbau mit Zielgruppen und Budgets, A/B-Testing, Tracking und Auswertung." },
    { titel: "Analyse und Reporting", text: "Webanalyse und Datenquellen, Kennzahlen, Google Analytics 4 sowie Dashboards und Visualisierungen mit Looker Studio." },
    { titel: "SEO & SEM", text: "Technische, On-Page- und Off-Page-Optimierung, Keyword-Recherche, Linkbuilding und bezahlte Suchanzeigen mit Google Ads." },
    { titel: "Influencer Marketing", text: "Plattformen und Formate, Zielgruppenanalyse und Auswahl von Influencern, Kooperationsformen, Kampagnensteuerung und Erfolgskontrolle." },
    { titel: "E-Mail Marketing & CRM", text: "Newsletter erstellen und versenden, Segmentierung und Personalisierung, CRM-Systeme und rechtliche Grundlagen (DSGVO)." },
    { titel: "Projektmanagement im digitalen Marketing", text: "Ziele, Phasen und Rollen, agile Methoden wie Scrum und Kanban, Werkzeuge, Ressourcenplanung und Kommunikation im Team." },
    { titel: "Abschlussprojekt: Umsetzung einer Marketingstrategie", text: "Erarbeitung eines Marketingkonzepts als Projektarbeit, Zusammenfassung aller Themen, Abschlusstest und Feedback." },
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
