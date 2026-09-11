"use client";

import React from "react";
import { ExternalLink, ShieldCheck, FileText, Share2, Zap } from "lucide-react";
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
      <div className="container mx-auto px-6 max-w-6xl w-full my-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-3 shadow-2xs">
              LinkedIn Personal Branding
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4 leading-[1.08]">
              Your LinkedIn Profile Is Probably{" "}
              <span className="text-primary">Underperforming.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto">
              Most professionals and founders use LinkedIn as an online resume.{" "}
              <strong className="text-slate-900 font-semibold">I believe it can be much more.</strong>
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Pillars Grid */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 lg:mb-10"
        >
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const badgeStyles = [
              { bg: "bg-blue-50", text: "text-primary" },
              { bg: "bg-purple-50", text: "text-purple-600" },
              { bg: "bg-emerald-50", text: "text-emerald-600" },
              { bg: "bg-amber-50", text: "text-amber-600" },
            ];
            const badge = badgeStyles[idx % badgeStyles.length];

            return (
              <StaggerItem key={idx}>
                <div className="p-6 sm:p-7 rounded-[2rem] bg-slate-50 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl ${badge.bg} ${badge.text} shadow-2xs flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Inbound Optimization Wide Card */}
        <ScrollReveal duration={0.65} delay={0.1} yOffset={20}>
          <div className="w-full p-8 sm:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                Inbound Optimization
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                Let&apos;s Build It Properly.
              </h3>
              <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed mb-4">
                Turn your dormant profile into a predictable, inbound lead generation engine.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                <span className="font-semibold text-slate-700 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                  DM “PROFILE” for a free 3-point breakdown
                </span>
                <div className="flex items-center gap-2 font-medium text-slate-500">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  Actively auditing 5 founder profiles every month
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={portfolioConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto py-3.5 px-8 text-sm sm:text-base font-semibold shadow-lg shadow-primary/25 inline-flex items-center justify-center gap-2.5 cursor-pointer"
              >
                Audit My LinkedIn <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
