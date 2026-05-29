// =============================================================
// app/sitemap.ts — Next.js Metadata Route
// Liefert /sitemap.xml dynamisch mit lastmod, changefreq, priority.
// =============================================================
import type { MetadataRoute } from 'next'

const BASE = 'https://www.fdm-group.de'

// Statische Routen mit Gewichtung. priority spiegelt Conversion-Relevanz.
const routes: {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}[] = [
  { path: '/',            priority: 1.0,  changeFrequency: 'weekly' },
  { path: '/kurse',       priority: 0.9,  changeFrequency: 'weekly' },
  { path: '/azav',        priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/qcg',         priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/ueber-uns',   priority: 0.6,  changeFrequency: 'monthly' },
  { path: '/leitbild',    priority: 0.5,  changeFrequency: 'yearly' },
  { path: '/kontakt',     priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/impressum',   priority: 0.2,  changeFrequency: 'yearly' },
  { path: '/datenschutz', priority: 0.2,  changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now, // TODO: bei CMS/MDX echtes Änderungsdatum pro Route einsetzen
    changeFrequency,
    priority,
  }))

  // ---- Erweiterung bei dynamischen Kurs-Detailseiten ----
  // Falls /kurse/[slug] existiert, hier anhängen:
  //
  // const courses = await getCourses()  // aus DB/MDX/API
  // const courseEntries = courses.map((c) => ({
  //   url: `${BASE}/kurse/${c.slug}`,
  //   lastModified: c.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }))
  // return [...staticEntries, ...courseEntries]
}
