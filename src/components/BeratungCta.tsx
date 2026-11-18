import Link from "next/link";
import { Phone, Users } from "lucide-react";

// Einheitlicher Abschluss der Unterseiten: führt immer zum Beratungsformular.
export default function BeratungCta({
  titel = "Kostenlose Beratung gewünscht?",
  text = "Wir helfen Ihnen, die richtige Weiterbildung zu finden, und klären mit Ihnen die Fördermöglichkeiten.",
}: {
  titel?: string;
  text?: string;
}) {
  return (
    <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}>
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "url(/dot-grid.svg)", backgroundSize: "28px 28px" }}
        aria-hidden="true"
      />
      <div className="max-w-4xl mx-auto px-6 text-center text-white relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{titel}</h2>
        <p className="mb-8 text-lg" style={{ color: "#cbd5e1" }}>
          {text}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/weiterbildung#beratung"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
            style={{ color: "#2c3892" }}
          >
            <Users size={18} aria-hidden="true" />
            Jetzt Beratung anfragen
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
  );
}
