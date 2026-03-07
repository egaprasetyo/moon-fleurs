import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Laurent',
    role: 'Perencana Acara',
    content: 'Perhatian terhadap detail di Moon Fleurs tidak tertandingi. Saya menggunakan jasa mereka untuk semua acara kelas atas saya dan mereka tidak pernah gagal memukau dengan kreativitas dan kesegarannya.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Marc Dubois',
    role: 'Pelanggan Tetap',
    content: 'Saya memesan buket untuk ulang tahun pernikahan saya dan itu adalah rangkaian terindah yang pernah saya lihat. Pengirimannya cepat dan bunganya bertahan selama dua minggu!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Elena Rossi',
    role: 'Desainer Interior',
    content: 'Moon Fleurs membawa sentuhan keanggunan puitis ke setiap ruangan. Layanan berlangganan mingguan mereka telah benar-benar mengubah suasana studio saya.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-main">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Kata Mereka</h2>
          <p className="text-primary-text/60 max-w-lg mx-auto italic">
            "Apa yang dikatakan klien kami tentang pengalaman mereka bersama Moon Fleurs"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-bg-accent/20 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-primary-text/10" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary-text text-primary-text" />
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-8 text-primary-text/80 italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif font-bold">{t.name}</h4>
                  <p className="text-xs uppercase tracking-widest opacity-50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
