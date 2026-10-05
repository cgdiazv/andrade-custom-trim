"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Globe, Clock, ChevronDown, Check } from "lucide-react";

interface NavbarProps {
  onToggleMobileMenu?: () => void;
  isMobileMenuOpen?: boolean;
}

export const languages = [
  { code: "en", label: "English", flag: "🇺🇸", short: "EN" },
  { code: "es", label: "Español", flag: "🇲🇽", short: "ES" },
];

export default function Navbar({
  onToggleMobileMenu,
  isMobileMenuOpen,
}: NavbarProps) {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);

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
                  SERVICE AREAS
                </span>
                <span className="text-[13px] font-medium text-gray-500">
                  Dallas | Fort Worth
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
                  WORKING HOURS
                </span>
                <span className="text-[13px] font-medium text-gray-500">
                  Mon - Sat | 9AM - 7PM
                </span>
              </div>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 py-1.5 px-2.5 rounded-md hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FC6D15]/20"
                aria-expanded={isLangOpen}
                aria-label="Select language"
              >
                <span className="text-xl leading-none" role="img" aria-label={selectedLang.label}>
                  {selectedLang.flag}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLangOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold hover:bg-orange-50 transition-colors ${
                          selectedLang.code === lang.code
                            ? "text-[#FC6D15] bg-orange-50/50"
                            : "text-gray-700"
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span className="text-base">{lang.flag}</span>
                          <span>{lang.label}</span>
                        </span>
                        {selectedLang.code === lang.code && (
                          <Check className="w-3.5 h-3.5 text-[#FC6D15]" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Right Controls: Call Button & Hamburger */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href="tel:4693581011"
              aria-label="Call (469) 358-1011"
              className="p-2 text-[#FC6D15] hover:bg-orange-50 rounded-full transition-colors"
            >
              <Globe className="w-6 h-6" />
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
