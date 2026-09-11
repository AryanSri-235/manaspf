"use client";

import React from "react";
import { ArrowDown, ExternalLink, Target, TrendingUp, Briefcase, Sparkles, ChevronDown } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLenis } from "@/components/SmoothScroll";

export default function HeroSection() {
  const { scrollTo } = useLenis();

  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen flex flex-col justify-center pt-24 sm:pt-28 lg:pt-20 pb-8 lg:pb-4 section-overflow-guard bg-white"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column (Content) */}
          <ScrollReveal
            duration={0.65}
            yOffset={24}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top Pill Tagline (Image 3 Style) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/70 border border-blue-200/60 mb-4 sm:mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold text-primary tracking-wide uppercase">
                Head of Growth @ C11CL · Co-Founder @ MarkUp Media
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-black text-slate-900 leading-[1.12] tracking-tight mb-4">
              {portfolioConfig.heroHeadline}{" "}
              <span className="text-primary block mt-1">
                {portfolioConfig.heroHeadlineAccent}
              </span>
            </h1>

            {/* Middle Rounded Pillars Box (Image 3 Style) */}
            <div className="w-full max-w-xl p-3 sm:p-3.5 rounded-2xl bg-blue-50/40 border border-blue-100/80 mb-4 text-xs sm:text-sm text-slate-700 font-medium">
              Performance Marketing <span className="text-primary font-bold">×</span> AI Campaigns <span className="text-primary font-bold">×</span> Creative Strategy <span className="text-primary font-bold">×</span> LinkedIn Personal Branding
            </div>

            {/* Subtext Body (Image 1 Style - clean, readable, light) */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mb-6">
              The goal isn&apos;t just to make something look good or get attention. The goal is to know whether it generated leads, revenue, growth—or absolutely nothing.
              <span className="block mt-1.5 font-medium text-slate-800">
                Because if you can&apos;t measure marketing, you&apos;re mostly guessing.
              </span>
            </p>

            {/* Action Buttons (Image 3 Style) */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto items-center mb-4">
              <button
                type="button"
                onClick={() => scrollTo("proof")}
                className="btn-primary w-full sm:w-auto text-center cursor-pointer shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 text-sm font-semibold py-3.5 px-7"
              >
                View My Work <ArrowDown size={16} strokeWidth={2} />
              </button>

              <a
                href={portfolioConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 py-3.5 px-7 rounded-full font-medium text-sm border border-slate-200/80 hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Connect on LinkedIn <ExternalLink size={15} />
              </a>
            </div>

            {/* Small Footer Tagline */}
            <p className="text-xs font-normal text-slate-400 tracking-normal">
              {portfolioConfig.heroTagline}
            </p>
          </ScrollReveal>

          {/* Right Column (Keynote Podium Photo & Proof Badges - Image 3 Layout) */}
          <ScrollReveal
            duration={0.7}
            delay={0.15}
            yOffset={24}
            className="lg:col-span-5 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] mx-auto flex flex-col items-center"
          >
            {/* Photo Card with Rounded Corners and Bottom Badge */}
            <div className="relative w-full h-[270px] sm:h-[310px] lg:h-[330px] xl:h-[350px] rounded-[2.5rem] bg-slate-900 border-4 border-white overflow-hidden flex items-end justify-center z-10 transition-transform duration-500 hover:scale-[1.01] shadow-xl shadow-slate-300/40 group">
              <img
                src="/assets/manas/manas_hero_keynote.jpg"
                alt="Manas Srivastava delivering a keynote on growth marketing"
                className="w-full h-full object-cover object-center filter contrast-105 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-center z-20">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-md backdrop-blur-md">
                  Manas Srivastava · Growth Lead
                </span>
              </div>
            </div>

            {/* 2x2 Quick Proof Metrics Grid Directly Under Photo */}
            <div className="grid grid-cols-2 gap-2.5 w-full mt-3.5 relative z-20">
              <div className="bg-white border border-slate-200/80 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                  <Target size={16} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">₹5–₹40 CPL</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal">International Ads</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <TrendingUp size={16} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">1M+ Reach</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal">Organic &amp; Paid</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <Briefcase size={16} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">Head of Growth</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal">Champions 11</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Sparkles size={16} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">AI × Paid</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal">Full-Funnel Stack</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Down Chevron Indicator (Image 3 Style) */}
      <div className="hidden lg:flex justify-center pb-2 relative z-10">
        <button
          type="button"
          onClick={() => scrollTo("proof")}
          className="text-slate-400 hover:text-primary transition-colors cursor-pointer animate-bounce p-1"
          aria-label="Scroll to Proof"
        >
          <ChevronDown size={22} />
        </button>
      </div>
    </section>
  );
}
