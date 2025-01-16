export interface Profile {
  id: string;
  user_id: string;
  full_name: string;
  type: 'student' | 'professional';
  created_at: string;
  updated_at: string;
}