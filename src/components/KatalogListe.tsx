"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search } from "lucide-react";
import { dauerText, kursPfad, naechsterStart, tagDe, type Weiterbildung } from "@/lib/katalog";
import Kennzeichen from "@/components/Kennzeichen";

// Durchsuchbare Liste der geförderten Weiterbildungen (Daten kommen serverseitig aus dem CRM).
export default function KatalogListe({ kurse }: { kurse: Weiterbildung[] }) {
  const [eingabe, setSuche] = useState<string | null>(null);
  const [gewaehlt, setBereich] = useState<string | null>(null);
  const [zeit, setZeit] = useState("Alle");

  // Einstieg über die Startseite: /weiterbildung?bereich=IT%20und%20EDV wählt den Fachbereich vor.
  const ausAdresse = useSyncExternalStore(
    () => () => {},
    () => new URLSearchParams(window.location.search).get("bereich") ?? "",
    () => "",
  );
  // /weiterbildung?q=Buchhaltung füllt die Suche vor.
  const sucheAusAdresse = useSyncExternalStore(
    () => () => {},
    () => new URLSearchParams(window.location.search).get("q") ?? "",
    () => "",
  );
  const suche = eingabe ?? sucheAusAdresse;
  const bereich =
    gewaehlt ?? (ausAdresse && kurse.some((k) => k.fachbereich_name === ausAdresse) ? ausAdresse : "Alle");

  const bereiche = useMemo(
    () => ["Alle", ...Array.from(new Set(kurse.map((k) => k.fachbereich_name))).sort((a, b) => a.localeCompare(b, "de"))],
    [kurse],
  );
  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return kurse.filter(
      (k) =>
        (bereich === "Alle" || k.fachbereich_name === bereich) &&
        (zeit === "Alle" || k.zeitmodell_name === zeit) &&
        (!q || `${k.titel} ${k.kurzbeschreibung ?? ""}`.toLowerCase().includes(q)),
    );
  }, [kurse, suche, bereich, zeit]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Kurse durchsuchen</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            value={suche}
            onChange={(e) => setSuche(e.target.value)}
            placeholder="Kurs oder Thema suchen, z. B. Buchhaltung, Python, Pflege"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-[#3f74bc] focus:ring-2 focus:ring-[#3f74bc]/20"
          />
        </label>
        <label>
          <span className="sr-only">Fachbereich</span>
          <select
            value={bereich}
            onChange={(e) => setBereich(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm md:w-64"
          >
            {bereiche.map((b) => (
              <option key={b} value={b}>
                {b === "Alle" ? "Alle Fachbereiche" : b}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="sr-only">Zeitmodell</span>
          <select
            value={zeit}
            onChange={(e) => setZeit(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm md:w-44"
          >
            <option value="Alle">Vollzeit und Teilzeit</option>
            <option>Vollzeit</option>
            <option>Teilzeit</option>
          </select>
        </label>
      </div>

      <p className="mb-4 text-sm text-slate-500" aria-live="polite">
        {gefiltert.length} {gefiltert.length === 1 ? "Weiterbildung" : "Weiterbildungen"}
      </p>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {gefiltert.slice(0, 120).map((k) => (
          <li key={k.modul_nr}>
            <Link
              href={kursPfad(k.modul_nr)}
              className="card-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5"
            >
              <span className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#3f74bc]">{k.fachbereich_name}</span>
                {k.zugelassen && <Kennzeichen art="azav" />}
              </span>
              <span className="font-semibold leading-snug text-slate-900">{k.titel}</span>
              {k.kurzbeschreibung && (
                <span className="mt-2 line-clamp-3 text-sm text-slate-600">{k.kurzbeschreibung}</span>
              )}
              {naechsterStart(k) && (
                <span className="mt-3 text-xs font-medium text-slate-700">
                  Nächster Start: {tagDe(naechsterStart(k)!)} (geplant)
                </span>
              )}
              <span className="mt-auto flex items-center justify-between gap-2 pt-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {[k.zeitmodell_name, dauerText(k)].filter(Boolean).join(" · ")}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#2c3892]">
                  Details <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {gefiltert.length > 120 && (
        <p className="mt-4 text-sm text-slate-500">
          Es werden die ersten 120 Treffer gezeigt. Bitte grenzen Sie die Suche ein.
        </p>
      )}
      {gefiltert.length === 0 && (
        <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-600">
          Zu dieser Auswahl gibt es gerade keinen Kurs. Schreiben Sie uns, wir beraten Sie gern.
        </p>
      )}
    </div>
  );
}
