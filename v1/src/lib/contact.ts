import { supabase } from './supabase';

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactMessage(data: ContactMessage) {
  const { error } = await supabase
    .from('contact_messages')
    .insert([data]);

  if (error) throw error;
}