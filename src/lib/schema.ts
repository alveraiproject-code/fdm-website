// =============================================================
// JSON-LD STRUKTURIERTE DATEN — fdm-group.de
// =============================================================
// Globales @graph (Organisation, Website) wird in app/layout.tsx eingebunden.
// Seitenspezifische Schemas (Course, ItemList, BreadcrumbList) pro Route.
// Grundsatz: Nur behaupten, was auf der Seite steht und stimmt. Die Kennzeichnung als
// förderfähig bekommen ausschließlich Kurse, die als FDM-Maßnahme zugelassen sind.
// Prüfen: https://validator.schema.org und Google Rich Results Test.
// =============================================================
import { dauerText, kursPfad, type Weiterbildung } from "./katalog";
import { BASE, bereichPfad } from "./site";

// ---------- GLOBAL: in layout.tsx ----------
export const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${BASE}/#organization`,
      name: "FDM GmbH",
      legalName: "FDM GmbH",
      alternateName: ["FDM Akademie", "FDM Group"],
      url: BASE,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE}/#logo`,
        url: `${BASE}/logo.png`,
        caption: "FDM GmbH",
      },
      image: { "@id": `${BASE}/#logo` },
      description:
        "Die FDM GmbH ist ein nach AZAV zugelassener Bildungsträger aus Eislingen/Fils. Unter dem Namen FDM Akademie bietet sie berufliche Weiterbildungen live im virtuellen Klassenzimmer an, in Vollzeit und Teilzeit, bundesweit. Eine Förderung über Bildungsgutschein oder Qualifizierungschancengesetz ist möglich.",
      slogan: "Ihre Karriere. Gefördert. Zukunftssicher.",
      telephone: "+49-7161-6275120",
      email: "beratung@fdm-akademie.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Schillerstraße 21",
        postalCode: "73054",
        addressLocality: "Eislingen/Fils",
        addressRegion: "Baden-Württemberg",
        addressCountry: "DE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Bildungsberatung",
        telephone: "+49-7161-6275120",
        email: "beratung@fdm-akademie.de",
        availableLanguage: ["de"],
        areaServed: "DE",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      },
      areaServed: { "@type": "Country", name: "Deutschland" },
      knowsAbout: [
        "Berufliche Weiterbildung",
        "Bildungsgutschein",
        "AZAV",
        "Qualifizierungschancengesetz",
        "Online-Unterricht im virtuellen Klassenzimmer",
        "IT-Weiterbildung",
        "Kaufmännische Weiterbildung",
        "Online-Marketing",
        "Künstliche Intelligenz",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Trägerzulassung nach AZAV",
        recognizedBy: {
          "@type": "Organization",
          name: "GZQ GmbH (DAkkS-akkreditiert)",
        },
        identifier: "Z-000473-2",
        validThrough: "2029-10-17",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Weiterbildungen der FDM Akademie",
        url: `${BASE}/weiterbildung`,
      },
      sameAs: ["https://alvatar.de", "https://www.fdm-akademie.de"],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "FDM Akademie",
      alternateName: ["FDM GmbH", "fdm-group.de"],
      publisher: { "@id": `${BASE}/#organization` },
      inLanguage: "de-DE",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE}/weiterbildung?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

// ---------- Eigener, zugelassener Lehrgang ----------
export const courseAZAV = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${BASE}/weiterbildung/FDM-OME-VZ#course`,
  name: "Online Marketing Experte (m/w/d)",
  description:
    "Nach AZAV zugelassener Lehrgang der FDM GmbH für den umfassenden Einstieg in das Online-Marketing: 10 Abschnitte von den Grundlagen des Online Marketings bis zum Abschlussprojekt, 1.920 Unterrichtseinheiten, in Vollzeit (12 Monate) oder Teilzeit (24 Monate), vollständig online. Mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters finanzierbar.",
  provider: { "@id": `${BASE}/#organization` },
  url: `${BASE}/weiterbildung/FDM-OME-VZ`,
  inLanguage: "de-DE",
  educationalCredentialAwarded: "Abschlusszertifikat als Online Marketing Experte (m/w/d)",
  identifier: "621/214/24", // Maßnahme-ID
  financialAidEligible: "Bildungsgutschein (Agentur für Arbeit, Jobcenter)",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT1440H", // 1.920 Unterrichtseinheiten zu je 45 Minuten
    location: {
      "@type": "VirtualLocation",
      url: `${BASE}/weiterbildung/FDM-OME-VZ`,
    },
  },
  offers: {
    "@type": "Offer",
    category: "Paid",
    availability: "https://schema.org/InStock",
    url: `${BASE}/weiterbildung/FDM-OME-VZ`,
  },
};

// ---------- Kursseite: eine Weiterbildung aus dem Katalog ----------
export function kursSchema(k: Weiterbildung) {
  const url = `${BASE}${kursPfad(k.modul_nr)}`;
  const stunden = k.lerneinheiten ? Math.round(k.lerneinheiten * 0.75) : null;
  const dauer = dauerText(k);
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${url}#course`,
    name: k.titel,
    description: [
      // Kurzbeschreibungen enden oft ohne Punkt; für einen sauberen Satzanschluss ergänzen.
      k.kurzbeschreibung ? k.kurzbeschreibung.trim().replace(/([^.!?])$/, "$1.") : null,
      `${k.kursart_name} der FDM Akademie, live im virtuellen Klassenzimmer, ${k.zeitmodell_name}${dauer ? `, ${dauer}` : ""}${k.lerneinheiten ? `, ${k.lerneinheiten} Unterrichtseinheiten` : ""}.`,
    ]
      .filter(Boolean)
      .join(" "),
    courseCode: k.modul_nr,
    url,
    inLanguage: "de-DE",
    provider: { "@id": `${BASE}/#organization` },
    about: k.fachbereich_name,
    educationalCredentialAwarded: "Zertifikat des Bildungsträgers",
    // Nur zugelassene Maßnahmen werden als förderfähig ausgezeichnet.
    ...(k.zugelassen ? { financialAidEligible: "Bildungsgutschein (Agentur für Arbeit, Jobcenter)" } : {}),
    // Mit bekannten Terminen je Termin eine Durchführung, sonst eine ohne Datum.
    hasCourseInstance: (k.termine?.length ? k.termine : [null]).map((t) => ({
      "@type": "CourseInstance",
      courseMode: ["online", k.zeitmodell === "teilzeit" ? "part-time" : "full-time"],
      ...(stunden ? { courseWorkload: `PT${stunden}H` } : {}),
      ...(t ? { startDate: t.start, ...(t.ende ? { endDate: t.ende } : {}) } : {}),
      location: { "@type": "VirtualLocation", url },
    })),
    offers: {
      "@type": "Offer",
      category: "Paid",
      url,
    },
  };
}

// ---------- Liste von Kursen (Fachbereich, Katalog) ----------
export const kursListe = (name: string, url: string, kurse: Weiterbildung[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  url,
  numberOfItems: kurse.length,
  itemListElement: kurse.map((k, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: k.titel,
    url: `${BASE}${kursPfad(k.modul_nr)}`,
  })),
});

// ---------- Übersicht der Fachbereiche ----------
export const bereichsListe = (bereiche: { name: string; anzahl: number }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Fachbereiche der FDM Akademie",
  url: `${BASE}/weiterbildung`,
  numberOfItems: bereiche.length,
  itemListElement: bereiche.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${b.name} (${b.anzahl} Weiterbildungen)`,
    url: `${BASE}${bereichPfad(b.name)}`,
  })),
});

// ---------- BreadcrumbList ----------
export const breadcrumb = (items: { name: string; pfad: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${BASE}${item.pfad}`,
  })),
});
