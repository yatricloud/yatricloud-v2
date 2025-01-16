import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../../constants/contact';

export function ContactInfo() {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
      <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="w-6 h-6 text-sky-400 mt-1 mr-4" />
          <div>
            <h3 className="text-white font-medium mb-1">Email</h3>
            <p className="text-gray-400">{CONTACT_INFO.email}</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="w-6 h-6 text-sky-400 mt-1 mr-4" />
          <div>
            <h3 className="text-white font-medium mb-1">Phone</h3>
            <p className="text-gray-400">{CONTACT_INFO.phone}</p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-sky-400 mt-1 mr-4" />
          <div>
            <h3 className="text-white font-medium mb-1">Location</h3>
            <p className="text-gray-400">
              {CONTACT_INFO.address.line1}<br />
              {CONTACT_INFO.address.line2}<br />
              {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}<br />
              {CONTACT_INFO.address.country} - {CONTACT_INFO.address.pincode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}