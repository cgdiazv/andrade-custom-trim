"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone, Mail, MapPin, Clock, Globe, X } from "lucide-react";
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

  // Desktop navigation links
  const desktopNavLinks: MenuItem[] = [
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.contact, href: "/contact" },
  ];

  // Mobile drawer navigation links (including Home)
  const mobileNavLinks: MenuItem[] = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.contact, href: "/contact" },
  ];

  // Lock body scroll and handle Escape key when mobile drawer is open
  useEffect(() => {
    if (!isMobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onCloseMobile) {
        onCloseMobile();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileOpen, onCloseMobile]);

  return (
    <>
      <nav
        className="w-full bg-[#FC6D15] shadow-md relative z-30"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-10">
              {desktopNavLinks.map((item) => {
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
                  className="inline-flex items-center justify-center px-6 py-2 border-2 border-white text-white font-bold text-sm tracking-wider uppercase rounded-xs hover:bg-white hover:text-[#FC6D15] transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
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
      </nav>

      {/* Mobile Side Drawer Menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          isMobileOpen ? "visible" : "invisible pointer-events-none"
        }`}
        aria-modal="true"
        role="dialog"
      >
        {/* Backdrop Overlay */}
        <div
          onClick={onCloseMobile}
          className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out cursor-pointer ${
            isMobileOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Side Drawer Panel (Slides in from the right) */}
        <aside
          className={`fixed inset-y-0 right-0 w-[85vw] max-w-sm h-full bg-white text-gray-900 shadow-2xl border-l border-gray-100 flex flex-col z-10 transition-transform duration-300 ease-in-out transform ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header with Close Button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/80">
            <div className="flex flex-col">
              <span className="text-xs font-extrabold tracking-widest text-gray-900 uppercase">
                ANDRADE CUSTOM TRIM
              </span>
              <span className="text-[10px] font-semibold text-[#FC6D15] tracking-widest uppercase">
                Carpentry & Cabinets
              </span>
            </div>
            <button
              type="button"
              onClick={onCloseMobile}
              className="p-2 -mr-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {mobileNavLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onCloseMobile}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-bold tracking-wider uppercase transition-all duration-150 ${
                      isActive
                        ? "bg-[#FC6D15] text-white shadow-md shadow-[#FC6D15]/20 font-extrabold"
                        : "text-gray-700 hover:bg-orange-50/80 hover:text-[#FC6D15]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight
                      className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Prominent CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={onCloseMobile}
                className="w-full flex items-center justify-center py-3.5 px-4 bg-[#FC6D15] hover:bg-[#e55e0c] text-white font-extrabold text-sm tracking-wider uppercase rounded-xs shadow-lg shadow-[#FC6D15]/25 transition-all text-center"
              >
                {t.nav.getQuoteNow}
              </Link>
            </div>

            {/* Language Selector */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xs font-bold text-gray-700 uppercase flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#FC6D15]" />
                {language === "es" ? "Idioma" : "Language"}
              </span>
              <div className="flex bg-gray-200/80 border border-gray-300/80 rounded-lg p-0.5 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setLanguage("es")}
                  className={`px-3 py-1 rounded-md transition cursor-pointer ${
                    language === "es"
                      ? "bg-white text-[#FC6D15] font-black shadow-xs"
                      : "text-gray-600 hover:text-gray-900"
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
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="pt-2 space-y-3 border-t border-gray-100 text-xs text-gray-600">
              <a
                href="tel:4693581011"
                className="flex items-center space-x-3 text-gray-800 hover:text-[#FC6D15] transition-colors py-1 group"
              >
                <div className="w-8 h-8 rounded-full bg-orange-50 group-hover:bg-[#FC6D15] group-hover:text-white flex items-center justify-center text-[#FC6D15] shrink-0 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold text-gray-900">(469) 358-1011</span>
              </a>

              <a
                href="mailto:info@andradecustomtrim.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-[#FC6D15] transition-colors py-1 group"
              >
                <div className="w-8 h-8 rounded-full bg-orange-50 group-hover:bg-[#FC6D15] group-hover:text-white flex items-center justify-center text-[#FC6D15] shrink-0 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">info@andradecustomtrim.com</span>
              </a>

              <div className="flex items-start space-x-3 py-1">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#FC6D15] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-gray-900">
                    {t.nav.serviceAreasVal}
                  </span>
                  <span className="text-[11px] text-gray-500">
                    {t.nav.addressShort}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 py-1">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#FC6D15] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-gray-700">{t.nav.workingHoursVal}</span>
              </div>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="px-5 py-3.5 border-t border-gray-100 bg-gray-50 text-center text-[11px] text-gray-500">
            © 2026 Andrade Custom Trim
          </div>
        </aside>
      </div>
    </>
  );
}
