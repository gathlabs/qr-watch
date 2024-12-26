import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-montserrat">
            Get in touch with our dedicated support team
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20">
              <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="w-6 h-6 text-gold-400 mr-4" />
                  <div>
                    <p className="text-white font-montserrat">Phone</p>
                    <p className="text-gray-400 font-montserrat">+62 (021) CRYPTO-WATCH</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="w-6 h-6 text-gold-400 mr-4" />
                  <div>
                    <p className="text-white font-montserrat">Email</p>
                    <p className="text-gray-400 font-montserrat">support@cryptowatch.id</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-6 h-6 text-gold-400 mr-4" />
                  <div>
                    <p className="text-white font-montserrat">Address</p>
                    <p className="text-gray-400 font-montserrat">
                      CryptoWatch Tower<br />
                      Jl. Margonda Raya No. 88<br />
                      Depok, Jawa Barat 16424<br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20">
              <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Office Hours</h2>
              <div className="space-y-2">
                <p className="text-gray-400 font-montserrat">Monday - Friday: 24/7</p>
                <p className="text-gray-400 font-montserrat">Saturday - Sunday: 9:00 AM - 6:00 PM WIB</p>
              </div>
            </div>
          </div>

          <form className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gold-400/20">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-montserrat">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black border border-gold-400/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400 font-montserrat"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-montserrat">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black border border-gold-400/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400 font-montserrat"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-2 font-montserrat">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-black border border-gold-400/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400 font-montserrat"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-montserrat">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black border border-gold-400/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400 font-montserrat"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-300 text-black px-8 py-3 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-200 transition-all duration-300 font-montserrat"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
