"use client";

import { categories } from "@/data/products";

// Bento grid layout — first 4 are large/featured, rest are compact
const layoutClasses: Record<number, string> = {
  0: "sm:col-span-2 sm:row-span-2",   // Spoilers — big hero
  1: "sm:col-span-1 sm:row-span-1",   // Body Kits
  2: "sm:col-span-1 sm:row-span-1",   // Grilles
  3: "sm:col-span-1 sm:row-span-2",   // Bumpers — tall
  4: "sm:col-span-1 sm:row-span-1",   // Fender
  5: "sm:col-span-1 sm:row-span-1",   // Side Skirts
  6: "sm:col-span-2 sm:row-span-1",   // LED — wide
  7: "sm:col-span-1 sm:row-span-1",   // Chrome
  8: "sm:col-span-1 sm:row-span-1",   // Window Visors
  9: "sm:col-span-1 sm:row-span-1",   // Mud Flaps
  10: "sm:col-span-1 sm:row-span-1",  // Car Covers
  11: "sm:col-span-1 sm:row-span-1",  // Roof Racks
};

export default function Categories() {
  return (
    <section id="categories" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — left-aligned, editorial style */}
        <div className="mb-14 max-w-xl">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#c8a04a] font-medium">
            12 Categories
          </span>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl text-[#e8e8e8] tracking-tight mt-3 leading-[0.9]">
            WHAT WE
            <br />
            <span className="text-[#c8a04a]">CARRY</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className={`group relative overflow-hidden cursor-pointer ${layoutClasses[i] || ""}`}
            >
              {/* Background image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-['Bebas_Neue'] text-xl md:text-2xl text-white tracking-wide leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-[12px] text-white/50 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-[#c8a04a] bg-black/40 px-2 py-1 rounded-sm shrink-0 ml-3">
                    {cat.productCount}
                  </span>
                </div>

                {/* Bottom line that animates on hover */}
                <div className="mt-3 h-px bg-white/10 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-0 bg-[#c8a04a] group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
