import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, Eye, Heart, ArrowLeft } from 'lucide-react';
import { PRODUCTS, CATEGORIES, getWhatsAppLink } from '@/src/constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useWishlist } from '../context/WishlistContext';
import { cn } from '@/src/lib/utils';

export default function CategoryDetail() {
  const { id } = useParams<{ id: string }>();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const category = CATEGORIES.find(c => c.id === id);
  const categoryProducts = PRODUCTS.filter(p => p.categoryId === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-main">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Kategori Tidak Ditemukan</h1>
          <Link to="/categories" className="btn-outline">Kembali ke Kategori</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg-main">
      <Navbar />
      
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <Link 
            to="/categories" 
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity mb-12"
          >
            <ArrowLeft size={16} />
            Kembali ke Kategori
          </Link>

          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.4em] mb-4 inline-block font-semibold opacity-60">
              Kategori: {category.name}
            </span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-primary-text">
              {category.name}
            </h1>
            <p className="text-lg text-primary-text/70 leading-relaxed">
              {category.description}
            </p>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {categoryProducts.map((product, index) => {
                const isFavorite = isInWishlist(product.id.toString());
                return (
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

                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <Link 
                          to={`/product/${product.id}`}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-primary-text"
                          title="Lihat Detail"
                        >
                          <Eye size={18} />
                        </Link>
                        <button 
                          onClick={() => toggleWishlist(product.id.toString())}
                          className={cn(
                            "p-2 bg-white/90 backdrop-blur-sm rounded-full transition-all duration-300",
                            isFavorite ? "text-primary-text opacity-100" : "opacity-0 group-hover:opacity-100"
                          )}
                          title={isFavorite ? "Hapus dari Wishlist" : "Tambah ke Wishlist"}
                        >
                          <Heart size={18} className={cn(isFavorite && "fill-current")} />
                        </button>
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
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl font-serif opacity-40">Belum ada produk dalam kategori ini.</p>
              <Link to="/shop" className="btn-primary mt-8 inline-block">Lihat Semua Produk</Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
