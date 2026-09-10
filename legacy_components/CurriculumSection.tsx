"use client";

import React, { useState } from "react";
import {
  Globe,
  Target,
  User,
  Crosshair,
  Tag,
  Music,
  Ghost,
  Pen,
  BrainCircuit,
  Layout,
  Calculator,
  Settings,
  Shield,
  Handshake,
  TrendingUp,
  Briefcase,
  ShoppingCart,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { curriculumModules } from "@/data/courseData";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe size={20} strokeWidth={2} />,
  target: <Target size={20} strokeWidth={2} />,
  user: <User size={20} strokeWidth={2} />,
  crosshair: <Crosshair size={20} strokeWidth={2} />,
  tag: <Tag size={20} strokeWidth={2} />,
  google: (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  ),
  meta: (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.025C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  music: <Music size={20} strokeWidth={2} />,
  ghost: <Ghost size={20} strokeWidth={2} />,
  x: (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.86 0 1.56-.7 1.56-1.56s-.7-1.56-1.56-1.56-1.56.7-1.56 1.56.7 1.56 1.56 1.56m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  ),
  "shopping-cart": <ShoppingCart size={20} strokeWidth={2} />,
  pen: <Pen size={20} strokeWidth={2} />,
  "brain-circuit": <BrainCircuit size={20} strokeWidth={2} />,
  panels: <Layout size={20} strokeWidth={2} />,
  calculator: <Calculator size={20} strokeWidth={2} />,
  settings: <Settings size={20} strokeWidth={2} />,
  shield: <Shield size={20} strokeWidth={2} />,
  handshake: <Handshake size={20} strokeWidth={2} />,
  "trending-up": <TrendingUp size={20} strokeWidth={2} />,
  briefcase: <Briefcase size={20} strokeWidth={2} />,
};

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToPricing = () => {
    const el = document.getElementById("pricing-section");
    if (el) {
      const topOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="complete-stack"
      className="py-16 lg:py-32 bg-slate-50 border-y border-slate-200/60 section-overflow-guard"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight">
            The Complete <span className="text-primary">Performance Stack</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            21 Modules. 100+ Topics. One Unified System.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {curriculumModules.map((module, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={module.number}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "ring-2 ring-primary border-transparent shadow-2xl z-10 md:col-span-2 lg:col-span-1 bg-white"
                    : "border-red-500/10 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleModule(i)}
                  className="w-full text-left p-6 md:p-8 flex flex-col gap-4 relative z-10"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-black text-primary/40 tracking-widest uppercase">
                        Module {module.number}
                      </span>
                      <div className="p-2 rounded-lg bg-white shadow-sm text-primary">
                        {iconMap[module.iconName] || <Target size={20} />}
                      </div>
                    </div>
                    <div
                      className={`text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </div>

                  <h3
                    className={`text-lg md:text-xl font-bold leading-tight tracking-tight ${
                      isOpen ? "text-slate-900" : "text-slate-800"
                    }`}
                  >
                    {module.title}
                  </h3>

                  {!isOpen && (
                    <p className="text-[10px] font-bold text-primary/60 tracking-widest uppercase mt-2">
                      Click to reveal topics
                    </p>
                  )}

                  {isOpen && (
                    <div className="pt-6 border-t border-slate-100 mt-4 transition-all duration-300">
                      <ul className="space-y-3">
                        {module.topics.map((topic, topicIdx) => (
                          <li
                            key={topicIdx}
                            className="flex items-start gap-3 group"
                          >
                            <div className="mt-1 shrink-0">
                              <CheckCircle2
                                className="text-primary"
                                size={16}
                                strokeWidth={2}
                              />
                            </div>
                            <span className="text-sm md:text-base text-slate-700 font-medium leading-tight">
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>

                {/* Background Watermark Number */}
                <div className="absolute -bottom-4 -right-2 text-8xl font-black text-slate-200/20 select-none pointer-events-none -z-0">
                  {module.number}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={scrollToPricing}
            className="btn-primary w-full max-w-xs md:max-w-md inline-flex items-center justify-center gap-2"
          >
            Enroll Now to Access All Modules <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
