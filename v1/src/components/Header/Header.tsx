import React, { useState } from 'react';
import { NavigationMenu } from './NavigationMenu';
import { navigationItems } from './navigationData';
import { useAuth } from '../../contexts/AuthContext';
import { ProfileMenu } from './ProfileMenu';
import { Logo } from '../common/Logo';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  onAuthClick: (view: 'login' | 'signup') => void;
  onNavigate: (page: 'home' | 'blog' | 'success-stories' | 'courses' | 'certifications' | 'contact' | 'products' | 'community') => void;
}

export function Header({ onAuthClick, onNavigate }: HeaderProps) {
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Background with blur and gradient */}
      <div className="absolute inset-0 bg-[#161b22]/80 backdrop-blur-md border-b border-[#30363d]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Logo />
          </button>

          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu 
              items={navigationItems} 
              onNavigate={onNavigate}
              onAuthClick={onAuthClick}
            />
          </div>

          <div className="flex items-center space-x-4">
            {user && <ProfileMenu />}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={onNavigate}
        onAuthClick={onAuthClick}
      />
    </header>
  );
}