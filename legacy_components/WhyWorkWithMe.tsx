"use client";

import React from "react";
import { ArrowRight, Lightbulb, Palette, Users, Filter, BarChart3, Trophy } from "lucide-react";
import { whyWorkFramework } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const stepIcons = [
  <Lightbulb key="1" size={24} className="text-amber-500" />,
  <Palette key="2" size={24} className="text-purple-500" />,
  <Users key="3" size={24} className="text-blue-500" />,
  <Filter key="4" size={24} className="text-indigo-500" />,
  <BarChart3 key="5" size={24} className="text-emerald-500" />,
  <Trophy key="6" size={24} className="text-primary" />,
];

import { useLenis } from "@/components/SmoothScroll";

export default function WhyWorkWithMe() {
  const { scrollTo } = useLenis();

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80 section-overflow-guard">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Strategic Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              I Don&apos;t Just <span className="text-primary">Run Ads.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium">
              Most marketers stop at launching campaigns. I architect the entire growth engine from hook to revenue.
            </p>
          </div>
        </ScrollReveal>

        {/* 6-Step Pipeline Grid */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {whyWorkFramework.map((item, idx) => (
            <StaggerItem key={item.step}>
              <div
                className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      {stepIcons[idx]}
                    </div>
                    <span className="text-xs font-black text-primary/60 tracking-widest">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400">
                  <span>Phase {idx + 1}</span>
                  {idx < 5 && <ArrowRight size={12} className="text-primary" />}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bold Climax Callout */}
        <ScrollReveal duration={0.65} yOffset={25}>
          <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">
            The Fundamental Truth
          </p>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight mb-6">
            “Because an ad isn&apos;t successful because it looks good. <br className="hidden sm:block" />
            It&apos;s successful when it <span className="text-primary underline decoration-primary/50 underline-offset-4">works</span>.”
          </blockquote>
          <button
            type="button"
            onClick={() => scrollTo("contact-section")}
            className="btn-primary py-3.5 px-8 text-base shadow-lg shadow-primary/30 inline-flex items-center gap-2"
          >
            Start A Campaign That Works <ArrowRight size={18} />
          </button>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
