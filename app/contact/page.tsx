"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Check, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

const serviceCities = [
  "Melissa",
  "Dallas",
  "Fort Worth",
  "Allen",
  "Plano",
  "Frisco",
  "McKinney",
  "Prosper",
  "Southlake",
  "Carrollton",
  "Richardson",
  "Coppell",
  "Flower Mound",
  "Highland Park",
  "University Park",
  "Lewisville",
  "Grapevine",
  "Rockwall",
  "Garland",
];

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contactPage;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner using header01.webp (same image as other inner pages) */}
      <PageHeader title={c.pageTitle} image="/images/header01.webp" />

      {/* Quick Contact Cards */}
      <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <a
              href="tel:4693581011"
              className="bg-white p-6 sm:p-7 border border-gray-100 shadow-2xs hover:shadow-md transition-all duration-300 rounded-xs flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-full bg-[#FC6D15]/10 text-[#FC6D15] flex items-center justify-center mb-4 group-hover:bg-[#FC6D15] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                {c.quickCards.phoneTitle}
              </span>
              <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-[#FC6D15] transition-colors">
                (469) 358-1011
              </h3>
              <p className="text-xs text-gray-500 mt-1">{c.quickCards.phoneSub}</p>
            </a>

            {/* Email Card */}
            <a
              href="mailto:info@andradecustomtrim.com"
              className="bg-white p-6 sm:p-7 border border-gray-100 shadow-2xs hover:shadow-md transition-all duration-300 rounded-xs flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-full bg-[#FC6D15]/10 text-[#FC6D15] flex items-center justify-center mb-4 group-hover:bg-[#FC6D15] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                {c.quickCards.emailTitle}
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 group-hover:text-[#FC6D15] transition-colors break-all">
                info@andradecustomtrim.com
              </h3>
              <p className="text-xs text-gray-500 mt-1">{c.quickCards.emailSub}</p>
            </a>

            {/* Business Address Card */}
            <a
              href="https://maps.google.com/?q=1329+County+Road+278+Building+475A+Melissa+TX+75454"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 sm:p-7 border border-gray-100 shadow-2xs hover:shadow-md transition-all duration-300 rounded-xs flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-full bg-[#FC6D15]/10 text-[#FC6D15] flex items-center justify-center mb-4 group-hover:bg-[#FC6D15] group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                {c.quickCards.locationTitle}
              </span>
              <h3 className="text-base font-extrabold text-gray-900 group-hover:text-[#FC6D15] transition-colors leading-tight">
                {c.quickCards.addressLine1}
                <span className="block text-xs font-semibold text-gray-500 mt-0.5">
                  {c.quickCards.building}
                </span>
              </h3>
              <p className="text-xs text-gray-500 mt-1">{c.quickCards.cityStateZip}</p>
            </a>

            {/* Hours Card */}
            <div className="bg-white p-6 sm:p-7 border border-gray-100 shadow-2xs rounded-xs flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#FC6D15]/10 text-[#FC6D15] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                {c.quickCards.hoursTitle}
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-gray-900">
                {c.quickCards.hoursVal}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{c.quickCards.hoursSub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Information Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Information & Trust Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Call Box */}
              <div className="bg-[#141414] text-white p-7 sm:p-9 rounded-xs shadow-md space-y-4">
                <span className="text-[#FC6D15] font-bold text-xs uppercase tracking-widest block">
                  {c.directCall.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {c.directCall.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {c.directCall.description}
                </p>
                <div className="pt-2">
                  <a
                    href="tel:4693581011"
                    className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#FC6D15] text-white font-bold text-sm uppercase tracking-wider rounded-xs hover:bg-[#e55e0c] transition-colors shadow-lg shadow-[#FC6D15]/25"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{c.directCall.btn}</span>
                  </a>
                </div>
              </div>

              {/* Quality & Trust Box */}
              <div className="bg-[#f9fafb] p-7 sm:p-8 rounded-xs border border-gray-100 space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 uppercase tracking-wide mb-1">
                    {c.expectations.title}
                  </h4>
                  <div className="w-10 h-0.5 bg-[#FC6D15]" />
                </div>

                <ul className="space-y-4 text-sm text-gray-700">
                  {c.expectations.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="text-[#FC6D15] flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span>
                        <strong className="text-gray-900">{item.bold}</strong>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* BBB Accreditation Badge */}
                <div className="pt-4 border-t border-gray-200/70 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    <span>{c.expectations.bbbAccredited}</span>
                  </div>
                  <a
                    href="https://www.bbb.org/us/tx/allen/profile/finish-carpentry/andrade-custom-trim-0875-91345914/#sealclick"
                    target="_blank"
                    rel="nofollow"
                    className="hover:opacity-85 transition-opacity"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://seal-southplains.bbb.org/seals/blue-seal-200-42-bbb-91345914.png"
                      alt="BBB Accredited Business"
                      className="h-9 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map & Directions Section */}
      <section className="w-full bg-white pb-16 sm:pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8f9fa] border border-gray-200/80 rounded-xs overflow-hidden shadow-2xs">
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200/80 bg-white">
              <div>
                <span className="text-xs font-bold text-[#FC6D15] uppercase tracking-wider block mb-1">
                  {c.mapSection.tagline}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                  {c.mapSection.address}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {c.mapSection.subtext}
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=1329+County+Road+278+Building+475A+Melissa+TX+75454"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FC6D15] hover:bg-[#e55e0c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0 shadow-xs"
              >
                <MapPin className="w-4 h-4" />
                <span>{c.mapSection.getDirections}</span>
              </a>
            </div>
            <div className="w-full h-80 sm:h-96 relative">
              <iframe
                title="Andrade Custom Trim Workshop & Office Location"
                src="https://maps.google.com/maps?q=1329+County+Road+278+Building+475A+Melissa+TX+75454&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-[#FC6D15] font-bold text-xs sm:text-sm tracking-widest uppercase">
              {c.serviceAreasSection.tagline}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {c.serviceAreasSection.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {c.serviceAreasSection.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {serviceCities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-xs sm:text-sm font-semibold rounded-full shadow-2xs hover:border-[#FC6D15] hover:text-[#FC6D15] transition-colors"
              >
                <Sparkles className="w-3 h-3 text-[#FC6D15]" />
                {city}, TX
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
