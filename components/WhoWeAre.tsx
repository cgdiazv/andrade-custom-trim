"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhoWeAre() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Image */}
          <div className="relative w-full overflow-hidden shadow-sm">
            <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] xl:aspect-[5/4]">
              <Image
                src="/images/img05.webp"
                alt="Andrade Custom Trim - Handcrafted kitchen and woodwork"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left">
            {/* Tagline */}
            <span className="text-[#FC6D15] font-bold text-sm sm:text-base tracking-wider uppercase mb-3">
              {t.whoWeAre.tagline}
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-6">
              {t.whoWeAre.titlePre}
              <span className="text-[#FC6D15]">{t.whoWeAre.craftsmanship}</span>
              <br />
              {t.whoWeAre.titleMid}
              <span className="text-[#FC6D15]">{t.whoWeAre.passion}</span>
              {t.whoWeAre.titlePost}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed mb-8">
              {t.whoWeAre.description}
            </p>

            {/* Feature Bullet Points */}
            <ul className="space-y-4 mb-10 w-full">
              {t.whoWeAre.features.map((item) => (
                <li key={item} className="flex items-center space-x-3.5">
                  <div className="flex-shrink-0 text-[#FC6D15]">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                  <span className="font-bold text-gray-900 text-base sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#FC6D15] text-[#FC6D15] font-bold text-sm tracking-wider uppercase rounded-xs hover:bg-[#FC6D15] hover:text-white transition-all duration-200 shadow-xs"
            >
              {t.whoWeAre.knowMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
