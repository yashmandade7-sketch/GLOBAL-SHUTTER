import { useState, ChangeEvent, FormEvent } from "react";
import { Check, ClipboardCheck, ArrowRight, Camera, Hourglass, Film, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    budget: "25-50k",
    type: "Commercial",
    brief: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateEstimate = () => {
    const { budget, type } = formData;
    let cameraText = "Red V-Raptor Cine package";
    let timelineText = "5 to 6 Weeks Total";
    let crewCount = "7 technical crew members";
    let treatmentColor = "High Density Noir";

    if (budget === "10-25k") {
      cameraText = "Sony FX9 + Zeiss Cine primes";
      timelineText = "3 to 4 Weeks Total";
      crewCount = "4 technical crew members";
      treatmentColor = "Atmospheric Indie";
    } else if (budget === "25-50k") {
      cameraText = "Red V-Raptor + Cooke Anamorphics";
      timelineText = "5 to 8 Weeks Total";
      crewCount = "9 technical crew members";
      treatmentColor = "Deep Cinematic Refraction";
    } else {
      // 50k+
      cameraText = "Arri Alexa 35 & Bolt High-speed Cinebot";
      timelineText = "8 to 12 Weeks Total";
      crewCount = "15+ senior crew members";
      treatmentColor = "Premium Anamorphic Masterclass";
    }

    return { cameraText, timelineText, crewCount, treatmentColor };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brief) {
      alert("Please fill out the Name, Email, and Project Brief fields for treatment planning.");
      return;
    }

    // Generate random Ticket ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setTicketId(`GS-2026-${randomNum}`);
    setSubmitted(true);
  };

  const { cameraText, timelineText, crewCount, treatmentColor } = calculateEstimate();

  return (
    <section id="contact" className="py-24 bg-dark-lighter relative overflow-hidden">
      {/* Absolute text backdrop watermark from original user requirements */}
      <div className="absolute -bottom-16 -right-16 text-[10rem] md:text-[15rem] font-display font-black text-white/5 opacity-[0.03] select-none pointer-events-none tracking-tighter">
        SHUTTER
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side Left */}
          <div className="space-y-8">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase block mb-3">
                Treatment Request
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black leading-[1.1] text-white uppercase">
                START A <br />
                <span className="text-outline hover:text-outline-active transition-all duration-300">
                  PROJECT
                </span>
              </h2>
              <p className="text-gray-400 mt-5 text-sm md:text-base leading-relaxed max-w-sm font-light">
                Ready to elevate your brand’s visual identity? Fill out our dynamic brief card. Let's create something unforgettable.
              </p>
            </div>

            {/* Direct Contact coordinates */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-accent bg-accent/5 rounded">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <p className="text-base text-gray-200">hello@globalshutter.studio</p>
              </div>
              <p className="text-base text-gray-400">+1 (555) 123-4567</p>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                HQ: 123 Media District, Los Angeles, CA
              </p>
            </div>

            {/* Live Interactive Spec Estimator Block */}
            <div className="bg-dark/80 p-6 rounded-lg border border-white/5 space-y-4 max-w-md">
              <span className="font-mono text-[9px] text-accent uppercase tracking-widest font-black block">
                Live Campaign Estimator Readout
              </span>
              
              <div className="space-y-3.5 text-xs text-gray-300">
                <div className="flex items-center gap-2.5">
                  <Camera className="w-4 h-4 text-accent shrink-0" />
                  <span>
                    Optics Package: <strong className="text-white">{cameraText}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Hourglass className="w-4 h-4 text-accent shrink-0" />
                  <span>
                    Projected Pipeline: <strong className="text-white">{timelineText}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Film className="w-4 h-4 text-accent shrink-0" />
                  <span>
                    Creative Treatment Core: <strong className="text-accent">{treatmentColor}</strong>
                  </span>
                </div>
                <div className="text-[10px] font-mono text-gray-500 border-t border-white/5 pt-3">
                  Estimated based on {formData.type} request with {formData.budget === "50k+" ? "premium" : "allocated"} budget.
                </div>
              </div>
            </div>
          </div>

          {/* Form Side Right */}
          <div className="bg-dark border border-white/5 p-6 md:p-8 rounded-xl relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-500">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Arthur Carter"
                        className="bg-dark-lighter border border-white/10 p-3.5 rounded text-sm w-full text-white focus:border-accent font-light"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-500">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Nike Global"
                        className="bg-dark-lighter border border-white/10 p-3.5 rounded text-sm w-full text-white focus:border-accent font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-500">
                      Email address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. arthur@creative.com"
                      className="bg-dark-lighter border border-white/10 p-3.5 rounded text-sm w-full text-white focus:border-accent font-light"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-500">
                        Project Category
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="bg-dark-lighter border border-white/10 p-3.5 rounded text-sm w-full text-gray-300 focus:border-accent cursor-pointer"
                      >
                        <option value="Commercial">Commercial / Ad Film</option>
                        <option value="Music Video">Creative Music Film</option>
                        <option value="Social Campaign">Social Fast Clip Spec</option>
                        <option value="Corporate Vision">Corporate Documentary</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-500">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="bg-dark-lighter border border-white/10 p-3.5 rounded text-sm w-full text-gray-300 focus:border-accent cursor-pointer"
                      >
                        <option value="10-25k">$10k - $25k</option>
                        <option value="25-50k">$25k - $50k</option>
                        <option value="50k+">$50k+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-500">
                      Brief description of visual target *
                    </label>
                    <textarea
                      name="brief"
                      rows={4}
                      value={formData.brief}
                      onChange={handleInputChange}
                      required
                      placeholder="Outline any key styling notes, storyboard points or visual targets (e.g. Fast shutter, raw asphalt, slow motion at sunset...)"
                      className="bg-dark-lighter border border-white/10 p-3.5 text-sm rounded w-full text-white focus:border-accent font-light"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-accent text-dark font-bold uppercase text-xs tracking-[0.2em] py-4 w-full rounded hover:bg-white transition-colors cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 shadow-lg shadow-accent/5"
                  >
                    Submit Treatment Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mx-auto text-accent mb-4">
                    <ClipboardCheck className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight">
                    TREATMENT SUBMITTED
                  </h3>
                  
                  <div className="bg-dark-lighter border border-white/5 p-4 rounded-lg font-mono text-xs max-w-sm mx-auto space-y-2">
                    <div className="text-gray-500 uppercase tracking-widest text-[9px]">Booking Reference Code</div>
                    <div className="text-accent text-lg font-bold">{ticketId}</div>
                    <div className="text-gray-400 mt-2">
                      Estimate: {timelineText}
                    </div>
                    <div className="text-gray-400">
                      Primary Camera option: {cameraText}
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed max-w-xs mx-auto font-light">
                    Your brief has been forwarded to our lead Director. We will prepare an initial typographic Director's Treatment and contact you at <strong className="text-white">{formData.email}</strong> within 4 hours.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        budget: "25-50k",
                        type: "Commercial",
                        brief: ""
                      });
                    }}
                    className="text-xs text-accent font-mono border-b border-accent/30 hover:border-accent pb-0.5 tracking-wider uppercase bg-transparent p-0 cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
