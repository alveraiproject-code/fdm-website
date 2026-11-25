// =============================================================
// lib/ratgeber.ts — Ratgeberartikel rund um geförderte Weiterbildung
// Eine Quelle für die Ratgeberseiten, die Sitemap, die strukturierten Daten und llms.txt.
// Grundsatz: allgemein verständlich erklären, keine Förderung zusagen, keine Rechtsberatung.
// Beträge und Fristen nur nennen, wenn sie gesetzlich feststehen; sonst auf die zuständige Stelle verweisen.
// =============================================================

export type RatgeberAbschnitt = { titel: string; absaetze: string[]; punkte?: string[] };

export type RatgeberArtikel = {
  slug: string;
  titel: string;
  // Für Suchergebnis und Übersicht
  beschreibung: string;
  // Die Antwort in zwei, drei Sätzen, steht ganz oben auf der Seite
  kurz: string;
  abschnitte: RatgeberAbschnitt[];
  fragen: { frage: string; antwort: string }[];
  // Weiterführende Seiten auf fdm-group.de
  links: { name: string; pfad: string }[];
};

export const RATGEBER_STAND = "2026-11-25";
export const ratgeberPfad = (slug: string) => `/ratgeber/${slug}`;

export const RATGEBER: RatgeberArtikel[] = [
  {
    slug: "bildungsgutschein-beantragen",
    titel: "Bildungsgutschein beantragen: Schritt für Schritt",
    beschreibung:
      "Wie Sie einen Bildungsgutschein bei der Agentur für Arbeit oder beim Jobcenter bekommen: Voraussetzungen, Ablauf, Fristen und was auf dem Gutschein steht.",
    kurz: "Einen Bildungsgutschein beantragen Sie nicht mit einem Formular, sondern im Gespräch mit Ihrer Vermittlungsfachkraft bei der Agentur für Arbeit oder beim Jobcenter. Sie erklären dort, welche Weiterbildung Sie machen möchten und warum sie Ihre Chancen auf eine Stelle verbessert. Wird die Förderung bewilligt, erhalten Sie den Gutschein und lösen ihn vor Kursbeginn bei einem zugelassenen Bildungsträger ein.",
    abschnitte: [
      {
        titel: "Was ein Bildungsgutschein ist",
        absaetze: [
          "Der Bildungsgutschein ist die schriftliche Zusage der Agentur für Arbeit oder des Jobcenters, die Kosten einer beruflichen Weiterbildung zu übernehmen. Grundlage ist § 81 des Dritten Buches Sozialgesetzbuch (SGB III). Der Gutschein gilt nicht für einen bestimmten Anbieter, sondern für ein Bildungsziel: Sie suchen sich selbst einen zugelassenen Träger und eine zugelassene Maßnahme aus, die dazu passen.",
        ],
      },
      {
        titel: "Wer einen Bildungsgutschein bekommen kann",
        absaetze: [
          "Gefördert werden kann, wer arbeitslos ist, von Arbeitslosigkeit bedroht ist oder keinen Berufsabschluss hat. Entscheidend ist, dass die Weiterbildung notwendig ist, um Sie wieder in Arbeit zu bringen oder eine drohende Arbeitslosigkeit abzuwenden. Außerdem muss vorher eine Beratung durch die Agentur für Arbeit oder das Jobcenter stattgefunden haben.",
          "Der Bildungsgutschein ist in den meisten Fällen eine Ermessensleistung. Das heißt: Es gibt keinen Anspruch darauf, die Vermittlungsfachkraft entscheidet nach Ihrer persönlichen Lage und der Situation am Arbeitsmarkt. Eine Ausnahme gilt für das Nachholen eines Berufsabschlusses; hier besteht unter bestimmten Voraussetzungen ein Rechtsanspruch auf Förderung.",
        ],
      },
      {
        titel: "Der Ablauf in fünf Schritten",
        absaetze: ["So gehen die meisten Interessenten vor:"],
        punkte: [
          "Ziel klären: Welche Tätigkeit streben Sie an, und welche Kenntnisse fehlen Ihnen dafür?",
          "Passende Weiterbildung auswählen und sich beim Bildungsträger beraten lassen. Sie erhalten dort die Angaben zum Kurs, die Ihre Vermittlungsfachkraft braucht: Inhalte, Umfang in Unterrichtseinheiten, Dauer und Termine.",
          "Termin bei der Agentur für Arbeit oder beim Jobcenter vereinbaren und die Weiterbildung dort begründen.",
          "Bei Bewilligung den Bildungsgutschein entgegennehmen und prüfen, ob Bildungsziel, Dauer und Gültigkeit zum gewählten Kurs passen.",
          "Den Gutschein beim Bildungsträger einreichen. Der Träger legt ihn vor Kursbeginn der Agentur für Arbeit vor.",
        ],
      },
      {
        titel: "Was auf dem Bildungsgutschein steht",
        absaetze: [
          "Der Gutschein nennt das Bildungsziel, die Dauer der Weiterbildung, den regionalen Geltungsbereich und eine Gültigkeitsfrist. Die Gültigkeit beträgt höchstens drei Monate; innerhalb dieser Zeit muss die Weiterbildung beginnen. Bei Online-Unterricht spielt der Wohnort für die Teilnahme keine Rolle, der Geltungsbereich auf dem Gutschein muss den Kurs aber abdecken.",
          "Wichtig ist die Reihenfolge: Erst der Gutschein, dann der Kursbeginn. Wer ohne Bewilligung startet, kann die Kosten nachträglich in der Regel nicht mehr erstattet bekommen.",
        ],
      },
      {
        titel: "Welche Kosten übernommen werden",
        absaetze: [
          "Mit dem Bildungsgutschein werden die Lehrgangskosten übernommen und direkt mit dem Bildungsträger abgerechnet. Daneben können weitere Weiterbildungskosten gefördert werden, zum Beispiel Fahrkosten oder Kosten für die Betreuung von Kindern. Was in Ihrem Fall dazugehört, steht im Bewilligungsbescheid; fragen Sie im Gespräch ausdrücklich danach.",
        ],
      },
    ],
    fragen: [
      {
        frage: "Wo beantrage ich den Bildungsgutschein?",
        antwort:
          "Bei Ihrer Vermittlungsfachkraft. Wer Arbeitslosengeld bezieht oder arbeitsuchend gemeldet ist, wendet sich an die Agentur für Arbeit. Wer Bürgergeld bezieht, spricht zuerst mit dem Jobcenter. Einen Termin vereinbaren Sie telefonisch, online oder persönlich.",
      },
      {
        frage: "Wie lange ist ein Bildungsgutschein gültig?",
        antwort:
          "Die Gültigkeit steht auf dem Gutschein und beträgt höchstens drei Monate. Innerhalb dieser Frist muss die Weiterbildung beginnen. Läuft die Frist ab, bevor ein passender Kurs startet, sprechen Sie rechtzeitig mit Ihrer Vermittlungsfachkraft über eine Verlängerung oder einen neuen Gutschein.",
      },
      {
        frage: "Habe ich einen Anspruch auf einen Bildungsgutschein?",
        antwort:
          "In der Regel nicht. Die Förderung der beruflichen Weiterbildung ist überwiegend eine Ermessensleistung. Ein Rechtsanspruch besteht unter bestimmten Voraussetzungen beim Nachholen eines Berufsabschlusses. Je besser Sie begründen, warum die Weiterbildung Ihre Vermittlungschancen verbessert, desto eher wird sie bewilligt.",
      },
      {
        frage: "Kann ich mir den Bildungsträger selbst aussuchen?",
        antwort:
          "Ja. Der Gutschein gilt für ein Bildungsziel, nicht für einen Anbieter. Voraussetzung ist, dass der Träger und die gewählte Maßnahme nach der AZAV zugelassen sind und dass der Kurs zu den Angaben auf dem Gutschein passt.",
      },
    ],
    links: [
      { name: "Gespräch bei der Agentur für Arbeit vorbereiten", pfad: "/ratgeber/gespraech-arbeitsagentur-weiterbildung" },
      { name: "Bildungsgutschein abgelehnt – was nun?", pfad: "/ratgeber/bildungsgutschein-abgelehnt" },
      { name: "Bildungsgutschein bei der FDM Akademie", pfad: "/azav" },
      { name: "Alle Weiterbildungen", pfad: "/weiterbildung" },
    ],
  },
  {
    slug: "gespraech-arbeitsagentur-weiterbildung",
    titel: "Gespräch bei der Agentur für Arbeit: So begründen Sie Ihre Weiterbildung",
    beschreibung:
      "Gut vorbereitet ins Beratungsgespräch: welche Unterlagen Sie mitbringen, wie Sie Ihre Weiterbildung begründen und welche Fragen Ihre Vermittlungsfachkraft stellt.",
    kurz: "Ihre Vermittlungsfachkraft muss nachvollziehen können, dass die Weiterbildung notwendig ist, damit Sie eine Stelle finden. Bringen Sie deshalb ein konkretes Berufsziel, passende Stellenanzeigen und die Kursunterlagen des Bildungsträgers mit. Je klarer der Zusammenhang zwischen fehlenden Kenntnissen, Kurs und Stellenangeboten ist, desto leichter fällt die Entscheidung.",
    abschnitte: [
      {
        titel: "Worauf die Vermittlungsfachkraft achtet",
        absaetze: [
          "Im Gespräch geht es um drei Fragen: Ist die Weiterbildung notwendig, um Sie beruflich einzugliedern? Passt sie zu Ihrem bisherigen Werdegang und Ihren Fähigkeiten? Und gibt es für das angestrebte Berufsfeld genügend offene Stellen? Wer darauf überzeugende Antworten hat, hat die wichtigste Arbeit bereits erledigt.",
        ],
      },
      {
        titel: "Diese Unterlagen helfen",
        absaetze: ["Bereiten Sie eine kleine Mappe vor, die Sie im Termin übergeben können:"],
        punkte: [
          "Aktueller Lebenslauf mit Ihren bisherigen Tätigkeiten und Abschlüssen",
          "Drei bis fünf aktuelle Stellenanzeigen aus Ihrer Region oder für Arbeit im Homeoffice, in denen die Kenntnisse aus dem Kurs verlangt werden; markieren Sie die entsprechenden Anforderungen",
          "Kursbeschreibung des Bildungsträgers mit Inhalten, Umfang in Unterrichtseinheiten, Dauer und möglichen Startterminen",
          "Falls vorhanden: Absagen auf Bewerbungen, in denen fehlende Kenntnisse genannt werden",
          "Eine kurze schriftliche Begründung, eine halbe Seite genügt",
        ],
      },
      {
        titel: "So bauen Sie Ihre Begründung auf",
        absaetze: [
          "Bewährt hat sich eine einfache Reihenfolge. Beginnen Sie mit Ihrem Ziel: die Tätigkeit, in der Sie arbeiten möchten. Beschreiben Sie dann die Lücke: welche Kenntnisse Arbeitgeber dafür verlangen und Ihnen fehlen oder veraltet sind. Zeigen Sie anschließend, dass die gewählte Weiterbildung genau diese Lücke schließt, und belegen Sie mit den Stellenanzeigen, dass es entsprechende Stellen gibt.",
          "Bleiben Sie konkret. „Ich möchte mich weiterbilden“ überzeugt weniger als „In vier von fünf Anzeigen für Buchhalter in meiner Region wird DATEV verlangt; damit habe ich noch nie gearbeitet“.",
        ],
      },
      {
        titel: "Mehrere Kurse sinnvoll verbinden",
        absaetze: [
          "Oft reicht ein einzelnes Modul nicht aus, um die Anforderungen einer Stelle zu erfüllen. Dann ist es sinnvoll, aufeinander aufbauende Kurse gemeinsam zu beantragen, zum Beispiel Grundlagen, Aufbau und Vertiefung zu einem Thema. Für die Vermittlungsfachkraft ist ein durchgehender Lernweg mit klarem Ziel leichter nachzuvollziehen als eine lose Sammlung einzelner Kurse.",
          "Bei der FDM Akademie sind solche Lernwege als Kursketten zusammengestellt. Wir geben Ihnen für das Gespräch eine Übersicht mit, aus der Stufen, Umfang und Dauer hervorgehen.",
        ],
      },
      {
        titel: "Nach dem Gespräch",
        absaetze: [
          "Manchmal fällt die Entscheidung sofort, häufig erst nach einigen Tagen. Fragen Sie am Ende des Termins, wie es weitergeht und ob noch Unterlagen fehlen. Wird die Förderung bewilligt, achten Sie auf die Gültigkeit des Bildungsgutscheins und melden Sie sich zeitnah beim Bildungsträger, damit der Kurs rechtzeitig beginnen kann.",
        ],
      },
    ],
    fragen: [
      {
        frage: "Muss ich schon vor dem Gespräch einen Kurs ausgesucht haben?",
        antwort:
          "Nein, aber es hilft sehr. Mit einer konkreten Weiterbildung und den Kursunterlagen des Trägers kann Ihre Vermittlungsfachkraft schneller beurteilen, ob das Vorhaben zu Ihnen und zum Arbeitsmarkt passt.",
      },
      {
        frage: "Was mache ich, wenn meine Vermittlungsfachkraft einen anderen Kurs vorschlägt?",
        antwort:
          "Hören Sie sich die Gründe an und fragen Sie nach, welche Bedenken es gegen Ihren Vorschlag gibt. Häufig lässt sich das mit zusätzlichen Stellenanzeigen oder einer angepassten Kurskombination klären. Der Bildungsgutschein nennt am Ende ein Bildungsziel; den Träger wählen Sie selbst.",
      },
      {
        frage: "Unterstützt mich der Bildungsträger bei der Vorbereitung?",
        antwort:
          "Ja. Die FDM Akademie berät Sie kostenlos, stellt mit Ihnen die passenden Kurse zusammen und gibt Ihnen die Unterlagen mit, die Sie für das Gespräch brauchen. Die Entscheidung über die Förderung trifft die Agentur für Arbeit oder das Jobcenter.",
      },
    ],
    links: [
      { name: "Bildungsgutschein beantragen: Schritt für Schritt", pfad: "/ratgeber/bildungsgutschein-beantragen" },
      { name: "Kursketten der FDM Akademie", pfad: "/weiterbildung/kursketten" },
      { name: "Bildungsgutschein abgelehnt – was nun?", pfad: "/ratgeber/bildungsgutschein-abgelehnt" },
    ],
  },
  {
    slug: "bildungsgutschein-abgelehnt",
    titel: "Bildungsgutschein abgelehnt – was Sie jetzt tun können",
    beschreibung:
      "Die Agentur für Arbeit oder das Jobcenter hat Ihre Weiterbildung abgelehnt? Häufige Gründe, wie Sie nachbessern und wann ein Widerspruch in Frage kommt.",
    kurz: "Eine Ablehnung ist nicht zwingend das letzte Wort. Fragen Sie zuerst nach den Gründen und bitten Sie um einen schriftlichen Bescheid. Oft lässt sich das Vorhaben mit einer besseren Begründung, weiteren Stellenanzeigen oder einem anderen Kurszuschnitt doch noch durchsetzen. Gegen einen schriftlichen Ablehnungsbescheid können Sie innerhalb eines Monats Widerspruch einlegen.",
    abschnitte: [
      {
        titel: "Häufige Gründe für eine Ablehnung",
        absaetze: ["Aus Gesprächen mit Interessenten kennen wir vor allem diese Gründe:"],
        punkte: [
          "Die Vermittlungsfachkraft hält eine Vermittlung auch ohne Weiterbildung für möglich.",
          "Der Zusammenhang zwischen Kurs und angestrebter Tätigkeit ist nicht deutlich geworden.",
          "Für das Berufsziel werden in der Region zu wenige Stellen gesehen.",
          "Der Kurs erscheint zu lang, zu kurz oder passt nicht zum bisherigen Werdegang.",
          "Der gewählte Kurs oder Träger ist nicht zugelassen.",
        ],
      },
      {
        titel: "Erster Schritt: nachfragen und nachbessern",
        absaetze: [
          "Bitten Sie um ein weiteres Gespräch und lassen Sie sich die Gründe genau erklären. Viele Ablehnungen beruhen darauf, dass im ersten Termin Belege fehlten. Legen Sie nach: aktuelle Stellenanzeigen, in denen genau die Kursinhalte verlangt werden, Absagen wegen fehlender Kenntnisse oder eine Kurskombination, die besser zum Ziel passt.",
          "Sprechen Sie auch mit dem Bildungsträger. Manchmal ist ein anderer Zuschnitt die Lösung, etwa ein kürzerer Einstieg, eine längere Kette mit erkennbarem Abschlussziel oder ein Kurs in Teilzeit.",
        ],
      },
      {
        titel: "Schriftlichen Bescheid verlangen",
        absaetze: [
          "Wurde Ihnen die Ablehnung nur mündlich mitgeteilt, können Sie einen schriftlichen Bescheid mit Begründung verlangen. Dazu stellen Sie Ihren Antrag auf Förderung der beruflichen Weiterbildung am besten schriftlich. Erst der schriftliche Bescheid nennt die Gründe verbindlich und enthält die Rechtsbehelfsbelehrung.",
        ],
      },
      {
        titel: "Widerspruch einlegen",
        absaetze: [
          "Gegen einen schriftlichen Ablehnungsbescheid können Sie innerhalb eines Monats nach Bekanntgabe Widerspruch einlegen, schriftlich oder zur Niederschrift bei der Behörde. Begründen Sie den Widerspruch sachlich und gehen Sie auf die genannten Ablehnungsgründe ein. Bleibt die Behörde bei ihrer Entscheidung, erhalten Sie einen Widerspruchsbescheid; dagegen ist die Klage vor dem Sozialgericht möglich.",
          "Weil die Förderung meist im Ermessen der Behörde liegt, wird im Widerspruch vor allem geprüft, ob das Ermessen richtig ausgeübt wurde. Unterstützung erhalten Sie bei Sozialverbänden, Gewerkschaften, unabhängigen Beratungsstellen oder bei Fachanwältinnen und Fachanwälten für Sozialrecht. Dieser Artikel ersetzt keine Rechtsberatung.",
        ],
      },
      {
        titel: "Alternativen zur Förderung per Bildungsgutschein",
        absaetze: [
          "Stehen Sie in einem Arbeitsverhältnis, kommt eine Förderung über das Qualifizierungschancengesetz in Frage; den Antrag stellt Ihr Arbeitgeber. Manche Bundesländer fördern Weiterbildung mit eigenen Programmen. Und schließlich lassen sich Kurse auch selbst bezahlen; die Kosten können Sie in der Regel steuerlich geltend machen.",
        ],
      },
    ],
    fragen: [
      {
        frage: "Wie lange habe ich Zeit für einen Widerspruch?",
        antwort:
          "Einen Monat ab Bekanntgabe des schriftlichen Bescheids. Enthält der Bescheid keine oder eine fehlerhafte Rechtsbehelfsbelehrung, gilt eine Frist von einem Jahr.",
      },
      {
        frage: "Kann ich nach einer Ablehnung einen neuen Antrag stellen?",
        antwort:
          "Ja. Wenn sich Ihre Situation ändert oder Sie ein anderes, besser begründetes Vorhaben haben, können Sie die Förderung erneut beantragen. Oft ist das der schnellere Weg als ein Widerspruch.",
      },
      {
        frage: "Hilft mir die FDM Akademie nach einer Ablehnung?",
        antwort:
          "Ja. Wir sehen uns mit Ihnen an, woran es lag, und stellen bei Bedarf eine andere Kurskombination zusammen. Eine Rechtsberatung leisten wir nicht, und die Entscheidung über die Förderung bleibt bei der Agentur für Arbeit oder dem Jobcenter.",
      },
    ],
    links: [
      { name: "Gespräch bei der Agentur für Arbeit vorbereiten", pfad: "/ratgeber/gespraech-arbeitsagentur-weiterbildung" },
      { name: "Qualifizierungschancengesetz für Beschäftigte", pfad: "/qcg" },
      { name: "Bildungsgutschein beantragen: Schritt für Schritt", pfad: "/ratgeber/bildungsgutschein-beantragen" },
    ],
  },
  {
    slug: "weiterbildung-waehrend-arbeitslosigkeit",
    titel: "Weiterbildung während der Arbeitslosigkeit: Geld, Dauer und Pflichten",
    beschreibung:
      "Was passiert mit dem Arbeitslosengeld während einer geförderten Weiterbildung, wie lange darf sie dauern und was gilt beim Bürgergeld? Die wichtigsten Regeln im Überblick.",
    kurz: "Während einer geförderten Weiterbildung erhalten Sie Ihr Arbeitslosengeld oder Bürgergeld weiter. Die Lehrgangskosten werden mit dem Bildungsgutschein übernommen. Der Anspruch auf Arbeitslosengeld wird in dieser Zeit nur zur Hälfte verbraucht, und Sie müssen regelmäßig am Unterricht teilnehmen.",
    abschnitte: [
      {
        titel: "Arbeitslosengeld läuft weiter",
        absaetze: [
          "Wer Arbeitslosengeld bezieht und eine geförderte Weiterbildung beginnt, erhält die Leistung als Arbeitslosengeld bei beruflicher Weiterbildung in gleicher Höhe weiter. Der Vorteil: Für zwei Tage Weiterbildung wird nur ein Tag der Anspruchsdauer verbraucht. Nach dem Ende der Weiterbildung bleibt außerdem in der Regel ein Restanspruch, damit Zeit für die Stellensuche bleibt.",
        ],
      },
      {
        titel: "Weiterbildung mit Bürgergeld",
        absaetze: [
          "Auch wer Bürgergeld bezieht, kann eine Weiterbildung gefördert bekommen; der Lebensunterhalt wird in dieser Zeit weiter über das Jobcenter gesichert. Erste Anlaufstelle bleibt Ihre Ansprechperson im Jobcenter. Sie klärt mit Ihnen das Vorhaben und stellt die Verbindung zur Agentur für Arbeit her, die für die Förderung der beruflichen Weiterbildung zuständig ist.",
        ],
      },
      {
        titel: "Zusätzliche Leistungen",
        absaetze: [
          "Neben den Lehrgangskosten können weitere Kosten übernommen werden, die durch die Weiterbildung entstehen, zum Beispiel Fahrkosten oder Kosten für die Kinderbetreuung. Bei Online-Unterricht von zu Hause fallen Fahrkosten in der Regel nicht an.",
          "Für Weiterbildungen, die zu einem anerkannten Berufsabschluss führen, gibt es seit Juli 2023 ein monatliches Weiterbildungsgeld von 150 Euro sowie Prämien für bestandene Zwischen- und Abschlussprüfungen. Für kürzere Weiterbildungen und einzelne Module gilt das nicht.",
        ],
      },
      {
        titel: "Wie lange eine Weiterbildung dauern darf",
        absaetze: [
          "Eine feste Höchstdauer für Weiterbildungen ohne Berufsabschluss gibt es nicht. Maßgeblich ist, was für Ihr Berufsziel notwendig ist; das kann ein Modul von wenigen Wochen sein oder eine Kombination über mehrere Monate. Die bewilligte Dauer steht auf dem Bildungsgutschein. Weiterbildungen, die zu einem Berufsabschluss führen, sind gegenüber einer Erstausbildung in der Regel um ein Drittel verkürzt.",
        ],
      },
      {
        titel: "Ihre Pflichten während der Weiterbildung",
        absaetze: [
          "Die Teilnahme ist verbindlich. Sie nehmen regelmäßig am Unterricht teil, melden Krankheit unverzüglich und reichen eine Arbeitsunfähigkeitsbescheinigung ein. Der Bildungsträger dokumentiert die Anwesenheit und meldet Fehlzeiten. Wer eine Weiterbildung ohne wichtigen Grund abbricht, muss mit Nachteilen bei der Leistung rechnen. Ergibt sich während des Kurses eine Stelle, sprechen Sie mit Ihrer Vermittlungsfachkraft und dem Träger; eine Arbeitsaufnahme ist ein wichtiger Grund.",
        ],
      },
    ],
    fragen: [
      {
        frage: "Bekomme ich während der Weiterbildung weiter Arbeitslosengeld?",
        antwort:
          "Ja. Bei einer geförderten beruflichen Weiterbildung wird das Arbeitslosengeld in gleicher Höhe weitergezahlt. Die Anspruchsdauer verringert sich dabei nur um einen Tag je zwei Tage Weiterbildung.",
      },
      {
        frage: "Kann ich eine Weiterbildung in Teilzeit machen?",
        antwort:
          "Ja, wenn das zu Ihrer Situation passt, etwa wegen Kinderbetreuung oder Pflege von Angehörigen. Ein Teilzeitkurs hat denselben Umfang wie der Vollzeitkurs und dauert entsprechend länger. Besprechen Sie das Zeitmodell mit Ihrer Vermittlungsfachkraft, weil es auf dem Bildungsgutschein vermerkt wird.",
      },
      {
        frage: "Muss ich mich während der Weiterbildung weiter bewerben?",
        antwort:
          "Das hängt von Ihrer Eingliederungsvereinbarung beziehungsweise Ihrem Kooperationsplan ab. Während einer Weiterbildung steht in der Regel der erfolgreiche Abschluss im Vordergrund; gegen Ende rückt die Stellensuche wieder nach vorn.",
      },
      {
        frage: "Was passiert, wenn ich während der Weiterbildung krank werde?",
        antwort:
          "Sie melden sich unverzüglich beim Bildungsträger und bei der Agentur für Arbeit oder dem Jobcenter krank und reichen die Arbeitsunfähigkeitsbescheinigung ein. Bei längeren Ausfällen klären Träger und Kostenträger, wie Sie den versäumten Stoff nachholen können.",
      },
    ],
    links: [
      { name: "Bildungsgutschein beantragen: Schritt für Schritt", pfad: "/ratgeber/bildungsgutschein-beantragen" },
      { name: "So läuft eine Online-Weiterbildung ab", pfad: "/ratgeber/online-weiterbildung-ablauf" },
      { name: "Alle Weiterbildungen", pfad: "/weiterbildung" },
    ],
  },
  {
    slug: "umschulung-oder-weiterbildung",
    titel: "Umschulung oder Weiterbildung: Was passt zu mir?",
    beschreibung:
      "Der Unterschied zwischen Umschulung, Weiterbildung und einzelnen Modulen, mit Entscheidungshilfe: Dauer, Abschluss, Voraussetzungen und Förderung im Vergleich.",
    kurz: "Eine Umschulung führt in etwa zwei Jahren zu einem neuen anerkannten Berufsabschluss. Eine Weiterbildung baut auf vorhandenen Kenntnissen auf und schließt gezielt Lücken, oft in wenigen Wochen oder Monaten. Wer in seinem Beruf oder einem verwandten Feld bleiben will, ist mit einer Weiterbildung meist schneller am Ziel; wer in seinem Beruf nicht mehr arbeiten kann oder will, braucht eher eine Umschulung.",
    abschnitte: [
      {
        titel: "Umschulung: ein neuer Beruf",
        absaetze: [
          "Eine Umschulung bereitet auf einen anderen anerkannten Ausbildungsberuf vor und endet mit der Prüfung vor der zuständigen Kammer, zum Beispiel der IHK. Sie dauert in der Regel zwei Jahre und ist damit um etwa ein Drittel kürzer als eine Erstausbildung. Sie kommt vor allem in Frage, wenn Sie Ihren bisherigen Beruf aus gesundheitlichen Gründen nicht mehr ausüben können, wenn es darin kaum noch Stellen gibt oder wenn Sie bisher keinen Berufsabschluss haben.",
        ],
      },
      {
        titel: "Weiterbildung: vorhandenes Wissen ausbauen",
        absaetze: [
          "Eine Weiterbildung, oft auch Anpassungsqualifizierung genannt, bringt Ihre Kenntnisse auf den Stand, den Arbeitgeber heute verlangen. Das kann eine Software sein, ein Fachgebiet oder eine zusätzliche Qualifikation. Am Ende steht kein neuer Berufsabschluss, sondern ein Zertifikat des Bildungsträgers; manche Kurse bereiten zusätzlich auf eine externe Prüfung vor, etwa bei einer Kammer, beim TÜV oder bei einem Softwarehersteller.",
        ],
      },
      {
        titel: "Module und Kursketten",
        absaetze: [
          "Viele Weiterbildungen bestehen aus einzelnen Modulen von einer bis zu mehreren Wochen. Sie lassen sich einzeln belegen oder zu einem längeren Lernweg verbinden. Bei der FDM Akademie heißen solche Lernwege Kursketten: Die Stufen bauen aufeinander auf, jede Stufe ist ein eigener Kurs mit eigenem Zertifikat. So lässt sich der Umfang genau an Ihr Ziel und an den Rahmen Ihres Bildungsgutscheins anpassen.",
        ],
      },
      {
        titel: "Entscheidungshilfe",
        absaetze: ["Diese Fragen führen meist schnell zur richtigen Richtung:"],
        punkte: [
          "Haben Sie einen Berufsabschluss, der am Arbeitsmarkt noch gefragt ist? Dann genügt oft eine Weiterbildung.",
          "Fehlen Ihnen in Stellenanzeigen immer wieder dieselben zwei, drei Kenntnisse? Dann sind gezielte Module der kürzeste Weg.",
          "Können oder wollen Sie in Ihrem Beruf nicht mehr arbeiten? Dann sollten Sie über eine Umschulung sprechen.",
          "Wie viel Zeit haben Sie? Zwei Jahre Vollzeit müssen zu Ihrer Lebenssituation passen.",
          "Möchten Sie erst prüfen, ob ein neues Feld zu Ihnen passt? Ein Einstiegsmodul zeigt das in wenigen Wochen.",
        ],
      },
      {
        titel: "Förderung im Vergleich",
        absaetze: [
          "Beides kann mit einem Bildungsgutschein gefördert werden. Bei einer Umschulung prüft die Agentur für Arbeit besonders gründlich, ob der neue Beruf zu Ihnen passt und ob eine kürzere Weiterbildung nicht ebenfalls zum Ziel führen würde. Für Weiterbildungen mit Berufsabschluss gibt es zusätzlich ein monatliches Weiterbildungsgeld; bei kürzeren Weiterbildungen entfällt es, dafür sind Sie deutlich früher wieder für den Arbeitsmarkt verfügbar.",
        ],
      },
    ],
    fragen: [
      {
        frage: "Was ist der Unterschied zwischen Umschulung und Weiterbildung?",
        antwort:
          "Eine Umschulung führt zu einem neuen anerkannten Berufsabschluss und dauert in der Regel zwei Jahre. Eine Weiterbildung baut auf vorhandenen Kenntnissen auf, dauert meist Wochen bis Monate und endet mit einem Zertifikat.",
      },
      {
        frage: "Kann ich mit einer Weiterbildung den Beruf wechseln?",
        antwort:
          "In vielen Bereichen ja, vor allem dort, wo Arbeitgeber auf nachgewiesene Kenntnisse statt auf einen bestimmten Abschluss achten, etwa in der IT, im Online-Marketing oder in der Sachbearbeitung. Für geschützte Berufe und Tätigkeiten mit vorgeschriebenem Abschluss reicht eine Weiterbildung nicht aus.",
      },
      {
        frage: "Bietet die FDM Akademie Umschulungen an?",
        antwort:
          "Der Schwerpunkt der FDM Akademie liegt auf Weiterbildungen, Modulen und Kursketten, die live im virtuellen Klassenzimmer stattfinden. Welche längeren Qualifizierungen mit externem Abschluss aktuell möglich sind, klären wir mit Ihnen in der kostenlosen Beratung.",
      },
    ],
    links: [
      { name: "Kursketten der FDM Akademie", pfad: "/weiterbildung/kursketten" },
      { name: "Alle Weiterbildungen nach Fachbereich", pfad: "/weiterbildung" },
      { name: "Weiterbildung während der Arbeitslosigkeit", pfad: "/ratgeber/weiterbildung-waehrend-arbeitslosigkeit" },
    ],
  },
  {
    slug: "online-weiterbildung-ablauf",
    titel: "Online-Weiterbildung im virtuellen Klassenzimmer: So läuft sie ab",
    beschreibung:
      "Live-Unterricht von zu Hause: Tagesablauf, Technik, Vollzeit und Teilzeit, Anwesenheit und Abschluss einer geförderten Online-Weiterbildung verständlich erklärt.",
    kurz: "Eine Online-Weiterbildung im virtuellen Klassenzimmer ist Unterricht zu festen Zeiten, nur eben von zu Hause aus. Dozentinnen und Dozenten unterrichten live, Sie können Fragen stellen und mit anderen Teilnehmenden zusammenarbeiten. Sie brauchen dafür einen Computer, eine stabile Internetverbindung und ein Headset.",
    abschnitte: [
      {
        titel: "Live-Unterricht statt Selbstlernkurs",
        absaetze: [
          "Im virtuellen Klassenzimmer findet der Unterricht in Echtzeit statt. Das unterscheidet ihn von Selbstlernkursen mit aufgezeichneten Videos: Sie haben feste Unterrichtszeiten, eine Lehrkraft, die erklärt und auf Fragen eingeht, und eine Lerngruppe. Für geförderte Weiterbildungen ist diese Form verbreitet, weil sie Struktur gibt und die Teilnahme nachvollziehbar ist.",
        ],
      },
      {
        titel: "Vollzeit oder Teilzeit",
        absaetze: [
          "Viele Weiterbildungen gibt es in beiden Zeitmodellen. In Vollzeit lernen Sie an fünf Tagen in der Woche ganztägig. In Teilzeit ist die tägliche Unterrichtszeit kürzer; der Kurs hat denselben Umfang und dauert entsprechend länger. Teilzeit eignet sich, wenn Sie Kinder betreuen, Angehörige pflegen oder aus anderen Gründen nicht ganztägig lernen können. Das Zeitmodell wird auf dem Bildungsgutschein vermerkt; sprechen Sie es deshalb früh mit Ihrer Vermittlungsfachkraft ab.",
        ],
      },
      {
        titel: "Technik und Arbeitsplatz",
        absaetze: ["Die Anforderungen sind überschaubar:"],
        punkte: [
          "Computer oder Laptop; ein Smartphone reicht für den Unterricht nicht aus",
          "Stabile Internetverbindung",
          "Headset sowie Kamera",
          "Ein ruhiger Platz, an dem Sie während der Unterrichtszeit ungestört arbeiten können",
        ],
      },
      {
        titel: "Anwesenheit und Betreuung",
        absaetze: [
          "Wie im Präsenzunterricht gilt Anwesenheitspflicht. Der Bildungsträger dokumentiert die Teilnahme, weil die Agentur für Arbeit oder das Jobcenter die Weiterbildung bezahlt. Sind Sie krank, melden Sie sich ab und reichen eine Arbeitsunfähigkeitsbescheinigung ein. Bei der FDM Akademie begleiten Sie persönliche Ansprechpersonen von der Beratung bis zum Abschluss, auch bei organisatorischen Fragen während des Kurses.",
        ],
      },
      {
        titel: "Abschluss und Zertifikat",
        absaetze: [
          "Nach erfolgreichem Abschluss erhalten Sie ein Zertifikat des Bildungsträgers mit Inhalten und Umfang der Weiterbildung. Kurse, die auf eine externe Prüfung vorbereiten, zum Beispiel bei einer Kammer, beim TÜV oder bei einem Softwarehersteller, weisen das im Titel aus. Die Prüfungsbedingungen des einzelnen Kurses erfahren Sie in der Beratung.",
        ],
      },
    ],
    fragen: [
      {
        frage: "Brauche ich besondere Computerkenntnisse für eine Online-Weiterbildung?",
        antwort:
          "Nein. Sie sollten einen Computer bedienen, im Internet surfen und E-Mails schreiben können. Die Bedienung des virtuellen Klassenzimmers wird zu Beginn erklärt.",
      },
      {
        frage: "Kann ich von überall in Deutschland teilnehmen?",
        antwort:
          "Ja. Die Weiterbildungen der FDM Akademie finden vollständig online statt. Der Sitz des Bildungsträgers in Eislingen/Fils spielt für die Teilnahme keine Rolle.",
      },
      {
        frage: "Wird eine Online-Weiterbildung genauso gefördert wie Präsenzunterricht?",
        antwort:
          "Ja. Für die Förderung mit Bildungsgutschein kommt es darauf an, dass Träger und Maßnahme nach der AZAV zugelassen sind, nicht auf den Lernort.",
      },
      {
        frage: "Was passiert, wenn meine Internetverbindung ausfällt?",
        antwort:
          "Melden Sie sich so schnell wie möglich beim Bildungsträger. Kurze technische Störungen lassen sich in der Regel klären; für längere Ausfälle wird besprochen, wie Sie den Stoff nachholen.",
      },
    ],
    links: [
      { name: "Alle Weiterbildungen", pfad: "/weiterbildung" },
      { name: "Häufige Fragen", pfad: "/faq" },
      { name: "Weiterbildung während der Arbeitslosigkeit", pfad: "/ratgeber/weiterbildung-waehrend-arbeitslosigkeit" },
    ],
  },
  {
    slug: "vollzeit-oder-teilzeit-weiterbildung",
    titel: "Weiterbildung in Vollzeit oder Teilzeit: Was passt zu Ihnen?",
    beschreibung:
      "Vollzeit oder Teilzeit: Unterschiede bei Dauer, Tagesablauf und Förderung einer beruflichen Weiterbildung und woran Sie erkennen, welches Zeitmodell zu Ihrer Lage passt.",
    kurz: "Vollzeit und Teilzeit unterscheiden sich nicht im Inhalt, sondern im Tempo: Der Kurs hat denselben Umfang in Unterrichtseinheiten, in Teilzeit verteilt er sich auf weniger Stunden am Tag und dauert deshalb länger. Vollzeit passt, wenn Sie schnell fertig werden wollen und den Tag frei haben. Teilzeit passt, wenn Sie Kinder betreuen, Angehörige pflegen oder neben einer Beschäftigung lernen.",
    abschnitte: [
      {
        titel: "Der Unterschied in einem Satz",
        absaetze: [
          "Eine Weiterbildung wird in Unterrichtseinheiten gemessen; eine Unterrichtseinheit dauert 45 Minuten. Ein Kurs mit 200 Unterrichtseinheiten bleibt in Vollzeit wie in Teilzeit ein Kurs mit 200 Unterrichtseinheiten. In Vollzeit lernen Sie ganztägig an fünf Tagen in der Woche, in Teilzeit ist der Unterrichtstag kürzer. Dadurch dauert derselbe Kurs in Teilzeit ungefähr doppelt so lange.",
        ],
      },
      {
        titel: "Wann Vollzeit die bessere Wahl ist",
        absaetze: ["Vollzeit eignet sich vor allem in diesen Fällen:"],
        punkte: [
          "Sie sind arbeitslos oder arbeitsuchend und möchten möglichst bald wieder arbeiten",
          "Sie können sich tagsüber ganz auf den Unterricht konzentrieren",
          "Sie lernen leichter, wenn Sie jeden Tag am Stoff bleiben",
          "Ihr Bildungsgutschein nennt eine Höchstdauer, die sich in Teilzeit nicht einhalten ließe",
        ],
      },
      {
        titel: "Wann Teilzeit die bessere Wahl ist",
        absaetze: ["Teilzeit ist kein Kurs zweiter Klasse, sondern für bestimmte Lebenslagen gemacht:"],
        punkte: [
          "Sie betreuen Kinder oder pflegen Angehörige",
          "Sie arbeiten in Teilzeit oder in einem Minijob und möchten das beibehalten",
          "Sie sind beschäftigt und bilden sich mit Unterstützung Ihres Arbeitgebers weiter",
          "Sie brauchen aus gesundheitlichen Gründen kürzere Lerntage",
        ],
      },
      {
        titel: "Was das Zeitmodell für die Förderung bedeutet",
        absaetze: [
          "Auf einem Bildungsgutschein steht neben dem Bildungsziel und der Dauer auch, ob die Weiterbildung in Vollzeit oder in Teilzeit stattfindet. Der Kurs muss dazu passen. Sagen Sie Ihrer Vermittlungsfachkraft deshalb schon im ersten Gespräch, welches Zeitmodell Sie brauchen und warum. Ein nachvollziehbarer Grund wie Kinderbetreuung wird in der Regel akzeptiert.",
          "Bei der Förderung für Beschäftigte nach dem Qualifizierungschancengesetz stimmen Sie das Zeitmodell mit Ihrem Arbeitgeber ab, weil die Weiterbildung ganz oder teilweise in die Arbeitszeit fällt. Über die Förderung entscheidet in beiden Fällen die Agentur für Arbeit oder das Jobcenter.",
        ],
      },
      {
        titel: "So finden Sie Kurse im passenden Zeitmodell",
        absaetze: [
          "Im Kurskatalog der FDM Akademie lässt sich nach Vollzeit und Teilzeit filtern. Nicht jeder Kurs wird in beiden Zeitmodellen angeboten; gerade bei längeren Lernwegen aus mehreren Kursen lohnt sich deshalb ein Blick, ob alle Bausteine im gewünschten Zeitmodell verfügbar sind. In der Beratung stellen wir Ihnen einen Weg zusammen, der vollständig in Ihr Zeitmodell passt.",
        ],
      },
    ],
    fragen: [
      {
        frage: "Ist der Abschluss in Teilzeit weniger wert als in Vollzeit?",
        antwort:
          "Nein. Inhalt, Umfang und Zertifikat sind gleich. Auf dem Zertifikat stehen die Inhalte und die Zahl der Unterrichtseinheiten, nicht das Zeitmodell als Wertung.",
      },
      {
        frage: "Kann ich während des Kurses von Vollzeit in Teilzeit wechseln?",
        antwort:
          "Das ist nur in Absprache möglich und bei einer geförderten Weiterbildung nur mit Zustimmung des Kostenträgers, weil das Zeitmodell Teil der Bewilligung ist. Klären Sie das Zeitmodell deshalb vor dem Start.",
      },
      {
        frage: "Wie lange dauert ein Kurs in Teilzeit?",
        antwort:
          "Ungefähr doppelt so lange wie in Vollzeit. Die genaue Dauer steht bei jedem Kurs im Katalog.",
      },
    ],
    links: [
      { name: "Alle Weiterbildungen mit Filter nach Zeitmodell", pfad: "/weiterbildung" },
      { name: "Online-Weiterbildung im virtuellen Klassenzimmer", pfad: "/ratgeber/online-weiterbildung-ablauf" },
      { name: "Förder-Check", pfad: "/#foerder-check" },
    ],
  },
  {
    slug: "quereinstieg-buchhaltung-weiterbildung",
    titel: "Quereinstieg in die Buchhaltung: Mit welcher Weiterbildung er gelingt",
    beschreibung:
      "Quereinstieg in Buchhaltung und Rechnungswesen: welche Kenntnisse Arbeitgeber erwarten, welche Rolle DATEV spielt und wie sich Kurse zu einem sinnvollen Lernweg verbinden lassen.",
    kurz: "Für den Quereinstieg in die Buchhaltung brauchen Sie kein Studium, aber belegbare Kenntnisse: die Grundlagen der Finanzbuchhaltung, sicheren Umgang mit einer gängigen Buchhaltungssoftware und am besten erste Übung mit echten Geschäftsvorfällen. Am häufigsten verlangen Stellenanzeigen DATEV. Ein Lernweg aus aufeinander aufbauenden Kursen führt in einigen Wochen bis wenigen Monaten dorthin.",
    abschnitte: [
      {
        titel: "Für wen sich der Quereinstieg eignet",
        absaetze: [
          "Buchhaltung passt zu Menschen, die gern genau arbeiten, mit Zahlen umgehen können und Ordnung in Abläufe bringen. Viele Quereinsteiger kommen aus dem Einzelhandel, aus Büro- und Verwaltungsberufen, aus der Gastronomie oder kehren nach einer Familienzeit in den Beruf zurück. Eine kaufmännische Ausbildung hilft, ist aber nicht in jedem Fall Voraussetzung: Für Tätigkeiten wie das Kontieren und Buchen laufender Geschäftsvorfälle zählen vor allem nachweisbare Kenntnisse.",
        ],
      },
      {
        titel: "Was Arbeitgeber erwarten",
        absaetze: ["In Stellenanzeigen für Buchhaltungskräfte tauchen immer wieder dieselben Punkte auf:"],
        punkte: [
          "Grundlagen der doppelten Buchführung: Konten, Buchungssätze, Belege",
          "Umgang mit DATEV oder einer vergleichbaren Buchhaltungssoftware",
          "Kenntnisse der Umsatzsteuer im Tagesgeschäft",
          "Sicheres Arbeiten mit Tabellenkalkulation",
          "Sorgfalt, Verschwiegenheit und Termintreue",
        ],
      },
      {
        titel: "Ein sinnvoller Lernweg",
        absaetze: [
          "Bewährt hat sich ein Aufbau in Stufen. Am Anfang stehen die Grundlagen der Finanzbuchhaltung, danach folgt ein Aufbaukurs mit anspruchsvolleren Buchungen und dem Jahresabschluss. Wer weitergehen möchte, ergänzt Kosten- und Leistungsrechnung, Controlling oder die Lohn- und Gehaltsabrechnung. Die Kurse bauen aufeinander auf; eine spätere Stufe ohne die Grundlagen zu belegen, ist nicht sinnvoll.",
          "Bei der FDM Akademie sind solche Lernwege als Kursketten zusammengestellt, zum Beispiel Finanzbuchhaltung mit DATEV, Rechnungswesen oder Lohn und Gehalt mit DATEV. Sie sehen dort auf einen Blick, welche Kurse in welcher Reihenfolge dazugehören und wie lange der gesamte Weg dauert.",
        ],
      },
      {
        titel: "Förderung des Quereinstiegs",
        absaetze: [
          "Wer arbeitslos oder von Arbeitslosigkeit bedroht ist, kann für eine solche Weiterbildung einen Bildungsgutschein bekommen, wenn sie die Chancen auf eine Stelle verbessert. Buchhaltungskenntnisse lassen sich gut begründen, weil sie in fast jeder Branche gebraucht werden. Über die Förderung entscheidet Ihre Agentur für Arbeit oder Ihr Jobcenter; legen Sie im Gespräch am besten zwei oder drei aktuelle Stellenanzeigen vor, die die Kenntnisse verlangen.",
        ],
      },
    ],
    fragen: [
      {
        frage: "Kann ich ohne kaufmännische Ausbildung in der Buchhaltung arbeiten?",
        antwort:
          "Für unterstützende Tätigkeiten wie das Vorbereiten, Kontieren und Buchen von Belegen ja, wenn Sie die Kenntnisse nachweisen können. Für Positionen mit Verantwortung für den Jahresabschluss verlangen Arbeitgeber meist eine kaufmännische Ausbildung oder eine Aufstiegsfortbildung.",
      },
      {
        frage: "Wie lange dauert eine Weiterbildung in der Buchhaltung?",
        antwort:
          "Ein einzelner Kurs dauert in Vollzeit meist vier Wochen. Ein Lernweg aus Grundlagen- und Aufbaukurs dauert entsprechend etwa acht Wochen, mit weiteren Bausteinen einige Monate. In Teilzeit verlängert sich die Dauer.",
      },
      {
        frage: "Warum ist DATEV so wichtig?",
        antwort:
          "DATEV ist die Software, mit der sehr viele Steuerkanzleien und Unternehmen in Deutschland ihre Buchhaltung führen. Wer damit geübt ist, kann in vielen Betrieben ohne lange Einarbeitung mitarbeiten.",
      },
    ],
    links: [
      { name: "Fachbereich Kaufmännisch", pfad: "/weiterbildung/fachbereich/kaufmaennisch" },
      { name: "Kurskette Finanzbuchhaltung mit DATEV", pfad: "/weiterbildung/kurskette/finanzbuchhaltung-mit-datev-vollzeit" },
      { name: "Kurskette Rechnungswesen", pfad: "/weiterbildung/kurskette/rechnungswesen-vollzeit" },
      { name: "Kurskette Lohn und Gehalt mit DATEV", pfad: "/weiterbildung/kurskette/lohn-und-gehalt-mit-datev-vollzeit" },
    ],
  },
  {
    slug: "quereinstieg-it-weiterbildung",
    titel: "Quereinstieg in die IT: Welche Weiterbildung für den Anfang sinnvoll ist",
    beschreibung:
      "Quereinstieg in die IT ohne Studium: welche Richtungen es gibt, womit Einsteiger beginnen sollten und wie Herstellerzertifikate und aufeinander aufbauende Kurse beim Jobeinstieg helfen.",
    kurz: "Der Quereinstieg in die IT gelingt am ehesten mit einem klaren Ziel statt mit einem Kurs für alles. Entscheiden Sie zuerst, ob Sie programmieren, Systeme betreuen oder Anwender unterstützen möchten. Beginnen Sie dann mit den Grundlagen dieser Richtung und bauen Sie Schritt für Schritt auf. Zertifikate und kleine eigene Projekte zählen bei der Bewerbung oft mehr als der bisherige Beruf.",
    abschnitte: [
      {
        titel: "Drei Richtungen für Einsteiger",
        absaetze: ["IT ist kein einzelner Beruf. Für den Einstieg haben sich drei Richtungen bewährt:"],
        punkte: [
          "Programmierung und Webentwicklung: Sie schreiben Software oder bauen Webseiten, zum Beispiel mit Python, Java, JavaScript, HTML und CSS",
          "Systeme und Netzwerke: Sie richten Rechner, Server und Benutzerkonten ein und halten sie am Laufen, zum Beispiel mit Windows Server",
          "Anwenderbetreuung und Büro-IT: Sie helfen Kolleginnen und Kollegen bei Fragen zu Programmen und Geräten und beherrschen die gängigen Office-Anwendungen sicher",
        ],
      },
      {
        titel: "Womit Sie anfangen sollten",
        absaetze: [
          "Wer noch wenig Erfahrung hat, beginnt mit den Grundlagen: Wie arbeitet ein Betriebssystem, wie ist ein Netzwerk aufgebaut, wie denkt man in Abläufen und Daten? Darauf folgt die erste Vertiefung in der gewählten Richtung. Für die Programmierung ist Python ein häufiger Einstieg, weil die Sprache gut lesbar ist und in vielen Bereichen eingesetzt wird. Für die Webentwicklung führt der Weg über HTML und CSS zu JavaScript.",
          "Wichtig ist die Reihenfolge. Ein Aufbaukurs ohne die Grundlagen überfordert und hinterlässt Lücken, die im Bewerbungsgespräch auffallen. Kursketten zeigen, welche Kurse in welcher Reihenfolge zusammengehören.",
        ],
      },
      {
        titel: "Was bei der Bewerbung zählt",
        absaetze: [
          "Arbeitgeber wollen sehen, dass Sie das Gelernte anwenden können. Hilfreich sind Zertifikate, die Inhalte und Umfang der Weiterbildung ausweisen, Herstellerzertifikate, auf die manche Kurse vorbereiten, und eigene kleine Projekte, die Sie zeigen können. Ihr bisheriger Beruf ist dabei kein Nachteil: Wer aus dem Handel, der Logistik oder dem Gesundheitswesen kommt, versteht die Abläufe, für die Software gebaut wird.",
        ],
      },
      {
        titel: "Förderung",
        absaetze: [
          "IT-Weiterbildungen lassen sich gegenüber der Agentur für Arbeit oder dem Jobcenter gut begründen, wenn Sie ein konkretes Berufsziel nennen und passende Stellenanzeigen vorlegen. Über die Förderung entscheidet der Kostenträger. Beschäftigte können mit ihrem Arbeitgeber klären, ob eine Förderung nach dem Qualifizierungschancengesetz in Frage kommt.",
        ],
      },
    ],
    fragen: [
      {
        frage: "Bin ich mit über 40 zu alt für den Quereinstieg in die IT?",
        antwort:
          "Nein. In der IT zählt, was Sie können. Berufs- und Lebenserfahrung sind im Umgang mit Kunden und in der Projektarbeit ein Vorteil.",
      },
      {
        frage: "Muss ich gut in Mathematik sein?",
        antwort:
          "Für die meisten Einstiegsaufgaben reichen logisches Denken und Sorgfalt. Höhere Mathematik brauchen Sie nur in einzelnen Spezialgebieten.",
      },
      {
        frage: "Wie lange dauert der Quereinstieg?",
        antwort:
          "Das hängt vom Ziel ab. Ein einzelner Kurs dauert in Vollzeit meist wenige Wochen, ein Lernweg aus mehreren aufeinander aufbauenden Kursen einige Monate.",
      },
    ],
    links: [
      { name: "Fachbereich IT und EDV", pfad: "/weiterbildung/fachbereich/it-und-edv" },
      { name: "Kurskette Python-Programmierung", pfad: "/weiterbildung/kurskette/python-programmierung-vollzeit" },
      { name: "Kurskette Webseiten mit HTML und CSS", pfad: "/weiterbildung/kurskette/webseiten-mit-html-und-css-vollzeit" },
      { name: "Kurskette Windows Server Hybrid", pfad: "/weiterbildung/kurskette/windows-server-hybrid-vollzeit" },
    ],
  },
  {
    slug: "ki-weiterbildung-fuer-beschaeftigte",
    titel: "Künstliche Intelligenz im Büro: Weiterbildung für Beschäftigte und Unternehmen",
    beschreibung:
      "KI im Büroalltag einführen: was Beschäftigte lernen sollten, wie eine Weiterbildung zu Künstlicher Intelligenz aufgebaut ist und wie Arbeitgeber die Förderung für Beschäftigte nutzen können.",
    kurz: "Damit Künstliche Intelligenz im Büro wirklich Arbeit abnimmt, müssen die Menschen, die damit arbeiten, die Werkzeuge verstehen: was sie können, wo sie Fehler machen und was beim Datenschutz zu beachten ist. Eine Weiterbildung vermittelt genau das, in Teilzeit auch neben der Arbeit. Für Beschäftigte kann der Arbeitgeber eine Förderung nach dem Qualifizierungschancengesetz beantragen.",
    abschnitte: [
      {
        titel: "Wobei KI im Büro hilft",
        absaetze: ["Typische Aufgaben, bei denen KI-Werkzeuge heute spürbar entlasten:"],
        punkte: [
          "Texte entwerfen, kürzen und umformulieren, zum Beispiel E-Mails, Angebote und Protokolle",
          "Unterlagen zusammenfassen und nach bestimmten Angaben durchsuchen",
          "Tabellen auswerten und Auswertungen vorbereiten",
          "Wiederkehrende Abläufe vorbereiten, etwa Antworten auf häufige Kundenanfragen",
          "Ideen sammeln und Entwürfe für Präsentationen erstellen",
        ],
      },
      {
        titel: "Was Beschäftigte dafür lernen sollten",
        absaetze: [
          "Der Nutzen hängt weniger vom Werkzeug ab als vom Umgang damit. In einer Weiterbildung lernen Teilnehmende, Aufgaben so zu beschreiben, dass brauchbare Ergebnisse entstehen, Ergebnisse zu prüfen statt sie ungelesen zu übernehmen, und zu erkennen, welche Aufgaben sich eignen und welche nicht. Dazu kommen die Regeln: Welche Daten dürfen in ein KI-Werkzeug eingegeben werden, was gilt für personenbezogene Daten und Betriebsgeheimnisse, und wer haftet für Fehler?",
        ],
      },
      {
        titel: "Wie eine Weiterbildung aufgebaut ist",
        absaetze: [
          "Die Kurse zur Künstlichen Intelligenz bei der FDM Akademie sind Module, die sich kombinieren lassen: vom Einstieg in die Grundlagen über die Anwendung im Büro bis zu Vertiefungen für einzelne Aufgabenbereiche. Der Unterricht findet live im virtuellen Klassenzimmer statt. Für Beschäftigte ist Teilzeit üblich, damit der Betrieb weiterläuft.",
        ],
      },
      {
        titel: "Förderung für Beschäftigte",
        absaetze: [
          "Nach dem Qualifizierungschancengesetz kann die Agentur für Arbeit die Lehrgangskosten für Beschäftigte ganz oder teilweise übernehmen und dem Arbeitgeber einen Zuschuss zum Arbeitsentgelt zahlen. Wie hoch die Förderung ausfällt, hängt unter anderem von der Größe des Betriebs ab. Voraussetzung ist unter anderem, dass die Weiterbildung mehr als 120 Stunden umfasst und über eine kurze Einweisung am Arbeitsplatz hinausgeht.",
          "Den Antrag stellt der Arbeitgeber, und zwar vor Beginn der Weiterbildung. Über die Förderung entscheidet die Agentur für Arbeit. Wir stellen Ihnen die Unterlagen zum Kurs zusammen und begleiten Sie und Ihren Arbeitgeber bei der Antragstellung.",
        ],
      },
      {
        titel: "So gehen Unternehmen vor",
        absaetze: ["In der Praxis hat sich diese Reihenfolge bewährt:"],
        punkte: [
          "Festlegen, welche Aufgaben im Betrieb mit KI unterstützt werden sollen und wer daran arbeitet",
          "Passende Module auswählen und ein Angebot für die Agentur für Arbeit anfordern",
          "Mit dem Arbeitgeber-Service der Agentur für Arbeit sprechen und den Antrag vor Kursbeginn stellen",
          "Nach der Entscheidung der Agentur den Start festlegen",
        ],
      },
    ],
    fragen: [
      {
        frage: "Brauchen Teilnehmende Vorkenntnisse in Programmierung?",
        antwort:
          "Nein. Die Einstiegsmodule setzen sicheren Umgang mit dem Computer und den üblichen Büroprogrammen voraus, aber keine Programmierkenntnisse.",
      },
      {
        frage: "Können mehrere Beschäftigte eines Betriebs gemeinsam teilnehmen?",
        antwort:
          "Ja. Der Arbeitgeber kann die Förderung für mehrere Beschäftigte beantragen. Sprechen Sie uns an, damit wir die Teilnahme gemeinsam planen.",
      },
      {
        frage: "Gilt die Förderung auch für kleine Betriebe?",
        antwort:
          "Ja. Die Förderung für Beschäftigte steht Betrieben jeder Größe offen; kleine Betriebe werden in der Regel stärker gefördert als große. Die Entscheidung trifft die Agentur für Arbeit.",
      },
    ],
    links: [
      { name: "Fachbereich Künstliche Intelligenz", pfad: "/weiterbildung/fachbereich/kuenstliche-intelligenz" },
      { name: "Qualifizierungschancengesetz", pfad: "/qcg" },
      { name: "Förder-Check für Beschäftigte", pfad: "/qcg#foerder-check" },
    ],
  },
];

export const ratgeberArtikel = (slug: string) => RATGEBER.find((a) => a.slug === slug) ?? null;
