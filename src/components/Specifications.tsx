import { motion } from 'framer-motion'

const specifications = {
  display: {
    title: 'Display',
    specs: [
      '1.6" OLED Display',
      '460 x 460 resolution',
      'Always-on display',
      'Sapphire crystal glass'
    ]
  },
  hardware: {
    title: 'Hardware Wallet',
    specs: [
      'Secure element chip',
      'QR code generator',
      'Offline transaction signing',
      'Multi-currency support'
    ]
  },
  connectivity: {
    title: 'Connectivity',
    specs: [
      'Bluetooth 5.0',
      'NFC',
      'Wi-Fi 6',
      'GPS'
    ]
  },
  sensors: {
    title: 'Sensors',
    specs: [
      'Heart rate monitor',
      'ECG',
      'Blood oxygen',
      'Accelerometer'
    ]
  },
  battery: {
    title: 'Battery',
    specs: [
      'Up to 5 days battery life',
      'Wireless charging',
      'Fast charging support',
      'Power reserve mode'
    ]
  },
  build: {
    title: 'Build',
    specs: [
      'Titanium case',
      '100m water resistance',
      'Ceramic back',
      'Premium leather strap'
    ]
  }
}

export default function Specifications() {
  return (
    <section id="specifications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-montserrat">
            Cutting-edge technology meets uncompromising quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(specifications).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.specs.map((spec, i) => (
                  <li key={i} className="flex items-center text-gray-400 font-montserrat">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
