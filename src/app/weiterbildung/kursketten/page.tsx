import Themenbild from "@/components/Themenbild";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Layers } from "lucide-react";
import BeratungCta from "@/components/BeratungCta";
import { ladeKatalog } from "@/lib/katalog";
import { dauerInWorten, kettenPfad, ladeKetten, type Kurskette } from "@/lib/ketten";
import { breadcrumb } from "@/lib/schema";
import { BASE, ldJson } from "@/lib/site";

const URL_SEITE = `${BASE}/weiterbildung/kursketten`;

export const metadata: Metadata = {
  title: "Kursketten – Weiterbildung Schritt für Schritt",
  description:
    "Kursketten der FDM Akademie: aufeinander aufbauende Weiterbildungen von den Grundlagen bis zur Vertiefung, live im virtuellen Klassenzimmer, in Vollzeit oder Teilzeit.",
  alternates: { canonical: URL_SEITE },
  openGraph: {
    title: "Kursketten – Weiterbildung Schritt für Schritt",
    description:
      "Aufeinander aufbauende Weiterbildungen von den Grundlagen bis zur Vertiefung, live im virtuellen Klassenzimmer.",
    url: URL_SEITE,
    type: "website",
  },
};

// Übersicht aller Kursketten, nach Fachbereich geordnet. Vollzeit und Teilzeit stehen nebeneinander.
export default async function KursketteUebersicht() {
  const ketten = await ladeKetten(await ladeKatalog());
  // Je Thema eine Zeile mit den vorhandenen Zeitmodellen
  const themen = new Map<string, Kurskette[]>();
  for (const k of ketten) themen.set(k.titel, [...(themen.get(k.titel) ?? []), k]);
  const bereiche = new Map<string, Kurskette[][]>();
  for (const gruppe of themen.values()) {
    const b = gruppe[0].fachbereich_name;
    bereiche.set(b, [...(bereiche.get(b) ?? []), gruppe.sort((x) => (x.zeitmodell === "vollzeit" ? -1 : 1))]);
  }
  const sortiert = [...bereiche.entries()].sort((a, b) => b[1].length - a[1].length);

  const pfad = [
    { name: "Startseite", pfad: "/" },
    { name: "Geförderte Weiterbildung", pfad: "/weiterbildung" },
    { name: "Kursketten", pfad: "/weiterbildung/kursketten" },
  ];
  const liste = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kursketten der FDM Akademie",
    url: URL_SEITE,
    numberOfItems: ketten.length,
    itemListElement: ketten.map((k, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: k.name,
      url: `${BASE}${kettenPfad(k)}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(breadcrumb(pfad)) }} />
      {ketten.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(liste) }} />}

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
                Kursketten
              </li>
            </ol>
          </nav>
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium"
            style={{ background: "rgba(255,255,255,0.1)", color: "#bae6fd" }}
          >
            <Layers className="h-4 w-4" aria-hidden="true" />
            Schritt für Schritt zum Ziel
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">Kursketten der FDM Akademie</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">
            Eine Kurskette verbindet einzelne Weiterbildungen zu einem durchgehenden Lernweg, von den Grundlagen bis
            zur Vertiefung. Jede Stufe baut auf der vorherigen auf und schließt mit einem eigenen Zertifikat ab.
            {ketten.length > 0 ? ` Derzeit gibt es ${themen.size} Kursketten, ${ketten.filter((k) => k.zeitmodell === "teilzeit").length} davon auch in Teilzeit.` : ""}
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-slate-900">Klarer Weg</h2>
            <p className="mt-2 text-sm text-slate-600">
              Sie beginnen mit Stufe 1 und gehen ohne Lücke weiter. So fehlt Ihnen in keinem Kurs das Wissen aus dem
              vorherigen.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">So weit, wie es passt</h2>
            <p className="mt-2 text-sm text-slate-600">
              Sie müssen nicht alle Stufen belegen. Der Umfang richtet sich nach Ihrem Ziel und nach dem Rahmen Ihres
              Bildungsgutscheins.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">Mit Vorkenntnissen einsteigen</h2>
            <p className="mt-2 text-sm text-slate-600">
              Wer bereits Kenntnisse mitbringt, kann nach Absprache auf einer späteren Stufe beginnen. Das klären wir in
              der kostenlosen Beratung.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          {ketten.length === 0 && (
            <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-600">
              Die Kursketten werden gerade geladen. Bitte versuchen Sie es in Kürze erneut oder lassen Sie sich beraten.
            </p>
          )}
          {sortiert.map(([bereich, gruppen]) => (
            <div key={bereich}>
              <div className="mb-5 flex items-center gap-4">
                <Themenbild thema={bereich} dekorativ klasse="h-16 w-24 shrink-0" sizes="96px" />
                <h2 className="text-2xl font-bold text-slate-900">{bereich}</h2>
              </div>
              <ul className="grid gap-4 md:grid-cols-2">
                {gruppen.map((gruppe) => {
                  const k = gruppe[0];
                  return (
                    <li key={k.titel} className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5">
                      <h3 className="font-semibold leading-snug text-slate-900 [overflow-wrap:anywhere]">{k.titel}</h3>
                      {k.beschreibung && <p className="mt-2 line-clamp-3 text-sm text-slate-600">{k.beschreibung}</p>}
                      <p className="mt-3 text-xs text-slate-500">
                        {k.stufen
                          .map((s) => `${s.nr}. ${s.kurs.titel.replace(/ - Teilzeit$/, "")}${s.optional ? " (optional)" : ""}`)
                          .join(" → ")}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-4">
                        {gruppe.map((v) => (
                          <Link
                            key={v.slug}
                            href={kettenPfad(v)}
                            className="inline-flex items-center gap-1 rounded-full border border-[#3f74bc] px-3 py-1.5 text-sm font-semibold text-[#2c3892] hover:bg-blue-50"
                          >
                            {v.zeitmodell_name}: {v.grund.stufen} Stufen, {dauerInWorten(v.grund.wochen)}
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <BeratungCta
        titel="Welche Kurskette passt zu Ihnen?"
        text="Wir besprechen mit Ihnen Ihr Ziel, Ihre Vorkenntnisse und den Rahmen Ihrer Förderung und stellen den passenden Weg zusammen."
      />
    </>
  );
}
