import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Award,
  BookOpen,
  Users,
  ArrowRight,
  GraduationCap,
  Laptop,
  Shield,
  ChevronRight,
  ChevronDown,
  XCircle,
} from "lucide-react";
import FoerderCheckAbschnitt from "@/components/FoerderCheckAbschnitt";
import Kennzeichen from "@/components/Kennzeichen";
import { fachbereiche, ladeKatalog } from "@/lib/katalog";
import { buildMetadata } from "@/lib/metadata";
import { faqSeite, fragen } from "@/lib/faq";
import { bereichPfad, kennzahlen, ldJson, TRAEGER } from "@/lib/site";

export const metadata = buildMetadata("home");

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.fdm-group.de/#webpage",
  url: "https://www.fdm-group.de",
  name: "FDM Akademie – geförderte Weiterbildung online",
  description:
    "Die FDM Akademie ist das Weiterbildungsangebot der FDM GmbH, eines nach AZAV zugelassenen Bildungsträgers: berufliche Weiterbildungen live im virtuellen Klassenzimmer, in Vollzeit und Teilzeit.",
  isPartOf: { "@id": "https://www.fdm-group.de/#website" },
  about: { "@id": "https://www.fdm-group.de/#organization" },
  inLanguage: "de-DE",
};

const usps = [
  {
    icon: Shield,
    title: "AZAV-zertifizierter Träger",
    desc: "Die FDM GmbH ist durch die GZQ GmbH (DAkkS-akkreditiert) als Bildungsträger nach AZAV zugelassen.",
  },
  {
    icon: GraduationCap,
    title: "Förderung nutzen",
    desc: "Wir klären mit Ihnen, ob ein Bildungsgutschein oder das Qualifizierungschancengesetz für Sie in Frage kommt.",
  },
  {
    icon: Laptop,
    title: "Live und online",
    desc: "Unterricht im virtuellen Klassenzimmer mit Dozentinnen und Dozenten in Echtzeit, von zu Hause aus.",
  },
  {
    icon: BookOpen,
    title: "Praxisorientiert",
    desc: "Aktuelle Inhalte mit direktem Bezug zum Arbeitsmarkt, in Vollzeit oder Teilzeit.",
  },
];

const schritte = [
  { titel: "Beratung", text: "Sie schildern uns Ihr Ziel. Wir empfehlen passende Weiterbildungen, kostenlos und unverbindlich." },
  { titel: "Förderung klären", text: "Wir bereiten mit Ihnen das Gespräch mit Agentur für Arbeit, Jobcenter oder Arbeitgeber vor." },
  { titel: "Anmeldung & Start", text: "Sobald die Finanzierung steht, melden Sie sich an und starten online." },
  { titel: "Abschluss", text: "Sie schließen mit einem Zertifikat ab und gehen den nächsten beruflichen Schritt." },
];

// Setzt in langen zusammengesetzten Wörtern eine weiche Trennstelle, damit sie auf schmalen Bildschirmen
// an der Wortfuge mit Trennstrich umbrechen (z. B. „Schlüssel-kompetenzen“) statt mitten im Wort.
const WORTFUGEN = ["kompetenzen", "management", "technik", "gestaltung", "wirtschaft", "verwaltung", "entwicklung"];
const trennbar = (name: string) =>
  WORTFUGEN.reduce(
    (text, teil) => text.replace(new RegExp("([A-Za-z\u00C4\u00D6\u00DC\u00E4\u00F6\u00FC\u00DF]{4,})(" + teil + ")", "g"), "$1\u00AD$2"),
    name,
  );

export default async function Home() {
  const katalog = await ladeKatalog();
  const bereiche = fachbereiche(katalog);
  const anzahl = katalog.length;
  const zahlen = kennzahlen(katalog);
  // Auf der Startseite stehen die fünf wichtigsten Fragen; alle weiteren unter /faq.
  const STARTFRAGEN = [
    "Was ist die FDM Akademie?",
    "Wer kann eine geförderte Weiterbildung machen?",
    "Was kostet eine Weiterbildung bei der FDM Akademie?",
    "Wie läuft der Unterricht ab?",
    "Was ist der Unterschied zwischen geförderter Weiterbildung und den Online-Kursen auf alvatar.de?",
  ];
  const startFragen = fragen({ ...zahlen, bereiche: bereiche.length }).filter((f) => STARTFRAGEN.includes(f.frage));

  const stats = [
    { value: anzahl > 0 ? anzahl.toLocaleString("de-DE") : "900+", label: "Weiterbildungen" },
    { value: bereiche.length > 0 ? String(bereiche.length) : "15", label: "Fachbereiche" },
    { value: "AZAV", label: "Zertifizierter Träger" },
    { value: "100%", label: "Online" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJson(faqSeite(startFragen)) }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #51ade5 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3f74bc 0%, transparent 40%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-sky-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
                <Award size={14} aria-hidden="true" />
                AZAV-zertifizierter Bildungsträger
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ hyphens: "none" }}>
                Ihre Karriere. <span style={{ color: "#51ade5" }}>Gefördert.</span>
                <br />
                Zukunftssicher.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                In der FDM Akademie bilden Sie sich live im virtuellen Klassenzimmer weiter, in Vollzeit oder Teilzeit.
                Wir beraten Sie persönlich und klären mit Ihnen die Förderung.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/weiterbildung"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
                  style={{ color: "#2c3892" }}
                >
                  <GraduationCap size={18} aria-hidden="true" />
                  Weiterbildung finden
                </Link>
                <a
                  href="#foerder-check"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
                  style={{ background: "rgba(81,173,229,0.15)" }}
                >
                  <Users size={18} aria-hidden="true" />
                  Förder-Check starten
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="min-w-0 rounded-2xl p-4 sm:p-6 border border-white/20 text-center"
                  style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-slate-300 text-xs sm:text-sm hyphens-auto [overflow-wrap:anywhere]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-slate-50 border-b border-slate-200 py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-10">
            {/* Auf dem Handy steht das Siegel in einer eigenen Zeile, damit die Liste darunter sauber zentriert ist. */}
            <div className="flex w-full justify-center sm:w-auto">
              <Image
                src="/gzq-zertifikat.svg"
                alt="GZQ AZAV Zertifizierung"
                width={48}
                height={48}
                className="flex-shrink-0"
                style={{ height: "auto" }}
              />
            </div>
            {[
              "AZAV-zertifiziert (GZQ / DAkkS)",
              "Maßnahmenzertifikat §81 SGB III",
              "Bildungsgutschein akzeptiert",
              "Zulassung bis Oktober 2029",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                <CheckCircle size={17} style={{ color: "#3f74bc" }} aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FoerderCheckAbschnitt quelle="fdm-group.de/ (Förder-Check)" />

      {/* Zwei Wege */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1e293b" }}>
              Zwei Wege zu Ihrem Ziel
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Bei uns finden Sie zwei klar getrennte Angebote. So sehen Sie sofort, was gefördert werden kann und was
              Sie selbst buchen.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl p-8 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-200 mb-2">FDM Akademie</div>
              <h3 className="text-2xl font-bold mb-4">Geförderte Weiterbildung</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Live-Unterricht im virtuellen Klassenzimmer",
                  "Weiterbildungen in Vollzeit oder Teilzeit",
                  "Förderung über Bildungsgutschein oder Qualifizierungs\u00ADchancengesetz möglich",
                  "Persönliche Beratung und Begleitung bis zum Abschluss",
                ].map((punkt) => (
                  <li key={punkt} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle size={17} className="flex-shrink-0 mt-0.5 text-sky-200" aria-hidden="true" />
                    {punkt}
                  </li>
                ))}
              </ul>
              <Link
                href="/weiterbildung"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
                style={{ color: "#2c3892" }}
              >
                Kursangebot ansehen <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="rounded-3xl p-8 border-2 border-slate-200 bg-white">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">alvatar.de</span>
                <Kennzeichen art="selbstzahler" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#1e293b" }}>
                Online-Kurse für Selbstzahler
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Kurze Selbstlernkurse zu KI und digitalen Kompetenzen",
                  "Sofort starten, im eigenen Tempo lernen",
                  "Festpreise, direkt online buchbar",
                ].map((punkt) => (
                  <li key={punkt} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle size={17} className="flex-shrink-0 mt-0.5" style={{ color: "#3f74bc" }} aria-hidden="true" />
                    {punkt}
                  </li>
                ))}
                <li className="flex items-start gap-2.5 text-sm text-slate-700">
                  <XCircle size={17} className="flex-shrink-0 mt-0.5 text-amber-600" aria-hidden="true" />
                  Nicht nach AZAV zugelassen, kein Bildungsgutschein
                </li>
              </ul>
              <Link
                href="/kurse"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl border border-[#3f74bc] text-[#3f74bc] hover:bg-blue-50 transition-colors"
              >
                Online-Kurse ansehen <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fachbereiche */}
      {bereiche.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
              <div>
                <div
                  className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-3"
                  style={{ background: "#eff6ff", color: "#3f74bc" }}
                >
                  <GraduationCap size={14} aria-hidden="true" />
                  FDM Akademie
                </div>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1e293b" }}>
                  Weiterbildung nach Fachbereich
                </h2>
              </div>
              <Link
                href="/weiterbildung"
                className="flex-shrink-0 inline-flex items-center gap-1 font-semibold hover:gap-2 transition-all"
                style={{ color: "#3f74bc" }}
              >
                Alle {anzahl.toLocaleString("de-DE")} Weiterbildungen <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {bereiche.map((b) => (
                <li key={b.name} className="min-w-0">
                  <Link
                    href={bereichPfad(b.name)}
                    className="card-hover flex h-full min-w-0 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
                  >
                    {/* Lange Wörter wie „Schlüsselkompetenzen“ trennen statt aus der Kachel laufen lassen */}
                    <span
                      className="text-[15px] sm:text-base font-semibold leading-snug hyphens-auto [overflow-wrap:anywhere]"
                      style={{ color: "#1e293b" }}
                    >
                      {trennbar(b.name)}
                    </span>
                    <span className="mt-3 text-sm text-[#3f74bc]">
                      {b.anzahl} {b.anzahl === 1 ? "Kurs" : "Kurse"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Ablauf */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1e293b" }}>
              So kommen Sie zu Ihrer Weiterbildung
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Wie der Bildungsgutschein funktioniert, lesen Sie unter{" "}
              <Link href="/azav" className="font-semibold text-[#3f74bc] underline">
                Bildungsgutschein
              </Link>
              , die Förderung für Beschäftigte unter{" "}
              <Link href="/qcg" className="font-semibold text-[#3f74bc] underline">
                Qualifizierungschancengesetz
              </Link>
              .
            </p>
          </div>
          <ol className="grid md:grid-cols-4 gap-6">
            {schritte.map((s, i) => (
              <li key={s.titel} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)", color: "white" }}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#1e293b" }}>
                  {s.titel}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* USPs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1e293b" }}>
              Warum FDM GmbH?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Wir verbinden anerkannte Weiterbildung mit persönlicher Beratung und modernem Online-Unterricht.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp) => {
              const Icon = usp.icon;
              return (
                <div key={usp.title} className="bg-white rounded-2xl p-6 border border-slate-200 card-hover">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#eff6ff" }}>
                    <Icon size={22} style={{ color: "#3f74bc" }} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#1e293b" }}>
                    {usp.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{usp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Online-Kurse: kurzer Hinweis */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">alvatar.de</span>
                <Kennzeichen art="selbstzahler" />
              </div>
              <p className="text-sm text-slate-700">
                Kurze Selbstlernkurse zu Künstlicher Intelligenz und digitalen Kompetenzen buchen Sie direkt online.
                Eine Förderung ist dort nicht möglich.
              </p>
            </div>
            <Link
              href="/kurse"
              className="flex-shrink-0 inline-flex items-center gap-1 font-semibold hover:gap-2 transition-all"
              style={{ color: "#3f74bc" }}
            >
              Online-Kurse ansehen <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kurzporträt */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#1e293b" }}>
            Die FDM Akademie in Kürze
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Die FDM Akademie ist das Weiterbildungsangebot der {TRAEGER.name}, eines nach AZAV zugelassenen
            Bildungsträgers aus {TRAEGER.ort} in Baden-Württemberg.{" "}
            {anzahl > 0
              ? `Sie bietet ${anzahl.toLocaleString("de-DE")} berufliche Weiterbildungen aus ${bereiche.length} Fachbereichen an, davon ${zahlen.vollzeit.toLocaleString("de-DE")} in Vollzeit und ${zahlen.teilzeit.toLocaleString("de-DE")} in Teilzeit.`
              : "Sie bietet berufliche Weiterbildungen aus vielen Fachbereichen an, in Vollzeit und in Teilzeit."}{" "}
            Der Unterricht findet live im virtuellen Klassenzimmer statt, sodass Teilnehmende bundesweit von zu Hause
            aus lernen. Eine Förderung über den Bildungsgutschein der Agentur für Arbeit oder des Jobcenters sowie über
            das Qualifizierungschancengesetz für Beschäftigte ist möglich; die Beratung dazu ist kostenlos.
          </p>
          <dl className="mt-8 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
            {[
              ["Träger", `${TRAEGER.name}, ${TRAEGER.strasse}, ${TRAEGER.plz} ${TRAEGER.ort}`],
              ["Trägerzulassung", `AZAV, Zertifikat-Nr. ${TRAEGER.zertifikat}, gültig bis ${TRAEGER.zertifikatBis}`],
              ["Unterricht", "live im virtuellen Klassenzimmer, bundesweit, Vollzeit oder Teilzeit"],
              ["Förderwege", "Bildungsgutschein, Qualifizierungschancengesetz"],
              ["Beratung", `kostenlos, Telefon ${TRAEGER.telefon}, Montag bis Freitag 9 bis 17 Uhr`],
            ].map(([name, wert]) => (
              <div key={name} className="flex gap-3 border-b border-slate-100 pb-3">
                <dt className="w-32 flex-shrink-0 font-semibold text-slate-900">{name}</dt>
                <dd className="text-slate-700">{wert}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-4"
              style={{ background: "#eff6ff", color: "#3f74bc" }}
            >
              <BookOpen size={14} aria-hidden="true" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1e293b" }}>
              Häufige Fragen
            </h2>
          </div>
          <div className="space-y-4">
            {startFragen.map((item) => (
              <details key={item.frage} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <summary
                  className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-semibold marker:hidden"
                  style={{ color: "#1e293b" }}
                >
                  {item.frage}
                  <ChevronDown
                    size={20}
                    className="flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                    style={{ color: "#3f74bc" }}
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-6 pb-6 -mt-1 text-sm text-slate-600 leading-relaxed">{item.antwort}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center">
            <Link href="/faq" className="inline-flex items-center gap-1 font-semibold text-[#3f74bc] hover:underline">
              Alle Fragen und Antworten <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}>
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "url(/dot-grid.svg)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto px-6 text-center text-white relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kostenlose Beratung gewünscht?</h2>
          <p className="mb-8 text-lg" style={{ color: "#cbd5e1" }}>
            Wir helfen Ihnen, die richtige Weiterbildung zu finden, und klären mit Ihnen die Fördermöglichkeiten.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/weiterbildung#beratung"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              style={{ color: "#2c3892" }}
            >
              <Users size={18} aria-hidden="true" />
              Jetzt Beratung anfragen
            </Link>
            <a
              href="tel:+4971616275120"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
            >
              07161 – 6275120
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
