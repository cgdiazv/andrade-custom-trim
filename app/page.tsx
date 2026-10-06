import Link from "next/link";
import Image from "next/image";
import WhoWeAre from "@/components/WhoWeAre";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with header01.webp Background */}
      <section className="relative isolate text-white py-28 sm:py-36 lg:py-44 px-6 lg:px-8 overflow-hidden min-h-[550px] sm:min-h-[620px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/images/header01.webp"
          alt="Andrade Custom Trim & Cabinetry"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center -z-20 scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Subtle, Warm Overlay to showcase the beautiful closet craftsmanship while keeping text sharp */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50 -z-10" />

        <div className="max-w-5xl mx-auto text-center space-y-8 drop-shadow-md">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Master Craftsmanship for Custom Trim & Cabinets
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white font-medium leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Delivering superior finish carpentry, custom cabinetry, crown molding, and architectural woodwork across DFW with unmatched precision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FC6D15] text-white font-bold text-sm tracking-wider uppercase rounded-xs hover:bg-[#e55e0c] transition-colors shadow-lg shadow-[#FC6D15]/30"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-white/80 text-white font-bold text-sm tracking-wider uppercase rounded-xs hover:bg-white hover:text-black transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* What We Do / Our Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  );
}
