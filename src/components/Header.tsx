"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#222]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#c8a04a] to-[#8a6e30] rounded-sm flex items-center justify-center font-['Bebas_Neue'] text-xl text-black tracking-wider">
              W
            </div>
            <div>
              <span className="font-['Bebas_Neue'] text-2xl tracking-[0.15em] text-[#e8e8e8] group-hover:text-[#c8a04a] transition-colors">
                WENBIN
              </span>
              <span className="font-['Bebas_Neue'] text-2xl tracking-[0.15em] text-[#888] ml-2">
                INC
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-[#888] hover:text-[#c8a04a] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-[#c8a04a] text-black text-sm font-semibold tracking-wider uppercase hover:bg-[#d4b565] transition-colors duration-300"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#888] hover:text-[#c8a04a] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="px-6 pb-6 flex flex-col gap-4 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#222]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#888] hover:text-[#c8a04a] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-6 py-2.5 bg-[#c8a04a] text-black text-sm font-semibold tracking-wider uppercase text-center hover:bg-[#d4b565] transition-colors"
          >
            Get Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
