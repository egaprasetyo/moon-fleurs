import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-bg-main">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.4em] mb-6 font-semibold opacity-60">
              Est. 2024 • Butik Bunga Mewah
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 text-primary-text">
              Bunga Elegan untuk Setiap <span className="italic">Momen</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-text/70 mb-12 font-light leading-relaxed max-w-lg">
              Merangkai bunga kustom yang menyampaikan pesan dari hati. 
              Rasakan seni pemberian hadiah premium bersama Moon Fleurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-primary text-center">
                Belanja Koleksi
              </Link>
              <a href="#categories" className="btn-outline text-center">
                Lihat Kategori
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Flower Bouquet"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-bg-accent rounded-full -z-0 opacity-50 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-primary-text/10 rounded-full -z-0" />
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block max-w-[200px]">
              <p className="text-xs uppercase tracking-widest font-bold opacity-40 mb-2">Today's Pick</p>
              <p className="font-serif italic text-lg leading-tight">"The Midnight Rose Collection"</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
