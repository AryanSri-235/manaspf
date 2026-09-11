"use client";

import React from "react";
import { ArrowRight, Flame, Target, TrendingUp, Sparkles } from "lucide-react";
import { proofCaseStudies } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { useLenis } from "@/components/SmoothScroll";

export default function CaseStudiesSection() {
  const { scrollTo } = useLenis();

  const caseBadges = [
    { icon: Target, bg: "bg-blue-50 text-blue-600 border-blue-100" },
    { icon: TrendingUp, bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { icon: Sparkles, bg: "bg-purple-50 text-purple-600 border-purple-100" },
  ];

  return (
    <section
      id="proof"
      className="min-h-screen lg:h-screen flex flex-col justify-center py-16 lg:py-6 bg-white border-b border-slate-200/80 section-overflow-guard"
    >
      <div className="container mx-auto px-6 max-w-7xl my-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-semibold tracking-wide mb-2.5">
              Scroll 02 · Proven Impact
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2 leading-tight">
              DON&apos;T TAKE MY WORD FOR IT.{" "}
              <span className="text-primary">
                LOOK AT WHAT HAPPENED.
              </span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-xl mx-auto">
              Real campaigns, real business metrics, and verifiable returns. No vanity figures.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Big Case Study Cards (Image 1 Style - clean, light typography, rounded cards) */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-6"
        >
          {proofCaseStudies.map((study, idx) => {
            const badge = caseBadges[idx % caseBadges.length];
            const Icon = badge.icon;

            return (
              <StaggerItem key={study.id}>
                <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
                  <div>
                    {/* Top Badge & Number */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border ${badge.bg}`}>
                          <Icon size={14} strokeWidth={2.2} />
                        </span>
                        <span className="text-[11px] font-semibold text-slate-600">
                          {study.tag}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                        CASE {study.number}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-1 leading-snug">
                      {study.title}
                    </h3>

                    <div className="inline-block text-xs font-semibold text-primary mb-2.5">
                      ⚡ {study.subtitle}
                    </div>

                    {/* Clean, light description */}
                    <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed mb-4">
                      {study.description}
                    </p>

                    {/* Result Container */}
                    <div className="p-3 rounded-2xl bg-white border border-slate-200/70 mb-4 shadow-2xs">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Result:
                      </p>
                      <div className="space-y-1">
                        {study.results.map((res, rIdx) => (
                          <p
                            key={rIdx}
                            className="text-xs font-normal text-slate-700 flex items-start gap-1.5 leading-snug"
                          >
                            <span className="text-primary font-bold shrink-0">→</span>
                            <span>{res}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Metric Pill */}
                  <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                      {study.metricLabel}
                    </span>
                    <span className="text-sm sm:text-base font-black text-primary tracking-tight">
                      {study.metricValue}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Small Line At Bottom: Views are nice. Revenue is nicer. */}
        <ScrollReveal duration={0.6} yOffset={16}>
          <div className="py-3 px-6 rounded-2xl bg-slate-900 text-white max-w-2xl mx-auto shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-left">
              <span className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <Flame size={16} className="text-amber-400 fill-amber-400" />
              </span>
              <div>
                <p className="text-sm font-bold tracking-tight text-white leading-tight">
                  Views are nice. <span className="text-primary">Revenue is nicer.</span>
                </p>
                <p className="text-[11px] text-slate-400 font-normal">
                  Every campaign must justify itself on the balance sheet.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollTo("about-cta")}
              className="btn-primary py-2 px-5 text-xs font-semibold whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
            >
              Let&apos;s Build Together <ArrowRight size={13} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
