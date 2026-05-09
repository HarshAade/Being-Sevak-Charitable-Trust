import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import LazyImage from "./LazyImage";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Savitri Devi",
      role: "Beneficiary, Sevak Kitchen",
      text: "During the hardest months of my life, Sevak Kitchen was the only thing that kept my children fed. Their kindness is a blessing.",
      image: "https://i.pravatar.cc/150?u=savitri"
    },
    {
      name: "Rajesh Malhotra",
      role: "Monthly Donor",
      text: "I choose Being Sevak because of their extreme transparency. Knowing exactly where my donation goes makes it a meaningful investment in humanity.",
      image: "https://i.pravatar.cc/150?u=rajesh"
    },
    {
      name: "Aarav Khan",
      role: "Student, Sevak Pathshala",
      text: "I never thought I could learn on a computer. Pathshala has opened a whole new world for me. I want to be an engineer one day.",
      image: "https://i.pravatar.cc/150?u=aarav"
    }
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 px-6 bg-brand-cream relative overflow-hidden">
      {/* Decorative background logo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest mb-6">
                Voices of Gratitude
              </div>
              <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">Stories of <br /><span className="text-gradient italic font-serif">Transformation.</span></h2>
              <p className="text-xl text-brand-navy/60 font-medium mb-12">
                Every meal served and every surgery performed tells a different story. These are the voices of the lives you've helped change.
              </p>
              
              <div className="flex items-center gap-6">
                <button 
                  onClick={prev}
                  className="w-16 h-16 rounded-2xl glass-light flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all shadow-xl shadow-brand-navy/5"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={next}
                  className="w-16 h-16 rounded-2xl bg-brand-navy text-white flex items-center justify-center hover:bg-brand-orange transition-all shadow-2xl shadow-brand-navy/20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="h-px flex-1 bg-brand-navy/10 ml-4" />
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="relative h-[450px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="absolute inset-0 bg-white rounded-[4rem] p-12 lg:p-16 shadow-2xl shadow-brand-navy/10 border border-brand-navy/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-10">
                      <div className="bg-brand-orange p-4 rounded-2xl shadow-lg shadow-brand-orange/30">
                        <Quote className="text-white w-8 h-8 fill-current" />
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Heart key={s} className="w-4 h-4 text-brand-orange fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-2xl lg:text-3xl font-serif font-medium text-brand-navy leading-relaxed italic">
                      "{testimonials[active].text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-10 border-t border-brand-navy/5">
                    <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-brand-cream shrink-0">
                      <LazyImage 
                        src={testimonials[active].image} 
                        alt={testimonials[active].name} 
                        aspectRatio="aspect-square" 
                      />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-brand-navy">{testimonials[active].name}</h4>
                      <p className="text-sm font-black text-brand-orange uppercase tracking-[0.2em]">{testimonials[active].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    active === i ? "w-12 bg-brand-orange" : "w-2 bg-brand-navy/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
