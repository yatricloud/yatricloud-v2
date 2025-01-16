import React, { useState } from 'react';
import { User, Briefcase } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { updateProfile } from '../../lib/profile';
import { ProfileFormInput } from './ProfileFormInput';

interface EditProfileFormProps {
  initialData: {
    full_name: string;
    type: 'student' | 'professional';
  };
  onSuccess: () => void;
}

export function EditProfileForm({ initialData, onSuccess }: EditProfileFormProps) {
  const { user } = useAuth();
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    setError(null);

    try {
      await updateProfile(user.id, formData);
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ProfileFormInput
        icon={User}
        type="text"
        label="Full Name"
        required
        value={formData.full_name}
        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
      />

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          I am a
        </label>
        <div className="grid grid-cols-2 gap-4">
          {['student', 'professional'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({ ...formData, type: type as 'student' | 'professional' })}
              className={`flex items-center justify-center p-4 rounded-lg border ${
                formData.type === type
                  ? 'border-sky-500 bg-sky-500/10 text-sky-400'
                  : 'border-white/10 text-gray-400 hover:bg-white/5'
              }`}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              <span className="capitalize">{type}</span>
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="text-red-400 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 
          text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 
          hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
}