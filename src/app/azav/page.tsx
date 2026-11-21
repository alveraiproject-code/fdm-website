import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Building2, CheckCircle, GraduationCap, Phone, Sparkles } from "lucide-react";
import Kennzeichen from "@/components/Kennzeichen";
import { buildMetadata } from "@/lib/metadata";
import { OME_PFAD } from "@/lib/kursdetails";

export const metadata = buildMetadata("azav");

const schritte = [
  {
    titel: "Beratungsgespräch",
    text: "Kontaktieren Sie uns. Wir beraten Sie kostenlos zu passenden Weiterbildungen, Fördermöglichkeiten und Voraussetzungen.",
  },
  {
    titel: "Bildungsgutschein beantragen",
    text: "Mit unserem Angebot beantragen Sie Ihren Bildungsgutschein bei der Agentur für Arbeit oder dem Jobcenter.",
  },
  {
    titel: "Anmeldung & Start",
    text: "Nach Erhalt des Gutscheins melden Sie sich bei uns an und starten Ihre Weiterbildung online.",
  },
  {
    titel: "Abschluss & Zertifikat",
    text: "Nach erfolgreichem Abschluss erhalten Sie Ihr Zertifikat des Bildungsträgers.",
  },
];

const voraussetzungen = [
  "Sie sind arbeitssuchend oder von Arbeitslosigkeit bedroht",
  "Sie beziehen Arbeitslosengeld I (ALG I)",
  "Sie beziehen Bürgergeld (Jobcenter)",
  "Sie sind in einem Bereich tätig, in dem Weiterbildungsbedarf besteht",
];

export default function BildungsgutscheinPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 text-white" style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-5 border border-white/20"
                style={{ background: "rgba(255,255,255,0.1)", color: "#bae6fd" }}
              >
                <Award size={14} aria-hidden="true" />
                Förderung für Arbeitssuchende
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">Weiterbildung mit Bildungsgutschein</h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#cbd5e1" }}>
                Mit einem Bildungsgutschein übernimmt die Agentur für Arbeit oder das Jobcenter die Kosten einer
                zugelassenen Weiterbildung. Wir erklären, wie das funktioniert, und begleiten Sie auf dem Weg dorthin.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/weiterbildung"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
                  style={{ color: "#2c3892" }}
                >
                  <GraduationCap size={17} aria-hidden="true" />
                  Weiterbildung finden
                </Link>
                <a
                  href="tel:+4971616275120"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
                >
                  <Phone size={17} aria-hidden="true" />
                  07161 – 6275120
                </a>
              </div>
            </div>

            <div
              className="rounded-3xl p-8"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Image src="/gzq-zertifikat.svg" alt="GZQ AZAV Zertifizierung" width={52} height={52} className="flex-shrink-0" style={{ height: "auto" }} />
                <h2 className="font-bold text-lg">Was ist AZAV?</h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-200">
                AZAV steht für die Akkreditierungs- und Zulassungsverordnung Arbeitsförderung. Nur zugelassene
                Bildungsträger dürfen Weiterbildungen anbieten, die mit einem Bildungsgutschein bezahlt werden. Die FDM
                GmbH ist als Träger durch die GZQ GmbH (DAkkS-akkreditiert) zugelassen, Zertifikat-Nr. Z-000473-2, gültig
                bis 17.10.2029.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voraussetzungen */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#1e293b" }}>
              Wer bekommt einen Bildungsgutschein?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Eine Förderung kommt in Frage, wenn eine der folgenden Voraussetzungen zutrifft. Die Entscheidung trifft
              Ihre Agentur für Arbeit oder Ihr Jobcenter.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {voraussetzungen.map((punkt) => (
              <div key={punkt} className="flex items-start gap-3 rounded-xl p-4 border border-slate-200" style={{ background: "#f8fafc" }}>
                <CheckCircle size={18} style={{ color: "#3f74bc", marginTop: 1 }} className="flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-700">{punkt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schritte */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1e293b" }}>
            In vier Schritten zur geförderten Weiterbildung
          </h2>
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
                <h3 className="font-bold mb-2 text-sm" style={{ color: "#1e293b" }}>
                  {s.titel}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Kursangebot */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#1e293b" }}>
            Passende Weiterbildungen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href={OME_PFAD} className="card-hover flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
              <span className="mb-3">
                <Kennzeichen art="azav" />
              </span>
              <span className="text-xl font-bold" style={{ color: "#1e293b" }}>
                Online Marketing Experte (m/w/d)
              </span>
              <span className="mt-2 text-sm text-slate-600">
                1.920 Unterrichtseinheiten · 48 Wochen in Vollzeit oder 96 Wochen in Teilzeit · laufender Einstieg ·
                Maßnahme-ID 01/1024
              </span>
              <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-[#3f74bc]">
                Zum Lehrgang <ArrowRight size={15} aria-hidden="true" />
              </span>
            </Link>
            <Link href="/weiterbildung" className="card-hover flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
              <span className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#3f74bc]">FDM Akademie</span>
              <span className="text-xl font-bold" style={{ color: "#1e293b" }}>
                Gesamtes Kursangebot
              </span>
              <span className="mt-2 text-sm text-slate-600">
                Weiterbildungen aus IT, kaufmännischen Berufen, Gesundheit, Technik, Medien und
                Sprachen, live im virtuellen Klassenzimmer. Welche Förderung für Sie in Frage kommt, klären wir in der
                Beratung.
              </span>
              <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-[#3f74bc]">
                Kursangebot ansehen <ArrowRight size={15} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* QCG Hinweis */}
      <section className="py-12" style={{ background: "linear-gradient(135deg, #1a4731 0%, #166534 60%, #15803d 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                <Building2 size={30} className="text-white" aria-hidden="true" />
              </div>
            </div>
            <div className="flex-1 text-white text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                style={{ background: "rgba(255,255,255,0.15)", color: "#86efac" }}
              >
                <Sparkles size={12} aria-hidden="true" />
                Alternativ: Qualifizierungschancengesetz (QCG)
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Noch in Beschäftigung? Dann gilt das QCG für Sie.</h2>
              <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#bbf7d0" }}>
                Der Bildungsgutschein ist für Arbeitssuchende. Wenn Sie aktuell angestellt sind, kann Ihr Arbeitgeber
                über das Qualifizierungschancengesetz je nach Betriebsgröße bis zu 100 % der Kurskosten erstattet
                bekommen.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/qcg"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white font-semibold rounded-xl hover:bg-green-50 transition-colors text-sm whitespace-nowrap"
                style={{ color: "#166534" }}
              >
                Mehr über das QCG
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-white text-center" style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Jetzt kostenlos beraten lassen</h2>
          <p className="mb-7" style={{ color: "#cbd5e1" }}>
            Wir klären mit Ihnen, welche Weiterbildung passt und wie Sie die Förderung beantragen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/weiterbildung#beratung"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              style={{ color: "#2c3892" }}
            >
              Beratung anfragen
            </Link>
            <a
              href="tel:+4971616275120"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
            >
              <Phone size={17} aria-hidden="true" />
              07161 – 6275120
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
