import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Award, BookOpen, CalendarClock, CheckCircle, Clock, FileText, GraduationCap, Users } from "lucide-react";
import AnfrageFormular from "@/components/AnfrageFormular";
import Kennzeichen from "@/components/Kennzeichen";
import { dauerText, kursPfad, ladeKatalog } from "@/lib/katalog";
import { kursdetails } from "@/lib/kursdetails";
import { courseAZAV } from "@/lib/schema";

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
    title: kurs.zugelassen
      ? `${kurs.titel} – geförderte Weiterbildung (${kurs.zeitmodell_name})`
      : `${kurs.titel} – Weiterbildung der FDM Akademie`,
    description: (
      kurs.kurzbeschreibung ?? `${kurs.titel}: Weiterbildung der FDM Akademie im virtuellen Klassenzimmer.`
    ).slice(0, 160),
    alternates: { canonical: `https://www.fdm-group.de${kursPfad(kurs.modul_nr)}` },
  };
}

export default async function KursSeite({ params }: Props) {
  const kurs = await findeKurs(params);
  if (!kurs) notFound();
  const details = kursdetails(kurs.modul_nr);

  const fakten = [
    { icon: GraduationCap, name: "Art", wert: kurs.kursart_name },
    { icon: Clock, name: "Zeitmodell", wert: kurs.zeitmodell_name },
    { icon: CalendarClock, name: "Dauer", wert: dauerText(kurs) },
    {
      icon: BookOpen,
      name: "Umfang",
      wert: kurs.lerneinheiten ? `${kurs.lerneinheiten.toLocaleString("de-DE")} Unterrichtseinheiten` : null,
    },
    { icon: Users, name: "Gruppe", wert: details?.teilnehmer ?? null },
    { icon: FileText, name: "Maßnahme-ID", wert: details?.massnahme ?? null },
  ].filter((f) => f.wert);

  return (
    <>
      {details && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseAZAV).replace(/</g, "\\u003c") }}
        />
      )}
      <section className="py-14 text-white" style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Link href="/weiterbildung" className="mb-5 inline-flex items-center gap-2 text-sm text-sky-200 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Alle Weiterbildungen
          </Link>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">{kurs.fachbereich_name}</p>
            {kurs.zugelassen && <Kennzeichen art="azav" hell />}
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">{kurs.titel}</h1>
          {details && (
            <p className="mt-4 max-w-2xl text-slate-200">
              Starten Sie Ihre Karriere im digitalen Marketing. Der Lehrgang ist mit dem Bildungsgutschein der Agentur
              für Arbeit oder des Jobcenters finanzierbar.
            </p>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <dl className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
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

            {details && details.varianten.length > 1 && (
              <p className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                Zeitmodell wählen:
                {details.varianten.map((v) =>
                  v.modul_nr === kurs.modul_nr ? (
                    <span key={v.modul_nr} className="rounded-full bg-[#2c3892] px-3 py-1 font-semibold text-white">
                      {v.name}
                    </span>
                  ) : (
                    <Link
                      key={v.modul_nr}
                      href={kursPfad(v.modul_nr)}
                      className="rounded-full border border-slate-300 px-3 py-1 font-semibold text-[#2c3892] hover:bg-blue-50"
                    >
                      {v.name}
                    </Link>
                  ),
                )}
              </p>
            )}

            {kurs.kurzbeschreibung && (
              <>
                <h2 className="text-xl font-bold text-slate-900">Inhalte</h2>
                <p className="mt-3 text-slate-700">{kurs.kurzbeschreibung}</p>
              </>
            )}

            {details && (
              <>
                <h2 className="mt-8 text-xl font-bold text-slate-900">Die {details.module.length} Lernmodule</h2>
                <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                  {details.module.map((m, i) => (
                    <li key={m.titel} className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="flex items-start gap-3">
                        <span
                          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                          style={{ background: "#eff6ff", color: "#3f74bc" }}
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="text-sm font-semibold leading-snug text-slate-900">{m.titel}</h3>
                          <p className="mt-1 text-xs leading-relaxed text-slate-600">{m.text}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Für wen?</h2>
                    <Liste punkte={details.zielgruppe} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Voraussetzungen</h2>
                    <Liste punkte={details.voraussetzungen} />
                  </div>
                </div>
              </>
            )}

            <h2 className="mt-8 text-xl font-bold text-slate-900">Ablauf</h2>
            {details ? (
              <ul className="mt-3 space-y-2 text-slate-700">
                {details.lernformen.map((l) => (
                  <li key={l.titel}>
                    <strong>{l.titel}:</strong> {l.text}
                  </li>
                ))}
                <li>
                  <strong>Abschluss:</strong> {details.abschluss}
                </li>
              </ul>
            ) : (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>Live-Unterricht im virtuellen Klassenzimmer, Sie nehmen von zu Hause aus teil.</li>
                {kurs.laufender_einstieg && <li>Der Einstieg ist laufend möglich.</li>}
                {kurs.praktikumsstunden ? <li>Mit Praxisphase im Umfang von {kurs.praktikumsstunden} Stunden.</li> : null}
                <li>Persönliche Ansprechpersonen der FDM Akademie begleiten Sie während der gesamten Weiterbildung.</li>
              </ul>
            )}

            <h2 className="mt-8 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Award className="h-5 w-5 text-[#3f74bc]" aria-hidden="true" />
              Förderung
            </h2>
            <p className="mt-3 text-slate-700">
              {kurs.zugelassen
                ? "Diese Weiterbildung ist nach AZAV zugelassen. Mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters können die Lehrgangskosten übernommen werden; über die Förderung entscheidet Ihr Kostenträger."
                : "Ob und auf welchem Weg diese Weiterbildung für Sie gefördert werden kann, klären wir mit Ihnen in der kostenlosen Beratung. In Frage kommt zum Beispiel ein Bildungsgutschein der Agentur für Arbeit oder des Jobcenters; über die Förderung entscheidet Ihr Kostenträger."}{" "}
              Für Beschäftigte kommt eine Förderung über das{" "}
              <Link href="/qcg" className="text-[#3f74bc] underline">
                Qualifizierungschancengesetz
              </Link>{" "}
              in Frage. Wie der Weg zum Bildungsgutschein aussieht, lesen Sie unter{" "}
              <Link href="/azav" className="text-[#3f74bc] underline">
                Bildungsgutschein
              </Link>
              .
            </p>
          </div>

          <aside className="lg:col-span-2" id="beratung">
            <div className="lg:sticky lg:top-28">
              <h2 className="mb-4 text-xl font-bold text-slate-900">Beratung zu diesem Kurs</h2>
              <AnfrageFormular kurs={kurs.modul_nr} kursTitel={kurs.titel} quelle={`fdm-group.de/weiterbildung/${kurs.modul_nr}`} />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Liste({ punkte }: { punkte: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {punkte.map((p) => (
        <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3f74bc]" aria-hidden="true" />
          {p}
        </li>
      ))}
    </ul>
  );
}
