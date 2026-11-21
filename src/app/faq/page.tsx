import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import BeratungCta from "@/components/BeratungCta";
import { faqSeite, fragen } from "@/lib/faq";
import { fachbereiche, ladeKatalog } from "@/lib/katalog";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumb } from "@/lib/schema";
import { BASE, kennzahlen, ldJson } from "@/lib/site";

export const metadata = buildMetadata("faq");

// Häufige Fragen: vollständige, für sich verständliche Antworten zu Angebot, Förderung und Teilnahme.
export default async function FaqSeite() {
  const katalog = await ladeKatalog();
  const liste = fragen({ ...kennzahlen(katalog), bereiche: fachbereiche(katalog).length });
  const rubriken = [...new Set(liste.map((f) => f.rubrik))];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faqSeite(liste, `${BASE}/faq#faq`)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ldJson(
            breadcrumb([
              { name: "Startseite", pfad: "/" },
              { name: "Häufige Fragen", pfad: "/faq" },
            ]),
          ),
        }}
      />

      <section className="py-16 text-white" style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}>
        <div className="mx-auto max-w-4xl px-6">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium"
            style={{ background: "rgba(255,255,255,0.1)", color: "#bae6fd" }}
          >
            <HelpCircle size={14} aria-hidden="true" />
            Antworten auf einen Blick
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">Häufige Fragen</h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: "#cbd5e1" }}>
            Alles Wichtige zur Weiterbildung bei der FDM Akademie: Angebot, Bildungsgutschein, Kosten, Ablauf und
            Teilnahme. Ihre Frage ist nicht dabei? Wir beraten Sie kostenlos.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-4xl space-y-12 px-6">
          {rubriken.map((rubrik) => (
            <div key={rubrik}>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">{rubrik}</h2>
              <div className="space-y-3">
                {liste
                  .filter((f) => f.rubrik === rubrik)
                  .map((f) => (
                    // Die Antworten stehen im Seitenquelltext, auch wenn sie eingeklappt sind.
                    <details key={f.frage} open className="group rounded-2xl border border-slate-200 bg-white">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:hidden">
                        <h3 className="font-semibold text-slate-900">{f.frage}</h3>
                        <ChevronDown
                          size={20}
                          className="flex-shrink-0 text-[#3f74bc] transition-transform duration-200 group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <p className="-mt-1 px-5 pb-5 text-sm leading-relaxed text-slate-700">{f.antwort}</p>
                    </details>
                  ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
            <h2 className="mb-2 text-base font-semibold text-slate-900">Mehr dazu</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Link href="/weiterbildung" className="text-[#3f74bc] underline">
                  Kurskatalog der FDM Akademie
                </Link>{" "}
                mit Suche nach Thema, Fachbereich und Zeitmodell
              </li>
              <li>
                <Link href="/azav" className="text-[#3f74bc] underline">
                  Bildungsgutschein
                </Link>
                : Voraussetzungen und Weg zur Förderung
              </li>
              <li>
                <Link href="/qcg" className="text-[#3f74bc] underline">
                  Qualifizierungschancengesetz
                </Link>
                : Förderung für Beschäftigte und Arbeitgeber
              </li>
            </ul>
          </div>
        </div>
      </section>

      <BeratungCta />
    </>
  );
}
