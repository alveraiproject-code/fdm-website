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
import Kennzeichen from "@/components/Kennzeichen";
import { courses } from "@/lib/courses";
import { fachbereiche, ladeKatalog } from "@/lib/katalog";
import { OME_PFAD } from "@/lib/kursdetails";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";

export const metadata = buildMetadata("home");

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.fdm-group.de/#webpage",
  url: "https://www.fdm-group.de",
  name: "FDM GmbH – Bildungsträger & Online-Akademie",
  description: "AZAV-zertifizierter Bildungsträger mit geförderten Weiterbildungen und KI-Online-Kursen.",
  isPartOf: { "@id": "https://www.fdm-group.de/#website" },
  about: { "@id": "https://www.fdm-group.de/#organization" },
  inLanguage: "de-DE",
};

const featuredCourses = courses.slice(0, 6);

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

export default async function Home() {
  const katalog = await ladeKatalog();
  const bereiche = fachbereiche(katalog);
  const anzahl = katalog.length;

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
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
                <Link
                  href="/weiterbildung#beratung"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
                  style={{ background: "rgba(81,173,229,0.15)" }}
                >
                  <Users size={18} aria-hidden="true" />
                  Kostenlose Beratung
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-6 border border-white/20 text-center"
                  style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
                >
                  <div className="text-4xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-slate-300 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-slate-50 border-b border-slate-200 py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <Image
              src="/gzq-zertifikat.svg"
              alt="GZQ AZAV Zertifizierung"
              width={48}
              height={48}
              className="flex-shrink-0"
              style={{ height: "auto" }}
            />
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
                  "Förderung über Bildungsgutschein oder Qualifizierungschancengesetz möglich",
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
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {bereiche.map((b) => (
                <li key={b.name}>
                  <Link
                    href={`/weiterbildung?bereich=${encodeURIComponent(b.name)}`}
                    className="card-hover flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <span className="font-semibold leading-snug" style={{ color: "#1e293b" }}>
                      {b.name}
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

      {/* Zugelassener Lehrgang */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <Kennzeichen art="azav" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#1e293b" }}>
                Online Marketing Experte <span className="gradient-text">(m/w/d)</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Unser eigener Lehrgang für den umfassenden Einstieg ins Online-Marketing. Finanzierbar über den
                Bildungsgutschein der Agentur für Arbeit oder des Jobcenters.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "1.920 Unterrichtseinheiten, 48 Wochen in Vollzeit oder 96 Wochen in Teilzeit",
                  "9 Lernmodule von SEO bis Performance Marketing",
                  "Abschlusszertifikat des Bildungsträgers",
                  "Laufender Einstieg möglich",
                  "Maßnahme-ID: 01/1024",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle size={16} style={{ color: "#3f74bc", marginTop: 2 }} className="flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={OME_PFAD}
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: "#3f74bc" }}
              >
                Zum Lehrgang
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="rounded-3xl p-8 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}>
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: "url(/dot-grid.svg)", backgroundSize: "28px 28px" }}
                aria-hidden="true"
              />
              <div className="flex items-center gap-3 mb-6 relative">
                <div className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <Award size={28} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider">Zertifikat</div>
                  <div className="font-bold text-lg">AZAV §81 SGB III</div>
                </div>
              </div>
              <div className="space-y-4 relative">
                {[
                  { label: "Zertifizierer", value: "GZQ GmbH / DAkkS" },
                  { label: "Fachbereich", value: "FB4 – Berufliche Weiterbildung" },
                  { label: "Gültig bis", value: "17. Oktober 2029" },
                  { label: "Zertifikat-Nr.", value: "Z-000473-2" },
                  { label: "Maßnahmen-Nr.", value: "Z-000483-2" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center pb-3 text-sm"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    <span className="text-slate-300">{row.label}</span>
                    <span className="font-semibold text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Online-Kurse Teaser */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: "#eff6ff", color: "#3f74bc" }}
                >
                  <Laptop size={14} aria-hidden="true" />
                  alvatar.de – Online-Akademie
                </span>
                <Kennzeichen art="selbstzahler" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1e293b" }}>
                Online-Kurse für Selbstzahler
              </h2>
              <p className="text-slate-600 mt-2 max-w-lg">
                Über 100 kurze Selbstlernkurse rund um Künstliche Intelligenz, Automatisierung und digitale
                Kompetenzen. Diese Kurse buchen Sie selbst; eine Förderung ist hier nicht möglich.
              </p>
            </div>
            <Link
              href="/kurse"
              className="flex-shrink-0 inline-flex items-center gap-1 font-semibold hover:gap-2 transition-all"
              style={{ color: "#3f74bc" }}
            >
              Alle Online-Kurse ansehen <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredCourses.map((course) => (
              <a
                key={course.title}
                href="https://alvatar.de"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-slate-200 p-5 card-hover group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={
                      course.level === "Einsteiger"
                        ? { background: "#f0fdf4", color: "#15803d" }
                        : course.level === "Fortgeschritten"
                          ? { background: "#fffbeb", color: "#b45309" }
                          : { background: "#faf5ff", color: "#7e22ce" }
                    }
                  >
                    {course.level}
                  </span>
                  <span className="font-bold" style={{ color: "#3f74bc" }}>
                    {course.price}
                  </span>
                </div>
                <h3
                  className="font-semibold text-sm mb-2 leading-snug group-hover:text-[#3f74bc] transition-colors"
                  style={{ color: "#1e293b" }}
                >
                  {course.title}
                </h3>
                <p className="text-xs text-slate-500">{course.modules}</p>
              </a>
            ))}
          </div>
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
            {faqSchema.mainEntity.map((item) => (
              <details key={item.name} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <summary
                  className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-semibold marker:hidden"
                  style={{ color: "#1e293b" }}
                >
                  {item.name}
                  <ChevronDown
                    size={20}
                    className="flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                    style={{ color: "#3f74bc" }}
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-6 pb-6 -mt-1 text-sm text-slate-600 leading-relaxed">{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
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
