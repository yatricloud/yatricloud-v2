import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthButtonsProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

export function AuthButtons({ onSignIn, onSignUp }: AuthButtonsProps) {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={onSignIn}
        className="flex items-center text-white/70 hover:text-white transition-colors"
      >
        <LogIn className="w-4 h-4 mr-2" />
        Sign in
      </button>
      <button
        onClick={onSignUp}
        className="flex items-center bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 
          hover:to-sky-600 text-white px-4 py-1.5 rounded-md transition-all duration-200 
          hover:shadow-lg hover:shadow-sky-500/20 hover:scale-[1.02]"
      >
        <UserPlus className="w-4 h-4 mr-2" />
        Sign up
      </button>
    </div>
  );
}