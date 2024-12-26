import { motion } from 'framer-motion'
import { FaHeadset, FaBook, FaDiscord, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

const supportChannels = [
  {
    icon: FaHeadset,
    title: '24/7 Customer Support',
    description: 'Our dedicated team is always ready to assist you with any questions or concerns.',
    link: '/contact',
    linkText: 'Contact Support'
  },
  {
    icon: FaBook,
    title: 'Knowledge Base',
    description: 'Explore our comprehensive guides and tutorials for CryptoWatch.',
    link: '#',
    linkText: 'View Documentation'
  },
  {
    icon: MdEmail,
    title: 'Email Support',
    description: 'Get personalized assistance through our premium email support.',
    link: 'mailto:support@cryptowatch.com',
    linkText: 'Send Email'
  }
]

const community = [
  {
    icon: FaDiscord,
    title: 'Discord Community',
    description: 'Join our vibrant community of CryptoWatch enthusiasts.',
    link: '#',
    linkText: 'Join Discord'
  },
  {
    icon: FaTwitter,
    title: 'Twitter Updates',
    description: 'Follow us for the latest news and updates about CryptoWatch.',
    link: '#',
    linkText: 'Follow @CryptoWatch'
  }
]

export default function Support() {
  return (
    <section id="support" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair">
            Support & Community
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-montserrat">
            We're here to help you make the most of your CryptoWatch experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20 hover:border-gold-400/40 transition-colors"
            >
              <div className="flex items-center mb-4">
                <channel.icon className="w-8 h-8 text-gold-400 mr-3" />
                <h3 className="text-xl font-bold text-white font-montserrat">{channel.title}</h3>
              </div>
              <p className="text-gray-400 mb-4 font-montserrat">{channel.description}</p>
              <Link
                href={channel.link}
                className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors font-montserrat"
              >
                {channel.linkText}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {community.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20 hover:border-gold-400/40 transition-colors"
            >
              <div className="flex items-center mb-4">
                <channel.icon className="w-8 h-8 text-gold-400 mr-3" />
                <h3 className="text-xl font-bold text-white font-montserrat">{channel.title}</h3>
              </div>
              <p className="text-gray-400 mb-4 font-montserrat">{channel.description}</p>
              <Link
                href={channel.link}
                className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors font-montserrat"
              >
                {channel.linkText}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
