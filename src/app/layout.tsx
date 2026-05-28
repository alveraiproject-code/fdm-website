import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const BASE_URL = "https://www.fdm-group.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "FDM GmbH – Bildungsträger & Online-Akademie | AZAV-zertifiziert",
    template: "%s | FDM GmbH",
  },
  description:
    "FDM GmbH ist ein AZAV-zertifizierter Bildungsträger in Eislingen. Geförderte Weiterbildungen mit Bildungsgutschein, QCG-Förderung sowie über 100 KI-Online-Kurse auf alvatar.de.",
  keywords: [
    "Bildungsträger",
    "AZAV",
    "Weiterbildung",
    "Bildungsgutschein",
    "Qualifizierungschancengesetz",
    "QCG",
    "Online Marketing",
    "KI-Kurse",
    "Eislingen",
    "FDM GmbH",
    "geförderte Weiterbildung",
    "Agentur für Arbeit",
  ],
  authors: [{ name: "FDM GmbH", url: BASE_URL }],
  creator: "FDM GmbH",
  publisher: "FDM GmbH",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "FDM GmbH",
    title: "FDM GmbH – Bildungsträger & Online-Akademie",
    description:
      "AZAV-zertifizierter Bildungsträger mit geförderten Weiterbildungen (Bildungsgutschein, QCG) und über 100 KI-Online-Kursen.",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 92,
        alt: "FDM GmbH – Bildungsträger & Online-Akademie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FDM GmbH – Bildungsträger & Online-Akademie",
    description:
      "AZAV-zertifizierter Bildungsträger mit geförderten Weiterbildungen und über 100 KI-Online-Kursen.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "de-DE": BASE_URL,
    },
  },
};

// Organization JSON-LD – appears on every page
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${BASE_URL}/#organization`,
      name: "FDM GmbH",
      alternateName: "FDM GmbH – Bildungsträger & Online-Akademie",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
        width: 400,
        height: 92,
      },
      image: `${BASE_URL}/logo.png`,
      description:
        "FDM GmbH ist ein AZAV-zertifizierter Bildungsträger (GZQ / DAkkS) in Eislingen/Fils. Geförderte Weiterbildungen nach §81 und §82 SGB III sowie über 100 KI-Online-Kurse auf alvatar.de.",
      telephone: "+4971616275120",
      email: "info@fdm-group.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Schillerstraße 21",
        addressLocality: "Eislingen/Fils",
        postalCode: "73054",
        addressCountry: "DE",
        addressRegion: "Baden-Württemberg",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.6928,
        longitude: 9.7167,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "AZAV-Zertifizierung §82 SGB III",
        description:
          "Zertifiziert nach AZAV durch GZQ GmbH / DAkkS. Zertifikat-Nr. Z-000473-2, gültig bis 17.10.2029.",
        credentialCategory: "certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "GZQ GmbH / DAkkS",
          url: "https://www.gzq.de",
        },
      },
      founder: {
        "@type": "Person",
        name: "Dursun Alver",
        jobTitle: "Geschäftsführer",
        description: "Diplom-Wirtschaftsinformatiker (FH)",
      },
      sameAs: ["https://alvatar.de"],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "FDM GmbH",
      description:
        "AZAV-zertifizierter Bildungsträger und Online-Akademie für berufliche Weiterbildung und KI-Kompetenz.",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      inLanguage: "de-DE",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
