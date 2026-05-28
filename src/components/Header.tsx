"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/kurse", label: "Kurse & Weiterbildung" },
  { href: "/azav", label: "AZAV-Förderung" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leitbild", label: "Leitbild" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      {/* Topbar */}
      <div className="bg-[#2c3892] text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-end gap-6">
          <a
            href="tel:+4971616275126"
            className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
          >
            <Phone size={13} />
            07161 – 6275126
          </a>
          <a
            href="mailto:info@fdm-group.de"
            className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
          >
            <Mail size={13} />
            info@fdm-group.de
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="FDM GmbH"
            width={200}
            height={46}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-[#3f74bc] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://alvatar.de"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold text-[#3f74bc] border border-[#3f74bc] rounded-lg hover:bg-blue-50 transition-colors"
          >
            Online-Kurse
          </a>
          <Link
            href="/kontakt"
            className="px-4 py-2 text-sm font-semibold text-white bg-[#3f74bc] rounded-lg hover:bg-[#2c3892] transition-colors"
          >
            Beratung anfragen
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-[#3f74bc] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="https://alvatar.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-4 py-2.5 text-sm font-semibold text-[#3f74bc] border border-[#3f74bc] rounded-lg"
            >
              Online-Kurse auf alvatar.de
            </a>
            <Link
              href="/kontakt"
              className="text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#3f74bc] rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Beratung anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
