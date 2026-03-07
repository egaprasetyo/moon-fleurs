import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Products from '../components/Products';
import About from '../components/About';
import Location from '../components/Location';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <About />
      <Testimonials />
      <Location />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
