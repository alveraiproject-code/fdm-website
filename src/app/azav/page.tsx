import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Award, Clock, Users, GraduationCap, ArrowRight, FileText, Phone } from "lucide-react";

const modules = [
  "Grundlagen des Online-Marketings & digitale Strategie",
  "Suchmaschinenoptimierung (SEO) & Content-Marketing",
  "Social Media Marketing & Community Management",
  "Google Ads, Meta Ads & Paid Advertising",
  "E-Mail-Marketing & Marketing-Automation",
  "Analytics, KPI-Messung & Conversion-Optimierung",
  "Affiliate-Marketing & Influencer-Marketing",
  "KI-Tools im Online-Marketing",
];

const steps = [
  {
    step: "1",
    title: "Beratungsgespräch",
    desc: "Kontaktieren Sie uns – wir beraten Sie kostenlos zu Fördermöglichkeiten und Voraussetzungen.",
  },
  {
    step: "2",
    title: "Bildungsgutschein beantragen",
    desc: "Mit unserem Beratungsschreiben beantragen Sie Ihren Bildungsgutschein bei der Agentur für Arbeit oder dem Jobcenter.",
  },
  {
    step: "3",
    title: "Anmeldung & Start",
    desc: "Nach Erhalt des Gutscheins melden Sie sich bei uns an und starten Ihre Weiterbildung – flexibel online.",
  },
  {
    step: "4",
    title: "Abschluss & Zertifikat",
    desc: "Nach erfolgreichem Abschluss erhalten Sie Ihr anerkanntes Abschlusszertifikat als Online Marketing Experte (m/w/d).",
  },
];

export default function AzavPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-5 border border-white/20"
                style={{ background: "rgba(255,255,255,0.1)", color: "#bae6fd" }}
              >
                <Award size={14} />
                AZAV-zertifizierte Weiterbildung
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Online Marketing Experte (m/w/d)
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#cbd5e1" }}>
                Starten Sie Ihre Karriere im digitalen Marketing – mit
                staatlich geförderter Weiterbildung. Finanzierbar über den
                Bildungsgutschein der Agentur für Arbeit oder des Jobcenters.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
                  style={{ color: "#2c3892" }}
                >
                  <GraduationCap size={17} />
                  Jetzt informieren
                </Link>
                <a
                  href="tel:+4971616275126"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
                >
                  <Phone size={17} />
                  07161 – 6275126
                </a>
              </div>
            </div>

            {/* Quick Facts */}
            <div
              className="rounded-3xl p-8"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/gzq-zertifikat.svg"
                  alt="GZQ AZAV Zertifizierung"
                  width={52}
                  height={52}
                  className="flex-shrink-0"
                />
                <h3 className="font-bold text-lg">Auf einen Blick</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Clock, label: "Dauer", value: "48 Wochen" },
                  { icon: FileText, label: "Unterrichtsstunden", value: "1.920 UE" },
                  { icon: Users, label: "Teilnehmerzahl", value: "max. 15 Personen" },
                  { icon: Award, label: "Abschluss", value: "Abschlusszertifikat" },
                  { icon: GraduationCap, label: "Förderung", value: "Bildungsgutschein" },
                  { icon: FileText, label: "Maßnahme-ID", value: "01/1024" },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between pb-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Icon size={15} />
                      {label}
                    </div>
                    <span className="font-semibold text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#1e293b" }}>
              Warum dieser Lehrgang?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Online-Marketing ist eine der gefragtesten Berufsqualifikationen
              der digitalen Wirtschaft – und Sie können diese Weiterbildung
              vollständig gefördert absolvieren.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Kostenlos mit Bildungsgutschein",
                desc: "Wenn Sie Anspruch auf einen Bildungsgutschein haben, übernimmt die Agentur für Arbeit oder das Jobcenter die vollen Kurskosten.",
              },
              {
                title: "100 % flexibel online",
                desc: "Alle Inhalte werden online vermittelt – Sie lernen von zu Hause aus, in Ihrem eigenen Tempo.",
              },
              {
                title: "Laufender Einstieg",
                desc: "Kein fester Starttermin – Sie können jederzeit einsteigen, sobald Sie Ihren Bildungsgutschein haben.",
              },
              {
                title: "Praxisrelevante Inhalte",
                desc: "Von SEO über Social Media bis zu KI-Tools im Marketing – alle Themen sind direkt beruflich verwertbar.",
              },
              {
                title: "Anerkanntes Zertifikat",
                desc: "Nach Abschluss erhalten Sie ein Zertifikat des AZAV-zertifizierten Bildungsträgers FDM GmbH.",
              },
              {
                title: "Persönliche Begleitung",
                desc: "Unsere Dozenten begleiten Sie durch den gesamten Lehrgang – Fragen werden zeitnah beantwortet.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 border border-slate-200 bg-white card-hover"
              >
                <CheckCircle size={22} className="mb-3" style={{ color: "#3f74bc" }} />
                <h3 className="font-bold mb-2" style={{ color: "#1e293b" }}>{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inhalte */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#1e293b" }}>
                Kursinhalte
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Der Lehrgang „Online Marketing Experte (m/w/d)" vermittelt
                praxisnahes Wissen aus allen relevanten Bereichen des digitalen
                Marketings – von der Strategie bis zur Umsetzung.
              </p>
              <ul className="space-y-3">
                {modules.map((mod, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ background: "#3f74bc", color: "white" }}
                    >
                      {i + 1}
                    </div>
                    {mod}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#1e293b" }}>
                Fördervoraussetzungen
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Sie können die Weiterbildung über einen Bildungsgutschein
                fördern lassen, wenn eine der folgenden Voraussetzungen zutrifft:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Sie sind arbeitssuchend oder von Arbeitslosigkeit bedroht",
                  "Sie beziehen Arbeitslosengeld I (ALG I)",
                  "Sie beziehen Bürgergeld (ALG II / Jobcenter)",
                  "Sie sind in einem Bereich tätig, in dem Weiterbildungsbedarf besteht",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle size={16} style={{ color: "#3f74bc", marginTop: 2 }} className="flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="rounded-xl p-5 border border-blue-200"
                style={{ background: "#eff6ff" }}
              >
                <p className="text-sm font-medium mb-2" style={{ color: "#1e40af" }}>
                  Nicht sicher ob Sie berechtigt sind?
                </p>
                <p className="text-sm text-slate-600 mb-3">
                  Sprechen Sie uns an – wir klären gemeinsam, ob und wie Sie die
                  Förderung beantragen können.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
                  style={{ color: "#3f74bc" }}
                >
                  Kostenlos beraten lassen <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1e293b" }}>
            So einfach geht's
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)", color: "white" }}
                >
                  {s.step}
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: "#1e293b" }}>{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 text-white text-center"
        style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Jetzt kostenlos informieren
          </h2>
          <p className="mb-7" style={{ color: "#cbd5e1" }}>
            Schreiben Sie uns oder rufen Sie direkt an – wir antworten schnell
            und helfen Ihnen beim nächsten Schritt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              style={{ color: "#2c3892" }}
            >
              Kontakt aufnehmen
            </Link>
            <a
              href="tel:+4971616275126"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
            >
              <Phone size={17} />
              07161 – 6275126
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
