import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online-Kurse – KI, Automatisierung & Digitalisierung | alvatar.de",
  description:
    "Über 100 praxisnahe Online-Kurse zu Künstlicher Intelligenz, Automatisierung, Online-Marketing und digitalen Kompetenzen. Einsteiger bis Profi – auf alvatar.de.",
  keywords: [
    "Online-Kurse KI",
    "Künstliche Intelligenz Kurs",
    "Automatisierung lernen",
    "Online Marketing Kurs",
    "alvatar",
    "FDM GmbH",
    "KI-Zertifikat",
    "Digitalisierung Weiterbildung",
  ],
  alternates: { canonical: "https://www.fdm-group.de/kurse" },
  openGraph: {
    url: "https://www.fdm-group.de/kurse",
    title: "Online-Kurse – KI, Automatisierung & Digitalisierung | FDM GmbH",
    description:
      "100+ Online-Kurse auf alvatar.de: KI-Grundlagen, Automatisierung, Marketing & Sales, Business und mehr. Jetzt entdecken.",
  },
};

export default function KurseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
