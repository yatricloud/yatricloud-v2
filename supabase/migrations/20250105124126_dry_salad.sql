/*
  # Fix RLS Policies for Subscribers Table
  
  1. Changes
    - Drop and recreate subscribers table with proper RLS policies
    - Allow anonymous inserts
    - Allow authenticated users to view all subscribers
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
CREATE POLICY "Enable insert access for anonymous users"
  ON subscribers
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users"
  ON subscribers
  FOR SELECT
  TO authenticated
  USING (true);