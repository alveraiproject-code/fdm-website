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
} from "lucide-react";
import { courses } from "@/lib/courses";

const featuredCourses = courses.slice(0, 6);

const stats = [
  { value: "100+", label: "Online-Kurse" },
  { value: "AZAV", label: "Zertifiziert" },
  { value: "FB4", label: "Fachbereich" },
  { value: "100%", label: "Online" },
];

const usps = [
  {
    icon: Shield,
    title: "AZAV-zertifiziert",
    desc: "Alle unsere geförderten Maßnahmen sind durch die GZQ GmbH (DAkkS-akkreditiert) nach AZAV zugelassen.",
  },
  {
    icon: GraduationCap,
    title: "Bildungsgutschein",
    desc: "Finanzieren Sie Ihre Weiterbildung über die Agentur für Arbeit oder das Jobcenter – bis zu 100 % kostenfrei.",
  },
  {
    icon: Laptop,
    title: "Flexibel & Online",
    desc: "Alle Kurse finden online statt – von überall aus, in Ihrem eigenen Tempo.",
  },
  {
    icon: BookOpen,
    title: "Praxisorientiert",
    desc: "Aktuelle Inhalte mit direktem Bezug zum Arbeitsmarkt – entwickelt von erfahrenen Praktikern.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #51ade5 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3f74bc 0%, transparent 40%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-sky-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
                <Award size={14} />
                AZAV-zertifizierter Bildungsträger
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Ihre Karriere.{" "}
                <span style={{ color: "#51ade5" }}>Gefördert.</span>
                <br />
                Zukunftssicher.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                FDM GmbH ist Ihr AZAV-zertifizierter Partner für berufliche
                Weiterbildung. Nutzen Sie Ihren Bildungsgutschein für geförderte
                Maßnahmen – oder starten Sie sofort mit unseren Online-Kursen
                auf alvatar.de.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/azav"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
                  style={{ color: "#2c3892" }}
                >
                  <GraduationCap size={18} />
                  Gefördert weiterbilden
                </Link>
                <a
                  href="https://alvatar.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
                  style={{ background: "rgba(81,173,229,0.15)" }}
                >
                  <Laptop size={18} />
                  Online-Kurse entdecken
                </a>
              </div>
            </div>

            {/* Stats */}
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
            />
            {[
              "AZAV-zertifiziert (GZQ / DAkkS)",
              "Maßnahmenzertifikat §81 SGB III",
              "Bildungsgutschein akzeptiert",
              "Zulassung bis Oktober 2029",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                <CheckCircle size={17} style={{ color: "#3f74bc" }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AZAV Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#eff6ff", color: "#3f74bc" }}
              >
                <Award size={14} />
                Geförderte Weiterbildung
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#1e293b" }}>
                Online Marketing Experte{" "}
                <span className="gradient-text">(m/w/d)</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Unser AZAV-zertifizierter Lehrgang ermöglicht Ihnen einen
                umfassenden Einstieg in die Welt des Online-Marketings.
                Finanzierbar über den Bildungsgutschein der Agentur für Arbeit
                oder des Jobcenters – für Sie vollständig kostenfrei.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "1.920 Unterrichtsstunden über 48 Wochen",
                  "100 % online – flexibel von zu Hause",
                  "Abschlusszertifikat des Bildungsträgers",
                  "Laufender Einstieg möglich",
                  "Maßnahme-ID: 01/1024",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle size={16} style={{ color: "#3f74bc", marginTop: 2 }} className="flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/azav"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: "#3f74bc" }}
              >
                Mehr erfahren
                <ArrowRight size={16} />
              </Link>
            </div>

            <div
              className="rounded-3xl p-8 text-white"
              style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <Award size={28} />
                </div>
                <div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider">Zertifikat</div>
                  <div className="font-bold text-lg">AZAV §81 SGB III</div>
                </div>
              </div>
              <div className="space-y-4">
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

      {/* USPs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1e293b" }}>
              Warum FDM GmbH?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Wir verbinden staatlich anerkannte Fördermaßnahmen mit modernen
              Online-Inhalten auf höchstem Niveau.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp) => {
              const Icon = usp.icon;
              return (
                <div
                  key={usp.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 card-hover"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "#eff6ff" }}
                  >
                    <Icon size={22} style={{ color: "#3f74bc" }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#1e293b" }}>{usp.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{usp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Online-Kurse Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-3"
                style={{ background: "#eff6ff", color: "#3f74bc" }}
              >
                <Laptop size={14} />
                alvatar.de – Online-Akademie
              </div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1e293b" }}>
                KI-Kurse für die Zukunft
              </h2>
              <p className="text-slate-600 mt-2 max-w-lg">
                Über 100 praxisnahe Online-Kurse rund um Künstliche Intelligenz,
                Automatisierung und digitale Kompetenzen.
              </p>
            </div>
            <Link
              href="/kurse"
              className="flex-shrink-0 inline-flex items-center gap-1 font-semibold hover:gap-2 transition-all"
              style={{ color: "#3f74bc" }}
            >
              Alle Kurse ansehen <ChevronRight size={18} />
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
                  <span className="font-bold" style={{ color: "#3f74bc" }}>{course.price}</span>
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

          <div className="mt-10 text-center">
            <a
              href="https://alvatar.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              style={{ background: "#3f74bc" }}
            >
              Alle Kurse auf alvatar.de
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kostenlose Beratung gewünscht?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "#cbd5e1" }}>
            Wir helfen Ihnen, den richtigen Kurs zu finden und klären, ob Sie
            Anspruch auf eine geförderte Maßnahme haben.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              style={{ color: "#2c3892" }}
            >
              <Users size={18} />
              Jetzt Beratung anfragen
            </Link>
            <a
              href="tel:+4971616275126"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
            >
              07161 – 6275126
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
