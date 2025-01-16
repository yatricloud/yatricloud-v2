import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getProfile } from '../lib/profile';
import type { Profile } from '../types/profile';

export function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadProfile() {
      if (!user) {
        setProfile(null);
        setIsLoading(false);
        return;
      }

      try {
        const data = await getProfile(user.id);
        setProfile(data);
        setError(null);
      } catch (err) {
        // Don't set error if profile just doesn't exist yet
        if (err instanceof Error && !err.message.includes('contains 0 rows')) {
          setError(err);
        }
        setProfile(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadProfile();
  }, [user]);

  return { profile, isLoading, error };
}