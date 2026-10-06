"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <Image
          src="/images/back02.webp"
          alt="Wood logs texture background"
          fill
          sizes="100vw"
          className="object-cover object-center -z-20"
        />
        {/* Darkening tint to ensure high contrast and readability */}
        <div className="absolute inset-0 bg-black/85 -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Column 1: Andrade Custom Trim & BBB Badge */}
            <div className="flex flex-col items-start">
              <h3 className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase">
                {t.footer.brandDesc}
              </h3>
              <div className="w-12 h-[3px] bg-[#FC6D15] mt-2 mb-6" />

              {/* BBB Accreditation Seal */}
              <a
                href="https://www.bbb.org/us/tx/allen/profile/finish-carpentry/andrade-custom-trim-0875-91345914/#sealclick"
                target="_blank"
                rel="nofollow"
                className="inline-block transition-opacity hover:opacity-90"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://seal-southplains.bbb.org/seals/blue-seal-200-42-bbb-91345914.png"
                  style={{ border: 0 }}
                  alt="Andrade Custom Trim BBB Business Review"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </a>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-start">
              <h3 className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase">
                {t.footer.quickLinks}
              </h3>
              <div className="w-12 h-[3px] bg-[#FC6D15] mt-2 mb-6" />

              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-white/90 hover:text-[#FC6D15] transition-colors font-medium"
                  >
                    {t.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/90 hover:text-[#FC6D15] transition-colors font-medium"
                  >
                    {t.footer.services}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-white/90 hover:text-[#FC6D15] transition-colors font-medium"
                  >
                    {t.footer.projects}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/90 hover:text-[#FC6D15] transition-colors font-medium"
                  >
                    {t.footer.contact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="flex flex-col items-start">
              <h3 className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase">
                {t.footer.contactUs}
              </h3>
              <div className="w-12 h-[3px] bg-[#FC6D15] mt-2 mb-6" />

              <ul className="space-y-3 text-sm text-white/90 font-medium">
                <li>
                  <a
                    href="tel:4693581011"
                    className="hover:text-[#FC6D15] transition-colors"
                  >
                    {t.footer.phone}
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@andradecustomtrim.com"
                    className="hover:text-[#FC6D15] transition-colors break-all"
                  >
                    {t.footer.email}
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=1329+County+Road+278+Building+475A+Melissa+TX+75454"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FC6D15] transition-colors block text-white/85 leading-snug"
                  >
                    1329 County Road 278
                    <br />
                    {t.footer.addressBldg}
                    <br />
                    {t.footer.addressCity}
                  </a>
                </li>
                <li>{t.footer.serviceArea}</li>
                <li>{t.footer.hours}</li>
              </ul>
            </div>

            {/* Column 4: Recent Posts */}
            <div className="flex flex-col items-start">
              <h3 className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase">
                {t.footer.recentPosts}
              </h3>
              <div className="w-12 h-[3px] bg-[#FC6D15] mt-2 mb-6" />

              <Link
                href="/projects"
                className="text-white/90 hover:text-[#FC6D15] text-sm font-medium leading-relaxed transition-colors"
              >
                {t.footer.recentPostTitle}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Copyright & Credits Bar */}
      <div className="bg-[#0b0b0b] border-t border-white/10 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-zinc-400">
          <p>{t.footer.copyright}</p>
          <p>
            <a
              href="https://indevasa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {t.footer.webCredits}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
