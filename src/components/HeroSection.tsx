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
      className="relative min-h-screen flex flex-col justify-center pt-20 sm:pt-22 lg:pt-16 pb-6 section-overflow-guard bg-white"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
          {/* Left Column (Content) */}
          <ScrollReveal
            duration={0.65}
            yOffset={24}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                GTM Strategy · Performance Marketing · AI Campaigns
              </span>
            </div>

            {/* Headline (Matching manaspf.vercel.app font & styling) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 leading-[1.12] tracking-tight mb-6">
              {portfolioConfig.heroHeadline}{" "}
              <span className="text-primary block mt-1">
                {portfolioConfig.heroHeadlineAccent}
              </span>
            </h1>

            {/* Clean, Compact Feature Bullets (Inspired by SocialMasla) */}
            <div className="flex flex-col gap-2.5 mb-4 w-full max-w-lg text-left">
              <div className="flex items-center gap-2.5 group">
                <div className="w-6 h-6 rounded-md bg-blue-50 text-primary flex items-center justify-center shadow-2xs shrink-0 group-hover:scale-110 transition-transform">
                  <Target size={13} strokeWidth={2.4} />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-none">
                  GTM Strategy &amp; Full-Funnel Performance Marketing.
                </p>
              </div>

              <div className="flex items-center gap-2.5 group">
                <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shadow-2xs shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles size={13} strokeWidth={2.4} />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-none">
                  AI-Powered Multimodal Creatives &amp; Audio Sprints.
                </p>
              </div>

              <div className="flex items-center gap-2.5 group">
                <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp size={13} strokeWidth={2.4} />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-none">
                  Founder LinkedIn Personal Branding &amp; Inbound Pipeline.
                </p>
              </div>
            </div>

            {/* Subtext Body - Crisp & Punchy */}
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-lg mb-6">
              The goal isn&apos;t just attention—it&apos;s leads, growth, and measurable revenue.
              <span className="block font-semibold text-slate-900 mt-1">
                Because if you can&apos;t measure marketing, you&apos;re mostly guessing.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center mb-4">
              <button
                type="button"
                onClick={() => scrollTo("proof")}
                className="btn-primary w-full sm:w-auto text-center cursor-pointer shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 py-3 px-7 font-semibold text-sm"
              >
                View My Work <ArrowRight size={16} />
              </button>

              <a
                href={portfolioConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 px-7 rounded-full font-semibold text-sm shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center border border-slate-200 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Connect on LinkedIn <ExternalLink size={15} />
              </a>
            </div>

            {/* Small Tagline Below */}
            <p className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
              {portfolioConfig.heroTagline}
            </p>
          </ScrollReveal>

          {/* Right Column (Keynote Photo & Proof Badges - Compact & Fully Visible) */}
          <ScrollReveal
            duration={0.7}
            delay={0.15}
            yOffset={20}
            className="lg:col-span-5 w-full max-w-[280px] sm:max-w-[300px] mx-auto flex flex-col items-center"
          >
            {/* Photo Card with Rounded Corners - Compact Size */}
            <div className="relative w-full max-w-[230px] sm:max-w-[245px] aspect-[4/4.7] rounded-[2rem] bg-white border-2 border-slate-100 overflow-hidden flex items-end justify-center z-10 transition-transform duration-500 hover:scale-[1.01] shadow-lg group">
              <img
                src="/assets/manas/manas_hero_keynote.jpg"
                alt="Manas Srivastava delivering a keynote on growth marketing"
                className="w-full h-full object-cover object-center filter contrast-105 transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Sub-photo Profile Title */}
            <div className="mt-2.5 text-center w-full">
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none mb-1">
                Manas Srivastava
              </h3>
              <p className="text-slate-500 font-medium text-[11px] leading-tight">
                Head of Growth @ C11CL · Co-Founder @ Markup Media
              </p>
            </div>

            {/* 2x2 Quick Proof Metrics Grid Directly Under Photo (Fully Visible Above The Fold) */}
            <div className="grid grid-cols-2 gap-2 w-full max-w-[280px] mt-3 relative z-20">
              <div className="bg-white border border-slate-100 p-2 sm:p-2.5 rounded-xl flex items-center gap-2 shadow-2xs hover:shadow-sm transition-all group">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Target size={13} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs leading-none">₹5–₹40 CPL</p>
                  <p className="text-[9px] text-slate-400 font-medium mt-0.5">US Lead Gen</p>
                </div>
              </div>

              <div className="bg-white border border-slate-100 p-2 sm:p-2.5 rounded-xl flex items-center gap-2 shadow-2xs hover:shadow-sm transition-all group">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <TrendingUp size={13} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs leading-none">1M+ Reach</p>
                  <p className="text-[9px] text-slate-400 font-medium mt-0.5">Paid &amp; Organic</p>
                </div>
              </div>

              <div className="bg-white border border-slate-100 p-2 sm:p-2.5 rounded-xl flex items-center gap-2 shadow-2xs hover:shadow-sm transition-all group">
                <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Briefcase size={13} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs leading-none">Growth Lead</p>
                  <p className="text-[9px] text-slate-400 font-medium mt-0.5">Champions 11</p>
                </div>
              </div>

              <div className="bg-white border border-slate-100 p-2 sm:p-2.5 rounded-xl flex items-center gap-2 shadow-2xs hover:shadow-sm transition-all group">
                <div className="w-7 h-7 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Sparkles size={13} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs leading-none">AI × Paid</p>
                  <p className="text-[9px] text-slate-400 font-medium mt-0.5">Full-Funnel Stack</p>
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
