import React, { useState } from 'react';
import { EnrollmentForm } from './EnrollmentForm';

interface EnrollmentCardProps {
  credlyBadge: string;
  examVoucher?: boolean;
  code: string;
  name: string;
}

export function EnrollmentCard({ 
  credlyBadge, 
  examVoucher,
  code,
  name
}: EnrollmentCardProps) {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg p-8">
        <img
          src={credlyBadge}
          alt="Certification Badge"
          className="w-48 h-48 mb-6"
        />
        <div className="text-center">
          <p className="text-lg text-gray-400 mb-4">Contact us for best pricing</p>
          <button
            onClick={() => setShowEnrollmentForm(true)}
            className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 
              text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 
              hover:scale-[1.02] mb-4"
          >
            Get Pricing Details
          </button>
          {examVoucher && (
            <p className="text-sm text-sky-400">Includes free exam voucher</p>
          )}
        </div>
      </div>

      {showEnrollmentForm && (
        <EnrollmentForm
          certificationCode={code}
          certificationName={name}
          onClose={() => setShowEnrollmentForm(false)}
        />
      )}
    </>
  );
}