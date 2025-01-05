import React, { useState } from 'react';
import { User, Mail, KeyRound, UserPlus } from 'lucide-react';
import { AuthInput } from '../../components/Auth/common/AuthInput';
import { AuthButton } from '../../components/Auth/common/AuthButton';

interface SignupPageProps {
  onNavigate: (page: 'home' | 'blog' | 'login' | 'signup' | 'success-stories') => void;
}

export function SignupPage({ onNavigate }: SignupPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#040d21] p-4">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="w-full max-w-md relative mt-24">
        <div className="text-center mb-8 pt-16">
          <h1 className="text-4xl font-bold text-white mb-2 text-glow">Create account</h1>
          <p className="text-lg text-gray-400">Join our community today</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <AuthInput
              icon={User}
              type="text"
              label="Full name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <AuthInput
              icon={Mail}
              type="email"
              label="Email address"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <AuthInput
              icon={KeyRound}
              type="password"
              label="Password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            <p className="text-sm text-gray-400">
              Password must be at least 8 characters long
            </p>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] flex items-center justify-center"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Create account
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-gray-400">Already have an account?</span>{' '}
            <button
              onClick={() => onNavigate('login')}
              className="text-sky-400 hover:text-sky-300 font-medium"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}