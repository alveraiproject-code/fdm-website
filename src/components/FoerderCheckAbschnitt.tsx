import { CheckCircle, Users } from "lucide-react";
import FoerderCheck from "@/components/FoerderCheck";
import { TRAEGER } from "@/lib/site";

// Abschnitt mit dem Förder-Check: links die Einordnung, rechts die Fragen. Auf dem Handy stehen die Fragen
// direkt unter der Überschrift. `quelle` nennt die Seite, damit das CRM sieht, woher die Anfrage kam.
export default function FoerderCheckAbschnitt({
  quelle,
  titel = "Welche Förderung kommt für Sie in Frage?",
  hintergrund = "bg-white",
}: {
  quelle: string;
  titel?: string;
  hintergrund?: string;
}) {
  return (
    <section id="foerder-check" className={`scroll-mt-24 py-16 ${hintergrund}`}>
      <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-8 px-6 lg:grid-cols-2">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1e293b" }}>
            {titel}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Beantworten Sie drei kurze Fragen. Sie sehen sofort, welcher Förderweg zu Ihrer Situation passt, und
            erhalten von uns passende Weiterbildungen per E-Mail. Kostenlos und unverbindlich.
          </p>
        </div>
        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <FoerderCheck quelle={quelle} />
        </div>
        <div className="lg:col-start-1">
          <ul className="space-y-3 text-sm text-slate-700">
            {[
              "Dauert etwa zwei Minuten",
              "Über die Förderung entscheidet die Agentur für Arbeit oder das Jobcenter; wir bereiten das Gespräch mit Ihnen vor",
              "Persönliche Beratung statt Warteschleife",
            ].map((punkt) => (
              <li key={punkt} className="flex items-start gap-2.5">
                <CheckCircle size={17} className="flex-shrink-0 mt-0.5" style={{ color: "#3f74bc" }} aria-hidden="true" />
                {punkt}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div
              className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center text-white"
              style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
              aria-hidden="true"
            >
              <Users size={24} />
            </div>
            <div className="text-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Ihre Ansprechpartner</p>
              <p className="font-bold" style={{ color: "#1e293b" }}>
                Beratungsteam der FDM Akademie
              </p>
              <p className="text-slate-600">
                <a href={`tel:${TRAEGER.telefonLink}`} className="text-[#3f74bc] underline">
                  {TRAEGER.telefon}
                </a>
                , Montag bis Freitag 9 bis 17 Uhr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
