import { BadgeCheck, CreditCard } from "lucide-react";

// Einheitliche Kennzeichen, damit überall auf der Website sofort erkennbar ist,
// was nach AZAV zugelassen ist und was ein Selbstzahler-Angebot ohne Förderung ist.
const ARTEN = {
  azav: { text: "AZAV-zugelassen", icon: BadgeCheck, farbe: "#166534", hintergrund: "#dcfce7" },
  selbstzahler: { text: "Selbstzahler · ohne Förderung", icon: CreditCard, farbe: "#92400e", hintergrund: "#fef3c7" },
} as const;

export default function Kennzeichen({ art, hell = false }: { art: keyof typeof ARTEN; hell?: boolean }) {
  const { text, icon: Icon, farbe, hintergrund } = ARTEN[art];
  return (
    <span
      className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold"
      style={hell ? { background: "rgba(255,255,255,0.16)", color: "#ffffff" } : { background: hintergrund, color: farbe }}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {text}
    </span>
  );
}
