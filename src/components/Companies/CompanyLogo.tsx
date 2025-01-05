import React from 'react';

interface CompanyLogoProps {
  name: string;
  logo: string;
  grayscale?: boolean;
}

export function CompanyLogo({ name, logo, grayscale = false }: CompanyLogoProps) {
  return (
    <div className="group relative flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img
        src={logo}
        alt={`${name} logo`}
        className={`h-8 md:h-12 object-contain transition-all duration-300 ${
          grayscale ? 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100' : ''
        }`}
      />
    </div>
  );
}