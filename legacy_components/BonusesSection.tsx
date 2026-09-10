"use client";

import React from "react";
import { bonusList } from "@/data/courseData";

export default function BonusesSection() {
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
    <section className="py-12 lg:py-24 bg-[#FFF9F5] border-y border-[#FFE8DA]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
            Unlock Bonuses Worth{" "}
            <span className="text-primary underline decoration-[#FFE8DA] underline-offset-4">
              ₹45,000
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {bonusList.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col border border-slate-100 transform transition-transform duration-300 hover:-translate-y-2 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-md"
            >
              <div className="bg-primary py-3 px-6 text-center shadow-sm">
                <span className="text-white font-bold tracking-widest uppercase text-xs">
                  {bonus.number}
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                {bonus.image && (
                  <div className="mb-4 rounded-xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/3] bg-slate-50 relative">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="text-center mb-5">
                  <h3 className="text-lg font-black text-slate-900 leading-tight tracking-tight">
                    {bonus.title}
                  </h3>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-center gap-3 bg-slate-50/50 -mx-6 -mb-6 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                  <span className="text-slate-400 font-bold text-base line-through decoration-slate-300 decoration-2">
                    {bonus.value}
                  </span>
                  <span className="text-primary font-black text-xl drop-shadow-sm">
                    Free
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={scrollToPricing}
            className="btn-primary px-8 py-4 text-base md:text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
          >
            Enroll Now & Claim Bonuses
          </button>
        </div>
      </div>
    </section>
  );
}
