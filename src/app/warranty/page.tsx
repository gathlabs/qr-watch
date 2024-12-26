import { FaShieldAlt, FaClock, FaTools, FaCheckCircle } from 'react-icons/fa'

const warrantyFeatures = [
  {
    icon: FaShieldAlt,
    title: '2-Year Global Warranty',
    description: 'Comprehensive coverage against manufacturing defects and hardware issues worldwide.'
  },
  {
    icon: FaClock,
    title: 'Extended Coverage Options',
    description: 'Optional extension of warranty coverage up to 5 years for complete peace of mind.'
  },
  {
    icon: FaTools,
    title: 'Expert Service',
    description: 'Repairs and maintenance performed by certified technicians using genuine parts.'
  },
  {
    icon: FaCheckCircle,
    title: 'Quick Turnaround',
    description: 'Priority service with minimal downtime for warranty claims and repairs.'
  }
]

const coverageDetails = [
  {
    title: 'What\'s Covered',
    items: [
      'Manufacturing defects',
      'Hardware malfunctions',
      'Display issues',
      'Battery performance',
      'Water resistance failures',
      'Crypto wallet hardware',
      'Software issues'
    ]
  },
  {
    title: 'What\'s Not Covered',
    items: [
      'Accidental damage',
      'Normal wear and tear',
      'Unauthorized modifications',
      'Water damage beyond rating',
      'Lost or stolen devices',
      'Cosmetic damage',
      'Third-party software issues'
    ]
  }
]

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair">
            Warranty Information
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-montserrat">
            Your CryptoWatch is protected by our comprehensive warranty program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {warrantyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20"
            >
              <feature.icon className="w-12 h-12 text-gold-400 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2 font-montserrat">{feature.title}</h2>
              <p className="text-gray-400 font-montserrat">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {coverageDetails.map((section, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gold-400/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-400 font-montserrat">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gold-400/20">
          <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Warranty Process</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gold-400 mb-2 font-montserrat">1. Register Your Device</h3>
              <p className="text-gray-400 font-montserrat">
                Activate your warranty by registering your CryptoWatch within 30 days of purchase.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gold-400 mb-2 font-montserrat">2. Submit a Claim</h3>
              <p className="text-gray-400 font-montserrat">
                Contact our support team to initiate a warranty claim. We'll guide you through the process.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gold-400 mb-2 font-montserrat">3. Service & Repair</h3>
              <p className="text-gray-400 font-montserrat">
                Our certified technicians will diagnose and repair your device using genuine parts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gold-400 mb-2 font-montserrat">4. Return Shipping</h3>
              <p className="text-gray-400 font-montserrat">
                Your repaired CryptoWatch will be carefully tested and shipped back to you via insured delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4 font-montserrat">
            Need to submit a warranty claim or have questions?
          </p>
          <a
            href="mailto:warranty@cryptowatch.com"
            className="text-gold-400 hover:text-gold-300 transition-colors font-montserrat"
          >
            warranty@cryptowatch.com
          </a>
        </div>
      </div>
    </main>
  )
}
