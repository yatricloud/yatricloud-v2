import React from 'react';

export function OfficeHours() {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Office Hours (IST)
      </h2>
      <div className="space-y-2">
        <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p className="text-gray-400">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
      </div>
    </div>
  );
}
