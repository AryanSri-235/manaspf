"use client";

import React, { useState } from "react";

export default function MentorSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "/assets/manas/manas_stage.png",
      alt: "Manas Srivastava speaking on stage",
      isTransparent: false,
      title: "Manas Srivastava",
      badge: "Keynote Speaker & Growth Lead",
    },
    {
      src: "/assets/manas/manas_banner.png",
      alt: "LinkedIn Founder-Led Growth Blueprint",
      isTransparent: false,
      title: "Founder-Led Growth",
      badge: "Inbound Pipeline & Brand",
    },
    {
      src: "/assets/manas/manas_avatar.png",
      alt: "Manas Srivastava Head of Growth",
      isTransparent: false,
      title: "Manas Srivastava",
      badge: "Head of Growth @ C11CL",
    },
    {
      src: "/assets/manas/manas_hero_portrait.png",
      alt: "Manas Srivastava Performance Marketing",
      isTransparent: false,
      title: "Performance & Storytelling",
      badge: "1M+ Impressions",
    },
  ];

  return (
    <section id="mentor" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Photos Carousel */}
          <div className="w-full lg:w-1/2 overflow-hidden">
            <div
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-6 px-6 lg:mx-0 lg:px-0 hide-scrollbar"
              onScroll={(e) => {
                const scrollLeft = e.currentTarget.scrollLeft;
                const width = e.currentTarget.offsetWidth;
                setActiveIndex(Math.round(scrollLeft / width));
              }}
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/5] lg:aspect-[4/5] w-[85%] sm:w-[400px] shrink-0 snap-center rounded-3xl overflow-hidden border shadow-xl transition-all duration-300 bg-slate-900 border-slate-800"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover object-center z-10"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-20 pointer-events-none" />

                  {img.title && (
                    <div className="absolute bottom-6 left-6 z-30">
                      <h3 className="text-2xl font-bold text-white tracking-tighter drop-shadow-lg">
                        {img.title}
                      </h3>
                      {img.badge && (
                        <span className="inline-block mt-1.5 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-[0.15em] shadow-lg">
                          {img.badge}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Pagination Dots */}
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
          </div>

          {/* Bio Copy */}
          <div className="flex-1 w-full text-left">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-8 leading-tight text-slate-900 tracking-tight">
              Built by someone who <br className="hidden xl:block" />
              <span className="text-primary">knows what&apos;s at stake.</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mb-6">
              Marketing is everything. Not because ads are powerful, but because{" "}
              <strong className="text-slate-900 font-bold">
                attention is the currency, and storytelling is the weapon
              </strong>
              .
            </p>

            <div className="text-slate-500 text-base leading-relaxed max-w-2xl space-y-4 mb-8">
              <p>
                I&apos;m <strong className="text-slate-900 font-bold">Manas Srivastava</strong>.
                I&apos;ve spent the last few years building startups, growing communities from
                zero, and learning the one thing most founders get wrong:{" "}
                <em className="text-slate-700">
                  anyone can build a product, but very few can make people care about it.
                </em>
              </p>
              <p>
                As <strong className="text-slate-800 font-semibold">Head of Growth and Performance Marketing at Champions 11 Cricket League (C11CL)</strong>{" "}
                and <strong className="text-slate-800 font-semibold">Co-Founder at Markup Media</strong>,
                I make campaigns that drive business. From generating{" "}
                <strong className="text-slate-900 font-bold">1M+ impressions</strong> to
                founding <strong className="text-slate-800 font-semibold">BlockBuddy</strong> and{" "}
                <strong className="text-slate-800 font-semibold">PureWashr Solutions</strong>,
                I bridge the gap between creative storytelling, paid ads, and AI automation.
              </p>
            </div>

            <p className="text-slate-500 text-base leading-relaxed max-w-2xl border-l-2 border-primary pl-4 italic">
              Confidence and growth are skills. You can build it. You can practice it.
              The more you implement real systems, the more unstoppable you become.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
