/*
  # Create subscribers table

  1. New Tables
    - `subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `subscribers` table
    - Add policy for anonymous users to insert
    - Add policy for authenticated users to view
*/

-- Drop existing table and policies if they exist
DROP TABLE IF EXISTS subscribers CASCADE;

-- Create subscribers table
CREATE TABLE subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can subscribe"
  ON subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscribers"
  ON subscribers
  FOR SELECT
  TO authenticated
  USING (true);