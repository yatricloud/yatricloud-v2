/*
  # Create contact messages table and policies

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text) - For tracking message status (new, read, replied)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for inserting new messages
    - Add policy for viewing messages
*/

-- Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and create new ones
DO $$ 
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Anyone can insert contact messages" ON contact_messages;
  DROP POLICY IF EXISTS "Only authenticated users can view messages" ON contact_messages;
  
  -- Create new policies
  CREATE POLICY "Anyone can insert contact messages"
    ON contact_messages
    FOR INSERT
    TO anon
    WITH CHECK (true);

  CREATE POLICY "Only authenticated users can view messages"
    ON contact_messages
    FOR SELECT
    TO authenticated
    USING (true);
END $$;