"use client";

import React from "react";
import { ArrowRight, Target, TrendingUp, Sparkles, Share2, Check } from "lucide-react";
import { fourWays } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { useLenis } from "@/components/SmoothScroll";

export default function FourWaysSection() {
  const { scrollTo } = useLenis();

  // Icons and pastel badge colors matching Image 1
  const wayThemes = [
    {
      icon: Target,
      badgeBg: "bg-rose-50 text-rose-600 border-rose-100",
      accent: "text-rose-600",
    },
    {
      icon: TrendingUp,
      badgeBg: "bg-blue-50 text-blue-600 border-blue-100",
      accent: "text-blue-600",
    },
    {
      icon: Sparkles,
      badgeBg: "bg-purple-50 text-purple-600 border-purple-100",
      accent: "text-purple-600",
    },
    {
      icon: Share2,
      badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      accent: "text-emerald-600",
    },
  ];

  return (
    <section
      id="what-i-do"
      className="min-h-screen lg:h-screen flex flex-col justify-center py-16 lg:py-6 bg-slate-50 border-b border-slate-200/80 section-overflow-guard"
    >
      <div className="container mx-auto px-6 max-w-7xl my-auto">
        {/* Section Header (Image 1 Style: Bold with accented highlight) */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-semibold tracking-wide mb-2.5">
              Scroll 03 · Problem-First Approach
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2">
              FOUR WAYS I HELP <span className="text-primary">BUSINESSES GROW.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto">
              Not “my services.” Nobody cares about services initially.{" "}
              <span className="text-slate-900 font-medium">They care about their problems.</span>
            </p>
          </div>
        </ScrollReveal>

        {/* Big Clean White Container (Directly mirroring Image 1 style) */}
        <ScrollReveal duration={0.65} yOffset={20}>
          <div className="p-6 sm:p-8 lg:p-10 rounded-[2.5rem] bg-white border border-slate-200/90 shadow-sm max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {fourWays.map((item, idx) => {
                const theme = wayThemes[idx % wayThemes.length];
                const IconComponent = theme.icon;

                return (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl hover:bg-slate-50/80 transition-all border border-transparent hover:border-slate-200/60 group"
                  >
                    {/* Soft Pastel Badge Icon (Image 1 Style) */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 border ${theme.badgeBg} shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      <IconComponent size={20} strokeWidth={2.2} />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Name & Headline */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          WAY {item.id} ·
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                          {item.name}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-1.5">
                        {item.headline}
                      </h3>

                      {/* Clean, Light Body Description (Image 1 Style) */}
                      <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed mb-3">
                        {item.body.split("\n")[0]}
                      </p>

                      {/* Clean Deliverable Bullets */}
                      <div className="grid grid-cols-2 gap-1.5 mb-3">
                        {item.bullets.slice(0, 2).map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-center gap-1.5 text-[11px] sm:text-xs font-normal text-slate-600 truncate"
                          >
                            <span className="w-3.5 h-3.5 rounded-full bg-slate-100 text-primary flex items-center justify-center shrink-0">
                              <Check size={9} strokeWidth={2.5} />
                            </span>
                            <span className="truncate">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Punchline Pill */}
                      <p className="text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-100 px-3 py-1 rounded-xl inline-block">
                        ⚡ {item.punchline}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Section Bottom Quick Transition */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={() => scrollTo("linkedin")}
            className="text-xs font-medium text-slate-500 hover:text-primary transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            Explore My LinkedIn Distribution Engine <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
