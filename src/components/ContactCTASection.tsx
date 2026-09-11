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
      className="py-16 lg:py-24 bg-white section-overflow-guard flex flex-col justify-center"
    >
      {/* Big Dark Card Container (Inspired directly by manaspf.vercel.app) */}
      <div className="container mx-auto px-6">
        <ScrollReveal duration={0.7} yOffset={30}>
          <div className="bg-slate-950 max-w-5xl mx-auto rounded-[3rem] sm:rounded-[3.5rem] p-8 sm:p-14 lg:p-20 shadow-2xl text-white relative overflow-hidden">
            {/* Background glow accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* Pill Badge */}
              <div className="inline-block px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-primary text-xs font-black uppercase tracking-widest mb-6">
                Ready To Scale
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
                Have Something You <br />
                <span className="text-primary">Want To Grow?</span>
              </h2>

              {/* 4 Targets Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-slate-300 font-bold text-sm sm:text-base">
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/80 shadow-xs">
                  A business.
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/80 shadow-xs">
                  A campaign.
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/80 shadow-xs">
                  A personal brand.
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/80 shadow-xs">
                  An idea.
                </div>
              </div>

              {/* Curiosity / Philosophy Quote */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-left mb-8 space-y-3">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Why Work With Me?
                </p>
                <blockquote className="text-base sm:text-lg font-bold text-white italic border-l-2 border-primary pl-3">
                  “Because I probably won&apos;t tell you: ‘This is how everyone in the industry does it.’”
                </blockquote>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  I like experimenting. I like taking creative risks. And I like finding answers through data instead of assumptions.
                </p>
              </div>

              <p className="text-2xl sm:text-3xl font-black text-white mb-8">
                Let&apos;s talk.
              </p>

              {/* Action Buttons: LinkedIn + WhatsApp */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <a
                  href={portfolioConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-4 px-8 text-base font-bold shadow-xl shadow-primary/30 inline-flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
                >
                  Connect on LinkedIn <ExternalLink size={18} />
                </a>

                <a
                  href={portfolioConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full text-base shadow-lg shadow-emerald-900/30 inline-flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer transition-all hover:scale-105"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>

              {/* Direct Inquiry Form */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-[2.5rem] p-6 sm:p-10 text-left shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center sm:text-left">
                  Or drop a quick message here:
                </h3>

                {submitted ? (
                  <div className="text-center py-6">
                    <CheckCircle2 size={44} className="text-primary mx-auto mb-3" />
                    <h4 className="text-xl font-bold text-white mb-1">Inquiry Sent</h4>
                    <p className="text-xs text-slate-400 font-normal">
                      Thanks for reaching out! Manas will review your message and reply promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-primary text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-primary text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        What Are You Looking To Grow?
                      </label>
                      <select
                        value={formData.growthType}
                        onChange={(e) => setFormData({ ...formData, growthType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-primary text-sm font-medium"
                      >
                        <option value="A business">A business</option>
                        <option value="A campaign">A campaign</option>
                        <option value="A personal brand">A personal brand</option>
                        <option value="A new product">A new product / idea</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Project Details / Timeline
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="What is your current growth bottleneck, ad budget, or timeline?"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-primary text-sm font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full py-4 text-base shadow-lg shadow-primary/30 inline-flex items-center justify-center gap-2 cursor-pointer font-bold"
                    >
                      {loading ? "Sending..." : "Submit Inquiry"} <Send size={16} />
                    </button>
                  </form>
                )}
              </div>

              {/* Core Statement Banner */}
              <div className="mt-12 pt-8 border-t border-slate-800 text-center">
                <p className="text-xl sm:text-2xl font-black text-white leading-snug tracking-tight mb-2">
                  “Creative enough to get attention.{" "}
                  <span className="text-primary block sm:inline">
                    Data-driven enough to prove it worked.”
                  </span>
                </p>
                <p className="text-xs font-medium text-slate-400 tracking-wide">
                  {portfolioConfig.pillarsSummary}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
