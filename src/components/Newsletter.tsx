import React from 'react';
import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-bg-accent">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Bergabung dengan Bloom Club</h2>
            <p className="text-lg text-primary-text/70 mb-10 max-w-2xl mx-auto">
              Berlangganan untuk menerima inspirasi bunga, penawaran eksklusif, dan 
              akses awal ke koleksi musiman kami.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Masukkan alamat email Anda"
                className="flex-1 bg-white border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-primary-text/20 transition-all outline-none"
              />
              <button className="btn-primary whitespace-nowrap">
                Berlangganan
              </button>
            </form>
            <p className="mt-6 text-xs text-primary-text/40 tracking-wide">
              Dengan berlangganan, Anda menyetujui Kebijakan Privasi dan Ketentuan Layanan kami.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
