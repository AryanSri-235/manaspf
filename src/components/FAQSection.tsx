"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/courseData";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("General");
  const categories = Object.keys(faqData);
  const currentFaqs = faqData[activeCategory] || [];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-8">
            Frequently Asked Questions
          </h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white text-slate-500 border-slate-200 hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {currentFaqs.map((faq, idx) => (
            <details
              key={`${activeCategory}-${idx}`}
              className="group overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm transition-all"
            >
              <summary className="px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden flex justify-between items-center font-bold text-base text-slate-800 hover:text-primary transition-colors tracking-tight text-left">
                <span className="flex-1 text-left">{faq.q}</span>
                <ChevronDown
                  size={22}
                  className="group-open:rotate-180 transition-transform duration-300 text-slate-400 shrink-0 ml-4"
                />
              </summary>
              <div className="px-6 pb-5 text-slate-600 font-medium text-sm text-left leading-relaxed">
                {Array.isArray(faq.a) ? (
                  <div className="space-y-3">
                    {faq.a.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <p>{faq.a}</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
