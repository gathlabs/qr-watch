'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Payment() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your payment processor
    console.log('Processing payment...', { paymentMethod, formData });
    // Redirect to success page after payment
    router.push('/payment/success');
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 p-8 rounded-2xl shadow-xl"
        >
          <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
            Complete Your Order
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-zinc-800 p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-20 relative">
                    <Image
                      src="/product.png"
                      alt="CryptoWatch"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">CryptoWatch Standard Edition</h3>
                    <p className="text-gold-400">$200.00</p>
                  </div>
                </div>
                <div className="border-t border-zinc-700 pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>$200.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between font-bold mt-4 pt-4 border-t border-zinc-700">
                    <span>Total</span>
                    <span className="text-gold-400">$200.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Shipping Address</label>
                <textarea
                  name="address"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  rows={3}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Payment Method</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 p-3 border border-zinc-700 rounded-lg cursor-pointer hover:border-gold-400 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="crypto"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-gold-400 focus:ring-gold-400"
                    />
                    <span>Cryptocurrency</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 border border-zinc-700 rounded-lg cursor-pointer hover:border-gold-400 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-gold-400 focus:ring-gold-400"
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-300 text-black py-3 px-6 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-200 transition-all duration-300"
              >
                Complete Purchase
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
