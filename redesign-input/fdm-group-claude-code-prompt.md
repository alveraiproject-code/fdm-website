# Claude Code Master-Prompt: fdm-group.de Redesign 2030

> Einfügen in Claude Code im Projekt-Root. Vorab `git checkout -b redesign-2030` ausführen.

---

## ROLLE & ZIEL

Du bist Lead Frontend Architect + Technical SEO/GEO Engineer. Refactore die bestehende Next.js-Site `fdm-group.de` zur technisch und gestalterisch führenden Bildungsträger-Website im DACH-Raum, Designstand 2030. Ziel: maximale Conversion (vollständiger AIDA-Funnel), Top-Rankings in klassischen Suchmaschinen UND maximale Zitierbarkeit/Sichtbarkeit in LLM-Antworten (ChatGPT, Claude, Gemini, Perplexity, Google AI Overviews).

Arbeite autonom in Phasen. Nach jeder Phase: kurzer Statusreport + Diff-Zusammenfassung, dann weiter. Keine Rückfragen bei eindeutigen Entscheidungen — triff sie begründet und dokumentiere sie.

---

## PHASE 0 — AUDIT (zuerst, kein Code)

1. Stack-Inventur: Next.js-Version, App/Pages-Router, Styling (Tailwind?), Komponenten-Struktur, vorhandene Routes (`/`, `/kurse`, `/azav`, `/qcg`, `/ueber-uns`, `/leitbild`, `/kontakt`, `/impressum`, `/datenschutz`).
2. Lighthouse-Baseline (Performance, A11y, Best Practices, SEO) für `/` und `/kurse` dokumentieren — als Vorher-Wert.
3. Identifiziere: Bilder ohne next/image-Optimierung, fehlende Strukturierte Daten, fehlende Canonicals/Sitemaps, CLS-Quellen, fehlende Alt-Texte, Render-Blocking.
4. Output: `AUDIT.md` mit Befunden + Priorisierung.

---

## PHASE 1 — DESIGN-SYSTEM (Stand 2030)

Designsprache: präzise, vertrauenswürdig, „institutionell-modern" — kein generischer KI-Look, kein Template-Gefühl. Referenzqualität: Linear, Vercel, Stripe, Apple.

- **Design-Tokens** in einer zentralen Config (Tailwind v4 `@theme` oder CSS-Variablen): Farbsystem mit OKLCH, semantische Tokens (`--color-trust`, `--color-action`, `--color-surface`), fluide Typo-Scale (`clamp()`), 8pt-Spacing-Grid.
- **Typografie:** Variable Font, optische Größen. Display-Schrift für Headlines mit Charakter (z. B. eine geometrische Grotesk), lesbare Body-Schrift. `font-display: swap`, self-hosted (kein Google-Fonts-Request → DSGVO + Performance).
- **Dark Mode** vollständig via `prefers-color-scheme` + manueller Toggle, persistiert.
- **Motion:** Microinteractions mit Framer Motion / View Transitions API. Scroll-getriggerte Reveals (IntersectionObserver), respektiere `prefers-reduced-motion` strikt.
- **Komponenten-Bibliothek:** wiederverwendbare, getypte Komponenten (Button, Card, Badge, Section, Accordion, Stat, Testimonial, Stepper). Keine Inline-Magic-Numbers.
- Subtile Tiefe: Glassmorphism dezent, Noise/Grain-Texture optional, kein übertriebener Gradient-Spam.

Liefere Tokens + Basiskomponenten zuerst, dann Seiten.

---

## PHASE 2 — AIDA-FUNNEL (vollständig, pro Seite)

Setze AIDA als durchgängige Informationsarchitektur um — nicht nur auf der Startseite:

**A — Attention (Hero):**
- Klare, nutzenfokussierte H1 (keine Floskeln). Ein primärer CTA, optisch dominant. Trust-Signale „above the fold" (AZAV-Badge, Zertifikatsnummer, Förderlogik in einem Satz).
- Hero mit gewichtetem Kontrast, kein Stockfoto-Klischee. Animierter, aber performanter Eyecatcher.

**I — Interest:**
- Problem→Lösung-Block: „Wofür Bildungsgutschein/QCG?" greifbar erklärt.
- Differenzierung („Warum FDM") als scanbare Value-Props mit Icons, je 1 messbarer Beleg.
- Förderwege als interaktiver Pfad: 2-Klick-Selbsttest „Bin ich förderberechtigt?" (Arbeitssuchend → AZAV / Beschäftigt → QCG).

**D — Desire:**
- Social Proof: Testimonials, Erfolgsquoten, ggf. Logos. Falls echte Daten fehlen → Platzhalter-Komponente mit klarem `TODO: echte Zahlen`, niemals erfundene Zahlen rendern.
- Kurs-Showcase mit Filter (Niveau, Thema, Preis), Hover-Detail.
- FAQ-Sektion (zahlt direkt auf SEO/GEO ein, s. u.).
- Konkrete Resultate: „Was kann ich nach dem Kurs?" mit Skill-Outcomes.

**A — Action:**
- Mehrere kontextuelle CTAs entlang der Seite, nicht nur am Ende. Sticky-CTA mobil.
- Reibungsarmes Kontaktformular (Multi-Step, Progress, Inline-Validation, Honeypot statt Captcha). Telefon click-to-call, Beratungs-Slot-CTA.
- Conversion-Tracking-Hooks vorbereiten (datenschutzkonform, consent-gated).

**CTA-Strategie konfigurierbar:** Lege `config/cta.ts` an mit primärem Conversion-Ziel als Variable (`PRIMARY_GOAL = 'beratung' | 'azav' | 'alvatar'`). Default: `'beratung'`. ALVATAR und AZAV-Lehrgang als sekundäre Trust-/Cross-Sell-Elemente behandeln, nicht als Haupt-CTA.

---

## PHASE 3 — TECHNICAL SEO

- **Metadaten:** Next.js Metadata API pro Route, eindeutige Title/Description, OG + Twitter Cards mit dynamisch generierten OG-Bildern (`opengraph-image.tsx`, Satori/ImageResponse).
- **Canonicals** korrekt pro Seite. `robots.txt` (LLM-Crawler explizit erlauben: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot — Entscheidung dokumentieren, da bewusst pro Sichtbarkeit).
- **Sitemap** dynamisch generiert (`sitemap.ts`), inkl. lastmod.
- **Semantisches HTML:** korrekte Heading-Hierarchie (genau eine H1/Seite), `<nav>`, `<main>`, `<article>`, `<section>` mit `aria-label`.
- **Core Web Vitals:** LCP < 1.8s, INP < 200ms, CLS < 0.05. Bilder als AVIF/WebP via next/image mit `priority` für LCP-Element, explizite `width/height`. Fonts preloaded. Kein Layout-Shift.
- **i18n-ready:** `lang="de"`, hreflang vorbereitet (falls EN später).
- **Lokales SEO:** NAP-Konsistenz (Schillerstraße 21, 73054 Eislingen, 07161-6275120), LocalBusiness-Schema.
- **Performance:** RSC wo möglich, minimales Client-JS, Route-based Code-Splitting, `next/dynamic` für schwere Komponenten.

---

## PHASE 4 — GEO / AEO (LLM-Optimierung) — Differenzierungs-Schwerpunkt

Optimiere für Zitierbarkeit in KI-Antworten:

- **Strukturierte Daten (JSON-LD)** umfassend: `Organization`, `EducationalOrganization`, `LocalBusiness`, `Course` (pro Kurs, mit `provider`, `educationalCredentialAwarded`, `offers`), `FAQPage`, `BreadcrumbList`, `WebSite` mit `SearchAction`. Validierbar gegen schema.org.
- **Antwort-optimierte Inhalte:** Jede Kernfrage (Förderfähigkeit, AZAV, QCG, Kosten, Ablauf) als klar formulierte Frage→prägnante Antwort. Erste 1–2 Sätze müssen die Frage eigenständig beantworten (extractable answers).
- **Entitäten-Klarheit:** „FDM GmbH" konsistent als Entität definieren — wer, wo, was, Zertifizierung, in maschinenlesbaren Fakten-Blöcken. Verknüpfung zu autoritativen Quellen (AZAV, DAkkS, SGB III §81) per Outbound-Links.
- **`/llms.txt`** im Root anlegen (Markdown-Übersicht der Site-Struktur + Kernfakten für LLM-Crawler, analog robots.txt für LLMs).
- **Definitorische Klarheit:** Fachbegriffe (Bildungsgutschein, QCG, AZAV) inline kurz definieren → LLMs zitieren erklärende Passagen bevorzugt.
- Faktendichte > Marketingsprache in Info-Sektionen; klare, scanbare Struktur (Listen, Tabellen für Vergleichbares wie AZAV vs. QCG).

---

## PHASE 5 — ACCESSIBILITY & QUALITÄT

- WCAG 2.2 AA: Kontraste, Fokus-States sichtbar, Tastatur-Navigation vollständig, ARIA korrekt, `prefers-reduced-motion`, Skip-Link.
- Formular-Labels, Fehler-Announcements (`aria-live`).
- TypeScript strict, keine `any`. ESLint + Prettier clean.
- Responsive: 320px bis 4K getestet, fluide nicht nur breakpoint-basiert.

---

## PHASE 6 — VERIFIKATION

1. Lighthouse erneut: Ziel ≥ 98 in allen vier Kategorien für `/` und `/kurse`. Vorher/Nachher-Tabelle.
2. Schema-Validierung (alle JSON-LD parsebar, keine Errors).
3. `next build` ohne Errors/Warnings, Bundle-Size-Report.
4. Manuelle a11y-Checkliste abhaken.
5. Abschlussreport `REDESIGN-REPORT.md`: Was geändert, Metriken vorher/nachher, offene `TODO`s (echte Testimonials/Zahlen, Bildmaterial).

---

## REGELN

- Niemals Fakten oder Zahlen erfinden (Erfolgsquoten, Teilnehmerzahlen, Reviews) → Platzhalter + TODO.
- Bestehende Rechtsangaben (Zertifikat-Nr., Adresse, Maßnahme-ID) exakt übernehmen, nicht verändern.
- DSGVO-konform: keine externen Tracker/Fonts ohne Consent.
- Commit pro Phase mit aussagekräftiger Message. Keine Secrets committen.
- Bei Architektur-Entscheidungen: kurz begründen, dann umsetzen.

Starte mit Phase 0.
