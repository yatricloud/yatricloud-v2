import React from 'react';
import { MessageSquare } from 'lucide-react';

export function WhatsAppChannel() {
  return (
    <div
      className="relative p-6 rounded-xl backdrop-blur-sm border border-white/10 
      hover:border-green-500/50 transition-all duration-300"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-green-500/5 
        rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Follow Our WhatsApp Channel
          </h3>
          <p className="text-gray-400">
            Get instant updates and exclusive content directly on WhatsApp
          </p>
        </div>
        <a
          href="https://whatsapp.com/channel/0029VakdAHIFHWq60yHA1Q0s"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500/20 text-green-400 hover:bg-green-500/30 
            px-6 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ml-4"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Follow to Channel
        </a>
      </div>
    </div>
  );
}
