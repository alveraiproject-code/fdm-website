import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Kostenlose Beratung anfragen",
  description:
    "Kontaktieren Sie FDM GmbH für eine kostenlose Beratung zu Bildungsgutschein, QCG-Förderung oder Online-Kursen. Tel: 07161-6275120 · info@fdm-group.de",
  keywords: [
    "Kontakt FDM GmbH",
    "Beratung Weiterbildung",
    "Bildungsgutschein Beratung",
    "QCG Beratung",
    "Eislingen Bildungsträger",
  ],
  alternates: { canonical: "https://www.fdm-group.de/kontakt" },
  openGraph: {
    url: "https://www.fdm-group.de/kontakt",
    title: "Kontakt – Kostenlose Beratung bei FDM GmbH",
    description:
      "Jetzt kostenlos beraten lassen: Bildungsgutschein, QCG-Förderung, Kursauswahl. Wir melden uns schnell.",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
