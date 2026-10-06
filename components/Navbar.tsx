"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Globe, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onToggleMobileMenu?: () => void;
  isMobileMenuOpen?: boolean;
}

export default function Navbar({
  onToggleMobileMenu,
  isMobileMenuOpen,
}: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center group transition-transform duration-200 hover:scale-[1.01]"
            aria-label="Andrade Trim and Cabinet - Home"
          >
            <div className="relative w-36 sm:w-44 md:w-52 h-16 sm:h-20">
              <Image
                src="/logo.webp"
                alt="Andrade Trim and Cabinet Logo"
                fill
                priority
                sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 210px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Info Items */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {/* Service Areas */}
            <div className="flex items-center space-x-3 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[#FC6D15]">
                <MapPin className="w-8 h-8 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13px] font-extrabold tracking-wider text-gray-900 uppercase">
                  {t.nav.serviceAreas}
                </span>
                <span className="text-[13px] font-medium text-gray-500">
                  {t.nav.serviceAreasVal}
                </span>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="flex items-center space-x-3 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[#FC6D15]">
                <Globe className="w-8 h-8 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <a
                  href="tel:4693581011"
                  className="text-[13px] font-extrabold tracking-wider text-gray-900 hover:text-[#FC6D15] transition-colors"
                >
                  (469) 358-1011
                </a>
                <a
                  href="mailto:info@andradecustomtrim.com"
                  className="text-[13px] font-medium text-gray-500 hover:text-[#FC6D15] transition-colors"
                >
                  info@andradecustomtrim.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center space-x-3 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[#FC6D15]">
                <Clock className="w-8 h-8 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13px] font-extrabold tracking-wider text-gray-900 uppercase">
                  {t.nav.workingHours}
                </span>
                <span className="text-[13px] font-medium text-gray-500">
                  {t.nav.workingHoursVal}
                </span>
              </div>
            </div>

            {/* Language Selector (suauto-honduras style) */}
            <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg p-1 text-xs font-bold text-gray-500 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-gray-400 ml-1" />
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 rounded-md transition cursor-pointer ${
                  language === "es"
                    ? "bg-white text-[#FC6D15] shadow-xs font-black"
                    : "hover:text-gray-800"
                }`}
                aria-label="Cambiar a Español"
              >
                ESP
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-md transition cursor-pointer ${
                  language === "en"
                    ? "bg-white text-[#FC6D15] shadow-xs font-black"
                    : "hover:text-gray-800"
                }`}
                aria-label="Switch to English"
              >
                ENG
              </button>
            </div>
          </div>

          {/* Mobile Right Controls: Language Selector, Call Button & Hamburger */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Mobile Language Toggle */}
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-0.5 text-xs font-bold text-gray-600">
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 rounded-md transition cursor-pointer ${
                  language === "es"
                    ? "bg-white text-[#FC6D15] shadow-xs font-black"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-md transition cursor-pointer ${
                  language === "en"
                    ? "bg-white text-[#FC6D15] shadow-xs font-black"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                EN
              </button>
            </div>

            {/* Direct Phone Call */}
            <a
              href="tel:4693581011"
              aria-label="Call (469) 358-1011"
              className="p-2 text-[#FC6D15] hover:bg-orange-50 rounded-full transition-colors"
            >
              <Phone className="w-5 h-5 stroke-[2.2]" />
            </a>

            {/* Mobile Menu Trigger Button */}
            {onToggleMobileMenu && (
              <button
                type="button"
                onClick={onToggleMobileMenu}
                className="p-2 text-gray-700 hover:text-[#FC6D15] hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC6D15]"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
