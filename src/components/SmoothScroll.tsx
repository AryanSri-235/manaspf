"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

interface LenisContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => void;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => {},
});

export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Instantiate Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential ease
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // RAF loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global interceptor for all internal anchor links (e.g. href="#case-studies-section")
    // This prevents default browser jumps to top or hash conflicts in Next.js
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const targetEl = document.querySelector(href);
        if (targetEl) {
          lenis.scrollTo(targetEl as HTMLElement, {
            offset: -80,
            duration: 1.2,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (
    target: string | HTMLElement,
    options: { offset?: number; duration?: number } = {}
  ) => {
    if (!lenisRef.current) {
      if (typeof target === "string") {
        const el = document.querySelector(target) || document.getElementById(target.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (typeof target === "string") {
      const selector = target.startsWith("#") ? target : `#${target}`;
      const el = document.querySelector(selector);
      if (el) {
        lenisRef.current.scrollTo(el as HTMLElement, {
          offset: options.offset ?? -80,
          duration: options.duration ?? 1.2,
        });
      }
    } else if (target) {
      lenisRef.current.scrollTo(target, {
        offset: options.offset ?? -80,
        duration: options.duration ?? 1.2,
      });
    }
  };

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}
