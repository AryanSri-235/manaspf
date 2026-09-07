"use client";

import React, { useState } from "react";
import { ArrowRight, ExternalLink, Sparkles, TrendingUp, Music, ShoppingBag } from "lucide-react";
import { caseStudies } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

import { useLenis } from "@/components/SmoothScroll";

const iconMap: Record<string, React.ReactNode> = {
  "international-leads": <TrendingUp size={24} className="text-primary" />,
  "c11cl-growth": <Sparkles size={24} className="text-blue-600" />,
  "bano-champion": <Music size={24} className="text-purple-600" />,
  "jagannath-yatra": <ShoppingBag size={24} className="text-amber-600" />,
};

export default function CaseStudiesSection() {
  const { scrollTo } = useLenis();

  return (
    <section id="case-studies-section" className="min-h-screen flex flex-col justify-center py-20 lg:py-28 bg-white border-b border-slate-200/80 section-overflow-guard">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Proven Execution
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Things I&apos;ve Built, Tested &amp; <span className="text-primary">Broken Down.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium">
              Real campaign metrics, AI audio experiments, and rapid-turnaround revenue sprints.
            </p>
          </div>
        </ScrollReveal>

        {/* Case Studies Grid */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {caseStudies.map((item, idx) => (
            <StaggerItem key={item.id}>
              <div
                className="bg-slate-50/70 border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group h-full"
              >
              {/* Background gradient blur */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-3 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
                      {item.flag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                  <span className="text-xs font-black text-slate-300 tracking-widest uppercase">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>

                <div className="inline-block px-3.5 py-1 rounded-xl bg-primary/10 text-primary text-xs sm:text-sm font-extrabold mb-4">
                  ⚡ {item.highlight}
                </div>

                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Metric Box */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-4 mb-6 flex items-center justify-between shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {item.metricLabel}
                  </span>
                  <span className="text-lg font-black text-slate-900 tracking-tight">
                    {item.metricValue}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-semibold shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => scrollTo("contact-section")}
            className="btn-primary px-8 py-4 text-base font-bold shadow-lg shadow-primary/20 inline-flex items-center gap-2"
          >
            Want Results Like These? Let&apos;s Talk <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
