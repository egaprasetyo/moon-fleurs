import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Eye, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, getWhatsAppLink } from '@/src/constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-bg-main">
      <Navbar />
      
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.4em] mb-4 inline-block font-semibold opacity-60">
                Koleksi Lengkap Kami
              </span>
              <h1 className="text-5xl md:text-6xl font-serif mb-6 text-primary-text">
                Belanja Semua <span className="italic">Buket</span>
              </h1>
              <p className="text-lg text-primary-text/70 leading-relaxed">
                Jelajahi rangkaian lengkap rangkaian bunga buatan tangan kami. 
                Dari mawar romantis hingga anggrek eksotis, temukan hadiah sempurna untuk orang tersayang.
              </p>
            </div>
            
            <div className="relative w-full md:w-80">
              <input 
                type="text" 
                placeholder="Cari bunga..."
                className="w-full bg-bg-accent/30 border-none rounded-full px-12 py-4 focus:ring-2 focus:ring-primary-text/20 transition-all outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-text/40" size={20} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-3xl mb-6 bg-white shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                  <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                      {product.tag}
                    </div>
                  )}

                  <Link 
                    to={`/product/${product.id}`}
                    className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-primary-text"
                  >
                    <Eye size={18} />
                  </Link>

                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/40 to-transparent">
                    <a 
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary bg-white text-primary-text flex items-center justify-center gap-2 py-3 text-sm"
                    >
                      <MessageCircle size={16} />
                      Hubungi Kami
                    </a>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-serif mb-1 group-hover:text-opacity-70 transition-opacity">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-primary-text/60 italic">Bunga musiman pilihan</p>
                  </div>
                  <span className="text-lg font-medium">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
