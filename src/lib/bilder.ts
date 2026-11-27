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
  },
  "kurs/IT und EDV": {
    "datei": "softwareentwicklung-programm-pruefen",
    "alt": "Eine Lernende prüft ein Programm am Bildschirm."
  },
  "kurs/Sprachen und Schlüsselkompetenzen": {
    "datei": "sprachkurs-dialog-uebungskarten",
    "alt": "Zwei junge Erwachsene üben einen Dialog mit Bildkarten."
  },
  "kurs/Kaufmännisch": {
    "datei": "finanzbuchhaltung-belege-ordnen",
    "alt": "Ein Lernender ordnet Belege neben Taschenrechner und Buchungsunterlagen."
  },
  "kurs/Technik und CAD": {
    "datei": "cad-konstruktion-prototyp-vergleichen",
    "alt": "Eine Konstrukteurin vergleicht einen Prototyp mit dem CAD-Modell."
  },
  "kurs/Gesundheit und Pflege": {
    "datei": "pflege-kommunikation-fallbesprechung",
    "alt": "Zwei Pflegekräfte besprechen gemeinsam einen Übungsfall."
  },
  "kurs/Medien und Design": {
    "datei": "mediendesign-farbkonzept-layout",
    "alt": "Eine Designerin stimmt Farbmuster und Layoutentwürfe an einer Pinnwand ab."
  },
  "kurs/Umwelt und Energie": {
    "datei": "energieberatung-waermebild-gebaeude",
    "alt": "Ein junger Mann untersucht eine Gebäudefassade mit einer Wärmebildkamera."
  },
  "kurs/Management und Personal": {
    "datei": "personalentwicklung-teamworkshop-moderieren",
    "alt": "Eine Moderatorin und ein Kollege ordnen Themen an einer Workshoptafel."
  },
  "kurs/Qualitätsmanagement": {
    "datei": "qualitaetssicherung-messschieber-werkstueck",
    "alt": "Ein Techniker prüft mit einem Messschieber die Maße eines Werkstücks."
  },
  "kurs/Marketing und Vertrieb": {
    "datei": "online-marketing-content-storyboard",
    "alt": "Zwei Lernende wählen Bildmotive für das Storyboard einer Produktkampagne aus."
  },
  "kurs/3D und Digital Design": {
    "datei": "3d-modellierung-materialstudie",
    "alt": "Ein 3D-Gestalter vergleicht Materialproben mit einem digital gerenderten Stuhl."
  },
  "kurs/Künstliche Intelligenz": {
    "datei": "datenanalyse-punktdiagramme-vergleichen",
    "alt": "Eine Lernende vergleicht zwei Punktdiagramme bei einer Datenanalyse."
  },
  "kurs/Hotel und Gastronomie": {
    "datei": "gastgewerbe-veranstaltung-tischplanung",
    "alt": "Zwei Mitarbeitende im Gastgewerbe planen die Tischanordnung für eine Veranstaltung."
  },
  "kurs/Schutz und Sicherheit": {
    "datei": "objektschutz-zutrittskontrolle-empfang",
    "alt": "Eine Mitarbeiterin am Empfang erklärt einem Besucher die Nutzung seiner Zutrittskarte."
  },
  "bildungsgutschein-beantragen": {
    "datei": "bildungsgutschein-antrag-unterlagen-ordnen",
    "alt": "Ein junger Mann sortiert Kursunterlagen für seinen Beratungstermin."
  },
  "gespraech-arbeitsagentur-weiterbildung": {
    "datei": "weiterbildungsberatung-gespraech-vorbereiten",
    "alt": "Eine Frau übt mit einem Gesprächspartner, ihr Weiterbildungsziel zu erklären."
  },
  "vollzeit-oder-teilzeit-weiterbildung": {
    "datei": "weiterbildung-wochenplan-lernzeiten",
    "alt": "Ein Lernender plant seine Lernzeiten mit farbigen Blöcken in einem Wochenplan."
  },
  "online-weiterbildung-ablauf": {
    "datei": "online-unterricht-rueckfrage-uebung",
    "alt": "Eine Teilnehmerin stellt im Online-Unterricht eine Frage zu ihrer Übung."
  },
  "ueber-uns": {
    "datei": "akademie-berufliche-weiterbildung-lernprojekt",
    "alt": "Zwei Lernende betrachten gemeinsam das Ergebnis einer Übung auf einem Tablet."
  },
  "leitbild": {
    "datei": "lernfeedback-weiterbildung-gemeinsam",
    "alt": "Zwei Lernende geben einander Rückmeldung zu einer bearbeiteten Aufgabe."
  }
};

const artikelMotive: Record<string, string> = {
  "bildungsgutschein-abgelehnt": "gutschein",
  "weiterbildung-waehrend-arbeitslosigkeit": "unterricht",
  "umschulung-oder-weiterbildung": "selbstlernen",
  "quereinstieg-buchhaltung-weiterbildung": "Kaufmännisch",
  "quereinstieg-it-weiterbildung": "IT und EDV",
  "ki-weiterbildung-fuer-beschaeftigte": "Künstliche Intelligenz"
};

// Ein konkretes Kursthema hat Vorrang vor der organisatorischen Fachbereichszuordnung. Die erste passende
// Regel gewinnt; deshalb stehen enge Regeln vor weiten. Das Bild soll die Tätigkeit des Kurses zeigen, nicht
// nur den Fachbereich: Ein Cloud-Kurs zeigt kein Programmieren, ein Logistikkurs kein CAD-Modell.
const kursMotive: ReadonlyArray<[RegExp, string]> = [
  // Metallbearbeitung: Werkstück und Messmittel
  [/\bcnc\b|fräsen|industriemeister\/-in (?:metall|mechatronik)/i, "kurs/Qualitätsmanagement"],
  // Sprachkurse. "in deutscher und englischer Sprache" und "in Deutschland" sind keine Sprachkurse.
  [/\bdeutsch\b|englisch\b|fremdsprache|sprachtraining|sprachzertifikat|textverständnis/i, "kurs/Sprachen und Schlüsselkompetenzen"],
  // Pädagogik und Begleitung von Lernenden
  [/pädagog|\bkita\b|schulbegleit|lehrer|lehrkräfte|integrationsassistent/i, "leitbild"],
  // Gesprächsführung
  [/coach|mediation|verhandlungstechnik|ausbilder|\baevo\b|dozent|business-networking|moderieren/i, "gespraech-arbeitsagentur-weiterbildung"],
  [/architekturvisualisierung/i, "3D und Digital Design"],
  [/\b(?:cgi|blender|zbrush|unreal engine)\b|3d.modell/i, "kurs/3D und Digital Design"],
  [/datenanaly|data[- ]?(?:science|scientist|analyst|engineering)|datenvisualisierung|business intelligence|power bi|machine learning/i, "kurs/Künstliche Intelligenz"],
  [/programmier|softwareentwicklung|softwaredesign|anwendungsentwicklung|objektorientierung|webentwicklung|frontend|backend|python|javascript|typescript|\bjava\b|c\+\+|c#|\bphp\b|\bsql\b|html/i, "kurs/IT und EDV"],
  [/netzwerk|networking|server|cloud|\baws\b|azure|administrator|cybersicherheit|it-sicherheit|\bsecurity\b|hacking|comptia|infrastrukturbetrieb/i, "IT und EDV"],
  [/\b(?:word|excel|powerpoint|outlook|access|sharepoint)\b|microsoft teams|büroverwaltung|büromanagement|schriftverkehr|pc-grundlagen|browser|online grundlagen|online zusammenarbeit|datenschutz|low-code/i, "selbstlernen"],
  [/buchhalt|datev|lohn.{0,12}abrechnung|rechnungswesen|belegerfassung|steuerrecht/i, "kurs/Kaufmännisch"],
  // Lager, Logistik, Elektro- und Anlagentechnik: Arbeit im Betrieb statt am CAD-Modell
  [/logisti|\blager|spedition|supply-chain|kraftverkehr|meister\/-in|facility|\bsps\b|elektrotechni|robotertechnik/i, "arbeitgeber"],
  [/technische.{0,4} redakteur/i, "Künstliche Intelligenz"],
  [/social media|content creator|online.marketing experte|praxisprojekt im marketing/i, "kurs/Marketing und Vertrieb"],
  [/suchmaschinen|\bseo\b|\bsem\b|webanalyse|performance.marketing/i, "Marketing und Vertrieb"],
  [/indesign|illustrator|photoshop|\bgimp\b|bildbearbeitung|grafik.{0,12}design|layout|farbgestaltung/i, "kurs/Medien und Design"],
  [/copilot|ki.{0,14}büro|prompt/i, "Künstliche Intelligenz"],
  [/energieberat|energieeffizien|wohngebäude|wärmepumpe/i, "kurs/Umwelt und Energie"],
  [/auditor|auditverfahren|prozessmanagement/i, "Qualitätsmanagement"],
  [/umwelt|nachhaltig|klimaschutz|naturschutz|gewässer|\blca\b|lebenszyklus|photovoltaik|sonnenenergie|energiemanagement/i, "Umwelt und Energie"],
  [/teamarbeit|scrum|projektmanagement|\bproject\b|moderation/i, "kurs/Management und Personal"],
  [/personal(?:arbeit|management|wesen|verwaltung|recht)|recht in der personal|mitarbeiterführung|führen von/i, "Management und Personal"],
  [/pflegeberat|praxisanleitung|demenz|betreuungskraft/i, "kurs/Gesundheit und Pflege"],
  [/praxismanage|arztpraxis|zahn|abrechnung|\bebm\b|terminologie|fachkunde|dokumentation.*pflege|e-health/i, "Gesundheit und Pflege"],
  [/veranstaltung|eventmanage|bedienung und service/i, "kurs/Hotel und Gastronomie"],
  [/\brezeption|hotelmanagement/i, "Hotel und Gastronomie"],
  [/qualitätsfachkraft|qualitätsmanagement|qualitätssicherung/i, "kurs/Qualitätsmanagement"],
  [/objektschutz|bewachung|sicherheitskraft/i, "kurs/Schutz und Sicherheit"],
  [/solidworks|autocad|inventor|konstruktion(?!.*zahn)/i, "kurs/Technik und CAD"],
  // Kaufmännische Abschlüsse und Betriebswirtschaft: Arbeit mit Zahlen und Unterlagen statt Belege kontieren
  [/fachwirt|betriebswirt|fachkaufmann|\bbwl\b|business skills|immobilien|rechtsanwalt|wirtschaftsrecht|unternehmerisch|auftragsbearbeitung|kompaktwissen/i, "Kaufmännisch"],
  [/vertrieb|\bsales\b|verkauf|e-commerce/i, "Marketing und Vertrieb"],
  [/grundkompetenzen/i, "unterricht"],
  [/lern- und arbeitstechniken|lernstrategien|digitales lernen|zeitmanagement|selbstmanagement/i, "vollzeit-oder-teilzeit-weiterbildung"],
];

export function kursMotiv(titel: string, bereich: string) {
  const thema = titel.split(/\s+(?:ZG|Zielgruppe)\s*:/i, 1)[0];
  for (const [muster, motiv] of kursMotive) {
    if (muster.test(thema)) return motiv;
  }
  return motive[`kurs/${bereich}`] ? `kurs/${bereich}` : bereich;
}

export function bildZumThema(thema: string) {
  const motiv = motive[artikelMotive[thema] ?? thema] ?? motive.unterricht;
  return { src: `/bilder/${motiv.datei}.webp`, alt: motiv.alt };
}
