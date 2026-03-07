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
            className="bg-white p-10 md:p-16 rounded-[2rem] shadow-sm flex flex-col justify-center"
          >
            <h2 className="text-4xl font-serif mb-10">Visit Our Boutique</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-bg-accent flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Location</h3>
                  <p className="text-primary-text/70 leading-relaxed">
                    123 Floral Avenue, Moon District<br />
                    Paris, France 75001
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-bg-accent flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Store Hours</h3>
                  <div className="text-primary-text/70 space-y-1">
                    <p className="flex justify-between gap-8"><span>Mon - Fri:</span> <span>09:00 AM - 08:00 PM</span></p>
                    <p className="flex justify-between gap-8"><span>Saturday:</span> <span>10:00 AM - 06:00 PM</span></p>
                    <p className="flex justify-between gap-8"><span>Sunday:</span> <span>Closed</span></p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-bg-accent flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Contact</h3>
                  <p className="text-primary-text/70">+33 (0) 1 23 45 67 89</p>
                  <p className="text-primary-text/70">hello@moonfleurs.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] overflow-hidden shadow-lg min-h-[400px]"
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
