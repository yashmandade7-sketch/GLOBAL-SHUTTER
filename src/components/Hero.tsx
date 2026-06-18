import { useState } from "react";
import { Play, ArrowRight, X, Volume2, VolumeX, Square, Film } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<"2.39:1" | "16:9" | "4:3">("2.39:1");
  const [isMuted, setIsMuted] = useState(true);

  const handleStartProject = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background with parallax style */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000"
          alt="Production Background"
          className="w-full h-full object-cover opacity-35 scale-105 animate-[pulse_8s_infinite]"
        />
        {/* Modern multi-layer gradient vignette mapping */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark/40 to-dark"></div>
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-5xl px-6 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 text-accent font-semibold tracking-[0.25em] uppercase mb-5 text-xs md:text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
          <span>Cinematic Excellence & Shutter Precision</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-8xl font-display font-black leading-[1.05] tracking-tight mb-8"
        >
          We Don't Just Shoot Stories. <br />
          <span className="text-outline hover:text-outline-active transition-all duration-300 select-none">
            We Capture Audiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Premium commercial advertisement & high-end brand film production. Merging disruptive creativity with the extreme technical precision of a high-speed global shutter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={() => setShowreelOpen(true)}
            className="group flex items-center justify-center gap-3 bg-white text-dark w-full sm:w-auto px-8 py-3.5 rounded-full font-bold uppercase text-[11px] tracking-wider hover:bg-accent transition-all duration-300 cursor-pointer shadow-xl shadow-white/5 active:scale-95"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch Showreel
          </button>
          
          <button
            onClick={handleStartProject}
            className="group w-full sm:w-auto border border-white/20 hover:border-accent hover:text-accent px-8 py-3.5 rounded-full font-bold uppercase text-[11px] tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 active:scale-95"
          >
            Work With Us
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Downward Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => {
          const portfolio = document.getElementById("work");
          if (portfolio) {
            window.scrollTo({
              top: portfolio.getBoundingClientRect().top + window.scrollY - 80,
              behavior: "smooth"
            });
          }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-1 hover:opacity-100 transition-opacity"
      >
        <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 rounded-full bg-accent"
          ></motion.div>
        </div>
      </motion.div>

      {/* Background Frame decoration for cinematic HUD */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 font-mono text-[10px] text-gray-600 space-y-6 select-none opacity-40">
        <div>SYS: ONLINE</div>
        <div>CAM: 01A_REC</div>
        <div>AUDIO: L+R ON</div>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 font-mono text-[10px] text-gray-600 text-right space-y-6 select-none opacity-40">
        <div>SHUTTER: 180°</div>
        <div>GAIN: 800 ISO</div>
        <div>TIME: {new Date().toISOString().substring(11, 19)}</div>
      </div>

      {/* Showreel Cinematic Modal */}
      <AnimatePresence>
        {showreelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-md"
          >
            <div className="relative w-full max-w-6xl bg-[#090909] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Header bar controls / simulated editor timeline */}
              <div className="p-4 bg-dark/95 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <Film className="w-5 h-5 text-accent animate-pulse" />
                  <div>
                    <span className="font-display font-black text-sm text-white uppercase tracking-tight">
                      GS_SHOWREEL_2026.MP4
                    </span>
                    <span className="ml-3 font-mono text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                      4K HDR
                    </span>
                  </div>
                </div>

                {/* Aspect ratio frame triggers for premium viewport switching */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-gray-400">Frame Guide:</span>
                  <div className="flex bg-white/5 p-1 rounded-md border border-white/5">
                    {(["2.39:1", "16:9", "4:3"] as const).map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => setAspectRatio(ratio)}
                        className={`px-2.5 py-1 rounded font-mono text-[10px] transition-all cursor-pointer ${
                          aspectRatio === ratio
                            ? "bg-accent text-dark font-semibold"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 rounded-md hover:bg-white/5 transition-colors text-white cursor-pointer"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-green-400" />}
                  </button>

                  <button
                    onClick={() => setShowreelOpen(false)}
                    className="p-1 px-2.5 rounded bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 border border-white/5 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4 inline mr-1" /> Close
                  </button>
                </div>
              </div>

              {/* Viewport content */}
              <div className="bg-black flex items-center justify-center overflow-hidden h-[45vh] md:h-[60vh] relative">
                {/* Crop guides for Aspect Ratios in real-time */}
                <div
                  className="transition-all duration-500 relative bg-[#0d0d0d] flex items-center justify-center border border-white/5"
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio:
                      aspectRatio === "2.39:1"
                        ? "2.39 / 1"
                        : aspectRatio === "16:9"
                        ? "16 / 9"
                        : "4 / 3",
                    maxWidth: "100%",
                    maxHeight: "100%"
                  }}
                >
                  {/* Real cinematic looping video stream using professional stock preview clip */}
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://assets.mixkit.co/videos/preview/mixkit-cinematic-sunset-and-ocean-cliffs-aerial-42994-large.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                  />

                  {/* Shutter frame lines overlay */}
                  <div className="absolute inset-x-0 top-0 border-t border-white/10 flex justify-between px-4 py-1 text-[8px] font-mono text-white/30 pointer-events-none select-none">
                    <span>L G_01</span>
                    <span>HD DIRECT</span>
                  </div>
                  <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none select-none"></div>
                  <div className="absolute inset-x-0 bottom-0 border-b border-white/10 flex justify-between px-4 py-1 text-[8px] font-mono text-white/30 pointer-events-none select-none">
                    <span>REC ● [00:01:42:07]</span>
                    <span>R G_01</span>
                  </div>
                </div>

                {/* Aesthetic Cinematic letterbox bars outside */}
                {aspectRatio === "2.39:1" && (
                  <>
                    <div className="absolute top-0 inset-x-0 bg-black/80 h-[8%] border-b border-white/5 pointer-events-none transition-all"></div>
                    <div className="absolute bottom-0 inset-x-0 bg-black/80 h-[8%] border-t border-white/5 pointer-events-none transition-all"></div>
                  </>
                )}
                {aspectRatio === "4:3" && (
                  <>
                    <div className="absolute left-0 inset-y-0 bg-black/80 w-[12%] border-r border-white/5 pointer-events-none transition-all"></div>
                    <div className="absolute right-0 inset-y-0 bg-black/80 w-[12%] border-l border-white/5 pointer-events-none transition-all"></div>
                  </>
                )}
              </div>

              {/* Status bar simulated editor playhead */}
              <div className="p-3 bg-[#0d0d0d] text-[10px] font-mono text-gray-500 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-white">Active Timeline Sizzle</span>
                </div>
                <div>Creative treatments, visual pacing and master audio synced by global crew</div>
                <div className="text-accent bg-accent/5 px-2 py-0.5 rounded border border-accent/10">
                  SHUTTER RIG READY
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
