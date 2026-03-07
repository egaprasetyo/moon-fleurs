import React from 'react';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-main pt-24 pb-12 border-t border-primary-text/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a href="#" className="text-3xl font-serif font-bold tracking-tight text-primary-text">
              Moon Fleurs
            </a>
            <p className="text-primary-text/60 leading-relaxed">
              Bringing the poetic beauty of nature into your home with our 
              curated floral arrangements and luxury bouquets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-primary-text/10 flex items-center justify-center hover:bg-primary-text hover:text-bg-main transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-text/10 flex items-center justify-center hover:bg-primary-text hover:text-bg-main transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-text/10 flex items-center justify-center hover:bg-primary-text hover:text-bg-main transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:opacity-60 transition-opacity">Home</a></li>
              <li><a href="#shop" className="hover:opacity-60 transition-opacity">Shop All</a></li>
              <li><a href="#categories" className="hover:opacity-60 transition-opacity">Categories</a></li>
              <li><a href="#location" className="hover:opacity-60 transition-opacity">Our Store</a></li>
              <li><a href="#contact" className="hover:opacity-60 transition-opacity">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Customer Care</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:opacity-60 transition-opacity">Shipping Policy</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Returns & Refunds</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Flower Care Guide</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Boutique</h4>
            <ul className="space-y-4 text-sm text-primary-text/60">
              <li>123 Floral Avenue, Moon District</li>
              <li>Paris, France 75001</li>
              <li>+33 (0) 1 23 45 67 89</li>
              <li>hello@moonfleurs.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-primary-text/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-primary-text/40 tracking-widest uppercase">
            © 2024 Moon Fleurs Boutique. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-primary-text/20 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
