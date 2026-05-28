import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leitbild – Mission, Vision & Qualitätspolitik der FDM GmbH",
  description:
    "Das offizielle Leitbild der FDM GmbH: Mission, Vision, Unternehmenswerte und Qualitätspolitik. Erstellt im Rahmen der AZAV-Zertifizierung nach GZQ-Auditanforderungen.",
  keywords: [
    "Leitbild FDM GmbH",
    "Mission Vision",
    "Qualitätspolitik Bildungsträger",
    "AZAV Audit",
    "Unternehmenswerte",
    "GZQ Zertifizierung",
  ],
  alternates: { canonical: "https://www.fdm-group.de/leitbild" },
  openGraph: {
    url: "https://www.fdm-group.de/leitbild",
    title: "Leitbild der FDM GmbH – Mission, Vision & Qualitätspolitik",
    description:
      "Unser Leitbild: Qualität, Transparenz und Kundenorientierung als Grundlage unserer AZAV-zertifizierten Bildungsarbeit.",
  },
};

const werte = [
  {
    title: "Kundenorientierung",
    desc: "Unsere Bildungsangebote sind stets auf die Bedürfnisse und Ziele unserer Teilnehmer sowie der Unternehmen ausgerichtet. Wir sehen uns als Dienstleister, der durch intensive Beratung, individuelle Betreuung und praxisnahe Schulungen den Erfolg unserer Teilnehmer fördert.",
  },
  {
    title: "Praxisnähe und Relevanz",
    desc: "Unsere Kurse werden laufend an die aktuellen Anforderungen des Arbeitsmarktes angepasst. Durch enge Kooperationen mit Unternehmen stellen wir sicher, dass die vermittelten Inhalte relevant und praxisnah sind.",
  },
  {
    title: "Chancengleichheit und Integration",
    desc: "Wir bieten ein inklusives Lernumfeld, das es allen Teilnehmern unabhängig von ihrem Hintergrund ermöglicht, ihre beruflichen Chancen zu maximieren und eine nachhaltige Eingliederung in den Arbeitsmarkt zu erreichen.",
  },
  {
    title: "Qualität und Kontinuität",
    desc: "Unsere Programme unterliegen einem kontinuierlichen Verbesserungsprozess. Wir arbeiten ständig daran, unsere Inhalte und Lehrmethoden zu optimieren, um unseren Teilnehmern die bestmögliche Bildung zu bieten.",
  },
];

const qualitaetsziele = [
  {
    nr: "1",
    title: "Kundenzufriedenheit",
    desc: "Wir streben an, eine Kundenzufriedenheit von mindestens 90 % bei allen Schulungen zu erreichen. Dies wird durch Feedbackbögen, Zufriedenheitsumfragen und die schnelle Bearbeitung von Rückmeldungen sichergestellt.",
  },
  {
    nr: "2",
    title: "Erfolgsquote",
    desc: "95 % unserer Teilnehmer sollen die angebotenen Qualifikationen erfolgreich abschließen und zertifiziert werden.",
  },
  {
    nr: "3",
    title: "Eingliederungsquote",
    desc: "Mindestens 80 % der Teilnehmer sollen innerhalb von 6 Monaten nach Abschluss unserer Programme in den Arbeitsmarkt oder in weiterführende Ausbildungen integriert werden.",
  },
  {
    nr: "4",
    title: "Mitarbeiterqualifikation",
    desc: "Alle Dozenten und Mitarbeiter der FDM GmbH nehmen regelmäßig an Fortbildungen teil, um den hohen qualitativen Anforderungen gerecht zu werden und aktuelle Entwicklungen im Bildungsbereich in unsere Programme einfließen zu lassen.",
  },
];

export default function LeitbildPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 text-white"
        style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-white/20"
                style={{ background: "rgba(255,255,255,0.1)", color: "#bae6fd" }}
              >
                AZAV-Qualitätsdokument
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Leitbild der FDM GmbH
              </h1>
              <p className="text-lg max-w-xl" style={{ color: "#cbd5e1" }}>
                Unser Selbstverständnis als AZAV-zertifizierter Bildungsträger –
                Mission, Vision, Werte und Qualitätspolitik.
              </p>
            </div>
            {/* GZQ Siegel */}
            <div className="flex-shrink-0">
              <Image
                src="/gzq-zertifikat.svg"
                alt="GZQ AZAV Zertifizierung"
                width={120}
                height={120}
                className="drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Unternehmensprofil */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e293b" }}>
            Unser Unternehmensprofil
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Die FDM GmbH bietet hochwertige Bildungsprogramme und berufliche
            Weiterbildungen im Bereich{" "}
            <strong>Online-Marketing, Social Media Management</strong> und{" "}
            <strong>digitale Wirtschaft</strong> an. Unsere Kunden sind{" "}
            <strong>Arbeitsuchende, Berufseinsteiger, Quereinsteiger</strong>{" "}
            und <strong>Beschäftigte</strong>, die sich weiterqualifizieren
            möchten. Unser Fokus liegt darauf, unseren Teilnehmern praxisnahe
            Kompetenzen zu vermitteln, die ihre Chancen auf dem Arbeitsmarkt
            nachhaltig verbessern.
          </p>
        </section>

        {/* Mission */}
        <section
          className="rounded-3xl p-8 border-l-4"
          style={{ background: "#eff6ff", borderColor: "#3f74bc" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e293b" }}>
            Unsere Mission
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Wir fördern die berufliche Qualifizierung unserer Teilnehmer und
            unterstützen sie dabei, ihre <strong>beruflichen Ziele</strong> zu
            erreichen. Unser Ziel ist es, die Teilnehmer durch{" "}
            <strong>praxisorientierte Bildungsprogramme</strong> und{" "}
            <strong>maßgeschneiderte Schulungen</strong> gezielt in den
            Arbeitsmarkt einzugliedern. Mit unseren Programmen stärken wir die{" "}
            <strong>Employability</strong> und tragen zur Sicherung von
            Fachkräften in der digitalen Wirtschaft bei.
          </p>
        </section>

        {/* Vision */}
        <section
          className="rounded-3xl p-8 border-l-4"
          style={{ background: "#f0fdf4", borderColor: "#16a34a" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e293b" }}>
            Unsere Vision
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Wir streben danach, einer der führenden Bildungsträger für{" "}
            <strong>digitale Kompetenzvermittlung</strong> in Deutschland zu
            sein. Wir möchten unseren Teilnehmern die besten Voraussetzungen
            bieten, um auf die sich wandelnden Anforderungen des Arbeitsmarktes
            vorbereitet zu sein und ihre berufliche Laufbahn erfolgreich zu
            gestalten.
          </p>
        </section>

        {/* Werte */}
        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1e293b" }}>
            Unsere Werte
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {werte.map((w) => (
              <div
                key={w.title}
                className="bg-white rounded-2xl border border-slate-200 p-6"
              >
                <h3
                  className="font-bold mb-2"
                  style={{ color: "#3f74bc" }}
                >
                  {w.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Qualitätspolitik */}
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1e293b" }}>
            Qualitätspolitik
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Unsere <strong>Qualitätspolitik</strong> basiert auf den Prinzipien
            der <strong>Kundenzufriedenheit</strong>, <strong>Effizienz</strong>{" "}
            und <strong>kontinuierlichen Verbesserung</strong>. Die Qualität
            unserer Bildungsangebote wird durch regelmäßige{" "}
            <strong>Feedbackschleifen</strong>, <strong>interne Audits</strong>{" "}
            und die <strong>Evaluierung</strong> der Lernfortschritte
            sichergestellt. Wir verpflichten uns, folgende Qualitätsziele zu
            erreichen:
          </p>
          <div className="space-y-4">
            {qualitaetsziele.map((q) => (
              <div
                key={q.nr}
                className="flex gap-4 bg-white rounded-2xl border border-slate-200 p-5"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: "#3f74bc" }}
                >
                  {q.nr}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#1e293b" }}>
                    {q.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{q.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Zielsetzung */}
        <section
          className="rounded-3xl p-8"
          style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">
            Unsere Zielsetzung
          </h2>
          <p className="leading-relaxed" style={{ color: "#e2e8f0" }}>
            Unser oberstes Ziel ist die{" "}
            <strong className="text-white">
              nachhaltige Eingliederung unserer Teilnehmer
            </strong>{" "}
            in den Arbeitsmarkt. Durch praxisnahe Schulungen, individuelle
            Betreuung und kontinuierliche Qualitätskontrollen möchten wir
            sicherstellen, dass unsere Teilnehmer optimal auf ihre berufliche
            Zukunft vorbereitet sind. Die{" "}
            <strong className="text-white">Zielerreichung</strong> wird durch
            regelmäßige{" "}
            <strong className="text-white">interne Audits</strong>,{" "}
            <strong className="text-white">Managementbewertungen</strong> und
            die Erhebung von{" "}
            <strong className="text-white">Kennzahlen</strong> wie der
            Vermittlungsquote und der Zufriedenheit der Teilnehmer gemessen.
          </p>
        </section>

        {/* Zertifizierungsnachweis */}
        <section className="flex flex-col sm:flex-row items-center gap-6 bg-slate-50 rounded-2xl border border-slate-200 p-6">
          <Image
            src="/gzq-zertifikat.svg"
            alt="GZQ AZAV Maßnahmenzulassung"
            width={100}
            height={100}
            className="flex-shrink-0"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#3f74bc" }}>
              Zertifizierungsnachweis
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Die FDM GmbH ist zugelassener Träger nach AZAV, zertifiziert durch
              die <strong>GZQ GmbH</strong> – eine von der Deutschen
              Akkreditierungsstelle GmbH (DAkkS) akkreditierte
              Zertifizierungsstelle. Zertifikat-Nr.{" "}
              <strong>Z-000473-2</strong>, gültig bis{" "}
              <strong>17.10.2029</strong>.
            </p>
            <Link
              href="/azav"
              className="inline-flex items-center gap-1 text-sm font-semibold mt-2 hover:underline"
              style={{ color: "#3f74bc" }}
            >
              Zur AZAV-Seite →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
