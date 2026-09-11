"use client";

import React from "react";
import { ArrowRight, Flame } from "lucide-react";
import { proofCaseStudies } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { useLenis } from "@/components/SmoothScroll";

export default function CaseStudiesSection() {
  const { scrollTo } = useLenis();

  const caseEmojis: Record<string, { emoji: string; tags: string[] }> = {
    "case-01": {
      emoji: "🇺🇸",
      tags: ["Meta Ads", "A/B Testing", "US Lead Gen", "CPL Optimization"],
    },
    "case-02": {
      emoji: "🏏",
      tags: ["Campaign Strategy", "Meta Ads", "AI Creatives", "Sports Marketing"],
    },
    "case-03": {
      emoji: "🛕",
      tags: ["Contextual AI", "Rapid Scaling", "Suno AI Audio", "48-Hour Sprint"],
    },
  };

  return (
    <section
      id="proof"
      className="min-h-screen flex flex-col justify-center py-20 lg:py-28 bg-white border-b border-slate-200/80 section-overflow-guard"
    >
      <div className="container mx-auto px-6 max-w-6xl my-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Proven Execution
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Things I&apos;ve Built, Tested &amp;{" "}
              <span className="text-primary">
                Broken Down.
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
              Real campaign metrics, AI audio experiments, and rapid-turnaround revenue sprints.
            </p>
          </div>
        </ScrollReveal>

        {/* Case Studies Grid (Inspired by manaspf.vercel.app) */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {proofCaseStudies.map((study) => {
            const meta = caseEmojis[study.id] || {
              emoji: "🎯",
              tags: ["Performance", "Growth", "Marketing", "Strategy"],
            };

            return (
              <StaggerItem key={study.id}>
                <div className="bg-slate-50/70 border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-9 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

                  <div>
                    {/* Top Badge & Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl sm:text-3xl p-2.5 bg-white border border-slate-200/80 rounded-2xl shadow-xs">
                          {meta.emoji}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider shadow-xs">
                          {study.tag}
                        </span>
                      </div>
                      <span className="text-xs font-black text-slate-300 tracking-widest uppercase">
                        {study.number}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                      {study.title}
                    </h3>

                    <div className="inline-block px-3.5 py-1 rounded-xl bg-primary/10 text-primary text-xs sm:text-sm font-extrabold mb-4">
                      ⚡ {study.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-6">
                      {study.description}
                    </p>
                  </div>

                  <div>
                    {/* Key Metric Card */}
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-4 mb-5 flex items-center justify-between shadow-xs">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {study.metricLabel}
                      </span>
                      <span className="text-lg font-black text-slate-900 tracking-tight">
                        {study.metricValue}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {meta.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-semibold shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Small Line At Bottom: Views are nice. Revenue is nicer. */}
        <ScrollReveal duration={0.6} yOffset={20}>
          <div className="text-center py-6 px-8 rounded-3xl bg-slate-900 text-white max-w-2xl mx-auto shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <span className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <Flame size={20} className="text-amber-400 fill-amber-400" />
              </span>
              <div>
                <p className="text-base sm:text-lg font-black tracking-tight text-white">
                  Views are nice. <span className="text-primary">Revenue is nicer.</span>
                </p>
                <p className="text-xs text-slate-400 font-normal">
                  Every campaign must justify itself on the balance sheet.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollTo("about-cta")}
              className="btn-primary py-2.5 px-6 text-xs font-bold whitespace-nowrap shrink-0 shadow-md cursor-pointer"
            >
              Let&apos;s Build Together <ArrowRight size={14} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
