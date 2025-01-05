import React, { useState } from 'react';
import { X } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { ConfirmationModal } from '../common/ConfirmationModal';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultView?: 'login' | 'signup';
}

export function AuthModal({ isOpen, onClose, defaultView = 'login' }: AuthModalProps) {
  const [view, setView] = useState<'login' | 'signup'>(defaultView);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!isOpen) return null;

  const handleSuccess = () => {
    if (view === 'signup') {
      setShowConfirmation(true);
    } else {
      onClose();
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />

          {/* Modal */}
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
              {view === 'login' ? (
                <LoginForm onSwitchView={() => setView('signup')} onSuccess={handleSuccess} />
              ) : (
                <SignupForm onSwitchView={() => setView('login')} onSuccess={handleSuccess} />
              )}
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => {
          setShowConfirmation(false);
          setView('login');
        }}
        title="Account Created Successfully!"
        message="Your account has been created. Please sign in to continue."
      />
    </>
  );
}