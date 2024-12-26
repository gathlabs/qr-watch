import { FaHistory, FaUsers, FaLightbulb, FaBullseye } from 'react-icons/fa'
import Image from 'next/image'

const values = [
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'Pushing boundaries in luxury wearable technology and cryptocurrency integration.'
  },
  {
    icon: FaUsers,
    title: 'Customer Focus',
    description: 'Dedicated to providing exceptional service and user experience to our valued customers.'
  },
  {
    icon: FaBullseye,
    title: 'Excellence',
    description: 'Committed to the highest standards in craftsmanship and technological advancement.'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="md:order-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair">
              About CryptoWatch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-montserrat">
              Founded in Depok, Indonesia, CryptoWatch is pioneering the future of luxury smartwatches
              with integrated cryptocurrency technology. We combine traditional craftsmanship with
              cutting-edge innovation.
            </p>
          </div>
          <div className="md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About CryptoWatch"
              width={800}
              height={533}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gold-400/20">
            <h2 className="text-2xl font-bold text-white mb-4 font-playfair">Our Vision</h2>
            <p className="text-gray-400 font-montserrat">
              To be the global leader in luxury crypto-enabled smartwatches, setting new standards in
              both technology and elegance.
            </p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gold-400/20">
            <h2 className="text-2xl font-bold text-white mb-4 font-playfair">Our Mission</h2>
            <p className="text-gray-400 font-montserrat">
              To empower individuals with seamless access to their digital assets through beautifully
              crafted timepieces that combine luxury with cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center font-playfair">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20"
              >
                <value.icon className="w-12 h-12 text-gold-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 font-montserrat">{value.title}</h3>
                <p className="text-gray-400 font-montserrat">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
