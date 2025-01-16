import { supabase } from './supabase';

interface EnrollmentFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  courseName: string;
}

interface RequestFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitEnrollmentForm(data: EnrollmentFormData) {
  const { error } = await supabase
    .from('course_requests')
    .insert([{
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message || '',
      course_name: data.courseName
    }]);

  if (error) throw error;
}

export async function submitRequestForm(data: RequestFormData) {
  const { error } = await supabase
    .from('contact_messages')
    .insert([{
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message
    }]);

  if (error) throw error;
}