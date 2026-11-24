"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Send } from "lucide-react";
import { track } from "@vercel/analytics";
import { CRM_URL } from "@/lib/katalog";

// Förder-Check: drei kurze Fragen, dann eine Einordnung des passenden Förderwegs und die Kontaktdaten.
// Die Anfrage geht wie beim Beratungsformular direkt in das CRM. Bewusst ohne Förderzusage:
// Über die Förderung entscheidet immer der Kostenträger.

type Wahl = { wert: string; name: string };

const SITUATIONEN: Wahl[] = [
  { wert: "arbeitslos", name: "Arbeitslos" },
  { wert: "arbeitsuchend", name: "Arbeitsuchend gemeldet" },
  { wert: "bedroht", name: "Von Arbeitslosigkeit bedroht" },
  { wert: "beschaeftigt", name: "Beschäftigt" },
  { wert: "selbststaendig", name: "Selbstständig" },
  { wert: "sonstiges", name: "Etwas anderes" },
];

const GUTSCHEIN: Wahl[] = [
  { wert: "Bildungsgutschein liegt vor", name: "Ja, er liegt mir vor" },
  { wert: "Bildungsgutschein ist beantragt oder zugesagt", name: "Beantragt oder zugesagt" },
  { wert: "Noch kein Bildungsgutschein", name: "Noch nicht" },
  { wert: "Weiß nicht, ob ein Bildungsgutschein in Frage kommt", name: "Das weiß ich nicht" },
];

const ZAHLUNG: Wahl[] = [
  { wert: "Der Arbeitgeber soll einbezogen werden", name: "Mein Arbeitgeber soll einbezogen werden" },
  { wert: "Mit dem Arbeitgeber ist noch nicht gesprochen", name: "Ich habe noch nicht mit meinem Arbeitgeber gesprochen" },
  { wert: "Möchte selbst zahlen", name: "Ich möchte selbst zahlen" },
];

// Muss zur Auswahl im CRM passen (dort wird das Interesse nur aus dieser Liste übernommen).
const BEREICHE = [
  "IT und Programmierung",
  "Künstliche Intelligenz",
  "Kaufmännische Weiterbildung",
  "Marketing und Vertrieb",
  "Management und Personal",
  "Gesundheit und Pflege",
  "Technik und CAD",
  "Medien und Design",
  "Sprachen",
  "Ich bin noch unsicher und möchte mich beraten lassen",
];

const ZEITMODELLE = ["Vollzeit", "Teilzeit", "Das ist mir noch nicht klar"];

const feld =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[#3f74bc] focus:ring-2 focus:ring-[#3f74bc]/20";
const beschriftung = "mb-1 block text-xs font-medium text-slate-600";
const wahlKnopf =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-left text-sm font-medium text-slate-800 transition hover:border-[#3f74bc] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#3f74bc]/30";

const istBeschaeftigt = (s: string) => s === "beschaeftigt";
const mitGutschein = (s: string) => ["arbeitslos", "arbeitsuchend", "bedroht"].includes(s);

function einordnung(situation: string, zahlung: string) {
  if (mitGutschein(situation))
    return "Für Ihre Situation kommt der Bildungsgutschein in Frage. Über die Förderung entscheidet Ihre Agentur für Arbeit oder Ihr Jobcenter. Wir bereiten mit Ihnen das Gespräch dort vor.";
  if (istBeschaeftigt(situation) && zahlung === "Möchte selbst zahlen")
    return "Sie können die Weiterbildung selbst bezahlen. Wir nennen Ihnen den Preis und prüfen mit Ihnen, ob über Ihren Arbeitgeber doch eine Förderung in Frage kommt.";
  if (istBeschaeftigt(situation))
    return "Für Beschäftigte kommt das Qualifizierungschancengesetz in Frage. Den Antrag stellt der Arbeitgeber, über die Förderung entscheidet die Agentur für Arbeit. Wir unterstützen Sie und Ihren Arbeitgeber dabei.";
  return "Ob eine Förderung möglich ist, hängt in Ihrer Situation vom Einzelfall ab. Das klären wir mit Ihnen in der kostenlosen Beratung.";
}

export default function FoerderCheck({ quelle }: { quelle: string }) {
  const geladen = useRef(0);
  const rahmen = useRef<HTMLDivElement>(null);
  const [schritt, setSchritt] = useState(1);
  const [situation, setSituation] = useState("");
  const [zweite, setZweite] = useState("");
  const [bereich, setBereich] = useState("");
  const [zeit, setZeit] = useState("");
  const [stand, setStand] = useState<"offen" | "sendet" | "gesendet">("offen");
  const [fehler, setFehler] = useState<string | null>(null);

  useEffect(() => {
    geladen.current = Date.now();
  }, []);

  // Nach jedem Schritt und nach dem Senden den Kasten wieder ins Bild holen: Auf dem Handy ändert sich
  // seine Höhe, und ohne das stünde zum Beispiel die Bestätigung außerhalb des sichtbaren Bereichs.
  const gesendet = stand === "gesendet";
  const erster = useRef(true);
  useEffect(() => {
    if (erster.current) {
      erster.current = false;
      return;
    }
    rahmen.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [schritt, gesendet]);

  const hatZweite = mitGutschein(situation) || istBeschaeftigt(situation);

  function zurueck() {
    setFehler(null);
    setSchritt((s) => (s === 3 && !hatZweite ? 1 : Math.max(1, s - 1)));
  }

  async function absenden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFehler(null);
    setStand("sendet");
    const f = new FormData(e.currentTarget);
    const text = (name: string) => String(f.get(name) ?? "");
    const nachricht = [
      "Angaben aus dem Förder-Check auf der Website:",
      mitGutschein(situation) && zweite ? `${zweite}.` : null,
      istBeschaeftigt(situation) && zweite ? `Finanzierung: ${zweite}.` : null,
      zeit ? `Gewünschtes Zeitmodell: ${zeit}.` : null,
      text("nachricht").trim() ? `\n${text("nachricht").trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    try {
      const antwort = await fetch(`${CRM_URL}/api/anfrage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          anrede: text("anrede"),
          vorname: text("vorname"),
          nachname: text("nachname"),
          email: text("email"),
          telefon: text("telefon"),
          beschaeftigungsstatus: situation,
          interesse: bereich,
          nachricht,
          firma_website: text("firma_website"),
          einwilligung: f.get("einwilligung") === "on",
          geladen: geladen.current,
          quelle,
          kurs: "",
        }),
      });
      const daten = (await antwort.json().catch(() => ({}))) as { ok?: boolean; fehler?: string };
      if (!antwort.ok || !daten.ok) {
        setFehler(daten.fehler ?? "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.");
        setStand("offen");
        return;
      }
      setStand("gesendet");
      // Zählt nur, dass eine Anfrage gesendet wurde; keine Angaben aus dem Formular.
      track("Anfrage gesendet", { seite: "Förder-Check" });
    } catch {
      setFehler("Ihre Anfrage konnte nicht gesendet werden. Bitte prüfen Sie Ihre Verbindung oder rufen Sie uns an.");
      setStand("offen");
    }
  }

  if (stand === "gesendet") {
    return (
      <div ref={rahmen} className="scroll-mt-28 rounded-2xl border border-green-200 bg-green-50 p-8 text-center" role="status">
        <CheckCircle className="mx-auto mb-3 h-10 w-10 text-green-600" aria-hidden="true" />
        <h3 className="text-xl font-bold text-slate-900">Vielen Dank für Ihre Angaben</h3>
        <p className="mt-2 text-sm text-slate-600">
          Ihre Anfrage ist bei uns angekommen. Sie erhalten in Kürze eine E-Mail von uns mit passenden Weiterbildungen
          und den nächsten Schritten.
        </p>
      </div>
    );
  }

  const auswahl = (optionen: Wahl[], gewaehlt: string, waehle: (wert: string) => void) => (
    <div className="grid gap-2 sm:grid-cols-2">
      {optionen.map((o) => (
        <button
          key={o.wert}
          type="button"
          aria-pressed={gewaehlt === o.wert}
          onClick={() => waehle(o.wert)}
          className={`${wahlKnopf} ${gewaehlt === o.wert ? "border-[#3f74bc] bg-blue-50" : ""}`}
        >
          {o.name}
        </button>
      ))}
    </div>
  );

  return (
    <div ref={rahmen} className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#3f74bc]">
          Schritt {schritt} von 4
        </p>
        <div className="flex gap-1.5" aria-hidden="true">
          {[1, 2, 3, 4].map((n) => (
            <span key={n} className={`h-1.5 w-8 rounded-full ${n <= schritt ? "bg-[#3f74bc]" : "bg-slate-200"}`} />
          ))}
        </div>
      </div>

      {schritt === 1 && (
        <fieldset>
          <legend className="mb-4 text-lg font-bold text-slate-900">Wie ist Ihre aktuelle Situation?</legend>
          {auswahl(SITUATIONEN, situation, (wert) => {
            setSituation(wert);
            setZweite("");
            setSchritt(mitGutschein(wert) || istBeschaeftigt(wert) ? 2 : 3);
          })}
        </fieldset>
      )}

      {schritt === 2 && (
        <fieldset>
          <legend className="mb-4 text-lg font-bold text-slate-900">
            {istBeschaeftigt(situation)
              ? "Wie soll die Weiterbildung finanziert werden?"
              : "Haben Sie bereits einen Bildungsgutschein?"}
          </legend>
          {auswahl(istBeschaeftigt(situation) ? ZAHLUNG : GUTSCHEIN, zweite, (wert) => {
            setZweite(wert);
            setSchritt(3);
          })}
        </fieldset>
      )}

      {schritt === 3 && (
        <div>
          <h3 className="mb-4 text-lg font-bold text-slate-900">Was möchten Sie lernen?</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <label>
              <span className={beschriftung}>Fachbereich</span>
              <select className={feld} value={bereich} onChange={(e) => setBereich(e.target.value)}>
                <option value="">– bitte wählen –</option>
                {BEREICHE.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </label>
            <label>
              <span className={beschriftung}>Vollzeit oder Teilzeit?</span>
              <select className={feld} value={zeit} onChange={(e) => setZeit(e.target.value)}>
                <option value="">– bitte wählen –</option>
                {ZEITMODELLE.map((z) => (
                  <option key={z}>{z}</option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="button"
            disabled={!bereich}
            onClick={() => setSchritt(4)}
            className="mt-5 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
            style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
          >
            Weiter <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {schritt === 4 && (
        <form onSubmit={absenden} className="space-y-4">
          <div className="rounded-xl bg-blue-50 p-4 text-sm text-slate-800">
            <p className="font-semibold text-slate-900">Ihr Ergebnis</p>
            <p className="mt-1">{einordnung(situation, zweite)}</p>
            <p className="mt-2 text-slate-600">
              Kursstarts sind derzeit ab Januar 2027 möglich. Den genauen Termin legen wir gemeinsam mit Ihnen fest.
            </p>
          </div>
          <p className="text-sm text-slate-700">
            Wohin dürfen wir Ihnen passende Weiterbildungen und die nächsten Schritte schicken?
          </p>
          {fehler && (
            <p role="alert" className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
              {fehler}
            </p>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            <label>
              <span className={beschriftung}>Anrede</span>
              <select name="anrede" className={feld} defaultValue="">
                <option value="">–</option>
                <option>Frau</option>
                <option>Herr</option>
                <option>Divers</option>
              </select>
            </label>
            <label>
              <span className={beschriftung}>Vorname</span>
              <input name="vorname" className={feld} autoComplete="given-name" maxLength={100} />
            </label>
            <label>
              <span className={beschriftung}>Nachname *</span>
              <input name="nachname" required className={feld} autoComplete="family-name" maxLength={100} />
            </label>
            <label>
              <span className={beschriftung}>E-Mail *</span>
              <input name="email" type="email" required className={feld} autoComplete="email" maxLength={200} />
            </label>
            <label className="sm:col-span-2">
              <span className={beschriftung}>Telefon (falls Sie einen Rückruf wünschen)</span>
              <input name="telefon" type="tel" className={feld} autoComplete="tel" maxLength={50} />
            </label>
            <label className="sm:col-span-2">
              <span className={beschriftung}>Möchten Sie uns noch etwas mitteilen?</span>
              <textarea name="nachricht" rows={2} maxLength={2500} className={feld} />
            </label>
          </div>

          {/* Spamschutz: für Menschen unsichtbar, darf nicht ausgefüllt werden */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Bitte dieses Feld leer lassen
              <input name="firma_website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <label className="flex items-start gap-2 text-sm text-slate-700">
            <input type="checkbox" name="einwilligung" required className="mt-0.5 h-4 w-4 accent-[#2c3892]" />
            <span>
              Ich bin damit einverstanden, dass die FDM GmbH meine Angaben speichert und verwendet, um meine Anfrage zu
              bearbeiten und mich dazu zu kontaktieren. Die Einwilligung kann ich jederzeit widerrufen. Näheres steht
              in der{" "}
              <a href="/datenschutz" className="text-[#3f74bc] underline">
                Datenschutzerklärung
              </a>
              . *
            </span>
          </label>

          <button
            type="submit"
            disabled={stand === "sendet"}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {stand === "sendet" ? "Wird gesendet …" : "Kostenlose Beratung anfragen"}
          </button>
          <p className="text-xs text-slate-500">* Pflichtangaben</p>
        </form>
      )}

      {schritt > 1 && (
        <button
          type="button"
          onClick={zurueck}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-[#3f74bc]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Zurück
        </button>
      )}
    </div>
  );
}
