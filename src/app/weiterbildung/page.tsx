import type { Metadata } from "next";
import Link from "next/link";
import { Award, GraduationCap, Laptop, Users } from "lucide-react";
import AnfrageFormular from "@/components/AnfrageFormular";
import KatalogListe from "@/components/KatalogListe";
import { fachbereiche, ladeKatalog } from "@/lib/katalog";
import { bereichsListe, breadcrumb } from "@/lib/schema";
import { BASE, bereichPfad, kennzahlen, ldJson } from "@/lib/site";

export const metadata: Metadata = {
  title: "Geförderte Weiterbildung online – über 650 Kurse im Katalog",
  description:
    "Kurskatalog der FDM Akademie: über 650 Weiterbildungen live im virtuellen Klassenzimmer, in Vollzeit oder Teilzeit. Förderung über Bildungsgutschein oder Qualifizierungschancengesetz möglich.",
  alternates: { canonical: `${BASE}/weiterbildung` },
  openGraph: {
    title: "Geförderte Weiterbildung online – Kurskatalog der FDM Akademie",
    description:
      "Über 650 Weiterbildungen live im virtuellen Klassenzimmer, in Vollzeit oder Teilzeit. Förderung mit Bildungsgutschein möglich.",
    url: `${BASE}/weiterbildung`,
    type: "website",
  },
};

const vorteile = [
  {
    icon: Award,
    titel: "Förderung möglich",
    text: "Mit Bildungsgutschein der Agentur für Arbeit oder des Jobcenters, für Beschäftigte über das Qualifizierungschancengesetz.",
  },
  {
    icon: Laptop,
    titel: "Live im virtuellen Klassenzimmer",
    text: "Unterricht mit Dozentinnen und Dozenten in Echtzeit, von zu Hause aus.",
  },
  {
    icon: Users,
    titel: "Persönliche Betreuung",
    text: "Feste Ansprechpersonen der FDM Akademie begleiten Sie von der Beratung bis zum Abschluss.",
  },
];

export default async function WeiterbildungPage() {
  // Das Kennzeichen „AZAV-zugelassen“ geht nur für zugelassene Kurse an den Browser.
  const katalog = await ladeKatalog();
  const kurse = katalog.map(({ zugelassen, ...k }) => (zugelassen ? { ...k, zugelassen } : k));
  const bereiche = fachbereiche(katalog);
  const zahlen = kennzahlen(katalog);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ldJson(
            breadcrumb([
              { name: "Startseite", pfad: "/" },
              { name: "Geförderte Weiterbildung", pfad: "/weiterbildung" },
            ]),
          ),
        }}
      />
      {bereiche.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(bereichsListe(bereiche)) }} />
      )}
      <section className="py-16 text-white" style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium"
            style={{ background: "rgba(255,255,255,0.1)", color: "#bae6fd" }}
          >
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            FDM Akademie · AZAV-zertifizierter Bildungsträger
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Geförderte Weiterbildung</h1>
          <p className="mx-auto max-w-2xl text-lg" style={{ color: "#cbd5e1" }}>
            {zahlen.gesamt > 0
              ? `${zahlen.gesamt.toLocaleString("de-DE")} Weiterbildungen aus ${bereiche.length} Fachbereichen, live im virtuellen Klassenzimmer: ${zahlen.vollzeit.toLocaleString("de-DE")} in Vollzeit und ${zahlen.teilzeit.toLocaleString("de-DE")} in Teilzeit.`
              : "Weiterbildungen für Ihren nächsten beruflichen Schritt, in Vollzeit oder Teilzeit."}{" "}
            Wir klären mit Ihnen, welche Förderung für Sie in Frage kommt.
          </p>
          <a
            href="#beratung"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#2c3892] transition hover:bg-slate-100"
          >
            Kostenlose Beratung anfragen
          </a>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {vorteile.map(({ icon: Icon, titel, text }) => (
            <div key={titel} className="flex gap-4">
              <div className="h-fit rounded-xl p-3" style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}>
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">{titel}</h2>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {bereiche.length > 0 && (
        <section className="border-b border-slate-200 py-10">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-4 text-xl font-bold text-slate-900">Weiterbildung nach Fachbereich</h2>
            <ul className="flex flex-wrap gap-2">
              {bereiche.map((b) => (
                <li key={b.name}>
                  <Link
                    href={bereichPfad(b.name)}
                    className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#3f74bc] hover:text-[#3f74bc]"
                  >
                    {b.name} <span className="text-slate-400">({b.anzahl})</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate-600">
              Sie möchten ein Thema von Grund auf lernen? Unsere{" "}
              <Link href="/weiterbildung/kursketten" className="font-semibold text-[#3f74bc] underline">
                Kursketten
              </Link>{" "}
              verbinden aufeinander aufbauende Weiterbildungen zu einem durchgehenden Lernweg.
            </p>
          </div>
        </section>
      )}

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Unser Kursangebot</h2>
            <p className="text-sm text-slate-500">
              Kurze Selbstlernkurse ohne Förderung finden Sie unter{" "}
              <Link href="/kurse" className="font-semibold text-[#3f74bc] underline">
                Online-Kurse
              </Link>
              .
            </p>
          </div>
          {kurse.length > 0 ? (
            <KatalogListe kurse={kurse} />
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <h3 className="text-lg font-semibold text-slate-900">Unser neues Kursangebot ist in Vorbereitung</h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
                Wir erweitern unser gefördertes Angebot gerade um zahlreiche Weiterbildungen aus IT, kaufmännischen
                Berufen, Gesundheit, Technik und Sprachen. Sagen Sie uns, was Sie interessiert. Wir beraten Sie
                persönlich und melden uns, sobald der passende Kurs startet.
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="beratung" className="scroll-mt-24 bg-slate-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Kostenlose Beratung</h2>
            <p className="mt-3 text-slate-600">
              Schreiben Sie uns kurz, worum es geht. Wir melden uns innerhalb von zwei Werktagen und besprechen mit
              Ihnen den passenden Kurs, den Ablauf und die Fördermöglichkeiten.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>
                <strong>Bildungsgutschein:</strong> Über die Förderung entscheidet Ihre Agentur für Arbeit oder Ihr
                Jobcenter. Wir unterstützen Sie bei der Vorbereitung des Gesprächs.
              </li>
              <li>
                <strong>Beschäftigte:</strong> Über das Qualifizierungschancengesetz kann Ihr Arbeitgeber Zuschüsse zu
                Lehrgangskosten und Arbeitsentgelt erhalten.
              </li>
              <li>
                <strong>Telefon:</strong>{" "}
                <a href="tel:+4971616275120" className="text-[#3f74bc] underline">
                  07161 62 75 120
                </a>
              </li>
            </ul>
          </div>
          <AnfrageFormular quelle="fdm-group.de/weiterbildung" />
        </div>
      </section>
    </>
  );
}
