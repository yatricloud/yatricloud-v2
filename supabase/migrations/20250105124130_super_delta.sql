/*
  # Fix RLS Policies for Consultation Requests
  
  1. Changes
    - Update consultation_requests table structure
    - Add proper RLS policies for anonymous inserts
*/

-- Update table structure
ALTER TABLE consultation_requests 
  ADD COLUMN IF NOT EXISTS state text,
  ADD COLUMN IF NOT EXISTS company_name text,
  DROP COLUMN IF EXISTS phone,
  DROP COLUMN IF EXISTS referral_code;

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can insert consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Only authenticated users can view consultation requests" ON consultation_requests;

-- Create new policies
CREATE POLICY "Enable insert access for anonymous users"
  ON consultation_requests
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);