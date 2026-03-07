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
  },
  {
    id: 4,
    name: 'Aria Wijaya',
    role: 'Kolektor Bunga',
    content: 'Kualitas bunga di sini benar-benar berbeda. Wanginya sangat alami dan tahan lama. Sangat direkomendasikan untuk hadiah spesial.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Budi Santoso',
    role: 'Pengusaha',
    content: 'Pelayanan yang sangat profesional. Saya memesan untuk dekorasi kantor dan hasilnya sangat memuaskan. Kolega saya banyak yang memuji.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-main overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Kata Mereka</h2>
          <p className="text-primary-text/60 max-w-lg mx-auto italic">
            "Apa yang dikatakan klien kami tentang pengalaman mereka bersama Moon Fleurs"
          </p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-8 py-4"
          animate={{ x: [0, -1920] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            }
          }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="inline-block w-[350px] md:w-[450px] bg-bg-accent/20 p-8 rounded-3xl relative whitespace-normal shrink-0"
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
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
