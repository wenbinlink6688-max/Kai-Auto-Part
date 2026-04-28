"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mlgpdlny");
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
                { icon: Mail, label: "Email", value: "ly6267588575@gmail.com" },
                { icon: Phone, label: "Phone", value: "(626) 758-8575" },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Monterey Park, CA",
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
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-[#c8a04a]/10 border border-[#c8a04a]/30 flex items-center justify-center mb-6">
                  <Mail size={24} className="text-[#c8a04a]" />
                </div>
                <p className="text-[#e8e8e8] text-lg font-medium mb-2">
                  Inquiry Sent!
                </p>
                <p className="text-[#888] text-sm">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[10px] tracking-[0.3em] uppercase text-[#555] mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[#0e0e0e] border border-[#333] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#c8a04a] focus:outline-none transition-colors placeholder:text-[#444]"
                    placeholder="Your name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] tracking-[0.3em] uppercase text-[#555] mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#0e0e0e] border border-[#333] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#c8a04a] focus:outline-none transition-colors placeholder:text-[#444]"
                    placeholder="your@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>
              <div>
                <label htmlFor="vehicle" className="block text-[10px] tracking-[0.3em] uppercase text-[#555] mb-2">
                  Vehicle
                </label>
                <input
                  id="vehicle"
                  type="text"
                  name="vehicle"
                  className="w-full bg-[#0e0e0e] border border-[#333] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#c8a04a] focus:outline-none transition-colors placeholder:text-[#444]"
                  placeholder="Year, Make, Model (e.g. 2024 BMW M4)"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] tracking-[0.3em] uppercase text-[#555] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-[#0e0e0e] border border-[#333] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#c8a04a] focus:outline-none transition-colors placeholder:text-[#444] resize-none"
                  placeholder="Tell us what parts you're looking for..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 bg-[#c8a04a] text-black font-semibold tracking-wider uppercase text-sm hover:bg-[#d4b565] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,160,74,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
