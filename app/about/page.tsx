"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header / Hero Banner */}
      <PageHeader title={t.about.pageTitle} image="/images/header01.webp" />

      {/* About Us Section: Who We Are & Our Story */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
            {/* Left Column: Who We Are */}
            <div className="flex flex-col items-start text-left">
              <span className="text-[#FC6D15] font-bold text-sm sm:text-base tracking-wider uppercase mb-3">
                {t.about.whoWeAreTag}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-6">
                {t.about.whoWeAreHeadingPre}
                <span className="text-[#FC6D15]">{t.about.craftsmanship}</span>
                <br />
                {t.about.whoWeAreHeadingMid}
                <span className="text-[#FC6D15]">{t.about.passion}</span>
                {t.about.whoWeAreHeadingPost}
              </h2>
              <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed">
                {t.about.whoWeAreDesc}
              </p>
            </div>

            {/* Right Column: Our Story */}
            <div className="flex flex-col items-start text-left pt-2 lg:pt-7">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                {t.about.ourStoryTitle}
              </h3>
              <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed">
                {t.about.ourStoryDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section with back03.webp Background */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/back03.webp"
          alt="Our Mission - Andrade Custom Trim"
          fill
          sizes="100vw"
          className="object-cover object-center -z-20"
        />

        {/* Soft, Light Frosted Overlay so carved wood texture subtly shows through with dark text */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t.about.missionTitle}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {t.about.missionDesc}
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Left Column: Heading, Intro & First 2 Features */}
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                  {t.about.whyChooseUsTitlePre}
                  <span className="text-[#FC6D15]">
                    {t.about.whyChooseUsTitleHighlight}
                  </span>
                  {t.about.whyChooseUsTitlePost}
                </h2>
                <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed">
                  {t.about.whyChooseUsDesc}
                </p>
              </div>

              <div className="space-y-8 pt-2">
                {/* Expert Craftsmanship */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 text-[#FC6D15] mt-1">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#FC6D15]">
                      {t.about.items.craftsmanshipTitle}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                      {t.about.items.craftsmanshipDesc}
                    </p>
                  </div>
                </div>

                {/* Personalized Service */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 text-[#FC6D15] mt-1">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#FC6D15]">
                      {t.about.items.serviceTitle}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                      {t.about.items.serviceDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Next 3 Features */}
            <div className="space-y-8 lg:space-y-10 lg:pt-2">
              {/* Quality Materials */}
              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#FC6D15] mt-1">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FC6D15]">
                    {t.about.items.materialsTitle}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                    {t.about.items.materialsDesc}
                  </p>
                </div>
              </div>

              {/* Reliable & Professional */}
              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#FC6D15] mt-1">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FC6D15]">
                    {t.about.items.reliableTitle}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                    {t.about.items.reliableDesc}
                  </p>
                </div>
              </div>

              {/* Satisfaction Guaranteed */}
              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#FC6D15] mt-1">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FC6D15]">
                    {t.about.items.satisfactionTitle}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                    {t.about.items.satisfactionDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
