import { Project, ServicePhase, Testimonial } from "./types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "nike-run-free",
    title: "Nike — Run Free",
    client: "Nike Global",
    category: "Fashion",
    year: "2025",
    coverUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200",
    description: "An explosive visual campaign celebrating athletic liberation. Combining ultra-slow motion with heavy film grain, the campaign captures the kinetic energy of runner communities through industrial cityscapes at dawn.",
    brief: "To relaunch Nike's performance line with a disruptive visual statement that rejects standard high-gloss stadium advertising in favor of raw, high-contrast, atmospheric street runtime.",
    specs: {
      ratio: "2.39:1 anamorphic",
      lens: "Arri Master Anamorphics (35mm, 50mm, 75mm)",
      shutter: "90° (ultra-sharp fast action slices)",
      frameRate: "120fps high-speed capture"
    },
    colorPalette: [
      { name: "Neon Orange", hex: "#FF5F1F" },
      { name: "Asphalt Gray", hex: "#1C1C1E" },
      { name: "Misty Fog", hex: "#D4D4D8" },
      { name: "Industrial Yellow", hex: "#FFD700" }
    ],
    crew: [
      { role: "Director", name: "Marcus Thorne" },
      { role: "Director of Photography", name: "Yuki Kawauchi, ASC" },
      { role: "Lead Editor", name: "Sara Sterling" },
      { role: "Colorist", name: "Kai Van Der Meer" }
    ],
    videoMockUrl: "https://assets.mixkit.co/videos/preview/mixkit-running-on-asphalt-at-night-42284-large.mp4"
  },
  {
    id: "defender-impossible",
    title: "Defender — Embrace the Impossible",
    client: "Land Rover Ltd",
    category: "Automotive",
    year: "2026",
    coverUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200",
    description: "An atmospheric commercial capturing the raw terrain power of the three-door Land Rover Defender. Engineered for unmatched performance, our camera rigs tracked its path through nocturnal, foggy forest passes and rugged wilderness landscapes.",
    brief: "To relaunch the legendary Land Rover brand narrative. The design demands atmospheric high-contrast headlights penetrating thick forest fog, freezing action details like suspended water micro-particles and tire speed marks.",
    specs: {
      ratio: "2.39:1 anamorphic",
      lens: "Panavision AutoPanatar Anamorphics",
      shutter: "45° (perfect organic mist isolation)",
      frameRate: "24fps cinema native"
    },
    colorPalette: [
      { name: "Xenon LED Glow", hex: "#E0F2FE" },
      { name: "Saddle Tan Leather", hex: "#8B5A2B" },
      { name: "Tarmac Midnight", hex: "#0B0B0B" },
      { name: "Primeval Forest", hex: "#1A251E" }
    ],
    crew: [
      { role: "Director", name: "Yuki Kawauchi" },
      { role: "Director of Photography", name: "Giles Henderson" },
      { role: "Gaffer", name: "Hans-Dieter Schmidt" },
      { role: "Colorist", name: "Kai Van Der Meer" }
    ],
    videoMockUrl: "https://assets.mixkit.co/videos/preview/mixkit-car-headlights-turning-on-at-night-42525-large.mp4"
  },
  {
    id: "redbull-peak-motion",
    title: "RedBull — Peak Motion",
    client: "Red Bull Media House",
    category: "Lifestyle",
    year: "2025",
    coverUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1200",
    description: "A hyper-action adrenaline surge captured at 11,000 feet. We tracked backcountry snowboarders launching over alpine ridges utilizing helicopter-mounted stabilization units and ultra-durable customized camera housings.",
    brief: "To capture raw winter action without motion blur. Visual clarity of sprayed ice chips and high-elevation sunlight is crucial.",
    specs: {
      ratio: "2.35:1 widescreen",
      lens: "Cooke S7/i Full-Frame Primes",
      shutter: "45° to 90° adjustable",
      frameRate: "240fps macro-detail speed"
    },
    colorPalette: [
      { name: "Red Bull Crimson", hex: "#E00B1A" },
      { name: "Glacier Blue", hex: "#00A2E8" },
      { name: "Deep Summit Blue", hex: "#0B1D33" },
      { name: "Sunlight Amber", hex: "#FFCC00" }
    ],
    crew: [
      { role: "Director", name: "Luke Vance" },
      { role: "Director of Photography", name: "Arvid Lindström" },
      { role: "Drone Operator", name: "Chase Miller" },
      { role: "Lead Editor", name: "Ingrid Holm" }
    ],
    videoMockUrl: "https://assets.mixkit.co/videos/preview/mixkit-skier-riding-fast-powder-snow-at-sunset-40292-large.mp4"
  },
  {
    id: "apple-silicon-flow",
    title: "Apple — Silicon Flow",
    client: "Apple Inc.",
    category: "Tech",
    year: "2026",
    coverUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200",
    description: "A liquid art abstraction representing quantum computing architecture. Combining fluid physics macro photography with flawless procedural CG overlays, crafting an immersive visual metaphor of processor speed.",
    brief: "To showcase complex processor capabilities with a minimalist, high-concept visual asset that bridges physical architecture with infinite digital flow.",
    specs: {
      ratio: "1:1 and 16:9 vertical format hybrid",
      lens: "Laowa 24mm f/14 Probe Lens",
      shutter: "180° (natural fluid organic flow)",
      frameRate: "60fps ultra-fluid"
    },
    colorPalette: [
      { name: "Quantum Violet", hex: "#7B2CBF" },
      { name: "Electric Indigo", hex: "#3C096C" },
      { name: "Deep Void Dark", hex: "#040209" },
      { name: "Prism Cyan", hex: "#52B788" }
    ],
    crew: [
      { role: "Creative Director", name: "Jean-Pierre Duprez" },
      { role: "DP (Macro Unit)", name: "Emily Watson" },
      { role: "Houdini CG Artist", name: "Siddharth Mehta" },
      { role: "Color Grade Lead", name: "Clara Sinclair" }
    ],
    videoMockUrl: "https://assets.mixkit.co/videos/preview/mixkit-multicolored-neon-light-strips-in-loop-41916-large.mp4"
  },
  {
    id: "defender-legacy",
    title: "Defender — At Home Anywhere",
    client: "Land Rover Ltd",
    category: "Automotive",
    year: "2025",
    coverUrl: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=1200",
    description: "A commercial masterpiece centering on the exquisite geometry of the 3-door luxury SUV. Highlighting the balance of heritage rugged engineering and modern minimalist interiors equipped with premium digital driver aids.",
    brief: "To visual-hype the premium design transition of the Land Rover series. The campaign highlights performance leather seating texture and modern dashboard integrations.",
    specs: {
      ratio: "2.40:1 Cinemascope",
      lens: "Vintage Kowa Prominar Anamorphics",
      shutter: "180° cinematic flutter",
      frameRate: "24fps film stock simulation"
    },
    colorPalette: [
      { name: "Sandstone Beige", hex: "#C2B280" },
      { name: "Anodized Silver", hex: "#BDC3C7" },
      { name: "Ebony Matte", hex: "#1A1A1A" },
      { name: "Forest Leaf", hex: "#2E4A3F" }
    ],
    crew: [
      { role: "Director", name: "Sven Kaltenbach" },
      { role: "DP / Lead Visualizer", name: "Yuki Kawauchi" },
      { role: "Interior Lighting Specialist", name: "Jürgen Weber" },
      { role: "VFX integration", name: "David Chen" }
    ],
    videoMockUrl: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-at-night-34440-large.mp4"
  },
  {
    id: "prada-monolith",
    title: "Prada — L'Homme Monolith",
    client: "Prada Milano",
    category: "Fashion",
    year: "2026",
    coverUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200",
    description: "An elegant black and white high-fashion monologue. Centering on architectural models framed by stark brutalist geometric columns, creating contrast through absolute shadows and pristine highlight details.",
    brief: "Develop a stark high-art aesthetic for Prada Haute Statement line, utilizing high density dark ranges and architectural symmetry.",
    specs: {
      ratio: "1.33:1 classic Academy ratio",
      lens: "Zeiss Supreme Primes",
      shutter: "180° natural shutter response",
      frameRate: "24fps native B&W"
    },
    colorPalette: [
      { name: "Classic Pitch Black", hex: "#000000" },
      { name: "Stark Alabaster", hex: "#FDFDFD" },
      { name: "Cold Concrete", hex: "#7F8C8D" },
      { name: "Silver Metal", hex: "#CCCCCC" }
    ],
    crew: [
      { role: "Director", name: "Alessio Moretti" },
      { role: "Director of Photography", name: "Camilla Lind" },
      { role: "Creative Stylist", name: "Stefano Marani" },
      { role: "Editor", name: "Kamil Zielinski" }
    ],
    videoMockUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-posing-elegantly-in-black-and-white-42171-large.mp4"
  }
];

export const SERVICE_PHASES: ServicePhase[] = [
  {
    id: "pre-production",
    number: "01",
    title: "Pre-Production",
    description: "Conceptualization, Scriptwriting, Directorial Treatment, Storyboarding,casting, scouting, and mechanical blocking. We draft the foolproof architectural blueprint for production success.",
    tasks: [
      "Director's Treatment and Visual Moodboards",
      "Drafting & tightening commercial screenplay beats",
      "Storyboard design with full angle specs",
      "Talent casting and comprehensive location scouting",
      "Equipment packing list tailored to specific creative briefs"
    ],
    gear: [
      "Aris Studio Planner Software",
      "High-Fidelity FrameDrafting Boards",
      "3D Pre-Visualization Engine (Unreal Engine 5)"
    ],
    duration: "2 to 3 Weeks"
  },
  {
    id: "live-action",
    number: "02",
    title: "Live-Action Production",
    description: "In-camera perfection. Combining cinema-grade heavy weaponry (Arri Alexa 35, Red V-Raptor) with ultra-precise precision stabilizers (Robotic Arms, Tracking Cars) and master lighting.",
    tasks: [
      "Cinematography utilizing master anamorphic optics",
      "Detailed lighting set ups using ARRI/Aputure heavy arrays",
      "Creative directing and precise multi-cam blocking",
      "Camera car and heavy precision drone tracking runs",
      "Stunt and practical effects coordination safely executed"
    ],
    gear: [
      "Arri Alexa 35 & Red V-Raptor 8K VV Cinema Package",
      "Arri Signature Prime & Cooke Anamorphic Lenses",
      "Bolt High-Speed Cinebot Kinetic Arm Rig",
      "DJI Ronin 2 3-Axis Stabilizer + Chase Car Gimbal"
    ],
    duration: "2 to 5 Days Shoot"
  },
  {
    id: "post-production",
    number: "03",
    title: "Post-Production Masterclass",
    description: "Where raw frames become cinema masterpieces. Seamless editorial pacing, photorealistic VFX integration, industry-standard color grading on DaVinci Resolve, and deep acoustic soundscapes.",
    tasks: [
      "Creative narrative design and editorial pacing matching custom music beats",
      "Advanced 3D VFX rendering and compositing layers",
      "Deluxe DaVinci Resolve color grading on dedicated calibrated panels",
      "Sound design with deep atmospheric foley and Dolby Atmos 7.1 spacing",
      "Subtle master rendering in 4K DCI, HDR formats"
    ],
    gear: [
      "Mac Studio Ultra high-performance workstations",
      "DaVinci Resolve Advanced Panel coloring station",
      "Calibrated Flanders Scientific Reference OLED Monitors",
      "Meyer Sound Dolby Atmos theatrical mix room"
    ],
    duration: "3 to 5 Weeks Color & Cut"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "richards-johnson",
    name: "Richards Johnson",
    role: "Creative Director & Lead Designer",
    company: "Nike Global",
    content: "Working with Global Shutter was a seamless experience. Their ability to merge technical precision with untethered, disruptive creativity resulted in campaigns that not only looked stunning but drove record engagement.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "june-lee",
    name: "June Lee",
    role: "Director of Product Film",
    company: "Land Rover Ltd",
    content: "We demanded an aggressive commercial highlighting the Defender's rugged elegance and high-speed fog dispersion. Their team utilized a custom high-frequency shutter setup that froze mud spray and headlight flares in beautiful cinematic detail.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "jona-carter",
    name: "Jona Carter",
    role: "Founder & Brand Lead",
    company: "EcoLux Aesthetics",
    content: "Every project Global Shutter touches turns into a perfect blend of commercial design and high-end artistic purpose. They crafted beautiful stories that represented our sustainable brand values in absolute visual excellence.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  }
];
