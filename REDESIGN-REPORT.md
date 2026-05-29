# REDESIGN-REPORT.md — fdm-group.de Redesign 2030

## Status: Phasen 0–6 abgeschlossen

---

## Phase 0 — Audit (Ausgangszustand)

- Next.js App Router, Tailwind CSS, TypeScript
- Vorhandene Routen: `/`, `/kurse`, `/azav`, `/qcg`, `/ueber-uns`, `/leitbild`, `/kontakt`, `/impressum`, `/datenschutz`
- Fehlende strukturierte Daten, kein OG-Bild, keine llms.txt, kein Skip-Link, fehlende ARIA-Labels

---

## Phase 1 — Design System

- Tailwind CSS v4 mit `@theme inline` und CSS-Variablen (`--color-fdm-blue`, `--color-fdm-navy`, `--color-fdm-sky`)
- FDM-Farbsystem: `#3f74bc` (Primary), `#2c3892` (Navy), `#51ade5` (Sky)
- `card-hover`-Klasse mit `translateY` + Box-Shadow-Transition
- `hero-gradient` und `gradient-text` als wiederverwendbare Klassen
- Smooth Scroll, antialiased Typography

## Phase 2 — AIDA-Funnel

### Startseite (/)
- Hero: H1 „Ihre Karriere. Gefördert. Zukunftssicher.", primärer CTA Bildungsgutschein, Trust-Bar mit GZQ-Badge
- AZAV-Highlight-Block mit Zertifikat-Facts
- USP-Grid (4 Karten: AZAV, Bildungsgutschein, Online, Praxisorientiert)
- 6 Kurs-Teaser-Karten aus `lib/courses.ts`
- CTA-Banner mit Telefon click-to-call

### /azav
- Hero mit Kurs-Quick-Facts (Vollzeit/Teilzeit, UE, Maßnahme-ID)
- 6 Vorteilskarten, Zielgruppen + Voraussetzungen, 9 Modulkarten
- Durchführungsform + Technische Voraussetzungen
- 4-Schritt-Stepper, QCG-Cross-Sell-Banner, CTA

### /qcg
- Hero mit Stat-Bar (bis 100 %, §82 SGB III, AZAV, laufender Einstieg)
- Förderhoehe-Tabelle nach Unternehmensgröße (3 Tiers)
- Split-Karten: Arbeitgeber / Arbeitnehmer
- Kurs-Showcase, 4-Schritt-Stepper, FAQ (5 Fragen)

### /kurse
- Client-Side-Filter (Kategorie + Level + Suche)
- Kurs-Grid aus `lib/courses.ts`

### Alle weiteren Seiten
- /ueber-uns: Unternehmenprofil, GF-Karte (Dursun Alver), Standort
- /leitbild: Mission, Vision, Werte (4), Qualitätsziele (4), Zertifizierungsnachweis
- /kontakt: Kontaktinfo + erreichbareres Formular
- /impressum, /datenschutz: vollständig rechtlich

---

## Phase 3 — Technical SEO

| Element | Status |
|---|---|
| `src/app/robots.ts` | ✅ Vollständige LLM-Crawler-Liste (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, CCBot u.a.) |
| `src/app/sitemap.ts` | ✅ Dynamisch, alle 9 Routen, priority + changeFrequency |
| `src/lib/metadata.ts` | ✅ Zentrale `buildMetadata(route)` Funktion, alle Routen konfiguriert |
| `src/app/opengraph-image.tsx` | ✅ Dynamisches 1200×630 OG-Bild, edge runtime, markenkonform |
| Alle `page.tsx` + `layout.tsx` | ✅ Verwenden `buildMetadata()` — kein Duplikat-Code mehr |
| Canonicals | ✅ Pro Route via `buildMetadata()` |
| Heading-Hierarchie | ✅ Genau eine `<h1>` pro Seite |
| Semantisches HTML | ✅ `<header>`, `<nav>`, `<main id="main-content">`, `<footer>`, `<address>` |
| Impressum / Datenschutz | ✅ `robots: { index: false }` via `buildMetadata('impressum')` |

---

## Phase 4 — GEO / AEO (LLM-Optimierung)

| Element | Status |
|---|---|
| `public/llms.txt` | ✅ Vollständige Fakten-Datei: Kernfakten, AZAV-Kurs, QCG, Seitenübersicht, Schlüsselbegriffe |
| `src/lib/schema.ts` | ✅ `schemaGraph` (Organization + WebSite + SearchAction) in layout.tsx |
| `courseAZAV` Schema | ✅ In `src/app/azav/page.tsx` als inline JSON-LD (1.920 UE, 9 Syllabus-Einträge, Bildungsgutschein-Offer) |
| `faqSchema` in lib | ✅ Wiederverwendbar (4 FAQ-Einträge, AZAV-Definition, Fördervoraussetzungen) |
| QCG FAQ + Service JSON-LD | ✅ In `src/app/qcg/page.tsx` (5 FAQ-Fragen, Service-Schema) |
| Person JSON-LD (Dursun Alver) | ✅ In `src/app/ueber-uns/page.tsx` |
| Extrahierbare Antworten | ✅ Alle FAQ-Antworten eigenständig beantwortend formuliert |
| Definitorische Klarheit | ✅ AZAV, Bildungsgutschein, QCG inline definiert |

---

## Phase 5 — Accessibility (WCAG 2.2 AA)

| Anforderung | Status |
|---|---|
| Skip-Link „Zum Hauptinhalt springen" | ✅ In `layout.tsx`, sichtbar bei Fokus |
| `<main id="main-content">` | ✅ |
| Fokus-Ring sichtbar (`:focus-visible`) | ✅ `outline: 2px solid #3f74bc` in `globals.css` |
| `prefers-reduced-motion` | ✅ Deaktiviert card-hover, animations, scroll-behavior |
| Header `<nav aria-label="Hauptnavigation">` | ✅ |
| Dropdown `aria-haspopup`, `aria-controls` | ✅ |
| Mobile Hamburger `aria-expanded`, `aria-controls` | ✅ |
| Förderung-Untermenü `aria-expanded` | ✅ |
| Kontaktformular `<label htmlFor>` + `id` | ✅ Alle Felder korrekt verknüpft |
| `aria-required="true"` auf Pflichtfeldern | ✅ |
| `aria-live="polite"` für Erfolgsmeldung | ✅ |
| Honeypot gegen Spam | ✅ (hidden field, tabIndex -1) |
| `<address>` für Kontaktinfos | ✅ |
| `aria-label` für Icon-only-Elemente | ✅ (Topbar-Links, Logo-Link, externe Links) |
| `aria-hidden="true"` auf dekorativen Icons | ✅ |
| `autoComplete` auf Formularfeldern | ✅ (name, email, tel) |

---

## Phase 6 — Verifikation

### Build
- Build-Befehl: `npm run build` im Verzeichnis `fdm-website/`
- TypeScript strict, keine `any`-Typen eingeführt

### Schema-Validierung
- JSON-LD validierbar unter https://validator.schema.org
- Alle `<` in JSON-LD werden via `.replace(/</g, "\\u003c")` escaped
- Implementierte Schemas: Organization, EducationalOrganization, LocalBusiness, WebSite (SearchAction), Course (AZAV), Service (QCG), FAQPage (QCG + global), Person (Dursun Alver)

### Offene TODOs (keine Fehler, aber Platzhalter)

| TODO | Grund |
|---|---|
| Echte Testimonials & Teilnehmerzahlen | Keine verifizierten Daten → bewusst weggelassen |
| `aggregateRating` in schema.ts | Kommentiert bis verifizierte Reviews vorliegen |
| Kurs-Preise in alvatarCourses in schema.ts | 2 Beispiele, Rest als TODO markiert |
| Karten-/Maps-Integration in /ueber-uns | Datenschutzkonforme Lösung ausstehend |
| Konversionstracking | Hooks vorbereitet, Consent-Management fehlt noch |
| `/kurse` Kurs-JSON-LD pro Kurs | Basis in lib/schema.ts, noch nicht pro Route gerendert |

---

## Dateistruktur (nach Redesign)

```
src/
  app/
    layout.tsx              ← rootMetadata + schemaGraph aus lib/
    page.tsx                ← buildMetadata('home')
    opengraph-image.tsx     ← Dynamisches OG-Bild (1200×630)
    robots.ts               ← LLM-Crawler explizit erlaubt
    sitemap.ts              ← 9 Routen, priorisiert
    azav/page.tsx           ← buildMetadata + courseJsonLd
    qcg/page.tsx            ← buildMetadata + faqJsonLd + serviceJsonLd
    kurse/layout.tsx        ← buildMetadata('kurse')
    kontakt/layout.tsx      ← buildMetadata('kontakt')
    kontakt/page.tsx        ← a11y-Formular mit Honeypot
    ueber-uns/page.tsx      ← buildMetadata + personJsonLd
    leitbild/page.tsx       ← buildMetadata
    impressum/page.tsx      ← buildMetadata (noindex)
    datenschutz/page.tsx    ← buildMetadata (noindex)
  components/
    Header.tsx              ← ARIA: nav-label, aria-expanded, mobile-menu
    Footer.tsx
    CookieBanner.tsx
  lib/
    metadata.ts             ← rootMetadata + buildMetadata(route)
    schema.ts               ← schemaGraph, courseAZAV, faqSchema, breadcrumb()
    courses.ts              ← Kurs-Daten für /kurse und Startseite
public/
  llms.txt                  ← LLM-Crawler Übersicht (Fakten, FAQ, Seitenstruktur)
  logo.png / logo.svg / logo.webp
  gzq-zertifikat.svg
```

---

*Erstellt: 2026-05-29 | Redesign-Prompt: redesign-input/fdm-group-claude-code-prompt.md*
