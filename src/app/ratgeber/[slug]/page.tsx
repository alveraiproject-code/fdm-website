import { bildZumThema } from "@/lib/bilder";
import Themenbild from "@/components/Themenbild";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Lightbulb } from "lucide-react";
import AnfrageFormular from "@/components/AnfrageFormular";
import BeratungSprung from "@/components/BeratungSprung";
import { faqSeite } from "@/lib/faq";
import { RATGEBER, RATGEBER_STAND, ratgeberArtikel, ratgeberPfad } from "@/lib/ratgeber";
import { breadcrumb } from "@/lib/schema";
import { BASE, ldJson } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => RATGEBER.map((a) => ({ slug: a.slug }));
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artikel = ratgeberArtikel((await params).slug);
  if (!artikel) return { title: "Ratgeber nicht gefunden", robots: { index: false, follow: true } };
  const url = `${BASE}${ratgeberPfad(artikel.slug)}`;
  return {
    title: artikel.titel,
    description: artikel.beschreibung,
    alternates: { canonical: url },
    openGraph: { title: artikel.titel, description: artikel.beschreibung, url, type: "article" },
    twitter: { title: artikel.titel, description: artikel.beschreibung },
  };
}

const anker = (titel: string) =>
  titel
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Ratgeberartikel: Kurzantwort oben, dann die Abschnitte, Fragen und der Weg zur Beratung.
export default async function RatgeberArtikelSeite({ params }: Props) {
  const artikel = ratgeberArtikel((await params).slug);
  if (!artikel) notFound();
  const url = `${BASE}${ratgeberPfad(artikel.slug)}`;
  const pfad = [
    { name: "Startseite", pfad: "/" },
    { name: "Ratgeber", pfad: "/ratgeber" },
    { name: artikel.titel, pfad: ratgeberPfad(artikel.slug) },
  ];
  const stand = new Date(RATGEBER_STAND).toLocaleDateString("de-DE", { month: "long", year: "numeric" });
  const weitere = RATGEBER.filter(
    (a) => a.slug !== artikel.slug && !artikel.links.some((l) => l.pfad === ratgeberPfad(a.slug)),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(breadcrumb(pfad)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ldJson({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${url}#article`,
            headline: artikel.titel,
            description: artikel.beschreibung,
            image: `${BASE}${bildZumThema(artikel.slug).src}`,
            abstract: artikel.kurz,
            url,
            mainEntityOfPage: url,
            inLanguage: "de-DE",
            datePublished: RATGEBER_STAND,
            dateModified: RATGEBER_STAND,
            author: { "@id": `${BASE}/#organization` },
            publisher: { "@id": `${BASE}/#organization` },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ldJson(faqSeite(artikel.fragen.map((f) => ({ ...f, rubrik: artikel.titel })))),
        }}
      />

      <section className="py-14 text-white" style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}>
        <div className="mx-auto max-w-4xl px-6">
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
            </ol>
          </nav>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">{artikel.titel}</h1>
          <p className="mt-4 text-sm text-sky-200">Ratgeber der FDM Akademie · Stand: {stand}</p>
        </div>
      </section>

      <article className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#2c3892]">
              <Lightbulb className="h-4 w-4" aria-hidden="true" />
              Kurz gesagt
            </h2>
            <p className="mt-2 text-lg leading-relaxed text-slate-800">{artikel.kurz}</p>
          </div>

          <nav aria-label="Inhalt" className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-900">Inhalt</h2>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[#3f74bc]">
              {artikel.abschnitte.map((a) => (
                <li key={a.titel}>
                  <a href={`#${anker(a.titel)}`} className="hover:underline">
                    {a.titel}
                  </a>
                </li>
              ))}
              <li>
                <a href="#fragen" className="hover:underline">
                  Häufige Fragen
                </a>
              </li>
            </ol>
          </nav>

          <Themenbild thema={artikel.slug} klasse="mt-8 aspect-[2/1]" />
          {artikel.abschnitte.map((a) => (
            <section key={a.titel} id={anker(a.titel)} className="scroll-mt-24">
              <h2 className="mt-10 text-2xl font-bold text-slate-900">{a.titel}</h2>
              {a.absaetze.map((t) => (
                <p key={t} className="mt-3 leading-relaxed text-slate-700">
                  {t}
                </p>
              ))}
              {a.punkte && (
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
                  {a.punkte.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section id="fragen" className="scroll-mt-24">
            <h2 className="mt-12 text-2xl font-bold text-slate-900">Häufige Fragen</h2>
            <dl className="mt-4 space-y-4">
              {artikel.fragen.map((f) => (
                <div key={f.frage} className="rounded-xl border border-slate-200 bg-white p-5">
                  <dt className="font-semibold text-slate-900">{f.frage}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-slate-700">{f.antwort}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className="mt-12 text-xl font-bold text-slate-900">Das könnte Sie auch interessieren</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[...artikel.links, ...weitere.map((a) => ({ name: a.titel, pfad: ratgeberPfad(a.slug) }))].map((l) => (
                <li key={l.pfad} className="min-w-0">
                  <Link
                    href={l.pfad}
                    className="card-hover flex h-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
                  >
                    <span className="min-w-0 [overflow-wrap:anywhere]">{l.name}</span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#3f74bc]" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-10 text-xs leading-relaxed text-slate-500">
            Dieser Ratgeber gibt einen allgemeinen Überblick und ersetzt keine Rechtsberatung. Über eine Förderung
            entscheidet im Einzelfall die Agentur für Arbeit oder das Jobcenter.
          </p>
        </div>
      </article>

      <section id="beratung" className="scroll-mt-24 bg-slate-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Kostenlose Beratung zur Weiterbildung</h2>
            <p className="mt-3 text-slate-600">
              Schreiben Sie uns, was Sie beruflich erreichen möchten. Wir empfehlen passende Kurse, erklären den Ablauf
              und geben Ihnen die Unterlagen für Ihr Gespräch bei der Agentur für Arbeit oder beim Jobcenter mit. Wir
              melden uns innerhalb von zwei Werktagen.
            </p>
            <p className="mt-6">
              <Link
                href="/weiterbildung"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#3f74bc] hover:underline"
              >
                Alle Weiterbildungen ansehen <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
          <AnfrageFormular quelle={`fdm-group.de${ratgeberPfad(artikel.slug)}`} />
        </div>
        <BeratungSprung />
      </section>
    </>
  );
}
