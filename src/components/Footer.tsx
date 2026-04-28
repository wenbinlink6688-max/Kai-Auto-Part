export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c8a04a] to-[#8a6e30] rounded-sm flex items-center justify-center font-['Bebas_Neue'] text-xl text-black tracking-wider">
                K
              </div>
              <div>
                <span className="font-['Bebas_Neue'] text-2xl tracking-[0.15em] text-[#e8e8e8]">
                  KAI
                </span>
                <span className="font-['Bebas_Neue'] text-2xl tracking-[0.15em] text-[#888] ml-2">
                  AUTO PART
                </span>
              </div>
            </div>
            <p className="text-sm text-[#666] font-light leading-relaxed max-w-sm">
              Premium auto exterior accessories for enthusiasts and
              professionals. Quality parts, competitive prices, expert service.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#555] mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              {["Products", "Categories", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-[#888] hover:text-[#c8a04a] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#555] mb-4">
              Top Categories
            </h4>
            <div className="space-y-3">
              {[
                "Spoilers & Wings",
                "Body Kits",
                "Custom Grilles",
                "LED Lighting",
                "Bumpers & Lips",
              ].map((cat) => (
                <span
                  key={cat}
                  className="block text-sm text-[#888] hover:text-[#c8a04a] transition-colors cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555]">
            © {new Date().getFullYear()} KAI AUTO PART by Youngway Axis LLc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#555] hover:text-[#888] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-[#555] hover:text-[#888] cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
