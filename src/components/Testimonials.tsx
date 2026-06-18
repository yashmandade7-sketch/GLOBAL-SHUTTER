import { TESTIMONIALS_DATA } from "../data";
import { Star, MessageSquare } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-dark border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Mockup Title Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold">Design Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white uppercase mb-5">
            CLIENT REVIEWS
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
            Real feedback from creative directors and visionary brand leads who trusted our technical shutter precision to capture active audiences.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-dark-lighter border border-white/5 rounded-xl p-8 flex flex-col justify-between hover:border-accent/40 hover:shadow-xl hover:shadow-accent/[0.02] transition-all duration-300 relative group"
            >
              {/* Quote visual element back decoration */}
              <div className="absolute right-6 top-6 opacity-[0.03] text-accent group-hover:opacity-[0.06] transition-opacity">
                <MessageSquare className="w-12 h-12" />
              </div>

              <div>
                {/* 5 Golden Stars Rating */}
                <div className="flex items-center gap-1 mb-6 text-accent">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="font-mono text-xs text-gray-400 ml-2">5.0</span>
                </div>

                {/* Review Text block */}
                <p className="text-gray-300 text-sm leading-relaxed font-light mb-8 relative z-10 italic">
                  "{item.content}"
                </p>
              </div>

              {/* Review Author detail */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5 relative z-10">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/15 group-hover:border-accent transition-colors"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-white tracking-tight group-hover:text-accent transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-mono uppercase mt-0.5 tracking-wider">
                    {item.role} // <span className="text-accent">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Studio metrics stat row (from mockup 2 / 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-12 border-t border-white/5 text-center">
          <div className="space-y-1">
            <h3 className="text-4xl md:text-5xl font-display font-black text-accent tracking-tight">
              200+
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
              Commercial projects completed
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">
              98%
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
              Client satisfaction rate
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">
              5+
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
              Years of technical elite experiences
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
