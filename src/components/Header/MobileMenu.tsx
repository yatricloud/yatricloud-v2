import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { navigationItems } from './navigationData';
import { AuthButtons } from '../Auth/AuthButtons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  onAuthClick: (view: 'login' | 'signup') => void;
}

export function MobileMenu({ isOpen, onClose, onNavigate, onAuthClick }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Menu panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#161b22]/95 backdrop-blur-xl shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          <nav className="space-y-2 mb-8">
            {navigationItems.map((section, index) => (
              <div key={index}>
                {section.items?.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    onClick={() => {
                      onNavigate(item.href.replace('/', '') || 'home');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg text-gray-400 
                      hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span>{section.label}</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ))}
              </div>
            ))}
          </nav>

          <div className="flex flex-col space-y-4">
            <AuthButtons 
              onSignIn={() => {
                onAuthClick('login');
                onClose();
              }}
              onSignUp={() => {
                onAuthClick('signup');
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}