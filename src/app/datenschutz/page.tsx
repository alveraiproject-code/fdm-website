import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("datenschutz");

export default function DatenschutzPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-10" style={{ color: "#1e293b" }}>
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-slate-700 text-sm leading-relaxed">
          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-semibold mb-1">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              2. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              <br />
              FDM GmbH
              <br />
              Schillerstraße 21
              <br />
              73054 Eislingen/Fils
              <br />
              Telefon: 07161 – 6275120
              <br />
              E-Mail: info@fdm-group.de
              <br />
              Vertreten durch: Dursun Alver (Geschäftsführer)
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-semibold mb-1">Server-Log-Dateien</h3>
            <p className="mb-3">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage,
              IP-Adresse.
            </p>
            <h3 className="font-semibold mb-1">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              4. Ihre Rechte
            </h2>
            <p className="mb-3">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung oder Löschung dieser Daten.
            </p>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, wenden Sie sich bitte an:
              info@fdm-group.de
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              5. Cookies
            </h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies oder
              Analysetools von Drittanbietern. Es werden lediglich
              technisch notwendige Cookies verwendet, um die grundlegende
              Funktionalität der Website sicherzustellen.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              6. Externe Links
            </h2>
            <p>
              Diese Website enthält Links zur externen Plattform alvatar.de.
              Für den Datenschutz auf alvatar.de gilt die dort hinterlegte
              Datenschutzerklärung. Wir haben keinen Einfluss auf externe
              Inhalte.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              7. Beschwerderecht
            </h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              über die Verarbeitung Ihrer personenbezogenen Daten zu
              beschweren. Zuständige Aufsichtsbehörde in
              Baden-Württemberg ist der Landesbeauftragte für den Datenschutz
              und die Informationsfreiheit Baden-Württemberg.
            </p>
          </div>

          <p className="text-xs text-slate-400 pt-4 border-t border-slate-200">
            Stand: Mai 2026
          </p>
        </div>
      </div>
    </section>
  );
}
