"use client";

import React, { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import { useLenis } from "@/components/SmoothScroll";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const { lenis, scrollTo } = useLenis();

  useEffect(() => {
    if (lenis) {
      const onScroll = (e: { scroll: number }) => {
        setVisible(e.scroll > 500);
      };
      lenis.on("scroll", onScroll);
      return () => {
        lenis.off("scroll", onScroll);
      };
    } else {
      const handleScroll = () => {
        setVisible(window.scrollY > 500);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lenis]);

  return (
    <div
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] transition-all duration-500 transform ${
        visible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-50 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={() => scrollTo("about-cta")}
        className="relative flex items-center gap-2.5 pl-4 pr-5 py-3 md:py-3.5 rounded-full bg-primary hover:bg-primary/95 text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ring-1 ring-primary/20 group cursor-pointer"
        aria-label="Work With Me"
      >
        <MessageSquare
          size={20}
          className="transition-transform group-hover:rotate-12 text-white shrink-0"
        />
        <span className="text-[13px] md:text-sm font-bold whitespace-nowrap leading-none">
          Work With Me
        </span>
        <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping pointer-events-none -z-10" />
      </button>
    </div>
  );
}
