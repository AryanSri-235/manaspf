"use client";

import React from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Flame } from "lucide-react";
import { proofCaseStudies } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { useLenis } from "@/components/SmoothScroll";

export default function CaseStudiesSection() {
  const { scrollTo } = useLenis();

  return (
    <section
      id="proof"
      className="min-h-screen flex flex-col justify-center py-20 lg:py-24 bg-white border-b border-slate-200/80 section-overflow-guard"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary text-xs font-black uppercase tracking-widest mb-4">
              Scroll 02 · Proven Impact
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
              DON&apos;T TAKE MY WORD FOR IT.{" "}
              <span className="text-primary block mt-1">
                LOOK AT WHAT HAPPENED.
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium max-w-xl mx-auto">
              Real campaigns, real business metrics, and verifiable returns. No vanity figures.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Big Case Study Cards */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14"
        >
          {proofCaseStudies.map((study) => (
            <StaggerItem key={study.id}>
              <div className="bg-slate-50 border border-slate-200/90 rounded-[2.5rem] p-7 sm:p-9 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
                <div className="relative z-10">
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-black uppercase tracking-wider shadow-xs">
                      {study.tag}
                    </span>
                    <span className="text-xs font-black text-slate-300 tracking-widest uppercase">
                      CASE {study.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2 leading-snug">
                    {study.title}
                  </h3>

                  <div className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold mb-4">
                    ⚡ {study.subtitle}
                  </div>

                  <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Result Section */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 mb-6 shadow-xs">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2.5">
                      Result:
                    </p>
                    <div className="space-y-1.5">
                      {study.results.map((res, rIdx) => (
                        <p
                          key={rIdx}
                          className="text-xs sm:text-sm font-bold text-slate-700 flex items-start gap-2"
                        >
                          <span className="text-primary font-bold shrink-0">→</span>
                          <span>{res}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Metric Pill */}
                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {study.metricLabel}
                  </span>
                  <span className="text-base font-black text-primary tracking-tight">
                    {study.metricValue}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
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
                <p className="text-xs text-slate-400 font-medium">
                  Every campaign must justify itself on the balance sheet.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollTo("about-cta")}
              className="btn-primary py-2.5 px-6 text-xs font-bold whitespace-nowrap shrink-0 shadow-md"
            >
              Let&apos;s Build Together <ArrowRight size={14} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
