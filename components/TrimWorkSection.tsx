import React from "react";
import Image from "next/image";

export default function TrimWorkSection() {
  const leftColumnItems = [
    "Baseboards",
    "Crown Molding",
    "Interior and Exterior Doors",
    "General Shelving for closets and Pantry",
    "Hardware Installation",
    "Windowsills",
    "Wainscoting",
  ];

  const rightColumnItems = [
    "Fireplace Mantel",
    "Ship Lap",
    "Accent Walls",
    "Slat Walls",
    "Beams",
    "Tongue and Groove",
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden shadow-xs">
            <Image
              src="/images/img31.webp"
              alt="Custom Trim Work and Closets"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FC6D15] tracking-wide uppercase mb-4 sm:mb-5">
              TRIM WORK
            </h2>

            <p className="text-gray-600 text-sm sm:text-[15px] lg:text-base leading-relaxed mb-6 sm:mb-8">
              The little details make a big difference! From elegant crown
              molding to baseboards and wainscoting, we add character and charm to
              any room. Our expert trim work brings a polished, finished look to
              your home, elevating your space with precision and craftsmanship.
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
      </div>
    </section>
  );
}
