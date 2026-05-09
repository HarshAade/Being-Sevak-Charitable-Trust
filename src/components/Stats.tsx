import { motion } from "motion/react";
import { Utensils, Heart, GraduationCap, Eye } from "lucide-react";

export default function Stats() {
  const stats = [
    { 
      label: "Meals Served Daily", 
      value: "5,000+", 
      icon: Utensils, 
      color: "bg-brand-orange", 
      size: "lg",
      desc: "Providing hot, nutritious meals across Mumbai."
    },
    { 
      label: "Vision Restored", 
      value: "12,400+", 
      icon: Eye, 
      color: "bg-blue-600", 
      size: "sm",
      desc: "Free cataract surgeries in rural camps."
    },
    { 
      label: "Education", 
      value: "850+", 
      icon: GraduationCap, 
      color: "bg-emerald-600", 
      size: "sm",
      desc: "Underprivileged children in school."
    },
    { 
      label: "Volunteers", 
      value: "1,200+", 
      icon: Heart, 
      color: "bg-[#7c3aed]", 
      size: "lg",
      desc: "Selfless individuals serving the community."
    },
  ];

  return (
    <section id="impact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl mb-6">Small Steps, <br /><span className="text-brand-orange italic">Giant Leaps.</span></h2>
            <p className="text-xl text-brand-navy/60 font-medium">We measure our success not in numbers, but in the smiles and health of the people we serve.</p>
          </div>
          <button className="bg-white border-2 border-brand-navy/10 px-10 py-5 rounded-2xl font-black text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-xl shadow-brand-navy/5">
            DOWNLOAD REPORT
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 h-auto lg:h-[600px]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[2.5rem] p-10 flex flex-col justify-between group cursor-default shadow-2xl shadow-brand-navy/5 transition-all hover:-translate-y-2 ${
                stat.size === "lg" ? "lg:col-span-3 lg:row-span-1" : "lg:col-span-2 lg:row-span-1"
              } ${stat.color} text-white`}
            >
              <div className="flex justify-between items-start relative z-10">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-right">
                  <p className="text-5xl lg:text-7xl font-serif font-black">{stat.value}</p>
                  <p className="text-sm font-black uppercase tracking-widest opacity-80 mt-2">{stat.label}</p>
                </div>
              </div>
              
              <div className="relative z-10 mt-12">
                <p className="text-xl font-bold opacity-90 max-w-xs leading-relaxed">{stat.desc}</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <stat.icon className="w-40 h-40 -mr-10 -mt-10" />
              </div>
            </motion.div>
          ))}
          
          <div className="lg:col-span-4 lg:row-span-1 glass-light border-0 rounded-[2.5rem] p-12 flex items-center justify-between shadow-2xl shadow-brand-navy/5 relative overflow-hidden group">
            <div className="relative z-10 max-w-lg">
              <h3 className="text-3xl font-serif mb-4">"Our reward is seeing a child healthy and happy."</h3>
              <p className="text-brand-navy/50 font-bold uppercase tracking-widest text-sm">— Dr. Prakash Kothari, Founder</p>
            </div>
            <div className="hidden lg:block relative z-10">
              <div className="w-24 h-24 rounded-full bg-brand-orange flex items-center justify-center animate-bounce shadow-xl shadow-brand-orange/30">
                <Heart className="text-white w-10 h-10 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
