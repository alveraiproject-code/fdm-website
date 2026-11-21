// =============================================================
// lib/metadata.ts — zentrale Metadaten-Konfiguration pro Route
// =============================================================
// Verwendung in jeder page.tsx:
//   import { buildMetadata } from '@/lib/metadata'
//   export const metadata = buildMetadata('azav')
//
// Globale Defaults gehören in app/layout.tsx (metadataBase, title.template).
// =============================================================
import type { Metadata } from 'next'

const BASE = 'https://www.fdm-group.de'

// ---------- GLOBAL: in app/layout.tsx ----------
export const rootMetadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'FDM Akademie – geförderte Weiterbildung online | FDM GmbH',
    template: '%s | FDM Akademie',
  },
  description:
    'FDM Akademie: über 650 Weiterbildungen live im virtuellen Klassenzimmer, in Vollzeit oder Teilzeit. AZAV-zugelassener Bildungsträger, Förderung mit Bildungsgutschein möglich, kostenlose Beratung.',
  applicationName: 'FDM Akademie',
  keywords: [
    'geförderte Weiterbildung',
    'Weiterbildung mit Bildungsgutschein',
    'Online-Weiterbildung',
    'AZAV',
    'Qualifizierungschancengesetz',
    'virtuelles Klassenzimmer',
    'FDM Akademie',
  ],
  category: 'education',
  authors: [{ name: 'FDM GmbH', url: BASE }],
  creator: 'FDM GmbH',
  publisher: 'FDM GmbH',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: BASE },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: BASE,
    siteName: 'FDM Akademie',
  },
  twitter: { card: 'summary_large_image' },
}

// ---------- PRO ROUTE ----------
type RouteKey =
  | 'home' | 'kurse' | 'azav' | 'qcg'
  | 'ueber-uns' | 'leitbild' | 'kontakt'
  | 'impressum' | 'datenschutz' | 'faq'

const routes: Record<RouteKey, { path: string; title: string; description: string }> = {
  home: {
    path: '/',
    title: 'FDM Akademie – geförderte Weiterbildung online | FDM GmbH',
    description:
      'Über 650 Weiterbildungen live im virtuellen Klassenzimmer: IT, kaufmännisch, Gesundheit, Technik, Medien, Sprachen. AZAV-zugelassener Träger, Förderung mit Bildungsgutschein möglich.',
  },
  kurse: {
    path: '/kurse',
    title: 'Online-Kurse für Selbstzahler – KI-Kurse auf alvatar.de',
    description:
      'Über 100 praxisnahe KI-Online-Kurse zum Selbstlernen: sofort buchbar auf alvatar.de, im eigenen Tempo. Selbstzahler-Angebot ohne Förderung.',
  },
  azav: {
    path: '/azav',
    title: 'Bildungsgutschein – geförderte Weiterbildung für Arbeitssuchende',
    description:
      'Bildungsgutschein einfach erklärt: Wer ihn bekommt, wie Sie ihn beantragen und wie Sie damit eine Weiterbildung bei der FDM Akademie starten. Kostenlose Beratung.',
  },
  qcg: {
    path: '/qcg',
    title: 'QCG-Förderung – Qualifizierungschancengesetz für Beschäftigte',
    description:
      'Qualifizierungschancengesetz: Zuschüsse zu Lehrgangskosten und Arbeitsentgelt für die Weiterbildung von Beschäftigten. So läuft der Antrag, so unterstützt die FDM Akademie.',
  },
  'ueber-uns': {
    path: '/ueber-uns',
    title: 'Über uns – Ihr AZAV-zertifizierter Bildungspartner',
    description:
      'Die FDM GmbH verbindet staatlich anerkannte Fördermaßnahmen mit modernen Online-Inhalten. Lernen Sie unseren Bildungsträger kennen.',
  },
  leitbild: {
    path: '/leitbild',
    title: 'Leitbild – Werte & Bildungsphilosophie der FDM GmbH',
    description:
      'Unser Leitbild: praxisorientierte, zukunftssichere Weiterbildung auf höchstem Niveau – zugänglich und gefördert.',
  },
  kontakt: {
    path: '/kontakt',
    title: 'Kontakt – Kostenlose Beratung zur geförderten Weiterbildung',
    description:
      'Kostenlose Beratung: Wir finden den passenden Kurs und klären Ihren Förderanspruch. Telefon 07161 6275120 oder Beratung online anfragen.',
  },
  impressum: {
    path: '/impressum',
    title: 'Impressum',
    description: 'Impressum und Anbieterkennzeichnung der FDM GmbH, Eislingen/Fils.',
  },
  faq: {
    path: '/faq',
    title: 'Häufige Fragen zur geförderten Weiterbildung',
    description:
      'Antworten zu Bildungsgutschein, Kosten, Ablauf, Vollzeit und Teilzeit, Technik und Abschluss: die häufigsten Fragen zur Weiterbildung bei der FDM Akademie.',
  },
  datenschutz: {
    path: '/datenschutz',
    title: 'Datenschutzerklärung',
    description: 'Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten bei der FDM GmbH.',
  },
}

export function buildMetadata(key: RouteKey): Metadata {
  const r = routes[key]
  const url = `${BASE}${r.path}`
  const noindex = key === 'impressum' || key === 'datenschutz'

  return {
    title: r.title,
    description: r.description,
    alternates: { canonical: url },
    openGraph: {
      title: r.title,
      description: r.description,
      url,
      type: 'website',
    },
    twitter: {
      title: r.title,
      description: r.description,
    },
    ...(noindex && { robots: { index: false, follow: true } }),
    // OG-Bild wird automatisch von app/opengraph-image.tsx je Segment erzeugt.
    // Für route-spezifische Motive: opengraph-image.tsx im jeweiligen Ordner ablegen.
  }
}
