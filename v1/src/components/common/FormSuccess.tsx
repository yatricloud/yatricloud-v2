import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FormSuccessProps {
  message: string;
  onClose: () => void;
}

export function FormSuccess({ message, onClose }: FormSuccessProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-[#161b22] rounded-lg p-8 max-w-md w-full border border-[#30363d] animate-modal-enter">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Success!</h3>
          <p className="text-gray-400 mb-6">{message}</p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}