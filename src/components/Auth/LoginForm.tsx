import React, { useState } from 'react';
import { Mail, KeyRound, LogIn, AlertCircle } from 'lucide-react';
import { signIn } from '../../lib/auth/authService';
import { AuthInput } from './common/AuthInput';

interface LoginFormProps {
  onSwitchView: () => void;
  onSuccess: () => void;
}

export function LoginForm({ onSwitchView, onSuccess }: LoginFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { user, error: authError } = await signIn(formData.email, formData.password);
      
      if (authError) {
        setError(authError.message);
        return;
      }

      if (user) {
        setFormData({ email: '', password: '' });
        onSuccess();
      }
    } catch (err) {
      setError('Failed to sign in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
        <p className="text-gray-400">Sign in to your account</p>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400">
          <AlertCircle className="w-5 h-5 mr-2" />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
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

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 
            text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 
            hover:scale-[1.02] flex items-center justify-center disabled:opacity-50 
            disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? (
            'Signing in...'
          ) : (
            <>
              <LogIn className="w-5 h-5 mr-2" />
              Sign in
            </>
          )}
        </button>
      </form>

      <div className="text-center">
        <span className="text-gray-400">Don't have an account?</span>{' '}
        <button
          onClick={onSwitchView}
          className="text-sky-400 hover:text-sky-300 font-medium"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}