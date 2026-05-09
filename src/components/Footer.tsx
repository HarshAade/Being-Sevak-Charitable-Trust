import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Chrome, ArrowUp } from "lucide-react";
import LazyImage from "./LazyImage";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-brand-navy text-white pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Decorative background logo */}
      <Heart className="absolute -bottom-20 -right-20 w-[600px] h-[600px] text-white/5 fill-current rotate-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer">
              <div className="bg-brand-orange p-2 rounded-xl rotate-12 group-hover:rotate-0 transition-transform">
                <Heart className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="font-serif text-3xl font-black tracking-tight">
                Being <span className="text-brand-orange">Sevak</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed mb-10 text-lg font-medium pr-6">
              Empowering the marginalized through food, health, and education. A registered NGO committed to zero-waste and 100% transparency.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Chrome].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center hover:bg-brand-orange transition-all hover:-translate-y-1">
                  <Icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-brand-orange mb-10">Foundation</h4>
            <ul className="space-y-6 text-white/60 font-bold">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Annual Reports</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Tax Benefits (80G)</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Legal Documents</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-brand-orange mb-10">Get in Touch</h4>
            <ul className="space-y-8 text-white/60 font-medium">
              <li className="flex gap-5">
                <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                </div>
                <span>Reg No. E-31948 (Mumbai) <br />Maharashtra, India</span>
              </li>
              <li className="flex gap-5">
                <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <span>+91 91361 11250</span>
              </li>
              <li className="flex gap-5">
                <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <span>info@beingsevak.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-brand-orange mb-10">Stay Inspired</h4>
            <p className="text-white/40 mb-8 font-serif italic text-xl leading-relaxed">"Service to humanity is service to God."</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Enter email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-brand-orange transition-all placeholder:text-white/20 font-bold"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-orange px-6 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-orange transition-all">
                JOIN
              </button>
            </form>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-white/30 text-sm font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} BEING SEVAK CHARITABLE TRUST.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-16 h-16 rounded-full glass-dark flex items-center justify-center hover:bg-brand-orange transition-all group scale-100 hover:scale-110"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex items-center gap-8 saturate-0 opacity-30 hover:saturate-100 hover:opacity-100 transition-all">
            <div className="w-10 overflow-hidden">
               <LazyImage src="https://cdn-icons-png.flaticon.com/512/196/196101.png" alt="Mastercard" aspectRatio="aspect-video" />
            </div>
            <div className="w-10 overflow-hidden">
               <LazyImage src="https://cdn-icons-png.flaticon.com/512/196/196107.png" alt="Visa" aspectRatio="aspect-video" />
            </div>
            <div className="w-10 overflow-hidden">
               <LazyImage src="https://cdn-icons-png.flaticon.com/512/196/196118.png" alt="PayPal" aspectRatio="aspect-video" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
