import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="FDM GmbH"
              width={180}
              height={42}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              AZAV-zertifizierter Bildungsträger und Online-Akademie für
              berufliche Weiterbildung und KI-Kompetenz.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1 bg-[#3f74bc]/20 text-[#51ade5] px-2 py-1 rounded-full font-medium">
                AZAV-zertifiziert
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Startseite" },
                { href: "/kurse", label: "Kurse & Weiterbildung" },
                { href: "/azav", label: "AZAV-Förderung" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://alvatar.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Online-Kurse alvatar.de
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Rechtliches
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/impressum", label: "Impressum" },
                { href: "/datenschutz", label: "Datenschutzerklärung" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#51ade5] mt-0.5 flex-shrink-0" />
                <span>
                  Schillerstraße 21
                  <br />
                  73054 Eislingen/Fils
                </span>
              </li>
              <li>
                <a
                  href="tel:+4971616275126"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-[#51ade5] flex-shrink-0" />
                  07161 – 6275126
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fdm-group.de"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail size={15} className="text-[#51ade5] flex-shrink-0" />
                  info@fdm-group.de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FDM GmbH. Alle Rechte vorbehalten.</p>
          <p>
            Zertifikat-Nr.: Z-000473-2 · Gültig bis 17.10.2029 · Zertifiziert durch GZQ GmbH / DAkkS
          </p>
        </div>
      </div>
    </footer>
  );
}
