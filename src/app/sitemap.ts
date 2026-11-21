// =============================================================
// app/sitemap.ts — liefert /sitemap.xml
// Enthält die festen Seiten, alle Fachbereich-Seiten und alle Kursseiten aus dem Katalog.
// =============================================================
import type { MetadataRoute } from "next";
import { fachbereiche, kursPfad, ladeKatalog } from "@/lib/katalog";
import { kettenPfad, ladeKetten } from "@/lib/ketten";
import { BASE, bereichPfad } from "@/lib/site";

// Stündlich neu erzeugen, damit neue Kurse zeitnah erscheinen.
export const revalidate = 3600;

type Eintrag = MetadataRoute.Sitemap[number];

const fest: { path: string; priority: number; changeFrequency: Eintrag["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/weiterbildung", priority: 0.9, changeFrequency: "daily" },
  { path: "/weiterbildung/kursketten", priority: 0.9, changeFrequency: "weekly" },
  { path: "/azav", priority: 0.9, changeFrequency: "monthly" },
  { path: "/qcg", priority: 0.9, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { path: "/kurse", priority: 0.7, changeFrequency: "weekly" },
  { path: "/kontakt", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ueber-uns", priority: 0.6, changeFrequency: "monthly" },
  { path: "/leitbild", priority: 0.4, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const jetzt = new Date();
  const katalog = await ladeKatalog();
  const ketten = await ladeKetten(katalog);

  return [
    ...fest.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE}${path}`,
      lastModified: jetzt,
      changeFrequency,
      priority,
    })),
    ...fachbereiche(katalog).map((b) => ({
      url: `${BASE}${bereichPfad(b.name)}`,
      lastModified: jetzt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...ketten.map((k) => ({
      url: `${BASE}${kettenPfad(k)}`,
      lastModified: jetzt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...katalog.map((k) => ({
      url: `${BASE}${kursPfad(k.modul_nr)}`,
      lastModified: jetzt,
      changeFrequency: "monthly" as const,
      // Zugelassene Maßnahmen sind die wichtigsten Kursseiten.
      priority: k.zugelassen ? 0.9 : 0.6,
    })),
  ];
}
