"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Kennzeichen from "@/components/Kennzeichen";
import { CRM_URL } from "@/lib/katalog";

export default function KontaktPage() {
  const geladen = useRef(0);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    geladen.current = Date.now();
  }, []);

  // Die Nachricht geht wie das Beratungsformular direkt in das CRM der FDM Akademie.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSending(true);
    const f = new FormData(e.currentTarget);
    const text = (name: string) => String(f.get(name) ?? "").trim();
    try {
      const res = await fetch(`${CRM_URL}/api/anfrage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vorname: text("vorname"),
          nachname: text("nachname"),
          email: text("email"),
          telefon: text("telefon"),
          nachricht: `Betreff: ${text("betreff")}\n\n${text("nachricht")}`,
          firma_website: text("firma_website"),
          einwilligung: f.get("einwilligung") === "on",
          geladen: geladen.current,
          quelle: "fdm-group.de/kontakt",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; fehler?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.fehler ?? "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.");
      }
      setSent(true);
    } catch (err) {
      setError(
        err instanceof TypeError
          ? "Ihre Nachricht konnte nicht gesendet werden. Bitte prüfen Sie Ihre Verbindung oder rufen Sie uns an."
          : err instanceof Error
            ? err.message
            : "Ihre Nachricht konnte nicht gesendet werden.",
      );
    } finally {
      setSending(false);
    }
  };

  const subjects = [
    "Allgemeine Anfrage",
    "Online-Kurse alvatar.de",
    "Förderung für Unternehmen (QCG)",
    "Kooperationsanfrage",
    "Sonstiges",
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="py-16 text-white"
        style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-5 border border-white/20"
            style={{ background: "rgba(255,255,255,0.1)", color: "#bae6fd" }}
          >
            <Phone size={14} aria-hidden="true" />
            Mo – Fr, 09:00 – 17:00 Uhr
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-lg max-w-xl" style={{ color: "#cbd5e1" }}>
            Wir freuen uns auf Ihre Nachricht. Schreiben Sie uns oder rufen Sie direkt an.
          </p>
        </div>
      </section>

      {/* Wegweiser: das richtige Formular für das richtige Anliegen */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5">
            <Link
              href="/weiterbildung#beratung"
              className="card-hover flex flex-col rounded-2xl p-6 text-white"
              style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-200">FDM Akademie</span>
              <span className="mt-1 text-xl font-bold">Beratung zur geförderten Weiterbildung</span>
              <span className="mt-2 text-sm text-slate-200">
                Sie interessieren sich für eine Weiterbildung und möchten wissen, welche Förderung in
                Frage kommt? Dann nutzen Sie bitte unser Beratungsformular.
              </span>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold">
                Beratung anfragen <ArrowRight size={15} aria-hidden="true" />
              </span>
            </Link>
            <Link href="/kurse" className="card-hover flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
              <span className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">alvatar.de</span>
                <Kennzeichen art="selbstzahler" />
              </span>
              <span className="mt-1 text-xl font-bold" style={{ color: "#1e293b" }}>
                Online-Kurse für Selbstzahler
              </span>
              <span className="mt-2 text-sm text-slate-600">
                Kurze Selbstlernkurse zu KI und digitalen Kompetenzen buchen Sie direkt online.
              </span>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-[#3f74bc]">
                Online-Kurse ansehen <ArrowRight size={15} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h2 className="font-bold text-lg mb-5" style={{ color: "#1e293b" }}>
                  Direktkontakt
                </h2>
                <address className="not-italic space-y-4">
                  <a
                    href="tel:+4971616275120"
                    className="flex items-center gap-3 text-slate-700 hover:text-[#3f74bc] transition-colors group"
                    aria-label="Telefon: 07161 – 6275120"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#eff6ff" }}
                      aria-hidden="true"
                    >
                      <Phone size={16} style={{ color: "#3f74bc" }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Telefon</p>
                      <p className="font-semibold text-sm">07161 – 6275120</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@fdm-group.de"
                    className="flex items-center gap-3 text-slate-700 hover:text-[#3f74bc] transition-colors"
                    aria-label="E-Mail: info@fdm-group.de"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#eff6ff" }}
                      aria-hidden="true"
                    >
                      <Mail size={16} style={{ color: "#3f74bc" }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">E-Mail</p>
                      <p className="font-semibold text-sm">info@fdm-group.de</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-slate-700">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#eff6ff" }}
                      aria-hidden="true"
                    >
                      <MapPin size={16} style={{ color: "#3f74bc" }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Adresse</p>
                      <p className="font-semibold text-sm">
                        Schillerstraße 21
                        <br />
                        73054 Eislingen/Fils
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-slate-700">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#eff6ff" }}
                      aria-hidden="true"
                    >
                      <Clock size={16} style={{ color: "#3f74bc" }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Erreichbarkeit</p>
                      <p className="font-semibold text-sm">
                        Mo – Fr: 09:00 – 17:00 Uhr
                      </p>
                    </div>
                  </div>
                </address>
              </div>

              {/* AZAV Hint */}
              <div
                className="rounded-2xl p-5 border border-blue-200"
                style={{ background: "#eff6ff" }}
              >
                <h3 className="font-bold text-sm mb-2" style={{ color: "#1e40af" }}>
                  Fragen zur Förderung?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Wie der Weg zum{" "}
                  <Link href="/azav" className="underline hover:text-[#3f74bc]">
                    Bildungsgutschein
                  </Link>{" "}
                  aussieht und was das{" "}
                  <Link href="/qcg" className="underline hover:text-[#3f74bc]">
                    Qualifizierungschancengesetz
                  </Link>{" "}
                  für Beschäftigte bietet, haben wir für Sie zusammengefasst.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                {/* aria-live region announces form success to screen readers */}
                <div aria-live="polite" aria-atomic="true">
                  {sent ? (
                    <div className="text-center py-12" role="status">
                      <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#3f74bc" }} aria-hidden="true" />
                      <h2 className="text-xl font-bold mb-2" style={{ color: "#1e293b" }}>
                        Vielen Dank für Ihre Anfrage!
                      </h2>
                      <p className="text-slate-600 text-sm">
                        Ihre Nachricht ist bei uns angekommen. Wir melden uns innerhalb von zwei Werktagen bei Ihnen.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h2 className="font-bold text-xl mb-6" style={{ color: "#1e293b" }}>
                        Nachricht senden
                      </h2>

                      {/* Spamschutz: für Menschen unsichtbar, darf nicht ausgefüllt werden */}
                      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                        <label>
                          Bitte dieses Feld leer lassen
                          <input name="firma_website" tabIndex={-1} autoComplete="off" />
                        </label>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="vorname" className="block text-sm font-medium mb-1.5 text-slate-700">
                            Vorname <span className="text-slate-400 font-normal">(optional)</span>
                          </label>
                          <input type="text" id="vorname" name="vorname" autoComplete="given-name" maxLength={100} className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3f74bc]/30 focus:border-[#3f74bc]" />
                        </div>
                        <div>
                          <label htmlFor="nachname" className="block text-sm font-medium mb-1.5 text-slate-700">
                            Nachname <span aria-hidden="true">*</span>
                            <span className="sr-only">(Pflichtfeld)</span>
                          </label>
                          <input type="text" id="nachname" name="nachname" required autoComplete="family-name" maxLength={100} className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3f74bc]/30 focus:border-[#3f74bc]" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-slate-700">
                            E-Mail <span aria-hidden="true">*</span>
                            <span className="sr-only">(Pflichtfeld)</span>
                          </label>
                          <input type="email" id="email" name="email" required autoComplete="email" maxLength={200} placeholder="ihre@email.de" className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3f74bc]/30 focus:border-[#3f74bc]" />
                        </div>
                        <div>
                          <label htmlFor="telefon" className="block text-sm font-medium mb-1.5 text-slate-700">
                            Telefon <span className="text-slate-400 font-normal">(optional)</span>
                          </label>
                          <input type="tel" id="telefon" name="telefon" autoComplete="tel" maxLength={50} className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3f74bc]/30 focus:border-[#3f74bc]" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="betreff" className="block text-sm font-medium mb-1.5 text-slate-700">
                          Betreff
                        </label>
                        <select id="betreff" name="betreff" defaultValue={subjects[0]} className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3f74bc]/30 focus:border-[#3f74bc] bg-white">
                          {subjects.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="nachricht" className="block text-sm font-medium mb-1.5 text-slate-700">
                          Ihre Nachricht <span aria-hidden="true">*</span>
                          <span className="sr-only">(Pflichtfeld)</span>
                        </label>
                        <textarea
                          id="nachricht"
                          name="nachricht"
                          required
                          rows={5}
                          maxLength={2900}
                          placeholder="Wie können wir Ihnen helfen?"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3f74bc]/30 focus:border-[#3f74bc] resize-none"
                        />
                      </div>

                      <label className="flex items-start gap-2 text-sm text-slate-700">
                        <input type="checkbox" name="einwilligung" required className="mt-0.5 h-4 w-4 accent-[#2c3892]" />
                        <span>
                          Ich bin damit einverstanden, dass die FDM GmbH meine Angaben speichert und verwendet, um meine
                          Anfrage zu bearbeiten und mich dazu zu kontaktieren. Die Einwilligung kann ich jederzeit
                          widerrufen. Näheres steht in der{" "}
                          <Link href="/datenschutz" className="underline hover:text-[#3f74bc]">
                            Datenschutzerklärung
                          </Link>
                          . *
                        </span>
                      </label>

                      {error && (
                        <p role="alert" className="text-sm font-medium text-red-600">
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={sending}
                        className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ background: "#3f74bc" }}
                      >
                        <Send size={16} aria-hidden="true" />
                        {sending ? "Wird gesendet …" : "Nachricht senden"}
                      </button>
                      <p className="text-xs text-slate-500">* Pflichtangaben</p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
