import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ProjectsGallery from "@/components/ProjectsGallery";

export const metadata: Metadata = {
  title: "Projects | Andrade Custom Trim",
  description:
    "Explore our portfolio of handcrafted custom cabinetry, master walk-in closets, architectural trim work, crown molding, and ceiling beams across Dallas & Fort Worth.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner using header01.webp (same image as other inner pages) */}
      <PageHeader title="Projects" image="/images/header01.webp" />

      {/* Main Gallery Section */}
      <section className="w-full bg-[#f9fafb] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#FC6D15] font-bold text-sm sm:text-base tracking-wider uppercase mb-2 block">
              PORTFOLIO OF EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Our Featured Work
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-[17px] leading-relaxed">
              Every home deserves exceptional craftsmanship. Browse our latest
              finish carpentry, custom cabinetry, master closet systems, and
              architectural trim projects built across Dallas & Fort Worth.
            </p>
          </div>

          {/* Interactive Category Filter + Gallery Grid */}
          <ProjectsGallery />
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="w-full bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#FC6D15] font-bold text-xs sm:text-sm tracking-widest uppercase">
            START YOUR TRANSFORMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Have a Custom Woodworking Project in Mind?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From modern custom cabinetry to intricate trim and closet systems,
            let our team bring your ideas to life with unmatched precision and care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#FC6D15] text-white font-bold text-sm tracking-wider uppercase rounded-xs hover:bg-[#e55e0c] transition-colors shadow-lg shadow-[#FC6D15]/25"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="tel:4693581011"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#FC6D15] text-[#FC6D15] font-bold text-sm tracking-wider uppercase rounded-xs hover:bg-[#FC6D15] hover:text-white transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>(469) 358-1011</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
