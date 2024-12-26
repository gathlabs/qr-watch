import { FaUndo, FaBox, FaCreditCard, FaTruck } from 'react-icons/fa'

const returnPolicy = [
  {
    icon: FaUndo,
    title: '30-Day Return Window',
    description: 'Return your unused CryptoWatch within 30 days of delivery for a full refund.'
  },
  {
    icon: FaBox,
    title: 'Original Condition',
    description: 'Item must be unworn, undamaged, and in original packaging with all accessories.'
  },
  {
    icon: FaCreditCard,
    title: 'Full Refund',
    description: 'Receive a complete refund to your original payment method within 5-7 business days.'
  },
  {
    icon: FaTruck,
    title: 'Free Returns',
    description: 'We cover return shipping costs for all domestic returns.'
  }
]

const returnSteps = [
  {
    title: 'Initiate Return',
    content: 'Contact our customer service team to initiate your return. You\'ll receive a return authorization number and shipping label.'
  },
  {
    title: 'Package Item',
    content: 'Carefully pack your CryptoWatch in its original box with all accessories and documentation. Include the return authorization form.'
  },
  {
    title: 'Ship Return',
    content: 'Use the provided shipping label to send your return. We recommend taking photos before shipping for your records.'
  },
  {
    title: 'Refund Processing',
    content: 'Once we receive and inspect your return, we\'ll process your refund within 48 hours.'
  }
]

const returnGuidelines = [
  'All returns must be initiated within 30 days of delivery',
  'Product must be in original, unused condition',
  'All original packaging, accessories, and documentation must be included',
  'Return shipping is free for domestic orders',
  'International returns may be subject to shipping fees',
  'Refunds will be issued to the original payment method',
  'Custom or modified orders are not eligible for return'
]

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair">
            Returns & Refunds
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-montserrat">
            Simple and hassle-free returns for your peace of mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {returnPolicy.map((policy, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20"
            >
              <policy.icon className="w-12 h-12 text-gold-400 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2 font-montserrat">{policy.title}</h2>
              <p className="text-gray-400 font-montserrat">{policy.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gold-400/20 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 font-playfair">Return Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {returnSteps.map((step, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center text-black font-bold font-montserrat">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold-400 mb-2 font-montserrat">{step.title}</h3>
                  <p className="text-gray-400 font-montserrat">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gold-400/20">
          <h2 className="text-3xl font-bold text-white mb-8 font-playfair">Return Guidelines</h2>
          <ul className="space-y-4">
            {returnGuidelines.map((guideline, index) => (
              <li key={index} className="flex items-center text-gray-400 font-montserrat">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                {guideline}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4 font-montserrat">
            Need to initiate a return or have questions?
          </p>
          <a
            href="mailto:returns@cryptowatch.com"
            className="text-gold-400 hover:text-gold-300 transition-colors font-montserrat"
          >
            returns@cryptowatch.com
          </a>
        </div>
      </div>
    </main>
  )
}
