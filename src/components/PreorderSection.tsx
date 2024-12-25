import { motion } from 'framer-motion'

export default function PreorderSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
            Be Among the First
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-montserrat">
            Pre-order now to secure your limited edition luxury smartwatch. Only 1000 pieces will be available in the first release.
          </p>
          <div className="space-y-4">
            <p className="text-3xl font-bold text-gold-400">
              Starting from 5 ETH
            </p>
            <button className="bg-gradient-to-r from-gold-500 to-gold-300 text-black px-12 py-4 rounded-full text-lg font-semibold hover:from-gold-400 hover:to-gold-200 transition-all duration-300">
              Pre-order Now
            </button>
          </div>
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-gold-400 mb-2">1000</p>
              <p className="text-gray-400 font-montserrat">Limited Pieces</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold-400 mb-2">5 Years</p>
              <p className="text-gray-400 font-montserrat">Warranty</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold-400 mb-2">24/7</p>
              <p className="text-gray-400 font-montserrat">Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
