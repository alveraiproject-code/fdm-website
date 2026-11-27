import Themenbild from "@/components/Themenbild";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import BeratungCta from "@/components/BeratungCta";
import { RATGEBER, ratgeberPfad } from "@/lib/ratgeber";
import { breadcrumb } from "@/lib/schema";
import { BASE, ldJson } from "@/lib/site";

const titel = "Ratgeber: Bildungsgutschein und geförderte Weiterbildung";
const text =
  "Verständliche Antworten rund um die geförderte Weiterbildung: Bildungsgutschein beantragen, Gespräch bei der Agentur für Arbeit, Ablehnung, Arbeitslosengeld und Online-Unterricht.";

export const metadata: Metadata = {
  title: titel,
  description: text,
  alternates: { canonical: `${BASE}/ratgeber` },
  openGraph: { title: titel, description: text, url: `${BASE}/ratgeber`, type: "website" },
  twitter: { title: titel, description: text },
};

// Übersicht der Ratgeberartikel.
export default function RatgeberSeite() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ldJson(
            breadcrumb([
              { name: "Startseite", pfad: "/" },
              { name: "Ratgeber", pfad: "/ratgeber" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ldJson({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: titel,
            url: `${BASE}/ratgeber`,
            itemListElement: RATGEBER.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: a.titel,
              url: `${BASE}${ratgeberPfad(a.slug)}`,
            })),
          }),
        }}
      />

      <section className="py-16 text-white" style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}>
        <div className="mx-auto max-w-4xl px-6">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium"
            style={{ background: "rgba(255,255,255,0.1)", color: "#bae6fd" }}
          >
            <BookOpen size={14} aria-hidden="true" />
            Ratgeber
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">Gut informiert zur geförderten Weiterbildung</h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: "#cbd5e1" }}>
            Wie bekomme ich einen Bildungsgutschein? Was sage ich bei der Agentur für Arbeit? Was passiert mit meinem
            Arbeitslosengeld? Hier finden Sie verständliche Antworten.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-4xl px-6">
          <ul className="grid gap-5 md:grid-cols-2">
            {RATGEBER.map((a) => (
              <li key={a.slug} className="min-w-0">
                <Link
                  href={ratgeberPfad(a.slug)}
                  className="card-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <Themenbild thema={a.slug} dekorativ klasse="mb-4 aspect-[2/1]" sizes="(min-width: 768px) 410px, 90vw" />
                  <h2 className="text-lg font-bold leading-snug text-slate-900">{a.titel}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.beschreibung}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-[#2c3892]">
                    Weiterlesen <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BeratungCta />
    </>
  );
}
