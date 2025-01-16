import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Contact Information
      </h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="w-6 h-6 text-sky-400 mt-1 mr-4" />
          <div>
            <h3 className="text-white font-medium mb-1">Email</h3>
            <p className="text-gray-400">info@yatricloud.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="w-6 h-6 text-sky-400 mt-1 mr-4" />
          <div>
            <h3 className="text-white font-medium mb-1">Phone</h3>
            <p className="text-gray-400">+91 9724823602</p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-sky-400 mt-1 mr-4" />
          <div>
            <h3 className="text-white font-medium mb-1">Location</h3>
            <p className="text-gray-400">
              E10, Green Glen Layout, Outer Ring Road, Pincode: 560103
              <br />
              Bellandur, Bengaluru, Karnataka India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
