"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import TrimWorkSection from "@/components/TrimWorkSection";
import FinishCarpentrySection from "@/components/FinishCarpentrySection";
import CustomCabinetsSection from "@/components/CustomCabinetsSection";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner using header01.webp */}
      <PageHeader title={t.servicesPage.pageTitle} image="/images/header01.webp" />

      {/* Trim Work Section */}
      <TrimWorkSection />

      {/* Finish Carpentry Section */}
      <FinishCarpentrySection />

      {/* Custom Cabinets Section */}
      <CustomCabinetsSection />
    </div>
  );
}
