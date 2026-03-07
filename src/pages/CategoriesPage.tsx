import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  {
    name: 'Bunga Ulang Tahun',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop',
    count: '24 Produk',
    description: 'Rangkaian ceria untuk merayakan hari spesial orang terkasih.'
  },
  {
    name: 'Buket Pernikahan',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    count: '18 Produk',
    description: 'Keanggunan abadi untuk hari paling berkesan dalam hidup Anda.'
  },
  {
    name: 'Bunga Romantis',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop',
    count: '32 Produk',
    description: 'Ungkapkan cinta Anda dengan mawar merah dan bunga romantis lainnya.'
  },
  {
    name: 'Bunga Simpati',
    image: 'https://images.unsplash.com/photo-1525310235261-9462700be58e?q=80&w=800&auto=format&fit=crop',
    count: '12 Produk',
    description: 'Sampaikan belasungkawa dan dukungan dengan rangkaian yang menenangkan.'
  }
];

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
            {categories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <Link to="/shop" className="block">
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
