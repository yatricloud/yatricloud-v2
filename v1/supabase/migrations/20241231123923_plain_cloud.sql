/*
  # Create consultation requests table

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `referral_code` (text, optional)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for inserting new requests
    - Add policy for viewing requests
*/

-- Create the consultation requests table
CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  referral_code text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create policies
DO $$ 
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Anyone can insert consultation requests" ON consultation_requests;
  DROP POLICY IF EXISTS "Only authenticated users can view consultation requests" ON consultation_requests;
  
  -- Create new policies
  CREATE POLICY "Anyone can insert consultation requests"
    ON consultation_requests
    FOR INSERT
    TO anon
    WITH CHECK (true);

  CREATE POLICY "Only authenticated users can view consultation requests"
    ON consultation_requests
    FOR SELECT
    TO authenticated
    USING (true);
END $$;