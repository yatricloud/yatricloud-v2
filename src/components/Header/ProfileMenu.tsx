import React, { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useProfile } from '../../hooks/useProfile';
import { signOut } from '../../lib/auth';

export function ProfileMenu() {
  const { user } = useAuth();
  const { profile } = useProfile();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center">
          <User className="w-5 h-5 text-sky-400" />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#161b22] rounded-lg shadow-lg border border-white/10 py-1">
          <div className="px-4 py-2 border-b border-white/10">
            <p className="text-white font-medium">{profile?.full_name}</p>
            <p className="text-sm text-gray-400 capitalize">{profile?.type || 'User'}</p>
          </div>
          
          <button
            onClick={handleSignOut}
            className="w-full flex items-center px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}