'use client';

import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import ProductShowcase from '../components/ProductShowcase'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <Gallery />
      <FAQ />
      <Footer />
    </main>
  )
}
