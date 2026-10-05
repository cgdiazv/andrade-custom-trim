import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: "trim-work",
    title: "TRIM WORK",
    image: "/projects/img28.webp",
    description:
      "The little details make a big difference! From elegant crown molding to baseboards and wainscoting, we add character and charm to any room. Our expert trim work brings a polished, finished look to your home, elevating your space with precision and craftsmanship.",
  },
  {
    id: "finish-carpentry",
    title: "FINISH CARPENTRY",
    image: "/images/finish_carpentry.webp",
    description:
      "From repairs to custom woodwork, we handle a variety of general carpentry projects. Whether you're updating your home, fixing worn-out woodwork, or bringing a new idea to life, we're here to make it happen with quality workmanship and attention to detail.",
  },
  {
    id: "custom-cabinets",
    title: "CUSTOM CABINETS",
    image: "/projects/img27.webp",
    description:
      "Need storage that's both stylish and functional? We design and build custom cabinets tailored to your space, style, and needs. Whether it's a sleek modern kitchen, a cozy built-in for your living room, or a unique storage solution, we craft high-quality cabinetry that fits your vision perfectly.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#f4f5f7] py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col">
            <span className="text-[#FC6D15] font-bold text-sm sm:text-base tracking-wider uppercase mb-2">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Services
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl md:text-left">
            At{" "}
            <strong className="font-bold text-gray-900">
              Andrade Custom Trim
            </strong>
            , we bring craftsmanship, precision, and a passion for woodworking to
            every project. Whether you&apos;re looking to enhance your home with
            custom cabinetry, add beautiful trim details, or need expert
            general carpentry work, we&apos;ve got you covered.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12 sm:mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col items-center border border-gray-100/80 group"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title Badge Overlay */}
              <div className="w-[84%] bg-[#f4f5f7] border border-gray-200/70 py-3 px-4 text-center -mt-6 relative z-10 shadow-xs">
                <h3 className="text-[#FC6D15] font-extrabold text-sm sm:text-[15px] tracking-wider uppercase">
                  {service.title}
                </h3>
              </div>

              {/* Description Body */}
              <div className="p-6 sm:p-7 pt-5 text-center flex-1 flex flex-col justify-start">
                <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#FC6D15] text-[#FC6D15] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xs hover:bg-[#FC6D15] hover:text-white transition-all duration-200 shadow-xs"
          >
            ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}
