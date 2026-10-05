import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";

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

      {/* Services Grid & Overview */}
      <ServicesSection />
    </div>
  );
}
