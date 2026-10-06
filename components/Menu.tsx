"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MenuItem {
  name: string;
  href: string;
}

interface MenuProps {
  onQuoteClick?: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function Menu({
  onQuoteClick,
  isMobileOpen = false,
  onCloseMobile,
}: MenuProps) {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navLinks: MenuItem[] = [
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav
      className="w-full bg-[#FC6D15] shadow-md relative z-30"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] font-bold tracking-wider uppercase transition-all duration-200 relative py-1.5 ${
                    isActive
                      ? "text-white drop-shadow-sm font-extrabold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                      : "text-white/95 hover:text-white hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white/80 after:transition-all after:duration-200"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Get Quote Button */}
          <div className="hidden lg:flex items-center">
            {onQuoteClick ? (
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center px-6 py-2 border-2 border-white text-white font-bold text-sm tracking-wider uppercase rounded-xs hover:bg-white hover:text-[#FC6D15] transition-all duration-200 shadow-sm active:scale-95"
              >
                {t.nav.getQuote}
              </button>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2 border-2 border-white text-white font-bold text-sm tracking-wider uppercase rounded-xs hover:bg-white hover:text-[#FC6D15] transition-all duration-200 shadow-sm active:scale-95"
              >
                {t.nav.getQuote}
              </Link>
            )}
          </div>

          {/* Mobile Bar View (Quick Quote link for small devices when collapsed) */}
          <div className="flex lg:hidden items-center justify-between w-full py-2">
            <span className="text-white text-xs font-bold tracking-wider uppercase">
              ANDRADE TRIM & CABINET
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-3.5 py-1.5 border border-white text-white text-xs font-bold uppercase rounded hover:bg-white hover:text-[#FC6D15] transition-colors"
            >
              {t.nav.getQuote}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Collapsible Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#e55e0c] border-t border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onCloseMobile}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-bold tracking-wider uppercase transition-colors ${
                    isActive
                      ? "bg-white text-[#FC6D15]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-75" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Language Selector (suauto-honduras style) */}
          <div className="flex items-center justify-between border-t border-white/20 py-3 my-2 px-1">
            <span className="text-xs font-bold text-white/90 uppercase flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> {language === "es" ? "Idioma" : "Language"}
            </span>
            <div className="flex bg-black/25 border border-white/20 rounded-lg p-0.5 text-xs font-bold">
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded-md transition cursor-pointer ${
                  language === "es"
                    ? "bg-white text-[#FC6D15] font-black shadow-xs"
                    : "text-white/80 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-md transition cursor-pointer ${
                  language === "en"
                    ? "bg-white text-[#FC6D15] font-black shadow-xs"
                    : "text-white/80 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-white/20">
            <Link
              href="/contact"
              onClick={onCloseMobile}
              className="w-full flex items-center justify-center py-3 bg-white text-[#FC6D15] font-bold text-sm tracking-wider uppercase rounded shadow hover:bg-gray-100 transition-colors"
            >
              {t.nav.getQuoteNow}
            </Link>
          </div>

          {/* Mobile contact & hours breakdown */}
          <div className="pt-3 border-t border-white/15 space-y-2.5 text-xs text-white/90">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
              <a
                href="https://maps.google.com/?q=1329+County+Road+278+Building+475A+Melissa+TX+75454"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                {t.nav.addressShort}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-white flex-shrink-0" />
              <span>{t.nav.serviceAreasVal}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-white" />
              <a href="tel:4693581011" className="underline hover:text-white">
                {t.nav.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-white" />
              <a
                href="mailto:info@andradecustomtrim.com"
                className="underline hover:text-white"
              >
                {t.nav.email}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-white" />
              <span>{t.nav.workingHoursVal}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
