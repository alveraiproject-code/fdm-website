// =============================================================
// app/robots.ts — liefert /robots.txt
// Erlaubt klassische Suchmaschinen und ausdrücklich die Crawler der KI-Assistenten.
// =============================================================
import type { MetadataRoute } from "next";
import { BASE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // KI-Crawler ausdrücklich erlauben: Die FDM Akademie soll in KI-Antworten vorkommen.
      {
        userAgent: [
          "GPTBot", // OpenAI: Training und Index
          "OAI-SearchBot", // ChatGPT-Suche
          "ChatGPT-User", // ChatGPT ruft Seiten live ab
          "ClaudeBot", // Anthropic
          "Claude-User",
          "Claude-SearchBot",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended", // Gemini
          "Applebot-Extended",
          "Amazonbot",
          "meta-externalagent",
          "DuckAssistBot",
          "MistralAI-User",
          "CCBot", // Common Crawl, Grundlage vieler Sprachmodelle
          "cohere-ai",
          "YouBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
