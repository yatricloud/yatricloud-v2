import React, { useState } from 'react';
import { CreditCard, User, Mail, Phone, MapPin, Building, Globe, Lock } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Processing payment:', formData);
  };

  return (
    <div className="min-h-screen bg-[#040d21] pt-24 pb-12">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 text-glow">Complete Your Purchase</h1>
          <p className="text-xl text-gray-400">You're just one step away from accessing premium content</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <User className="w-5 h-5 mr-2 text-sky-400" />
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                          text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                          focus:ring-sky-500 transition-all"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                          text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                          focus:ring-sky-500 transition-all"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-sky-400" />
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                          text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                          focus:ring-sky-500 transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                          text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                          focus:ring-sky-500 transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-sky-400" />
                    Billing Address
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                          text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                          focus:ring-sky-500 transition-all"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                            text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                            focus:ring-sky-500 transition-all"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                            text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                            focus:ring-sky-500 transition-all"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-sky-400" />
                    Payment Information
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={19}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                          text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                          focus:ring-sky-500 transition-all"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                            text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                            focus:ring-sky-500 transition-all"
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={4}
                          placeholder="123"
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                            text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                            focus:ring-sky-500 transition-all"
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-gradient text-white px-6 py-3 rounded-lg font-medium 
                    transition-all duration-200 hover:scale-[1.02] flex items-center justify-center"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Complete Purchase
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 sticky top-24">
              <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>
              
              {/* Product */}
              <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-sky-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium">Microsoft Azure Certification</h3>
                  <p className="text-gray-400">Complete Course Bundle</p>
                </div>
                <div className="text-white font-medium">$599.00</div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>$599.00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between text-lg font-semibold text-white">
                <span>Total</span>
                <span>$599.00</span>
              </div>

              {/* Security Badge */}
              <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center text-gray-400 text-sm">
                  <Lock className="w-4 h-4 mr-2 text-sky-400" />
                  Secure checkout powered by Stripe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}