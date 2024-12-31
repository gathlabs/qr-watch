"use client"
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import {WatchIcon} from 'lucide-react'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  const mainLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Specifications', href: '/#specifications' },
    // { name: 'Gallery', href: '/#gallery' },
    { name: 'FAQ', href: '/#faq' }
  ]

  const dropdownLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Warranty', href: '/warranty' },
    { name: 'Returns', href: '/returns' }
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== '/') {
      return // Let the Link component handle navigation to home page
    }
    
    e.preventDefault()
    const sectionId = href.split('#')[1]
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gold-400/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair flex items-center">
            <WatchIcon className="w-6 h-6 mr-2 text-gold-400" />
            CryptoWatch
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-300 hover:text-gold-400 transition-colors font-montserrat"
              >
                {link.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-gray-300 hover:text-gold-400 transition-colors font-montserrat">
                Support
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-black border border-gold-400/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-gray-900/50 transition-colors font-montserrat"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-gold-400 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-300 hover:text-gold-400 transition-colors font-montserrat"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gold-400/20">
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-300 hover:text-gold-400 transition-colors font-montserrat"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
