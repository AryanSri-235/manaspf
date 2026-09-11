"use client";

import React from "react";
import { ArrowRight, ExternalLink, ShieldCheck, FileText, Share2, Zap } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function LinkedInBrandingSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Your Credibility Engine",
      desc: "Prove you know your craft before you even hop on a discovery call.",
    },
    {
      icon: FileText,
      title: "Your Content Platform",
      desc: "Turn raw thoughts into high-engagement thought leadership posts.",
    },
    {
      icon: Share2,
      title: "Your Networking Tool",
      desc: "Connect directly with decision-makers, founders, and investors.",
    },
    {
      icon: Zap,
      title: "Your Inbound Lead Generator",
      desc: "Wake up to qualified DMs from people who already want what you do.",
    },
  ];

  return (
    <section
      id="linkedin"
      className="min-h-screen flex flex-col justify-center py-16 lg:py-24 bg-white border-b border-slate-200/80 section-overflow-guard"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl w-full my-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-xs font-black uppercase tracking-widest mb-4">
              LinkedIn Personal Branding
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4 leading-[1.08]">
              Your LinkedIn Profile Is Probably{" "}
              <span className="text-primary">Underperforming.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              Most professionals and founders use LinkedIn as an online resume.{" "}
              <strong className="text-slate-900 font-bold">I believe it can be much more.</strong>
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Main Layout (Inspired by manaspf.vercel.app) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column (7 cols): 2x2 Pillars Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <StaggerContainer
              staggerDelay={0.08}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
            >
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={idx}>
                    <div className="p-5 lg:p-6 rounded-3xl bg-slate-50/90 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/40 hover:bg-blue-50/40 transition-all flex flex-col justify-between group h-full">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="text-primary" size={24} strokeWidth={2.2} />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right Column (5 cols): Banner Card + Inbound Optimization Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5 w-full">
            {/* Banner Preview Card */}
            <ScrollReveal duration={0.65} yOffset={20}>
              <div className="relative w-full rounded-3xl overflow-hidden border-4 border-slate-900 shadow-2xl bg-slate-950 group">
                <img
                  src="/assets/manas/manas_banner.png"
                  alt="Manas Srivastava LinkedIn banner"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Manas Srivastava</p>
                    <p className="text-slate-400 text-xs font-semibold">
                      1M+ Impressions · Founder-Led Growth
                    </p>
                  </div>
                  <a
                    href={portfolioConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-black uppercase tracking-wider shadow-md hover:bg-primary hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    View Profile <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Inbound Optimization Card */}
            <ScrollReveal duration={0.65} delay={0.1} yOffset={20}>
              <div className="w-full p-6 lg:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-center items-center text-center flex-grow">
                <span className="text-[11px] font-black uppercase tracking-widest text-primary mb-2">
                  Inbound Optimization
                </span>
                <h4 className="text-xl lg:text-2xl font-black text-slate-900 mb-2">
                  Let&apos;s Build It Properly.
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-6 max-w-sm">
                  Turn your dormant profile into a predictable, inbound lead generation engine.
                </p>
                <a
                  href={portfolioConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-4 px-8 text-base font-bold shadow-lg shadow-primary/30 inline-flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  Audit My LinkedIn <ExternalLink size={18} />
                </a>
                <p className="text-xs font-bold text-slate-600 mt-4">
                  DM “PROFILE” for a free 3-point breakdown
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Actively auditing 5 founder profiles every month
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
