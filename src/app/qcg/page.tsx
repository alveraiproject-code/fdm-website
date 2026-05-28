import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  Award,
  Building2,
  UserCheck,
  TrendingUp,
  ArrowRight,
  Phone,
  Lightbulb,
  ShieldCheck,
  BadgePercent,
  Clock,
  ChevronRight,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Qualifizierungschancengesetz (QCG) – Förderung für Arbeitgeber & Arbeitnehmer | FDM GmbH",
  description:
    "Das Qualifizierungschancengesetz fördert Weiterbildungen für Beschäftigte. FDM GmbH ist AZAV-zertifiziert – Ihr Kurs zählt. Bis zu 100 % Kostenübernahme für Arbeitgeber möglich.",
  keywords: [
    "Qualifizierungschancengesetz",
    "QCG",
    "Weiterbildungsförderung",
    "Arbeitgeber Förderung",
    "Arbeitnehmer Weiterbildung",
    "AZAV",
    "Bildungsgutschein",
    "FDM GmbH",
  ],
  openGraph: {
    title: "Qualifizierungschancengesetz (QCG) – Weiterbildung für Unternehmen",
    description: "Bis zu 100 % Förderung für Ihre Mitarbeiterweiterbildung – AZAV-zertifiziert durch FDM GmbH.",
    type: "website",
    locale: "de_DE",
  },
};

const subsidies = [
  {
    size: "Kleinstunternehmen",
    employees: "Weniger als 10 Mitarbeiter",
    rate: "bis zu 100 %",
    rateNum: 100,
    highlight: true,
    color: "#15803d",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    size: "Kleine Unternehmen",
    employees: "10 – 249 Mitarbeiter",
    rate: "bis zu 50 %",
    rateNum: 50,
    highlight: false,
    color: "#1d4ed8",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    size: "Große Unternehmen",
    employees: "Ab 250 Mitarbeiter",
    rate: "bis zu 25 %",
    rateNum: 25,
    highlight: false,
    color: "#7e22ce",
    bg: "#faf5ff",
    border: "#e9d5ff",
  },
];

const employerBenefits = [
  {
    icon: BadgePercent,
    title: "Staatliche Kostenbeteiligung",
    desc: "Die Agentur für Arbeit übernimmt je nach Unternehmensgröße bis zu 100 % der Weiterbildungskosten Ihrer Mitarbeitenden.",
  },
  {
    icon: TrendingUp,
    title: "Zukunftsfähigkeit sichern",
    desc: "Qualifizieren Sie Ihr Team für die digitale Transformation – und halten Sie Fachkräfte, die den Wandel aktiv mitgestalten.",
  },
  {
    icon: ShieldCheck,
    title: "Kein Verwaltungsaufwand",
    desc: "Wir begleiten Sie durch den Antragsprozess bei der Agentur für Arbeit – von der Beratung bis zur Einreichung.",
  },
  {
    icon: Clock,
    title: "Lohnkostenzuschuss möglich",
    desc: "Unter bestimmten Voraussetzungen können Arbeitgeber auch einen Zuschuss zu den Lohnkosten während der Weiterbildung erhalten.",
  },
];

const employeeBenefits = [
  {
    icon: UserCheck,
    title: "Weiterbildung ohne Einkommensverlust",
    desc: "Ihr Gehalt läuft während der Weiterbildung weiter – Ihr Arbeitgeber erhält auf Antrag Unterstützung von der Agentur für Arbeit.",
  },
  {
    icon: TrendingUp,
    title: "Karrierechancen verbessern",
    desc: "Digitale Kompetenzen im Online-Marketing sind stark gefragt – die Weiterbildung öffnet neue Türen im eigenen Unternehmen.",
  },
  {
    icon: Lightbulb,
    title: "Zukunftssichere Qualifikation",
    desc: "Erwerben Sie ein AZAV-zertifiziertes Abschlusszertifikat, das von Arbeitgebern und der Bundesagentur für Arbeit anerkannt wird.",
  },
  {
    icon: ShieldCheck,
    title: "Initiative ergreifen",
    desc: "Sie können Ihren Arbeitgeber aktiv auf die QCG-Förderung ansprechen und den Antrag gemeinsam mit der Personalabteilung stellen.",
  },
];

const steps = [
  {
    step: "1",
    title: "Kostenlose Beratung",
    desc: "Wir erklären, ob Ihr Unternehmen und Ihr Mitarbeiter die Voraussetzungen erfüllen – kostenlos und unverbindlich.",
    icon: Phone,
  },
  {
    step: "2",
    title: "Antrag bei der Agentur für Arbeit",
    desc: "Der Arbeitgeber stellt den Antrag bei der zuständigen Agentur für Arbeit. Wir stellen alle notwendigen Unterlagen bereit.",
    icon: Building2,
  },
  {
    step: "3",
    title: "Bewilligung & Kursstart",
    desc: "Nach Bewilligung kann die Weiterbildung beginnen. Ein laufender Einstieg ist möglich – kein fixer Starttermin nötig.",
    icon: Award,
  },
  {
    step: "4",
    title: "Abschluss & Abrechnung",
    desc: "Nach erfolgreichem Abschluss erhält Ihr Mitarbeiter das Zertifikat. Die Fördergelder werden direkt mit der Agentur abgerechnet.",
    icon: CheckCircle,
  },
];

export default function QcgPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-white overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #1e293b 0%, #2c3892 50%, #3f74bc 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 60%, #51ade5 0%, transparent 45%), radial-gradient(circle at 90% 20%, #3f74bc 0%, transparent 40%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20"
              style={{ background: "rgba(255,255,255,0.1)", color: "#bae6fd" }}
            >
              <Award size={14} />
              Gefördert nach §82 SGB III
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Qualifizierungs&shy;chancengesetz
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold" style={{ color: "#51ade5" }}>
                Weiterbildung für Beschäftigte – staatlich gefördert
              </span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: "#cbd5e1" }}>
              Das Qualifizierungschancengesetz (QCG) ermöglicht es Unternehmen,
              ihre Mitarbeiterinnen und Mitarbeiter weiterzubilden – bei einem
              Großteil der Kosten springt die Agentur für Arbeit ein.
              Als AZAV-zertifizierter Bildungsträger ist FDM GmbH direkt anerkannt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
                style={{ color: "#2c3892" }}
              >
                <Building2 size={18} />
                Beratung für Arbeitgeber
              </Link>
              <a
                href="#foerderhoehe"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
              >
                Förderhöhe berechnen
                <ChevronRight size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="max-w-7xl mx-auto px-6 mt-14 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "bis 100 %", label: "Kostenerstattung für Kleinstunternehmen" },
              { value: "§82 SGB III", label: "Rechtsgrundlage" },
              { value: "AZAV", label: "FDM GmbH zertifiziert" },
              { value: "sofort", label: "Laufender Einstieg möglich" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 text-center border border-white/20"
                style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}
              >
                <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs leading-snug" style={{ color: "#94a3b8" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was ist das QCG */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#eff6ff", color: "#3f74bc" }}
              >
                <Info size={14} />
                Hintergrund
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#1e293b" }}>
                Was ist das Qualifizierungschancengesetz?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Das Qualifizierungschancengesetz ist seit Januar 2019 in Kraft
                und wurde im Zuge der Digitalisierung und des strukturellen
                Wandels eingeführt. Es richtet sich an <strong>Beschäftigte</strong> –
                nicht nur an Arbeitslose – und ermöglicht Unternehmen,
                ihre Belegschaft gezielt weiterzuqualifizieren.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Finanziert wird die Förderung über die <strong>Agentur für Arbeit</strong>
                {" "}(§82 SGB III). Je nach Unternehmensgröße und Beschäftigtengruppe
                übernimmt der Staat einen erheblichen Teil der Weiterbildungskosten
                und ggf. auch Lohnkostenzuschüsse während der Maßnahme.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Besonders profitieren können Betriebe, deren Tätigkeitsprofile
                durch <strong>Digitalisierung, KI und Automatisierung</strong> einem
                Wandel unterliegen – und Mitarbeitende, die ihre digitalen
                Kompetenzen zukunftsfähig ausbauen möchten.
              </p>
            </div>
            <div
              className="rounded-3xl p-8 text-white"
              style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
            >
              <h3 className="font-bold text-lg mb-6">Voraussetzungen auf einen Blick</h3>
              <ul className="space-y-4">
                {[
                  "Arbeitnehmer ist sozialversicherungspflichtig beschäftigt",
                  "Arbeitgeber beantragt die Förderung bei der zuständigen Agentur für Arbeit",
                  "Die Weiterbildung findet bei einem zugelassenen Bildungsträger statt (AZAV-Zertifikat erforderlich)",
                  "Der Kurs ist für die berufliche Entwicklung relevant",
                  "Keine Altersgrenze – auch ältere Beschäftigte sind förderfähig",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle size={16} style={{ color: "#51ade5", marginTop: 2 }} className="flex-shrink-0" />
                    <span style={{ color: "#e2e8f0" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 rounded-xl p-4 text-sm"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <p style={{ color: "#bae6fd" }} className="font-medium mb-1">Gut zu wissen:</p>
                <p style={{ color: "#cbd5e1" }}>
                  FDM GmbH ist AZAV-zertifiziert (GZQ / DAkkS, Zertifikat-Nr. Z-000473-2)
                  und damit offiziell als Träger für QCG-geförderte Maßnahmen anerkannt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Förderhöhe */}
      <section id="foerderhoehe" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1e293b" }}>
              Wie viel Förderung erhalten Arbeitgeber?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Die Höhe der Förderung richtet sich nach der Unternehmensgröße.
              Kleinstunternehmen können die gesamten Weiterbildungskosten erstattet bekommen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {subsidies.map((sub) => (
              <div
                key={sub.size}
                className="rounded-2xl p-7 border-2 text-center relative overflow-hidden"
                style={{
                  background: sub.bg,
                  borderColor: sub.highlight ? sub.color : sub.border,
                }}
              >
                {sub.highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 text-center text-xs font-bold py-1.5 text-white"
                    style={{ background: sub.color }}
                  >
                    Maximale Förderung
                  </div>
                )}
                <div className={sub.highlight ? "mt-5" : ""}>
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: sub.color }}
                  >
                    {sub.rate}
                  </div>
                  <div className="font-bold text-base mb-1" style={{ color: "#1e293b" }}>
                    {sub.size}
                  </div>
                  <div className="text-sm text-slate-500">{sub.employees}</div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="max-w-4xl mx-auto rounded-xl p-5 border border-amber-200 text-sm"
            style={{ background: "#fffbeb" }}
          >
            <div className="flex items-start gap-2.5">
              <Info size={16} style={{ color: "#b45309", marginTop: 1 }} className="flex-shrink-0" />
              <p className="text-amber-800 leading-relaxed">
                <strong>Erhöhte Förderung möglich:</strong> Unternehmen im strukturellen Wandel
                (z.B. durch Digitalisierung oder KI) sowie Betriebe mit Beschäftigten über 45 Jahren
                oder mit Schwerbehinderung können höhere Förderquoten erhalten.
                Sprechen Sie uns an – wir prüfen gemeinsam, welche Sätze für Sie gelten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Für Arbeitgeber / Für Arbeitnehmer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Arbeitgeber */}
            <div className="rounded-3xl overflow-hidden border border-slate-200">
              <div
                className="px-8 py-6 text-white"
                style={{ background: "linear-gradient(135deg, #1e293b, #2c3892)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <Building2 size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Für</div>
                    <h2 className="text-xl font-bold">Arbeitgeber & HR-Verantwortliche</h2>
                  </div>
                </div>
                <p className="mt-3 text-sm" style={{ color: "#94a3b8" }}>
                  Investieren Sie in Ihre Mitarbeitenden – der Staat trägt einen Großteil der Kosten.
                </p>
              </div>
              <div className="p-8 bg-white">
                <div className="space-y-5">
                  {employerBenefits.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "#eff6ff" }}
                      >
                        <Icon size={18} style={{ color: "#3f74bc" }} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm mb-0.5" style={{ color: "#1e293b" }}>{title}</div>
                        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/kontakt"
                  className="mt-7 w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
                >
                  Jetzt Beratungsgespräch vereinbaren
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Arbeitnehmer */}
            <div className="rounded-3xl overflow-hidden border border-slate-200">
              <div
                className="px-8 py-6 text-white"
                style={{ background: "linear-gradient(135deg, #1a4731, #166534)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <UserCheck size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Für</div>
                    <h2 className="text-xl font-bold">Arbeitnehmer & Angestellte</h2>
                  </div>
                </div>
                <p className="mt-3 text-sm" style={{ color: "#86efac" }}>
                  Sprechen Sie Ihren Arbeitgeber an – Weiterbildung ist oft günstiger als gedacht.
                </p>
              </div>
              <div className="p-8 bg-white">
                <div className="space-y-5">
                  {employeeBenefits.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "#f0fdf4" }}
                      >
                        <Icon size={18} style={{ color: "#15803d" }} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm mb-0.5" style={{ color: "#1e293b" }}>{title}</div>
                        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/kontakt"
                  className="mt-7 w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border-2 hover:bg-green-50 transition-colors"
                  style={{ borderColor: "#15803d", color: "#15803d" }}
                >
                  Ich möchte mich weiterbilden
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Passender Kurs: Online Marketing Experte */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-4"
              style={{ background: "#eff6ff", color: "#3f74bc" }}
            >
              <Award size={14} />
              QCG-fähige Weiterbildung bei FDM GmbH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1e293b" }}>
              Der passende Kurs – sofort förderfähig
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Unser AZAV-zertifizierter Lehrgang ist für das Qualifizierungschancengesetz
              anerkannt. Starten Sie jetzt – mit bis zu 100 % staatlicher Förderung.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-3xl overflow-hidden border border-blue-100"
              style={{ boxShadow: "0 4px 24px rgba(44,56,146,0.10)" }}
            >
              <div
                className="px-8 py-8 text-white"
                style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#bae6fd" }}>
                      AZAV-zertifizierter Lehrgang · Maßnahme-ID 01/1024
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      Online Marketing Experte (m/w/d)
                    </h3>
                    <p style={{ color: "#cbd5e1" }} className="text-sm max-w-lg">
                      Praxisnahe Weiterbildung in SEO, Google Ads, Social Media, Analytics
                      und Content-Marketing – 9 Module, vollständig online.
                    </p>
                  </div>
                  <Link
                    href="/azav"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors text-sm whitespace-nowrap"
                    style={{ color: "#2c3892" }}
                  >
                    Zur Kursseite
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
              <div className="px-8 py-7 bg-white">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    { label: "Dauer Vollzeit", value: "48 Wochen" },
                    { label: "Dauer Teilzeit", value: "96 Wochen" },
                    { label: "Unterrichtsstunden", value: "1.920 UE" },
                    { label: "Teilnehmer", value: "max. 15 Personen" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="font-bold text-lg mb-0.5" style={{ color: "#2c3892" }}>{item.value}</div>
                      <div className="text-xs text-slate-500">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">9 Lehrmodule:</strong>{" "}
                    Grundlagen · SEO · SEA mit Google Ads · Social Media · E-Mail-Marketing & CRM ·
                    Google Analytics 4 · Content-Marketing · Performance Marketing · Strategieprojekt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert es */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1e293b" }}>
            So beantragen Sie die QCG-Förderung
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 relative"
                    style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
                  >
                    <Icon size={22} className="text-white" />
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white"
                      style={{ background: "#2c3892" }}
                    >
                      {s.step}
                    </div>
                  </div>
                  <h3 className="font-bold mb-2 text-sm" style={{ color: "#1e293b" }}>{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#1e293b" }}>
            Häufige Fragen zum QCG
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Gilt das QCG auch für Mini-Jobber oder Teilzeitkräfte?",
                a: "Nein – das Qualifizierungschancengesetz gilt ausschließlich für sozialversicherungspflichtig Beschäftigte. Geringfügig Beschäftigte (450-Euro-Jobs) sind grundsätzlich ausgeschlossen.",
              },
              {
                q: "Muss der Mitarbeiter der Weiterbildung zustimmen?",
                a: "Ja – Arbeitgeber und Arbeitnehmer müssen sich einigen. Der Kurs kann nicht einseitig vom Arbeitgeber angeordnet werden. Eine gemeinsame Vereinbarung ist Voraussetzung für den Förderantrag.",
              },
              {
                q: "Kann die Weiterbildung auch in der Freizeit stattfinden?",
                a: "Das ist möglich, wenn Arbeitgeber und Arbeitnehmer das gemeinsam so vereinbaren. Die Förderung ist nicht zwingend an eine Freistellung gebunden.",
              },
              {
                q: "Wie lange dauert die Bewilligung durch die Agentur für Arbeit?",
                a: "Erfahrungsgemäß dauert die Bearbeitung zwei bis vier Wochen. Wir empfehlen, den Antrag mindestens vier Wochen vor dem gewünschten Starttermin zu stellen.",
              },
              {
                q: "Können auch mehrere Mitarbeiter gleichzeitig gefördert werden?",
                a: "Ja – es gibt keine Begrenzung auf eine Person. Mehrere Mitarbeitende eines Unternehmens können gleichzeitig gefördert werden, sofern die jeweiligen Voraussetzungen vorliegen.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
              >
                <div className="px-6 py-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ background: "#eff6ff", color: "#3f74bc" }}
                    >
                      ?
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2" style={{ color: "#1e293b" }}>{faq.q}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-white text-center"
        style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <Award size={36} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Jetzt Förderung prüfen lassen
          </h2>
          <p className="mb-8 text-lg" style={{ color: "#cbd5e1" }}>
            Wir prüfen kostenlos, ob Ihr Unternehmen und Ihre Mitarbeitenden
            die Voraussetzungen für das Qualifizierungschancengesetz erfüllen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              style={{ color: "#2c3892" }}
            >
              <Building2 size={18} />
              Kostenlose Beratung anfragen
            </Link>
            <a
              href="tel:+4971616275126"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
            >
              <Phone size={18} />
              07161 – 6275126
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
