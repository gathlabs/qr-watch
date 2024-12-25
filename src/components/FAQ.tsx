import { Disclosure, Transition } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: "What makes this smartwatch unique?",
    answer: "Our smartwatch combines traditional luxury watchmaking with advanced technology, featuring premium materials, Swiss-made precision movement, and innovative features like secure crypto storage and QR authentication."
  },
  {
    question: "What is the battery life?",
    answer: "The smartwatch offers up to 7 days of battery life with normal usage. This can vary based on feature usage and settings."
  },
  {
    question: "Is it water-resistant?",
    answer: "Yes, our smartwatch is water-resistant up to 100 meters (10 ATM), making it suitable for swimming and water sports."
  },
  {
    question: "What materials are used?",
    answer: "We use premium materials including surgical-grade stainless steel, sapphire crystal display, and genuine leather or premium metal straps."
  },
  {
    question: "What's included in the warranty?",
    answer: "Our watches come with a 5-year international warranty covering manufacturing defects and mechanical issues."
  },
  {
    question: "How does the pre-order process work?",
    answer: "Pre-orders can be secured with a deposit, with the balance due before shipping. Early pre-orders receive exclusive benefits and priority delivery."
  }
]

export default function FAQ() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-montserrat">
            Find answers to common questions about our luxury smartwatch
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
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                      <span className="text-white font-semibold">{faq.question}</span>
                      <FaChevronDown
                        className={`w-5 h-5 text-gold-400 transform transition-transform duration-200 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 py-4 text-gray-400 bg-gray-900/50 rounded-lg mt-2">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
