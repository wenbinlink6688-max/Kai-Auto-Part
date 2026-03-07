"use client";

import { Shield, Truck, Award, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    desc: "Every product is rigorously inspected and tested. We only stock parts from certified manufacturers.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    desc: "Nationwide shipping with tracking. Most orders ship within 1–2 business days from our warehouse.",
  },
  {
    icon: Award,
    title: "Expert Selection",
    desc: "10+ years of industry expertise. We curate only parts that meet our strict quality and fitment standards.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "Our team knows cars inside and out. Get personalized fitment advice and technical support.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0a0a0a] relative">
      {/* Top divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#c8a04a]" />
              <span className="text-xs tracking-[0.35em] uppercase text-[#c8a04a] font-medium">
                About Us
              </span>
            </div>
            <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#e8e8e8] tracking-tight mb-6">
              DRIVEN BY
              <br />
              <span className="text-[#c8a04a]">PASSION</span>
            </h2>
            <div className="space-y-4 text-[#888] font-light leading-relaxed">
              <p>
                Wenbin Inc is a premier supplier of automotive exterior
                accessories, serving enthusiasts, body shops, and dealerships
                across the United States. With over a decade of experience, we
                understand what makes a vehicle stand out.
              </p>
              <p>
                We specialize in sourcing high-quality aftermarket parts —
                spoilers, body kits, grilles, lighting, and more — at
                competitive prices. Our catalog spans hundreds of products
                covering the most popular vehicle makes and models.
              </p>
              <p>
                Whether you&apos;re building a show car or upgrading your daily
                driver, Wenbin Inc delivers the parts you need with the service
                you deserve.
              </p>
            </div>
          </div>

          {/* Right features */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="group p-6 bg-[#141414] border border-[#222] hover:border-[#c8a04a]/20 transition-all duration-500"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <feat.icon
                  size={28}
                  className="text-[#c8a04a] mb-4 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="font-semibold text-[#e8e8e8] tracking-wide mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
