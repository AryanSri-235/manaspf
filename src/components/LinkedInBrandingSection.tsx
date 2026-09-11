"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { linkedInFramework, portfolioConfig } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function LinkedInBrandingSection() {
  return (
    <section
      id="linkedin"
      className="min-h-screen lg:h-screen flex flex-col justify-center py-16 lg:py-6 bg-white border-b border-slate-200/80 section-overflow-guard"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl w-full my-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-6 sm:mb-7">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-semibold tracking-wide mb-2.5">
              Scroll 04 · High-Leverage Distribution
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {linkedInFramework.headline}{" "}
              <span className="text-primary">
                {linkedInFramework.subheadline}
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch mb-5">
          {/* Left Column: The Pattern Breaker */}
          <ScrollReveal
            duration={0.65}
            className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-slate-950 text-white shadow-md"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1.5">
                The Pattern-Interrupt Thesis
              </p>
              <h3 className="text-sm sm:text-base font-bold tracking-tight mb-3 text-white">
                {linkedInFramework.intro}
              </h3>

              {/* What people expect (The Cliches) */}
              <div className="space-y-1.5 mb-4">
                {linkedInFramework.cliches.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-[11px] sm:text-xs font-normal"
                  >
                    <span className="text-red-400 font-bold shrink-0">❌</span>
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>

              {/* Why break the pattern */}
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-slate-200 text-xs font-normal leading-relaxed mb-3">
                {linkedInFramework.punchline.split("\n\n")[0]}
              </div>
            </div>

            {/* Banner Preview */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-sm max-h-[75px] group">
              <img
                src="/assets/manas/manas_banner.png"
                alt="Manas Srivastava LinkedIn banner"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </ScrollReveal>

          {/* Right Column: The 4-Step Approach (Image 1 Style: clean cards with soft badges) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <StaggerContainer
              staggerDelay={0.06}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3"
            >
              {linkedInFramework.steps.map((step) => (
                <StaggerItem key={step.num}>
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-primary/40 hover:bg-blue-50/20 transition-all flex gap-3 items-start group h-full">
                    <span className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-primary font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Quote callout */}
            <ScrollReveal duration={0.6} yOffset={14}>
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs font-normal text-slate-700 text-left">
                💡 <span className="text-primary font-semibold">Core Rule:</span> {linkedInFramework.bottomQuote}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Small Proof Area (Real Numbers) & CTA Bar */}
        <ScrollReveal duration={0.65} yOffset={18}>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-6 text-center sm:text-left">
              {linkedInFramework.stats.map((st, sIdx) => (
                <div key={sIdx}>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    {st.value}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <a
                href={portfolioConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2 px-5 text-xs font-semibold shadow-xs inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Audit My LinkedIn <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
