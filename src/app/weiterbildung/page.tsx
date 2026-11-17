import type { Metadata } from "next";
import { Award, GraduationCap, Laptop, Users } from "lucide-react";
import AnfrageFormular from "@/components/AnfrageFormular";
import KatalogListe from "@/components/KatalogListe";
import { ladeKatalog } from "@/lib/katalog";

export const metadata: Metadata = {
  title: "Geförderte Weiterbildung – Kurse mit Bildungsgutschein",
  description:
    "Geförderte Weiterbildungen und Umschulungen der FDM Akademie: live im virtuellen Klassenzimmer, in Voll- oder Teilzeit. Förderung über Bildungsgutschein oder Qualifizierungschancengesetz möglich.",
  alternates: { canonical: "https://www.fdm-group.de/weiterbildung" },
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
  // Die Liste braucht den Zulassungsstatus nicht; er bleibt auf dem Server.
  const kurse = (await ladeKatalog()).map(({ zugelassen: _zugelassen, ...k }) => k);

  return (
    <>
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
            Weiterbildungen und Umschulungen für Ihren nächsten beruflichen Schritt, in Vollzeit oder Teilzeit. Wir
            klären mit Ihnen, welche Förderung für Sie in Frage kommt.
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

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Unser Kursangebot</h2>
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
