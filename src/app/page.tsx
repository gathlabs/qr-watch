'use client';

import Hero from '../components/Hero'
import Features from '../components/Features'
import ProductShowcase from '../components/ProductShowcase'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import Specifications from '../components/Specifications';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Specifications />
      <ProductShowcase />
      <Gallery />
      <FAQ />
    </main>
  )
}
