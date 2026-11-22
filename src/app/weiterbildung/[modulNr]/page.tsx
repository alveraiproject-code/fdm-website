import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Award, BookOpen, CalendarClock, CheckCircle, ChevronRight, Clock, FileText, GraduationCap, Users } from "lucide-react";
import AnfrageFormular from "@/components/AnfrageFormular";
import BeratungSprung from "@/components/BeratungSprung";
import Kennzeichen from "@/components/Kennzeichen";
import { faqSeite } from "@/lib/faq";
import { dauerText, kursPfad, ladeKatalog, ladeKurstext, type Weiterbildung } from "@/lib/katalog";
import { kettenPfad, kettenVonKurs, ladeKetten } from "@/lib/ketten";
import { kursdetails } from "@/lib/kursdetails";
import { breadcrumb, courseAZAV, kursSchema } from "@/lib/schema";
import { BASE, andereZeitform, bereichPfad, ldJson } from "@/lib/site";

type Props = { params: Promise<{ modulNr: string }> };

async function findeKurs(params: Props["params"]) {
  const { modulNr } = await params;
  const nummer = decodeURIComponent(modulNr);
  const katalog = await ladeKatalog();
  return { kurs: katalog.find((k) => k.modul_nr === nummer) ?? null, katalog };
}

// Beschreibung für Suchergebnisse: Inhalt des Kurses plus die wichtigsten Eckdaten.
function beschreibung(kurs: Weiterbildung) {
  const eckdaten = [
    kurs.zeitmodell_name,
    dauerText(kurs),
    kurs.lerneinheiten ? `${kurs.lerneinheiten} UE` : null,
    "live online",
  ]
    .filter(Boolean)
    .join(", ");
  const inhalt = kurs.kurzbeschreibung ? kurs.kurzbeschreibung.replace(/\s+/g, " ").trim() : "";
  const platz = 150 - eckdaten.length;
  let text = inhalt ? `${kurs.titel}: ${inhalt}` : kurs.titel;
  if (text.length > platz) {
    // Am Wortende kürzen, nie mitten im Wort.
    text = `${text.slice(0, platz).replace(/\s+\S*$/, "").replace(/[,;:–-]+$/, "")} …`;
  } else if (!/[.!?…]$/.test(text)) {
    text += ".";
  }
  return `${text} ${eckdaten}. Beratung kostenlos.`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kurs } = await findeKurs(params);
  if (!kurs) return { title: "Weiterbildung nicht gefunden", robots: { index: false, follow: true } };
  const url = `${BASE}${kursPfad(kurs.modul_nr)}`;
  // Teilzeitkurse tragen das Zeitmodell schon im Titel; dann nicht doppelt nennen.
  const zeit = kurs.titel.includes(kurs.zeitmodell_name) ? "" : ` (${kurs.zeitmodell_name})`;
  const titel = kurs.zugelassen
    ? `${kurs.titel} – geförderte Weiterbildung${zeit}`
    : `${kurs.titel} – Weiterbildung online${zeit}`;
  const text = beschreibung(kurs);
  return {
    title: titel,
    description: text,
    alternates: { canonical: url },
    openGraph: { title: titel, description: text, url, type: "website" },
    twitter: { title: titel, description: text },
  };
}

export default async function KursSeite({ params }: Props) {
  const { kurs, katalog } = await findeKurs(params);
  if (!kurs) notFound();
  const details = kursdetails(kurs.modul_nr);
  const zwilling = andereZeitform(kurs, katalog);
  const inKetten = kettenVonKurs(kurs.modul_nr, await ladeKetten(katalog));
  // Der eigene Lehrgang hat seine ausführlichen Inhalte bereits in den Kursdetails.
  const text = details ? null : await ladeKurstext(kurs.modul_nr);
  // Weitere Kurse desselben Fachbereichs im selben Zeitmodell, alphabetisch um den aktuellen Kurs herum.
  const verwandte = (() => {
    const gleiche = katalog
      .filter((k) => k.fachbereich_name === kurs.fachbereich_name && k.zeitmodell === kurs.zeitmodell)
      .sort((a, b) => a.titel.localeCompare(b.titel, "de"));
    const stelle = gleiche.findIndex((k) => k.modul_nr === kurs.modul_nr);
    const start = Math.max(0, Math.min(stelle - 3, gleiche.length - 7));
    return gleiche.slice(start, start + 7).filter((k) => k.modul_nr !== kurs.modul_nr);
  })();

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

  const pfad = [
    { name: "Startseite", pfad: "/" },
    { name: "Geförderte Weiterbildung", pfad: "/weiterbildung" },
    { name: kurs.fachbereich_name, pfad: bereichPfad(kurs.fachbereich_name) },
    { name: kurs.titel, pfad: kursPfad(kurs.modul_nr) },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ldJson(
            details
              ? { ...courseAZAV, url: `${BASE}${kursPfad(kurs.modul_nr)}` }
              : text
                ? { ...kursSchema(kurs), description: `${text.einleitung} ${kursSchema(kurs).description}` }
                : kursSchema(kurs),
          ),
        }}
      />
      {text && text.fragen.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ldJson(faqSeite(text.fragen.map((f) => ({ ...f, rubrik: kurs.titel })))),
          }}
        />
      )}
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
                {kurs.titel.length > 40 ? `${kurs.titel.slice(0, 40)}…` : kurs.titel}
              </li>
            </ol>
          </nav>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">{kurs.fachbereich_name}</p>
            {kurs.zugelassen && <Kennzeichen art="azav" hell />}
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">{kurs.titel}</h1>
          <p className="mt-4 max-w-2xl text-slate-200">
            {details
              ? "Starten Sie Ihre Karriere im digitalen Marketing. Der Lehrgang ist mit dem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters finanzierbar."
              : `${kurs.kursart_name === "Modul" ? "Weiterbildung" : kurs.kursart_name} der FDM Akademie, live im virtuellen Klassenzimmer${
                  dauerText(kurs) ? `, ${dauerText(kurs)} in ${kurs.zeitmodell_name}` : ` in ${kurs.zeitmodell_name}`
                }.`}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <dl className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {fakten.map(({ icon: Icon, name, wert }) => (
                <div key={name} className="min-w-0 rounded-xl border border-slate-200 bg-white p-4">
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

            {!details && zwilling && (
              <p className="mb-8 text-sm text-slate-600">
                Diesen Kurs gibt es auch in {zwilling.zeitmodell_name}
                {dauerText(zwilling) ? ` (${dauerText(zwilling)})` : ""}:{" "}
                <Link href={kursPfad(zwilling.modul_nr)} className="font-semibold text-[#3f74bc] underline">
                  {zwilling.titel}
                </Link>
              </p>
            )}

            {inKetten.map(({ kette, stufe }) => {
              const davor = kette.stufen.find((s) => s.nr === stufe.nr - 1);
              const danach = kette.stufen.find((s) => s.nr === stufe.nr + 1);
              return (
                <div key={kette.slug} className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#3f74bc]">
                    Teil einer Kurskette · Stufe {stufe.nr} von {kette.stufen.length}
                    {stufe.optional ? " · optionale Erweiterung" : ""}
                  </p>
                  <p className="mt-1 font-semibold text-slate-900">
                    <Link href={kettenPfad(kette)} className="hover:text-[#3f74bc] hover:underline">
                      {kette.titel}
                    </Link>
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Dieser Kurs gehört zu einer Folge aufeinander aufbauender Weiterbildungen.
                    {davor ? (
                      <>
                        {" "}
                        Davor steht{" "}
                        <Link href={kursPfad(davor.kurs.modul_nr)} className="text-[#3f74bc] underline">
                          {davor.kurs.titel}
                        </Link>
                        .
                      </>
                    ) : (
                      " Er ist der Einstieg in die Kette."
                    )}
                    {danach && (
                      <>
                        {" "}
                        Danach folgt{" "}
                        <Link href={kursPfad(danach.kurs.modul_nr)} className="text-[#3f74bc] underline">
                          {danach.kurs.titel}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                  <Link
                    href={kettenPfad(kette)}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2c3892] hover:underline"
                  >
                    Zur Kurskette mit allen Stufen <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              );
            })}

            {text && <p className="mb-8 text-lg leading-relaxed text-slate-800">{text.einleitung}</p>}

            {kurs.kurzbeschreibung && (
              <>
                <h2 className="text-xl font-bold text-slate-900">Inhalte</h2>
                <p className="mt-3 text-slate-700">{kurs.kurzbeschreibung}</p>
              </>
            )}

            {text?.abschnitte.map((a) => (
              <div key={a.ueberschrift}>
                <h2 className="mt-8 text-xl font-bold text-slate-900">{a.ueberschrift}</h2>
                <p className="mt-3 leading-relaxed text-slate-700">{a.text}</p>
              </div>
            ))}

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
                {kurs.praktikumsstunden ? <li>Mit Praxisphase im Umfang von {kurs.praktikumsstunden} Stunden.</li> : null}
                <li>Persönliche Ansprechpersonen der FDM Akademie begleiten Sie während der gesamten Weiterbildung.</li>
                <li>Nach erfolgreichem Abschluss erhalten Sie ein Zertifikat des Bildungsträgers.</li>
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
              , weitere Antworten unter{" "}
              <Link href="/faq" className="text-[#3f74bc] underline">
                Häufige Fragen
              </Link>
              .
            </p>

            {text && text.fragen.length > 0 && (
              <>
                <h2 className="mt-10 text-xl font-bold text-slate-900">Fragen zu diesem Kurs</h2>
                <dl className="mt-4 space-y-4">
                  {text.fragen.map((f) => (
                    <div key={f.frage} className="rounded-xl border border-slate-200 bg-white p-4">
                      <dt className="font-semibold text-slate-900">{f.frage}</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-slate-700">{f.antwort}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}

            {verwandte.length > 0 && (
              <>
                <h2 className="mt-10 text-xl font-bold text-slate-900">
                  Weitere Weiterbildungen im Bereich {kurs.fachbereich_name}
                </h2>
                <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                  {verwandte.map((k) => (
                    <li key={k.modul_nr}>
                      <Link
                        href={kursPfad(k.modul_nr)}
                        className="flex items-center justify-between gap-3 px-4 py-3 text-sm hover:bg-slate-50"
                      >
                        <span className="min-w-0 font-medium text-slate-900">{k.titel}</span>
                        <span className="flex-shrink-0 text-xs text-slate-500">
                          {[k.zeitmodell_name, dauerText(k)].filter(Boolean).join(" · ")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={bereichPfad(kurs.fachbereich_name)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#3f74bc] hover:underline"
                >
                  Alle Weiterbildungen im Bereich {kurs.fachbereich_name}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </>
            )}
          </div>

          <aside className="scroll-mt-24 lg:col-span-2" id="beratung">
            <div className="lg:sticky lg:top-28">
              <h2 className="mb-4 text-xl font-bold text-slate-900">Beratung zu diesem Kurs</h2>
              <AnfrageFormular kurs={kurs.modul_nr} kursTitel={kurs.titel} quelle={`fdm-group.de/weiterbildung/${kurs.modul_nr}`} />
            </div>
          </aside>
        </div>
        <BeratungSprung text="Beratung zu diesem Kurs anfragen" />
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
