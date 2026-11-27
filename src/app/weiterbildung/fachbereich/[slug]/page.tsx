import Themenbild from "@/components/Themenbild";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, Clock } from "lucide-react";
import AnfrageFormular from "@/components/AnfrageFormular";
import Kennzeichen from "@/components/Kennzeichen";
import { bereichMehr } from "@/lib/bereiche";
import { dauerText, fachbereiche, kursPfad, ladeKatalog } from "@/lib/katalog";
import { dauerInWorten, kettenPfad, ladeKetten } from "@/lib/ketten";
import { breadcrumb, kursListe } from "@/lib/schema";
import { BASE, bereichPfad, bereichSlug, bereichText, kennzahlen, ldJson } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Fachbereich-Seiten: alle Weiterbildungen eines Themenfelds auf einer Seite, mit kurzer Einordnung.
async function ladeBereich(params: Props["params"]) {
  const { slug } = await params;
  const katalog = await ladeKatalog();
  const bereiche = fachbereiche(katalog);
  const bereich = bereiche.find((b) => bereichSlug(b.name) === slug) ?? null;
  const kurse = bereich
    ? katalog
        .filter((k) => k.fachbereich_name === bereich.name)
        .sort(
          (a, b) => Number(b.zugelassen ?? false) - Number(a.zugelassen ?? false) || a.titel.localeCompare(b.titel, "de"),
        )
    : [];
  const ketten = bereich ? (await ladeKetten(katalog)).filter((k) => k.fachbereich_name === bereich.name) : [];
  return { bereich, kurse, bereiche, ketten };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bereich, kurse } = await ladeBereich(params);
  if (!bereich) return { title: "Fachbereich nicht gefunden", robots: { index: false, follow: true } };
  const z = kennzahlen(kurse);
  const url = `${BASE}${bereichPfad(bereich.name)}`;
  const titel = `Weiterbildung ${bereich.name} – ${z.gesamt} Kurse online`;
  const text = `${z.gesamt} Weiterbildungen im Bereich ${bereich.name}: live im virtuellen Klassenzimmer, ${z.vollzeit} in Vollzeit${
    z.teilzeit ? ` und ${z.teilzeit} in Teilzeit` : ""
  }. Förderung mit Bildungsgutschein möglich, Beratung kostenlos.`;
  return {
    title: titel,
    description: text,
    alternates: { canonical: url },
    openGraph: { title: titel, description: text, url, type: "website" },
    twitter: { title: titel, description: text },
  };
}

export default async function FachbereichSeite({ params }: Props) {
  const { bereich, kurse, bereiche, ketten } = await ladeBereich(params);
  if (!bereich) notFound();
  const z = kennzahlen(kurse);
  const text = bereichText(bereich.name);
  const mehr = bereichMehr(bereich.name);
  const pfad = [
    { name: "Startseite", pfad: "/" },
    { name: "Geförderte Weiterbildung", pfad: "/weiterbildung" },
    { name: bereich.name, pfad: bereichPfad(bereich.name) },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(breadcrumb(pfad)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ldJson(kursListe(`Weiterbildungen ${bereich.name}`, `${BASE}${bereichPfad(bereich.name)}`, kurse)),
        }}
      />

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
                {bereich.name}
              </li>
            </ol>
          </nav>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">Weiterbildung {bereich.name}</h1>
              <p className="mt-4 max-w-3xl text-lg text-slate-200">
                {z.gesamt} {z.gesamt === 1 ? "Weiterbildung" : "Weiterbildungen"} der FDM Akademie im Bereich {bereich.name}
                , live im virtuellen Klassenzimmer: {z.vollzeit} in Vollzeit
                {z.teilzeit > 0 ? ` und ${z.teilzeit} in Teilzeit` : ""}. Sie nehmen bundesweit von zu Hause aus teil.
              </p>
              <a
                href="#beratung"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#2c3892] transition hover:bg-slate-100"
              >
                Kostenlose Beratung anfragen
              </a>
            </div>
            <Themenbild thema={bereich.name} zuerst klasse="aspect-[2/1] lg:aspect-[3/2]" />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-slate-900">Themen</h2>
            <p className="mt-2 text-sm text-slate-600">
              {text
                ? `${text.themen}.`
                : `Die Kurse decken die wichtigsten Themen im Bereich ${bereich.name} ab, vom Einstieg bis zur Vertiefung.`}
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">Für wen?</h2>
            <p className="mt-2 text-sm text-slate-600">
              {text
                ? `Die Weiterbildungen richten sich an ${text.fuerWen}.`
                : "Die Weiterbildungen richten sich an Einsteiger, Wiedereinsteiger und Fachkräfte, die sich beruflich weiterentwickeln möchten."}
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">Förderung</h2>
            <p className="mt-2 text-sm text-slate-600">
              Die FDM GmbH ist ein nach AZAV zugelassener Bildungsträger. Ob für Ihren Wunschkurs ein{" "}
              <Link href="/azav" className="text-[#3f74bc] underline">
                Bildungsgutschein
              </Link>{" "}
              oder das{" "}
              <Link href="/qcg" className="text-[#3f74bc] underline">
                Qualifizierungschancengesetz
              </Link>{" "}
              in Frage kommt, klären wir in der kostenlosen Beratung.
            </p>
          </div>
        </div>
      </section>

      {mehr && (
        <section className="border-b border-slate-200 py-12">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-5">
            <div className="min-w-0 lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900">{bereich.name}: Worum es geht</h2>
              <p className="mt-3 leading-relaxed text-slate-700">{mehr.einstieg}</p>
              <h2 className="mt-8 text-xl font-bold text-slate-900">So finden Sie den passenden Einstieg</h2>
              <p className="mt-3 leading-relaxed text-slate-700">{mehr.weg}</p>
              <p className="mt-4 text-sm text-slate-600">
                Wie Sie eine Weiterbildung bei der Agentur für Arbeit begründen, lesen Sie im Ratgeber{" "}
                <Link href="/ratgeber/gespraech-arbeitsagentur-weiterbildung" className="text-[#3f74bc] underline">
                  Gespräch bei der Agentur für Arbeit
                </Link>
                .
              </p>
            </div>
            <div className="min-w-0 lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="font-bold text-slate-900">Typische Tätigkeiten und Berufsziele</h2>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                  {mehr.ziele.map((ziel) => (
                    <li key={ziel} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3f74bc]" aria-hidden="true" />
                      <span>{ziel}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-500">
                  Die Kurse vermitteln Kenntnisse für diese Tätigkeiten. Welche Voraussetzungen eine bestimmte Stelle
                  zusätzlich verlangt, hängt vom Arbeitgeber ab.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {ketten.length > 0 && (
        <section className="border-b border-slate-200 py-12">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">Kursketten im Bereich {bereich.name}</h2>
            <p className="mb-6 max-w-3xl text-sm text-slate-600">
              Aufeinander aufbauende Weiterbildungen, die Schritt für Schritt von den Grundlagen zur Vertiefung führen.
              Jede Stufe ist ein eigener Kurs mit eigenem Zertifikat.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {ketten.map((k) => (
                <li key={k.slug} className="min-w-0">
                  <Link
                    href={kettenPfad(k)}
                    className="card-hover flex h-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <span className="min-w-0">
                      <span className="block font-semibold text-slate-900 [overflow-wrap:anywhere]">{k.titel}</span>
                      <span className="block text-xs text-slate-500">
                        {k.zeitmodell_name} · {k.grund.stufen} Stufen · {k.grund.ue.toLocaleString("de-DE")} UE ·{" "}
                        {dauerInWorten(k.grund.wochen)}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#3f74bc]" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Alle {z.gesamt} Weiterbildungen im Bereich {bereich.name}
          </h2>
          <p className="mb-6 text-sm text-slate-500">
            Viele Module lassen sich zu einer längeren Qualifizierung kombinieren. Wir stellen mit Ihnen den passenden
            Weg zusammen.
          </p>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {kurse.map((k) => (
              <li key={k.modul_nr} className="min-w-0">
                <Link
                  href={kursPfad(k.modul_nr)}
                  className="card-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5"
                >
                  {k.zugelassen && (
                    <span className="mb-2">
                      <Kennzeichen art="azav" />
                    </span>
                  )}
                  <h3 className="font-semibold leading-snug text-slate-900 [overflow-wrap:anywhere]">{k.titel}</h3>
                  {k.kurzbeschreibung && <p className="mt-2 line-clamp-3 text-sm text-slate-600">{k.kurzbeschreibung}</p>}
                  <span className="mt-auto flex items-center justify-between gap-2 pt-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {[k.zeitmodell_name, dauerText(k), k.lerneinheiten ? `${k.lerneinheiten} UE` : null]
                        .filter(Boolean)
                        .join(" · ")}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#2c3892]">
                      Details <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="beratung" className="scroll-mt-24 bg-slate-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Beratung zum Bereich {bereich.name}</h2>
            <p className="mt-3 text-slate-600">
              Schreiben Sie uns, was Sie beruflich erreichen möchten. Wir empfehlen passende Kurse, erklären den Ablauf
              und klären mit Ihnen die Fördermöglichkeiten. Wir melden uns innerhalb von zwei Werktagen.
            </p>
            <h3 className="mt-8 font-semibold text-slate-900">Weitere Fachbereiche</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {bereiche
                .filter((b) => b.name !== bereich.name)
                .map((b) => (
                  <li key={b.name}>
                    <Link
                      href={bereichPfad(b.name)}
                      className="inline-block rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-[#3f74bc] hover:text-[#3f74bc]"
                    >
                      {b.name} ({b.anzahl})
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <AnfrageFormular quelle={`fdm-group.de${bereichPfad(bereich.name)}`} />
        </div>
      </section>
    </>
  );
}
