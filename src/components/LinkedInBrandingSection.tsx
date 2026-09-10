"use client";

import React from "react";
import { ArrowRight, ExternalLink, Flame, ShieldAlert, Sparkles, TrendingUp, Users, MessageSquare } from "lucide-react";
import { linkedInFramework, portfolioConfig } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function LinkedInBrandingSection() {
  return (
    <section
      id="linkedin"
      className="min-h-screen flex flex-col justify-center py-20 lg:py-24 bg-white border-b border-slate-200/80 section-overflow-guard"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl w-full">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary text-xs font-black uppercase tracking-widest mb-4">
              Scroll 04 · High-Leverage Distribution
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-4">
              {linkedInFramework.headline}{" "}
              <span className="text-primary block mt-1">
                {linkedInFramework.subheadline}
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-14">
          {/* Left Column: The Pattern Breaker */}
          <ScrollReveal
            duration={0.65}
            className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-[2.5rem] bg-slate-950 text-white shadow-xl"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-primary mb-3">
                The Pattern-Interrupt Thesis
              </p>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-4 text-white">
                {linkedInFramework.intro}
              </h3>

              {/* What people expect (The Cliches) */}
              <div className="space-y-2.5 mb-8">
                {linkedInFramework.cliches.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs sm:text-sm font-bold"
                  >
                    <span className="text-red-400 font-bold">❌</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Why break the pattern */}
              <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 text-slate-200 text-xs sm:text-sm font-medium leading-relaxed mb-6 whitespace-pre-line">
                {linkedInFramework.punchline}
              </div>
            </div>

            {/* Banner Preview */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-800 shadow-md group">
              <img
                src="/assets/manas/manas_banner.png"
                alt="Manas Srivastava LinkedIn banner"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </ScrollReveal>

          {/* Right Column: The 4-Step Approach */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <StaggerContainer
              staggerDelay={0.08}
              className="space-y-4 mb-6"
            >
              {linkedInFramework.steps.map((step) => (
                <StaggerItem key={step.num}>
                  <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/40 hover:bg-blue-50/30 transition-all flex gap-5 items-start group">
                    <span className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-primary font-black text-sm flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Quote callout */}
            <ScrollReveal duration={0.6} yOffset={20}>
              <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-100 text-xs sm:text-sm font-bold text-slate-800 text-left mb-6">
                💡 <span className="text-primary font-black">Core Rule:</span> {linkedInFramework.bottomQuote}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Small Proof Area (Real Numbers) & CTA Bar */}
        <ScrollReveal duration={0.65} yOffset={25}>
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-6 w-full lg:w-auto text-center lg:text-left">
              {linkedInFramework.stats.map((st, sIdx) => (
                <div key={sIdx} className="space-y-1">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                    {st.value}
                  </p>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a
                href={portfolioConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-3.5 px-8 text-sm font-bold shadow-lg shadow-primary/25 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Audit My LinkedIn <ExternalLink size={16} />
              </a>

              <a
                href={portfolioConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 py-3.5 px-6 rounded-full text-sm font-bold shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Connect on LinkedIn <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
