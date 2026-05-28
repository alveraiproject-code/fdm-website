export default function ImpressumPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-10" style={{ color: "#1e293b" }}>
          Impressum
        </h1>

        <div className="space-y-8 text-slate-700 text-sm leading-relaxed">
          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              FDM GmbH
              <br />
              Schillerstraße 21
              <br />
              73054 Eislingen/Fils
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              Vertreten durch
            </h2>
            <p>
              Dursun Alver (Geschäftsführer)
              <br />
              Diplom-Wirtschaftsinformatiker (FH)
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              Kontakt
            </h2>
            <p>
              Telefon: 07161 – 6275126
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@fdm-group.de"
                className="hover:underline"
                style={{ color: "#3f74bc" }}
              >
                info@fdm-group.de
              </a>
              <br />
              Website:{" "}
              <a
                href="https://www.fdm-group.de"
                className="hover:underline"
                style={{ color: "#3f74bc" }}
              >
                www.fdm-group.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              Handelsregister
            </h2>
            <p>
              Registergericht: Amtsgericht Ulm
              <br />
              Registernummer: HRB 746652
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              AZAV-Zertifizierung
            </h2>
            <p>
              FDM GmbH ist zugelassener Träger nach dem Recht der
              Arbeitsförderung gemäß AZAV.
              <br />
              Zertifiziert durch: GZQ GmbH, Sulzbachtalstraße 131, 66125
              Saarbrücken
              <br />
              Akkreditiert durch: Deutsche Akkreditierungsstelle GmbH (DAkkS)
              <br />
              Zertifikat-Registrier-Nr.: Z-000473-2
              <br />
              Gültig bis: 17.10.2029
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
            </h2>
            <p>
              Dursun Alver
              <br />
              Schillerstraße 21
              <br />
              73054 Eislingen/Fils
            </p>
          </div>

          <div>
            <h2 className="font-bold text-base mb-2" style={{ color: "#1e293b" }}>
              Haftungsausschluss
            </h2>
            <h3 className="font-semibold mb-1">Haftung für Inhalte</h3>
            <p className="mb-3">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
            <h3 className="font-semibold mb-1">Haftung für Links</h3>
            <p className="mb-3">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
            <h3 className="font-semibold mb-1">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
