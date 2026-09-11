"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLenis } from "@/components/SmoothScroll";
import { portfolioConfig } from "@/data/portfolioData";

export default function Navbar() {
  const { scrollTo } = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "GTM Strategy", target: "what-i-do" },
    { label: "Performance", target: "proof" },
    { label: "AI Campaigns", target: "what-i-do" },
    { label: "LinkedIn", target: "linkedin" },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    scrollTo(target);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3"
          : "bg-white/85 backdrop-blur-md border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-black text-slate-950 tracking-tighter hover:text-primary transition-colors cursor-pointer"
        >
          {portfolioConfig.name}
        </button>

        {/* Center: GTM Strategy | Performance | AI Campaigns | LinkedIn */}
        <nav className="hidden md:flex items-center gap-2 bg-slate-50/90 border border-slate-200/80 px-4 py-1.5 rounded-full shadow-xs text-xs font-bold text-slate-600">
          <button
            type="button"
            onClick={() => handleNavClick("what-i-do")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            GTM Strategy
          </button>
          <span className="text-slate-300 font-normal">|</span>
          <button
            type="button"
            onClick={() => handleNavClick("proof")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Performance
          </button>
          <span className="text-slate-300 font-normal">|</span>
          <button
            type="button"
            onClick={() => handleNavClick("what-i-do")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            AI Campaigns
          </button>
          <span className="text-slate-300 font-normal">|</span>
          <button
            type="button"
            onClick={() => handleNavClick("linkedin")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            LinkedIn
          </button>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick("about-cta")}
            className="btn-primary py-2 px-5 text-xs font-bold shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-1.5"
          >
            Let&apos;s Talk <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.target)}
                className="w-full text-left py-2 px-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-primary transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => handleNavClick("about-cta")}
              className="btn-primary w-full py-3 text-sm font-medium justify-center"
            >
              Let&apos;s Talk <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
