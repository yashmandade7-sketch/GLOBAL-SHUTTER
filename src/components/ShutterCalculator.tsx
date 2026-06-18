import { useState, useEffect } from "react";
import { Check, Info, RefreshCw, Eye, ShieldAlert, Cpu } from "lucide-react";
import { motion } from "motion/react";

export default function ShutterCalculator() {
  const [fps, setFps] = useState<number>(24);
  const [angle, setAngle] = useState<number>(180);
  const [isAnimating, setIsAnimating] = useState(true);

  // Constants
  const fpsOptions = [24, 30, 48, 60, 120, 240];
  const angleOptions = [360, 180, 90, 45];

  // Mathematical shutter speed calculation
  // Shutter Speed = 1 / (FPS * (360 / Shutter Angle))
  const multiplier = 360 / angle;
  const bottomFraction = fps * multiplier;
  const calculatedShutterSpeedString = `1/${Math.round(bottomFraction)}`;

  // Interpretations based on camera math
  const getShutterExplanation = () => {
    if (angle === 360) {
      return {
        label: "Abundant Motion Blur (Smear)",
        description: "A dreamy, fluid aesthetic with substantial frame overlap. Often used to simulate dream sequences, intoxication, or abstract kinetic light streams.",
        blurAmount: "blur(12px)",
        clonesCount: 5,
        rating: 100,
        shutterType: "Full Aperture Smear"
      };
    }
    if (angle === 180) {
      return {
        label: "Standard Cinematic Flutter",
        description: "The golden standard for theatrical cinema. Creates natural, life-like motion blur that mimics the human eye's custom visual persistence capability.",
        blurAmount: "blur(4px)",
        clonesCount: 3,
        rating: 50,
        shutterType: "Standard Rotary"
      };
    }
    if (angle === 90) {
      return {
        label: "Sharp Staccato Tracking",
        description: "Crisp, semi-frozen frames with minimal blur. Accentuates high-energy action, tracking cars, and explosions with intense, gritty realism like Gladiator or Saving Private Ryan.",
        blurAmount: "blur(1.5px)",
        clonesCount: 1,
        rating: 20,
        shutterType: "Narrow Shutter"
      };
    }
    // angle === 45
    return {
      label: "Hyper-Frozen Particle Slice",
      description: "Absence of organic blur. Every droplet of rain, grain of dust, or high-speed motorsport detail is frozen in absolute solid precision. Requires heavy studio lighting.",
      blurAmount: "blur(0px)",
      clonesCount: 0,
      rating: 5,
      shutterType: "Pinpoint Shutter Speed"
    };
  };

  const currentSpecs = getShutterExplanation();

  return (
    <section id="shutter-lab" className="py-24 bg-dark-lighter border-b border-white/5 relative">
      {/* Background aesthetic grid line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Blocks */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-accent uppercase bg-accent/5 px-4 py-1.5 rounded-full border border-accent/15">
            Technical Lab Workbench
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white uppercase mt-4 mb-6">
            SHUTTER LAB SIMULATOR
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
            Commercial directors choose speed to dictate emotion. Play with our live camera settings analyzer below to see how frame rates and virtual shutter angles shape visual motion tracking.
          </p>
        </div>

        {/* Master Control Board Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Controls Box Left */}
          <div className="lg:col-span-5 bg-dark border border-white/5 rounded-xl p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Option 1: Frame Rates */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">
                  01. Project Frame Rate (FPS)
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {fpsOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setFps(opt)}
                      className={`py-3 rounded font-mono text-xs font-semibold cursor-pointer border transition-all ${
                        fps === opt
                          ? "bg-accent text-dark border-accent font-bold"
                          : "bg-dark-lighter text-gray-400 border-white/5 hover:text-white"
                      }`}
                    >
                      {opt} fps
                      {opt === 24 && <span className="block text-[8px] opacity-70 tracking-normal">(Cinema Std)</span>}
                      {opt === 120 && <span className="block text-[8px] opacity-70 tracking-normal">(Slow-Mo)</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Shutter Angles */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-xs font-mono uppercase tracking-widest text-gray-500">
                    02. Mechanical Shutter Angle
                  </label>
                  <span className="text-[10px] text-accent font-mono bg-accent/15 px-2 py-0.5 rounded border border-accent/20">
                    {angle}° Rotary
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2.5">
                  {angleOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setAngle(opt)}
                      className={`py-3 rounded font-mono text-xs font-bold cursor-pointer border transition-all ${
                        angle === opt
                          ? "bg-accent text-dark border-accent"
                          : "bg-dark-lighter text-gray-400 border-white/5 hover:text-white"
                      }`}
                    >
                      {opt}°
                      {opt === 180 && <span className="block text-[8px] font-normal opacity-75">(Normal)</span>}
                      {opt === 45 && <span className="block text-[8px] font-normal opacity-75">(Frozen)</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculated mathematical output HUD */}
            <div className="mt-10 pt-6 border-t border-white/5">
              <div className="p-4 bg-dark-lighter rounded-lg border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-1">
                    Calculated Shutter Speed
                  </span>
                  <p className="text-4xl font-display font-extrabold text-white tracking-tight animate-pulse">
                    {calculatedShutterSpeedString} <span className="text-sm font-sans font-light text-gray-400">sec</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-1">
                    Shutter Type
                  </span>
                  <span className="text-xs font-mono font-bold text-accent">
                    {currentSpecs.shutterType}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Simulation Stage Right */}
          <div className="lg:col-span-7 bg-dark border border-white/5 rounded-xl overflow-hidden flex flex-col justify-between">
            {/* Header Stage Status */}
            <div className="p-4 bg-dark-lighter border-b border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500">
              <div className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-accent" />
                <span>LIVE TRACKING RECONSTRUCTOR</span>
              </div>
              <div className="flex items-center gap-2">
                <span>PREVIEW SPEED: realtime</span>
                <button
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 cursor-pointer transition-colors"
                >
                  {isAnimating ? "Pause" : "Play"}
                </button>
              </div>
            </div>

            {/* Main Interactive Stage */}
            <div className="relative h-64 md:h-80 bg-black flex items-center justify-center p-6 overflow-hidden">
              {/* Scope radar lines */}
              <div className="absolute inset-0 border border-white/5 border-dashed m-10 pointer-events-none rounded"></div>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5 border-dashed border-t pointer-events-none"></div>

              {/* Glowing camera lens tracking aperture vector moving across */}
              <div className="w-full relative h-12 flex items-center">
                {isAnimating && (
                  <motion.div
                    animate={{
                      x: ["-10%", "110%"]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                      ease: "linear"
                    }}
                    className="absolute"
                  >
                    {/* Simulated shutter blur clones array */}
                    {Array.from({ length: currentSpecs.clonesCount }).map((_, idx) => (
                      <div
                        key={idx}
                        className="absolute h-10 w-10 border border-accent/20 rounded-full flex items-center justify-center pointer-events-none"
                        style={{
                          transform: `translateX(-${(idx + 1) * 6}px)`,
                          opacity: (1 / (idx + 2)) * 0.5,
                          filter: currentSpecs.blurAmount
                        }}
                      >
                        <span className="w-2.5 h-2.5 bg-accent/40 rounded-full"></span>
                      </div>
                    ))}

                    {/* Master tracking target */}
                    <div
                      className="h-12 w-12 bg-accent rounded-full border border-white shadow-xl flex items-center justify-center transition-all"
                      style={{ filter: currentSpecs.blurAmount }}
                    >
                      {/* Aperture blades details */}
                      <div className="w-6 h-6 bg-dark rounded-full border border-accent/30 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute w-5 h-0.5 bg-accent/50 rotate-45 transform"></div>
                        <div className="absolute w-5 h-0.5 bg-accent/50 -rotate-45 transform"></div>
                        <span className="w-2 h-2 bg-white rounded-full z-10 animate-ping"></span>
                      </div>
                    </div>

                    {/* Motion vector directional lines */}
                    {angle >= 180 && (
                      <div
                        className="absolute right-full top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent to-accent/80 transition-all"
                        style={{
                          width: angle === 360 ? "120px" : "60px",
                          filter: currentSpecs.blurAmount
                        }}
                      ></div>
                    )}
                  </motion.div>
                )}

                {!isAnimating && (
                  <div className="mx-auto flex flex-col items-center gap-1.5 text-center p-4">
                    <ShieldAlert className="w-5 h-5 text-gray-500" />
                    <p className="font-mono text-[10px] text-gray-400">TRACKING FROZEN IN STILL TIMELINE</p>
                  </div>
                )}
              </div>

              {/* Shutter mechanical blade visual decoration */}
              <div
                className="absolute right-6 top-6 w-20 h-20 border-2 border-white/10 rounded-full flex items-center justify-center transition-transform duration-1000"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                {/* 180 Shutter Sector Mask */}
                <div
                  className="absolute inset-0 bg-accent/10 border border-accent/30 rounded-full"
                  style={{
                    clipPath:
                      angle === 360
                        ? "none"
                        : angle === 180
                        ? "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)"
                        : angle === 90
                        ? "polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)"
                        : "polygon(50% 0%, 75% 0%, 75% 25%, 50% 50%)"
                  }}
                ></div>
                <span className="text-[8px] font-mono text-gray-500 absolute bg-black p-0.5 rounded border border-white/5">
                  ANGLE
                </span>
              </div>
            </div>

            {/* Simulated Analysis Readout Footer */}
            <div className="p-6 bg-[#090909] border-t border-white/5">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest block font-bold">
                    {currentSpecs.label}
                  </span>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-lg font-light">
                    {currentSpecs.description}
                  </p>
                </div>

                <div className="text-right flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-2">
                  <span className="font-mono text-[9px] text-gray-500 uppercase">Blur Density</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-dark border border-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-500"
                        style={{ width: `${currentSpecs.rating}%` }}
                      ></div>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-white">{currentSpecs.rating}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
