import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Award, BookOpen, CalendarClock, ChevronRight, Clock, Layers, Laptop } from "lucide-react";
import AnfrageFormular from "@/components/AnfrageFormular";
import BeratungSprung from "@/components/BeratungSprung";
import Kennzeichen from "@/components/Kennzeichen";
import { dauerText, kursPfad, ladeKatalog } from "@/lib/katalog";
import { andereKette, dauerInWorten, kettenPfad, ladeKetten, type Kurskette } from "@/lib/ketten";
import { breadcrumb } from "@/lib/schema";
import { BASE, bereichPfad, bereichText, ldJson } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Seite einer Kurskette: was die Kette ist, für wen sie passt und was jede Stufe vermittelt.
async function ladeKette(params: Props["params"]) {
  const { slug } = await params;
  const ketten = await ladeKetten(await ladeKatalog());
  return { kette: ketten.find((k) => k.slug === slug) ?? null, ketten };
}

const umfang = (k: Kurskette) =>
  `${k.grund.stufen} Stufen, ${k.grund.ue.toLocaleString("de-DE")} Unterrichtseinheiten, ${dauerInWorten(k.grund.wochen)} in ${k.zeitmodell_name}`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kette } = await ladeKette(params);
  if (!kette) return { title: "Kurskette nicht gefunden", robots: { index: false, follow: true } };
  const url = `${BASE}${kettenPfad(kette)}`;
  const titel = `${kette.titel} – Kurskette in ${kette.grund.stufen} Stufen (${kette.zeitmodell_name})`;
  const text = `${kette.titel} Schritt für Schritt: ${umfang(kette)}, live im virtuellen Klassenzimmer. Förderung mit Bildungsgutschein möglich, Beratung kostenlos.`;
  return {
    title: titel,
    description: text,
    alternates: { canonical: url },
    openGraph: { title: titel, description: text, url, type: "website" },
    twitter: { title: titel, description: text },
  };
}

export default async function KettenSeite({ params }: Props) {
  const { kette, ketten } = await ladeKette(params);
  if (!kette) notFound();
  const zwilling = andereKette(kette, ketten);
  const optional = kette.stufen.filter((s) => s.optional);
  const bereich = bereichText(kette.fachbereich_name);
  const zugelassen = kette.stufen.every((s) => s.kurs.zugelassen);
  const stunden = Math.round(kette.grund.ue * 0.75);
  // Die Agentur für Arbeit zählt in Unterrichtseinheiten.
  const ueberGrenze = kette.grund.ue > 120;
  const verwandte = ketten
    .filter((k) => k.fachbereich_name === kette.fachbereich_name && k.zeitmodell === kette.zeitmodell && k.slug !== kette.slug)
    .slice(0, 8);

  const pfad = [
    { name: "Startseite", pfad: "/" },
    { name: "Geförderte Weiterbildung", pfad: "/weiterbildung" },
    { name: "Kursketten", pfad: "/weiterbildung/kursketten" },
    { name: kette.name, pfad: kettenPfad(kette) },
  ];

  const fakten = [
    { icon: Layers, name: "Aufbau", wert: `${kette.grund.stufen} Stufen${optional.length ? ` + ${optional.length} optional` : ""}` },
    { icon: BookOpen, name: "Umfang", wert: `${kette.grund.ue.toLocaleString("de-DE")} Unterrichts\u00ADeinheiten` },
    { icon: CalendarClock, name: "Dauer", wert: dauerInWorten(kette.grund.wochen) },
    { icon: Clock, name: "Zeitmodell", wert: kette.zeitmodell_name },
    { icon: Laptop, name: "Unterricht", wert: "live im virtuellen Klassenzimmer" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${BASE}${kettenPfad(kette)}#course`,
    name: `${kette.titel} (Kurskette, ${kette.zeitmodell_name})`,
    description: [kette.beschreibung, `Kurskette der FDM Akademie: ${umfang(kette)}, live im virtuellen Klassenzimmer.`]
      .filter(Boolean)
      .join(" "),
    url: `${BASE}${kettenPfad(kette)}`,
    inLanguage: "de-DE",
    provider: { "@id": `${BASE}/#organization` },
    about: kette.fachbereich_name,
    educationalCredentialAwarded: "Zertifikat des Bildungsträgers je abgeschlossener Stufe",
    ...(zugelassen ? { financialAidEligible: "Bildungsgutschein (Agentur für Arbeit, Jobcenter)" } : {}),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["online", kette.zeitmodell === "teilzeit" ? "part-time" : "full-time"],
      courseWorkload: `PT${stunden}H`,
      location: { "@type": "VirtualLocation", url: `${BASE}${kettenPfad(kette)}` },
    },
    hasPart: kette.stufen.map((s) => ({
      "@type": "Course",
      "@id": `${BASE}${kursPfad(s.kurs.modul_nr)}#course`,
      name: s.kurs.titel,
      url: `${BASE}${kursPfad(s.kurs.modul_nr)}`,
      position: s.nr,
    })),
    offers: { "@type": "Offer", category: "Paid", url: `${BASE}${kettenPfad(kette)}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(breadcrumb(pfad)) }} />

      <section className="py-14 text-white" style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="Sie sind hier" className="mb-5 text-sm text-sky-200">
            <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
              {pfad.slice(0, -1).map((p) => (
                <li key={p.pfad} className="flex items-center gap-1.5">
                  <Link href={p.pfad} className="hover:text-white hover:underline">
                    {p.name}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                </li>
              ))}
              <li aria-current="page" className="text-white/80">
                {kette.titel}
              </li>
            </ol>
          </nav>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">
              Kurskette · {kette.fachbereich_name}
            </p>
            {zugelassen && <Kennzeichen art="azav" hell />}
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">{kette.titel}</h1>
          <p className="mt-2 text-lg text-sky-100">
            {kette.grund.stufen} aufeinander aufbauende Stufen in {kette.zeitmodell_name}
          </p>
          {kette.beschreibung && <p className="mt-4 max-w-3xl text-slate-200">{kette.beschreibung}</p>}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-5">
          <div className="min-w-0 lg:col-span-3">
            <dl className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {fakten.map(({ icon: Icon, name, wert }) => (
                <div key={name} className="min-w-0 rounded-xl border border-slate-200 bg-white p-4">
                  <dt className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Icon className="h-4 w-4 text-[#3f74bc]" aria-hidden="true" />
                    {name}
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900 hyphens-auto [overflow-wrap:anywhere]">{wert}</dd>
                </div>
              ))}
            </dl>

            {zwilling && (
              <p className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                Zeitmodell wählen:
                <span className="rounded-full bg-[#2c3892] px-3 py-1 font-semibold text-white">
                  {kette.zeitmodell_name}, {dauerInWorten(kette.grund.wochen)}
                </span>
                <Link
                  href={kettenPfad(zwilling)}
                  className="rounded-full border border-slate-300 px-3 py-1 font-semibold text-[#2c3892] hover:bg-blue-50"
                >
                  {zwilling.zeitmodell_name}, {dauerInWorten(zwilling.grund.wochen)}
                </Link>
              </p>
            )}

            <h2 className="text-xl font-bold text-slate-900">Was ist eine Kurskette?</h2>
            <p className="mt-3 text-slate-700">
              Eine Kurskette verbindet einzelne Weiterbildungen der FDM Akademie zu einem durchgehenden Lernweg. Jede
              Stufe baut auf der vorherigen auf: Sie beginnen mit Stufe 1 und gehen ohne Lücke weiter, bis das Ziel
              erreicht ist. Jede Stufe ist ein eigener Kurs mit eigenem Abschluss, sodass Sie auch dann etwas in der
              Hand haben, wenn Sie nicht alle Stufen belegen.
            </p>

            <h2 className="mt-8 text-xl font-bold text-slate-900">Die Stufen im Überblick</h2>
            <ol className="mt-4 space-y-4">
              {kette.stufen.map((s) => (
                <li key={s.kurs.modul_nr} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ background: s.optional ? "#94a3b8" : "linear-gradient(135deg, #2c3892, #3f74bc)" }}
                      aria-hidden="true"
                    >
                      {s.nr}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3f74bc]">
                        Stufe {s.nr}
                        {s.optional ? " · optionale Erweiterung" : ""}
                      </p>
                      <h3 className="mt-0.5 font-semibold leading-snug text-slate-900 [overflow-wrap:anywhere]">
                        <Link href={kursPfad(s.kurs.modul_nr)} className="hover:text-[#3f74bc] hover:underline">
                          {s.kurs.titel}
                        </Link>
                      </h3>
                      {s.kurs.kurzbeschreibung && (
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.kurs.kurzbeschreibung}</p>
                      )}
                      <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                        {s.kurs.lerneinheiten ? <span>{s.kurs.lerneinheiten} Unterrichtseinheiten</span> : null}
                        {dauerText(s.kurs) ? <span>{dauerText(s.kurs)}</span> : null}
                        <Link
                          href={kursPfad(s.kurs.modul_nr)}
                          className="inline-flex items-center gap-1 font-semibold text-[#2c3892] hover:underline"
                        >
                          Zum Kurs <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50">
              <table className="w-full text-sm">
                <caption className="sr-only">Umfang der Kurskette</caption>
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-2 font-semibold">Umfang</th>
                    <th className="px-4 py-2 font-semibold">Stufen</th>
                    <th className="px-4 py-2 font-semibold">Unterrichtseinheiten</th>
                    <th className="px-4 py-2 font-semibold">Dauer</th>
                  </tr>
                </thead>
                <tbody className="text-slate-800">
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-2 font-medium">{optional.length ? "Grundkette" : "Gesamte Kette"}</td>
                    <td className="px-4 py-2">{kette.grund.stufen}</td>
                    <td className="px-4 py-2">{kette.grund.ue.toLocaleString("de-DE")}</td>
                    <td className="px-4 py-2">{dauerInWorten(kette.grund.wochen)}</td>
                  </tr>
                  {optional.length > 0 && (
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-2 font-medium">Mit optionaler Erweiterung</td>
                      <td className="px-4 py-2">{kette.gesamt.stufen}</td>
                      <td className="px-4 py-2">{kette.gesamt.ue.toLocaleString("de-DE")}</td>
                      <td className="px-4 py-2">{dauerInWorten(kette.gesamt.wochen)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <h2 className="mt-8 text-xl font-bold text-slate-900">Für wen ist die Kurskette geeignet?</h2>
            <p className="mt-3 text-slate-700">
              {bereich
                ? `Die Weiterbildungen im Bereich ${kette.fachbereich_name} richten sich an ${bereich.fuerWen}. `
                : ""}
              Stufe 1 ist der Einstieg in die Kette. Wer bereits Vorkenntnisse mitbringt, kann nach Absprache auf einer
              späteren Stufe beginnen. Welche Vorkenntnisse sinnvoll sind und welche Stufe für Sie die richtige ist,
              klären wir in der kostenlosen Beratung.
            </p>

            <h2 className="mt-8 text-xl font-bold text-slate-900">Ablauf</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Live-Unterricht im virtuellen Klassenzimmer, Sie nehmen bundesweit von zu Hause aus teil.</li>
              <li>
                Die Stufen folgen nacheinander. Bei lückenloser Abfolge dauert{" "}
                {optional.length ? "die Grundkette" : "die Kette"} {dauerInWorten(kette.grund.wochen)} in{" "}
                {kette.zeitmodell_name}.
              </li>
              <li>Nach jeder abgeschlossenen Stufe erhalten Sie ein Zertifikat des Bildungsträgers.</li>
              <li>Persönliche Ansprechpersonen der FDM Akademie begleiten Sie über alle Stufen hinweg.</li>
            </ul>

            <h2 className="mt-8 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Award className="h-5 w-5 text-[#3f74bc]" aria-hidden="true" />
              Förderung
            </h2>
            <p className="mt-3 text-slate-700">
              {zugelassen
                ? "Alle Stufen dieser Kette sind nach AZAV zugelassen. Mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters können die Lehrgangskosten übernommen werden; über die Förderung entscheidet Ihr Kostenträger."
                : "Ob und auf welchem Weg diese Kurskette für Sie gefördert werden kann, klären wir mit Ihnen in der kostenlosen Beratung. In Frage kommt zum Beispiel ein Bildungsgutschein der Agentur für Arbeit oder des Jobcenters; über die Förderung entscheidet Ihr Kostenträger."}{" "}
              Ein Bildungsgutschein nennt ein Bildungsziel und eine Höchstdauer. Die Kette lässt sich daran anpassen:
              Erlaubt Ihr Gutschein weniger Umfang, belegen Sie die ersten Stufen; erlaubt er mehr, gehen Sie weiter.
            </p>
            <p className="mt-3 text-slate-700">
              Für Beschäftigte kommt eine Förderung über das{" "}
              <Link href="/qcg" className="text-[#3f74bc] underline">
                Qualifizierungschancengesetz
              </Link>{" "}
              in Frage, das unter anderem einen Umfang von mehr als 120 Unterrichtseinheiten voraussetzt.
              {ueberGrenze
                ? ` ${optional.length ? "Die Grundkette" : "Die Kette"} umfasst ${kette.grund.ue.toLocaleString("de-DE")} Unterrichtseinheiten.`
                : ""}{" "}
              Wie der Weg zum Bildungsgutschein aussieht, lesen Sie unter{" "}
              <Link href="/azav" className="text-[#3f74bc] underline">
                Bildungsgutschein
              </Link>
              , weitere Antworten unter{" "}
              <Link href="/faq" className="text-[#3f74bc] underline">
                Häufige Fragen
              </Link>
              .
            </p>

            {verwandte.length > 0 && (
              <>
                <h2 className="mt-10 text-xl font-bold text-slate-900">
                  Weitere Kursketten im Bereich {kette.fachbereich_name}
                </h2>
                <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                  {verwandte.map((k) => (
                    <li key={k.slug}>
                      <Link
                        href={kettenPfad(k)}
                        className="flex items-center justify-between gap-3 px-4 py-3 text-sm hover:bg-slate-50"
                      >
                        <span className="min-w-0 font-medium text-slate-900">{k.titel}</span>
                        <span className="flex-shrink-0 text-xs text-slate-500">
                          {k.grund.stufen} Stufen · {dauerInWorten(k.grund.wochen)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <Link href="/weiterbildung/kursketten" className="inline-flex items-center gap-1 text-[#3f74bc] hover:underline">
                Alle Kursketten <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={bereichPfad(kette.fachbereich_name)}
                className="inline-flex items-center gap-1 text-[#3f74bc] hover:underline"
              >
                Alle Weiterbildungen im Bereich {kette.fachbereich_name} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
          </div>

          <aside className="min-w-0 scroll-mt-24 lg:col-span-2" id="beratung">
            <div className="lg:sticky lg:top-28">
              <h2 className="mb-4 text-xl font-bold text-slate-900">Beratung zu dieser Kurskette</h2>
              <AnfrageFormular
                kurs={kette.stufen[0].kurs.modul_nr}
                kursTitel={`Kurskette ${kette.name}`}
                quelle={`fdm-group.de${kettenPfad(kette)}`}
              />
            </div>
          </aside>
        </div>
        <BeratungSprung text="Beratung zu dieser Kurskette anfragen" />
      </section>
    </>
  );
}
