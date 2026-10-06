"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function FinishCarpentrySection() {
  const { t } = useLanguage();
  const data = t.servicesPage.finishCarpentry;

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Content (Desktop Left, Mobile Below Image) */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FC6D15] tracking-wide uppercase mb-4 sm:mb-5">
              {data.title}
            </h2>

            <p className="text-gray-600 text-sm sm:text-[15px] lg:text-base leading-relaxed mb-6 sm:mb-8">
              {data.description}
            </p>

            {/* Bullet List */}
            <ul className="space-y-3 w-full">
              {data.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-gray-700 text-sm sm:text-[15px] leading-snug"
                >
                  <span className="text-gray-900 font-bold text-base leading-tight select-none">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Image (Desktop Right, Mobile Above Content) */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden shadow-xs order-1 lg:order-2">
            <Image
              src="/images/finish_carpentry.webp"
              alt="Finish Carpentry - Crown Molding and Architectural Woodwork"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
