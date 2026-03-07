import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, getWhatsAppLink } from '@/src/constants';

export default function Products() {
  return (
    <section id="shop" className="py-24 bg-bg-accent/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] mb-4 inline-block font-semibold opacity-60">
            Koleksi Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Buket Unggulan</h2>
          <div className="h-px w-24 bg-primary-text/20 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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

        <div className="mt-20 text-center">
          <Link to="/shop" className="btn-outline">
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  );
}
