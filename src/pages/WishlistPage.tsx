import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Eye, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, getWhatsAppLink } from '@/src/constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useWishlist } from '../context/WishlistContext';

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const wishlistedProducts = PRODUCTS.filter(product => 
    wishlist.includes(product.id.toString())
  );

  return (
    <main className="min-h-screen bg-bg-main">
      <Navbar />
      
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.4em] mb-4 inline-block font-semibold opacity-60">
              Favorit Anda
            </span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-primary-text">
              Wishlist <span className="italic">Saya</span>
            </h1>
            <p className="text-lg text-primary-text/70 leading-relaxed">
              Kumpulan bunga pilihan yang Anda sukai. Simpan untuk momen spesial atau bagikan dengan orang tersayang.
            </p>
          </div>

          {wishlistedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {wishlistedProducts.map((product, index) => (
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
                    
                    <div className="absolute top-4 right-4 p-2 bg-primary-text text-bg-main rounded-full shadow-md">
                      <Heart size={18} className="fill-current" />
                    </div>

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
          ) : (
            <div className="text-center py-32 bg-bg-accent/10 rounded-[3rem] border border-dashed border-primary-text/10">
              <Heart size={48} className="mx-auto mb-6 opacity-10" />
              <p className="text-2xl font-serif opacity-40 mb-8">Wishlist Anda masih kosong</p>
              <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
                <ShoppingBag size={18} />
                Mulai Belanja
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
