import { motion } from 'framer-motion'
import { Disclosure } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    question: 'What makes CryptoWatch unique?',
    answer: 'CryptoWatch combines luxury watchmaking with advanced crypto technology, featuring a built-in QR-based hardware wallet, making it the first truly secure wearable crypto storage solution.'
  },
  {
    question: 'How secure is the crypto wallet feature?',
    answer: 'Our wallet employs military-grade encryption, secure element chip, and biometric authentication. All private keys are stored offline in the secure element, making it virtually impossible to hack.'
  },
  {
    question: 'What cryptocurrencies are supported?',
    answer: 'CryptoWatch supports major cryptocurrencies including Bitcoin, Ethereum, and other popular tokens. Regular updates will add support for more currencies.'
  },
  {
    question: 'How long does the battery last?',
    answer: 'With normal use, CryptoWatch lasts up to 5 days on a single charge. Power reserve mode can extend this to up to 2 weeks while maintaining basic timekeeping functions.'
  },
  {
    question: 'Is CryptoWatch water resistant?',
    answer: 'Yes, CryptoWatch is water resistant up to 100 meters (10 ATM), making it suitable for swimming and shallow diving.'
  },
  {
    question: 'What comes in the box?',
    answer: 'Each CryptoWatch comes with a premium leather strap, magnetic charging dock, USB-C cable, quick start guide, and a luxury presentation box.'
  },
  {
    question: 'How do I transfer crypto using CryptoWatch?',
    answer: 'CryptoWatch uses QR code technology for secure transactions. Generate a QR code on the watch display, scan it with your phone, and confirm the transaction with biometric authentication.'
  },
  {
    question: 'What is the warranty period?',
    answer: 'CryptoWatch comes with a 2-year international warranty covering manufacturing defects. Extended warranty options are available.'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-montserrat">
            Everything you need to know about CryptoWatch
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Disclosure>
                {({ open }) => (
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gold-400/20">
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left">
                      <span className="text-white font-montserrat font-semibold">
                        {faq.question}
                      </span>
                      <FaChevronDown
                        className={`w-5 h-5 text-gold-400 transform transition-transform ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pb-4 text-gray-400 font-montserrat">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
