import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CATEGORIES } from '@/src/constants';

export default function CategoriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-bg-main">
      <Navbar />
      
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.4em] mb-4 inline-block font-semibold opacity-60">
              Koleksi Kami
            </span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-primary-text">
              Jelajahi <span className="italic">Kategori</span>
            </h1>
            <p className="text-lg text-primary-text/70 leading-relaxed">
              Temukan rangkaian bunga yang sempurna untuk setiap momen. Setiap kategori dikurasi dengan 
              bunga musiman tersegar dan desain yang bermakna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {CATEGORIES.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <Link to={`/category/${cat.id}`} className="block">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-xs uppercase tracking-[0.3em] font-bold mb-2 opacity-80">{cat.count}</p>
                      <h3 className="text-3xl font-serif">{cat.name}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-primary-text/60 font-light leading-relaxed max-w-md">
                    {cat.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
