"use client";

import React from "react";
import { Target, TrendingUp, Sparkles, Users, Layout } from "lucide-react";
import { roleCards } from "@/data/courseData";

const iconMap: Record<string, React.ReactNode> = {
  target: <Target size={24} strokeWidth={2} />,
  "trending-up": <TrendingUp size={24} strokeWidth={2} />,
  sparkles: <Sparkles size={24} strokeWidth={2} />,
  users: <Users size={24} strokeWidth={2} />,
  layout: <Layout size={24} strokeWidth={2} />,
};

export default function RolesSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 section-overflow-guard">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            What does a <span className="text-primary">Performance Marketer</span> do?
          </h2>
        </div>

        <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {roleCards.map((card, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div
                  className={`w-12 h-12 rounded-2xl ${card.bgColor} ${card.color} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  {iconMap[card.icon]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
