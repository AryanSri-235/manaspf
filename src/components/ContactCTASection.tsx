"use client";

import React, { useState } from "react";
import { ArrowRight, ExternalLink, Mail, MessageCircle, CheckCircle2, Send, Sparkles } from "lucide-react";
import { aboutPhilosophy, portfolioConfig } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

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
      className="min-h-screen flex flex-col justify-center py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden section-overflow-guard"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Top Header Badge */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-primary text-xs font-semibold tracking-wide mb-3">
              Scroll 05 · About &amp; Collaboration
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 leading-tight">
              SO, WHY WORK <span className="text-primary">WITH ME?</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Section: Left Narrative + Right Philosophy Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12">
          {/* Left Column: Personality & Curiosity Narrative */}
          <ScrollReveal duration={0.65} className="lg:col-span-7 flex flex-col justify-center">
            <div className="p-6 sm:p-8 lg:p-9 rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-xl space-y-4">
              <p className="text-sm sm:text-base font-medium text-slate-200">
                Because I probably won&apos;t tell you:
              </p>
              <blockquote className="text-lg sm:text-xl font-black text-primary border-l-4 border-primary pl-4 italic">
                “This is how everyone in the industry does it.”
              </blockquote>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                <p>
                  I&apos;m naturally curious about things that haven&apos;t been tested yet. I like experimenting. I like taking creative risks. And I like finding answers through data instead of assumptions.
                </p>
                <p>
                  Sometimes the experiment works. Sometimes it doesn&apos;t.
                </p>
                <p className="text-white font-medium">
                  But either way: We learn something. And that learning helps us build the next campaign better.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Marketing Philosophy Card */}
          <ScrollReveal duration={0.65} delay={0.15} className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between h-full shadow-xl">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2 block">
                  Core Foundations
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-4 leading-snug">
                  MY MARKETING PHILOSOPHY
                </h3>

                <div className="space-y-2 mb-6">
                  {aboutPhilosophy.philosophyPoints.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5 text-xs sm:text-sm font-normal text-slate-200"
                    >
                      <span className="w-6 h-6 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 text-xs font-semibold">
                        0{pIdx + 1}
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] font-normal uppercase tracking-wider text-slate-400 mb-1">
                  Applied Daily Across
                </p>
                <p className="text-xs sm:text-sm font-semibold text-primary">
                  {aboutPhilosophy.pillars}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Final Conversion CTA Box */}
        <ScrollReveal duration={0.7} yOffset={30}>
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-primary text-xs font-semibold tracking-wide mb-4">
                Next Step
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 leading-tight text-white">
                {aboutPhilosophy.ctaHeadline}
              </h3>

              {/* 4 Targets Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                {aboutPhilosophy.targets.map((target, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-medium text-xs shadow-xs"
                  >
                    {target}
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6 max-w-xl mx-auto">
                {aboutPhilosophy.ctaBody}
              </p>

              {/* Action Buttons: LinkedIn + WhatsApp */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
                <a
                  href={portfolioConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-3 px-6 text-sm font-semibold shadow-md shadow-primary/30 inline-flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
                >
                  Connect on LinkedIn <ExternalLink size={15} />
                </a>

                <a
                  href={portfolioConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-full text-sm shadow-md shadow-emerald-900/30 inline-flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer transition-all hover:scale-105"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>

              {/* Direct Inquiry Form */}
              <div className="p-5 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 text-left">
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
                        <label className="block text-xs font-medium text-slate-400 tracking-wide mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-primary text-sm font-normal"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 tracking-wide mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-primary text-sm font-normal"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 tracking-wide mb-2">
                        What Are You Looking To Grow?
                      </label>
                      <select
                        value={formData.growthType}
                        onChange={(e) => setFormData({ ...formData, growthType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-primary text-sm font-normal"
                      >
                        <option value="A business">A business</option>
                        <option value="A campaign">A campaign</option>
                        <option value="A personal brand">A personal brand</option>
                        <option value="A new product">A new product / idea</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 tracking-wide mb-2">
                        Project Details / Timeline
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="What is your current growth bottleneck, ad budget, or timeline?"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-primary text-sm font-normal"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full py-3.5 text-base shadow-lg shadow-primary/30 inline-flex items-center justify-center gap-2 cursor-pointer font-medium"
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
                  <span className="text-primary block sm:inline">Data-driven enough to prove it worked.”</span>
                </p>
                <p className="text-xs font-normal text-slate-400 tracking-wide">
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
