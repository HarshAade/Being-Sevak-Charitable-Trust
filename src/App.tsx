/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Stats from "./components/Stats";
import DonateSection from "./components/DonateSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import LazyImage from "./components/LazyImage";

export default function App() {
  return (
    <div className="min-h-screen bg-warm selection:bg-accent/20 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <DonateSection />
        <Testimonials />
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-5xl mb-8">Guided by the <br /><span className="italic text-brand-orange">Spirit of Sevak.</span></h2>
              <div className="space-y-8">
                <blockquote className="border-l-4 border-brand-orange pl-8 py-2">
                  <p className="text-2xl font-serif italic text-brand-navy/70 leading-relaxed">
                    "Being Sevak is not just about giving; it's about serving with humility and recognizing the shared dignity of every human being."
                  </p>
                  <footer className="mt-4 font-bold uppercase tracking-widest text-sm text-brand-orange">— Our Philosophy</footer>
                </blockquote>
                <p className="text-brand-navy/60 leading-relaxed text-lg">
                  Registered in Mumbai, Being Sevak Charitable Trust works tirelessly at the grassroots level. 
                  Our focus is on three key pillars: Hunger Alleviation, Healthcare Access, and Educational Empowerment. 
                  Every donation made to Being Sevak constitutes an investment in a brighter, more equitable future for India.
                </p>
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <p className="font-serif text-3xl font-bold">50%</p>
                    <p className="text-xs uppercase font-bold text-gray-400">80G Tax Exemption</p>
                  </div>
                  <div className="w-px h-10 bg-warm" />
                  <div className="text-center">
                    <p className="font-serif text-3xl font-bold">100%</p>
                    <p className="text-xs uppercase font-bold text-gray-400">Transparent Funds</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <LazyImage 
                  src="https://picsum.photos/seed/child1/400/600" 
                  alt="Impact" 
                  aspectRatio="aspect-[2/3]"
                  className="rounded-3xl shadow-xl w-full mt-12" 
                />
                <LazyImage 
                  src="https://picsum.photos/seed/child2/400/600" 
                  alt="Impact" 
                  aspectRatio="aspect-[2/3]"
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
              {/* Abstract decorations */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-orange/10 rounded-full -rotate-12 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-orange/5 rounded-full rotate-6 pointer-events-none" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
