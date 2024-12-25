import { FaWallet, FaQrcode, FaShieldAlt } from 'react-icons/fa'

const features = [
  {
    icon: FaWallet,
    title: "Built-in Crypto Wallet",
    description: "Seamlessly manage your digital assets with our secure integrated wallet"
  },
  {
    icon: FaQrcode,
    title: "QR Authentication",
    description: "Quick and secure authentication using advanced QR technology"
  },
  {
    icon: FaShieldAlt,
    title: "Military-grade Security",
    description: "Your digital assets protected by state-of-the-art encryption"
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
          Revolutionary Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-50 hover:bg-opacity-70 transition-all duration-300">
              <feature.icon className="w-12 h-12 mx-auto mb-6 text-gold-400" />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 font-montserrat">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
