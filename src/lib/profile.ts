import { supabase } from './supabase';
import type { Profile } from '../types/profile';

export async function createProfile(
  userId: string, 
  fullName: string, 
  additionalData: Partial<Profile> = {}
) {
  const { data, error } = await supabase
    .from('profiles')
    .insert([{
      user_id: userId,
      full_name: fullName,
      ...additionalData
    }])
    .select()
    .single();

  if (error) throw error;
  return data as Profile;
}

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle(); // Use maybeSingle instead of single to handle no results

  if (error) throw error;
  return data as Profile | null;
}

export async function updateProfile(userId: string, updates: Partial<Profile>) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) throw error;
  return data as Profile;
}