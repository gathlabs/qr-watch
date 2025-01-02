'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <div className="mb-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
          Payment Successful!
        </h1>
        
        <p className="text-gray-300 mb-8">
          Thank you for your purchase. We have received your order and will process it shortly.
          You will receive a confirmation email with your order details.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-gradient-to-r from-gold-500 to-gold-300 text-black py-3 px-6 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-200 transition-all duration-300"
          >
            Return to Home
          </Link>
          
          {/* <Link
            href="/orders"
            className="block w-full border border-gold-400 text-gold-400 py-3 px-6 rounded-lg font-semibold hover:bg-gold-400/10 transition-all duration-300"
          >
            View Order Status
          </Link> */}
        </div>
      </motion.div>
    </div>
  );
}
