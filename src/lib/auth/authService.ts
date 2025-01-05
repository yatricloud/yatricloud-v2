import { supabase } from '../supabase';
import type { AuthResponse } from './types';

export async function signIn(email: string, password: string): Promise<AuthResponse> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;

    return {
      user: data.user,
      error: null
    };
  } catch (error) {
    return {
      user: null,
      error: error as Error
    };
  }
}

export async function signUp(email: string, password: string): Promise<AuthResponse> {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) throw error;

    return {
      user: data.user,
      error: null
    };
  } catch (error) {
    return {
      user: null,
      error: error as Error
    };
  }
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}