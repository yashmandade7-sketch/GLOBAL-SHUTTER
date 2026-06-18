import { useState } from "react";
import { SERVICE_PHASES } from "../data";
import { CheckCircle2, ChevronRight, Sliders, PlayCircle, Settings, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("pre-production");

  const currentPhase = SERVICE_PHASES.find((p) => p.id === activeTab) || SERVICE_PHASES[0];

  return (
    <section id="services" className="py-24 bg-dark border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Menu Column Left */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase block mb-3">
                Full-Service Spectrum
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black leading-tight text-white uppercase">
                THE POWER OF <br />
                <span className="text-outline hover:text-outline-active transition-all duration-300">
                  PRODUCTION
                </span>
              </h2>
              <p className="text-gray-500 mt-5 text-sm leading-relaxed max-w-sm">
                From the spark of a disruptive script to a color-graded 4K theater master copy, we coordinate every single step.
              </p>
            </div>

            {/* Vertically Aligned Accordion Triggers */}
            <div className="space-y-4">
              {SERVICE_PHASES.map((phase) => (
                <div
                  key={phase.id}
                  onClick={() => setActiveTab(phase.id)}
                  className={`group p-6 rounded-lg border transition-all duration-350 cursor-pointer flex justify-between items-center ${
                    activeTab === phase.id
                      ? "bg-dark-lighter border-accent"
                      : "bg-[#0d0d0d] border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`font-display text-2xl font-black ${
                        activeTab === phase.id ? "text-accent" : "text-gray-600 group-hover:text-gray-400"
                      }`}
                    >
                      {phase.number}
                    </span>
                    <div>
                      <h4
                        className={`text-lg font-bold ${
                          activeTab === phase.id ? "text-white" : "text-gray-400 group-hover:text-white"
                        }`}
                      >
                        {phase.title}
                      </h4>
                      <p className="text-[10px] font-mono text-gray-500 mt-0.5 uppercase tracking-wider">
                        EST. DURATION: {phase.duration}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeTab === phase.id ? "translate-x-1.5 text-accent" : "text-gray-600 group-hover:text-white"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Expanded detail widget panel on the Right */}
          <div className="lg:col-span-7 bg-[#0d0d0d] rounded-xl border border-white/5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhase.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-10 space-y-8"
              >
                {/* Header detail info */}
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex items-center gap-3">
                    {currentPhase.id === "pre-production" && <Sliders className="w-5 h-5 text-accent" />}
                    {currentPhase.id === "live-action" && <PlayCircle className="w-5 h-5 text-accent animate-pulse" />}
                    {currentPhase.id === "post-production" && <Settings className="w-5 h-5 text-accent" />}
                    
                    <span className="font-mono text-xs text-accent uppercase tracking-widest font-black">
                      Phase {currentPhase.number} Detailed Briefing
                    </span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-gray-400 bg-white/5 px-3 py-1 rounded">
                    EST: {currentPhase.duration}
                  </span>
                </div>

                {/* Narrative pitch details */}
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                  {currentPhase.description}
                </p>

                {/* Blueprint items checkroll */}
                <div className="space-y-4">
                  <h5 className="font-mono text-xs uppercase tracking-widest text-gray-500">
                    Key Execution Checklist
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {currentPhase.tasks.map((task, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3.5 bg-dark-lighter rounded border border-white/5 text-xs text-gray-300 font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment package recommendation */}
                <div className="space-y-3 bg-[#070707] p-5 rounded-lg border border-white/5">
                  <h5 className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent font-black flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> RECOMMENDED HARDWARE EMBARKMENT
                  </h5>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentPhase.gear.map((gearItem, index) => (
                      <span
                        key={index}
                        className="bg-white/5 border border-white/10 px-3 py-1 rounded font-mono text-[10px] text-gray-300"
                      >
                        {gearItem}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Studio backdrop reference below */}
        <div className="mt-20 relative rounded-xl overflow-hidden aspect-[21/9] border border-white/5 max-h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=1500"
            alt="Studio Rig"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent flex items-center p-8 md:p-12">
            <div className="max-w-md">
              <span className="font-mono text-[9px] text-accent uppercase tracking-widest font-bold">In-House Stages</span>
              <h4 className="text-xl md:text-3xl font-display font-black text-white uppercase mt-2 mb-3">
                12,000 SQ FT ACOUSTIC SOUNDSTAGE
              </h4>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Our heavy equipment armory is fully stocked and located right in-house. Renting is bypassed, keeping creative continuity tight and costs optimized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
