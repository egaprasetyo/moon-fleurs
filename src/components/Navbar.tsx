import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useWishlist } from '../context/WishlistContext';

const navLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Toko', href: '/shop' },
  { name: 'Kategori', href: '/categories' },
  { name: 'Toko Kami', href: '/#location' },
  { name: 'Kontak', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle anchor links across pages
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12',
        scrolled || location.pathname !== '/' ? 'glass-nav py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-primary-text">
          Moon Fleurs
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/wishlist" 
            className="relative p-2 hover:opacity-60 transition-opacity"
            title="Wishlist"
          >
            <Heart size={20} className={cn(wishlist.length > 0 && "fill-primary-text")} />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary-text text-bg-main text-[10px] flex items-center justify-center rounded-full font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link 
            to="/wishlist" 
            className="relative p-2"
          >
            <Heart size={20} className={cn(wishlist.length > 0 && "fill-primary-text")} />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary-text text-bg-main text-[10px] flex items-center justify-center rounded-full font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-main border-b border-primary-text/5 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif italic hover:pl-2 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
