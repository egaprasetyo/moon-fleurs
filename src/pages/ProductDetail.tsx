import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, ArrowLeft, Check, Truck, ShieldCheck, Heart } from 'lucide-react';
import { PRODUCTS, getWhatsAppLink, Product } from '@/src/constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = PRODUCTS.find(p => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-main">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg-main">
      <Navbar />
      
      <section className="pt-28 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity mb-12"
          >
            <ArrowLeft size={16} />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-white">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer hover:opacity-80 transition-opacity">
                    <img 
                      src={product.image} 
                      alt={`${product.name} view ${i}`} 
                      className="w-full h-full object-cover grayscale-[0.2]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <div className="mb-8">
                {product.tag && (
                  <span className="inline-block bg-bg-accent px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mb-4">
                    {product.tag}
                  </span>
                )}
                <h1 className="text-5xl md:text-6xl font-serif mb-4 text-primary-text">{product.name}</h1>
                <p className="text-3xl font-medium text-primary-text/80">{product.price}</p>
              </div>

              <div className="h-px w-full bg-primary-text/10 mb-8" />

              <div className="space-y-6 mb-10">
                <p className="text-lg text-primary-text/70 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm uppercase tracking-widest font-bold opacity-40">What's Included</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-3 text-primary-text/80">
                        <div className="w-5 h-5 rounded-full bg-bg-accent flex items-center justify-center shrink-0">
                          <Check size={12} />
                        </div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary flex items-center justify-center gap-3 py-4"
                >
                  <MessageCircle size={20} />
                  Hubungi Kami (WhatsApp)
                </a>
                <button className="p-4 border border-primary-text/20 rounded-full hover:bg-bg-accent transition-colors">
                  <Heart size={24} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-primary-text/10">
                <div className="flex items-start gap-4">
                  <Truck className="text-primary-text/40" size={24} />
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-widest mb-1">Fast Delivery</h5>
                    <p className="text-xs text-primary-text/60">Same day delivery available for orders before 12 PM.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-primary-text/40" size={24} />
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-widest mb-1">Freshness Guarantee</h5>
                    <p className="text-xs text-primary-text/60">We guarantee the freshness of our flowers for 7 days.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 bg-bg-accent/20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-serif mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <h3 className="font-serif text-lg">{p.name}</h3>
                <p className="text-sm opacity-60">{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
