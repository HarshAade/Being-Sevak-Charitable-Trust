import { motion } from "motion/react";
import { Utensils, Eye, GraduationCap, Users, ArrowRight } from "lucide-react";
import LazyImage from "./LazyImage";

export default function Programs() {
  const programs = [
    {
      id: "kitchen",
      title: "Sevak Kitchen",
      tag: "Nutrition",
      description: "Serving over 5,000 nutritious meals daily to children and families in need.",
      icon: Utensils,
      color: "from-orange-500 to-red-600",
      image: "https://picsum.photos/seed/food/800/800"
    },
    {
      id: "eye",
      title: "Eye Care",
      tag: "Health",
      description: "Free checkups and surgeries to restore vision and prevent blindness in rural areas.",
      icon: Eye,
      color: "from-blue-500 to-indigo-600",
      image: "https://picsum.photos/seed/doctor/800/800"
    },
    {
      id: "edu",
      title: "Pathshala",
      tag: "Education",
      description: "Providing quality education and digital literacy to tribal and urban-poor children.",
      icon: GraduationCap,
      color: "from-emerald-500 to-teal-600",
      image: "https://picsum.photos/seed/learn/800/800"
    },
    {
      id: "support",
      title: "Empowerment",
      tag: "Community",
      description: "Empowering families with sustainable livelihood opportunities and emergency aid.",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      image: "https://picsum.photos/seed/people/800/800"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="work" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12"
        >
          <div className="flex-1">
            <span className="text-brand-orange font-black uppercase tracking-widest text-sm mb-4 block">Our Impact Circles</span>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">Changing the world, <br /><span className="italic text-brand-orange">one life at a time.</span></h2>
          </div>
          <div className="flex-1 lg:pt-12">
            <p className="text-xl text-brand-navy/60 leading-relaxed font-medium">
              We focus on the most critical pillars of human dignity. Our programmes are designed to be sustainable, scalable, and deeply impactful for marginalized communities.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.id}
              variants={itemVariants}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-navy/10"
            >
              <LazyImage
                src={prog.image}
                alt={prog.title}
                aspectRatio="aspect-square"
                className="absolute inset-0 w-full h-full group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${prog.color} opacity-60 group-hover:opacity-40 transition-opacity`} />
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                    <prog.icon className="w-6 h-6" />
                  </div>
                  <span className="font-black uppercase tracking-widest text-sm text-white/80">{prog.tag}</span>
                </div>
                <h3 className="text-5xl font-serif font-black mb-6">{prog.title}</h3>
                <p className="text-lg font-medium text-white/90 max-w-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {prog.description}
                </p>
                <div className="flex items-center gap-4">
                  <button className="bg-white text-brand-navy px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all">
                    GET INVOLVED
                  </button>
                  <div className="w-12 h-12 rounded-2xl border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-brand-navy transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
