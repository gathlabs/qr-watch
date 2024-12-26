import { motion } from 'framer-motion'
import { FaWallet, FaShieldAlt, FaMobileAlt, FaChartLine } from 'react-icons/fa'
import { RiNftFill } from 'react-icons/ri'
import { IoWaterOutline } from 'react-icons/io5'

const features = [
  {
    icon: FaWallet,
    title: 'Integrated QR Wallet',
    description: 'Securely store and manage your crypto assets with our built-in QR-based hardware wallet.'
  },
  {
    icon: FaShieldAlt,
    title: 'Advanced Security',
    description: 'Military-grade encryption and biometric authentication protect your digital assets.'
  },
  {
    icon: FaMobileAlt,
    title: 'Smart Connectivity',
    description: 'Seamlessly connect with your smartphone for real-time notifications and asset management.'
  },
  {
    icon: RiNftFill,
    title: 'NFT Display',
    description: 'Showcase your favorite NFTs on a high-resolution OLED display.'
  },
  {
    icon: IoWaterOutline,
    title: 'Water Resistant',
    description: 'Enjoy peace of mind with 100m water resistance for everyday wear.'
  },
  {
    icon: FaChartLine,
    title: 'Market Tracking',
    description: 'Stay updated with real-time cryptocurrency market data and alerts.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-montserrat">
            Experience the perfect blend of luxury timepiece and cutting-edge crypto technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20 hover:border-gold-400/40 transition-colors"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="w-8 h-8 text-gold-400 mr-3" />
                <h3 className="text-xl font-bold text-white font-montserrat">{feature.title}</h3>
              </div>
              <p className="text-gray-400 font-montserrat">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
