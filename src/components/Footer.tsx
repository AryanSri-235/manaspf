"use client";

import React from "react";
import { portfolioConfig } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";
import { useLenis } from "@/components/SmoothScroll";

export default function Footer() {
  const { scrollTo } = useLenis();

  return (
    <footer className="py-14 bg-slate-950 text-center border-t border-slate-900 mt-0 flex flex-col items-center justify-center relative z-20">
      <div className="container mx-auto px-6 max-w-xl">
        <p className="text-xl font-bold text-white mb-2 tracking-tight">
          {portfolioConfig.name}
        </p>
        <p className="text-slate-400 text-sm mb-6">
          Performance Marketing · AI Campaigns · Founder-Led Growth
        </p>

        <div className="flex items-center justify-center gap-6 mb-8 text-sm font-semibold">
          <a
            href={portfolioConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-primary transition-colors inline-flex items-center gap-1.5"
          >
            LinkedIn Profile <ExternalLink size={14} />
          </a>
          <button
            type="button"
            onClick={() => scrollTo("story-section")}
            className="text-slate-300 hover:text-primary transition-colors cursor-pointer"
          >
            About My Journey
          </button>
          <button
            type="button"
            onClick={() => scrollTo("case-studies-section")}
            className="text-slate-300 hover:text-primary transition-colors cursor-pointer"
          >
            Case Studies
          </button>
        </div>

        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} {portfolioConfig.name}. Built for measurable growth.
        </p>
      </div>
    </footer>
  );
}
