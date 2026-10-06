"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Custom Closets" | "Custom Cabinets" | "Trim & Molding" | "Ceilings & Beams";
  image: string;
}

const projects: ProjectItem[] = [
  // Custom Closets
  {
    id: "closet-1",
    title: "White Oak Master Closet Island & Built-Ins",
    category: "Custom Closets",
    image: "/projects/luxury-walk-in-closet-island-white-oak-built-ins.jpg",
  },
  {
    id: "closet-2",
    title: "Custom Island with Integrated LED Lighting",
    category: "Custom Closets",
    image: "/projects/luxury-walk-in-closet-island-with-integrated-lighting.jpeg",
  },
  {
    id: "closet-3",
    title: "Secret Bookshelf Door & Walk-In Wardrobe",
    category: "Custom Closets",
    image: "/projects/hidden-bookshelf-door-secret-room-custom-white-closet.jpg",
  },
  {
    id: "closet-4",
    title: "Custom White Walk-In with Brass Hardware",
    category: "Custom Closets",
    image: "/projects/custom-walk-in-closet-white-drawers-gold-knobs.jpg",
  },
  {
    id: "closet-5",
    title: "Integrated Makeup Vanity & Storage System",
    category: "Custom Closets",
    image: "/projects/luxury-custom-closet-vanity-with-lighted-mirror-and-built-in-storage.jpeg",
  },
  {
    id: "closet-6",
    title: "White Oak Glass Door Wardrobe",
    category: "Custom Closets",
    image: "/projects/custom-white-oak-closet-glass-doors-integrated-lighting.jpg",
  },
  {
    id: "closet-7",
    title: "Custom Double-Tier Closet Shelving & Rods",
    category: "Custom Closets",
    image: "/projects/img31.webp",
  },
  {
    id: "closet-8",
    title: "Tailored Taupe Closet with Soft-Close Drawers",
    category: "Custom Closets",
    image: "/projects/custom-taupe-closet-drawers-with-polished-gold-hardware.jpeg",
  },

  // Custom Cabinets
  {
    id: "cabinet-1",
    title: "Modern Luxury Kitchen Cabinetry & Island",
    category: "Custom Cabinets",
    image: "/projects/img27.webp",
  },
  {
    id: "cabinet-2",
    title: "Custom Dark Teal Office Built-Ins & Desk",
    category: "Custom Cabinets",
    image: "/projects/dark-teal-home-office-built-in-desk-bookshelf.jpg",
  },
  {
    id: "cabinet-3",
    title: "Reeded Glass Pantry Cabinets with Gold Pulls",
    category: "Custom Cabinets",
    image: "/projects/modern-black-pantry-cabinets-reeded-glass-gold-hardware.jpg",
  },
  {
    id: "cabinet-4",
    title: "Custom Blue Laundry Room Cabinets & Farmhouse Sink",
    category: "Custom Cabinets",
    image: "/projects/blue-custom-laundry-cabinets-hanging-rod-farmhouse-sink.jpg",
  },
  {
    id: "cabinet-5",
    title: "Dark Oak Living Room Built-In Entertainment Unit",
    category: "Custom Cabinets",
    image: "/projects/dark-oak-custom-built-in-cabinetry-with-shelves.jpeg",
  },
  {
    id: "cabinet-6",
    title: "Custom Mudroom Lockers with Built-In Bench",
    category: "Custom Cabinets",
    image: "/projects/custom-mudroom-lockers-built-in-bench-gray-cabinetry.jpg",
  },
  {
    id: "cabinet-7",
    title: "Contemporary Matte Black Kitchen Cabinetry",
    category: "Custom Cabinets",
    image: "/projects/modern-black-kitchen-cabinets-with-teal-subway-tile-backsplash.jpeg",
  },
  {
    id: "cabinet-8",
    title: "Tailored Laundry Cabinetry with Marble Surfaces",
    category: "Custom Cabinets",
    image: "/projects/luxury-laundry-room-stacked-washer-dryer-marble-tile.jpg",
  },

  // Trim & Molding
  {
    id: "trim-1",
    title: "Deep Green Picture Frame Wall Molding",
    category: "Trim & Molding",
    image: "/projects/dark-green-accent-wall-picture-frame-molding-office.jpeg",
  },
  {
    id: "trim-2",
    title: "Architectural Wainscoting & Custom Wall Paneling",
    category: "Trim & Molding",
    image: "/projects/elegant-wall-paneling-wainscoting-white-interior-design.jpg",
  },
  {
    id: "trim-3",
    title: "Formal Dining Room Wainscoting Panels",
    category: "Trim & Molding",
    image: "/projects/formal-dining-room-white-wainscoting-gold-chandelier.jpg",
  },
  {
    id: "trim-4",
    title: "Custom Board and Batten Bedroom Accent",
    category: "Trim & Molding",
    image: "/projects/light-blue-board-and-batten-wainscoting-bedroom.jpeg",
  },
  {
    id: "trim-5",
    title: "Architectural Window Casing & Stairwell Trim",
    category: "Trim & Molding",
    image: "/projects/stairwell-window-architectural-trim-natural-light.jpg",
  },

  // Ceilings & Beams
  {
    id: "ceiling-1",
    title: "Coffered Ceiling Beams in Open Living Room",
    category: "Ceilings & Beams",
    image: "/projects/open-concept-living-room-white-coffered-ceiling-beams.jpeg",
  },
  {
    id: "ceiling-2",
    title: "Vaulted Ceiling Exposed Wood Beams",
    category: "Ceilings & Beams",
    image: "/projects/primary-bedroom-vaulted-ceiling-exposed-beams-luxury.jpeg",
  },
  {
    id: "ceiling-3",
    title: "Rustic Dark Timber Ceiling Beams",
    category: "Ceilings & Beams",
    image: "/projects/open-concept-living-room-dark-wood-ceiling-beams.jpg",
  },
  {
    id: "ceiling-4",
    title: "Vaulted Living Room Beams & Fireplace Accent",
    category: "Ceilings & Beams",
    image: "/projects/modern-living-room-vaulted-ceiling-dark-beams-fireplace.jpg",
  },
];

const categories = [
  "All",
  "Custom Closets",
  "Custom Cabinets",
  "Trim & Molding",
  "Ceilings & Beams",
] as const;

type Category = (typeof categories)[number];

export default function ProjectsGallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const categoryLabels: Record<Category, string> = {
    All: t.projectsPage.categories.all,
    "Custom Closets": t.projectsPage.categories.closets,
    "Custom Cabinets": t.projectsPage.categories.cabinets,
    "Trim & Molding": t.projectsPage.categories.trim,
    "Ceilings & Beams": t.projectsPage.categories.ceilings,
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedProjectIndex(index);
  };

  const closeLightbox = () => {
    setSelectedProjectIndex(null);
  };

  const showPrev = useCallback(() => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  }, [selectedProjectIndex, filteredProjects.length]);

  const showNext = useCallback(() => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredProjects.length
    );
  }, [selectedProjectIndex, filteredProjects.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProjectIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIndex, showPrev, showNext]);

  return (
    <div className="w-full">
      {/* Category Filter Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? projects.length
              : projects.filter((p) => p.category === cat).length;
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setSelectedProjectIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#FC6D15] text-white shadow-md shadow-[#FC6D15]/25"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#FC6D15] hover:text-[#FC6D15]"
              }`}
            >
              {categoryLabels[cat]} <span className="opacity-75 font-normal ml-1">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => openLightbox(idx)}
            className="group relative bg-white border border-gray-100 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer rounded-xs"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="inline-block self-start px-2.5 py-1 mb-2 bg-[#FC6D15] text-white text-[11px] font-bold uppercase tracking-wider rounded-xs">
                  {categoryLabels[project.category]}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-sm leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-3 text-xs text-white/90 font-medium">
                  <Eye className="w-4 h-4 text-[#FC6D15]" />
                  <span>Click to view photo</span>
                </div>
              </div>
            </div>

            {/* Static Card Caption (visible without hovering for great accessibility) */}
            <div className="p-4 sm:p-5 flex flex-col justify-between border-t border-gray-50">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold tracking-wider text-[#FC6D15] uppercase">
                  {project.category}
                </span>
                <Layers className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FC6D15] transition-colors" />
              </div>
              <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 group-hover:text-[#FC6D15] transition-colors line-clamp-1">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProjectIndex !== null && filteredProjects[selectedProjectIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            aria-label="Close image preview"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-sm transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {filteredProjects.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 sm:left-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors z-50 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors z-50 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Active Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] overflow-hidden rounded-xs shadow-2xl">
              <Image
                src={filteredProjects[selectedProjectIndex].image}
                alt={filteredProjects[selectedProjectIndex].title}
                fill
                priority
                sizes="90vw"
                className="object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 text-center text-white px-4">
              <span className="inline-block text-[#FC6D15] font-bold text-xs uppercase tracking-widest mb-1">
                {categoryLabels[filteredProjects[selectedProjectIndex].category]}
              </span>
              <h2 className="text-base sm:text-xl font-bold">
                {filteredProjects[selectedProjectIndex].title}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {selectedProjectIndex + 1} of {filteredProjects.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
