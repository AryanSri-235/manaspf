"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { marketingStack } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";

import { useLenis } from "@/components/SmoothScroll";

export default function TechStackMarquee() {
  const { scrollTo } = useLenis();
  const row1 = marketingStack.slice(0, 5);
  const row2 = marketingStack.slice(5, 10);

  return (
    <section
      id="stack-section"
      className="min-h-[85vh] lg:min-h-screen flex flex-col justify-center py-20 bg-slate-50 border-b border-slate-200/80 section-overflow-guard"
    >
      <ScrollReveal>
        <div className="container mx-auto px-6 mb-16 text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Tooling &amp; AI
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-slate-900 tracking-tight">
            My Marketing <span className="text-primary">Stack</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium max-w-xl mx-auto">
            The exact combination of paid advertising networks, AI generators, and analytics engines I use daily.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative flex flex-col gap-6 md:gap-10 overflow-hidden py-4 w-full">
        {/* Gradient edge masks */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Leftward scrolling marquee */}
        <div className="brands-marquee-wrapper">
          <div className="brands-marquee-track flex items-center">
            <div className="flex items-center shrink-0">
              {row1.map((tool, idx) => (
                <div
                  key={`r1-a-${idx}`}
                  className="tool-item flex-shrink-0 flex flex-col items-center gap-2.5 px-4 md:px-6"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white border border-slate-200 rounded-3xl p-4 flex items-center justify-center shadow-sm relative overflow-hidden group">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      width={80}
                      height={80}
                      className="max-w-full max-h-full object-contain pointer-events-none group-hover:scale-110 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-bold text-slate-800 whitespace-nowrap">
                      {tool.name}
                    </p>
                    <p className="text-[10px] font-semibold text-slate-400 whitespace-nowrap">
                      {tool.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center shrink-0">
              {row1.map((tool, idx) => (
                <div
                  key={`r1-b-${idx}`}
                  className="tool-item flex-shrink-0 flex flex-col items-center gap-2.5 px-4 md:px-6"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white border border-slate-200 rounded-3xl p-4 flex items-center justify-center shadow-sm relative overflow-hidden group">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      width={80}
                      height={80}
                      className="max-w-full max-h-full object-contain pointer-events-none group-hover:scale-110 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-bold text-slate-800 whitespace-nowrap">
                      {tool.name}
                    </p>
                    <p className="text-[10px] font-semibold text-slate-400 whitespace-nowrap">
                      {tool.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - Rightward scrolling marquee */}
        <div className="brands-marquee-wrapper">
          <div
            className="brands-marquee-track flex items-center"
            style={{ animationDirection: "reverse", animationDuration: "38s" }}
          >
            <div className="flex items-center shrink-0">
              {row2.map((tool, idx) => (
                <div
                  key={`r2-a-${idx}`}
                  className="tool-item flex-shrink-0 flex flex-col items-center gap-2.5 px-4 md:px-6"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white border border-slate-200 rounded-3xl p-4 flex items-center justify-center shadow-sm relative overflow-hidden group">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      width={80}
                      height={80}
                      className="max-w-full max-h-full object-contain pointer-events-none group-hover:scale-110 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-bold text-slate-800 whitespace-nowrap">
                      {tool.name}
                    </p>
                    <p className="text-[10px] font-semibold text-slate-400 whitespace-nowrap">
                      {tool.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center shrink-0">
              {row2.map((tool, idx) => (
                <div
                  key={`r2-b-${idx}`}
                  className="tool-item flex-shrink-0 flex flex-col items-center gap-2.5 px-4 md:px-6"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white border border-slate-200 rounded-3xl p-4 flex items-center justify-center shadow-sm relative overflow-hidden group">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      width={80}
                      height={80}
                      className="max-w-full max-h-full object-contain pointer-events-none group-hover:scale-110 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-bold text-slate-800 whitespace-nowrap">
                      {tool.name}
                    </p>
                    <p className="text-[10px] font-semibold text-slate-400 whitespace-nowrap">
                      {tool.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => scrollTo("contact-section")}
            className="btn-primary w-full max-w-xs md:max-w-md inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            Leverage My Stack <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
