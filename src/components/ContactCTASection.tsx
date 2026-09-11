"use client";

import React, { useState } from "react";
import { ExternalLink, MessageCircle, CheckCircle2, Send } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ContactCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    growthType: "A business",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="about-cta"
      className="min-h-screen flex flex-col justify-center py-16 lg:py-20 bg-white section-overflow-guard"
    >
      <div className="container mx-auto px-6 max-w-6xl w-full my-auto">
        <ScrollReveal duration={0.7} yOffset={24}>
          <div className="bg-slate-50 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-sm text-slate-900 relative overflow-hidden border border-slate-200/80">
            {/* Subtle glow accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

            {/* 2-Column Split: Left = Text/Quote/CTA buttons, Right = Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
              {/* Left Column (lg:col-span-6): Header + Chips + Quote + Buttons */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  {/* Pill Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-primary text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
                    Ready To Scale
                  </div>

                  {/* Headline */}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 leading-tight text-slate-900">
                    Have Something You <br className="hidden sm:inline" />
                    <span className="text-primary">Want To Grow?</span>
                  </h2>

                  {/* 4 Targets Grid */}
                  <div className="grid grid-cols-2 gap-2.5 mb-5 text-slate-700 font-medium text-xs sm:text-sm">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                      🎯 A business.
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                      🚀 A campaign.
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                      ✨ A personal brand.
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                      💡 An idea.
                    </div>
                  </div>

                  {/* Curiosity / Philosophy Quote */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 text-left mb-6 space-y-2 shadow-2xs">
                    <p className="text-[11px] font-bold text-primary uppercase tracking-widest">
                      Why Work With Me?
                    </p>
                    <blockquote className="text-sm sm:text-base font-medium text-slate-900 italic border-l-2 border-primary pl-3">
                      “Because I probably won&apos;t tell you: ‘This is how everyone in the industry does it.’”
                    </blockquote>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      I like experimenting. I like taking creative risks. And I like finding answers through data instead of assumptions.
                    </p>
                  </div>
                </div>

                {/* Action Buttons: LinkedIn + WhatsApp */}
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href={portfolioConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2.5 px-5 text-xs sm:text-sm font-semibold shadow-md shadow-primary/20 inline-flex items-center gap-2 cursor-pointer"
                  >
                    Connect on LinkedIn <ExternalLink size={15} />
                  </a>

                  <a
                    href={portfolioConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-5 rounded-full text-xs sm:text-sm shadow-md shadow-emerald-900/15 inline-flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
                  >
                    <MessageCircle size={15} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Right Column (lg:col-span-6): Inquiry Form */}
              <div className="lg:col-span-6">
                <div className="bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-7 text-left shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Drop a quick message:
                    </h3>
                    <span className="text-[11px] font-medium text-slate-400">
                      ⚡ Quick Response
                    </span>
                  </div>

                  {submitted ? (
                    <div className="text-center py-8">
                      <CheckCircle2 size={40} className="text-primary mx-auto mb-3" />
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Inquiry Sent</h4>
                      <p className="text-xs text-slate-500 font-normal">
                        Thanks for reaching out! Manas will review your message and reply promptly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Jane Doe"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-primary text-xs sm:text-sm font-normal transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                            Work Email
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="jane@company.com"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-primary text-xs sm:text-sm font-normal transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                          What Are You Looking To Grow?
                        </label>
                        <select
                          value={formData.growthType}
                          onChange={(e) => setFormData({ ...formData, growthType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:border-primary text-xs sm:text-sm font-normal"
                        >
                          <option value="A business">A business</option>
                          <option value="A campaign">A campaign</option>
                          <option value="A personal brand">A personal brand</option>
                          <option value="A new product">A new product / idea</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                          Project Details / Timeline
                        </label>
                        <textarea
                          rows={2}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="What is your current growth bottleneck, ad budget, or timeline?"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-primary text-xs sm:text-sm font-normal resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full py-2.5 text-xs sm:text-sm shadow-md shadow-primary/25 inline-flex items-center justify-center gap-2 cursor-pointer font-semibold"
                      >
                        {loading ? "Sending..." : "Submit Inquiry"} <Send size={15} />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Core Statement Banner */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left relative z-10">
              <p className="font-semibold text-slate-700">
                “Creative enough to get attention.{" "}
                <span className="text-primary">Data-driven enough to prove it worked.”</span>
              </p>
              <p className="text-slate-400 font-normal">
                {portfolioConfig.pillarsSummary}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
