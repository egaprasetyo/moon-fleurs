import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-bg-accent/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8 md:mb-10">Kunjungi Butik Kami</h2>
            
            <div className="space-y-8 md:space-y-10">
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg-accent flex items-center justify-center shrink-0">
                  <MapPin size={18} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg md:text-xl mb-1 md:mb-2">Lokasi</h3>
                  <p className="text-sm md:text-base text-primary-text/70 leading-relaxed">
                    Jl. Bunga Melati No. 123, Jakarta Selatan<br />
                    DKI Jakarta, Indonesia 12345
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg-accent flex items-center justify-center shrink-0">
                  <Clock size={18} className="md:w-5 md:h-5" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-lg md:text-xl mb-1 md:mb-2">Jam Operasional</h3>
                  <div className="text-sm md:text-base text-primary-text/70 space-y-1.5">
                    <p className="flex justify-between gap-4"><span>Senin - Jumat:</span> <span className="font-medium">09:00 - 20:00</span></p>
                    <p className="flex justify-between gap-4"><span>Sabtu:</span> <span className="font-medium">10:00 - 18:00</span></p>
                    <p className="flex justify-between gap-4"><span>Minggu:</span> <span className="font-medium text-red-400">Tutup</span></p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg-accent flex items-center justify-center shrink-0">
                  <Phone size={18} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg md:text-xl mb-1 md:mb-2">Kontak</h3>
                  <p className="text-sm md:text-base text-primary-text/70">+62 812 3456 7890</p>
                  <p className="text-sm md:text-base text-primary-text/70">halo@moonfleurs.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden shadow-lg min-h-[300px] md:min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156743895!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1647856354674!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Moon Fleurs Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
