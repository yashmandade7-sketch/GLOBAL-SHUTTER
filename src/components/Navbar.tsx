import { useState, useEffect } from "react";
import { Camera, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-dark/95 backdrop-blur-md border-b border-white/5 shadow-2xl"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-centerCent">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="relative w-9 h-9 bg-accent rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
              {/* Outer aperture lens */}
              <div className="w-5 h-5 bg-dark rounded-full flex items-center justify-center">
                {/* Inner shutter sensor */}
                <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform"></div>
              </div>
            </div>
            <span className="font-display font-black text-lg md:text-xl tracking-tighter text-white group-hover:text-accent transition-colors">
              GLOBAL SHUTTER
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-widest uppercase">
            <button
              onClick={() => scrollToSection("work")}
              className="text-gray-400 hover:text-accent transition-colors cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-400 hover:text-accent transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("shutter-lab")}
              className="text-gray-400 hover:text-accent transition-colors cursor-pointer"
            >
              Shutter Lab
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-accent transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-400 hover:text-accent transition-colors cursor-pointer"
            >
              Contact
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-1.5 bg-accent text-dark px-6 py-2.5 rounded-full font-bold uppercase text-[11px] tracking-wider hover:bg-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-accent/10"
            >
              Get a Quote
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-accent transition-colors focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dark/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-display uppercase tracking-widest md:hidden"
          >
            <button
              onClick={() => scrollToSection("work")}
              className="hover:text-accent transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("shutter-lab")}
              className="hover:text-accent transition-colors"
            >
              Shutter Lab
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-accent hover:text-white transition-colors"
            >
              Contact
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 bg-accent text-dark px-8 py-3 rounded-full font-bold uppercase text-sm tracking-wider"
            >
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
