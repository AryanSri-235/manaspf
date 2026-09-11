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
        <p className="text-xl font-black text-white mb-2 tracking-tight">
          {portfolioConfig.name}
        </p>
        <p className="text-slate-400 text-xs sm:text-sm mb-6 font-normal">
          {portfolioConfig.pillarsSummary}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs sm:text-sm font-medium">
          <a
            href={portfolioConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-primary transition-colors inline-flex items-center gap-1.5"
          >
            LinkedIn <ExternalLink size={13} />
          </a>
          <button
            type="button"
            onClick={() => scrollTo("proof")}
            className="text-slate-300 hover:text-primary transition-colors cursor-pointer"
          >
            Proof &amp; Work
          </button>
          <button
            type="button"
            onClick={() => scrollTo("what-i-do")}
            className="text-slate-300 hover:text-primary transition-colors cursor-pointer"
          >
            What I Do
          </button>
          <button
            type="button"
            onClick={() => scrollTo("about-cta")}
            className="text-slate-300 hover:text-primary transition-colors cursor-pointer"
          >
            Start A Campaign
          </button>
        </div>

        <p className="text-slate-600 text-xs font-normal">
          © {new Date().getFullYear()} {portfolioConfig.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
