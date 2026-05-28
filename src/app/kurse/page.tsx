"use client";

import { useState } from "react";
import { ArrowRight, Search, Filter } from "lucide-react";
import { courses, categories, type Level } from "@/lib/courses";

const levelColors: Record<Level, { bg: string; text: string }> = {
  Einsteiger: { bg: "#f0fdf4", text: "#15803d" },
  Fortgeschritten: { bg: "#fffbeb", text: "#b45309" },
  Profi: { bg: "#faf5ff", text: "#7e22ce" },
};

export default function KursePage() {
  const [activeCategory, setActiveCategory] = useState<string>("Alle");
  const [activeLevel, setActiveLevel] = useState<string>("Alle");
  const [search, setSearch] = useState("");

  const filtered = courses.filter((c) => {
    const matchCat = activeCategory === "Alle" || c.category === activeCategory;
    const matchLevel = activeLevel === "Alle" || c.level === activeLevel;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchLevel && matchSearch;
  });

  const levels: string[] = ["Alle", "Einsteiger", "Fortgeschritten", "Profi"];

  return (
    <>
      {/* Hero */}
      <section
        className="py-16 text-white"
        style={{ background: "linear-gradient(135deg, #1e293b, #2c3892, #3f74bc)" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-white/20"
            style={{ background: "rgba(255,255,255,0.1)", color: "#bae6fd" }}
          >
            alvatar.de – Online-Akademie
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Alle Kurse & Weiterbildungen
          </h1>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#cbd5e1" }}>
            Über 100 Online-Kurse zu KI, Automatisierung und digitalen
            Kompetenzen – plus AZAV-zertifizierte geförderte Weiterbildung.
          </p>
        </div>
      </section>

      {/* AZAV Kurs Highlight */}
      <section className="py-10 bg-blue-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl border border-blue-200 p-6 shadow-sm">
            <div
              className="p-4 rounded-xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
            >
              <span className="text-white font-bold text-lg">AZAV</span>
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#3f74bc" }}>
                Geförderte Weiterbildung – kostenlos mit Bildungsgutschein
              </div>
              <h2 className="text-xl font-bold mb-1" style={{ color: "#1e293b" }}>
                Online Marketing Experte (m/w/d)
              </h2>
              <p className="text-sm text-slate-600">
                1.920 Unterrichtsstunden · 48 Wochen · 100 % online · Laufender Einstieg
              </p>
            </div>
            <a
              href="/azav"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ background: "#3f74bc" }}
            >
              Mehr erfahren <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Kurse suchen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ ["--tw-ring-color" as string]: "#3f74bc" }}
              />
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={14} className="text-slate-400 flex-shrink-0" />
              {["Alle", ...categories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg transition-colors"
                  style={
                    activeCategory === cat
                      ? { background: "#3f74bc", color: "white" }
                      : { background: "#f1f5f9", color: "#475569" }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Level filter */}
            <div className="flex items-center gap-2">
              {levels.map((lv) => (
                <button
                  key={lv}
                  onClick={() => setActiveLevel(lv)}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors"
                  style={
                    activeLevel === lv
                      ? { borderColor: "#3f74bc", color: "#3f74bc", background: "#eff6ff" }
                      : { borderColor: "#e2e8f0", color: "#64748b", background: "white" }
                  }
                >
                  {lv}
                </button>
              ))}
              <span className="ml-auto text-xs text-slate-400">
                {filtered.length} Kurse
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <Search size={40} className="mx-auto mb-3 opacity-30" />
              <p>Keine Kurse gefunden. Bitte Filter anpassen.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((course) => {
                const lc = levelColors[course.level];
                return (
                  <a
                    key={course.title}
                    href="https://alvatar.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-2xl border border-slate-200 p-5 card-hover group flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: lc.bg, color: lc.text }}
                      >
                        {course.level}
                      </span>
                      <span className="font-bold text-sm" style={{ color: "#3f74bc" }}>
                        {course.price}
                      </span>
                    </div>
                    <h3
                      className="font-semibold text-sm mb-2 leading-snug flex-1 group-hover:text-[#3f74bc] transition-colors"
                      style={{ color: "#1e293b" }}
                    >
                      {course.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-slate-400">{course.modules}</p>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded"
                        style={{ background: "#f1f5f9", color: "#64748b" }}
                      >
                        {course.category}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 text-white text-center"
        style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Alle Kurse direkt auf alvatar.de buchen
          </h2>
          <p className="mb-6" style={{ color: "#cbd5e1" }}>
            Starten Sie sofort – alle Kurse sind online verfügbar und
            selbstständig buchbar.
          </p>
          <a
            href="https://alvatar.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white font-semibold rounded-xl hover:bg-slate-100 transition-colors"
            style={{ color: "#2c3892" }}
          >
            Zu alvatar.de <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
