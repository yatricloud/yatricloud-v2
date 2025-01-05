import React from 'react';
import { NavigationMenu } from './NavigationMenu';
import { navigationItems } from './navigationData';
import { useAuth } from '../../contexts/AuthContext';
import { ProfileMenu } from './ProfileMenu';
import { Logo } from '../common/Logo';

interface HeaderProps {
  onAuthClick: (view: 'login' | 'signup') => void;
  onNavigate: (page: 'home' | 'blog' | 'success-stories' | 'courses' | 'certifications' | 'contact' | 'products' | 'community') => void;
}

export function Header({ onAuthClick, onNavigate }: HeaderProps) {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 w-full bg-[rgba(22,27,34,0.8)] backdrop-blur-md z-50 border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Logo />
          </button>

          <div className="flex-1 flex justify-center">
            <NavigationMenu items={navigationItems} onNavigate={onNavigate} />
          </div>

          <div>
            {user ? (
              <ProfileMenu />
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onAuthClick('login')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Sign in
                </button>
                <button
                  onClick={() => onAuthClick('signup')}
                  className="bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 
                    text-white px-4 py-1.5 rounded-md transition-all duration-200 
                    hover:shadow-lg hover:shadow-sky-500/20 hover:scale-[1.02]"
                >
                  Sign up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}