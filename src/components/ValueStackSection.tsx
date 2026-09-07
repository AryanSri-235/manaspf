"use client";

import React from "react";
import { Check } from "lucide-react";
import { valueStackItems } from "@/data/courseData";

export default function ValueStackSection() {
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
    <section className="py-16 lg:py-20 bg-white text-slate-900 section-overflow-guard">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
            Everything You Are <span className="text-primary">Getting Today</span>
          </h2>
        </div>

        <div className="bg-slate-50 rounded-[2rem] border border-slate-200 p-6 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <ul className="space-y-4 mb-10 relative z-10">
            {valueStackItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="text-white" strokeWidth={3} size={12} />
                  </div>
                  <span className="text-sm md:text-base font-bold text-slate-800 tracking-tight">
                    {item.label}
                  </span>
                </div>
                <span className="text-slate-400 font-bold text-sm tabular-nums">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 relative z-10 bg-white -mx-6 md:-mx-10 -mb-6 md:-mb-10 p-6 md:p-8 rounded-b-[2rem] border-t border-slate-100 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
            <div className="text-center md:text-left">
              <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px] mb-1">
                Total Value If Bought Separately
              </p>
              <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">
                ₹55,000
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-slate-200" />

            <div className="text-center md:text-right">
              <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-1">
                Special Offer Price
              </p>
              <div className="text-3xl md:text-4xl font-black text-primary tracking-tighter drop-shadow-sm">
                ₹2,499
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 flex flex-col items-center gap-6">
          <button
            onClick={scrollToPricing}
            className="btn-primary px-8 py-4 text-base md:text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all font-black text-center w-full md:w-auto transform hover:-translate-y-1"
          >
            Claim This Offer Now
          </button>
        </div>
      </div>
    </section>
  );
}
