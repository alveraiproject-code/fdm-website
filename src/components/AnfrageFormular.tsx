"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import { track } from "@vercel/analytics";
import { CRM_URL } from "@/lib/katalog";

const SITUATIONEN: [string, string][] = [
  ["arbeitslos", "Arbeitslos"],
  ["arbeitsuchend", "Arbeitsuchend gemeldet"],
  ["bedroht", "Von Arbeitslosigkeit bedroht"],
  ["beschaeftigt", "Beschäftigt"],
  ["kurzarbeit", "In Kurzarbeit"],
  ["selbststaendig", "Selbstständig"],
  ["sonstiges", "Sonstiges"],
];

const GUTSCHEIN: [string, string][] = [
  ["Bildungsgutschein liegt vor", "Ja, liegt mir vor"],
  ["Bildungsgutschein ist beantragt oder zugesagt", "Beantragt oder zugesagt"],
  ["Noch kein Bildungsgutschein", "Noch nicht"],
  ["Weiß nicht, ob ein Bildungsgutschein in Frage kommt", "Weiß ich nicht"],
];

const feld =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[#3f74bc] focus:ring-2 focus:ring-[#3f74bc]/20";
const beschriftung = "mb-1 block text-xs font-medium text-slate-600";

// Anfrageformular für geförderte Weiterbildung. Die Anfrage geht direkt in das CRM der FDM Akademie.
export default function AnfrageFormular({
  kurs,
  kursTitel,
  quelle,
}: {
  kurs?: string;
  kursTitel?: string;
  quelle?: string;
}) {
  const geladen = useRef(0);
  const [stand, setStand] = useState<"offen" | "sendet" | "gesendet">("offen");
  const [fehler, setFehler] = useState<string | null>(null);

  useEffect(() => {
    geladen.current = Date.now();
  }, []);

  async function absenden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFehler(null);
    setStand("sendet");
    const f = new FormData(e.currentTarget);
    const text = (name: string) => String(f.get(name) ?? "");
    // Die Angabe zum Bildungsgutschein steht am Anfang der Nachricht, damit sie im CRM sofort zu sehen ist.
    const nachricht = [text("gutschein") && `${text("gutschein")}.`, text("nachricht").trim()].filter(Boolean).join("\n\n");
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
          plz: text("plz"),
          ort: text("ort"),
          beschaeftigungsstatus: text("beschaeftigungsstatus"),
          nachricht,
          firma_website: text("firma_website"),
          einwilligung: f.get("einwilligung") === "on",
          geladen: geladen.current,
          quelle: quelle ?? "fdm-group.de",
          kurs: kurs ?? "",
        }),
      });
      const daten = (await antwort.json().catch(() => ({}))) as { ok?: boolean; fehler?: string };
      if (!antwort.ok || !daten.ok) {
        setFehler(daten.fehler ?? "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.");
        setStand("offen");
        return;
      }
      setStand("gesendet");
      // Zählt nur, dass eine Anfrage gesendet wurde und von welcher Art Seite; keine Angaben aus dem Formular.
      track("Anfrage gesendet", { seite: kurs ? "Kurs" : "Allgemein" });
    } catch {
      setFehler("Ihre Anfrage konnte nicht gesendet werden. Bitte prüfen Sie Ihre Verbindung oder rufen Sie uns an.");
      setStand("offen");
    }
  }

  if (stand === "gesendet") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center" role="status">
        <CheckCircle className="mx-auto mb-3 h-10 w-10 text-green-600" aria-hidden="true" />
        <h3 className="text-xl font-bold text-slate-900">Vielen Dank für Ihre Anfrage</h3>
        <p className="mt-2 text-sm text-slate-600">
          Ihre Nachricht ist bei uns angekommen. Wir melden uns innerhalb von zwei Werktagen bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={absenden} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {kursTitel && (
        <p className="rounded-lg bg-blue-50 p-3 text-sm text-slate-700">
          Ihre Anfrage zum Kurs: <strong>{kursTitel}</strong>
        </p>
      )}
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
        <label>
          <span className={beschriftung}>Telefon (für Rückruf)</span>
          <input name="telefon" type="tel" className={feld} autoComplete="tel" maxLength={50} />
        </label>
        <div className="grid grid-cols-3 gap-3">
          <label>
            <span className={beschriftung}>PLZ</span>
            <input name="plz" className={feld} autoComplete="postal-code" maxLength={10} />
          </label>
          <label className="col-span-2">
            <span className={beschriftung}>Ort</span>
            <input name="ort" className={feld} autoComplete="address-level2" maxLength={100} />
          </label>
        </div>
        <label className="sm:col-span-2">
          <span className={beschriftung}>Ihre aktuelle Situation</span>
          <select name="beschaeftigungsstatus" className={feld} defaultValue="">
            <option value="">– bitte wählen –</option>
            {SITUATIONEN.map(([wert, name]) => (
              <option key={wert} value={wert}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label className="sm:col-span-2">
          <span className={beschriftung}>Haben Sie bereits einen Bildungsgutschein?</span>
          <select name="gutschein" className={feld} defaultValue="">
            <option value="">– bitte wählen –</option>
            {GUTSCHEIN.map(([wert, name]) => (
              <option key={wert} value={wert}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label className="sm:col-span-2">
          <span className={beschriftung}>Ihre Nachricht</span>
          <textarea
            name="nachricht"
            rows={4}
            maxLength={2900}
            className={feld}
            placeholder="Was möchten Sie lernen oder erreichen? Gibt es einen Wunschtermin?"
          />
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
          bearbeiten und mich dazu zu kontaktieren. Die Einwilligung kann ich jederzeit widerrufen. Näheres steht in
          der{" "}
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
  );
}
