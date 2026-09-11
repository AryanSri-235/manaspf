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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Head of Growth @ C11CL · Co-Founder @ Markup Media
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 leading-[1.12] tracking-tight mb-6">
              {portfolioConfig.heroHeadline}{" "}
              <span className="text-primary block mt-1">
                {portfolioConfig.heroHeadlineAccent}
              </span>
            </h1>

            {/* Middle Rounded Pillars Box */}
            <p className="text-xs sm:text-sm md:text-base font-bold text-slate-600 bg-slate-50 border border-slate-200/80 rounded-2xl py-2.5 px-4 mb-6 shadow-xs inline-block">
              Performance Marketing <span className="text-primary font-bold">×</span> AI Campaigns <span className="text-primary font-bold">×</span> Creative Strategy <span className="text-primary font-bold">×</span> LinkedIn Personal Branding
            </p>

            {/* Subtext Body */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-8">
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
                className="btn-primary w-full sm:w-auto text-center cursor-pointer shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 py-3.5 px-8 font-bold text-base"
              >
                View My Work <ArrowRight size={18} />
              </button>

              <a
                href={portfolioConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 py-3.5 px-8 rounded-full font-bold text-base shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center border border-slate-200 cursor-pointer inline-flex items-center justify-center gap-2"
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
            className="lg:col-span-5 w-full max-w-[360px] sm:max-w-md mx-auto flex flex-col items-center"
          >
            {/* Photo Card with Rounded Corners and Bottom Badge */}
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] bg-slate-900 border-4 border-slate-100 overflow-hidden flex items-end justify-center z-10 transition-transform duration-500 hover:scale-[1.01] shadow-2xl group">
              <img
                src="/assets/manas/manas_hero_keynote.jpg"
                alt="Manas Srivastava delivering a keynote on growth marketing"
                className="w-full h-full object-cover object-center filter contrast-105 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-4 right-4 text-center z-20">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/95 text-white text-[11px] font-black uppercase tracking-widest backdrop-blur-md shadow-lg">
                  Manas Srivastava · Growth Lead
                </span>
              </div>
            </div>

            {/* 2x2 Quick Proof Metrics Grid Directly Under Photo */}
            <div className="grid grid-cols-2 gap-2.5 w-full mt-6 relative z-20">
              <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all group">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Target size={16} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs leading-tight">₹5–₹40 CPL</p>
                  <p className="text-[10px] text-slate-500 font-semibold">International Ads</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all group">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp size={16} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs leading-tight">1M+ Reach</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Organic &amp; Paid</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all group">
                <div className="w-8 h-8 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase size={16} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs leading-tight">Head of Growth</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Champions 11</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all group">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles size={16} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs leading-tight">AI × Paid</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Full-Funnel Stack</p>
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
