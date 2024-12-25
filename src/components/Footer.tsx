import Link from 'next/link'
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
              LUXWATCH
            </Link>
            <p className="text-gray-400 font-montserrat">
              Redefining luxury timepieces for the modern era
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/specs" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Specifications
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-gold-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>1234 Luxury Lane</li>
              <li>Suite 500</li>
              <li>New York, NY 10001</li>
              <li>contact@luxwatch.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LUXWATCH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
