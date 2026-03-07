import React from 'react';
import { motion } from 'motion/react';
import { Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-main">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Get in Touch</h2>
              <p className="text-lg text-primary-text/70 mb-10 leading-relaxed">
                Have a special request or planning an event? We'd love to hear from you. 
                Our team is here to help you create the perfect floral experience.
              </p>
              
              <div className="space-y-6">
                <p className="text-xl font-serif">+33 (0) 1 23 45 67 89</p>
                <p className="text-xl font-serif">hello@moonfleurs.com</p>
                
                <div className="pt-6">
                  <p className="text-xs uppercase tracking-[0.3em] mb-4 font-bold opacity-40">Follow Us</p>
                  <div className="flex gap-6">
                    <a href="#" className="hover:opacity-60 transition-opacity"><Instagram size={20} /></a>
                    <a href="#" className="hover:opacity-60 transition-opacity"><Facebook size={20} /></a>
                    <a href="#" className="hover:opacity-60 transition-opacity"><Twitter size={20} /></a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-accent/30 p-8 md:p-12 rounded-[2rem]"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold opacity-60">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name"
                      className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-text/20 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold opacity-60">Email</label>
                    <input 
                      type="email" 
                      placeholder="Your email"
                      className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-text/20 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your request..."
                    className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-text/20 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <button className="w-full btn-primary flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
