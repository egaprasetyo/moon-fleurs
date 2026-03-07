import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 bg-bg-main overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1527018263374-5adb6a54f01e?q=80&w=1000&auto=format&fit=crop"
                alt="Florist at work"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-bg-accent rounded-full -z-10 hidden md:block" />
            <div className="absolute -top-6 -left-6 border border-primary-text/10 w-full h-full rounded-3xl -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] mb-4 inline-block font-semibold opacity-60">
              Cerita Kami
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Merangkai Keindahan Sejak <span className="italic">2012</span>
            </h2>
            <div className="space-y-6 text-lg text-primary-text/80 leading-relaxed">
              <p>
                Moon Fleurs dimulai dengan keyakinan sederhana: bahwa bunga memiliki kekuatan untuk mengubah 
                setiap ruangan dan membangkitkan semangat. Apa yang dimulai sebagai studio taman kecil telah 
                tumbuh menjadi butik mewah terkemuka.
              </p>
              <p>
                Florist ahli kami menjelajahi dunia untuk mencari bunga yang paling istimewa, 
                memastikan bahwa setiap rangkaian yang kami buat adalah mahakarya warna, 
                tekstur, dan aroma.
              </p>
              <p className="font-serif italic text-2xl text-primary-text mt-8">
                "Kami tidak hanya menjual bunga; kami mengkurasi emosi."
              </p>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-serif">12rb+</p>
                <p className="text-xs uppercase tracking-widest opacity-60">Klien Puas</p>
              </div>
              <div className="w-px h-12 bg-primary-text/10" />
              <div className="text-center">
                <p className="text-3xl font-serif">150+</p>
                <p className="text-xs uppercase tracking-widest opacity-60">Pengiriman Harian</p>
              </div>
              <div className="w-px h-12 bg-primary-text/10" />
              <div className="text-center">
                <p className="text-3xl font-serif">15</p>
                <p className="text-xs uppercase tracking-widest opacity-60">Penghargaan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
