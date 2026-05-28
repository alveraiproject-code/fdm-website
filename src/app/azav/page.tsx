import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Award,
  Clock,
  Users,
  GraduationCap,
  ArrowRight,
  FileText,
  Phone,
  Monitor,
  Wifi,
  BookOpen,
  Target,
  Building2,
  Sparkles,
} from "lucide-react";

const modules = [
  { num: 1, title: "Grundlagen des Online-Marketings", desc: "Überblick über digitale Kanäle, Marketingziele und strategische Planung einer Online-Präsenz." },
  { num: 2, title: "Suchmaschinenoptimierung (SEO)", desc: "On-Page und Off-Page-Optimierung, Keyword-Recherche, technische SEO und Content-Strategie." },
  { num: 3, title: "Suchmaschinenwerbung (SEA) mit Google Ads", desc: "Kampagnenplanung, Anzeigenformate, Gebotsstrategien und Conversion-Tracking in Google Ads." },
  { num: 4, title: "Social Media Marketing", desc: "Plattformstrategien für LinkedIn, Instagram, Facebook & Co., Community Management und organische Reichweite." },
  { num: 5, title: "E-Mail-Marketing & CRM", desc: "Newsletter-Konzeption, Automatisierungen, Segmentierung und rechtssichere Umsetzung (DSGVO)." },
  { num: 6, title: "Webanalyse & Google Analytics 4", desc: "Datenerhebung und Interpretation mit GA4, Dashboards, KPI-Definitionen und datenbasierte Entscheidungen." },
  { num: 7, title: "Content-Marketing & Storytelling", desc: "Redaktionsplanung, Textformate, Storytelling-Techniken und Content-Distribution über mehrere Kanäle." },
  { num: 8, title: "Performance Marketing & KPIs", desc: "ROI-Berechnung, A/B-Testing, Conversion-Optimierung und kanalübergreifendes Kampagnen-Controlling." },
  { num: 9, title: "Projektarbeit: Entwicklung einer Online-Marketing-Strategie", desc: "Eigenständige Erstellung einer vollständigen Online-Marketing-Strategie als Abschlussprojekt." },
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
                  { icon: Clock, label: "Vollzeit", value: "48 Wochen" },
                  { icon: Clock, label: "Teilzeit", value: "96 Wochen" },
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
                desc: "Von SEO über Social Media bis zu Performance Marketing – alle Themen sind direkt beruflich verwertbar.",
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

      {/* Zielgruppe & Zugangsvoraussetzungen */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Zielgruppe */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#eff6ff", color: "#3f74bc" }}
              >
                <Users size={14} />
                Zielgruppe
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e293b" }}>
                Für wen ist dieser Lehrgang?
              </h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                Der Lehrgang richtet sich an Personen, die einen Einstieg oder
                Neustart im digitalen Marketing anstreben.
              </p>
              <ul className="space-y-3">
                {[
                  "Arbeitssuchende und Arbeitslose, die eine neue berufliche Perspektive suchen",
                  "Quereinsteiger aus anderen Berufsfeldern mit Interesse an digitalem Marketing",
                  "Berufsrückkehrer nach Elternzeit oder längerer Auszeit",
                  "Personen, die ihre vorhandenen Marketing-Kenntnisse erweitern möchten",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle size={16} style={{ color: "#3f74bc", marginTop: 2 }} className="flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Zugangsvoraussetzungen */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#eff6ff", color: "#3f74bc" }}
              >
                <Target size={14} />
                Zugangsvoraussetzungen
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e293b" }}>
                Was wird vorausgesetzt?
              </h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                Die Hürden sind bewusst niedrig gehalten, damit möglichst viele
                Menschen von dieser Förderung profitieren können.
              </p>
              <ul className="space-y-3">
                {[
                  "Schulabschluss mindestens Hauptschule",
                  "Interesse an Marketing, Medien oder IT (wünschenswert, kein Muss)",
                  "Deutschkenntnisse auf B2-Niveau (Wort und Schrift)",
                  "Motivation zur selbständigen Online-Arbeit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle size={16} style={{ color: "#3f74bc", marginTop: 2 }} className="flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Kursinhalte */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#1e293b" }}>
              Kursinhalte
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Der Lehrgang „Online Marketing Experte (m/w/d)" vermittelt praxisnahes
              Wissen aus allen relevanten Bereichen des digitalen Marketings –
              von der Strategie bis zur Umsetzung. Er umfasst <strong>9 Lernmodule</strong> und
              schließt mit einer eigenständigen Projektarbeit ab.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod) => (
              <div
                key={mod.num}
                className="rounded-2xl p-5 border border-slate-200 bg-white card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: mod.num === 9 ? "linear-gradient(135deg, #2c3892, #3f74bc)" : "#eff6ff", color: mod.num === 9 ? "white" : "#3f74bc" }}
                  >
                    {mod.num}
                  </div>
                  <h3 className="font-bold text-sm leading-snug" style={{ color: "#1e293b" }}>
                    {mod.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Durchführungsform & Technische Voraussetzungen */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Durchführungsform */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#eff6ff", color: "#3f74bc" }}
              >
                <BookOpen size={14} />
                Durchführungsform
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e293b" }}>
                Wie läuft der Lehrgang ab?
              </h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                Die Weiterbildung kombiniert verschiedene Lernformate für einen
                optimalen Lernerfolg – vollständig online und zeitlich flexibel.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Monitor,
                    title: "Live-Webinare",
                    desc: "Interaktive Online-Sessions mit erfahrenen Dozenten – Fragen stellen, mitdiskutieren, direkt lernen.",
                  },
                  {
                    icon: BookOpen,
                    title: "Selbstlernphasen",
                    desc: "Eigenständiges Erarbeiten der Lerninhalte im eigenen Tempo mit umfangreichem Kursmaterial.",
                  },
                  {
                    icon: FileText,
                    title: "Online-Tests",
                    desc: "Wissensüberprüfungen nach jedem Modul – zur Sicherung des Lernfortschritts.",
                  },
                  {
                    icon: Award,
                    title: "Projektarbeiten",
                    desc: "Praktische Aufgaben und abschließende Strategie-Projektarbeit für den direkten Praxistransfer.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "#eff6ff" }}
                    >
                      <Icon size={17} style={{ color: "#3f74bc" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-0.5" style={{ color: "#1e293b" }}>{title}</div>
                      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technische Voraussetzungen */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#eff6ff", color: "#3f74bc" }}
              >
                <Wifi size={14} />
                Technische Voraussetzungen
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e293b" }}>
                Was benötigen Sie?
              </h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                Da die Weiterbildung vollständig online stattfindet, benötigen
                Sie eine stabile technische Grundausstattung.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    icon: Wifi,
                    title: "Stabile Internetverbindung",
                    desc: "Für Live-Webinare und den Zugriff auf die Lernplattform.",
                  },
                  {
                    icon: Monitor,
                    title: "PC oder Laptop mit Webcam & Mikrofon",
                    desc: "Für die aktive Teilnahme an Online-Meetings und Webinaren.",
                  },
                  {
                    icon: BookOpen,
                    title: "Aktueller Webbrowser",
                    desc: "Chrome, Firefox, Edge oder Safari in der neuesten Version.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-3 list-none">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "#eff6ff" }}
                    >
                      <Icon size={17} style={{ color: "#3f74bc" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-0.5" style={{ color: "#1e293b" }}>{title}</div>
                      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Fördervoraussetzungen Info */}
              <div
                className="rounded-xl p-5 border border-blue-200 mt-8"
                style={{ background: "#eff6ff" }}
              >
                <p className="text-sm font-medium mb-2" style={{ color: "#1e40af" }}>
                  Nicht sicher, ob Sie berechtigt sind?
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

      {/* Fördervoraussetzungen */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#1e293b" }}>
              Fördervoraussetzungen
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Sie können die Weiterbildung über einen Bildungsgutschein
              fördern lassen, wenn eine der folgenden Voraussetzungen zutrifft:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Sie sind arbeitssuchend oder von Arbeitslosigkeit bedroht",
              "Sie beziehen Arbeitslosengeld I (ALG I)",
              "Sie beziehen Bürgergeld (ALG II / Jobcenter)",
              "Sie sind in einem Bereich tätig, in dem Weiterbildungsbedarf besteht",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl p-4 border border-slate-200"
                style={{ background: "#f8fafc" }}
              >
                <CheckCircle size={18} style={{ color: "#3f74bc", marginTop: 1 }} className="flex-shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QCG Hinweis */}
      <section
        className="py-12"
        style={{ background: "linear-gradient(135deg, #1a4731 0%, #166534 60%, #15803d 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Building2 size={30} className="text-white" />
              </div>
            </div>
            <div className="flex-1 text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-3" style={{ background: "rgba(255,255,255,0.15)", color: "#86efac" }}>
                <Sparkles size={12} />
                Alternativ: Qualifizierungschancengesetz (QCG)
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Noch in Beschäftigung? Dann gilt das QCG für Sie!
              </h3>
              <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#bbf7d0" }}>
                Der Bildungsgutschein ist für Arbeitssuchende. Wenn Sie aktuell <strong className="text-white">angestellt</strong> sind,
                können Sie denselben Kurs über das <strong className="text-white">Qualifizierungschancengesetz (QCG)</strong> fördern lassen –
                Ihr Arbeitgeber erhält je nach Betriebsgröße <strong className="text-white">bis zu 100 %</strong> der Kurskosten erstattet.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/qcg"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white font-semibold rounded-xl hover:bg-green-50 transition-colors text-sm whitespace-nowrap"
                style={{ color: "#166534" }}
              >
                Mehr über das QCG
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1e293b" }}>
            So einfach geht&apos;s
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
