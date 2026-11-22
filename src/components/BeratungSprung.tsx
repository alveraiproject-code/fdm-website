"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

// Auf kleinen Bildschirmen steht das Anfrageformular weit unten. Diese Leiste am unteren Rand
// führt direkt dorthin und verschwindet, sobald das Formular zu sehen ist.
export default function BeratungSprung({ text = "Kostenlose Beratung anfragen" }: { text?: string }) {
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    const ziel = document.getElementById("beratung");
    if (!ziel) return;
    const beobachter = new IntersectionObserver(([e]) => setSichtbar(!e.isIntersecting), { threshold: 0.05 });
    beobachter.observe(ziel);
    return () => beobachter.disconnect();
  }, []);

  if (!sichtbar) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-4px_16px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden">
      <a
        href="#beratung"
        className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white"
        style={{ background: "linear-gradient(135deg, #2c3892, #3f74bc)" }}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        {text}
      </a>
    </div>
  );
}
