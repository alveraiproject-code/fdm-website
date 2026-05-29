"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, ChevronDown, Award, Building2 } from "lucide-react";

const mainNavLinks = [
  { href: "/", label: "Startseite" },
  { href: "/kurse", label: "Kurse & Weiterbildung" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leitbild", label: "Leitbild" },
  { href: "/kontakt", label: "Kontakt" },
];

const foerderungLinks = [
  {
    href: "/azav",
    label: "AZAV-Förderung",
    desc: "Bildungsgutschein für Arbeitssuchende",
    icon: Award,
    badge: "Arbeitssuchende",
    badgeColor: "#3f74bc",
    badgeBg: "#eff6ff",
  },
  {
    href: "/qcg",
    label: "QCG-Förderung",
    desc: "Qualifizierungschancengesetz für Beschäftigte",
    icon: Building2,
    badge: "Arbeitgeber & Arbeitnehmer",
    badgeColor: "#15803d",
    badgeBg: "#f0fdf4",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [foerderungOpen, setFoerderungOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      {/* Topbar */}
      <div className="bg-[#2c3892] text-white text-sm py-2 hidden md:block" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6 flex justify-end gap-6">
          <a
            href="tel:+4971616275120"
            className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            aria-label="Telefon: 07161 – 6275120"
          >
            <Phone size={13} aria-hidden="true" />
            07161 – 6275120
          </a>
          <a
            href="mailto:info@fdm-group.de"
            className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            aria-label="E-Mail: info@fdm-group.de"
          >
            <Mail size={13} aria-hidden="true" />
            info@fdm-group.de
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16"
        aria-label="Hauptnavigation"
      >
        <Link href="/" className="flex-shrink-0" aria-label="FDM GmbH – Startseite">
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
        <ul className="hidden lg:flex items-center gap-1" role="list">
          <li>
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-[#3f74bc] transition-colors"
            >
              Startseite
            </Link>
          </li>

          <li>
            <Link
              href="/kurse"
              className="px-4 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-[#3f74bc] transition-colors"
            >
              Kurse & Weiterbildung
            </Link>
          </li>

          {/* Förderung Dropdown */}
          <li className="relative group">
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-[#3f74bc] transition-colors"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="foerderung-dropdown"
            >
              Förderung
              <ChevronDown
                size={14}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            {/* Dropdown panel */}
            <div
              id="foerderung-dropdown"
              className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50"
              style={{ minWidth: 340 }}
              role="menu"
              aria-label="Förderungswege"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div
                  className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider"
                  style={{ background: "#f8fafc", color: "#94a3b8", borderBottom: "1px solid #f1f5f9" }}
                  aria-hidden="true"
                >
                  Förderungswege
                </div>
                {foerderungLinks.map(({ href, label, desc, icon: Icon, badge, badgeColor, badgeBg }) => (
                  <Link
                    key={href}
                    href={href}
                    role="menuitem"
                    className="flex items-start gap-3 px-4 py-4 hover:bg-blue-50 transition-colors group/item"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: badgeBg }}
                      aria-hidden="true"
                    >
                      <Icon size={17} style={{ color: badgeColor }} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-0.5 text-slate-800 group-hover/item:text-[#3f74bc] transition-colors">
                        {label}
                      </div>
                      <div className="text-xs text-slate-500 leading-snug mb-1.5">{desc}</div>
                      <span
                        className="inline-block text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ background: badgeBg, color: badgeColor }}
                      >
                        {badge}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Remaining links */}
          {mainNavLinks.slice(2).map((link) => (
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
            aria-label="Online-Kurse auf alvatar.de (öffnet in neuem Tab)"
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
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-1"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <Link
            href="/"
            className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-[#3f74bc] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Startseite
          </Link>
          <Link
            href="/kurse"
            className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-[#3f74bc] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Kurse & Weiterbildung
          </Link>

          {/* Förderung section in mobile */}
          <div>
            <button
              onClick={() => setFoerderungOpen(!foerderungOpen)}
              aria-expanded={foerderungOpen}
              aria-controls="mobile-foerderung"
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-[#3f74bc] transition-colors"
            >
              <span>Förderung</span>
              <ChevronDown
                size={15}
                aria-hidden="true"
                className={`transition-transform duration-200 ${foerderungOpen ? "rotate-180" : ""}`}
              />
            </button>
            {foerderungOpen && (
              <div
                id="mobile-foerderung"
                className="ml-4 mt-1 space-y-1 border-l-2 border-blue-100 pl-3"
              >
                {foerderungLinks.map(({ href, label, desc }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-3 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
                    onClick={() => { setMobileOpen(false); setFoerderungOpen(false); }}
                  >
                    <div className="text-sm font-medium text-slate-700">{label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainNavLinks.slice(2).map((link) => (
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
              aria-label="Online-Kurse auf alvatar.de (öffnet in neuem Tab)"
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
