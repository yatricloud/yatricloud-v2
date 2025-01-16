import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProfileFormInputProps {
  icon: LucideIcon;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function ProfileFormInput({
  icon: Icon,
  type,
  label,
  value,
  onChange,
  required = false
}: ProfileFormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <Icon className="w-5 h-5" />
        </div>
        <input
          type={type}
          required={required}
          className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}