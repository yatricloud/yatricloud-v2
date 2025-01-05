import React from 'react';
import { X } from 'lucide-react';
import { CreateProfileForm } from './CreateProfileForm';

interface CreateProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateProfileModal({ isOpen, onClose }: CreateProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        <div className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-[#161b22] border border-[#30363d] shadow-xl transition-all animate-modal-enter">
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            <CreateProfileForm onSuccess={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}