import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '@/src/constants';

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-bg-main overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Belanja Berdasarkan Kategori</h2>
            <p className="text-primary-text/70">
              Temukan rangkaian bunga yang sempurna untuk setiap momen. Setiap kategori dikurasi dengan 
              bunga musiman tersegar.
            </p>
          </div>
          <Link to="/categories" className="text-sm font-medium uppercase tracking-widest border-b border-primary-text pb-1 hover:opacity-60 transition-opacity">
            Lihat Semua Kategori
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <Link to={`/category/${cat.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                </div>
                <h3 className="text-xl font-serif mb-1">{cat.name}</h3>
                <p className="text-sm text-primary-text/60 uppercase tracking-wider">{cat.count}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
