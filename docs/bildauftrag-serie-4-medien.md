# Bildauftrag Serie 4: Medien, Design und 3D

Nachauftrag an ChatGPT. Er ergänzt [Serie 3](bildauftrag-serie-3.md) um **11 Motive** für die Fachbereiche „Medien und Design“ und „3D und Digital Design“. Die Einbindung in den Code übernimmt danach Claude.

## Warum dieser Auftrag

Nach Serie 3 hat fast jede Kursgruppe ein eigenes Bild. Zwei Häufungen sind geblieben:

- **Medien und Design:** 33 verschiedene Kurse von Photoshop über Videoschnitt bis UX-Design zeigen alle dasselbe Motiv (`mediendesign-farbkonzept-layout.webp`, eine Designerin an einer Pinnwand mit Farbmustern).
- **3D und Digital Design:** 18 Kurse von Character-Animation bis Digital Fashion zeigen alle dasselbe Motiv (`3d-modellierung-materialstudie.webp`, ein Gestalter mit Materialproben und einem gerenderten Stuhl).

Die beiden vorhandenen Bilder bleiben und stehen künftig nur noch bei den Kursen, zu denen sie passen (Gestaltungsgrundlagen, Farbe, Layout; 3D-Grundlagen und Materialien).

## Was du lieferst

1. Genau 11 Bilddateien, eine je Zeile der Tabellen unten, mit genau dem angegebenen Dateinamen.
2. Einen Abschnitt „Serie 4“ am Ende von `docs/bildredaktion.md` mit Dateiname und Alt-Text je Motiv (die Alt-Texte aus den Tabellen; passe sie an, wenn das fertige Bild etwas anderes zeigt).

Mehr nicht. Bitte ändere **keine Code-Dateien**: nicht `src/lib/bilder.ts`, keine Seiten, keine Komponenten, keine Formulare, nicht `CLAUDE.md`.

## Technische Vorgaben

| Punkt | Vorgabe |
| --- | --- |
| Format | WebP |
| Größe | 1280 × 853 Pixel (Seitenverhältnis 3:2, Querformat) |
| Dateigröße | 80 bis 160 KB je Bild |
| Ablage | `public/bilder/` |
| Dateiname | wie in der Tabelle: klein, Bindestriche, ohne Umlaute, Endung `.webp` |
| Branch | `preview/bildserie-4`, abgezweigt vom aktuellen `main` |
| Veröffentlichung | keine; kein Merge nach `main`, kein Push auf `main` |

Bestehende Dateien in `public/bilder/` nicht überschreiben, umbenennen oder löschen.

## Bildausschnitt

Die Website beschneidet jedes Bild oben und unten auf 2:1 und 5:2. Gesicht, Hände und der Bildschirm oder Gegenstand, um den es geht, liegen deshalb im mittleren waagerechten Band; oben und unten bleibt je rund ein Viertel der Höhe ohne Wichtiges.

## Bildsprache

Wie Serie 3 (Beispiele: `webentwicklung-seitenentwurf-umsetzen.webp`, `technische-redaktion-anleitung-erstellen.webp`): fotorealistisch, Reportagestil, natürliches Tageslicht, helle Räume, Erwachsene zwischen etwa 25 und 45 Jahren bei einer erkennbaren Tätigkeit, niemand schaut in die Kamera. Frauen und Männer und unterschiedliche Herkunft über die Serie hinweg ausgewogen.

**Besonderheit dieser Serie:** In Gestaltungsberufen ist der Bildschirm der Arbeitsplatz. Damit sich die elf Bilder trotzdem klar unterscheiden, zeigt jedes neben dem Bildschirm ein **eigenes Werkzeug oder Arbeitsergebnis**: Grafiktablett, Proofausdruck, Kopfhörer, Smartphone-Prototyp, Stoffmuster. Der Bildschirminhalt ist groß und eindeutig genug, dass man die Tätigkeit auch in kleiner Darstellung erkennt (Zeitleiste, Vektorpfade, Drahtgitterfigur).

## Was nicht ins Bild darf

- Keine Wahrzeichen und keine erkennbaren Orte; aus dem Fenster sieht man Bäume, Himmel oder unscharfe Wohnhäuser.
- **Keine Programmoberflächen echter Hersteller**, keine Logos, keine Markennamen, keine lesbare Schrift. Die Kurse nennen Adobe, Figma, WordPress, Blender, Unreal Engine und andere; im Bild erscheint davon nichts. Bildschirme zeigen neutrale, erfundene Oberflächen mit Werkzeugleisten ohne Beschriftung.
- Keine Motive, Figuren oder Werke, die bekannten Filmen, Spielen, Marken oder Künstlern ähneln. Gezeichnete Figuren und 3D-Charaktere sind schlicht und frei erfunden.
- Keine Personen, die realen oder bekannten Menschen ähneln; auf Fotos im Bild (Retusche, Videoschnitt) nur Landschaften, Gegenstände oder Personen ohne erkennbares Gesicht.
- Keine typischen KI-Fehler: Hände mit falscher Fingerzahl, verzogene Gesichter, unmögliche Kabel oder Stifte. Solche Bilder neu erzeugen.

## Die 11 Motive

### Medien und Design (8)

| Nr. | Dateiname | Motiv | Einsatz | Alt-Text |
| --- | --- | --- | --- | --- |
| 1 | `bildbearbeitung-foto-retuschieren.webp` | Eine Bildbearbeiterin retuschiert am Monitor ein Landschafts- oder Produktfoto; man sieht eine Vorher-Nachher-Teilung des Bilds. Neben der Tastatur liegt eine Kamera. | Photoshop (Basics, Aufbaukurs), KI-Kompetenz für Kreativberufe: Kamerabild | Eine Bildbearbeiterin vergleicht am Monitor ein Foto vor und nach der Retusche. |
| 2 | `vektorgrafik-illustration-zeichnen.webp` | Ein Illustrator zeichnet mit dem Stift auf einem Grafiktablett; auf dem Monitor entsteht eine schlichte Vektorgrafik mit sichtbaren Ankerpunkten (zum Beispiel ein Blatt oder ein einfaches Symbol). | Illustrator, Charakterdesign, vektorbasiertes Design von Symbolen | Ein Illustrator zeichnet mit dem Grafiktablett eine Vektorgrafik. |
| 3 | `printlayout-broschuere-pruefen.webp` | Eine Mediengestalterin hält einen Proofausdruck einer Broschüre neben den Monitor mit dem Seitenlayout und vergleicht beide; Textzeilen sind nur als graue Balken zu sehen. | InDesign (alle Kurse), barrierefreie PDF-Dateien, Grafik und Design für Print | Eine Mediengestalterin vergleicht einen Ausdruck mit dem Seitenlayout am Bildschirm. |
| 4 | `videoschnitt-zeitleiste-bearbeiten.webp` | Ein Cutter mit Kopfhörern um den Hals arbeitet an einem Schnittplatz; der Monitor zeigt unten eine farbige Zeitleiste mit Spuren und oben ein Vorschaubild einer Landschaft. | Premiere, KI-Kompetenz für Kreativberufe: Kino und Klangwelt | Ein Cutter bearbeitet an einem Schnittplatz die Zeitleiste eines Videos. |
| 5 | `motion-design-animation-anlegen.webp` | Eine Motion-Designerin legt eine Animation an; der Monitor zeigt eine einfache Form in mehreren Bewegungsphasen und darunter Bewegungskurven. Auf dem Tisch liegen Skizzen der Bewegungsphasen. | After Effects, Animate, Charakter-Animation, Motion Graphics | Eine Motion-Designerin legt am Bildschirm die Bewegungsphasen einer Animation an. |
| 6 | `ux-design-prototyp-testen.webp` | Zwei Personen testen einen App-Entwurf: Eine hält ein Smartphone mit einem schlichten Prototyp, die andere notiert Beobachtungen; auf dem Tisch liegen Papierskizzen von Bildschirmen. | UI- und UX-Design mit Prototyping, User Experience im Web | Zwei Personen testen einen App-Entwurf auf dem Smartphone und machen Notizen. |
| 7 | `website-inhalte-pflegen.webp` | Ein Mann pflegt am Laptop eine Website: links eine schmale Verwaltungsleiste ohne Schrift, rechts die Seite mit Bildflächen und Textbalken. Daneben ein Tablet mit derselben Seite in schmaler Ansicht. | WordPress und CMS, Aufbau von Websites, Onlineshops, Bilddatenbanken | Ein Mann bearbeitet am Laptop die Inhalte einer Website und prüft sie auf dem Tablet. |
| 8 | `ki-kreativarbeit-bildideen-auswaehlen.webp` | Eine Gestalterin sichtet auf einem großen Monitor ein Raster aus neun unterschiedlichen Bildentwürfen desselben Motivs (zum Beispiel ein Stillleben) und markiert einen davon; daneben ein Skizzenbuch. | KI-Kompetenz für Kreativberufe: Konzept, KI-Tools für Grafik, Design und Werbung, Content-Produktion | Eine Gestalterin wählt am Monitor aus mehreren Bildentwürfen einen aus. |

### 3D und Digital Design (3)

| Nr. | Dateiname | Motiv | Einsatz | Alt-Text |
| --- | --- | --- | --- | --- |
| 9 | `3d-animation-figur-posieren.webp` | Ein 3D-Artist bringt am Monitor eine schlichte, frei erfundene Figur mit sichtbarem Skelett aus Gelenkpunkten in eine Pose; auf dem Tisch steht eine hölzerne Gliederpuppe als Vorlage. | Character-Animation (Blender, Cinema 4D), Motion Graphics | Ein 3D-Artist stellt am Monitor die Pose einer Figur ein, daneben steht eine Gliederpuppe. |
| 10 | `echtzeit-3d-szene-begehen.webp` | Eine Entwicklerin bewegt sich am Monitor durch einen hell ausgeleuchteten, virtuellen Innenraum (Wohnraum oder Ausstellungsraum); sie hält einen Gamecontroller oder die Maus. | Realtime-Anwendungsentwicklung, Projektvisualisierung | Eine Entwicklerin bewegt sich am Monitor durch einen virtuellen Innenraum. |
| 11 | `digital-fashion-kleidung-virtuell.webp` | Eine Modedesignerin vergleicht ein Stoffmuster in der Hand mit einem virtuellen Kleidungsstück an einer gesichtslosen Schneiderbüste auf dem Monitor; auf dem Tisch Schnittmuster und Maßband. | Digital Fashion: Virtual Garments | Eine Modedesignerin vergleicht ein Stoffmuster mit einem virtuellen Kleidungsstück am Monitor. |

## Prüfung vor der Abgabe

- [ ] Genau 11 neue Dateien in `public/bilder/`, jede mit dem Namen aus der Tabelle.
- [ ] Jede Datei ist WebP, 1280 × 853 Pixel, zwischen 80 und 160 KB.
- [ ] Keine zwei Dateien sind identisch; keine bestehende Datei wurde verändert.
- [ ] Die elf Bilder unterscheiden sich auf den ersten Blick: anderes Werkzeug, anderer Bildschirminhalt, andere Person.
- [ ] Jedes Bild funktioniert beschnitten auf 2:1 und 5:2.
- [ ] Kein Herstellerlogo, keine echte Programmoberfläche, keine lesbare Schrift, kein Wahrzeichen.
- [ ] Keine Figur und kein Motiv erinnert an bekannte Filme, Spiele, Marken oder reale Personen.
- [ ] Hände, Stifte, Kabel und Gesichter ohne Bildfehler.
- [ ] Außer den 11 Bildern und `docs/bildredaktion.md` ist keine Datei geändert.

## Übergabe

Nenne nach der Abgabe den Branch und den Commit. Weicht ein Bild vom beschriebenen Motiv ab oder ließ sich ein Motiv nicht sauber erzeugen, schreibe das dazu. Claude prüft danach die Bilder, trägt die Zuordnung in `src/lib/bilder.ts` ein und veröffentlicht.
