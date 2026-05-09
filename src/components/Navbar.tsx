import { motion } from "motion/react";
import { Heart, Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programmes", href: "#work" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass-light rounded-full px-8 py-4 flex items-center justify-between shadow-2xl shadow-brand-navy/5 ${
          scrolled ? "bg-white/90" : "bg-white/40"
        }`}>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-brand-orange p-2 rounded-xl rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-brand-orange/30">
              <Heart className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="font-serif text-2xl font-black tracking-tight text-brand-navy">
              Being <span className="text-brand-orange">Sevak</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-brand-navy/60 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-4 border-l border-brand-navy/10 pl-10">
              <button className="p-2 text-brand-navy/40 hover:text-brand-orange transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              <button className="bg-brand-orange text-white px-8 py-3 rounded-full text-sm font-extrabold hover:bg-brand-navy transition-all shadow-xl shadow-brand-orange/20 hover:shadow-brand-navy/20 active:scale-95">
                DONATE NOW
              </button>
            </div>
          </div>

          <button className="md:hidden p-2 text-brand-navy" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 mx-6 glass-light rounded-3xl p-8 flex flex-col gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-bold text-brand-navy"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-orange text-white w-full py-4 rounded-2xl font-black shadow-xl">
            DONATE NOW
          </button>
        </motion.div>
      )}
    </nav>
  );
}
