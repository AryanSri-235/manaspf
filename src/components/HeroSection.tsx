"use client";

import React from "react";
import { ArrowRight, ExternalLink, Target, TrendingUp, Briefcase, Sparkles, ChevronDown } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLenis } from "@/components/SmoothScroll";

export default function HeroSection() {
  const { scrollTo } = useLenis();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 lg:pt-16 pb-12 section-overflow-guard bg-white"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14">
          {/* Left Column (Content) */}
          <ScrollReveal
            duration={0.65}
            yOffset={28}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Head of Growth @ C11CL · Co-Founder @ Markup Media
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 leading-[1.14] tracking-tight mb-6">
              {portfolioConfig.heroHeadline}{" "}
              <span className="text-primary block mt-1">
                {portfolioConfig.heroHeadlineAccent}
              </span>
            </h1>

            {/* Clean Feature Bullets (Inspired by SocialMasla Hero) */}
            <div className="flex flex-col gap-3 mb-6 w-full max-w-lg lg:max-w-none text-left">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-primary shadow-2xs shrink-0 group-hover:scale-110 transition-transform">
                  <Target size={16} strokeWidth={2.2} />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-normal">
                  GTM Strategy, Positioning &amp; Full-Funnel Performance Marketing.
                </p>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-purple-50/70 border border-purple-100/60 flex items-center justify-center text-purple-600 shadow-2xs shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles size={16} strokeWidth={2.2} />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-normal">
                  AI-Powered Multi-Variant Creatives &amp; Audio Campaigns (Suno AI).
                </p>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-50/70 border border-emerald-100/60 flex items-center justify-center text-emerald-600 shadow-2xs shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp size={16} strokeWidth={2.2} />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-normal">
                  Founder LinkedIn Personal Branding &amp; Predictable Inbound Pipelines.
                </p>
              </div>
            </div>

            {/* Subtext Body */}
            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-xl mb-8">
              The goal isn&apos;t just to make something look good or get attention. The goal is to know whether it generated leads, revenue, growth—or absolutely nothing.
              <span className="block mt-2 font-bold text-slate-900">
                Because if you can&apos;t measure marketing, you&apos;re mostly guessing.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center mb-6">
              <button
                type="button"
                onClick={() => scrollTo("proof")}
                className="btn-primary w-full sm:w-auto text-center cursor-pointer shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 py-3.5 px-8 font-semibold text-sm sm:text-base"
              >
                View My Work <ArrowRight size={18} />
              </button>

              <a
                href={portfolioConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 py-3.5 px-8 rounded-full font-semibold text-sm sm:text-base shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center border border-slate-200 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Connect on LinkedIn <ExternalLink size={16} />
              </a>
            </div>

            {/* Small Tagline Below */}
            <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
              {portfolioConfig.heroTagline}
            </p>
          </ScrollReveal>

          {/* Right Column (Keynote Photo & Proof Badges) */}
          <ScrollReveal
            duration={0.7}
            delay={0.15}
            yOffset={24}
            className="lg:col-span-5 w-full max-w-[340px] sm:max-w-md mx-auto flex flex-col items-center"
          >
            {/* Photo Card with Rounded Corners */}
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] bg-white border-2 md:border-4 border-slate-100 overflow-hidden flex items-end justify-center z-10 transition-transform duration-500 hover:scale-[1.01] shadow-xl group">
              <img
                src="/assets/manas/manas_hero_keynote.jpg"
                alt="Manas Srivastava delivering a keynote on growth marketing"
                className="w-full h-full object-cover object-center filter contrast-105 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-center z-20">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-950/80 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/10 shadow-md">
                  Manas Srivastava · Growth Lead
                </span>
              </div>
            </div>

            {/* Sub-photo Profile Title */}
            <div className="mt-4 text-center w-full">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-none mb-1">
                Manas Srivastava
              </h3>
              <p className="text-slate-500 font-medium text-[11px] md:text-xs">
                Head of Growth @ C11CL · Co-Founder @ Markup Media
              </p>
            </div>

            {/* 2x2 Quick Proof Metrics Grid Directly Under Photo (SocialMasla Style) */}
            <div className="grid grid-cols-2 gap-2.5 w-full mt-5 relative z-20">
              <div className="bg-white border border-slate-100 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all group">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Target size={15} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">₹5–₹40 CPL</p>
                  <p className="text-[10px] text-slate-400 font-medium">US Lead Gen</p>
                </div>
              </div>

              <div className="bg-white border border-slate-100 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all group">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp size={15} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">1M+ Reach</p>
                  <p className="text-[10px] text-slate-400 font-medium">Paid &amp; Organic</p>
                </div>
              </div>

              <div className="bg-white border border-slate-100 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all group">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase size={15} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">Head of Growth</p>
                  <p className="text-[10px] text-slate-400 font-medium">Champions 11</p>
                </div>
              </div>

              <div className="bg-white border border-slate-100 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all group">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles size={15} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">AI × Paid</p>
                  <p className="text-[10px] text-slate-400 font-medium">Full-Funnel Stack</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Down Chevron Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-300 animate-bounce hidden md:block z-0 pointer-events-none">
        <ChevronDown size={22} />
      </div>
    </section>
  );
}
