import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Flower Bouquet"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-sm uppercase tracking-[0.3em] mb-4 font-medium">
              Est. 2024 • Luxury Boutique
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-6">
              Elegant Flowers for Every <span className="italic">Moment</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 font-light leading-relaxed max-w-lg">
              Crafting bespoke floral arrangements that speak the language of the heart. 
              Experience the art of premium gifting with Moon Fleurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-white text-primary-text hover:bg-bg-accent">
                Shop Now
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-text">
                Our Collections
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-white/30" />
      </motion.div>
    </section>
  );
}
