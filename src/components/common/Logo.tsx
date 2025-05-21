import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://raw.githubusercontent.com/yatricloud/yatri-images/refs/heads/main/Logo/yatricloud-round-transparent.png" 
        alt="Yatri Cloud"
        className="h-8 w-auto"
      />
      <span className="text-xl font-bold text-white">
        Yatri Cloud
      </span>
    </div>
  );
}