import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "FDM GmbH – Bildungsträger & Online-Akademie | AZAV-zertifiziert",
  description:
    "FDM GmbH ist ein AZAV-zertifizierter Bildungsträger in Eislingen. Geförderte Weiterbildungen mit Bildungsgutschein sowie über 100 KI-Online-Kurse auf alvatar.de.",
  keywords: [
    "Bildungsträger",
    "AZAV",
    "Weiterbildung",
    "Bildungsgutschein",
    "Online Marketing",
    "KI-Kurse",
    "Eislingen",
    "FDM GmbH",
  ],
  openGraph: {
    title: "FDM GmbH – Bildungsträger & Online-Akademie",
    description: "AZAV-zertifizierter Bildungsträger mit geförderten Weiterbildungen und Online-Kursen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
