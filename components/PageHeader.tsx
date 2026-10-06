import React from "react";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  image?: string;
  subtitle?: string;
}

export default function PageHeader({
  title,
  image = "/images/header01.webp",
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="relative isolate text-white py-24 sm:py-32 lg:py-36 min-h-[340px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={`${title} - Andrade Custom Trim`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-20 scale-105 transition-transform duration-1000 ease-out"
      />

      {/* Darkening Gradient Overlay for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75 -z-10" />

      {/* Header Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        {subtitle && (
          <span className="text-[#FC6D15] font-bold text-xs sm:text-sm tracking-widest uppercase">
            {subtitle}
          </span>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          {title}
        </h1>
      </div>
    </section>
  );
}
