// =============================================================
// app/opengraph-image.tsx — dynamisch generiertes OG-Bild (1200×630)
// =============================================================
// Next.js rendert daraus automatisch das og:image der Startseite.
// Für route-spezifische Bilder: diese Datei in den jeweiligen
// Route-Ordner kopieren (z. B. app/azav/opengraph-image.tsx) und
// title/subtitle anpassen — oder generateImageMetadata nutzen.
//
// Self-hosted Font einbinden (DSGVO + verlässliches Rendering):
// Font-Datei unter app/_fonts/ ablegen und per fetch laden.
// =============================================================
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'FDM GmbH – AZAV-zertifizierter Bildungsträger & Online-Akademie'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Pro Route überschreibbar:
const TITLE = 'Ihre Karriere. Gefördert. Zukunftssicher.'
const SUBTITLE = 'AZAV-zertifizierter Bildungsträger · Bildungsgutschein · 100+ KI-Kurse'

export default async function Image() {
  // Self-hosted Font laden (Beispiel: Variable-Grotesk als .ttf in app/_fonts/)
  // const font = await fetch(new URL('./_fonts/Display.ttf', import.meta.url))
  //   .then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'linear-gradient(135deg, #0a0f1c 0%, #122036 55%, #1a3a5c 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Kopf: Marke + Trust-Badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em' }}>
            FDM GmbH
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 24,
              fontWeight: 600,
              padding: '12px 24px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.20)',
            }}
          >
            AZAV-zertifiziert · §81 SGB III
          </div>
        </div>

        {/* Mitte: Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: 980,
            }}
          >
            {TITLE}
          </div>
          <div style={{ fontSize: 30, color: 'rgba(255,255,255,0.78)', maxWidth: 940 }}>
            {SUBTITLE}
          </div>
        </div>

        {/* Fuß: Akzentlinie + URL */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 64, height: 6, borderRadius: 3, background: '#38bdf8' }} />
          <div style={{ fontSize: 26, color: 'rgba(255,255,255,0.65)' }}>
            www.fdm-group.de
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      // fonts: [{ name: 'Display', data: font, weight: 800, style: 'normal' }],
    },
  )
}
