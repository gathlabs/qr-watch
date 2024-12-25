import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
              LUXWATCH
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-white hover:text-gold-400 transition-colors">
              Features
            </Link>
            <Link href="/specs" className="text-white hover:text-gold-400 transition-colors">
              Specs
            </Link>
            <Link href="/gallery" className="text-white hover:text-gold-400 transition-colors">
              Gallery
            </Link>
            <Link href="/faq" className="text-white hover:text-gold-400 transition-colors">
              FAQ
            </Link>
            <button className="bg-gradient-to-r from-gold-500 to-gold-300 text-black px-6 py-2 rounded-full font-semibold hover:from-gold-400 hover:to-gold-200 transition-all duration-300">
              Pre-order Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/features" className="block px-3 py-2 text-white hover:text-gold-400">
                Features
              </Link>
              <Link href="/specs" className="block px-3 py-2 text-white hover:text-gold-400">
                Specs
              </Link>
              <Link href="/gallery" className="block px-3 py-2 text-white hover:text-gold-400">
                Gallery
              </Link>
              <Link href="/faq" className="block px-3 py-2 text-white hover:text-gold-400">
                FAQ
              </Link>
              <button className="w-full text-center bg-gradient-to-r from-gold-500 to-gold-300 text-black px-6 py-2 rounded-full font-semibold hover:from-gold-400 hover:to-gold-200 transition-all duration-300">
                Pre-order Now
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
