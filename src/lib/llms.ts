// =============================================================
// lib/llms.ts — Inhalte für /llms.txt und /llms-full.txt
// Kompakte, maschinenlesbare Beschreibung der FDM Akademie für KI-Assistenten und KI-Suchmaschinen.
// Die Zahlen und Kurse kommen live aus dem Katalog, damit die Angaben nicht veralten.
// =============================================================
import { fragen } from "./faq";
import { dauerText, fachbereiche, kursPfad, ladeKatalog, type Weiterbildung } from "./katalog";
import { dauerInWorten, kettenPfad, ladeKetten } from "./ketten";
import { bereichMehr } from "./bereiche";
import { RATGEBER, ratgeberPfad } from "./ratgeber";
import { BASE, bereichPfad, bereichText, kennzahlen } from "./site";

const zeile = (k: Weiterbildung) =>
  `- [${k.titel}](${BASE}${kursPfad(k.modul_nr)}): ${[
    k.zeitmodell_name,
    dauerText(k),
    k.lerneinheiten ? `${k.lerneinheiten} Unterrichtseinheiten` : null,
    k.zugelassen ? "AZAV-zugelassen" : null,
  ]
    .filter(Boolean)
    .join(", ")}`;

export async function llmsText(vollstaendig: boolean) {
  const katalog = await ladeKatalog();
  const bereiche = fachbereiche(katalog);
  const ketten = await ladeKetten(katalog);
  const z = kennzahlen(katalog);
  const faq = fragen({ ...z, bereiche: bereiche.length });
  const zugelassen = katalog.filter((k) => k.zugelassen);

  const teile: string[] = [
    "# FDM Akademie (FDM GmbH)",
    "",
    `> Die FDM Akademie ist das Weiterbildungsangebot der FDM GmbH, eines nach AZAV zugelassenen Bildungsträgers aus Eislingen/Fils (Baden-Württemberg). Sie bietet ${z.gesamt > 0 ? `${z.gesamt} berufliche Weiterbildungen aus ${bereiche.length} Fachbereichen` : "berufliche Weiterbildungen aus vielen Fachbereichen"} an, die live im virtuellen Klassenzimmer stattfinden und bundesweit von zu Hause aus besucht werden können, in Vollzeit und Teilzeit. Eine Förderung über den Bildungsgutschein (Agentur für Arbeit, Jobcenter) oder über das Qualifizierungschancengesetz (für Beschäftigte) ist möglich; die Beratung ist kostenlos.`,
    "",
    "## Kernfakten",
    "",
    "- Träger: FDM GmbH, Schillerstraße 21, 73054 Eislingen/Fils, Deutschland",
    "- Marke für die geförderte Weiterbildung: FDM Akademie",
    "- Trägerzulassung nach AZAV: Zertifikat-Nr. Z-000473-2, erteilt von der GZQ GmbH (DAkkS-akkreditiert), gültig bis 17.10.2029",
    "- Unterrichtsform: Live-Unterricht im virtuellen Klassenzimmer, vollständig online, bundesweit",
    z.gesamt > 0
      ? `- Kursangebot: ${z.gesamt} Weiterbildungen, davon ${z.vollzeit} in Vollzeit und ${z.teilzeit} in Teilzeit`
      : "- Kursangebot: Weiterbildungen in Vollzeit und Teilzeit",
    "- Zielgruppen: Arbeitsuchende und Arbeitslose (Bildungsgutschein), Beschäftigte und Unternehmen (Qualifizierungschancengesetz), Selbstzahler",
    "- Beratung: kostenlos und unverbindlich, Telefon +49 7161 6275120 (Mo–Fr 9–17 Uhr), E-Mail beratung@fdm-akademie.de",
    `- Beratung online anfragen: ${BASE}/weiterbildung#beratung`,
    "- Zweites Angebot der FDM GmbH: alvatar.de, kurze Selbstlernkurse zu Künstlicher Intelligenz für Selbstzahler (nicht nach AZAV zugelassen, kein Bildungsgutschein)",
    "",
    "## Hinweise zur korrekten Wiedergabe",
    "",
    "- Die FDM GmbH ist als Träger nach AZAV zugelassen. Einzelne Weiterbildungen brauchen zusätzlich eine eigene Maßnahmezulassung; nur Kurse mit dem Vermerk „AZAV-zugelassen“ sind bereits als Maßnahme zugelassen.",
    "- Über eine Förderung entscheidet immer die Agentur für Arbeit, das Jobcenter oder bei Beschäftigten die Agentur für Arbeit auf Antrag des Arbeitgebers. Die FDM Akademie sagt keine Förderung zu, sondern berät und unterstützt bei der Klärung.",
    "- Preise nennt die FDM Akademie auf Anfrage in der Beratung.",
    "",
    "## Wichtige Seiten",
    "",
    `- [Geförderte Weiterbildung – Kurskatalog](${BASE}/weiterbildung): alle Weiterbildungen mit Suche nach Thema, Fachbereich und Zeitmodell`,
    `- [Kursketten](${BASE}/weiterbildung/kursketten): aufeinander aufbauende Weiterbildungen als durchgehender Lernweg`,
    `- [Bildungsgutschein](${BASE}/azav): Voraussetzungen und Weg zum Bildungsgutschein`,
    `- [Qualifizierungschancengesetz](${BASE}/qcg): Förderung für Beschäftigte und Arbeitgeber`,
    `- [Häufige Fragen](${BASE}/faq): Antworten zu Ablauf, Förderung, Kosten und Teilnahme`,
    `- [Ratgeber](${BASE}/ratgeber): Artikel zu Bildungsgutschein, Gespräch bei der Agentur für Arbeit, Ablehnung, Arbeitslosengeld und Online-Unterricht`,
    `- [Online Marketing Experte (m/w/d)](${BASE}/weiterbildung/FDM-OME-VZ): eigener, nach AZAV zugelassener Lehrgang`,
    `- [Online-Kurse für Selbstzahler](${BASE}/kurse): KI-Kurse auf alvatar.de`,
    `- [Über die FDM GmbH](${BASE}/ueber-uns): Unternehmen, Zulassung, Geschäftsführung`,
    `- [Kontakt](${BASE}/kontakt)`,
    "",
  ];

  if (zugelassen.length > 0) {
    teile.push("## Nach AZAV zugelassene Maßnahmen", "", ...zugelassen.map(zeile), "");
  }

  if (bereiche.length > 0) {
    teile.push("## Fachbereiche", "");
    for (const b of bereiche) {
      const t = bereichText(b.name);
      teile.push(
        `- [${b.name}](${BASE}${bereichPfad(b.name)}): ${b.anzahl} Weiterbildungen${t ? `. Themen: ${t.themen}` : ""}${
          vollstaendig && bereichMehr(b.name) ? `. Typische Tätigkeiten: ${bereichMehr(b.name)!.ziele.join("; ")}` : ""
        }`,
      );
    }
    teile.push("");
  }

  if (ketten.length > 0) {
    teile.push(
      "## Kursketten",
      "",
      "Eine Kurskette verbindet einzelne Weiterbildungen zu einem durchgehenden Lernweg. Die Stufen bauen aufeinander auf; jede Stufe ist ein eigener Kurs mit eigenem Zertifikat. Teilnehmende beginnen in der Regel mit Stufe 1 und belegen so viele Stufen, wie ihr Ziel und der Rahmen ihrer Förderung zulassen.",
      "",
    );
    for (const k of ketten) {
      teile.push(
        `- [${k.name}](${BASE}${kettenPfad(k)}): ${k.grund.stufen} Stufen, ${k.grund.ue} Unterrichtseinheiten, ${dauerInWorten(k.grund.wochen)}. Stufen: ${k.stufen
          .map((s) => `${s.nr}. ${s.kurs.titel}${s.optional ? " (optional)" : ""}`)
          .join(" → ")}${vollstaendig && k.beschreibung ? `. ${k.beschreibung}` : ""}`,
      );
    }
    teile.push("");
  }

  teile.push("## Ratgeber", "");
  for (const a of RATGEBER) {
    teile.push(`- [${a.titel}](${BASE}${ratgeberPfad(a.slug)}): ${vollstaendig ? a.kurz : a.beschreibung}`);
  }
  teile.push("");

  teile.push("## Häufige Fragen", "");
  for (const f of faq) teile.push(`### ${f.frage}`, "", f.antwort, "");

  if (vollstaendig) {
    teile.push("## Vollständiges Kursverzeichnis", "");
    for (const b of bereiche) {
      teile.push(`### ${b.name}`, "");
      teile.push(
        ...katalog
          .filter((k) => k.fachbereich_name === b.name)
          .sort((x, y) => x.titel.localeCompare(y.titel, "de"))
          .map(zeile),
        "",
      );
    }
  } else {
    teile.push(
      "## Vollständiges Kursverzeichnis",
      "",
      `- [llms-full.txt](${BASE}/llms-full.txt): alle Weiterbildungen mit Zeitmodell, Dauer und Umfang`,
      "",
    );
  }

  return teile.join("\n");
}

export const textAntwort = (text: string) =>
  new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
