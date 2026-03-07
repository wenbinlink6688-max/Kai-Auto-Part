export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  priceRange: string;
  priceMin: number;
  priceMax: number;
  tags: string[];
  popularity: "hot" | "trending" | "new" | "classic";
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "spoilers",
    name: "Spoilers & Wings",
    description: "Rear spoilers, lip spoilers, GT wings for enhanced aerodynamics and aggressive stance",
    icon: "🏎️",
    productCount: 24,
  },
  {
    id: "body-kits",
    name: "Body Kits",
    description: "Full body kits and ground effects packages for a complete exterior transformation",
    icon: "🔧",
    productCount: 18,
  },
  {
    id: "grilles",
    name: "Custom Grilles",
    description: "Mesh, billet, CNC-machined, and honeycomb grilles in chrome, black, and carbon fiber",
    icon: "◼️",
    productCount: 32,
  },
  {
    id: "bumpers",
    name: "Bumpers & Lips",
    description: "Front and rear bumpers, bumper lips, splitters, and chin spoilers",
    icon: "🛡️",
    productCount: 28,
  },
  {
    id: "fender-flares",
    name: "Fender Flares",
    description: "Bolt-on and OE-style fender flares for wider tire coverage and muscular look",
    icon: "💪",
    productCount: 16,
  },
  {
    id: "side-skirts",
    name: "Side Skirts",
    description: "Rocker panel extensions and side skirts for a lowered, track-ready profile",
    icon: "➡️",
    productCount: 20,
  },
  {
    id: "led-lighting",
    name: "LED Lighting",
    description: "Headlights, tail lights, fog lights, DRLs, and accent lighting upgrades",
    icon: "💡",
    productCount: 45,
  },
  {
    id: "chrome-trim",
    name: "Chrome & Trim",
    description: "Chrome delete kits, trim pieces, mirror covers, and door handle overlays",
    icon: "✨",
    productCount: 38,
  },
  {
    id: "window-visors",
    name: "Window Visors",
    description: "Rain guards, wind deflectors, and window visors for all-weather ventilation",
    icon: "🌧️",
    productCount: 22,
  },
  {
    id: "mud-flaps",
    name: "Mud Flaps & Guards",
    description: "Custom-fit mud flaps and splash guards for paint protection",
    icon: "🛞",
    productCount: 15,
  },
  {
    id: "car-covers",
    name: "Car Covers",
    description: "All-weather, indoor, and custom-fit car covers for maximum protection",
    icon: "🧥",
    productCount: 20,
  },
  {
    id: "roof-racks",
    name: "Roof Racks & Cargo",
    description: "Roof racks, cross bars, cargo boxes, and bike/kayak carriers",
    icon: "📦",
    productCount: 26,
  },
];

export const featuredProducts: Product[] = [
  {
    id: "sp-001",
    name: "Carbon Fiber GT Wing",
    category: "Spoilers & Wings",
    description:
      "Universal 57\" carbon fiber GT wing with adjustable brackets. Real 3K twill weave carbon, aluminum stands with multiple angle positions.",
    priceRange: "$280 – $520",
    priceMin: 280,
    priceMax: 520,
    tags: ["Carbon Fiber", "Universal"],
    popularity: "hot",
    image: "/images/products/spoiler-gt-wing.jpg",
  },
  {
    id: "sp-002",
    name: "Flush Mount Lip Spoiler",
    category: "Spoilers & Wings",
    description:
      "Low-profile trunk lip spoiler in ABS plastic with matte black finish. Vehicle-specific fitment available for most sedans.",
    priceRange: "$45 – $120",
    priceMin: 45,
    priceMax: 120,
    tags: ["ABS", "Sedan"],
    popularity: "trending",
    image: "/images/products/spoiler-lip.jpg",
  },
  {
    id: "bk-001",
    name: "Wide Body Aero Kit",
    category: "Body Kits",
    description:
      "Complete wide body kit including front bumper, rear bumper, side skirts, and fender flares. Polyurethane construction for durability.",
    priceRange: "$800 – $2,500",
    priceMin: 800,
    priceMax: 2500,
    tags: ["Polyurethane", "Full Kit"],
    popularity: "hot",
    image: "/images/products/body-kit.jpg",
  },
  {
    id: "gr-001",
    name: "Honeycomb Mesh Grille",
    category: "Custom Grilles",
    description:
      "ABS honeycomb mesh front grille replacement in gloss black. Direct OEM fit with no modifications needed.",
    priceRange: "$85 – $280",
    priceMin: 85,
    priceMax: 280,
    tags: ["Gloss Black", "OEM Fit"],
    popularity: "trending",
    image: "/images/products/grille-mesh.jpg",
  },
  {
    id: "gr-002",
    name: "Chrome Billet Grille Insert",
    category: "Custom Grilles",
    description:
      "CNC-machined T6061 aluminum billet grille with polished chrome finish. Bolt-over or replacement styles available.",
    priceRange: "$120 – $450",
    priceMin: 120,
    priceMax: 450,
    tags: ["Aluminum", "Chrome"],
    popularity: "classic",
    image: "/images/products/grille-chrome.jpg",
  },
  {
    id: "bp-001",
    name: "Aggressive Front Bumper",
    category: "Bumpers & Lips",
    description:
      "Sport-style front bumper with integrated fog light housings and splitter. PP plastic construction, paintable finish.",
    priceRange: "$200 – $850",
    priceMin: 200,
    priceMax: 850,
    tags: ["Paintable", "Sport"],
    popularity: "hot",
    image: "/images/products/bumper-front.jpg",
  },
  {
    id: "bp-002",
    name: "Carbon Fiber Front Lip",
    category: "Bumpers & Lips",
    description:
      "Real carbon fiber front bumper lip spoiler with UV-resistant clear coat. Universal fit with adjustable hardware.",
    priceRange: "$150 – $380",
    priceMin: 150,
    priceMax: 380,
    tags: ["Carbon Fiber", "Universal"],
    popularity: "trending",
    image: "/images/products/bumper-lip.jpg",
  },
  {
    id: "ff-001",
    name: "Bolt-On Fender Flares",
    category: "Fender Flares",
    description:
      "Textured black ABS bolt-on fender flares. Adds 2\" of coverage per side. Includes stainless steel hardware.",
    priceRange: "$180 – $400",
    priceMin: 180,
    priceMax: 400,
    tags: ["Textured", "Bolt-On"],
    popularity: "classic",
    image: "/images/products/fender-flares.jpg",
  },
  {
    id: "ss-001",
    name: "Gloss Black Side Skirts",
    category: "Side Skirts",
    description:
      "Universal side skirt extensions in gloss black ABS. 86\" length, can be trimmed to fit. Includes mounting hardware.",
    priceRange: "$80 – $200",
    priceMin: 80,
    priceMax: 200,
    tags: ["Universal", "Gloss Black"],
    popularity: "new",
    image: "/images/products/side-skirts.jpg",
  },
  {
    id: "led-001",
    name: "Sequential LED Tail Lights",
    category: "LED Lighting",
    description:
      "Smoked lens LED tail lights with sequential turn signal. Plug-and-play wiring harness included.",
    priceRange: "$180 – $450",
    priceMin: 180,
    priceMax: 450,
    tags: ["Sequential", "Smoked"],
    popularity: "hot",
    image: "/images/products/led-taillights.jpg",
  },
  {
    id: "led-002",
    name: "DRL LED Strip Kit",
    category: "LED Lighting",
    description:
      "Flexible LED daytime running light strips with switchback amber turn signal. Waterproof IP67 rated.",
    priceRange: "$25 – $80",
    priceMin: 25,
    priceMax: 80,
    tags: ["Switchback", "IP67"],
    popularity: "trending",
    image: "/images/products/led-drl.jpg",
  },
  {
    id: "ct-001",
    name: "Chrome Delete Wrap Kit",
    category: "Chrome & Trim",
    description:
      "Satin black vinyl wrap kit for all chrome trim. Pre-cut for specific vehicle models. 3M adhesive backing.",
    priceRange: "$35 – $120",
    priceMin: 35,
    priceMax: 120,
    tags: ["3M Vinyl", "Pre-Cut"],
    popularity: "new",
    image: "/images/products/chrome-delete.jpg",
  },
  {
    id: "wv-001",
    name: "In-Channel Wind Deflectors",
    category: "Window Visors",
    description:
      "Smoke-tinted acrylic wind deflectors. In-channel mount, no exterior tape visible. 4-piece set.",
    priceRange: "$30 – $90",
    priceMin: 30,
    priceMax: 90,
    tags: ["In-Channel", "4-Piece"],
    popularity: "classic",
    image: "/images/products/window-visor.jpg",
  },
  {
    id: "mf-001",
    name: "Rally Armor Mud Flaps",
    category: "Mud Flaps & Guards",
    description:
      "Heavy-duty urethane mud flaps with red or white logo. Custom-fit brackets, no drilling required.",
    priceRange: "$25 – $100",
    priceMin: 25,
    priceMax: 100,
    tags: ["Urethane", "No-Drill"],
    popularity: "classic",
    image: "/images/products/mud-flaps.jpg",
  },
  {
    id: "cc-001",
    name: "All-Weather Car Cover",
    category: "Car Covers",
    description:
      "5-layer waterproof car cover with UV protection, soft inner lining, and elastic hem. Includes storage bag.",
    priceRange: "$40 – $180",
    priceMin: 40,
    priceMax: 180,
    tags: ["Waterproof", "UV Shield"],
    popularity: "classic",
    image: "/images/products/car-cover.jpg",
  },
  {
    id: "rr-001",
    name: "Universal Roof Cross Bars",
    category: "Roof Racks & Cargo",
    description:
      "Adjustable aluminum roof cross bars with anti-theft locks. 150 lb load capacity. Fits factory side rails.",
    priceRange: "$60 – $200",
    priceMin: 60,
    priceMax: 200,
    tags: ["Aluminum", "Anti-Theft"],
    popularity: "trending",
    image: "/images/products/roof-rack.jpg",
  },
];

export const stats = [
  { label: "Products", value: "300+" },
  { label: "Categories", value: "12" },
  { label: "Brands", value: "50+" },
  { label: "Years in Business", value: "10+" },
];
