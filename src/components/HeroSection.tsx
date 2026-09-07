"use client";

import React from "react";
import { ArrowRight, Target, TrendingUp, Briefcase, Sparkles, ChevronDown } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";

import { useLenis } from "@/components/SmoothScroll";

export default function HeroSection() {
  const { scrollTo } = useLenis();

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col justify-center py-20 lg:py-0 section-overflow-guard bg-white"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14">
          {/* Left Column (Content) */}
          <ScrollReveal
            duration={0.65}
            yOffset={28}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Head of Growth @ C11CL · Co-Founder @ Markup Media
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 leading-[1.12] tracking-tight mb-6">
              I Build Growth Campaigns That People Notice.{" "}
              <span className="text-primary block mt-1">And Businesses Can Measure.</span>
            </h1>

            {/* Subtitle Pill / Cross Highlights */}
            <p className="text-xs sm:text-sm md:text-base font-bold text-slate-600 bg-slate-50 border border-slate-200/80 rounded-2xl py-2.5 px-4 mb-6 shadow-sm inline-block">
              Performance Marketing <span className="text-primary font-bold">×</span> AI Campaigns <span className="text-primary font-bold">×</span> Creative Strategy <span className="text-primary font-bold">×</span> LinkedIn Personal Branding
            </p>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-10">
              {portfolioConfig.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
              <button
                type="button"
                onClick={() => scrollTo("contact-section")}
                className="btn-primary w-full sm:w-auto text-center cursor-pointer shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                Work With Me <ArrowRight size={18} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("case-studies-section")}
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 py-3.5 px-8 rounded-full font-bold text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center border border-slate-200 cursor-pointer"
              >
                Explore My Work
              </button>
            </div>
          </ScrollReveal>

          {/* Right Column (Manas's Photo & Stats Card) */}
          <ScrollReveal
            duration={0.7}
            delay={0.15}
            yOffset={24}
            className="lg:col-span-5 w-full max-w-[360px] sm:max-w-md mx-auto flex flex-col items-center"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] bg-slate-900 border-4 border-slate-100 overflow-hidden flex items-end justify-center z-10 transition-transform duration-500 hover:scale-[1.01] shadow-2xl group">
              <img
                src="/assets/manas/manas_hero_portrait.png"
                alt="Manas Srivastava"
                className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-4 right-4 text-center z-20">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/95 text-white text-[11px] font-black uppercase tracking-widest backdrop-blur-md shadow-lg">
                  Manas Srivastava · Growth Lead
                </span>
              </div>
            </div>

            {/* Quick Metrics Grid */}
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
                  <p className="text-[10px] text-slate-500 font-semibold">Organic & Paid</p>
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

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-300 animate-bounce hidden md:block z-0 pointer-events-none">
        <ChevronDown size={22} />
      </div>
    </section>
  );
}
