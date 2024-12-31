import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4">
      <div className="container mx-auto text-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 max-w-3xl mx-auto pt-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair"
          >
            CryptoWatch
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-montserrat"
          >
            The World's First Luxury Smartwatch with Integrated QR Wallet Technology
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-x-4"
          >
            <button className="bg-gradient-to-r from-gold-500 to-gold-300 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-gold-400 hover:to-gold-200 transition-all duration-300 font-montserrat">
              Pre-order Now
            </button>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-2xl mx-auto"
        >
          <Image
            src="/hero.png"
            alt="CryptoWatch - Smart Luxury"
            width={800}
            height={600}
            className="object-contain w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}