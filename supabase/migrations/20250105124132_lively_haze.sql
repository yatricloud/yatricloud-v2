/*
  # Fix RLS Policies for Profiles Table
  
  1. Changes
    - Update profiles table with proper RLS policies
    - Allow users to manage their own profiles
*/

-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  full_name text,
  type text CHECK (type IN ('student', 'professional')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Create new policies
CREATE POLICY "Enable read access for users"
  ON profiles
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Enable update access for users"
  ON profiles
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Enable insert access for users"
  ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);