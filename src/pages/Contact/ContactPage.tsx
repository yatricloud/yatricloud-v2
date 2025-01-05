import React from 'react';
import { MessageSquare } from 'lucide-react';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { OfficeHours } from './components/OfficeHours';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
            bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 text-glow">Contact Us</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ContactInfo />
              <OfficeHours />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}