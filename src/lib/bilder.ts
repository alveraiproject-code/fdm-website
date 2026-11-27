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
  },
  // Serie 3: Motive für einzelne Kursgruppen
  "thema/kita": {
    "datei": "kita-assistenz-bastelangebot-vorbereiten",
    "alt": "Eine Frau bereitet an einem niedrigen Tisch in einer Kita Bastelmaterial vor."
  },
  "thema/paedagogik": {
    "datei": "paedagogik-fallbesprechung-foerderplan",
    "alt": "Zwei Fachkräfte besprechen an einem Tisch einen Förderplan."
  },
  "thema/coaching": {
    "datei": "coaching-gespraech-zielklaerung",
    "alt": "Eine Coachin hört einem Klienten zu, der sein Anliegen erklärt."
  },
  "thema/ausbilder": {
    "datei": "ausbildereignung-unterweisung-arbeitsplatz",
    "alt": "Ein Ausbilder erklärt einer Auszubildenden einen Arbeitsschritt."
  },
  "thema/deutsch": {
    "datei": "berufsbezogenes-deutsch-gespraech-ueben",
    "alt": "Zwei Erwachsene üben mit Arbeitsblättern ein Gespräch aus dem Berufsalltag."
  },
  "thema/englisch": {
    "datei": "wirtschaftsenglisch-besprechung-ueben",
    "alt": "Eine Frau stellt zwei Kollegen an einem Flipchart ein Diagramm vor."
  },
  "thema/cloud": {
    "datei": "cloud-administration-dienste-ueberwachen",
    "alt": "Ein Administrator prüft Auslastungsdiagramme auf zwei Monitoren."
  },
  "thema/sicherheit": {
    "datei": "it-sicherheit-zugriffe-pruefen",
    "alt": "Eine IT-Fachfrau prüft Sicherheitswarnungen am Bildschirm."
  },
  "thema/datenschutz": {
    "datei": "datenschutz-unterlagen-pruefen",
    "alt": "Ein Mann gleicht Unterlagen in einem Ordner mit einer Checkliste ab."
  },
  "thema/office": {
    "datei": "office-tabellenkalkulation-auswerten",
    "alt": "Eine Frau wertet am Laptop eine Tabelle mit Diagramm aus."
  },
  "thema/grundlagen": {
    "datei": "computergrundlagen-erste-schritte",
    "alt": "Eine Frau folgt am Laptop Schritt für Schritt einer gedruckten Anleitung."
  },
  "thema/web": {
    "datei": "webentwicklung-seitenentwurf-umsetzen",
    "alt": "Ein Entwickler vergleicht eine Skizze mit dem Seitenaufbau am Bildschirm."
  },
  "thema/lager": {
    "datei": "lagerlogistik-wareneingang-erfassen",
    "alt": "Eine Lagermitarbeiterin erfasst einen Karton mit dem Handscanner."
  },
  "thema/sps": {
    "datei": "sps-technik-steuerung-programmieren",
    "alt": "Ein Techniker programmiert mit dem Laptop eine Steuerung im Schaltschrank."
  },
  "thema/cnc": {
    "datei": "cnc-fraesen-maschine-einrichten",
    "alt": "Eine Fachkraft richtet an einer CNC-Fräsmaschine ein Werkstück ein."
  },
  "thema/elektro": {
    "datei": "elektrotechnik-messung-pruefen",
    "alt": "Ein Elektriker misst an einer Übungstafel eine Schaltung durch."
  },
  "thema/facility": {
    "datei": "facility-management-gebaeudetechnik-pruefen",
    "alt": "Eine Fachkraft prüft mit einem Tablet eine Anlage im Technikraum."
  },
  "thema/redaktion": {
    "datei": "technische-redaktion-anleitung-erstellen",
    "alt": "Ein Redakteur gleicht ein Gerät mit seiner Anleitung am Bildschirm ab."
  },
  "thema/aufstieg": {
    "datei": "aufstiegsfortbildung-lerngruppe-pruefungsvorbereitung",
    "alt": "Drei Berufstätige bereiten sich gemeinsam auf eine Prüfung vor."
  },
  "thema/immobilien": {
    "datei": "immobilien-grundriss-besprechen",
    "alt": "Eine Immobilienfachfrau erläutert einem Kunden einen Grundriss."
  },
  "thema/personal": {
    "datei": "personalwesen-bewerbungsgespraech-fuehren",
    "alt": "Eine Personalerin führt mit einem Bewerber ein Gespräch."
  },
  "thema/arztpraxis": {
    "datei": "arztpraxis-empfang-terminplanung",
    "alt": "Eine medizinische Fachangestellte plant am Empfang einer Praxis Termine."
  },
  "thema/senioren": {
    "datei": "seniorenbetreuung-aktivierung-gespraech",
    "alt": "Eine Betreuungskraft sieht mit einer älteren Frau ein Fotoalbum an."
  },
  "thema/umwelt": {
    "datei": "umweltmanagement-betriebsbegehung-pruefen",
    "alt": "Zwei Fachkräfte prüfen bei einer Begehung den Betriebshof."
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
  [/\bcnc\b|fräsen|industriemeister\/-in (?:metall|mechatronik)/i, "thema/cnc"],
  // Sprachkurse. "in deutscher und englischer Sprache" und "in Deutschland" sind keine Sprachkurse.
  [/\bdeutsch\b|textverständnis/i, "thema/deutsch"],
  [/englisch\b|fremdsprache|sprachtraining|sprachzertifikat/i, "thema/englisch"],
  [/\bkita\b/i, "thema/kita"],
  [/ausbilder|\baevo\b|dozent|weiterbildungspädagog|berufspädagog/i, "thema/ausbilder"],
  [/pädagog|schulbegleit|lehrer|lehrkräfte|integrationsassistent/i, "thema/paedagogik"],
  [/coach|mediation|verhandlungstechnik|business-networking|moderieren/i, "thema/coaching"],
  [/architekturvisualisierung/i, "3D und Digital Design"],
  [/\b(?:cgi|blender|zbrush|unreal engine)\b|3d.modell/i, "kurs/3D und Digital Design"],
  [/datenanaly|data[- ]?(?:science|scientist|analyst|engineering)|datenvisualisierung|business intelligence|power bi|machine learning/i, "kurs/Künstliche Intelligenz"],
  [/html|\bcss\b|frontend|webentwicklung|webdesign|webseitengestaltung|webprogrammierung|javascript|typescript/i, "thema/web"],
  [/programmier|softwareentwicklung|softwaredesign|anwendungsentwicklung|objektorientierung|backend|python|\bjava\b|c\+\+|c#|\bphp\b|\bsql\b/i, "kurs/IT und EDV"],
  [/cybersicherheit|it-sicherheit|\bsecurity\b|hacking|identity/i, "thema/sicherheit"],
  [/cloud|\baws\b|azure|administrator/i, "thema/cloud"],
  [/netzwerk|networking|server|comptia|infrastrukturbetrieb/i, "IT und EDV"],
  [/datenschutz/i, "thema/datenschutz"],
  [/pc-grundlagen|online grundlagen|online zusammenarbeit|browser|grundkompetenzen/i, "thema/grundlagen"],
  [/\b(?:word|excel|powerpoint|outlook|access|sharepoint)\b|microsoft teams|büroverwaltung|büromanagement|sekretariat|schriftverkehr|low-code/i, "thema/office"],
  [/logisti|\blager|spedition|supply-chain|kraftverkehr/i, "thema/lager"],
  [/buchhalt|datev|lohn.{0,12}abrechnung|rechnungswesen|belegerfassung|steuerrecht/i, "kurs/Kaufmännisch"],
  [/elektrotechni|\beplan/i, "thema/elektro"],
  [/\bsps\b|robotertechnik/i, "thema/sps"],
  [/facility|wärmepumpe/i, "thema/facility"],
  [/technische.{0,4} redakteur/i, "thema/redaktion"],
  [/social media|content creator|online.marketing experte|praxisprojekt im marketing/i, "kurs/Marketing und Vertrieb"],
  [/suchmaschinen|\bseo\b|\bsem\b|webanalyse|performance.marketing/i, "Marketing und Vertrieb"],
  [/indesign|illustrator|photoshop|\bgimp\b|bildbearbeitung|grafik.{0,12}design|layout|farbgestaltung/i, "kurs/Medien und Design"],
  [/copilot|ki.{0,14}büro|prompt/i, "Künstliche Intelligenz"],
  [/energieberat|energieeffizien|wohngebäude/i, "kurs/Umwelt und Energie"],
  [/umwelt|nachhaltig|klimaschutz|naturschutz|gewässer|\blca\b|lebenszyklus/i, "thema/umwelt"],
  [/photovoltaik|sonnenenergie|energiemanagement/i, "Umwelt und Energie"],
  [/auditor|auditverfahren|prozessmanagement/i, "Qualitätsmanagement"],
  [/teamarbeit|scrum|projektmanagement|\bproject\b|moderation/i, "kurs/Management und Personal"],
  [/personal(?:arbeit|management|wesen|verwaltung|recht|fach)|recht in der personal|recruiting|mitarbeiterführung|führen von/i, "thema/personal"],
  [/betreuungskraft|seniorenbetreu|demenz/i, "thema/senioren"],
  [/pflegeberat|praxisanleitung/i, "kurs/Gesundheit und Pflege"],
  [/praxismanage|arztpraxis|zahn|abrechnung|\bebm\b|terminologie|fachkunde/i, "thema/arztpraxis"],
  [/dokumentation.*pflege|e-health/i, "Gesundheit und Pflege"],
  [/veranstaltung|eventmanage|bedienung und service/i, "kurs/Hotel und Gastronomie"],
  [/\brezeption|hotelmanagement/i, "Hotel und Gastronomie"],
  [/qualitätsfachkraft|qualitätsmanagement|qualitätssicherung/i, "kurs/Qualitätsmanagement"],
  [/objektschutz|bewachung|sicherheitskraft/i, "kurs/Schutz und Sicherheit"],
  [/solidworks|autocad|inventor|konstruktion/i, "kurs/Technik und CAD"],
  [/immobilien/i, "thema/immobilien"],
  // Aufstiegsfortbildungen der IHK und Betriebswirtschaft: gemeinsame Prüfungsvorbereitung
  [/fachwirt|betriebswirt|fachkaufmann|meister\/-in|\bbwl\b|business skills/i, "thema/aufstieg"],
  [/rechtsanwalt|wirtschaftsrecht|unternehmerisch|auftragsbearbeitung|kompaktwissen/i, "Kaufmännisch"],
  [/vertrieb|\bsales\b|verkauf|e-commerce/i, "Marketing und Vertrieb"],
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
