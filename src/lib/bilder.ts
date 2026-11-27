type Motiv = { datei: string; alt: string };

const motive: Record<string, Motiv> = {
  "unterricht": {
    "datei": "live-online-weiterbildung-virtuelles-klassenzimmer",
    "alt": "Eine Lernende verfolgt am Laptop die Erklärung eines Dozenten und macht sich Notizen."
  },
  "arbeitgeber": {
    "datei": "weiterbildung-beschaeftigte-qualifizierungsplanung",
    "alt": "Zwei Beschäftigte einer Werkstatt besprechen gemeinsam einen Plan am Tisch."
  },
  "gutschein": {
    "datei": "bildungsgutschein-beratung-weiterbildung",
    "alt": "Eine Frau telefoniert am Schreibtisch und hält Unterlagen für das Beratungsgespräch bereit."
  },
  "selbstlernen": {
    "datei": "selbstlernkurs-digitaler-lernplatz",
    "alt": "Geöffnete digitale Lektion auf einem Laptop, daneben Kopfhörer und ein Notizbuch."
  },
  "beratung": {
    "datei": "bildungsberatung-arbeitsplatz-headset",
    "alt": "Eine Person mit Headset sitzt an einem hellen Beratungsarbeitsplatz."
  },
  "IT und EDV": {
    "datei": "it-edv-netzwerkplanung",
    "alt": "Ein IT-Fachmann betrachtet den Aufbau eines Computernetzwerks am Bildschirm."
  },
  "Technik und CAD": {
    "datei": "technik-cad-bauteilkonstruktion",
    "alt": "Eine Konstrukteurin vergleicht Bauteil, Zeichnung und CAD-Modell."
  },
  "Kaufmännisch": {
    "datei": "buchhaltung-rechnung-pruefen",
    "alt": "Ein Mitarbeiter gleicht einen Papierbeleg mit einer Tabelle ab."
  },
  "Marketing und Vertrieb": {
    "datei": "online-marketing-kampagne-auswerten",
    "alt": "Eine Marketingfachkraft betrachtet ein Kampagnenmotiv und seine Auswertung."
  },
  "Sprachen und Schlüsselkompetenzen": {
    "datei": "sprachtraining-online-gespraech",
    "alt": "Eine Lernende übt mit Headset und Laptop ein Gespräch."
  },
  "Management und Personal": {
    "datei": "personalmanagement-entwicklungsgespraech",
    "alt": "Zwei Kollegen besprechen am Tisch Unterlagen zur Personalentwicklung."
  },
  "Gesundheit und Pflege": {
    "datei": "pflege-digitale-dokumentation",
    "alt": "Eine Pflegekraft arbeitet an der digitalen Dokumentation."
  },
  "Qualitätsmanagement": {
    "datei": "qualitaetsmanagement-bauteil-pruefen",
    "alt": "Ein Mitarbeiter kontrolliert ein Bauteil anhand seiner Prüfliste."
  },
  "Medien und Design": {
    "datei": "mediendesign-layout-entwurf",
    "alt": "Eine Designerin vergleicht farbige Layoutentwürfe."
  },
  "3D und Digital Design": {
    "datei": "3d-design-architekturvisualisierung",
    "alt": "Drahtmodell und gerenderte Ansicht eines Gebäudes auf einem Monitor."
  },
  "Umwelt und Energie": {
    "datei": "energiemanagement-verbrauchsanalyse",
    "alt": "Ein Fachmann wertet ein Energiediagramm mit Blick auf Solarmodule aus."
  },
  "Künstliche Intelligenz": {
    "datei": "ki-buero-textentwurf-pruefen",
    "alt": "Eine Mitarbeiterin vergleicht einen digitalen Textentwurf mit einer gedruckten Vorlage."
  },
  "Hotel und Gastronomie": {
    "datei": "hotelmanagement-rezeption-belegungsplan",
    "alt": "Eine Hotelmitarbeiterin arbeitet am Computer der Rezeption."
  },
  "Schutz und Sicherheit": {
    "datei": "objektschutz-lageplan",
    "alt": "Zwei Fachkräfte besprechen einen Gebäudeplan."
  }
};

const artikelMotive: Record<string, string> = {
  "bildungsgutschein-beantragen": "gutschein",
  "gespraech-arbeitsagentur-weiterbildung": "beratung",
  "bildungsgutschein-abgelehnt": "gutschein",
  "weiterbildung-waehrend-arbeitslosigkeit": "unterricht",
  "umschulung-oder-weiterbildung": "beratung",
  "online-weiterbildung-ablauf": "unterricht",
  "vollzeit-oder-teilzeit-weiterbildung": "selbstlernen",
  "quereinstieg-buchhaltung-weiterbildung": "Kaufmännisch",
  "quereinstieg-it-weiterbildung": "IT und EDV",
  "ki-weiterbildung-fuer-beschaeftigte": "Künstliche Intelligenz"
};

export function bildZumThema(thema: string) {
  const motiv = motive[artikelMotive[thema] ?? thema] ?? motive.unterricht;
  return { src: `/bilder/${motiv.datei}.webp`, alt: motiv.alt };
}
