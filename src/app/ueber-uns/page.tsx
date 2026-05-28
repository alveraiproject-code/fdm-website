import type { Metadata } from "next";
import { Award, Users, MapPin, Mail, Phone, GraduationCap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns – FDM GmbH | AZAV-zertifizierter Bildungsträger",
  description:
    "FDM GmbH – AZAV-zertifizierter Bildungsträger in Eislingen/Fils. Gegründet von Dursun Alver (Dipl. Wirtschaftsinformatiker FH). Erfahren Sie mehr über unser Unternehmen und unsere Mission.",
  keywords: [
    "FDM GmbH",
    "Dursun Alver",
    "Bildungsträger Eislingen",
    "AZAV Zertifizierung",
    "Weiterbildung Baden-Württemberg",
    "Online Marketing Kurs",
  ],
  alternates: { canonical: "https://www.fdm-group.de/ueber-uns" },
  openGraph: {
    url: "https://www.fdm-group.de/ueber-uns",
    title: "Über uns – FDM GmbH | AZAV-zertifizierter Bildungsträger",
    description:
      "Lernen Sie FDM GmbH und Geschäftsführer Dursun Alver kennen – AZAV-zertifizierter Bildungsträger mit Sitz in Eislingen/Fils.",
  },
};

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

export default function UeberUnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      {/* Hero */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Über die FDM GmbH</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#cbd5e1" }}>
            AZAV-zertifizierter Bildungsträger und Online-Akademie für
            berufliche Weiterbildung, KI-Kompetenz und digitale Qualifikation.
          </p>
        </div>
      </section>

      {/* Über uns Text */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-5" style={{ color: "#1e293b" }}>
                Unser Unternehmen
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Die FDM GmbH ist ein staatlich anerkannter Bildungsträger mit
                  Sitz in Eislingen/Fils. Wir sind nach AZAV (Akkreditierungs-
                  und Zulassungsverordnung Arbeitsförderung) zertifiziert und
                  durch die GZQ GmbH – eine von der Deutschen
                  Akkreditierungsstelle (DAkkS) akkreditierte
                  Zertifizierungsstelle – zugelassen.
                </p>
                <p>
                  Unser Angebot umfasst zwei Bereiche: Zum einen bieten wir
                  geförderte Weiterbildungsmaßnahmen nach §81 SGB III an, die
                  über einen Bildungsgutschein der Agentur für Arbeit oder des
                  Jobcenters finanziert werden können. Zum anderen betreiben wir
                  die Online-Akademie <strong>alvatar.de</strong>, auf der über
                  100 Online-Kurse zu Künstlicher Intelligenz, Automatisierung
                  und digitalen Kompetenzen angeboten werden.
                </p>
                <p>
                  Wir glauben, dass berufliche Weiterbildung für jeden zugänglich
                  sein sollte – unabhängig von der persönlichen Lebenssituation.
                  Deshalb engagieren wir uns sowohl für staatlich geförderte
                  Programme als auch für erschwingliche Online-Kurse auf höchstem
                  inhaltlichem Niveau.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Cert card */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award size={24} />
                  <h3 className="font-bold text-lg">AZAV-Zertifizierung</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    ["Zertifizierer", "GZQ GmbH / DAkkS"],
                    ["Fachbereich", "FB4 – Berufliche Weiterbildung"],
                    ["Gültig bis", "17. Oktober 2029"],
                    ["Zertifikat-Nr.", "Z-000473-2"],
                    ["Maßnahmen-Nr.", "Z-000483-2"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between pb-2"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}
                    >
                      <span style={{ color: "#bae6fd" }}>{k}</span>
                      <span className="font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Handelsregister */}
              <div className="rounded-2xl p-6 border border-slate-200 bg-white">
                <h3 className="font-bold mb-3" style={{ color: "#1e293b" }}>Handelsregister</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>Amtsgericht Ulm · HRB 746652</p>
                  <p>Eingetragen in Baden-Württemberg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geschäftsführung */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: "#1e293b" }}>
            Geschäftsführung
          </h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center card-hover">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-bold text-white"
                style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
              >
                DA
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ color: "#1e293b" }}>
                Dursun Alver
              </h3>
              <p className="text-sm mb-3" style={{ color: "#3f74bc" }}>
                Geschäftsführer
              </p>
              <p className="text-sm text-slate-600 mb-5">
                Diplom-Wirtschaftsinformatiker (FH)
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="mailto:info@fdm-group.de"
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-white"
                  style={{ background: "#3f74bc" }}
                >
                  <Mail size={12} />
                  E-Mail
                </a>
                <a
                  href="tel:+4971616275120"
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  <Phone size={12} />
                  Anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standort */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-5" style={{ color: "#1e293b" }}>
                Unser Standort
              </h2>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin size={18} style={{ color: "#3f74bc", marginTop: 2 }} className="flex-shrink-0" />
                  <div>
                    <p className="font-semibold">FDM GmbH</p>
                    <p>Schillerstraße 21</p>
                    <p>73054 Eislingen/Fils</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} style={{ color: "#3f74bc" }} className="flex-shrink-0" />
                  <a href="tel:+4971616275120" className="hover:text-[#3f74bc]">07161 – 6275120</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} style={{ color: "#3f74bc" }} className="flex-shrink-0" />
                  <a href="mailto:info@fdm-group.de" className="hover:text-[#3f74bc]">info@fdm-group.de</a>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity"
                  style={{ background: "#3f74bc" }}
                >
                  <Users size={16} />
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-2xl h-64 flex items-center justify-center border border-slate-200"
              style={{ background: "#f1f5f9" }}
            >
              <div className="text-center text-slate-400">
                <MapPin size={32} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm">Schillerstraße 21, 73054 Eislingen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
