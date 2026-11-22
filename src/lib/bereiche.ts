// =============================================================
// lib/bereiche.ts — ausführliche Einordnung je Fachbereich
// Ergänzt die Kurzangaben aus lib/site.ts um einen Einstiegstext, typische Tätigkeiten und
// einen Hinweis, wie man den passenden Einstieg findet. Bewusst ohne Förder- oder Jobzusagen.
// =============================================================

export type BereichMehr = {
  // Zwei, drei Sätze: Worum geht es in dem Feld und warum ist es am Arbeitsmarkt gefragt?
  einstieg: string;
  // Tätigkeiten, auf die die Kurse des Bereichs vorbereiten oder in denen das Wissen gebraucht wird
  ziele: string[];
  // Wie man den passenden Einstieg findet und Kurse sinnvoll verbindet
  weg: string;
};

const BEREICHE: Record<string, BereichMehr> = {
  "IT und EDV": {
    einstieg:
      "Kaum ein Betrieb kommt ohne funktionierende IT aus: Netzwerke müssen laufen, Daten geschützt und Anwendungen entwickelt und betreut werden. Entsprechend breit ist das Feld. Es reicht vom sicheren Umgang mit Windows und Office über Programmierung und Datenbanken bis zu Cloud-Plattformen und IT-Sicherheit.",
    ziele: [
      "Anwendungsbetreuung und IT-Support",
      "Systemadministration für Netzwerke, Server und Cloud-Dienste",
      "Softwareentwicklung und Webentwicklung",
      "Arbeit mit Datenbanken und Datenauswertung",
      "IT-Sicherheit",
      "Büro- und Sachbearbeitung mit sicheren Office-Kenntnissen",
    ],
    weg: "Wer noch wenig Erfahrung hat, beginnt mit PC- und Office-Grundlagen oder einem Einstiegskurs in die Programmierung. Mit Vorkenntnissen lohnt es sich, eine Richtung zu wählen, zum Beispiel Administration, Entwicklung oder Sicherheit, und die Kurse dieser Richtung aufeinander aufzubauen. Viele Kurse bereiten auf Herstellerzertifikate vor, die in Stellenanzeigen ausdrücklich verlangt werden.",
  },
  Kaufmännisch: {
    einstieg:
      "Buchhaltung, Lohnabrechnung und Auftragsbearbeitung gehören zu den Aufgaben, die in jedem Unternehmen anfallen. Gesucht werden Menschen, die die fachlichen Regeln kennen und mit der üblichen Software arbeiten können, allen voran DATEV und ERP-Systeme.",
    ziele: [
      "Finanzbuchhaltung und Kontierung",
      "Lohn- und Gehaltsabrechnung",
      "Sachbearbeitung in Einkauf, Vertrieb und Auftragsabwicklung",
      "Controlling und Kostenrechnung",
      "Mitarbeit in Steuerkanzleien und Rechnungswesen",
      "Büroorganisation und Assistenz",
    ],
    weg: "Für den Einstieg oder Wiedereinstieg eignen sich die kaufmännischen Grundlagen und die Basiskurse in Finanzbuchhaltung oder Lohn und Gehalt. Darauf bauen Aufbau- und Expertenkurse auf, häufig mit DATEV. Wer bereits Berufserfahrung hat, kann gezielt die Software oder das Fachgebiet nachholen, das in den Stellenanzeigen der Region am häufigsten verlangt wird.",
  },
  "Sprachen und Schlüsselkompetenzen": {
    einstieg:
      "Sprache entscheidet im Beruf oft darüber, ob Fachwissen zur Geltung kommt. Die Kurse dieses Bereichs verbinden Deutsch und Englisch mit typischen beruflichen Situationen. Dazu kommen überfachliche Themen wie Kommunikation, Bewerbung und die Ausbildereignung.",
    ziele: [
      "Berufliche Kommunikation auf Deutsch in Büro, Pflege und Dienstleistung",
      "Englisch für Geschäftskorrespondenz, Telefonate und Besprechungen",
      "Vorbereitung auf anerkannte Sprachzertifikate",
      "Ausbilden im Betrieb mit Ausbildereignung (AEVO)",
      "Sicheres Auftreten in Bewerbung und Vorstellungsgespräch",
    ],
    weg: "Bei Sprachkursen richtet sich der Einstieg nach Ihrem aktuellen Niveau; die Stufen bauen aufeinander auf, sodass sich mehrere Niveaus zu einem durchgehenden Lernweg verbinden lassen. Wenn Sie unsicher sind, wo Sie stehen, schätzen wir das mit Ihnen in der Beratung ein. Sprachkurse lassen sich gut mit einem fachlichen Kurs verbinden, etwa Deutsch für den Beruf mit einer kaufmännischen Weiterbildung.",
  },
  "Technik und CAD": {
    einstieg:
      "In Konstruktion, Fertigung und Bauplanung wird digital gearbeitet: Zeichnungen entstehen im CAD-Programm, Maschinen werden programmiert, Anlagen über Steuerungen geregelt. Wer die gängigen Programme beherrscht, kann seine technische Erfahrung in heutigen Arbeitsabläufen einsetzen.",
    ziele: [
      "Technisches Zeichnen und Konstruktion in 2D und 3D",
      "Bauzeichnung und Planung mit ArchiCAD oder Allplan",
      "CNC-Programmierung und Bedienung",
      "SPS-Programmierung und Automatisierungstechnik",
      "Elektrotechnische Tätigkeiten",
      "Lagerlogistik und Disposition",
    ],
    weg: "Entscheidend ist, welche Software in Ihrer Branche üblich ist: AutoCAD, Inventor und SolidWorks im Maschinenbau, ArchiCAD und Allplan im Bauwesen. Die Kurse beginnen jeweils mit den Grundlagen und führen über Aufbaustufen zur Vertiefung. Sehen Sie in Stellenanzeigen Ihrer Region nach, welches Programm genannt wird, und richten Sie Ihre Auswahl danach.",
  },
  "Gesundheit und Pflege": {
    einstieg:
      "Arztpraxen, Pflegeeinrichtungen und soziale Dienste suchen dauerhaft Personal, in der Betreuung ebenso wie in Verwaltung und Abrechnung. Die Weiterbildungen dieses Bereichs frischen Fachwissen auf, bereiten auf Aufgaben in Organisation und Abrechnung vor und vermitteln Zusatzqualifikationen, etwa in Hygiene oder Betreuung.",
    ziele: [
      "Praxisorganisation und Abrechnung in Arzt- und Zahnarztpraxen",
      "Betreuung und Alltagsbegleitung",
      "Pflegeberatung und Praxisanleitung",
      "Hygiene und Qualitätssicherung in Einrichtungen",
      "Verwaltungsaufgaben im Gesundheits- und Sozialwesen",
      "Digitale Anwendungen im Gesundheitswesen",
    ],
    weg: "Der passende Kurs hängt stark von Ihrer Ausbildung ab. Medizinische und zahnmedizinische Fachangestellte vertiefen meist Abrechnung und Praxismanagement, Pflege- und Betreuungskräfte wählen Zusatzqualifikationen für ihr Arbeitsfeld. Für manche Tätigkeiten sind bestimmte Berufsabschlüsse vorgeschrieben; welche Voraussetzungen für einen Kurs gelten, klären wir vorab mit Ihnen.",
  },
  "Medien und Design": {
    einstieg:
      "Gestaltung findet heute fast vollständig am Bildschirm statt, für Druck, Web, Video und soziale Medien. Die Programme von Adobe sind dabei der Standard, den Agenturen und Marketingabteilungen voraussetzen. Die Kurse vermitteln das Handwerkszeug und zeigen, wie daraus fertige Arbeiten entstehen.",
    ziele: [
      "Grafik und Layout für Print und digitale Medien",
      "Bildbearbeitung und Illustration",
      "Webdesign und Betreuung von Websites",
      "Videoschnitt und Animation",
      "Content-Erstellung für Marketing und Social Media",
      "Betreuung von Online-Shops",
    ],
    weg: "Für den Einstieg empfehlen sich die Grundlagenkurse zu InDesign, Photoshop und Illustrator, weil diese drei Programme in den meisten Stellenanzeigen gemeinsam genannt werden. Danach können Sie sich in Richtung Web, Bewegtbild oder Print vertiefen. Arbeiten aus den Kursen eignen sich häufig als Grundlage für eine eigene Mappe.",
  },
  "Umwelt und Energie": {
    einstieg:
      "Energieeffizienz, Klimaschutz und Nachhaltigkeit sind für Gebäude und Unternehmen zu festen Anforderungen geworden. Gebraucht werden Fachleute, die Gebäude energetisch bewerten, Managementsysteme aufbauen und Nachweise führen können. Die Weiterbildungen dieses Bereichs bauen in der Regel auf einer technischen oder kaufmännischen Vorbildung auf.",
    ziele: [
      "Energieberatung für Wohn- und Nichtwohngebäude",
      "Energiemanagement im Unternehmen",
      "Umweltmanagement und Auditierung",
      "Nachhaltigkeitsmanagement und Berichterstattung",
      "Ökobilanzierung",
    ],
    weg: "Prüfen Sie zuerst, welche Vorbildung für Ihr Ziel verlangt wird; vor allem in der Energieberatung sind die Zugangsvoraussetzungen geregelt. Danach lassen sich die Kurse gut kombinieren, etwa Energiemanagement mit Auditierung. Wir besprechen mit Ihnen, welche Kombination zu Ihrem Abschluss und Ihrem Berufsziel passt.",
  },
  "Management und Personal": {
    einstieg:
      "Projekte steuern, Teams führen, Personal gewinnen und entwickeln: Diese Aufgaben gibt es in jeder Branche, und sie verlangen eigene Methoden. Die Kurse vermitteln klassisches und agiles Projektmanagement sowie die Grundlagen und Vertiefungen der Personalarbeit.",
    ziele: [
      "Projektleitung und Projektassistenz",
      "Arbeit in agilen Teams, zum Beispiel mit Scrum",
      "Personalsachbearbeitung",
      "Recruiting und Personalentwicklung",
      "Teamleitung und Führung, auch auf Distanz",
    ],
    weg: "Wer zum ersten Mal Verantwortung für Projekte oder Mitarbeitende übernimmt, beginnt mit den Grundlagen des Projektmanagements oder des Personalwesens. Erfahrene Fachkräfte ergänzen gezielt eine Methode oder ein Zertifikat. Projektmanagement lässt sich gut mit einem Fachkurs aus Ihrem Berufsfeld verbinden.",
  },
  Qualitätsmanagement: {
    einstieg:
      "Qualitätsmanagement sorgt dafür, dass Abläufe verlässlich funktionieren und Anforderungen von Kunden, Normen und Behörden erfüllt werden. Unternehmen aus Produktion, Dienstleistung und Gesundheitswesen brauchen dafür Beschäftigte, die Prozesse beschreiben, prüfen und verbessern können.",
    ziele: [
      "Qualitätsfachkraft in Produktion oder Dienstleistung",
      "Qualitätsmanagementbeauftragte",
      "Interne Auditorin oder interner Auditor",
      "Beschwerde- und Reklamationsmanagement",
      "Qualitätsaufgaben im Gesundheits- und Sozialwesen",
    ],
    weg: "Die Kurse sind als Stufen aufgebaut: Grundlagen, Qualitätsfachkraft, Qualitätsmanagementbeauftragte und Auditierung. In dieser Reihenfolge lassen sie sich zu einem durchgehenden Lernweg verbinden. Einsteiger beginnen mit den Grundlagen; wer bereits mit einem Managementsystem arbeitet, kann nach Absprache später einsteigen.",
  },
  "Marketing und Vertrieb": {
    einstieg:
      "Kunden informieren sich und kaufen zunehmend online. Unternehmen jeder Größe brauchen deshalb Menschen, die Websites sichtbar machen, Kampagnen steuern, soziale Medien betreuen und Kundenbeziehungen pflegen. Viele dieser Aufgaben lassen sich auch als Quereinsteiger erlernen.",
    ziele: [
      "Online-Marketing mit Suchmaschinenoptimierung und Anzeigen",
      "Social-Media-Betreuung und Content-Erstellung",
      "Vertriebsinnendienst und digitaler Vertrieb",
      "Kundenbetreuung mit CRM-Systemen",
      "Marketingassistenz",
      "Aufbau der eigenen Kundengewinnung als Selbstständige",
    ],
    weg: "Für einen umfassenden Einstieg gibt es den Lehrgang Online Marketing Experte der FDM GmbH, der alle wichtigen Felder in einem Lehrgang verbindet. Wer nur einen Teilbereich braucht, wählt einzelne Module, zum Beispiel zu Social Media oder zum digitalen Vertrieb, und baut bei Bedarf darauf auf.",
  },
  "3D und Digital Design": {
    einstieg:
      "Dreidimensionale Darstellungen werden überall dort gebraucht, wo etwas gezeigt werden soll, bevor es gebaut ist: in Architektur, Produktentwicklung, Werbung und Spielen. Die Kurse führen in die gängigen Programme ein und zeigen den Weg vom Modell zum fertigen Bild oder zur interaktiven Anwendung.",
    ziele: [
      "3D-Modellierung und Visualisierung",
      "Architekturvisualisierung",
      "Produktdarstellung für Marketing und Vertrieb",
      "Animation",
      "Echtzeit-Anwendungen mit der Unreal Engine",
    ],
    weg: "Am Anfang steht die Wahl des Programms: Blender ist frei verfügbar und breit einsetzbar, 3ds Max und Cinema 4D sind in Architektur und Werbung verbreitet. Auf die Grundlagen folgen Vertiefungen, etwa Visualisierung oder die Arbeit mit der Unreal Engine. Erfahrung mit Gestaltung oder CAD ist hilfreich.",
  },
  "Künstliche Intelligenz": {
    einstieg:
      "KI-Werkzeuge verändern, wie Texte, Bilder, Auswertungen und Programme entstehen. In vielen Berufen wird erwartet, dass man sie sinnvoll und verantwortungsvoll einsetzen kann. Die Kurse vermitteln die Grundlagen und zeigen die Anwendung im Berufsalltag, vom Marketing bis zur Datenanalyse.",
    ziele: [
      "Einsatz von KI-Werkzeugen in Büro, Marketing und Gestaltung",
      "Prompt-Design für Text- und Bildanwendungen",
      "Einführung von KI im Unternehmen aus Sicht von Fach- und Führungskräften",
      "Einstieg in Data Science und Datenanalyse",
    ],
    weg: "Der Grundlagenkurs schafft das Verständnis dafür, was KI kann und wo ihre Grenzen liegen. Danach wählen Sie die Anwendung, die zu Ihrem Beruf passt. KI-Kurse sind eine gute Ergänzung zu einer fachlichen Weiterbildung, zum Beispiel im Marketing, in der Mediengestaltung oder in der IT.",
  },
  "Hotel und Gastronomie": {
    einstieg:
      "Hotels, Restaurants und Betriebe der Gemeinschaftsverpflegung suchen Personal für Service und Betrieb. Die Kurse vermitteln die Abläufe, die Warenkunde und den Umgang mit Gästen, die für die Arbeit in der Branche nötig sind.",
    ziele: [
      "Service und Bedienung im Restaurant",
      "Mitarbeit im Hotelbetrieb",
      "Tätigkeiten in Kantinen und Gemeinschaftsverpflegung",
      "Quereinstieg in die Gastronomie",
    ],
    weg: "Die Kurse richten sich besonders an Quereinsteiger und an Beschäftigte ohne Fachausbildung, die ihr Wissen absichern möchten. Sinnvoll ist die Verbindung mit einem Sprachkurs, wenn Sie Ihr Deutsch oder Englisch für den Umgang mit Gästen verbessern möchten.",
  },
  "Schutz und Sicherheit": {
    einstieg:
      "Im Bewachungsgewerbe ist die Qualifikation gesetzlich geregelt: Für viele Tätigkeiten ist die Sachkundeprüfung nach § 34a der Gewerbeordnung vorgeschrieben. Die Kurse bereiten auf diese Prüfung und auf weiterführende Abschlüsse vor.",
    ziele: [
      "Objektschutz und Empfangsdienste",
      "Kontrollgänge im öffentlichen Verkehrsraum und Einlasskontrollen",
      "Tätigkeiten als Geprüfte Schutz- und Sicherheitskraft (IHK)",
      "Aufstieg in Einsatzleitung und Objektleitung",
    ],
    weg: "Der übliche Einstieg ist die Vorbereitung auf die Sachkundeprüfung nach § 34a GewO. Wer bereits in der Branche arbeitet, kann mit der Vorbereitung auf die Geprüfte Schutz- und Sicherheitskraft den nächsten Schritt gehen. Für die Tätigkeit im Bewachungsgewerbe gelten außerdem persönliche Voraussetzungen, etwa die Zuverlässigkeit, die die zuständige Behörde prüft.",
  },
};

export const bereichMehr = (name: string) => BEREICHE[name] ?? null;
