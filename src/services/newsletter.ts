import { supabase } from '../lib/supabase';

export async function checkEmailSubscription(email: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .select('email')
      .eq('email', email);
    
    if (error) throw error;
    return data && data.length > 0;
  } catch (error) {
    console.error('Error checking subscription:', error);
    throw error;
  }
}

export async function subscribeEmail(email: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('subscribers')
      .insert([{ email }]);
    
    if (error) {
      // Handle unique constraint violation
      if (error.code === '23505') {
        throw new Error('This email is already subscribed. Please try a different email.');
      }
      throw error;
    }
  } catch (error) {
    console.error('Error subscribing:', error);
    throw error;
  }
}