/*
  # Fix Contact Messages RLS

  1. Changes
    - Update RLS policies for contact_messages table
    - Allow anonymous users to insert messages
    - Allow authenticated users to view messages
  
  2. Security
    - Enable RLS
    - Add proper policies for insert and select
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert access for anonymous users" ON contact_messages;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON contact_messages;

-- Create new policies with proper security
CREATE POLICY "Allow anonymous users to submit messages"
  ON contact_messages
  FOR INSERT
  TO public  -- This allows both authenticated and anonymous users
  WITH CHECK (true);  -- Allow all inserts

CREATE POLICY "Allow authenticated users to view messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);  -- Authenticated users can view all messages