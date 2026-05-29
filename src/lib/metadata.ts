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
    default: 'FDM GmbH – Bildungsträger & Online-Akademie | AZAV-zertifiziert',
    template: '%s | FDM GmbH',
  },
  description:
    'AZAV-zertifizierter Bildungsträger in Eislingen: geförderte Weiterbildung mit Bildungsgutschein, QCG-Förderung und über 100 KI-Online-Kurse.',
  applicationName: 'FDM GmbH',
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
    siteName: 'FDM GmbH',
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
}

// ---------- PRO ROUTE ----------
type RouteKey =
  | 'home' | 'kurse' | 'azav' | 'qcg'
  | 'ueber-uns' | 'leitbild' | 'kontakt'
  | 'impressum' | 'datenschutz'

const routes: Record<RouteKey, { path: string; title: string; description: string }> = {
  home: {
    path: '/',
    title: 'FDM GmbH – Bildungsträger & Online-Akademie | AZAV-zertifiziert',
    description:
      'AZAV-zertifizierter Bildungsträger in Eislingen: geförderte Weiterbildung mit Bildungsgutschein, QCG-Förderung und über 100 KI-Online-Kurse auf alvatar.de.',
  },
  kurse: {
    path: '/kurse',
    title: 'Kurse & Weiterbildung – KI-Online-Kurse & geförderte Lehrgänge',
    description:
      'Über 100 praxisnahe KI-Online-Kurse und AZAV-geförderte Weiterbildungen. Von ChatGPT bis Datenanalyse – flexibel, online, im eigenen Tempo.',
  },
  azav: {
    path: '/azav',
    title: 'AZAV-Förderung – Bildungsgutschein für Arbeitssuchende',
    description:
      'Mit dem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters zur geförderten Weiterbildung – bis zu 100 % kostenfrei. AZAV-zertifiziert nach §81 SGB III.',
  },
  qcg: {
    path: '/qcg',
    title: 'QCG-Förderung – Qualifizierungschancengesetz für Beschäftigte',
    description:
      'Geförderte Weiterbildung für Beschäftigte nach dem Qualifizierungschancengesetz – unabhängig von Qualifikation, Alter und Betriebsgröße.',
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
