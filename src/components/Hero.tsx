"use client";

import { stats } from "@/data/products";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient carbon-texture overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#222] to-transparent opacity-40" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#222] to-transparent opacity-20" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#222] to-transparent opacity-40" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-[#c8a04a]/20" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r-2 border-b-2 border-[#c8a04a]/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div
          className="animate-fade-up inline-flex items-center gap-3 mb-8"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="w-8 h-px bg-[#c8a04a]" />
          <span className="text-xs tracking-[0.35em] uppercase text-[#c8a04a] font-medium">
            Premium Auto Accessories
          </span>
          <div className="w-8 h-px bg-[#c8a04a]" />
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up font-['Bebas_Neue'] text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tight"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="block text-[#e8e8e8]">ELEVATE</span>
          <span className="block shimmer-text">YOUR RIDE</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up mt-8 text-lg md:text-xl text-[#888] max-w-2xl mx-auto font-light leading-relaxed"
          style={{ animationDelay: "0.6s" }}
        >
          Spoilers, body kits, grilles, bumpers & more — precision-engineered
          exterior accessories for cars, trucks, and SUVs.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#products"
            className="px-10 py-4 bg-[#c8a04a] text-black font-semibold tracking-wider uppercase text-sm hover:bg-[#d4b565] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,160,74,0.3)]"
          >
            Browse Products
          </a>
          <a
            href="#about"
            className="px-10 py-4 border border-[#333] text-[#888] font-medium tracking-wider uppercase text-sm hover:border-[#c8a04a] hover:text-[#c8a04a] transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="animate-fade-up mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-[#333]"
          style={{ animationDelay: "1s" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="md:px-8">
              <div className="font-['Bebas_Neue'] text-4xl text-[#c8a04a]">
                {stat.value}
              </div>
              <div className="text-xs tracking-widest uppercase text-[#555] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#555]">
          Scroll
        </span>
        <ChevronDown size={16} className="text-[#555]" />
      </div>
    </section>
  );
}
