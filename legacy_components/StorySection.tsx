"use client";

import React, { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "/assets/manas/manas_stage.png",
      alt: "Manas Srivastava keynote speaking on stage",
      title: "Public Speaking & Keynotes",
      badge: "Stage & Workshops",
    },
    {
      src: "/assets/manas/manas_banner.png",
      alt: "LinkedIn Founder-Led Growth Blueprint",
      title: "Founder-Led Growth",
      badge: "Inbound Pipeline",
    },
    {
      src: "/assets/manas/manas_hero_portrait.png",
      alt: "Manas Srivastava Performance Marketing",
      title: "Growth Experiments",
      badge: "1M+ Impressions",
    },
    {
      src: "/assets/manas/manas_avatar.png",
      alt: "Manas Srivastava Head of Growth",
      title: "Manas Srivastava",
      badge: "Head of Growth @ C11CL",
    },
  ];

  return (
    <section id="story-section" className="min-h-screen flex flex-col justify-center py-20 lg:py-24 bg-white overflow-hidden border-b border-slate-200/80">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Column: Visual Carousel */}
          <ScrollReveal duration={0.65} className="w-full lg:w-1/2 overflow-hidden">
            <div
              data-lenis-prevent
              className="flex overflow-x-auto snap-x snap-mandatory overscroll-x-contain gap-6 pb-6 -mx-6 px-6 lg:mx-0 lg:px-0 hide-scrollbar"
              onScroll={(e) => {
                const scrollLeft = e.currentTarget.scrollLeft;
                const width = e.currentTarget.offsetWidth;
                setActiveIndex(Math.round(scrollLeft / width));
              }}
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/5] lg:aspect-[4/5] w-[85%] sm:w-[400px] shrink-0 snap-center rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl transition-all duration-300 bg-slate-950"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover object-center z-10"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent z-20 pointer-events-none" />

                  {img.title && (
                    <div className="absolute bottom-6 left-6 right-6 z-30">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
                        {img.title}
                      </h3>
                      {img.badge && (
                        <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                          {img.badge}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Dots */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`transition-all duration-300 rounded-full bg-primary ${
                    activeIndex === idx ? "w-6 h-2" : "w-2 h-2 opacity-20"
                  }`}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: The Story Narrative */}
          <ScrollReveal delay={0.15} duration={0.65} className="flex-1 w-full text-left">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Behind The Scenes
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight text-slate-900 tracking-tight">
              I Didn&apos;t Start With a Plan. <br className="hidden xl:block" />
              <span className="text-primary">I Started By Trying Things.</span>
            </h2>

            {/* Poetic bullet list from user copy */}
            <div className="space-y-2 mb-8 text-base sm:text-lg text-slate-700 font-medium">
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                I have experimented with startups.
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                I have failed.
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Built communities.
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Worked in marketing.
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Ran ads.
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Created campaigns.
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Taught MBA students while I was still in college.
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Built things that worked.
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                And plenty that didn&apos;t.
              </p>
            </div>

            <p className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
              I&apos;m still figuring things out.
            </p>

            <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-r-2xl mb-8">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                But somewhere along the way, I discovered something: <br />
                <span className="text-slate-950 font-bold">
                  I love figuring out why people click, why they buy, and why some ideas spread while others disappear.
                </span>
              </p>
            </div>

            <p className="text-slate-500 font-semibold text-sm uppercase tracking-widest">
              That&apos;s what brings us here.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
