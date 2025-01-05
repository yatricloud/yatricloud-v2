import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AuthInputProps {
  icon: LucideIcon;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function AuthInput({
  icon: Icon,
  type,
  label,
  placeholder,
  value,
  onChange,
  required = true
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white/80">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <Icon className="w-5 h-5" style={{ transform: 'translateZ(0)' }} />
        </div>
        <input
          type={type}
          required={required}
          className="block w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg 
            text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
            transition-all"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}