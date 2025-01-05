-- Create course requests table
CREATE TABLE IF NOT EXISTS course_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text,
  course_name text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE course_requests ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow anonymous users to submit course requests"
  ON course_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view course requests"
  ON course_requests
  FOR SELECT
  TO authenticated
  USING (true);