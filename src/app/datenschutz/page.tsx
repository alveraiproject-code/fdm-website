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
              Die Angaben werden in unserer Kundenverwaltung gespeichert; die
              dafür eingesetzten Dienstleister nennen wir in Abschnitt 5.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              4. Anfragen zur geförderten Weiterbildung (FDM Akademie)
            </h2>
            <h3 className="font-semibold mb-1">Welche Daten wir verarbeiten</h3>
            <p className="mb-3">
              Wenn Sie über das Formular auf der Seite „Geförderte
              Weiterbildung“, über eine Kursseite, per E-Mail oder telefonisch
              eine Beratung anfragen, verarbeiten wir die Angaben, die Sie uns
              machen: Anrede, Name, E-Mail-Adresse, Telefonnummer, Postleitzahl
              und Ort, Ihre aktuelle berufliche Situation, den gewünschten Kurs
              und den Inhalt Ihrer Nachricht. Zusätzlich speichern wir den
              Zeitpunkt der Anfrage, den Zeitpunkt Ihrer Einwilligung und die
              Seite, über die die Anfrage gesendet wurde. Pflichtangaben sind
              im Formular gekennzeichnet. Bitte teilen Sie uns im Freitext
              keine besonders schutzwürdigen Daten mit, etwa zu Ihrer
              Gesundheit.
            </p>
            <h3 className="font-semibold mb-1">Zweck und Rechtsgrundlage</h3>
            <p className="mb-3">
              Wir verwenden die Daten, um Ihre Anfrage zu bearbeiten, Sie zu
              passenden Weiterbildungen und Fördermöglichkeiten zu beraten, Sie
              dazu zu kontaktieren und Ihnen auf Wunsch ein Angebot zu
              erstellen. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1
              lit. a DSGVO) sowie die Durchführung vorvertraglicher Maßnahmen
              auf Ihre Anfrage hin (Art. 6 Abs. 1 lit. b DSGVO). Sie können
              Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
              widerrufen, zum Beispiel per E-Mail an info@fdm-group.de. Die
              Verarbeitung bis zum Widerruf bleibt rechtmäßig.
            </p>
            <h3 className="font-semibold mb-1">Verwaltung der Anfragen</h3>
            <p className="mb-3">
              Ihre Anfrage wird in unserem internen Verwaltungssystem für
              Anfragen (CRM) gespeichert. Zugriff haben nur die Beschäftigten
              der FDM GmbH, die mit Beratung und Teilnehmerverwaltung betraut
              sind. Nach Eingang erhalten Sie eine Eingangsbestätigung per
              E-Mail.
            </p>
            <h3 className="font-semibold mb-1">E-Mail-Verkehr</h3>
            <p className="mb-3">
              Wenn Sie auf unsere E-Mails antworten oder uns an
              beratung@fdm-akademie.de schreiben, wird Ihre Nachricht aus
              unserem Postfach abgerufen, Ihrer Anfrage zugeordnet und zusammen
              mit dem bisherigen Schriftwechsel im CRM gespeichert.
            </p>
            <h3 className="font-semibold mb-1">Einsatz eines KI-Assistenten</h3>
            <p className="mb-3">
              Zur Unterstützung unserer Beratung setzen wir einen KI-Assistenten
              ein (Sprachmodell „Claude“ des Anbieters Anthropic). Er wertet den
              Inhalt Ihrer Anfrage und Ihrer Antworten aus, schlägt passende
              Kurse aus unserem Angebot vor und formuliert Antwortentwürfe.
              Einzelne Antworten, etwa Rückfragen zu Ihrem Anliegen, können
              automatisch versendet werden; solche E-Mails sind als mit
              Unterstützung unseres digitalen Assistenten erstellt
              gekennzeichnet. Die Beratung selbst und alle Entscheidungen
              treffen unsere Mitarbeiterinnen und Mitarbeiter. Über eine
              Förderung entscheidet ausschließlich die Agentur für Arbeit oder
              das Jobcenter. Eine automatisierte Entscheidung im Sinne von
              Art. 22 DSGVO findet nicht statt. Rechtsgrundlage ist unser
              berechtigtes Interesse an einer schnellen und sachgerechten
              Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. f DSGVO). Sie
              können dieser Verarbeitung jederzeit widersprechen; wir
              bearbeiten Ihre Anfrage dann ohne den Assistenten.
            </p>
            <h3 className="font-semibold mb-1">Weitergabe im Rahmen der Förderung</h3>
            <p className="mb-3">
              Entscheiden Sie sich für eine Weiterbildung, geben wir die dafür
              erforderlichen Daten an die Stellen weiter, die an der
              Durchführung und Förderung beteiligt sind. Das sind insbesondere
              die Agentur für Arbeit oder das Jobcenter, bei Beschäftigten
              gegebenenfalls der Arbeitgeber, sowie unsere Kooperationspartner,
              die den Unterricht durchführen. Darüber informieren wir Sie vor
              der Anmeldung gesondert.
            </p>
            <h3 className="font-semibold mb-1">Speicherdauer</h3>
            <p>
              Wir speichern Ihre Daten, solange es für die Bearbeitung Ihrer
              Anfrage und für Anschlussfragen erforderlich ist. Kommt keine
              Teilnahme zustande, löschen wir die Daten, sobald sie nicht mehr
              benötigt werden oder Sie Ihre Einwilligung widerrufen, soweit
              keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              5. Eingesetzte Dienstleister
            </h2>
            <p className="mb-3">
              Für den Betrieb der Website und die Bearbeitung von Anfragen
              setzen wir Dienstleister ein, die Daten in unserem Auftrag
              verarbeiten (Art. 28 DSGVO):
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>
                <strong>Vercel Inc.</strong>, USA: Hosting dieser Website und
                unseres CRM. Dabei werden die unter „Server-Log-Dateien“
                genannten Zugriffsdaten und die Inhalte der Formulare
                verarbeitet.
              </li>
              <li>
                <strong>Supabase Inc.</strong>, USA: Datenbank unseres CRM. Die
                Daten werden in einem Rechenzentrum in Frankfurt am Main
                gespeichert.
              </li>
              <li>
                <strong>ALL-INKL.COM – Neue Medien Münnich</strong>,
                Deutschland: E-Mail-Postfächer und Versand unserer E-Mails.
              </li>
              <li>
                <strong>Anthropic PBC</strong>, USA: Bereitstellung des
                KI-Assistenten. Übermittelt werden der Inhalt Ihrer Anfrage und
                des Schriftwechsels. Der Anbieter verwendet diese Daten nicht
                zum Training seiner Modelle.
              </li>
            </ul>
            <p>
              Bei Anbietern mit Sitz in den USA kann eine Verarbeitung
              außerhalb der Europäischen Union nicht ausgeschlossen werden. Die
              Übermittlung stützt sich auf den Angemessenheitsbeschluss der
              Europäischen Kommission zum EU-U.S. Data Privacy Framework, soweit
              der Anbieter danach zertifiziert ist, und im Übrigen auf die
              Standardvertragsklauseln der Europäischen Kommission (Art. 45, 46
              DSGVO).
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              6. Ihre Rechte
            </h2>
            <p className="mb-3">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung oder Löschung dieser Daten.
            </p>
            <p className="mb-3">
              Außerdem können Sie die Einschränkung der Verarbeitung verlangen,
              der Verarbeitung auf Grundlage berechtigter Interessen
              widersprechen, eine erteilte Einwilligung jederzeit widerrufen
              und Ihre Daten in einem gängigen Format erhalten
              (Datenübertragbarkeit).
            </p>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, wenden Sie sich bitte an:
              info@fdm-group.de
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              7. Cookies
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
              8. Externe Links
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
              9. Beschwerderecht
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
            Stand: November 2026
          </p>
        </div>
      </div>
    </section>
  );
}
