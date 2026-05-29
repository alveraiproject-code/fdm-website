// =============================================================
// app/robots.ts — Next.js Metadata Route
// Liefert /robots.txt dynamisch. Erlaubt klassische + LLM-Crawler.
// =============================================================
import type { MetadataRoute } from 'next'

const BASE = 'https://www.fdm-group.de'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard: alle klassischen Crawler
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      // LLM-/AI-Crawler explizit erlauben (Sichtbarkeit in KI-Antworten).
      // Bewusste Entscheidung pro GEO/AEO – nicht versehentlich blocken.
      {
        userAgent: [
          'GPTBot',          // OpenAI Indexierung
          'OAI-SearchBot',   // OpenAI Search
          'ChatGPT-User',    // ChatGPT Browsing (Live-Abrufe)
          'ClaudeBot',       // Anthropic Indexierung
          'Claude-Web',      // Anthropic Live-Abrufe
          'Claude-User',
          'PerplexityBot',   // Perplexity Indexierung
          'Perplexity-User', // Perplexity Live-Abrufe
          'Google-Extended', // Gemini / Vertex Training & Grounding
          'Applebot-Extended',
          'CCBot',           // Common Crawl (Trainingsbasis vieler LLMs)
          'cohere-ai',
          'Bytespider',
        ],
        allow: '/',
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
