"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { fourWays } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { useLenis } from "@/components/SmoothScroll";

export default function FourWaysSection() {
  const { scrollTo } = useLenis();

  return (
    <section
      id="what-i-do"
      className="min-h-screen flex flex-col justify-center py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80 section-overflow-guard"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary text-xs font-black uppercase tracking-widest mb-4">
              Scroll 03 · Problem-First Approach
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              FOUR WAYS I HELP <span className="text-primary">BUSINESSES GROW.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
              Not “my services.” Nobody cares about services initially.{" "}
              <span className="text-slate-900 font-bold">They care about their problems.</span>
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {fourWays.map((item) => (
            <StaggerItem key={item.id}>
              <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl p-3 rounded-2xl bg-slate-50 border border-slate-100 shadow-xs group-hover:scale-110 transition-transform">
                        {item.emoji}
                      </span>
                      <span className="text-xs font-black uppercase tracking-widest text-primary">
                        WAY {item.id}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {item.name}
                    </span>
                  </div>

                  {/* Headline & Body */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3 leading-snug">
                    {item.headline}
                  </h3>

                  <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line">
                    {item.body}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="pt-5 border-t border-slate-100 space-y-2 mb-6">
                    {item.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700"
                      >
                        <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Punchline Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-bold text-slate-900 text-left">
                  ⚡ {item.punchline}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Section Bottom Quick Transition */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => scrollTo("linkedin")}
            className="text-xs sm:text-sm font-bold text-slate-500 hover:text-primary transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            Explore My LinkedIn Distribution Engine <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
