import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CustomCabinetsSection() {
  const leftColumnItems = [
    "Kitchen",
    "Pantry",
    "Closets",
    "Bathroom Vanities",
  ];

  const rightColumnItems = [
    "Mud Rooms",
    "Laundry Rooms",
    "Built Ins",
    "Home Office",
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden shadow-xs">
            <Image
              src="/images/img27.webp"
              alt="Custom Cabinets - Modern Kitchen and Woodwork"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FC6D15] tracking-wide uppercase mb-4 sm:mb-5">
              CUSTOM CABINETS
            </h2>

            <p className="text-gray-600 text-sm sm:text-[15px] lg:text-base leading-relaxed mb-6 sm:mb-8">
              Need storage that&apos;s both stylish and functional? We design and
              build custom cabinets tailored to your space, style, and needs.
              Whether it&apos;s a sleek modern kitchen, a cozy built-in for your
              living room, or a unique storage solution, we craft high-quality
              cabinetry that fits your vision perfectly.
            </p>

            {/* 2-Column Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-3.5 w-full">
              <ul className="space-y-3">
                {leftColumnItems.map((item) => (
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

              <ul className="space-y-3">
                {rightColumnItems.map((item) => (
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
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-12 sm:mt-16 lg:mt-20">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#FC6D15] text-[#FC6D15] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xs hover:bg-[#FC6D15] hover:text-white transition-all duration-200 shadow-xs"
          >
            GET FREE QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
}
