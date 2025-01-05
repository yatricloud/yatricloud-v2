import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AuthButtonProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export function AuthButton({
  icon: Icon,
  children,
  variant = 'primary',
  type = 'button',
  onClick
}: AuthButtonProps) {
  const baseStyles = "w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "btn-gradient text-white hover:shadow-lg hover:shadow-sky-500/20 hover:scale-[1.02]",
    secondary: "bg-white/5 text-white hover:bg-white/10"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}