import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Play, Heart } from "lucide-react";
import { useRef } from "react";

import LazyImage from "./LazyImage";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={containerRef} className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden px-6 bg-mesh">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] mb-10 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              Fighting Hunger & Poverty Daily
            </div>
            
            <h1 className="text-6xl lg:text-[8rem] font-serif font-black leading-[0.85] mb-12 tracking-tighter">
              Serve with <br />
              <motion.span 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-gradient block mt-2"
              >
                Pure Love.
              </motion.span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-brand-navy/60 mb-14 max-w-xl leading-relaxed font-medium">
              Join <span className="text-brand-navy font-bold">Being Sevak</span> in our mission to provide dignity, health, and a future to those marginalized in our society.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <button className="group relative bg-brand-navy text-white px-12 py-5 rounded-[2rem] text-lg font-black hover:bg-brand-orange transition-all shadow-2xl shadow-brand-navy/30 overflow-hidden flex items-center gap-3 active:scale-95">
                <span className="relative z-10 underline decoration-white/20 underline-offset-8">START DONATING</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              
              <button className="group flex items-center gap-4 px-8 py-5 rounded-2xl text-brand-navy font-bold hover:bg-white hover:shadow-xl hover:shadow-brand-navy/5 transition-all outline-none ring-0">
                <div className="w-14 h-14 rounded-full glass-light flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-5 h-5 fill-brand-orange text-brand-orange ml-1" />
                </div>
                <span className="text-lg">Watch Our Impact</span>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative">
          <motion.div
            style={{ y: y1, rotate }}
            className="relative"
          >
            <div className="relative z-10 rounded-[5rem] shadow-2xl shadow-brand-orange/30 border-[12px] border-white group overflow-hidden">
              <LazyImage
                src="https://picsum.photos/seed/servings/900/1200"
                alt="Heart of Sevak"
                aspectRatio="aspect-[4/5]"
                className="w-full group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Impact Card */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -right-12 top-20 glass-dark p-8 rounded-[3rem] shadow-2xl z-20 w-72 hidden lg:block"
            >
              <div className="flex items-center gap-5 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/40">
                  <Heart className="text-white w-7 h-7 fill-current" />
                </div>
                <div>
                  <h4 className="text-white font-black text-2xl">5,000+</h4>
                  <p className="text-white/50 text-[10px] font-black uppercase tracking-widest">Meals Daily</p>
                </div>
              </div>
              <p className="text-white/70 text-base leading-relaxed font-medium">
                Your compassion drives every meal we serve.
              </p>
            </motion.div>

            {/* Abstract Decorative Circles with Parallax */}
            <motion.div 
              style={{ x: y1, y: y2 }}
              className="absolute -top-20 -right-20 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl animate-pulse" 
            />
            <motion.div 
              style={{ x: y2, y: y1 }}
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
