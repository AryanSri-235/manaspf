"use client";

import React from "react";
import { Target, TrendingUp, Building2, Sparkles } from "lucide-react";
import { credibilityStats } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  target: <Target size={28} strokeWidth={2.2} />,
  "trending-up": <TrendingUp size={28} strokeWidth={2.2} />,
  building: <Building2 size={28} strokeWidth={2.2} />,
  sparkles: <Sparkles size={28} strokeWidth={2.2} />,
};

export default function CredibilityNumbers() {
  return (
    <section className="min-h-[75vh] lg:min-h-screen flex flex-col justify-center py-20 bg-slate-50 border-y border-slate-200/80 section-overflow-guard">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-3">
              Proof of Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Backed By <span className="text-primary">Measurable Numbers</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium mt-2">
              Real metrics driven across international paid campaigns, startups, and community growth.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {credibilityStats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="bg-white border border-slate-200/80 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`w-14 h-14 rounded-2xl ${stat.bgColor} ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                  >
                    {iconMap[stat.icon]}
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-300">
                    0{i + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-bold text-slate-800 mb-2">{stat.label}</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
