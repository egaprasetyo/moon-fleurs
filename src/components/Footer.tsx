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
            <h4 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:opacity-60 transition-opacity">Beranda</a></li>
              <li><a href="#shop" className="hover:opacity-60 transition-opacity">Semua Produk</a></li>
              <li><a href="#categories" className="hover:opacity-60 transition-opacity">Kategori</a></li>
              <li><a href="#location" className="hover:opacity-60 transition-opacity">Toko Kami</a></li>
              <li><a href="#contact" className="hover:opacity-60 transition-opacity">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Layanan Pelanggan</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:opacity-60 transition-opacity">Kebijakan Pengiriman</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Pengembalian & Refund</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Panduan Perawatan Bunga</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">Kebijakan Privasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Butik</h4>
            <ul className="space-y-4 text-sm text-primary-text/60">
              <li>Jl. Bunga Melati No. 123, Jakarta Selatan</li>
              <li>DKI Jakarta, Indonesia 12345</li>
              <li>+62 812 3456 7890</li>
              <li>halo@moonfleurs.com</li>
            </ul>
          </div>
        </div>

        {/* Payment & Shipping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 py-12 border-t border-primary-text/5">
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">Metode Pembayaran</h4>
            <div className="flex flex-wrap gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/QRIS_logo.svg/1200px-QRIS_logo.svg.png" alt="QRIS" className="h-6 object-contain" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png" alt="BCA" className="h-4 object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">Metode Pengiriman</h4>
            <div className="flex flex-wrap gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Gojek_logo_2019.svg/1200px-Gojek_logo_2019.svg.png" alt="Gojek" className="h-6 object-contain" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/GoSend_logo.svg/1200px-GoSend_logo.svg.png" alt="GoSend" className="h-6 object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-primary-text/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-primary-text/40 tracking-widest uppercase">
            © 2024 Moon Fleurs Boutique. Hak Cipta Dilindungi.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity"
          >
            Kembali ke Atas
            <div className="w-8 h-8 rounded-full border border-primary-text/20 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
