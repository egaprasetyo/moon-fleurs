import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Midnight Rose',
    price: '$85.00',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Ethereal Peony',
    price: '$120.00',
    image: 'https://images.unsplash.com/photo-1523694559144-4ec08b9e113c?q=80&w=800&auto=format&fit=crop',
    tag: 'Premium'
  },
  {
    id: 3,
    name: 'Golden Sunburst',
    price: '$65.00',
    image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop',
    tag: 'New'
  },
  {
    id: 4,
    name: 'Lavender Dream',
    price: '$95.00',
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800&auto=format&fit=crop',
    tag: 'Limited'
  },
  {
    id: 5,
    name: 'Pure Lily',
    price: '$75.00',
    image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?q=80&w=800&auto=format&fit=crop',
    tag: ''
  },
  {
    id: 6,
    name: 'Wild Orchard',
    price: '$110.00',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
    tag: 'Premium'
  }
];

export default function Products() {
  return (
    <section id="shop" className="py-24 bg-bg-accent/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] mb-4 inline-block font-semibold opacity-60">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Featured Bouquets</h2>
          <div className="h-px w-24 bg-primary-text/20 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl mb-6 bg-white shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                    {product.tag}
                  </div>
                )}

                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-500">
                  <Heart size={18} />
                </button>

                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/40 to-transparent">
                  <button className="w-full btn-primary bg-white text-primary-text flex items-center justify-center gap-2 py-3 text-sm">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif mb-1 group-hover:text-opacity-70 transition-opacity">
                    {product.name}
                  </h3>
                  <p className="text-sm text-primary-text/60 italic">Hand-picked seasonal blooms</p>
                </div>
                <span className="text-lg font-medium">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="btn-outline">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
