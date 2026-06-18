import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Sun, Compass, Sliders, Map, RefreshCw } from "lucide-react";

interface Plate {
  label?: string;
  sublabel?: string;
  align: "start" | "center" | "end";
  desc: string;
  type: "seat" | "wheel" | "dashboard" | "headlight" | "macro" | "forest" | "sky" | "profile" | "cabin";
}

interface StoryboardData {
  title: string;
  subtitle: string;
  plates: Plate[];
}

const STORYBOARDS: StoryboardData[] = [
  {
    title: "BOARD 1: INTERIOR INTEGRITY",
    subtitle: "High-contrast cabin textures and modern electronic instrument panels",
    plates: [
      {
        label: "PERFORMANCE SEATS",
        align: "start",
        desc: "Warm daylight rays cascade over bespoke, dual-tone leather ergonomic seating curves, highlighting premium upholstery stitching.",
        type: "seat"
      },
      {
        label: "DESIGNED WITH INTEGRITY",
        align: "start",
        desc: "Tactile leather-wrapped steering wheel showing central Defender logo, accented by crisp cinematic solar lens flare beams from the windshield.",
        type: "wheel"
      },
      {
        label: "DEFENDER",
        align: "center",
        desc: "Bespoke digital electronic cluster showing speed at 0 km/h, current state 'P' highlighted in active green, and a central chassis wireframe.",
        type: "dashboard"
      }
    ]
  },
  {
    title: "BOARD 2: EMBRACE THE IMPOSSIBLE",
    subtitle: "High-power circular LED illumination through nocturnal primeval forest road",
    plates: [
      {
        label: "EMBRACE THE IMPOSSIBLE",
        align: "start",
        desc: "High-luminance laser-projector circular DRL LED headlights casting high-energy light flares into the dark camera lens.",
        type: "headlight"
      },
      {
        label: "DEFENDER",
        align: "center",
        desc: "Macro-lens panning motion across high-precision anodized headlight detailing and embossed logo markings.",
        type: "macro"
      },
      {
        label: "The three-door Defender. At home anywhere.",
        align: "start",
        desc: "Vehicle Xenon high beams cutting a bright trail through moody, dense rainforest pine trees at deep twilight/night.",
        type: "forest"
      }
    ]
  },
  {
    title: "BOARD 3: MODERN ARCHITECTURE",
    subtitle: "Absolute geometric outer silhouette and minimalist command console",
    plates: [
      {
        label: "The three-door Defender. At home anywhere.",
        align: "start",
        desc: "Foggy, dark forest boulevard lane fully illuminated by headlights, shot at cinematic wide perspective.",
        type: "sky"
      },
      {
        align: "center",
        desc: "High-fidelity studio side-profile blueprint of the iconic silver 3-door Defender with rear-mounted spare wheel.",
        type: "profile"
      },
      {
        label: "MODERN DESIGN",
        align: "end",
        desc: "Cockpit instrument console view from center console, showing widescreen map interface and climate controls.",
        type: "cabin"
      }
    ]
  }
];

export default function DefenderStoryboard() {
  const [activeBoard, setActiveBoard] = useState(0);
  const [interactiveFeature, setInteractiveFeature] = useState<string | null>(null);

  const currentBoard = STORYBOARDS[activeBoard];

  return (
    <div className="w-full h-full flex flex-col bg-black text-white relative select-none">
      {/* Narrative Board Header Swappable */}
      <div className="p-4 bg-zinc-950 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 z-15">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-accent">
              PORTFOLIO EXCLUSIVE: AD STORYBOARD VIEW
            </h4>
          </div>
          <p className="text-xl font-display font-bold text-white tracking-tight uppercase">
            {currentBoard.title}
          </p>
        </div>

        {/* Board Switchers */}
        <div className="flex bg-neutral-900 border border-white/5 rounded-md p-1">
          {STORYBOARDS.map((board, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveBoard(idx);
                setInteractiveFeature(null);
              }}
              className={`px-3 py-1 text-[10px] font-mono tracking-widest uppercase rounded transition-all cursor-pointer ${
                activeBoard === idx
                  ? "bg-accent text-dark font-extrabold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              SHOT {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Stack Render Container - mimics the uploaded images exactly */}
      <div className="flex-1 bg-black p-4 overflow-y-auto max-h-[58vh] scrollbar-thin scrollbar-thumb-zinc-800">
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {currentBoard.plates.map((plate, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/10 bg-zinc-950 group shadow-lg flex flex-col justify-end"
              >
                {/* Visual rendering engines based on Plate type */}
                {plate.type === "seat" && (
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-zinc-900 to-black flex items-center justify-center overflow-hidden">
                    {/* Shadow elements mimicking premium perforated leather seat cushions */}
                    <div className="absolute w-[60%] h-[90%] bg-zinc-900/90 rounded-2xl border border-amber-950/30 shadow-2xl flex flex-col justify-between p-4 transform -rotate-12 translate-y-6">
                      {/* Performance headrest */}
                      <div className="w-[45%] h-[30%] bg-neutral-800 rounded-xl mx-auto border border-amber-950/25 flex flex-col justify-center items-center p-2">
                        <div className="w-[80%] h-2 bg-black/60 rounded-full"></div>
                      </div>
                      {/* Performance bolster stitching */}
                      <div className="flex-1 w-full bg-zinc-800/80 rounded-t-xl mt-3 border-t border-amber-500/20 p-3 relative">
                        {/* Perforation holes detailing */}
                        <div className="grid grid-cols-6 gap-2 opacity-15 text-[6px] font-mono leading-none">
                          {Array.from({ length: 48 }).map((_, i) => (
                            <span key={i}>•</span>
                          ))}
                        </div>
                        {/* Golden light casting rays diagonally */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/20 to-amber-200/30 mix-blend-overlay animate-pulse"></div>
                      </div>
                    </div>
                    {/* Atmospheric Dust particles */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
                    <div className="absolute top-4 right-4 text-[8px] font-mono text-amber-500/50 flex items-center gap-1">
                      <Sun className="w-3 h-3 text-amber-500" />
                      <span>PERFORMANCE LEATHER SPEC</span>
                    </div>
                  </div>
                )}

                {plate.type === "wheel" && (
                  <div className="absolute inset-0 bg-zinc-950 flex items-center justify-center overflow-hidden">
                    {/* High-contrast dashboard element with ambient glare */}
                    <div className="absolute w-72 h-72 rounded-full border-12 border-zinc-900/90 shadow-[0_0_80px_rgba(0,0,0,0.9)] flex items-center justify-center transform scale-110">
                      {/* Steering wheel core hub */}
                      <div className="w-28 h-28 rounded-xl bg-zinc-800 border border-zinc-700/60 shadow-inner flex flex-col justify-center items-center p-3 relative">
                        <span className="font-mono text-[9px] font-bold text-zinc-300 tracking-[0.25em] uppercase">
                          DEFENDER
                        </span>
                        <div className="w-3.5 h-1.5 rounded-full bg-zinc-900 mt-2"></div>
                        <span className="font-mono text-[6px] text-zinc-500 mt-1 uppercase">AIRBAG</span>
                      </div>
                    </div>
                    {/* Extreme solar lens flare overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/10 to-amber-200/30 mix-blend-screen"></div>
                    <div className="absolute w-[180px] h-[180px] rounded-full bg-amber-400/15 blur-2xl top-10 right-20 mix-blend-screen"></div>
                    <div className="absolute w-1.5 h-[500px] bg-amber-200/20 rotate-45 blur-md"></div>
                    <div className="absolute w-1 h-[500px] bg-white/40 rotate-45"></div>

                    <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-0.5 rounded border border-white/10 text-[7px] font-mono text-amber-400">
                      LENS REFRACTION ACTIVE
                    </div>
                  </div>
                )}

                {plate.type === "dashboard" && (
                  <div className="absolute inset-0 bg-black flex flex-col justify-between p-4 overflow-hidden border border-white/5 font-mono">
                    {/* Top Status Indicators bar */}
                    <div className="flex justify-between items-center text-[7px] text-zinc-500">
                      <span>4WD HIGH RESPONSE ACTIVE</span>
                      <span>SYSTEM READY</span>
                      <span>TIME: 12:00</span>
                    </div>

                    {/* Middle dials and 3D wireframe render */}
                    <div className="grid grid-cols-12 gap-2 items-center my-auto">
                      {/* Speedometer Left */}
                      <div className="col-span-3 text-center border-r border-white/5 pr-2">
                        <span className="text-3xl font-extrabold text-white">0</span>
                        <span className="block text-[6px] text-zinc-500 uppercase mt-1">KM/H</span>
                      </div>

                      {/* Wireframe car centered */}
                      <div className="col-span-6 relative flex flex-col items-center justify-center h-20 bg-zinc-950 rounded-lg border border-white/5 shadow-inner">
                        <div className="text-[6px] text-accent font-bold tracking-widest mb-1">
                          VEHICLE STATUS CARRIER
                        </div>
                        {/* Elegant SVG wireframe caricature of Land Rover */}
                        <svg className="w-24 h-10 text-white/40" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="1">
                          <rect x="18" y="12" width="55" height="18" rx="2" />
                          <rect x="25" y="5" width="28" height="8" rx="1" />
                          <line x1="53" y1="5" x2="68" y2="12" />
                          <circle cx="28" cy="30" r="5" className="fill-black stroke-accent" />
                          <circle cx="62" cy="30" r="5" className="fill-black stroke-accent" />
                          <path d="M 73 14 L 79 14 L 79 26 L 73 26" /> {/* Spare wheel */}
                        </svg>
                        <span className="text-[7px] text-white/50 tracking-[0.3em] uppercase mt-1">
                          DEFENDER
                        </span>
                      </div>

                      {/* Gear shift Dial Right */}
                      <div className="col-span-3 text-center border-l border-white/5 pl-2 flex flex-col items-center justify-center">
                        <div className="flex gap-1.5 text-[8px] font-bold text-zinc-600">
                          <span>R</span>
                          <span>N</span>
                          <span>D</span>
                          <span className="text-emerald-400 bg-emerald-950/60 px-1.5 rounded border border-emerald-500/20 text-[9px]">
                            P
                          </span>
                        </div>
                        <span className="block text-[6px] text-zinc-500 uppercase mt-1">SECURED PARK</span>
                      </div>
                    </div>

                    {/* Low end dashboard text alignment */}
                    <div className="text-center text-[7px] text-zinc-600">
                      PRESTIGE CHASSIS MATRIX DETECTOR v2.0
                    </div>
                  </div>
                )}

                {plate.type === "headlight" && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
                    {/* Glowing LED outer circle */}
                    <div className="relative w-44 h-44 rounded-full border-4 border-zinc-800 flex items-center justify-center">
                      {/* DRL light ring */}
                      <div className="absolute inset-1 rounded-full border-[10px] border-white ring-[18px] ring-white/10 shadow-[0_0_120px_rgba(255,255,255,0.9)]"></div>
                      
                      {/* Inner projector lenses */}
                      <div className="w-20 h-20 rounded-full bg-zinc-950 border-3 border-zinc-700 flex flex-col justify-center items-center">
                        <div className="w-12 h-6 bg-white/35 rounded-t-full shadow-inner blur-xs"></div>
                        <div className="w-12 h-6 bg-white/45 rounded-b-full shadow-inner blur-xs"></div>
                      </div>
                    </div>
                    {/* Flash rays casting outwards across entire scene */}
                    <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl rotate-12"></div>
                    <div className="absolute inset-0 bg-radial-gradient from-white/20 via-transparent to-black"></div>
                  </div>
                )}

                {plate.type === "macro" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-neutral-950 to-zinc-950 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    {/* Glass shell detail with embossed lettering */}
                    <div className="w-11/12 h-2/3 border border-white/10 rounded bg-white/5 backdrop-blur-md p-6 flex flex-col justify-between relative transform rotate-1">
                      <span className="font-mono text-[8px] text-accent tracking-[0.2em]">LASER PROJECTOR</span>
                      
                      <div className="h-0.5 bg-gradient-to-r from-accent/50 to-transparent w-full"></div>
                      
                      <div className="flex justify-between items-end">
                        <div className="space-y-1">
                          <p className="font-display font-extrabold text-2xl tracking-[0.25em] text-white">
                            DEFENDER
                          </p>
                          <p className="font-mono text-[7px] text-zinc-500">EMBOSSED OPTIC UNIT</p>
                        </div>
                        <span className="text-[9px] font-mono text-zinc-400">LED-DRL HE-60</span>
                      </div>
                    </div>
                  </div>
                )}

                {plate.type === "forest" && (
                  <div className="absolute inset-0 bg-zinc-950 overflow-hidden relative flex items-center">
                    {/* Misty trees silhouette using CSS gradients and opacity */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-70"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/40 to-black/60"></div>
                    
                    {/* Light beam casting down the center road */}
                    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-48 h-[60%] bg-gradient-to-b from-white/70 via-white/10 to-transparent blur-xl pointer-events-none origin-top rotate-180"></div>
                    
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/80 px-2.5 py-1 rounded border border-white/5 font-mono text-[8px] text-emerald-400">
                      <Compass className="w-3.5 h-3.5" />
                      <span>OFFROAD RADAR MODE OVERLAY</span>
                    </div>
                  </div>
                )}

                {plate.type === "sky" && (
                  <div className="absolute inset-0 bg-black overflow-hidden relative">
                    {/* Deep dark rainforest pine trees tunnel in dark green tint */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-40 mix-blend-color-dodge"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#08150f]/80 to-black/60"></div>
                    
                    {/* Headlight cone flares */}
                    <div className="absolute bottom-[-10%] left-[20%] w-24 h-[120%] bg-gradient-to-t from-white/20 via-emerald-500/5 to-transparent rotate-12 blur-xl"></div>
                    <div className="absolute bottom-[-10%] right-[20%] w-24 h-[120%] bg-gradient-to-t from-white/20 via-emerald-500/5 to-transparent -rotate-12 blur-xl"></div>
                  </div>
                )}

                {plate.type === "profile" && (
                  <div className="absolute inset-0 bg-[#f5f5f7] flex flex-col justify-between p-4 overflow-hidden relative font-sans text-dark font-light">
                    {/* Scale ruler marking */}
                    <div className="absolute inset-x-0 top-0 h-4 border-b border-black/10 flex justify-between px-6 text-[8px] font-mono text-zinc-400 pointer-events-none">
                      <span>0.0m</span>
                      <span>1.0m</span>
                      <span>2.0m</span>
                      <span>3.0m</span>
                      <span>4.3m (MAX)</span>
                    </div>

                    <div className="my-auto flex flex-col items-center justify-center">
                      {/* Crisp SUV drawing SVG */}
                      <svg className="w-72 h-32 text-zinc-800" viewBox="0 0 120 50" fill="none" stroke="currentColor" strokeWidth="1.2">
                        {/* Main chassis boxy design */}
                        <path d="M15,35 L12,35 L14,24 L22,12 L50,12 L84,12 L96,25 L96,35 L92,35" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22,12 L24,24 L96,24" />
                        {/* Windows */}
                        <rect x="25" y="14" width="22" height="8" rx="1" />
                        <rect x="51" y="14" width="28" height="8" rx="1" />
                        {/* Wheel wells */}
                        <path d="M28,35 C28,31 38,31 38,35" strokeLinecap="round" />
                        <path d="M72,35 C72,31 82,31 82,35" strokeLinecap="round" />
                        {/* Wheels with inner detailing */}
                        <circle cx="33" cy="35" r="4.5" className="fill-zinc-300 stroke-zinc-800" />
                        <circle cx="33" cy="35" r="2" fill="currentColor" />
                        <circle cx="77" cy="35" r="4.5" className="fill-zinc-300 stroke-zinc-800" />
                        <circle cx="77" cy="35" r="2" fill="currentColor" />
                        {/* Spare carrier at back */}
                        <rect x="96" y="18" width="5" height="12" rx="1" fill="#bbb" stroke="currentColor" />
                        {/* Tailgate line */}
                        <line x1="88" y1="12" x2="88" y2="35" />
                        {/* Front bumper wheel guard */}
                        <rect x="10" y="32" width="6" height="4" rx="1" fill="currentColor" />
                      </svg>
                    </div>

                    <div className="flex justify-between items-end border-t border-black/5 pt-2 text-[8px] font-mono text-zinc-500 uppercase">
                      <span>THE THREE-DOOR DEFENDER 90</span>
                      <span>SCALE: 1:25</span>
                      <span>CONCEPT DESIGN ONLY</span>
                    </div>
                  </div>
                )}

                {plate.type === "cabin" && (
                  <div className="absolute inset-0 bg-[#0c0c0e] flex flex-col justify-between p-4 overflow-hidden relative">
                    {/* Dashboard controls overview overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)]"></div>
                    
                    {/* Central Mapping Screen concept inside console */}
                    <div className="w-48 h-24 bg-zinc-950 border border-zinc-800 rounded-lg p-3 mx-auto self-center flex flex-col justify-between font-mono relative shadow-md">
                      <div className="flex justify-between items-center text-[6px] text-zinc-500">
                        <span>PRACTICAL NAVIGATION SYSTEM</span>
                        <Map className="w-2.5 h-2.5 text-accent animate-pulse" />
                      </div>
                      
                      {/* Route map graphic */}
                      <svg className="w-full h-12 text-zinc-700 font-normal mt-1" viewBox="0 0 100 30">
                        {/* Grid lines */}
                        <line x1="0" y1="10" x2="100" y2="10" stroke="#1c1c1f" strokeDasharray="2,2" />
                        <line x1="0" y1="20" x2="100" y2="20" stroke="#1c1c1f" strokeDasharray="2,2" />
                        {/* Route curves */}
                        <path d="M 10 25 Q 35 5 50 15 T 90 10" fill="none" stroke="#2563eb" strokeWidth="2" />
                        <circle cx="50" cy="15" r="1.5" className="fill-accent stroke-none animate-ping" />
                        <circle cx="50" cy="15" r="1.5" className="fill-accent stroke-none" />
                      </svg>
                      
                      <div className="flex justify-between items-center text-[7px]">
                        <span className="text-zinc-400">DESTINATION LOCKED</span>
                        <span className="text-accent font-extrabold font-mono">1.2 KM TO FORESTRY</span>
                      </div>
                    </div>

                    {/* Dials row beneath navigation console */}
                    <div className="flex justify-center gap-10 text-[8px] font-mono text-zinc-500">
                      <div className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1 rounded border border-white/5">
                        <Sliders className="w-3.5 h-3.5 text-zinc-400" />
                        <span>CLIMATE: 21°C</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1 rounded border border-white/5">
                        <RefreshCw className="w-3.5 h-3.5 text-zinc-400" />
                        <span>DYNAMIC SUSPENSION ENGINES</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Grid Overlay Text: exactly mimics the white, high-kerning typography */}
                {plate.label && (
                  <div className={`absolute inset-x-0 p-5 z-20 flex ${
                    plate.align === "center" 
                      ? "justify-center text-center" 
                      : plate.align === "end" 
                        ? "justify-end text-right" 
                        : "justify-start text-left"
                  }`}>
                    <h5 className="text-white font-sans text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] uppercase leading-none drop-shadow-md">
                      {plate.label}
                    </h5>
                  </div>
                )}

                {/* Grid details reveal trigger */}
                <div 
                  onClick={() => setInteractiveFeature(plate.desc)}
                  className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center cursor-help z-30"
                >
                  <p className="text-accent font-mono text-[9px] tracking-widest uppercase mb-2">
                    DIRECTORIAL TREATMENT NOTES // CLICK TO REGISTER
                  </p>
                  <p className="text-white text-xs leading-relaxed max-w-md font-sans">
                    {plate.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Storyboard metadata status details */}
      <AnimatePresence>
        {interactiveFeature && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="p-3 bg-accent text-dark border-t border-white/10 flex justify-between items-center text-xs font-mono px-5 z-20"
          >
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 animate-bounce" />
              <span>
                <strong>TREATMENT DETAILED REPORT:</strong> {interactiveFeature}
              </span>
            </div>
            <button
              onClick={() => setInteractiveFeature(null)}
              className="text-[10px] font-bold uppercase underline tracking-wider hover:text-white ml-4 cursor-pointer"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
