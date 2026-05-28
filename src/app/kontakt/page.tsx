"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Allgemeine Anfrage",
    message: "",
  });

  const subjects = [
    "Allgemeine Anfrage",
    "AZAV-Weiterbildung & Bildungsgutschein",
    "Online-Kurse alvatar.de",
    "Kooperationsanfrage",
    "Sonstiges",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="py-16 text-white"
        style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#cbd5e1" }}>
            Wir freuen uns auf Ihre Anfrage. Schreiben Sie uns oder rufen Sie
            direkt an – wir antworten schnell.
          </p>
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
                <div className="space-y-4">
                  <a
                    href="tel:+4971616275126"
                    className="flex items-center gap-3 text-slate-700 hover:text-[#3f74bc] transition-colors group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#eff6ff" }}
                    >
                      <Phone size={16} style={{ color: "#3f74bc" }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Telefon</p>
                      <p className="font-semibold text-sm">07161 – 6275126</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@fdm-group.de"
                    className="flex items-center gap-3 text-slate-700 hover:text-[#3f74bc] transition-colors"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#eff6ff" }}
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
                </div>
              </div>

              {/* AZAV Hint */}
              <div
                className="rounded-2xl p-5 border border-blue-200"
                style={{ background: "#eff6ff" }}
              >
                <h3 className="font-bold text-sm mb-2" style={{ color: "#1e40af" }}>
                  Interesse an geförderter Weiterbildung?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Wählen Sie als Betreff „AZAV-Weiterbildung &
                  Bildungsgutschein" – wir klären kostenlos, ob Sie Anspruch
                  auf Förderung haben.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                {sent ? (
                  <div className="text-center py-12">
                    <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#3f74bc" }} />
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#1e293b" }}>
                      Vielen Dank für Ihre Anfrage!
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Wir melden uns in Kürze bei Ihnen zurück.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-bold text-xl mb-6" style={{ color: "#1e293b" }}>
                      Nachricht senden
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-slate-700">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Ihr vollständiger Name"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-[#3f74bc]"
                          style={{ ["--tw-ring-color" as string]: "#3f74bc" }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-slate-700">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="ihre@email.de"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-slate-700">
                          Telefon (optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Ihre Telefonnummer"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-slate-700">
                          Betreff
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 bg-white"
                        >
                          {subjects.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-slate-700">
                        Ihre Nachricht *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Wie können wir Ihnen helfen?"
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 resize-none"
                      />
                    </div>

                    <p className="text-xs text-slate-500">
                      Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten
                      gemäß unserer{" "}
                      <a
                        href="/datenschutz"
                        className="underline hover:text-[#3f74bc]"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      zu.
                    </p>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                      style={{ background: "#3f74bc" }}
                    >
                      <Send size={16} />
                      Nachricht senden
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
