"use client";

import React from "react";
import Image from "next/image";
import { partnerBrands } from "@/data/courseData";

export default function BrandsMarquee() {
  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs md:text-sm font-bold tracking-tight text-slate-400 mb-8">
          Trusted By Teams At
        </p>
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="brands-marquee-wrapper py-4">
            <div className="brands-marquee-track flex items-center">
              {/* First loop */}
              <div className="flex items-center shrink-0">
                {partnerBrands.map((brand, i) => (
                  <div key={`brand-1-${i}`} className="flex-shrink-0 px-10 md:px-16">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      width={120}
                      height={40}
                      className="h-8 md:h-10 w-auto transition-all duration-300 object-contain select-none pointer-events-none opacity-80 hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              {/* Second loop for infinite continuity */}
              <div className="flex items-center shrink-0">
                {partnerBrands.map((brand, i) => (
                  <div key={`brand-2-${i}`} className="flex-shrink-0 px-10 md:px-16">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      width={120}
                      height={40}
                      className="h-8 md:h-10 w-auto transition-all duration-300 object-contain select-none pointer-events-none opacity-80 hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
