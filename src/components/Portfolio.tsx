import { useState } from "react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Plus, X, Film, Aperture, Users, Palette, Layers, Play, Volume2, VolumeX, Eye } from "lucide-react";
import DefenderStoryboard from "./DefenderStoryboard";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [mediaView, setMediaView] = useState<"video" | "storyboard">("storyboard");

  const categories = ["All", "Automotive", "Fashion", "Lifestyle", "Tech"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="py-28 bg-dark relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase block mb-3">
              Cinematic Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white uppercase">
              SELECTED WORKS
            </h2>
            <p className="text-gray-500 mt-4 max-w-md text-sm leading-relaxed">
              Browse our campaigns, premium films, and visual statements crafted for global impact.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2.5 bg-dark-lighter p-1.5 rounded-full border border-white/5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-accent text-dark shadow-lg shadow-accent/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  setSelectedProject(project);
                  if (project.id.startsWith("defender-")) {
                    setMediaView("storyboard");
                  } else {
                    setMediaView("video");
                  }
                }}
                className="group relative overflow-hidden bg-dark-lighter aspect-[16/10] cursor-pointer rounded-lg border border-white/5 flex flex-col justify-end"
              >
                {/* Overlay vignette */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:from-black/95"></div>

                {/* Cover Image with precise grayscale transition */}
                <img
                  src={project.coverUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Lens metadata badge (always visible, style upgrade!) */}
                <div className="absolute top-4 right-4 z-20 bg-dark/80 backdrop-blur-md px-3 py-1 rounded text-[9px] font-mono tracking-widest text-[#999] border border-white/10">
                  {project.specs.frameRate}
                </div>

                {/* Subtle trigger details inside */}
                <div className="relative z-20 p-6 transformation transition-transform duration-300">
                  <span className="text-accent font-bold text-[10px] tracking-widest uppercase block mb-1">
                    {project.client} // {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Explore breakdown reveal info */}
                  <div className="h-0 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300 mt-2 flex items-center gap-1.5 text-xs text-gray-400">
                    <Plus className="w-3.5 h-3.5 text-accent" />
                    <span>Deep Treatment Specs</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Extreme Premium Portfolite Lightbox Breakout Panel */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center overflow-y-auto p-4 md:p-8 backdrop-blur-lg"
          >
            <div className="relative w-full max-w-6xl bg-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl my-8">
              {/* Header metadata bar */}
              <div className="p-5 bg-dark-lighter border-b border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Aperture className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-base text-white tracking-widest uppercase">
                      {selectedProject.title}
                    </h3>
                    <p className="font-mono text-[9px] text-gray-500 uppercase">
                      Shot specs / direct treatment report
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {selectedProject.videoMockUrl && (
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded-md hover:bg-white/5 transition-colors text-white cursor-pointer"
                      title={isMuted ? "Unmute Sound" : "Mute Sound"}
                    >
                      {isMuted ? <VolumeX className="w-4.5 h-4.5 text-red-400" /> : <Volume2 className="w-4.5 h-4.5 text-green-400" />}
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setIsMuted(true);
                    }}
                    className="p-1 px-3 rounded-full bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 border border-white/5 transition-all text-xs font-semibold cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5 inline mr-1" /> Close
                  </button>
                </div>
              </div>

              {/* Grid content split: Interactive media left, specs & treatment right */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Media stage left */}
                <div className="lg:col-span-7 bg-black min-h-[35vh] md:min-h-[45vh] lg:min-h-[55vh] flex flex-col relative border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden">
                  {/* Selector for media view (Only for Defender projects) */}
                  {selectedProject.id.startsWith("defender-") && (
                    <div className="p-3 bg-zinc-950 border-b border-white/10 flex items-center justify-between gap-4 z-20">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                        <Eye className="w-3.5 h-3.5 text-accent animate-pulse" />
                        <span className="hidden sm:inline">INTERACTIVE DISPLAY:</span>
                        <span className="sm:hidden">DISPLAY:</span>
                      </div>
                      <div className="flex bg-neutral-900 border border-white/5 rounded p-0.5">
                        <button
                          onClick={() => setMediaView("storyboard")}
                          className={`px-2.5 py-1 rounded text-[8px] sm:text-[9px] font-mono tracking-wider uppercase transition-all cursor-pointer ${
                            mediaView === "storyboard"
                              ? "bg-accent text-dark font-black"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          Official Storyboard
                        </button>
                        <button
                          onClick={() => setMediaView("video")}
                          className={`px-3 py-1 rounded text-[8px] sm:text-[9px] font-mono tracking-wider uppercase transition-all cursor-pointer ${
                            mediaView === "video"
                              ? "bg-accent text-dark font-black"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          Stream Action Reel
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="flex-1 min-h-[35vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center relative bg-black">
                    {mediaView === "storyboard" && selectedProject.id.startsWith("defender-") ? (
                      <DefenderStoryboard />
                    ) : selectedProject.videoMockUrl ? (
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={selectedProject.videoMockUrl}
                        autoPlay
                        loop
                        playsInline
                        muted={isMuted}
                      />
                    ) : (
                      <img
                        src={selectedProject.coverUrl}
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                        alt="Project Frame"
                        referrerPolicy="no-referrer"
                      />
                    )}

                    {/* Aesthetic cinema overlays (only if viewing video or normal cover) */}
                    {(mediaView !== "storyboard" || !selectedProject.id.startsWith("defender-")) && (
                      <>
                        <div className="absolute inset-x-0 top-0 p-3 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-center text-[8px] font-mono text-white/30 pointer-events-none select-none z-10">
                          <span>TIMELINE SOURCE REEL</span>
                          <span>COLOR SIMULATOR ON</span>
                        </div>
                        <div className="absolute inset-4 border border-white/5 border-dashed pointer-events-none select-none z-10"></div>
                        {selectedProject.videoMockUrl && (
                          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-[9px] font-mono text-green-400 flex items-center gap-1.5 z-10">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span>STREAMING ACTIVE FRAME LOOP</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Technical data & treatment briefing right */}
                <div className="lg:col-span-5 p-6 md:p-8 bg-[#090909] flex flex-col justify-between max-h-[65vh] overflow-y-auto">
                  {/* About the brief block */}
                  <div className="space-y-6">
                    <div>
                      <span className="text-accent font-bold text-[9px] tracking-widest uppercase block mb-1">
                        Campaign Brief
                      </span>
                      <p className="text-gray-300 text-sm leading-relaxed font-light">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <span className="text-accent font-bold text-[9px] tracking-widest uppercase block mb-1">
                        Executive Mission
                      </span>
                      <p className="text-gray-400 text-xs leading-relaxed font-light italic">
                        "{selectedProject.brief}"
                      </p>
                    </div>

                    {/* Camera Spec Board */}
                    <div>
                      <span className="text-white font-bold text-[10px] tracking-widest uppercase block mb-3 border-b border-white/10 pb-1">
                        <Layers className="w-3.5 h-3.5 inline mr-1 text-accent" /> CAMERA SPEC SHEET (GLOBAL SHUTTER REPORT)
                      </span>
                      <div className="grid grid-cols-2 gap-4 text-[11px] font-mono">
                        <div className="p-2.5 bg-dark-lighter rounded border border-white/5">
                          <span className="text-gray-500 block text-[9px] uppercase">Aspect Ratio</span>
                          <span className="text-gray-200 font-semibold">{selectedProject.specs.ratio}</span>
                        </div>
                        <div className="p-2.5 bg-dark-lighter rounded border border-white/5">
                          <span className="text-gray-500 block text-[9px] uppercase">Optics / Glass</span>
                          <span className="text-gray-200 font-semibold">{selectedProject.specs.lens}</span>
                        </div>
                        <div className="p-2.5 bg-dark-lighter rounded border border-white/5">
                          <span className="text-gray-500 block text-[9px] uppercase">Shutter Phase</span>
                          <span className="text-gray-200 font-semibold">{selectedProject.specs.shutter}</span>
                        </div>
                        <div className="p-2.5 bg-dark-lighter rounded border border-white/5">
                          <span className="text-gray-500 block text-[9px] uppercase">Shooting Frame Rate</span>
                          <span className="text-gray-200 font-semibold">{selectedProject.specs.frameRate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Dynamic color palette blocks */}
                    <div>
                      <span className="text-white font-bold text-[10px] tracking-widest uppercase block mb-3 border-b border-white/10 pb-1">
                        <Palette className="w-3.5 h-3.5 inline mr-1 text-accent" /> COLOR GRADE PALETTE (HEX)
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {selectedProject.colorPalette.map((color, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 bg-dark-lighter p-1.5 pr-3 rounded border border-white/5"
                          >
                            <span
                              className="w-4 h-4 rounded-sm border border-white/15"
                              style={{ backgroundColor: color.hex }}
                            ></span>
                            <div className="font-mono text-[9px]">
                              <p className="text-white leading-none font-semibold">{color.name}</p>
                              <p className="text-gray-500 leading-none mt-0.5">{color.hex}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Creative credits roll */}
                    <div>
                      <span className="text-white font-bold text-[10px] tracking-widest uppercase block mb-3 border-b border-white/10 pb-1">
                        <Users className="w-3.5 h-3.5 inline mr-1 text-accent" /> CREATIVE CREW ROLL
                      </span>
                      <div className="space-y-1.5 text-xs">
                        {selectedProject.crew.map((member, idx) => (
                          <div key={idx} className="flex justify-between py-1 border-b border-white/5 font-light">
                            <span className="text-gray-500">{member.role}</span>
                            <span className="text-white font-semibold">{member.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5">
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        setIsMuted(true);
                        const contact = document.getElementById("contact");
                        if (contact) {
                          window.scrollTo({
                            top: contact.offsetTop - 80,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className="w-full bg-accent text-dark font-bold text-center py-3 rounded uppercase text-[11px] tracking-widest hover:bg-white transition-colors cursor-pointer"
                    >
                      Inquire About Similar Visual Treatments
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
