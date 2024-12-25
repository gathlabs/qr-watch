import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury smartwatch background"
          fill
          className="object-cover opacity-60"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair"
        >
          The Future of Luxury Timepieces
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-montserrat"
        >
          Where traditional craftsmanship meets cutting-edge technology
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
          <button className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-400 hover:text-black transition-all duration-300 font-montserrat">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-gold-400 to-transparent rounded-full mx-auto"></div>
        </div>
      </motion.div>
    </section>
  )
}