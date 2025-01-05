import React, { useState } from 'react';
import { User, Link2, AlertCircle } from 'lucide-react';
import { createProfile } from '../../lib/profile';
import { useAuth } from '../../contexts/AuthContext';
import { ProfileFormInput } from './ProfileFormInput';

interface CreateProfileFormProps {
  onSuccess: () => void;
}

export function CreateProfileForm({ onSuccess }: CreateProfileFormProps) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    bio: '',
    website: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setError(null);
    setIsLoading(true);

    try {
      await createProfile(user.id, formData.fullName, {
        bio: formData.bio,
        website: formData.website
      });
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Complete Your Profile</h2>
        <p className="text-gray-400">Tell us a bit about yourself</p>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400">
          <AlertCircle className="w-5 h-5 mr-2" />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <ProfileFormInput
          icon={User}
          type="text"
          label="Full Name"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Bio
          </label>
          <textarea
            rows={3}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          />
        </div>

        <ProfileFormInput
          icon={Link2}
          type="url"
          label="Website"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 
            text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 
            hover:scale-[1.02] flex items-center justify-center disabled:opacity-50 
            disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? 'Creating Profile...' : 'Complete Profile'}
        </button>
      </form>
    </div>
  );
}