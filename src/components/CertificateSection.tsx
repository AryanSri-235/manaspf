"use client";

import React from "react";
import { Award, Share2, CheckCircle2 } from "lucide-react";

export default function CertificateSection() {
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
    <section className="py-16 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,62,62,0.02)_0%,transparent_40%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl lg:text-4xl font-extrabold text-slate-900 mb-8 lg:mb-10 tracking-tight">
              Get <span className="text-primary">Certified</span>
            </h2>

            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-4 text-slate-700 font-semibold text-lg lg:text-base">
                <div className="shrink-0 text-primary">
                  <Award size={28} strokeWidth={2.2} />
                </div>
                Earn your credential of Expertise
              </li>
              <li className="flex items-center gap-4 text-slate-700 font-semibold text-lg lg:text-base">
                <div className="shrink-0 text-primary">
                  <Share2 size={28} strokeWidth={2.2} />
                </div>
                Share your verified certificate
              </li>
              <li className="flex items-center gap-4 text-slate-700 font-semibold text-lg lg:text-base">
                <div className="shrink-0 text-primary">
                  <CheckCircle2 size={28} strokeWidth={2.2} />
                </div>
                Add certificate to your Linkedin
              </li>
            </ul>

            <button
              onClick={scrollToPricing}
              className="btn-primary w-full sm:w-auto px-12 py-5 text-xl lg:text-lg lg:px-10 lg:py-4 shadow-lg hover:shadow-xl transition-all font-bold inline-flex items-center justify-center gap-2"
            >
              Enroll Now
            </button>
          </div>

          {/* Right Column: Certificate Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100 transition-transform duration-500 hover:scale-[1.02] bg-white">
                <img
                  src="https://socialmasla-pm.pages.dev/pm/assets/pm1/compressed/Performance%20Marketing%20Systems%20Certificate.jpg"
                  alt="Performance Marketing Systems Certificate"
                  width={900}
                  height={636}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
