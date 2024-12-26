import { FaShippingFast, FaGlobeAmericas, FaBoxOpen } from 'react-icons/fa'

const shippingMethods = [
  {
    icon: FaShippingFast,
    title: 'Express Delivery',
    description: '2-3 Business Days',
    price: 'Free for orders over $1000',
    details: 'Fully insured and tracked shipping with signature confirmation'
  },
  {
    icon: FaGlobeAmericas,
    title: 'International Shipping',
    description: '5-7 Business Days',
    price: 'Calculated at checkout',
    details: 'Available worldwide with customs handling assistance'
  },
  {
    icon: FaBoxOpen,
    title: 'Luxury Packaging',
    description: 'Premium Experience',
    price: 'Included',
    details: 'Each CryptoWatch comes in a handcrafted luxury box with authentication certificate'
  }
]

const shippingPolicies = [
  {
    title: 'Order Processing',
    content: 'All orders are processed within 24 hours during business days. You will receive a confirmation email with tracking information once your order ships.'
  },
  {
    title: 'Shipping Insurance',
    content: 'Every CryptoWatch shipment is fully insured against loss or damage. We use premium carriers to ensure the safe delivery of your luxury timepiece.'
  },
  {
    title: 'International Orders',
    content: 'International customers may be subject to import duties and taxes. Our team will assist with customs documentation to ensure smooth delivery.'
  },
  {
    title: 'Delivery Times',
    content: 'Delivery times may vary based on location and customs processing. Our customer service team will provide regular updates on your shipment status.'
  }
]

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair">
            Shipping Information
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-montserrat">
            Premium delivery service worthy of your luxury timepiece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {shippingMethods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20"
            >
              <method.icon className="w-12 h-12 text-gold-400 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2 font-montserrat">{method.title}</h2>
              <p className="text-gold-400 font-semibold mb-2 font-montserrat">{method.description}</p>
              <p className="text-gray-400 mb-4 font-montserrat">{method.price}</p>
              <p className="text-gray-500 font-montserrat">{method.details}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gold-400/20">
          <h2 className="text-3xl font-bold text-white mb-8 font-playfair">Shipping Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shippingPolicies.map((policy, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold text-gold-400 font-montserrat">{policy.title}</h3>
                <p className="text-gray-400 font-montserrat">{policy.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 font-montserrat">
            Have questions about shipping? Contact our customer service team:
          </p>
          <a
            href="mailto:shipping@cryptowatch.com"
            className="text-gold-400 hover:text-gold-300 transition-colors font-montserrat"
          >
            shipping@cryptowatch.com
          </a>
        </div>
      </div>
    </main>
  )
}
