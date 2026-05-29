// =============================================================
// JSON-LD STRUKTURIERTE DATEN — fdm-group.de
// =============================================================
// Verwendung in Next.js (App Router):
//   import { schemaGraph } from '@/lib/schema'
//   <script type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />
//
// Globales @graph (Organization/LocalBusiness/WebSite) in app/layout.tsx einbinden.
// Seitenspezifische Schemas (Course, FAQPage, BreadcrumbList) pro Route.
// Validieren: https://validator.schema.org und Google Rich Results Test.
// =============================================================

const BASE = 'https://www.fdm-group.de'

// ---------- GLOBAL: in layout.tsx ----------
export const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': `${BASE}/#organization`,
      name: 'FDM GmbH',
      legalName: 'FDM GmbH',
      url: BASE,
      logo: {
        '@type': 'ImageObject',
        '@id': `${BASE}/#logo`,
        url: `${BASE}/logo.png`,
        caption: 'FDM GmbH',
      },
      image: { '@id': `${BASE}/#logo` },
      description:
        'AZAV-zertifizierter Bildungsträger und Online-Akademie für berufliche Weiterbildung und KI-Kompetenz.',
      telephone: '+49-7161-6275120',
      email: 'info@fdm-group.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Schillerstraße 21',
        postalCode: '73054',
        addressLocality: 'Eislingen/Fils',
        addressRegion: 'Baden-Württemberg',
        addressCountry: 'DE',
      },
      areaServed: { '@type': 'Country', name: 'Deutschland' },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'AZAV-Zertifizierung (§81 SGB III)',
        recognizedBy: {
          '@type': 'Organization',
          name: 'GZQ GmbH (DAkkS-akkreditiert)',
        },
        identifier: 'Z-000473-2',
        validThrough: '2029-10-17',
      },
      sameAs: [
        'https://alvatar.de',
        // TODO: LinkedIn / weitere offizielle Profile ergänzen
      ],
      // TODO: echte aggregateRating erst aktivieren, wenn verifizierte Reviews vorliegen
      // aggregateRating: { '@type': 'AggregateRating', ratingValue: '', reviewCount: '' },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'FDM GmbH',
      publisher: { '@id': `${BASE}/#organization` },
      inLanguage: 'de-DE',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE}/kurse?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

// ---------- SEITE: AZAV-Lehrgang (/azav) ----------
export const courseAZAV = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  '@id': `${BASE}/azav#course`,
  name: 'Online Marketing Experte (m/w/d)',
  description:
    'AZAV-zertifizierter Lehrgang für den umfassenden Einstieg in das Online-Marketing. Finanzierbar über den Bildungsgutschein der Agentur für Arbeit oder des Jobcenters – für Teilnehmende vollständig kostenfrei.',
  provider: { '@id': `${BASE}/#organization` },
  url: `${BASE}/azav`,
  inLanguage: 'de-DE',
  educationalCredentialAwarded:
    'Abschlusszertifikat des Bildungsträgers (AZAV §81 SGB III)',
  identifier: '01/1024', // Maßnahme-ID
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: 'PT1920H', // 1.920 Unterrichtsstunden
    // 48 Wochen, laufender Einstieg
    location: {
      '@type': 'VirtualLocation',
      url: `${BASE}/azav`,
    },
  },
  offers: {
    '@type': 'Offer',
    category: 'Bildungsgutschein / AZAV-gefördert',
    price: '0',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: `${BASE}/azav`,
  },
}

// ---------- SEITE: alvatar-Kurse (/kurse) ----------
// Pro Kurs ein Course-Objekt. Hier 2 Beispiele aus Live-Daten – Rest analog mappen.
export const alvatarCourses = [
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'ChatGPT Meisterkurs für Einsteiger',
    description: 'Praxisnaher Einsteigerkurs zu ChatGPT. 5 Module · 13 Lektionen.',
    provider: { '@id': `${BASE}/#organization` },
    url: 'https://alvatar.de',
    inLanguage: 'de-DE',
    educationalLevel: 'Beginner',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      location: { '@type': 'VirtualLocation', url: 'https://alvatar.de' },
    },
    offers: {
      '@type': 'Offer',
      price: '29.00',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://alvatar.de',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Claude von Anthropic Meisterkurs',
    description: 'Praxisnaher Einsteigerkurs zu Claude. 6 Module · 13 Lektionen.',
    provider: { '@id': `${BASE}/#organization` },
    url: 'https://alvatar.de',
    inLanguage: 'de-DE',
    educationalLevel: 'Beginner',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      location: { '@type': 'VirtualLocation', url: 'https://alvatar.de' },
    },
    offers: {
      '@type': 'Offer',
      price: '49.00',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://alvatar.de',
    },
  },
  // TODO: Gemini (39€), Copilot (49€), KI-Tools Büroalltag (24€),
  //       Datenanalyse mit KI (49€) und übrige Kurse analog ergänzen.
]

// ---------- WIEDERVERWENDBAR: FAQPage ----------
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wer kann eine geförderte Weiterbildung bei der FDM GmbH machen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arbeitssuchende können über einen Bildungsgutschein der Agentur für Arbeit oder des Jobcenters an AZAV-zertifizierten Maßnahmen teilnehmen. Beschäftigte können über die QCG-Förderung (Qualifizierungschancengesetz) ihres Arbeitgebers gefördert werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine geförderte Weiterbildung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mit einem bewilligten Bildungsgutschein ist die Weiterbildung für Teilnehmende vollständig kostenfrei. Die Kosten werden von der Agentur für Arbeit oder dem Jobcenter übernommen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Sind die Kurse der FDM GmbH online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Alle geförderten Maßnahmen und Akademie-Kurse finden zu 100 % online statt – flexibel, ortsunabhängig und im eigenen Tempo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was bedeutet AZAV-Zertifizierung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AZAV steht für die Akkreditierungs- und Zulassungsverordnung Arbeitsförderung. Sie ist die Voraussetzung dafür, dass ein Bildungsträger nach §81 SGB III geförderte Maßnahmen durchführen darf. Die FDM GmbH ist durch die GZQ GmbH (DAkkS-akkreditiert) zertifiziert, Zertifikat-Nr. Z-000473-2.',
      },
    },
  ],
}

// ---------- WIEDERVERWENDBAR: BreadcrumbList (Helper) ----------
// items: [{ name: 'Startseite', url: BASE }, { name: 'AZAV-Förderung', url: `${BASE}/azav` }]
export const breadcrumb = (
  items: { name: string; url: string }[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
})
