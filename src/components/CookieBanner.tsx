"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie, ChevronDown, ChevronUp, Shield, BarChart2, Settings } from "lucide-react";

type Consent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const DEFAULT_CONSENT: Consent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<Consent>(DEFAULT_CONSENT);

  useEffect(() => {
    const stored = localStorage.getItem("fdm_cookie_consent");
    if (!stored) {
      // Small delay so page renders first
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (c: Consent) => {
    localStorage.setItem("fdm_cookie_consent", JSON.stringify({ ...c, savedAt: Date.now() }));
    setVisible(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const acceptNecessary = () => save({ necessary: true, analytics: false, marketing: false });
  const saveCustom = () => save(consent);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-end justify-center p-0 sm:p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(2px)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen"
    >
      <div
        className="w-full sm:max-w-2xl bg-white sm:rounded-2xl shadow-2xl overflow-hidden"
        style={{ maxHeight: "92vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-start justify-between gap-3"
          style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
        >
          <div className="flex items-center gap-2.5 text-white">
            <Cookie size={22} className="flex-shrink-0" />
            <div>
              <h2 className="font-bold text-base leading-tight">Datenschutz & Cookies</h2>
              <p className="text-xs mt-0.5" style={{ color: "#bae6fd" }}>
                Gemäß DSGVO / EU-Verordnung 2016/679
              </p>
            </div>
          </div>
          <button
            onClick={acceptNecessary}
            className="text-white/70 hover:text-white transition-colors flex-shrink-0 mt-0.5"
            aria-label="Schließen"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Wir verwenden Cookies und ähnliche Technologien auf unserer Website.
            Einige davon sind technisch notwendig, andere helfen uns, diese
            Website und Ihre Erfahrung zu verbessern. Sie können Ihre Auswahl
            jederzeit in unserer{" "}
            <Link
              href="/datenschutz"
              className="underline font-medium hover:text-[#3f74bc]"
              style={{ color: "#3f74bc" }}
            >
              Datenschutzerklärung
            </Link>{" "}
            anpassen.
          </p>

          {/* Cookie categories summary */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              {
                icon: Shield,
                label: "Notwendig",
                desc: "Immer aktiv",
                color: "#15803d",
                bg: "#f0fdf4",
                active: true,
                locked: true,
              },
              {
                icon: BarChart2,
                label: "Analyse",
                desc: "Optional",
                color: "#b45309",
                bg: "#fffbeb",
                active: consent.analytics,
                locked: false,
                key: "analytics" as keyof Consent,
              },
              {
                icon: Settings,
                label: "Marketing",
                desc: "Optional",
                color: "#7e22ce",
                bg: "#faf5ff",
                active: consent.marketing,
                locked: false,
                key: "marketing" as keyof Consent,
              },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.label}
                  disabled={cat.locked}
                  onClick={() =>
                    !cat.locked &&
                    cat.key &&
                    setConsent((prev) => ({ ...prev, [cat.key!]: !prev[cat.key!] }))
                  }
                  className="rounded-xl p-3 border-2 text-left transition-all"
                  style={{
                    background: cat.bg,
                    borderColor: cat.active ? cat.color : "#e2e8f0",
                    cursor: cat.locked ? "default" : "pointer",
                    opacity: cat.locked ? 1 : 1,
                  }}
                >
                  <Icon size={16} style={{ color: cat.color }} className="mb-1.5" />
                  <div className="text-xs font-bold" style={{ color: "#1e293b" }}>{cat.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: cat.color }}>
                    {cat.locked ? cat.desc : cat.active ? "✓ Aktiv" : "✗ Inaktiv"}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details toggle */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1.5 text-xs font-medium mb-4 hover:underline"
            style={{ color: "#3f74bc" }}
          >
            {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {showDetails ? "Details ausblenden" : "Details anzeigen"}
          </button>

          {showDetails && (
            <div className="space-y-3 mb-4 text-xs text-slate-600">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center gap-2 font-bold mb-1" style={{ color: "#15803d" }}>
                  <Shield size={13} /> Technisch notwendige Cookies
                </div>
                <p className="leading-relaxed">
                  Diese Cookies sind für den Betrieb der Website erforderlich und können nicht
                  deaktiviert werden. Sie speichern keine personenbezogenen Daten und werden
                  nicht für Werbezwecke genutzt (z.B. Session-Cookies, Spracheinstellungen).
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center gap-2 font-bold mb-1" style={{ color: "#b45309" }}>
                  <BarChart2 size={13} /> Analyse-Cookies
                </div>
                <p className="leading-relaxed">
                  Helfen uns zu verstehen, wie Besucher mit der Website interagieren. Alle
                  Daten werden anonymisiert erfasst. Derzeit setzen wir keine Analyse-Tools ein.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center gap-2 font-bold mb-1" style={{ color: "#7e22ce" }}>
                  <Settings size={13} /> Marketing-Cookies
                </div>
                <p className="leading-relaxed">
                  Werden verwendet, um Besucher auf Websites zu verfolgen und relevante Werbung
                  anzuzeigen. Derzeit setzen wir keine Marketing-Cookies ein.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div
          className="px-6 py-4 flex flex-col sm:flex-row gap-2.5 border-t border-slate-100"
          style={{ background: "#f8fafc" }}
        >
          <button
            onClick={acceptNecessary}
            className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Nur notwendige
          </button>
          {showDetails && (
            <button
              onClick={saveCustom}
              className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl border transition-colors"
              style={{ borderColor: "#3f74bc", color: "#3f74bc", background: "#eff6ff" }}
            >
              Auswahl speichern
            </button>
          )}
          <button
            onClick={acceptAll}
            className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl text-white transition-colors hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
