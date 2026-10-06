import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TrimWorkSection from "@/components/TrimWorkSection";
import FinishCarpentrySection from "@/components/FinishCarpentrySection";
import CustomCabinetsSection from "@/components/CustomCabinetsSection";

export const metadata: Metadata = {
  title: "Services | Andrade Custom Trim",
  description:
    "Explore our custom trim work, finish carpentry, and handcrafted cabinetry services across Dallas and Fort Worth.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner using header01.webp */}
      <PageHeader title="Services" image="/images/header01.webp" />

      {/* Trim Work Section */}
      <TrimWorkSection />

      {/* Finish Carpentry Section */}
      <FinishCarpentrySection />

      {/* Custom Cabinets Section */}
      <CustomCabinetsSection />
    </div>
  );
}
