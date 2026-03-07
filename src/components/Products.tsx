"use client";

import { useState } from "react";
import { featuredProducts } from "@/data/products";
import { Tag, Flame, TrendingUp, Sparkles, Star } from "lucide-react";

const popularityConfig = {
  hot: { label: "Hot", icon: Flame, color: "text-red-400" },
  trending: { label: "Trending", icon: TrendingUp, color: "text-blue-400" },
  new: { label: "New", icon: Sparkles, color: "text-green-400" },
  classic: { label: "Classic", icon: Star, color: "text-[#c8a04a]" },
};

const allCategories = [
  "All",
  ...Array.from(new Set(featuredProducts.map((p) => p.category))),
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-28 bg-[#0e0e0e] diagonal-stripe">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-[#c8a04a]" />
          <span className="text-xs tracking-[0.35em] uppercase text-[#c8a04a] font-medium">
            Featured Selection
          </span>
        </div>
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#e8e8e8] tracking-tight mb-4">
          OUR PRODUCTS
        </h2>
        <p className="text-[#888] text-lg font-light max-w-2xl mb-12">
          Hand-picked accessories with current market pricing. Quality parts
          sourced from trusted manufacturers.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs tracking-wider uppercase border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#c8a04a] border-[#c8a04a] text-black font-semibold"
                  : "border-[#333] text-[#888] hover:border-[#c8a04a]/50 hover:text-[#c8a04a]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => {
            const pop = popularityConfig[product.popularity];
            const PopIcon = pop.icon;
            return (
              <div
                key={product.id}
                className="product-card group bg-[#141414] border border-[#222] overflow-hidden"
              >
                {/* Product image */}
                <div className="relative h-48 bg-[#1a1a1a] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="product-image-overlay absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent opacity-60 transition-opacity duration-500" />

                  {/* Popularity badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-sm border border-[#333]">
                    <PopIcon size={12} className={pop.color} />
                    <span className="text-[10px] tracking-wider uppercase text-[#aaa]">
                      {pop.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#555] mb-2">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-[#e8e8e8] mb-2 group-hover:text-[#c8a04a] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="product-tag inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] text-[10px] tracking-wider uppercase text-[#666] transition-all duration-300"
                      >
                        <Tag size={8} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#222]">
                    <div>
                      <span className="text-[10px] tracking-wider uppercase text-[#555] block mb-0.5">
                        Market Price
                      </span>
                      <span className="font-['Bebas_Neue'] text-xl text-[#c8a04a] tracking-wide">
                        {product.priceRange}
                      </span>
                    </div>
                    <button className="px-4 py-2 border border-[#333] text-[10px] tracking-wider uppercase text-[#888] hover:border-[#c8a04a] hover:text-[#c8a04a] transition-all duration-300">
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
