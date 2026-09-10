import React from "react";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import HeroSection from "@/components/HeroSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FourWaysSection from "@/components/FourWaysSection";
import LinkedInBrandingSection from "@/components/LinkedInBrandingSection";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-slate-900">
      {/* Sleek Minimal Top Navbar */}
      <Navbar />

      {/* Floating CTA Pill */}
      <FloatingCTA />

      {/* SCROLL 1: HERO */}
      <HeroSection />

      {/* SCROLL 2: PROOF (Don't take my word for it. Look at what happened.) */}
      <CaseStudiesSection />

      {/* SCROLL 3: WHAT I ACTUALLY DO (Four Ways I Help Businesses Grow) */}
      <FourWaysSection />

      {/* SCROLL 4: LINKEDIN (LinkedIn is my playground. But I don't treat it like everyone else.) */}
      <LinkedInBrandingSection />

      {/* SCROLL 5: ABOUT + PHILOSOPHY + FINAL CTA */}
      <ContactCTASection />

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
