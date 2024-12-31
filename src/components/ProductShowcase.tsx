import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            <Image
              src="/Showcase.png"
              alt="Luxury Smartwatch"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
              Exquisite Design Meets Innovation
            </h2>
            <p className="text-gray-400 text-lg font-montserrat">
              Crafted with precision and elegance, our smartwatch combines traditional luxury watchmaking with cutting-edge blockchain technology.
            </p>
            <ul className="space-y-4 text-gray-300 font-montserrat">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                Swiss-made precision movement
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                Sapphire crystal display
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                Built-in hardware wallet
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                Water-resistant to 100m
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
