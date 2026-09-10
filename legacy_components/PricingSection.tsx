"use client";

import React, { useState } from "react";
import { Star, Check, TrendingUp, ShieldCheck, XCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/courseData";

export default function PricingSection() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (plan: "standard" | "elite") => {
    setLoadingPlan(plan);
    try {
      // Call fullstack API endpoint to record or initiate checkout
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      console.log("Checkout response:", data);

      // Check if Razorpay script is loaded on window
      if (typeof window !== "undefined" && (window as unknown as { Razorpay: unknown }).Razorpay) {
        // Razorpay modal integration
        const rzp = new (window as unknown as { Razorpay: new (options: unknown) => { open: () => void } }).Razorpay({
          key: "rzp_live_test_demo",
          amount: plan === "standard" ? 249900 : 999900,
          currency: "INR",
          name: "Social Masla",
          description: plan === "standard" ? "Performance Marketing Systems - Standard" : "Elite Mentorship Cohort",
          theme: { color: "#F03E3E" },
        });
        rzp.open();
      } else {
        // Fallback or demo alert
        alert(`Proceeding to checkout for ${plan === "standard" ? "Standard (₹2,499)" : "Elite Mentorship (₹9,999)"}`);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <section
      id="pricing-section"
      className="py-20 lg:py-24 container mx-auto px-6 bg-slate-950 max-w-6xl rounded-[3rem] my-12"
    >
      {/* Header */}
      <div className="max-w-2xl mb-10 lg:mb-12 mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
          Claim Your <span className="text-primary">Spot</span>
        </h2>
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex -space-x-2.5">
            <img
              src="https://socialmasla-pm.pages.dev/pm/assets/heroicons/compressed/roshan.webp"
              alt="Learner"
              className="w-8 h-8 rounded-full border-2 border-slate-950 object-cover object-top"
            />
            <img
              src="https://socialmasla-pm.pages.dev/pm/assets/heroicons/compressed/arun.webp"
              alt="Learner"
              className="w-8 h-8 rounded-full border-2 border-slate-950 object-cover object-top"
            />
            <img
              src="https://socialmasla-pm.pages.dev/pm/assets/heroicons/compressed/annie.webp"
              alt="Learner"
              className="w-8 h-8 rounded-full border-2 border-slate-950 object-cover object-top"
            />
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-[9px] font-bold border-2 border-slate-950 z-10">
              10k+
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex gap-0.5 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-[11px] font-bold text-slate-300 mt-0.5">
              4.9/5 from 10k+ learners
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid gap-6 mx-auto md:grid-cols-2 max-w-4xl">
        {/* Tier 1: Complete Program */}
        <div className="p-[2px] rounded-[40px] bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] shadow-[0_20px_60px_-15px_rgba(191,149,63,0.5)] relative">
          <div className="bg-white rounded-[38px] p-6 md:p-8 lg:p-7 relative overflow-hidden h-full flex flex-col border border-white/60">
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex-grow">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-950 text-amber-200 text-[10px] font-black uppercase tracking-widest shadow-sm">
                  Complete Program
                </span>
              </div>

              <div className="flex flex-col mb-6">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[9px] sm:text-[10px] font-black uppercase tracking-wide text-primary mb-1">
                  <TrendingUp size={12} className="flex-shrink-0" />
                  Price increases with the next batch
                </span>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-base font-bold text-slate-400 line-through decoration-red-500/50">
                    {siteConfig.pricing.standard.originalPriceInr}
                  </span>
                  <div className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter flex items-baseline gap-4">
                    {siteConfig.pricing.standard.priceInr}
                    <span className="text-sm font-semibold text-slate-400 tracking-normal">
                      ({siteConfig.pricing.standard.usdPrice})
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Full 21-Module Performance System",
                  "Active Campaign Walkthroughs",
                  "Real-World Case Studies",
                  "AI Powered Strategies",
                  "Private Discord Community",
                  "Language: Hindi + English",
                  "Lifetime Content Updates",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 text-[13px] font-medium tracking-tight"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 flex-shrink-0">
                      <Check className="text-primary" size={12} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleCheckout("standard")}
              disabled={loadingPlan === "standard"}
              className={`btn-primary w-full flex-col py-3 gap-0.5 ${
                loadingPlan === "standard" ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <span className="flex items-center gap-2">
                {loadingPlan === "standard" ? "Initializing..." : "Get Access"}
                <ArrowRight size={16} />
              </span>
              <span className="text-[10px] font-medium opacity-80 flex items-center gap-1">
                <img
                  src="https://razorpay.com/favicon.ico"
                  alt="Razorpay"
                  className="w-3 h-3 grayscale invert brightness-0"
                />
                Secured by Razorpay
              </span>
            </button>
          </div>
        </div>

        {/* Tier 2: 1-on-1 Career Mentorship */}
        <div
          id="nine-triple-nine"
          className="p-[2px] rounded-[40px] shadow-2xl scale-[1.02] relative z-20 overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] scroll-mt-24"
        >
          <div className="rounded-[38px] p-6 md:p-8 lg:p-6 relative overflow-hidden h-full flex flex-col border border-white/5 bg-gradient-to-br from-[#FCF6BA] via-[#DFB76C] to-[#FBF5B7]">
            <div className="relative z-10 flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-950 text-amber-200 text-[10px] font-bold shadow-sm backdrop-blur-md">
                  1-on-1 Career Mentorship Call
                </span>
              </div>

              <div className="flex flex-col mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-1">
                  Only a Few Slots Open Each Month
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm md:text-base font-bold text-slate-700/60 line-through decoration-slate-950/50">
                    {siteConfig.pricing.elite.originalPriceInr}
                  </span>
                  <div className="text-2xl md:text-3xl font-bold text-slate-950 tracking-tight flex items-baseline gap-1.5">
                    {siteConfig.pricing.elite.priceInr}
                    <span className="text-xs md:text-sm font-semibold text-slate-800">
                      ({siteConfig.pricing.elite.usdPrice})
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8 text-slate-950">
                <li className="flex items-center gap-3 text-xs font-medium tracking-tight text-slate-950">
                  <ShieldCheck className="text-amber-950 flex-shrink-0" size={18} />
                  <span>Everything in the Complete Program</span>
                </li>

                <li className="flex items-start gap-3 text-xs font-medium tracking-tight text-slate-950">
                  <ShieldCheck className="text-amber-950 flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-slate-950">
                      Structured 2-Call Mentorship:
                    </span>
                    <div className="pl-3.5 border-l border-slate-950/20 flex flex-col gap-1.5 text-[11px] text-slate-800">
                      <div>
                        <strong className="text-amber-950 font-bold mr-1">Call 1:</strong>
                        Ice-breaker to understand your background & goals
                      </div>
                      <div>
                        <strong className="text-amber-950 font-bold mr-1">Call 2:</strong>
                        Personalized career roadmap + resume/portfolio feedback
                      </div>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-xs font-medium tracking-tight text-slate-950">
                  <ShieldCheck className="text-amber-950 flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-slate-950">
                      Tailored to your goal:
                    </span>
                    <div className="pl-3.5 border-l border-slate-950/20 flex flex-col gap-1.5 text-[11px] text-slate-800">
                      <div>
                        <strong className="text-amber-950 font-bold mr-1">
                          Students & Freshers:
                        </strong>{" "}
                        Resume & Portfolio Review
                      </div>
                      <div>
                        <strong className="text-amber-950 font-bold mr-1">
                          Switchers:
                        </strong>{" "}
                        Career Transition Plan
                      </div>
                      <div>
                        <strong className="text-amber-950 font-bold mr-1">
                          Freelancers:
                        </strong>{" "}
                        Client Acquisition & Pricing Strategy
                      </div>
                    </div>
                  </div>
                </li>

                <li className="flex items-center gap-3 text-xs font-medium tracking-tight text-slate-950">
                  <ShieldCheck className="text-amber-950 flex-shrink-0" size={18} />
                  <span>Direct Access</span>
                </li>

                <li className="flex items-center gap-3 text-xs font-medium tracking-tight text-red-800/90">
                  <XCircle className="text-red-700 flex-shrink-0" size={18} />
                  <span>Not 1-on-1 live sessions</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleCheckout("elite")}
              disabled={loadingPlan === "elite"}
              className={`btn-primary w-full bg-slate-950 text-white hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(0,0,0,0.35)] border-transparent flex-col py-2.5 gap-0.5 ${
                loadingPlan === "elite" ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <span className="flex items-center gap-2">
                {loadingPlan === "elite" ? "Initializing..." : "Get Access"}
                <ArrowRight size={16} />
              </span>
              <span className="text-[10px] font-medium opacity-70 flex items-center gap-1 text-white/80">
                <img
                  src="https://razorpay.com/favicon.ico"
                  alt="Razorpay"
                  className="w-3 h-3 grayscale invert brightness-0"
                />
                Secured by Razorpay
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Under Pricing */}
      <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
        <figure className="border-l-2 border-primary/70 pl-4 text-left">
          <div className="mb-2 flex gap-0.5 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="text-sm font-medium leading-snug text-white">
            “Closed my first international client at $1,000/month.”
          </blockquote>
          <figcaption className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            @UmarKhan
          </figcaption>
        </figure>

        <figure className="border-l-2 border-primary/70 pl-4 text-left">
          <div className="mb-2 flex gap-0.5 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="text-sm font-medium leading-snug text-white">
            “Manas personally answers every query about the course or career.”
          </blockquote>
          <figcaption className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Sameer Sankhla
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
