// =============================================================
// lib/faq.ts — Häufige Fragen zur FDM Akademie
// Eine Quelle für die FAQ-Seite, die Startseite, die strukturierten Daten und llms.txt.
// Die Antworten sind bewusst vollständig formuliert, damit sie für sich allein verständlich sind.
// =============================================================

export type Frage = { frage: string; antwort: string; rubrik: string };

export function fragen(z: { gesamt: number; vollzeit: number; teilzeit: number; bereiche: number }): Frage[] {
  const anzahl = z.gesamt > 0 ? `${z.gesamt.toLocaleString("de-DE")} Weiterbildungen` : "mehrere hundert Weiterbildungen";
  const bereiche = z.bereiche > 0 ? `${z.bereiche} Fachbereichen` : "vielen Fachbereichen";
  return [
    {
      rubrik: "Über die FDM Akademie",
      frage: "Was ist die FDM Akademie?",
      antwort:
        "Die FDM Akademie ist das Weiterbildungsangebot der FDM GmbH, eines nach AZAV zugelassenen Bildungsträgers mit Sitz in Eislingen/Fils (Baden-Württemberg). Sie bietet berufliche Weiterbildungen an, die live im virtuellen Klassenzimmer stattfinden und bundesweit von zu Hause aus besucht werden können. Die Trägerzulassung hat die GZQ GmbH erteilt, eine von der DAkkS akkreditierte Zertifizierungsstelle (Zertifikat-Nr. Z-000473-2, gültig bis 17.10.2029).",
    },
    {
      rubrik: "Über die FDM Akademie",
      frage: "Welche Weiterbildungen bietet die FDM Akademie an?",
      antwort: `Das Kursangebot umfasst ${anzahl} aus ${bereiche}, darunter IT und EDV, kaufmännische Berufe, Sprachen, Technik und CAD, Gesundheit und Pflege, Medien und Design, Umwelt und Energie, Management, Qualitätsmanagement, Marketing und Künstliche Intelligenz. Die meisten Kurse sind einzelne Module von einer bis zu mehreren Wochen Dauer, die sich zu einer längeren Qualifizierung kombinieren lassen.`,
    },
    {
      rubrik: "Über die FDM Akademie",
      frage: "Was ist eine Kurskette?",
      antwort:
        "Eine Kurskette verbindet einzelne Weiterbildungen der FDM Akademie zu einem durchgehenden Lernweg, zum Beispiel Finanzbuchhaltung mit DATEV in den Stufen Basics, Aufbaukurs und Expertenkurs. Die Stufen bauen aufeinander auf; jede Stufe ist ein eigener Kurs mit eigenem Zertifikat. Teilnehmende beginnen in der Regel mit Stufe 1 und belegen so viele Stufen, wie ihr Ziel und der Rahmen ihres Bildungsgutscheins zulassen. Wer Vorkenntnisse mitbringt, kann nach Absprache auf einer späteren Stufe einsteigen.",
    },
    {
      rubrik: "Über die FDM Akademie",
      frage: "Wie läuft der Unterricht ab?",
      antwort:
        "Der Unterricht findet live im virtuellen Klassenzimmer über Microsoft Teams statt: Trainerinnen und Trainer unterrichten in Echtzeit, die Teilnehmenden nehmen von zu Hause aus an ihrem Computer teil und können Fragen stellen. Zum Lerntag gehören Live-Unterricht, Gruppenarbeiten, Workshops, Fachtutoring, Coaching und Lernbegleitung. Es gibt feste Unterrichtszeiten, je nach Kurs in Vollzeit oder in Teilzeit. Persönliche Ansprechpersonen der FDM Akademie begleiten die Teilnehmenden von der Beratung bis zum Abschluss.",
    },
    {
      rubrik: "Über die FDM Akademie",
      frage: "Wie sieht ein Lerntag in Vollzeit aus?",
      antwort:
        "Ein Lerntag in Vollzeit beginnt um 8:00 Uhr und endet um 16:15 Uhr, montags bis freitags. Er besteht aus zehn Unterrichtseinheiten zu je 45 Minuten, die meist als Doppelstunden stattfinden. Dazwischen liegen drei kurze Pausen von je fünf Minuten und eine Mittagspause von 30 Minuten. Im Training lernen die Teilnehmenden gemeinsam in der Gruppe mit Trainerinnen und Trainern, in der Lernbegleitung arbeiten sie in ihrem eigenen Tempo an Übungen und Projektaufgaben und erhalten bei Bedarf Unterstützung. Teilzeitkurse finden vormittags statt.",
    },
    {
      rubrik: "Teilnahme",
      frage: "In welcher Sprache findet der Unterricht statt?",
      antwort:
        "Alle Weiterbildungen der FDM Akademie finden ausschließlich auf Deutsch statt. Teilnehmende sollten Deutsch mindestens auf dem Niveau B1 bis B2 verstehen, damit sie dem Live-Unterricht folgen und die Aufgaben bearbeiten können. Unterricht, Unterlagen oder Untertitel in anderen Sprachen gibt es nicht.",
    },
    {
      rubrik: "Teilnahme",
      frage: "Bekomme ich Lernmaterial?",
      antwort:
        "Ja. Die Lernmittel für die Weiterbildung stellt die FDM Akademie. Sie sind in den Lehrgangskosten enthalten.",
    },
    {
      rubrik: "Über die FDM Akademie",
      frage: "Gibt es die Weiterbildungen in Vollzeit und in Teilzeit?",
      antwort:
        z.gesamt > 0
          ? `Ja. Von den ${z.gesamt.toLocaleString("de-DE")} Weiterbildungen im Katalog finden ${z.vollzeit.toLocaleString("de-DE")} in Vollzeit und ${z.teilzeit.toLocaleString("de-DE")} in Teilzeit statt. Viele Themen gibt es in beiden Zeitmodellen; ein Teilzeitkurs hat denselben Umfang und dauert entsprechend länger.`
          : "Ja. Viele Themen gibt es in Vollzeit und in Teilzeit; ein Teilzeitkurs hat denselben Umfang und dauert entsprechend länger.",
    },
    {
      rubrik: "Über die FDM Akademie",
      frage: "Kann ich bundesweit teilnehmen?",
      antwort:
        "Ja. Die Weiterbildungen der FDM Akademie finden vollständig online statt. Teilnehmen kann, wer in Deutschland wohnt und über einen Computer mit stabiler Internetverbindung verfügt. Der Sitz des Bildungsträgers in Eislingen/Fils spielt für die Teilnahme keine Rolle.",
    },
    {
      rubrik: "Förderung",
      frage: "Wer kann eine geförderte Weiterbildung machen?",
      antwort:
        "Einen Bildungsgutschein können Menschen erhalten, die arbeitslos oder arbeitsuchend gemeldet oder von Arbeitslosigkeit bedroht sind, wenn die Weiterbildung für ihre berufliche Eingliederung notwendig ist. Ob das zutrifft, entscheidet die Agentur für Arbeit oder das Jobcenter im persönlichen Gespräch. Beschäftigte können über das Qualifizierungschancengesetz gefördert werden; den Antrag stellt in diesem Fall der Arbeitgeber.",
    },
    {
      rubrik: "Förderung",
      frage: "Was ist ein Bildungsgutschein und wie bekomme ich ihn?",
      antwort:
        "Ein Bildungsgutschein ist die Zusage der Agentur für Arbeit oder des Jobcenters, die Kosten einer zugelassenen Weiterbildung zu übernehmen. Er nennt das Bildungsziel, die Dauer, den Geltungsbereich und eine Gültigkeitsfrist, innerhalb der die Weiterbildung beginnen muss. Der Weg: Sie lassen sich bei der FDM Akademie kostenlos beraten, sprechen mit Ihrer Vermittlungsfachkraft über die Weiterbildung und reichen den Gutschein nach der Bewilligung beim Bildungsträger ein.",
    },
    {
      rubrik: "Förderung",
      frage: "Was kostet eine Weiterbildung bei der FDM Akademie?",
      antwort:
        "Mit einem bewilligten Bildungsgutschein übernimmt die Agentur für Arbeit oder das Jobcenter die Lehrgangskosten der zugelassenen Weiterbildung. Bei einer Förderung über das Qualifizierungschancengesetz erhält der Arbeitgeber Zuschüsse zu den Lehrgangskosten. Welche Förderung für einen bestimmten Kurs in Frage kommt und was eine Teilnahme ohne Förderung kostet, klärt die FDM Akademie in der kostenlosen Beratung. Die Beratung selbst ist kostenlos und unverbindlich.",
    },
    {
      rubrik: "Förderung",
      frage: "Wie funktioniert die Förderung für Beschäftigte nach dem Qualifizierungschancengesetz?",
      antwort:
        "Beim Qualifizierungschancengesetz beantragt der Arbeitgeber die Förderung bei der Agentur für Arbeit. Je nach Betriebsgröße kann er Zuschüsse zu den Lehrgangskosten und zum Arbeitsentgelt während der Weiterbildung erhalten. Voraussetzung ist unter anderem, dass die Weiterbildung mehr als 120 Unterrichtseinheiten umfasst und bei einem zugelassenen Träger stattfindet. Die FDM Akademie unterstützt Arbeitgeber und Beschäftigte bei der Vorbereitung des Antrags.",
    },
    {
      rubrik: "Förderung",
      frage: "Was bedeutet AZAV?",
      antwort:
        "AZAV steht für Akkreditierungs- und Zulassungsverordnung Arbeitsförderung. Die Verordnung regelt, welche Bildungsträger und welche Maßnahmen von der Agentur für Arbeit und den Jobcentern gefördert werden dürfen. Die FDM GmbH ist als Träger nach AZAV zugelassen. Zusätzlich braucht jede einzelne Weiterbildung eine eigene Maßnahmezulassung; zugelassene Kurse der FDM Akademie sind auf der Website mit „AZAV-zugelassen“ gekennzeichnet.",
    },
    {
      rubrik: "Teilnahme",
      frage: "Welche technische Ausstattung brauche ich?",
      antwort:
        "Empfohlen wird ein PC oder Laptop mit Windows 10 oder Windows 11, mindestens 8 GB Arbeitsspeicher und einem aktuellen Mehrkern-Prozessor, dazu Mikrofon und Kamera, am besten ein Headset. Der Unterricht findet in Microsoft Teams statt; Virenschutz und Firewall dürfen die Verbindung mit Teams nicht blockieren. Die Internetverbindung sollte mindestens 6 MBit/s im Download und 1 MBit/s im Upload erreichen. Spezielle Software, die für einen Kurs nötig ist, wird im Kurs bereitgestellt oder dort erklärt. Ob Ihre Ausstattung ausreicht, klärt die FDM Akademie vor dem Start mit Ihnen.",
    },
    {
      rubrik: "Teilnahme",
      frage: "Welchen Abschluss erhalte ich?",
      antwort:
        "Nach erfolgreichem Abschluss erhalten Sie ein Zertifikat des Bildungsträgers mit den Inhalten und dem Umfang der Weiterbildung. Kurse mit einem Zusatz wie (IHK), (TÜV), (DATEV) oder einem Herstellernamen bereiten auf die jeweilige externe Prüfung oder das jeweilige Zertifikat vor. Die Prüfungsbedingungen des einzelnen Kurses nennt die FDM Akademie in der Beratung.",
    },
    {
      rubrik: "Teilnahme",
      frage: "Wann kann ich mit der Weiterbildung beginnen?",
      antwort:
        "Viele Kurse beginnen mehrmals im Jahr, einige sogar wöchentlich. Die nächsten geplanten Starttermine stehen auf der jeweiligen Kursseite. Den konkreten Starttermin stimmt die FDM Akademie mit Ihnen in der Beratung ab und bestätigt ihn mit der Anmeldung. Wichtig bei einem Bildungsgutschein: Die Weiterbildung muss innerhalb seiner Gültigkeit beginnen.",
    },
    {
      rubrik: "Teilnahme",
      frage: "Wie nehme ich Kontakt mit der FDM Akademie auf?",
      antwort:
        "Am einfachsten über das Beratungsformular auf fdm-group.de/weiterbildung oder telefonisch unter 07161 6275120 (Montag bis Freitag, 9 bis 17 Uhr). Die FDM Akademie meldet sich innerhalb von zwei Werktagen und bespricht mit Ihnen den passenden Kurs, den Ablauf und die Fördermöglichkeiten.",
    },
    {
      rubrik: "Online-Kurse",
      frage: "Was ist der Unterschied zwischen geförderter Weiterbildung und den Online-Kursen auf alvatar.de?",
      antwort:
        "Die Weiterbildungen der FDM Akademie finden live im virtuellen Klassenzimmer statt, dauern mehrere Wochen bis Monate und können über einen Bildungsgutschein oder das Qualifizierungschancengesetz gefördert werden. Die Online-Kurse auf alvatar.de sind kurze Selbstlernkurse zu Künstlicher Intelligenz und digitalen Kompetenzen für Selbstzahler. Sie sind nicht nach AZAV zugelassen und können nicht mit einem Bildungsgutschein bezahlt werden.",
    },
  ];
}

// Schema.org-FAQPage aus einer Fragenliste.
export const faqSeite = (liste: Frage[], id?: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  ...(id ? { "@id": id } : {}),
  mainEntity: liste.map((f) => ({
    "@type": "Question",
    name: f.frage,
    acceptedAnswer: { "@type": "Answer", text: f.antwort },
  })),
});
