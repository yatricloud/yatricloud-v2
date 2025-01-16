import React, { useState } from 'react';
import { Mail, KeyRound, UserPlus, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { signUp } from '../../lib/auth/authService';
import { AuthInput } from './common/AuthInput';

interface SignupFormProps {
  onSwitchView: () => void;
  onSuccess: () => void;
}

export function SignupForm({ onSwitchView, onSuccess }: SignupFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number';
    }
    if (!/[!@#$%^&*()]/.test(password)) {
      return 'Password must contain at least one special character (!@#$%^&*())';
    }
    if (/\s/.test(password)) {
      return 'Password must not contain spaces';
    }
    // Check for common patterns
    const commonPatterns = [
      '123456', 'password', 'qwerty', 'abc123', 'admin123',
      '111111', '12345678', 'password123'
    ];
    if (commonPatterns.some(pattern => password.toLowerCase().includes(pattern))) {
      return 'Password contains common patterns that are not allowed';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const { user, error: authError } = await signUp(formData.email, formData.password);
      
      if (authError) {
        setError(authError.message);
        return;
      }

      if (user) {
        setFormData({ email: '', password: '', confirmPassword: '' });
        onSuccess();
      }
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Create account</h2>
        <p className="text-gray-400">Join our community today</p>
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

        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <KeyRound className="w-5 h-5" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              required
              className="block w-full pl-10 pr-12 py-2.5 bg-white/5 border border-white/10 rounded-lg 
                text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                transition-all"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">Confirm Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <KeyRound className="w-5 h-5" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              className="block w-full pl-10 pr-12 py-2.5 bg-white/5 border border-white/10 rounded-lg 
                text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                transition-all"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-400 space-y-1">
          <p>Password requirements:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>At least 8 characters long</li>
            <li>Must contain at least one uppercase letter</li>
            <li>Must contain at least one lowercase letter</li>
            <li>Must contain at least one number</li>
            <li>Must contain at least one special character (!@#$%^&*())</li>
            <li>Must not contain spaces</li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 
            text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 
            hover:scale-[1.02] flex items-center justify-center disabled:opacity-50 
            disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? (
            'Creating account...'
          ) : (
            <>
              <UserPlus className="w-5 h-5 mr-2" />
              Create account
            </>
          )}
        </button>
      </form>

      <div className="text-center">
        <span className="text-gray-400">Already have an account?</span>{' '}
        <button
          onClick={onSwitchView}
          className="text-sky-400 hover:text-sky-300 font-medium"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}