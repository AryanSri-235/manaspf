"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
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
      <div className="container mx-auto px-6 max-w-6xl my-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-3 shadow-2xs">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
              Four Ways I Help <span className="text-primary">Businesses Grow.</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
              From paid acquisition to AI creative generation and founder personal branding, built to turn attention into measurable revenue.
            </p>
          </div>
        </ScrollReveal>

        {/* Large Rounded White Container (Inspired by SocialMasla "What does a PM do?") */}
        <ScrollReveal duration={0.7}>
          <div className="bg-white p-8 md:p-12 lg:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {fourWays.map((item, idx) => {
                const badgeStyles = [
                  { bg: "bg-blue-50", text: "text-primary" },
                  { bg: "bg-emerald-50", text: "text-emerald-600" },
                  { bg: "bg-purple-50", text: "text-purple-600" },
                  { bg: "bg-amber-50", text: "text-amber-600" },
                ];
                const badge = badgeStyles[idx % badgeStyles.length];

                return (
                  <div key={item.id} className="flex flex-col justify-between group">
                    <div>
                      {/* Top Bar with pastel icon and category */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-2xl ${badge.bg} ${badge.text} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300 text-2xl`}>
                            {item.emoji}
                          </div>
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block">
                              Service {item.id}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">
                              {item.name}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Headline */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                        {item.headline}
                      </h3>

                      {/* Clean Body Description */}
                      <p className="text-slate-500 font-normal text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line">
                        {item.body}
                      </p>

                      {/* Deliverables Bullet List */}
                      <div className="pt-4 border-t border-slate-100 space-y-2 mb-6">
                        {item.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-600"
                          >
                            <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                              <Check size={10} strokeWidth={3} />
                            </span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Punchline Box */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-semibold text-slate-700 text-left">
                      ⚡ {item.punchline}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Section Bottom Quick Transition */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => scrollTo("linkedin")}
            className="text-sm font-bold text-slate-500 hover:text-primary transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            Explore My LinkedIn Distribution Engine <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
