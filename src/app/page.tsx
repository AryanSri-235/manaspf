import React from "react";
import FloatingCTA from "@/components/FloatingCTA";
import HeroSection from "@/components/HeroSection";
import CredibilityNumbers from "@/components/CredibilityNumbers";
import FourWaysSection from "@/components/FourWaysSection";
import AudienceSection from "@/components/AudienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TechStackMarquee from "@/components/TechStackMarquee";
import StorySection from "@/components/StorySection";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import LinkedInBrandingSection from "@/components/LinkedInBrandingSection";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-slate-900">
      {/* Sticky Floating CTA Pill */}
      <FloatingCTA />

      {/* 1. Strong Hero Section */}
      <HeroSection />

      {/* 2. The Numbers / Credibility */}
      <CredibilityNumbers />

      {/* 3. What Do I Actually Do? (Four Ways I Help Businesses Grow) */}
      <FourWaysSection />

      {/* 4. Who I Work With (Who Can I Help?) */}
      <AudienceSection />

      {/* 5. My Work / Case Studies (Things I've Built, Tested & Broken Down) */}
      <CaseStudiesSection />

      {/* 6. My Marketing Stack */}
      <TechStackMarquee />

      {/* 7. The Story (I Didn't Start With a Plan. I Started By Trying Things.) */}
      <StorySection />

      {/* 8. Why Work With Me? (I Don't Just Run Ads) */}
      <WhyWorkWithMe />

      {/* 9. LinkedIn Personal Branding (Your LinkedIn Profile Is Probably Underperforming) */}
      <LinkedInBrandingSection />

      {/* 10. Final CTA (Have Something You Want To Grow? Let's talk.) */}
      <ContactCTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
