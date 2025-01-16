import React, { useEffect, useState } from 'react';
import { Gift, Bell, Users, X } from 'lucide-react';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export function WelcomePopup({ isOpen, onClose, onLogin }: WelcomePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Animated backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative w-full max-w-lg transform overflow-hidden rounded-2xl 
          bg-[#161b22]/90 backdrop-blur-xl shadow-2xl transition-all animate-modal-enter">
          
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-purple-500/20 
            to-pink-500/20 opacity-30 animate-gradient-xy" />
          
          {/* Floating orbs */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-sky-500/30 rounded-full 
            blur-3xl animate-float" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/30 
            rounded-full blur-3xl animate-float-delayed" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white 
              transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="relative p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-sky-500/10 text-sky-400 
                px-4 py-2 rounded-full mb-4 animate-pulse">
                <Gift className="w-4 h-4 mr-2" />
                <span>Special Offer</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 text-glow">
                Unlock Free Benefits
              </h2>
              <p className="text-lg text-gray-300">
                Join our community to access exclusive resources
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { icon: Gift, text: 'FREE Exam Vouchers' },
                { icon: Users, text: 'FREE Training Sessions' },
                { icon: Bell, text: 'Personalized Mentorship' }
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white/5 rounded-lg p-3 
                  border border-white/10 group hover:border-sky-500/50 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 mr-3 
                    group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-white group-hover:text-sky-400 transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={onLogin}
              className="w-full bg-gradient-to-r from-sky-400 to-sky-500 
                hover:from-sky-500 hover:to-sky-600 text-white px-6 py-3 rounded-lg 
                font-medium transition-all duration-200 hover:scale-[1.02] 
                flex items-center justify-center group"
            >
              Login Now
              <svg 
                className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <p className="text-center text-gray-400 mt-4 text-sm">
              Don't have an account?{' '}
              <button 
                onClick={onLogin}
                className="text-sky-400 hover:text-sky-300 font-medium"
              >
                Sign up for free
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}