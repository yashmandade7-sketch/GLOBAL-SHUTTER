import { ShieldAlert, Instagram, Youtube, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-dark border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-dark rounded-full"></div>
              </div>
              <span className="font-display font-black text-white tracking-widest text-sm uppercase">
                GLOBAL SHUTTER
              </span>
            </div>
            <p className="text-gray-500 text-[10px] uppercase font-mono tracking-widest">
              Mergin' creative disruption with tech precision.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-8 text-gray-500 text-xs uppercase tracking-widest font-semibold font-mono">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>Vimeo</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-dark-lighter hover:bg-accent hover:text-dark rounded-full border border-white/5 transition-all text-gray-400 group cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom standard layout credits and policy */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4 mt-12 pt-8 border-t border-white/5 text-[10px] font-mono text-gray-600">
          <div>
            © 2026 GLOBAL SHUTTER ADVERTISING PRODUCTION. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-gray-400 transition-colors cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">TERMS OF SHUTTER USE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
