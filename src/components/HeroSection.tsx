"use client";

import React from "react";
import { ArrowDown, ExternalLink, Target, TrendingUp, Briefcase, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLenis } from "@/components/SmoothScroll";

export default function HeroSection() {
  const { scrollTo } = useLenis();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center py-20 lg:py-12 section-overflow-guard bg-white"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14">
          {/* Left Column (Content) */}
          <ScrollReveal
            duration={0.65}
            yOffset={28}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                {portfolioConfig.heroTagline}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 leading-[1.12] tracking-tight mb-6">
              {portfolioConfig.heroHeadline}{" "}
              <span className="text-primary block mt-1">
                {portfolioConfig.heroHeadlineAccent}
              </span>
            </h1>

            {/* Subtext Body */}
            <div className="space-y-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mb-8">
              <p>
                I work at the intersection of <strong className="text-slate-900 font-bold">GTM Strategy</strong>,{" "}
                <strong className="text-slate-900 font-bold">Performance Marketing</strong>,{" "}
                <strong className="text-slate-900 font-bold">AI-powered Campaigns</strong> and{" "}
                <strong className="text-slate-900 font-bold">LinkedIn Personal Branding</strong>.
              </p>
              <p>
                The goal isn&apos;t just to make something look good or get attention. The goal is to know whether it generated leads, revenue, growth—or absolutely nothing.
              </p>
              <p className="font-semibold text-slate-900">
                Because if you can&apos;t measure marketing, you&apos;re mostly guessing.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center mb-8">
              <button
                type="button"
                onClick={() => scrollTo("proof")}
                className="btn-primary w-full sm:w-auto text-center cursor-pointer shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
              >
                View My Work <ArrowDown size={18} strokeWidth={2.5} />
              </button>

              <a
                href={portfolioConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 hover:bg-slate-100 text-slate-900 py-3.5 px-8 rounded-full font-bold text-base shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center border border-slate-200 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Connect on LinkedIn <ExternalLink size={18} />
              </a>
            </div>

            {/* Small Footer Text */}
            <p className="text-xs font-bold text-slate-400 tracking-wide">
              {portfolioConfig.heroTagline}
            </p>
          </ScrollReveal>

          {/* Right Column (Keynote Podium Photo & Proof Badges) */}
          <ScrollReveal
            duration={0.7}
            delay={0.15}
            yOffset={24}
            className="lg:col-span-5 w-full max-w-[380px] sm:max-w-md mx-auto flex flex-col items-center"
          >
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] bg-slate-900 border-4 border-slate-100 overflow-hidden flex items-end justify-center z-10 transition-transform duration-500 hover:scale-[1.01] shadow-2xl group">
              <img
                src="/assets/manas/manas_hero_keynote.jpg"
                alt="Manas Srivastava delivering a keynote on growth marketing"
                className="w-full h-full object-cover object-center filter contrast-105 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-4 right-4 text-center z-20">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/95 text-white text-[11px] font-black uppercase tracking-widest backdrop-blur-md shadow-lg">
                  Manas Srivastava · Keynote &amp; Growth Lead
                </span>
              </div>
            </div>

            {/* Quick Proof Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5 w-full mt-5 relative z-20">
              <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                  <Target size={16} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs leading-tight">₹5–₹40 CPL</p>
                  <p className="text-[10px] text-slate-500 font-semibold">International Ads</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <TrendingUp size={16} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs leading-tight">1M+ Reach</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Organic &amp; Paid</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <Briefcase size={16} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs leading-tight">Head of Growth</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Champions 11</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
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
    </section>
  );
}
