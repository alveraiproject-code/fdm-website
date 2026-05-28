import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses
  compress: true,

  // Image optimization – allow external sources if needed in future
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Security & performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Long-term cache for static assets
        source: "/(.*)\\.(png|jpg|jpeg|webp|avif|svg|ico|woff2|woff)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirect www → non-www (set your domain here)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.fdm-group.de" }],
        destination: "https://fdm-group.de/:path*",
        permanent: true,
      },
    ];
  },

  turbopack: {
    // Silence the workspace root warning on Vercel
    root: __dirname,
  },
};

export default nextConfig;
