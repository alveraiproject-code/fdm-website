# Bildauftrag Serie 3 für fdm-group.de

Dieser Auftrag richtet sich an ChatGPT. Er beschreibt genau, welche Bilder für die Website der FDM Akademie noch fehlen, in welchem Format sie geliefert werden und was dabei nicht verändert werden darf. Die Einbindung in den Code übernimmt danach Claude.

## Ausgangslage

Die Website hat 39 Motive in `public/bilder/` (Serie 1 und 2). Die Auswahl je Kurs steht in `src/lib/bilder.ts`, die Regeln dazu in [bildredaktion.md](bildredaktion.md). Eine Auswertung über alle 541 verschiedenen Kurse zeigt, wo ein Bild fehlt: Dort behilft sich die Seite mit einem Motiv, das die Tätigkeit des Kurses nur ungefähr trifft. Beispiele: Kita- und Pädagogikkurse zeigen das Bild des Leitbilds, Logistik- und SPS-Kurse eine Werkstattbesprechung, Cloud- und Sicherheitskurse alle dieselbe Netzwerkplanung.

Serie 3 schließt diese Lücken mit **24 neuen Motiven**.

## Was du lieferst

1. Genau 24 Bilddateien, eine je Zeile der Tabelle unten, mit genau dem angegebenen Dateinamen.
2. Einen Abschnitt „Serie 3“ am Ende von `docs/bildredaktion.md` mit Dateiname und Alt-Text je Motiv (die Alt-Texte aus der Tabelle; passe sie an, wenn das fertige Bild etwas anderes zeigt).

Mehr nicht. Bitte ändere **keine Code-Dateien**: nicht `src/lib/bilder.ts`, keine Seiten, keine Komponenten, keine Formulare, nicht `CLAUDE.md`. Die Zuordnung der Bilder zu den Kursen trägt Claude ein.

## Technische Vorgaben

| Punkt | Vorgabe |
| --- | --- |
| Format | WebP |
| Größe | 1280 × 853 Pixel (Seitenverhältnis 3:2, Querformat) |
| Dateigröße | 80 bis 160 KB je Bild |
| Ablage | `public/bilder/` |
| Dateiname | wie in der Tabelle: klein, Bindestriche, ohne Umlaute, Endung `.webp` |
| Branch | `preview/bildserie-3`, abgezweigt vom aktuellen `main` |
| Veröffentlichung | keine; kein Merge nach `main`, kein Push auf `main` |

Bestehende Dateien in `public/bilder/` nicht überschreiben, umbenennen oder löschen. Bilder werden mit einem Jahr Browser-Cache ausgeliefert; ein geändertes Motiv braucht deshalb immer einen neuen Dateinamen.

## Bildausschnitt

Die Website zeigt jedes Bild in drei Zuschnitten: 3:2 (Karten), 2:1 (Kursseiten) und 5:2 (schmale Streifen). Beschnitten wird oben und unten, die Mitte bleibt.

- Gesicht, Hände und der Gegenstand, um den es geht, liegen im mittleren waagerechten Band (etwa das mittlere Drittel der Bildhöhe).
- Oben und unten je rund ein Viertel der Höhe ohne Wichtiges: Decke, Fenster, Tischfläche.
- Kein Kopf am oberen Bildrand, keine wichtige Hand am unteren Bildrand.

## Bildsprache

Die neuen Motive sollen sich in Serie 2 einfügen (Beispiele: `finanzbuchhaltung-belege-ordnen.webp`, `cad-konstruktion-prototyp-vergleichen.webp`, `pflege-kommunikation-fallbesprechung.webp`).

- Fotorealistisch, Reportagestil, natürliches Tageslicht, helle Räume, warme und ruhige Farben.
- Erwachsene zwischen etwa 25 und 45 Jahren, die gerade etwas lernen oder tun. Frauen und Männer und unterschiedliche Herkunft über die Serie hinweg ausgewogen.
- Eine erkennbare Tätigkeit mit einem erkennbaren Gegenstand. Kein gestelltes Lächeln in die Kamera, niemand schaut in die Kamera.
- Alltagskleidung oder die übliche Berufskleidung des Fachs.
- Je Bild höchstens drei Personen im Vordergrund.

## Was nicht ins Bild darf

- **Keine Wahrzeichen und keine erkennbaren Orte.** Kein Fernsehturm, kein Dom, keine Skyline. Aus dem Fenster sieht man Bäume, Himmel oder unscharfe Wohnhäuser. (In Serie 2 musste der Berliner Fernsehturm aus vier Bildern retuschiert werden.)
- Keine lesbare Schrift, keine Logos, keine Markennamen, keine echten Programmoberflächen mit Herstellerlogo. Bildschirme zeigen neutrale Diagramme, Tabellen, Pläne oder Code ohne lesbaren Text.
- Keine Personen, die realen oder bekannten Menschen ähneln.
- Kinder nur von hinten oder unscharf im Hintergrund, nie als erkennbares Gesicht.
- Keine Patientinnen und Patienten mit erkennbarem Gesicht, keine Notfall- oder Krankheitsszenen.
- Keine Uniformen von Polizei oder Bundeswehr, keine Waffen.
- Keine Urkunden, Zertifikate, Bildungsgutscheine oder Bescheide mit lesbarem Inhalt.
- Keine typischen KI-Fehler: Hände mit falscher Fingerzahl, verzogene Gesichter im Hintergrund, schwebende Gegenstände. Solche Bilder neu erzeugen.

## Die 24 Motive

„Einsatz“ nennt die Kurse, bei denen das Motiv später steht. Das Bild soll zu allen genannten Kursen passen, nicht nur zum ersten.

### Pädagogik, Coaching und Sprachen

| Nr. | Dateiname | Motiv | Einsatz | Alt-Text |
| --- | --- | --- | --- | --- |
| 1 | `kita-assistenz-bastelangebot-vorbereiten.webp` | Eine Frau bereitet in einem hellen Gruppenraum einer Kita ein Bastelangebot vor: Papier, Stifte und Scheren auf einem niedrigen Tisch, kleine Stühle. Keine Kinder im Vordergrund. | Kita-Assistenz | Eine Frau bereitet an einem niedrigen Tisch in einer Kita Bastelmaterial vor. |
| 2 | `paedagogik-fallbesprechung-foerderplan.webp` | Zwei pädagogische Fachkräfte sitzen an einem Tisch und besprechen einen handschriftlichen Förderplan; im Hintergrund ein Regal mit Lernmaterial. | Pädagogische Zusatzqualifikationen, Schulbegleitung, Integrationsassistenz | Zwei Fachkräfte besprechen an einem Tisch einen Förderplan. |
| 3 | `coaching-gespraech-zielklaerung.webp` | Eine Coachin und ein Klient sitzen sich schräg gegenüber in zwei Sesseln; sie hält ein Klemmbrett, er erklärt etwas mit einer Handbewegung. | Systemisches Coaching, Coach für die berufliche Weiterbildung, Mediation | Eine Coachin hört einem Klienten zu, der sein Anliegen erklärt. |
| 4 | `ausbildereignung-unterweisung-arbeitsplatz.webp` | Ein Ausbilder zeigt einer Auszubildenden an einem Arbeitsplatz einen Arbeitsschritt; beide blicken auf das Werkstück oder den Bildschirm. | AEVO (Ausbildereignung), Online-Dozent/-in, Berufspädagoge | Ein Ausbilder erklärt einer Auszubildenden einen Arbeitsschritt. |
| 5 | `berufsbezogenes-deutsch-gespraech-ueben.webp` | Zwei Erwachsene üben am Tisch ein Gespräch aus dem Berufsalltag; vor ihnen Arbeitsblätter und ein Wörterbuch. Erwachsenenbildung, keine Bildkarten. | Berufsbezogenes Deutsch, Deutsch für Pflege, Deutsch für Hotel und Gastronomie | Zwei Erwachsene üben mit Arbeitsblättern ein Gespräch aus dem Berufsalltag. |
| 6 | `wirtschaftsenglisch-besprechung-ueben.webp` | Drei Erwachsene üben eine Besprechung: eine Person steht an einem Flipchart mit Diagramm (ohne lesbaren Text), zwei hören zu und machen Notizen. | Wirtschaftsenglisch, Englisch für den Beruf, Sprachzertifikat Englisch | Eine Frau stellt zwei Kollegen an einem Flipchart ein Diagramm vor. |

### IT und Büro

| Nr. | Dateiname | Motiv | Einsatz | Alt-Text |
| --- | --- | --- | --- | --- |
| 7 | `cloud-administration-dienste-ueberwachen.webp` | Ein Administrator sitzt vor zwei Monitoren mit neutralen Auslastungsdiagrammen und Statusanzeigen. | AWS-, Azure- und Cloud-Kurse, Microsoft-365-Administration | Ein Administrator prüft Auslastungsdiagramme auf zwei Monitoren. |
| 8 | `it-sicherheit-zugriffe-pruefen.webp` | Eine IT-Fachfrau betrachtet auf einem Monitor eine Liste mit Warnsymbolen und einem Schloss-Symbol; neben ihr ein Notizblock. | IT-Sicherheit, Cybersicherheit, Ethical Hacking, Security-Zertifizierungen | Eine IT-Fachfrau prüft Sicherheitswarnungen am Bildschirm. |
| 9 | `datenschutz-unterlagen-pruefen.webp` | Ein Mann vergleicht einen Aktenordner mit einer Checkliste; auf dem Tisch ein Aktenvernichter oder ein abschließbarer Schrank im Hintergrund. | Datenschutz, Fachkunde für Datenschutzbeauftragte | Ein Mann gleicht Unterlagen in einem Ordner mit einer Checkliste ab. |
| 10 | `office-tabellenkalkulation-auswerten.webp` | Eine Frau arbeitet am Laptop an einer Tabelle mit Balkendiagramm; daneben ein ausgedruckter Bericht. | Excel, Word, PowerPoint, Outlook, Access, Büroverwaltung, Schriftverkehr | Eine Frau wertet am Laptop eine Tabelle mit Diagramm aus. |
| 11 | `computergrundlagen-erste-schritte.webp` | Eine Frau um die 45 sitzt konzentriert am Laptop und folgt einer gedruckten Anleitung, die sie mit dem Finger verfolgt. | PC- und Windows-Grundlagen, Online-Grundlagen, Erwerb von Grundkompetenzen | Eine Frau folgt am Laptop Schritt für Schritt einer gedruckten Anleitung. |
| 12 | `webentwicklung-seitenentwurf-umsetzen.webp` | Ein Entwickler vergleicht einen skizzierten Seitenaufbau auf Papier mit der entstehenden Webseite auf dem Monitor (Flächen und Kästen, kein lesbarer Text). | HTML und CSS, Frontend, JavaScript, Webdesign | Ein Entwickler vergleicht eine Skizze mit dem Seitenaufbau am Bildschirm. |

### Technik und Logistik

| Nr. | Dateiname | Motiv | Einsatz | Alt-Text |
| --- | --- | --- | --- | --- |
| 13 | `lagerlogistik-wareneingang-erfassen.webp` | Eine Lagermitarbeiterin erfasst mit einem Handscanner einen Karton auf einer Palette; im Hintergrund Regale. | Lagerlogistik, Lagerverwaltung, Spedition, Supply-Chain-Management, Logistikmeister | Eine Lagermitarbeiterin erfasst einen Karton mit dem Handscanner. |
| 14 | `sps-technik-steuerung-programmieren.webp` | Ein Techniker steht mit einem Laptop vor einem geöffneten Schaltschrank mit Steuerung und Kabeln. | SPS-Technik, Automatisierung, Robotertechnik, Industriemeister Elektrotechnik | Ein Techniker programmiert mit dem Laptop eine Steuerung im Schaltschrank. |
| 15 | `cnc-fraesen-maschine-einrichten.webp` | Eine Zerspanungsmechanikerin richtet an einer CNC-Fräsmaschine ein Werkstück ein; sie blickt auf das Bedienfeld. | CNC-Kurse, Industriemeister Metall und Mechatronik | Eine Fachkraft richtet an einer CNC-Fräsmaschine ein Werkstück ein. |
| 16 | `elektrotechnik-messung-pruefen.webp` | Ein Elektriker misst mit einem Messgerät an einer Übungstafel mit Schaltern und Leitungen. | Elektrotechnik, elektrotechnisch unterwiesene Person, EPLAN | Ein Elektriker misst an einer Übungstafel eine Schaltung durch. |
| 17 | `facility-management-gebaeudetechnik-pruefen.webp` | Eine Frau in Arbeitsjacke prüft mit einem Tablet eine Heizungs- oder Lüftungsanlage in einem Technikraum. | Facility Management, Wärmepumpensysteme | Eine Fachkraft prüft mit einem Tablet eine Anlage im Technikraum. |
| 18 | `technische-redaktion-anleitung-erstellen.webp` | Ein Redakteur gleicht ein kleines Gerät auf dem Tisch mit einer bebilderten Anleitung auf dem Bildschirm ab. | Technische Redaktion | Ein Redakteur gleicht ein Gerät mit seiner Anleitung am Bildschirm ab. |

### Kaufmännisch, Personal, Gesundheit und Umwelt

| Nr. | Dateiname | Motiv | Einsatz | Alt-Text |
| --- | --- | --- | --- | --- |
| 19 | `aufstiegsfortbildung-lerngruppe-pruefungsvorbereitung.webp` | Drei Berufstätige lernen gemeinsam an einem Tisch mit Lehrbüchern, Karteikarten und Laptop. | Fachwirte, Betriebswirte und Meister (IHK), BWL, Business Skills | Drei Berufstätige bereiten sich gemeinsam auf eine Prüfung vor. |
| 20 | `immobilien-grundriss-besprechen.webp` | Eine Immobilienfachfrau zeigt einem Kunden einen Grundriss auf dem Tisch; daneben ein Hausmodell oder Schlüssel. | Immobilienmakler, Immobilienverwalter, Immobilienbewerter, Immobilienfachwirt | Eine Immobilienfachfrau erläutert einem Kunden einen Grundriss. |
| 21 | `personalwesen-bewerbungsgespraech-fuehren.webp` | Eine Personalerin führt ein Bewerbungsgespräch; vor ihr eine Mappe, der Bewerber ist von schräg hinten zu sehen. | Personalwesen, Recruiting, Recht in der Personalarbeit, Personalfachkaufleute | Eine Personalerin führt mit einem Bewerber ein Gespräch. |
| 22 | `arztpraxis-empfang-terminplanung.webp` | Eine medizinische Fachangestellte arbeitet am Empfang einer Praxis am Computer; im Hintergrund ein leeres Wartezimmer. | Arztpraxis- und Zahnarztpraxis-Management, Abrechnung, medizinische Terminologie | Eine medizinische Fachangestellte plant am Empfang einer Praxis Termine. |
| 23 | `seniorenbetreuung-aktivierung-gespraech.webp` | Eine Betreuungskraft sitzt mit einer älteren Frau am Tisch bei einem Gedächtnisspiel oder Fotoalbum; die ältere Frau ist von der Seite oder schräg hinten zu sehen. | Betreuungskraft nach §§ 43b, 53b SGB XI, Seniorenbetreuung, Demenz | Eine Betreuungskraft sieht mit einer älteren Frau ein Fotoalbum an. |
| 24 | `umweltmanagement-betriebsbegehung-pruefen.webp` | Zwei Fachkräfte gehen mit Klemmbrett durch einen Betriebshof mit getrennten Wertstoffbehältern oder einer begrünten Fläche. | Umweltmanagement, Nachhaltigkeit, Klimaschutz, Umweltrecht, Umweltauditor | Zwei Fachkräfte prüfen bei einer Begehung den Betriebshof. |

## Prüfung vor der Abgabe

- [ ] Genau 24 neue Dateien in `public/bilder/`, jede mit dem Namen aus der Tabelle.
- [ ] Jede Datei ist WebP, 1280 × 853 Pixel, zwischen 80 und 160 KB.
- [ ] Keine zwei Dateien sind identisch; keine bestehende Datei wurde verändert.
- [ ] Jedes Bild funktioniert beschnitten auf 2:1 und 5:2: Gesicht und Gegenstand bleiben sichtbar.
- [ ] Kein Wahrzeichen, keine lesbare Schrift, kein Logo, kein erkennbares Kindergesicht.
- [ ] Hände, Gesichter und Hintergrundpersonen ohne Bildfehler.
- [ ] Der Alt-Text in `docs/bildredaktion.md` beschreibt, was wirklich zu sehen ist.
- [ ] Außer den 24 Bildern und `docs/bildredaktion.md` ist keine Datei geändert.

## Übergabe

Nenne nach der Abgabe den Branch und den Commit. Weicht ein Bild vom beschriebenen Motiv ab oder ließ sich ein Motiv nicht sauber erzeugen, schreibe das dazu. Claude prüft danach die Bilder, trägt die Zuordnung in `src/lib/bilder.ts` ein und veröffentlicht nach Freigabe durch Dursun.
