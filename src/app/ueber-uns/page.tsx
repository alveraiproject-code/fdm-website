import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Building2, CheckCircle, Mail, MapPin, Phone, XCircle } from "lucide-react";
import BeratungCta from "@/components/BeratungCta";
import Kennzeichen from "@/components/Kennzeichen";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("ueber-uns");

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.fdm-group.de/ueber-uns/#ceo",
  name: "Dursun Alver",
  jobTitle: "Geschäftsführer",
  description: "Diplom-Wirtschaftsinformatiker (FH), Gründer und Geschäftsführer der FDM GmbH",
  worksFor: { "@id": "https://www.fdm-group.de/#organization" },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Hochschule – Diplom Wirtschaftsinformatiker (FH)",
  },
  url: "https://www.fdm-group.de/ueber-uns",
};

const zulassung = [
  ["Zertifizierer", "GZQ GmbH / DAkkS"],
  ["Fachbereich", "FB4 – Berufliche Weiterbildung"],
  ["Gültig bis", "17. Oktober 2029"],
  ["Zertifikat-Nr.", "Z-000473-2"],
  ["Maßnahmen-Nr.", "Z-000483-2"],
];

export default function UeberUnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section className="py-20 text-white" style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-5 border border-white/20"
                style={{ background: "rgba(255,255,255,0.1)", color: "#bae6fd" }}
              >
                <Building2 size={14} aria-hidden="true" />
                Bildungsträger aus Eislingen/Fils
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">Über die FDM GmbH</h1>
              <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
                Wir sind ein nach AZAV zugelassener Bildungsträger. Mit der FDM Akademie bieten wir berufliche
                Weiterbildung im virtuellen Klassenzimmer, mit alvatar.de Online-Kurse zu KI und digitalen Kompetenzen.
              </p>
            </div>

            <div
              className="rounded-3xl p-8"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Image src="/gzq-zertifikat.svg" alt="GZQ AZAV Zertifizierung" width={52} height={52} className="flex-shrink-0" style={{ height: "auto" }} />
                <h2 className="font-bold text-lg">Trägerzulassung nach AZAV</h2>
              </div>
              <dl className="space-y-2 text-sm">
                {zulassung.map(([name, wert]) => (
                  <div key={name} className="flex justify-between gap-4 pb-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                    <dt style={{ color: "#bae6fd" }}>{name}</dt>
                    <dd className="font-medium text-right">{wert}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Unternehmen */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-5" style={{ color: "#1e293b" }}>
            Unser Unternehmen
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Die FDM GmbH ist ein Bildungsträger mit Sitz in Eislingen/Fils. Wir sind nach AZAV (Akkreditierungs- und
              Zulassungsverordnung Arbeitsförderung) zugelassen. Die Zulassung hat die GZQ GmbH erteilt, eine von der
              Deutschen Akkreditierungsstelle (DAkkS) akkreditierte Zertifizierungsstelle.
            </p>
            <p>
              Wir glauben, dass berufliche Weiterbildung für jeden zugänglich sein sollte, unabhängig von der
              persönlichen Lebenssituation. Deshalb gibt es bei uns zwei klar getrennte Angebote: Weiterbildungen, für
              die eine staatliche Förderung in Frage kommt, und erschwingliche Online-Kurse, die Sie selbst buchen.
            </p>
          </div>
        </div>
      </section>

      {/* Zwei Bereiche */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#1e293b" }}>
            Unsere zwei Bereiche
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl p-8 text-white" style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-200 mb-2">FDM Akademie</div>
              <h3 className="text-2xl font-bold mb-4">Geförderte Weiterbildung</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Live-Unterricht im virtuellen Klassenzimmer",
                  "Weiterbildungen und Umschulungen in Vollzeit oder Teilzeit",
                  "Förderung über Bildungsgutschein oder Qualifizierungschancengesetz möglich",
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
                  "Über 100 Selbstlernkurse zu KI, Automatisierung und digitalen Kompetenzen",
                  "Sofort starten, im eigenen Tempo lernen",
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

      {/* Geschäftsführung und Standort */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h2 className="text-xl font-bold mb-6" style={{ color: "#1e293b" }}>
                Geschäftsführung
              </h2>
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center text-xl font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
                  aria-hidden="true"
                >
                  DA
                </div>
                <div>
                  <p className="text-lg font-bold" style={{ color: "#1e293b" }}>
                    Dursun Alver
                  </p>
                  <p className="text-sm" style={{ color: "#3f74bc" }}>
                    Geschäftsführer
                  </p>
                  <p className="text-sm text-slate-600">Diplom-Wirtschaftsinformatiker (FH)</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-600">Amtsgericht Ulm · HRB 746652</p>
              <Link href="/leitbild" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#3f74bc] hover:underline">
                <Award size={15} aria-hidden="true" />
                Unser Leitbild lesen
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h2 className="text-xl font-bold mb-6" style={{ color: "#1e293b" }}>
                Standort und Kontakt
              </h2>
              <address className="not-italic space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin size={18} style={{ color: "#3f74bc", marginTop: 2 }} className="flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">FDM GmbH</p>
                    <p>Schillerstraße 21</p>
                    <p>73054 Eislingen/Fils</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} style={{ color: "#3f74bc" }} className="flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+4971616275120" className="hover:text-[#3f74bc]">
                    07161 – 6275120
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} style={{ color: "#3f74bc" }} className="flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:info@fdm-group.de" className="hover:text-[#3f74bc]">
                    info@fdm-group.de
                  </a>
                </div>
              </address>
              <Link href="/kontakt" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#3f74bc] hover:underline">
                Zur Kontaktseite <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BeratungCta />
    </>
  );
}
