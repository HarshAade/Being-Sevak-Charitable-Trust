import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Heart, Sparkles } from "lucide-react";
import LazyImage from "./LazyImage";

export default function DonateSection() {
  return (
    <section className="py-32 px-6 bg-brand-cream relative overflow-hidden text-brand-navy">
       {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-brand-navy rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/10">
          <div className="flex-1 p-12 lg:p-24 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-black text-xs uppercase tracking-widest mb-10">
               <Sparkles className="w-3 h-3 text-brand-orange" />
               Impact over Charity
            </div>
            
            <h2 className="text-6xl lg:text-8xl font-serif font-black mb-10 leading-[0.85] tracking-tighter">
              Fuel the <br />
              <span className="text-brand-orange">Mission.</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              {[
                { text: "Feed a child for a month for just ₹1,250", icon: CheckCircle2, color: "text-emerald-400" },
                { text: "50% Tax Benefit under Section 80G", icon: ShieldCheck, color: "text-blue-400" },
                { text: "100% Transparency on every rupee spent", icon: Heart, color: "text-brand-orange" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-xl font-medium text-white/80">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {["₹1250", "₹2500", "₹5000", "Other"].map((amt) => (
                <button 
                  key={amt}
                  className="py-5 bg-white/5 border-2 border-white/10 rounded-2xl font-black text-xl hover:border-brand-orange hover:bg-brand-orange transition-all text-white"
                >
                  {amt}
                </button>
              ))}
            </div>

            <button className="w-full bg-brand-orange text-white py-6 rounded-[2rem] text-2xl font-black hover:scale-[1.02] transition-all shadow-2xl shadow-brand-orange/30 active:scale-95">
              PROCEED TO DONATE
            </button>
            <p className="text-center mt-6 text-white/40 text-sm font-bold uppercase tracking-widest">Secure Payment • Receipts generated instantly</p>
          </div>

          <div className="flex-1 relative min-h-[500px] lg:min-h-auto overflow-hidden">
            <LazyImage
              src="https://picsum.photos/seed/smiles/1000/1500"
              alt="The Impact"
              aspectRatio="aspect-auto h-full"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent lg:hidden" />
            
            <div className="absolute bottom-16 left-16 right-16 glass-light border-0 p-10 rounded-[3rem] shadow-2xl">
              <h3 className="text-3xl font-serif italic text-brand-navy mb-4 leading-tight">
                "Being Sevak is more than a trust; it's a movement of compassion."
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-navy overflow-hidden relative">
                   <LazyImage 
                    src="https://i.pravatar.cc/150?u=founder" 
                    alt="Founder" 
                    aspectRatio="aspect-square"
                  />
                </div>
                <div>
                  <p className="font-black text-brand-navy uppercase tracking-widest text-sm">Founder's Note</p>
                  <p className="text-brand-navy/60 text-xs font-bold">Leading the change since 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
