"use client";

import React, { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = "https://vz-0831aa7f-e1f.b-cdn.net/fe91910c-af1f-427f-b685-94c053b45ca5/playlist.m3u8";

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Video play error:", err));
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Watch This Before You Spend Another <span className="text-primary">₹1 On Ads</span>
          </h2>
        </div>

        <div
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer bg-slate-900 ring-1 ring-slate-200"
          onClick={!isPlaying ? handlePlay : undefined}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="https://socialmasla-pm.pages.dev/pm/assets/video_thumbnail.webp"
            controls={isPlaying}
            playsInline
            src={videoSrc}
          />

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/30 transition-all duration-500">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Play size={40} className="ml-1 fill-current" />
              </div>
              <div className="absolute w-20 h-20 md:w-24 md:h-24 bg-primary/30 rounded-full animate-ping pointer-events-none" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
