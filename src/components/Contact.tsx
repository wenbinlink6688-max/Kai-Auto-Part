"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#0e0e0e] diagonal-stripe relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#c8a04a]" />
              <span className="text-xs tracking-[0.35em] uppercase text-[#c8a04a] font-medium">
                Get in Touch
              </span>
            </div>
            <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#e8e8e8] tracking-tight mb-6">
              LET&apos;S TALK
              <br />
              <span className="text-[#c8a04a]">PARTS</span>
            </h2>
            <p className="text-[#888] font-light leading-relaxed mb-12 max-w-lg">
              Need a quote? Have questions about fitment? Our team is ready to
              help you find the right accessories for your vehicle.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "sales@wenbininc.com" },
                { icon: Phone, label: "Phone", value: "(702) 555-0188" },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Las Vegas, NV",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon – Fri, 9AM – 6PM PST",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#141414] border border-[#222] flex items-center justify-center flex-shrink-0">
                    <item.icon
                      size={16}
                      className="text-[#c8a04a]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[#555] mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[#e8e8e8] text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-[#141414] border border-[#222] p-8 md:p-10">
            <h3 className="font-['Bebas_Neue'] text-2xl tracking-wider text-[#e8e8e8] mb-8">
              REQUEST A QUOTE
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-[#555] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#0e0e0e] border border-[#333] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#c8a04a] focus:outline-none transition-colors placeholder:text-[#444]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-[#555] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#0e0e0e] border border-[#333] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#c8a04a] focus:outline-none transition-colors placeholder:text-[#444]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-[#555] mb-2">
                  Vehicle
                </label>
                <input
                  type="text"
                  className="w-full bg-[#0e0e0e] border border-[#333] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#c8a04a] focus:outline-none transition-colors placeholder:text-[#444]"
                  placeholder="Year, Make, Model (e.g. 2024 BMW M4)"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-[#555] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-[#0e0e0e] border border-[#333] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#c8a04a] focus:outline-none transition-colors placeholder:text-[#444] resize-none"
                  placeholder="Tell us what parts you're looking for..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#c8a04a] text-black font-semibold tracking-wider uppercase text-sm hover:bg-[#d4b565] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,160,74,0.3)]"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
