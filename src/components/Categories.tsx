"use client";

import { categories } from "@/data/products";

export default function Categories() {
  return (
    <section id="categories" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-[#c8a04a]" />
          <span className="text-xs tracking-[0.35em] uppercase text-[#c8a04a] font-medium">
            What We Offer
          </span>
        </div>
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#e8e8e8] tracking-tight mb-4">
          PRODUCT CATEGORIES
        </h2>
        <p className="text-[#888] text-lg font-light max-w-2xl mb-16">
          From aerodynamic spoilers to protective accessories — everything to
          transform your vehicle&apos;s exterior.
        </p>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className="group relative p-6 bg-[#141414] border border-[#222] hover:border-[#c8a04a]/30 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#c8a04a] group-hover:w-full transition-all duration-500" />

              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="font-semibold text-[#e8e8e8] tracking-wide mb-2 group-hover:text-[#c8a04a] transition-colors duration-300">
                {cat.name}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed mb-4">
                {cat.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#555] tracking-wider uppercase">
                  {cat.productCount} Products
                </span>
                <span className="text-[#c8a04a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
