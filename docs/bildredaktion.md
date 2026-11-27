# Bildredaktion der FDM Akademie

Diese Anleitung gilt für die öffentlichen Seiten von fdm-group.de. Die Bildauswahl ist in `src/lib/bilder.ts` hinterlegt. Alle 20 neuen WebP-Dateien liegen in `public/bilder/`. Die Bildkomponente ist `src/components/Themenbild.tsx`.

## Zuordnung der 20 neuen Motive

Bei Kursen nennt die Tabelle eine konkrete Beispielseite. Weitere fachlich passende Kurse verwenden dasselbe Motiv. Die Kursbilder stehen im Inhaltsbereich nach den Kursfakten. Bei Ratgeberartikeln steht die Illustration im Artikel nach dem Inhaltsverzeichnis. Karten verweisen mit dem Artikelmotiv auf denselben Beitrag.

| Bilddatei | Zielseite oder Beispiel | Einsatz und Alternativtext |
| --- | --- | --- |
| [softwareentwicklung-programm-pruefen.webp](../public/bilder/softwareentwicklung-programm-pruefen.webp) | Python, Grundlagen · `/weiterbildung/VZ-LF-E-9901` | Eine Lernende prüft ein Programm am Bildschirm. |
| [sprachkurs-dialog-uebungskarten.webp](../public/bilder/sprachkurs-dialog-uebungskarten.webp) | Wirtschaftsenglisch - Advanced Business English B2.2 · `/weiterbildung/VZ-S-2123` | Zwei junge Erwachsene üben einen Dialog mit Bildkarten. |
| [finanzbuchhaltung-belege-ordnen.webp](../public/bilder/finanzbuchhaltung-belege-ordnen.webp) | Finanzbuchhaltung mit DATEV, Basics · `/weiterbildung/VZ-K-2812` | Ein Lernender ordnet Belege neben Taschenrechner und Buchungsunterlagen. |
| [cad-konstruktion-prototyp-vergleichen.webp](../public/bilder/cad-konstruktion-prototyp-vergleichen.webp) | SolidWorks®, Basics · `/weiterbildung/VZ-G-493` | Eine Konstrukteurin vergleicht einen Prototyp mit dem CAD-Modell. |
| [pflege-kommunikation-fallbesprechung.webp](../public/bilder/pflege-kommunikation-fallbesprechung.webp) | Aufbaukurs Pflegeberater/in nach § 45 SGB XI · `/weiterbildung/VZ-P-2724` | Zwei Pflegekräfte besprechen gemeinsam einen Übungsfall. |
| [mediendesign-farbkonzept-layout.webp](../public/bilder/mediendesign-farbkonzept-layout.webp) | Adobe® InDesign®, Basics · `/weiterbildung/VZ-X-425` | Eine Designerin stimmt Farbmuster und Layoutentwürfe an einer Pinnwand ab. |
| [energieberatung-waermebild-gebaeude.webp](../public/bilder/energieberatung-waermebild-gebaeude.webp) | Energieeffizienz-Experte/-in - Basismodul Wohngebäude für andere Berufsgruppen · `/weiterbildung/VZ-U-3561` | Ein junger Mann untersucht eine Gebäudefassade mit einer Wärmebildkamera. |
| [personalentwicklung-teamworkshop-moderieren.webp](../public/bilder/personalentwicklung-teamworkshop-moderieren.webp) | Agiles Arbeiten mit Scrum und OKR · `/weiterbildung/VZ-M-4641` | Eine Moderatorin und ein Kollege ordnen Themen an einer Workshoptafel. |
| [qualitaetssicherung-messschieber-werkstueck.webp](../public/bilder/qualitaetssicherung-messschieber-werkstueck.webp) | Qualitätsmanagement Grundlagen - Qualitätsfachkraft (TÜV) · `/weiterbildung/VZ-Q-3253` | Ein Techniker prüft mit einem Messschieber die Maße eines Werkstücks. |
| [online-marketing-content-storyboard.webp](../public/bilder/online-marketing-content-storyboard.webp) | Online Marketing Experte (m/w/d) · `/weiterbildung/FDM-OME-VZ` | Zwei Lernende wählen Bildmotive für das Storyboard einer Produktkampagne aus. |
| [3d-modellierung-materialstudie.webp](../public/bilder/3d-modellierung-materialstudie.webp) | 3D / CGI Basics der 3D-Software Autodesk 3Ds Max · `/weiterbildung/VZ-B-3881` | Ein 3D-Gestalter vergleicht Materialproben mit einem digital gerenderten Stuhl. |
| [datenanalyse-punktdiagramme-vergleichen.webp](../public/bilder/datenanalyse-punktdiagramme-vergleichen.webp) | Data-Science kompakt – Der Weg von Rohdaten zum Erkenntnisgewinn · `/weiterbildung/VZ-KI-4489` | Eine Lernende vergleicht zwei Punktdiagramme bei einer Datenanalyse. |
| [gastgewerbe-veranstaltung-tischplanung.webp](../public/bilder/gastgewerbe-veranstaltung-tischplanung.webp) | Bedienung und Service in der Hotellerie und Gastronomie · `/weiterbildung/VZ-H-3721` | Zwei Mitarbeitende im Gastgewerbe planen die Tischanordnung für eine Veranstaltung. |
| [objektschutz-zutrittskontrolle-empfang.webp](../public/bilder/objektschutz-zutrittskontrolle-empfang.webp) | Qualifizierung im Sicherheitsbereich - Objektschutz und Bewachung (IHK) · `/weiterbildung/VZ-D-593` | Eine Mitarbeiterin am Empfang erklärt einem Besucher die Nutzung seiner Zutrittskarte. |
| [bildungsgutschein-antrag-unterlagen-ordnen.webp](../public/bilder/bildungsgutschein-antrag-unterlagen-ordnen.webp) | bildungsgutschein-beantragen · `/ratgeber/bildungsgutschein-beantragen` | Ein junger Mann sortiert Kursunterlagen für seinen Beratungstermin. |
| [weiterbildungsberatung-gespraech-vorbereiten.webp](../public/bilder/weiterbildungsberatung-gespraech-vorbereiten.webp) | gespraech-arbeitsagentur-weiterbildung · `/ratgeber/gespraech-arbeitsagentur-weiterbildung` | Eine Frau übt mit einem Gesprächspartner, ihr Weiterbildungsziel zu erklären. |
| [weiterbildung-wochenplan-lernzeiten.webp](../public/bilder/weiterbildung-wochenplan-lernzeiten.webp) | vollzeit-oder-teilzeit-weiterbildung · `/ratgeber/vollzeit-oder-teilzeit-weiterbildung` | Ein Lernender plant seine Lernzeiten mit farbigen Blöcken in einem Wochenplan. |
| [online-unterricht-rueckfrage-uebung.webp](../public/bilder/online-unterricht-rueckfrage-uebung.webp) | online-weiterbildung-ablauf · `/ratgeber/online-weiterbildung-ablauf` | Eine Teilnehmerin stellt im Online-Unterricht eine Frage zu ihrer Übung. |
| [akademie-berufliche-weiterbildung-lernprojekt.webp](../public/bilder/akademie-berufliche-weiterbildung-lernprojekt.webp) | ueber-uns · `/ueber-uns` | Header von „Über uns“. Zwei Lernende betrachten gemeinsam das Ergebnis einer Übung auf einem Tablet. |
| [lernfeedback-weiterbildung-gemeinsam.webp](../public/bilder/lernfeedback-weiterbildung-gemeinsam.webp) | leitbild · `/leitbild` | Abschnitt „Unsere Werte“. Zwei Lernende geben einander Rückmeldung zu einer bearbeiteten Aufgabe. |

## So wählt Claude ein Bild aus

1. **Fachbereich und Kurs erfüllen unterschiedliche Aufgaben.** Die Übersichtsseiten behalten ihre etablierten Fachbereichsmotive. Die Kursdetailseite ruft `kursMotiv(kurs.titel, kurs.fachbereich_name)` auf. Spezifische Titelregeln stehen vor dem allgemeinen Kursbild eines Fachbereichs. Der Zielgruppen-Zusatz im Kurstitel wird bei der Auswahl ausgeklammert. Für neue Kursreihen zuerst Titel, Inhalt und bestehende Regeln abgleichen.
2. **Dasselbe Fachgebiet kann mehrere Tätigkeiten zeigen.** Bei Programmierung ist die Arbeit am Code zu sehen, bei Netzwerkkursen die Netzwerktopologie. Im Marketing zeigen Contentkurse ein Storyboard, SEO-Kurse die Kampagnenauswertung. Die Auswahl ist reproduzierbar. Voll- und Teilzeit dürfen dieselbe praktische Tätigkeit zeigen.
3. **Kursketten zeigen die tatsächlichen Lernstufen.** Auf der Detailseite steht die vorhandene nummerierte Stufenliste im Mittelpunkt. Ein weiteres großformatiges Fachbereichsfoto würde sich beim Wechsel zu den Modulen wiederholen.
4. **Jeder der zehn Ratgeber hat ein unterscheidbares Motiv.** Bei neuen Artikeln den Slug explizit in der Bildzuordnung berücksichtigen. Vorschaukarte, Artikelbild und strukturierte Artikeldaten sollen dasselbe Thema erkennbar machen. Das Leitbild und „Über uns“ haben jeweils ein eigenes Bild. Die Kontaktszene gehört zur Kontaktseite.
5. **Dateiname und Alt-Text beschreiben das sichtbare Motiv auf Deutsch.** Dateinamen sind kleingeschrieben, mit Bindestrichen, ASCII-Umschreibung und `.webp`. Informationsbilder erhalten einen kurzen beschreibenden Alt-Text. Auf verlinkten Karten mit bereits aussagekräftiger Beschriftung bleibt das Vorschaubild dekorativ.
6. **Die Motive sind KI-generierte Symbolbilder.** Sie illustrieren Lern- und Berufssituationen. Für namentliche Porträts, Teilnehmerstimmen, Schulungsräume oder dokumentierte Arbeitsergebnisse sind freigegebene Originalaufnahmen erforderlich.
7. **Vor dem Merge prüfen:** exakt 20 neue Assets in dieser Serie, jede Datei unter ihrem eigenen Namen erreichbar, keine identischen Dateien, passende Ausschnitte bei 3:2 und 2:1, korrekte Textalternative. Beispielseiten in der Vercel-Vorschau öffnen. Bei neuen Regeln zusätzlich einen ähnlichen Kurstitel mit anderer Tätigkeit prüfen.

## Internationale Referenzen

- Die University of Glasgow beschreibt einen natürlichen Reportagestil, eine fachlich passende Umgebung und sichtbare Interaktion. Für FDM bedeutet das etwa, dass beim Gespräch zur Kurswahl die Notizkarte und das Gegenüber erkennbar sind. [University of Glasgow · Photography: People](https://www.gla.ac.uk/myglasgow/staff/brandtoolkit/resources/photographyandvideo/photography/people/)
- Monash University unterscheidet Kampagnenporträts und spontane Szenen des Studienalltags. Für FDM eignen sich besonders kleine Momente, an denen Können erkennbar wird, etwa der Abgleich eines Bauteils mit einem CAD-Modell. [Monash University · Photography](https://www.monash.edu/brandbook/brand-elements/photography)
- Die Open University zeigt anhand ihrer Studierendengeschichten, wie sich Lernen mit Arbeit und Alltag verbindet. Das Wochenplanmotiv greift diesen Alltag auf. [The Open University · International student stories](https://www.open.ac.uk/international-students/student-stories/)

## Nachträge bei der Übernahme (27.11.2026)

Die Regeln in `kursMotive` wurden bei der Übernahme erweitert, weil das allgemeine Kursbild eines Fachbereichs bei vielen Kursen eine falsche Tätigkeit zeigte (zum Beispiel Programmieren bei Cloud- und Bürokursen, ein CAD-Modell bei Logistik- und SPS-Kursen, Belege kontieren bei Fachwirten). Es gilt:

- Die erste passende Regel gewinnt; enge Regeln stehen vor weiten.
- „in deutscher und englischer Sprache“ und „in Deutschland“ im Titel machen einen Kurs nicht zum Sprachkurs.
- Pädagogik, Kita und Schulbegleitung zeigen das Motiv „Rückmeldung zu einer Aufgabe“, Coaching und Mediation das Gesprächsmotiv.
- Cloud, Administration und IT-Sicherheit zeigen die Netzwerkplanung, Büro- und Anwenderkurse den digitalen Lernplatz.
- Lager, Logistik, SPS und Meisterkurse zeigen die Planung im Betrieb, CNC und Metall das Werkstück mit Messschieber.
- Nach jeder Änderung an den Regeln die Verteilung über den ganzen Katalog prüfen: Kein Motiv soll bei mehr als etwa 45 verschiedenen Kursen stehen.
- Die Motive sollen keinen bestimmten Ort zeigen. In vier Bildern war im Hintergrund der Berliner Fernsehturm zu sehen; er wurde retuschiert. Neue Motive ohne erkennbare Wahrzeichen anlegen.
- Bilder werden mit einem Jahr Browser-Cache ausgeliefert. Wird ein Motiv inhaltlich geändert, bekommt es einen neuen Dateinamen; sonst sehen wiederkehrende Besucher weiter die alte Fassung.

## Serie 3

| Dateiname | Alt-Text |
| --- | --- |
| [kita-assistenz-bastelangebot-vorbereiten.webp](../public/bilder/kita-assistenz-bastelangebot-vorbereiten.webp) | Eine Frau bereitet an einem niedrigen Tisch in einer Kita Bastelmaterial vor. |
| [paedagogik-fallbesprechung-foerderplan.webp](../public/bilder/paedagogik-fallbesprechung-foerderplan.webp) | Zwei Fachkräfte besprechen an einem Tisch einen Förderplan. |
| [coaching-gespraech-zielklaerung.webp](../public/bilder/coaching-gespraech-zielklaerung.webp) | Eine Coachin hört einem Klienten zu, der sein Anliegen erklärt. |
| [ausbildereignung-unterweisung-arbeitsplatz.webp](../public/bilder/ausbildereignung-unterweisung-arbeitsplatz.webp) | Ein Ausbilder erklärt einer Auszubildenden einen Arbeitsschritt. |
| [berufsbezogenes-deutsch-gespraech-ueben.webp](../public/bilder/berufsbezogenes-deutsch-gespraech-ueben.webp) | Zwei Erwachsene üben mit Arbeitsblättern ein Gespräch aus dem Berufsalltag. |
| [wirtschaftsenglisch-besprechung-ueben.webp](../public/bilder/wirtschaftsenglisch-besprechung-ueben.webp) | Eine Frau stellt zwei Kollegen an einem Flipchart ein Diagramm vor. |
| [cloud-administration-dienste-ueberwachen.webp](../public/bilder/cloud-administration-dienste-ueberwachen.webp) | Ein Administrator prüft Auslastungsdiagramme auf zwei Monitoren. |
| [it-sicherheit-zugriffe-pruefen.webp](../public/bilder/it-sicherheit-zugriffe-pruefen.webp) | Eine IT-Fachfrau prüft Sicherheitswarnungen am Bildschirm. |
| [datenschutz-unterlagen-pruefen.webp](../public/bilder/datenschutz-unterlagen-pruefen.webp) | Ein Mann gleicht Unterlagen in einem Ordner mit einer Checkliste ab. |
| [office-tabellenkalkulation-auswerten.webp](../public/bilder/office-tabellenkalkulation-auswerten.webp) | Eine Frau wertet am Laptop eine Tabelle mit Diagramm aus. |
| [computergrundlagen-erste-schritte.webp](../public/bilder/computergrundlagen-erste-schritte.webp) | Eine Frau folgt am Laptop Schritt für Schritt einer gedruckten Anleitung. |
| [webentwicklung-seitenentwurf-umsetzen.webp](../public/bilder/webentwicklung-seitenentwurf-umsetzen.webp) | Ein Entwickler vergleicht eine Skizze mit dem Seitenaufbau am Bildschirm. |
| [lagerlogistik-wareneingang-erfassen.webp](../public/bilder/lagerlogistik-wareneingang-erfassen.webp) | Eine Lagermitarbeiterin erfasst einen Karton mit dem Handscanner. |
| [sps-technik-steuerung-programmieren.webp](../public/bilder/sps-technik-steuerung-programmieren.webp) | Ein Techniker programmiert mit dem Laptop eine Steuerung im Schaltschrank. |
| [cnc-fraesen-maschine-einrichten.webp](../public/bilder/cnc-fraesen-maschine-einrichten.webp) | Eine Fachkraft richtet an einer CNC-Fräsmaschine ein Werkstück ein. |
| [elektrotechnik-messung-pruefen.webp](../public/bilder/elektrotechnik-messung-pruefen.webp) | Ein Elektriker misst an einer Übungstafel eine Schaltung durch. |
| [facility-management-gebaeudetechnik-pruefen.webp](../public/bilder/facility-management-gebaeudetechnik-pruefen.webp) | Eine Fachkraft prüft mit einem Tablet eine Anlage im Technikraum. |
| [technische-redaktion-anleitung-erstellen.webp](../public/bilder/technische-redaktion-anleitung-erstellen.webp) | Ein Redakteur gleicht ein Gerät mit seiner Anleitung am Bildschirm ab. |
| [aufstiegsfortbildung-lerngruppe-pruefungsvorbereitung.webp](../public/bilder/aufstiegsfortbildung-lerngruppe-pruefungsvorbereitung.webp) | Drei Berufstätige bereiten sich gemeinsam auf eine Prüfung vor. |
| [immobilien-grundriss-besprechen.webp](../public/bilder/immobilien-grundriss-besprechen.webp) | Eine Immobilienfachfrau erläutert einem Kunden einen Grundriss. |
| [personalwesen-bewerbungsgespraech-fuehren.webp](../public/bilder/personalwesen-bewerbungsgespraech-fuehren.webp) | Eine Personalerin führt mit einem Bewerber ein Gespräch. |
| [arztpraxis-empfang-terminplanung.webp](../public/bilder/arztpraxis-empfang-terminplanung.webp) | Eine medizinische Fachangestellte plant am Empfang einer Praxis Termine. |
| [seniorenbetreuung-aktivierung-gespraech.webp](../public/bilder/seniorenbetreuung-aktivierung-gespraech.webp) | Eine Betreuungskraft sieht mit einer älteren Frau ein Fotoalbum an. |
| [umweltmanagement-betriebsbegehung-pruefen.webp](../public/bilder/umweltmanagement-betriebsbegehung-pruefen.webp) | Zwei Fachkräfte prüfen bei einer Begehung den Betriebshof. |

### Einbindung der Serie 3 (27.11.2026)

Die 24 Motive stehen in `src/lib/bilder.ts` unter Schlüsseln der Form `thema/<name>` (zum Beispiel `thema/kita`, `thema/cloud`, `thema/lager`) und werden über die Regeln in `kursMotive` den Kursen zugeordnet. Damit ersetzen sie die Behelfsmotive aus dem Nachtrag oben: Pädagogik, Coaching, Cloud, Büro, Logistik, SPS, CNC, Aufstiegsfortbildungen, Personal, Arztpraxis, Seniorenbetreuung und Umweltmanagement haben jetzt ein eigenes Bild. Nach der Einbindung steht kein Motiv bei mehr als 35 verschiedenen Kursen. Der Auftrag an die Bildlieferung steht in [bildauftrag-serie-3.md](bildauftrag-serie-3.md).
