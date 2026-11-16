import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, CalendarClock, Clock, GraduationCap } from "lucide-react";
import AnfrageFormular from "@/components/AnfrageFormular";
import { dauerText, ladeKatalog } from "@/lib/katalog";

type Props = { params: Promise<{ modulNr: string }> };

async function findeKurs(params: Props["params"]) {
  const { modulNr } = await params;
  const nummer = decodeURIComponent(modulNr);
  return (await ladeKatalog()).find((k) => k.modul_nr === nummer) ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const kurs = await findeKurs(params);
  if (!kurs) return { title: "Weiterbildung nicht gefunden" };
  return {
    title: `${kurs.titel} – geförderte Weiterbildung`,
    description: (
      kurs.kurzbeschreibung ?? `${kurs.titel}: geförderte Weiterbildung der FDM Akademie im virtuellen Klassenzimmer.`
    ).slice(0, 160),
    alternates: { canonical: `https://www.fdm-group.de/weiterbildung/${encodeURIComponent(kurs.modul_nr)}` },
  };
}

export default async function KursSeite({ params }: Props) {
  const kurs = await findeKurs(params);
  if (!kurs) notFound();

  const fakten = [
    { icon: GraduationCap, name: "Art", wert: kurs.kursart_name },
    { icon: Clock, name: "Zeitmodell", wert: kurs.zeitmodell_name },
    { icon: CalendarClock, name: "Dauer", wert: dauerText(kurs) },
    {
      icon: BookOpen,
      name: "Umfang",
      wert: kurs.lerneinheiten ? `${kurs.lerneinheiten} Unterrichtseinheiten` : null,
    },
  ].filter((f) => f.wert);

  return (
    <>
      <section className="py-14 text-white" style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Link href="/weiterbildung" className="mb-5 inline-flex items-center gap-2 text-sm text-sky-200 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Alle geförderten Weiterbildungen
          </Link>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-200">{kurs.fachbereich_name}</p>
          <h1 className="text-3xl font-bold md:text-4xl">{kurs.titel}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <dl className="mb-8 grid grid-cols-2 gap-4">
              {fakten.map(({ icon: Icon, name, wert }) => (
                <div key={name} className="rounded-xl border border-slate-200 bg-white p-4">
                  <dt className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Icon className="h-4 w-4 text-[#3f74bc]" aria-hidden="true" />
                    {name}
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">{wert}</dd>
                </div>
              ))}
            </dl>

            {kurs.kurzbeschreibung && (
              <>
                <h2 className="text-xl font-bold text-slate-900">Inhalte</h2>
                <p className="mt-3 text-slate-700">{kurs.kurzbeschreibung}</p>
              </>
            )}

            <h2 className="mt-8 text-xl font-bold text-slate-900">Ablauf</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Live-Unterricht im virtuellen Klassenzimmer, Sie nehmen von zu Hause aus teil.</li>
              {kurs.laufender_einstieg && <li>Der Einstieg ist laufend möglich.</li>}
              {kurs.praktikumsstunden ? <li>Mit Praxisphase im Umfang von {kurs.praktikumsstunden} Stunden.</li> : null}
              <li>Persönliche Ansprechpersonen der FDM Akademie begleiten Sie während der gesamten Weiterbildung.</li>
            </ul>

            <h2 className="mt-8 text-xl font-bold text-slate-900">Förderung</h2>
            <p className="mt-3 text-slate-700">
              Diese Weiterbildung ist nach AZAV zugelassen. Mit einem Bildungsgutschein der Agentur für Arbeit oder des
              Jobcenters können die Lehrgangskosten übernommen werden; über die Förderung entscheidet Ihr Kostenträger.
              Für Beschäftigte kommt eine Förderung über das{" "}
              <Link href="/qcg" className="text-[#3f74bc] underline">
                Qualifizierungschancengesetz
              </Link>{" "}
              in Frage.
            </p>
          </div>

          <aside className="lg:col-span-2" id="beratung">
            <h2 className="mb-4 text-xl font-bold text-slate-900">Beratung zu diesem Kurs</h2>
            <AnfrageFormular kurs={kurs.modul_nr} kursTitel={kurs.titel} quelle={`fdm-group.de/weiterbildung/${kurs.modul_nr}`} />
          </aside>
        </div>
      </section>
    </>
  );
}
