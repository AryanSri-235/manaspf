"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { targetAudiences } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

import { useLenis } from "@/components/SmoothScroll";

export default function AudienceSection() {
  const { scrollTo } = useLenis();

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80 section-overflow-guard">
      <div className="container mx-auto px-6 max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Audience Fit
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Who Can I <span className="text-primary">Help?</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium max-w-xl mx-auto">
              Whether you&apos;re building a company or scaling an established brand, here is how we align.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal duration={0.65} yOffset={30}>
          <div className="bg-white p-8 md:p-12 lg:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200/80 shadow-sm mb-12">
            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
            >
              {targetAudiences.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-5 items-start group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                          {item.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => scrollTo("contact-section")}
            className="btn-primary w-full max-w-xs md:max-w-md inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            Let&apos;s Build Together <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
