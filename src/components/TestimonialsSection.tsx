"use client";

import React, { useState, useRef } from "react";
import { Star, Play, ArrowRight } from "lucide-react";
import { videoReviews, writtenReviews } from "@/data/courseData";

function VideoReviewCard({ item }: { item: typeof videoReviews[0] }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log(err));
    }
  };

  return (
    <article className="w-[248px] shrink-0 snap-center overflow-hidden rounded-[1.25rem] border border-slate-800 bg-[#0B0F17] shadow-xl sm:w-full">
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-slate-950">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={item.poster}
          controls={playing}
          playsInline
          preload="none"
          src={item.videoSrc}
        />
        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            className="group absolute inset-0 h-full w-full overflow-hidden text-white"
            aria-label={`Play ${item.name}'s review`}
          >
            <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/55 shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play size={26} className="ml-0.5 fill-white text-white" />
            </span>
            <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.12em]">
              <span>Play review</span>
              <span>{item.duration}</span>
            </span>
          </button>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <strong className="text-sm font-black text-white">{item.name}</strong>
        </div>
        <p className="mt-1 text-[11px] font-semibold text-slate-400">{item.role}</p>
        <h4 className="mt-3 text-sm font-bold leading-snug text-white">
          {item.headline}
        </h4>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const featured = writtenReviews[0];
  const restReviews = writtenReviews.slice(1);

  const scrollToPricing = () => {
    const el = document.getElementById("pricing-section");
    if (el) {
      const topOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="student-reviews"
      className="border-b border-slate-200 bg-slate-50 py-16 lg:py-24"
    >
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Don’t take our word for it.{" "}
            <span className="text-primary">Hear it from learners.</span>
          </h2>
          <div className="mt-6 flex justify-center gap-1.5 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="fill-primary text-primary"
                size={22}
                strokeWidth={2}
              />
            ))}
          </div>
        </div>

        {/* Video Reviews Carousel */}
        <div>
          <div className="mb-7">
            <span className="text-xs font-black uppercase tracking-[0.14em] text-primary">
              Learners, on camera
            </span>
          </div>
          <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 md:grid-cols-3 xl:grid-cols-5 hide-scrollbar">
            {videoReviews.map((review) => (
              <VideoReviewCard key={review.name} item={review} />
            ))}
          </div>
        </div>

        {/* Written & Social Proof Reviews */}
        <div className="mt-16 border-t border-slate-200 pt-14 lg:mt-20 lg:pt-16">
          <div className="mb-8">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.14em] text-primary">
                Learners Across Internet
              </span>
            </div>
          </div>

          {/* Featured Large Google Review */}
          <article className="mb-6 grid overflow-hidden rounded-[1.5rem] border border-slate-800 bg-[#0B0F17] shadow-2xl md:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-center p-6 md:p-9">
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white">
                  Google · 5 stars
                </span>
              </div>
              <blockquote className="text-xl font-bold leading-relaxed text-white md:text-2xl">
                “{featured.quote}”
              </blockquote>
              <p className="mt-6 font-black text-white">{featured.name}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                Google review
              </p>
            </div>
            <div className="flex items-center border-t border-slate-800 bg-slate-950 p-5 md:border-l md:border-t-0 md:p-7">
              <img
                src={featured.image}
                alt={featured.alt}
                width={featured.width || 1200}
                height={featured.height || 600}
                className="h-auto w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </article>

          {/* Other Reviews Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {restReviews.map((item, idx) => (
              <article
                key={idx}
                className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
              >
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-primary">
                      {item.source}
                    </span>
                  </div>
                  <blockquote className="text-base font-semibold leading-relaxed text-slate-800">
                    “{item.quote}”
                  </blockquote>
                  <p className="mt-4 text-sm font-black text-slate-950">
                    {item.name}
                  </p>
                </div>
                <div className="border-t border-slate-800 bg-[#0B0F17] p-4">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-auto w-full rounded-lg"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={scrollToPricing}
            className="btn-primary w-full max-w-xs md:max-w-md inline-flex items-center justify-center gap-2"
          >
            Join The Course <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
