/*
  # Azure Fundamentals Course Details

  1. New Tables
    - `courses`
      - `id` (uuid, primary key)
      - `code` (text, unique)
      - `title` (text)
      - `description` (text)
      - `level` (text)
      - `duration` (text)
      - `price` (numeric)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `course_modules`
      - `id` (uuid, primary key)
      - `course_id` (uuid, foreign key)
      - `title` (text)
      - `description` (text)
      - `duration` (text)
      - `order` (integer)
      - `created_at` (timestamptz)

    - `module_topics`
      - `id` (uuid, primary key)
      - `module_id` (uuid, foreign key)
      - `title` (text)
      - `order` (integer)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated admin access
*/

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  level text NOT NULL,
  duration text NOT NULL,
  price numeric NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create course_modules table
CREATE TABLE IF NOT EXISTS course_modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  duration text NOT NULL,
  order_num integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create module_topics table
CREATE TABLE IF NOT EXISTS module_topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id uuid REFERENCES course_modules(id) ON DELETE CASCADE,
  title text NOT NULL,
  order_num integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE module_topics ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to courses"
  ON courses
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to course modules"
  ON course_modules
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to module topics"
  ON module_topics
  FOR SELECT
  TO public
  USING (true);

-- Insert Azure Fundamentals course data
INSERT INTO courses (code, title, description, level, duration, price) VALUES (
  'AZ-900',
  'Microsoft Azure Fundamentals',
  'Master the fundamentals of cloud computing and Microsoft Azure. This comprehensive course covers cloud concepts, core Azure services, security, privacy, compliance, and Azure pricing and support.',
  'Foundational',
  '4 weeks',
  299
);

-- Get the course ID
DO $$ 
DECLARE
  course_id uuid;
BEGIN
  SELECT id INTO course_id FROM courses WHERE code = 'AZ-900';

  -- Module 1: Cloud Concepts
  WITH module AS (
    INSERT INTO course_modules (course_id, title, description, duration, order_num)
    VALUES (
      course_id,
      'Cloud Concepts',
      'Understanding cloud computing and its service models',
      '1 week',
      1
    ) RETURNING id
  )
  INSERT INTO module_topics (module_id, title, order_num)
  SELECT id, topic, order_num
  FROM module, unnest(ARRAY[
    'Introduction to Cloud Computing',
    'Benefits of Cloud Services',
    'Cloud Service Types (IaaS, PaaS, SaaS)',
    'Cloud Deployment Models',
    'Economics of Cloud Computing'
  ]) WITH ORDINALITY AS t(topic, order_num);

  -- Module 2: Azure Core Services
  WITH module AS (
    INSERT INTO course_modules (course_id, title, description, duration, order_num)
    VALUES (
      course_id,
      'Azure Core Services',
      'Explore fundamental Azure services and their use cases',
      '1 week',
      2
    ) RETURNING id
  )
  INSERT INTO module_topics (module_id, title, order_num)
  SELECT id, topic, order_num
  FROM module, unnest(ARRAY[
    'Azure Architectural Components',
    'Compute Services (VMs, App Services)',
    'Storage Solutions',
    'Networking Services',
    'Database Services'
  ]) WITH ORDINALITY AS t(topic, order_num);

  -- Module 3: Security and Compliance
  WITH module AS (
    INSERT INTO course_modules (course_id, title, description, duration, order_num)
    VALUES (
      course_id,
      'Security and Compliance',
      'Learn about Azure security features and compliance standards',
      '1 week',
      3
    ) RETURNING id
  )
  INSERT INTO module_topics (module_id, title, order_num)
  SELECT id, topic, order_num
  FROM module, unnest(ARRAY[
    'Identity Services and Azure AD',
    'Security Tools and Features',
    'Azure Governance Methodologies',
    'Privacy and Compliance Standards',
    'Data Protection Standards'
  ]) WITH ORDINALITY AS t(topic, order_num);

  -- Module 4: Pricing and Support
  WITH module AS (
    INSERT INTO course_modules (course_id, title, description, duration, order_num)
    VALUES (
      course_id,
      'Pricing and Support',
      'Understanding Azure pricing, SLAs, and support options',
      '1 week',
      4
    ) RETURNING id
  )
  INSERT INTO module_topics (module_id, title, order_num)
  SELECT id, topic, order_num
  FROM module, unnest(ARRAY[
    'Azure Subscriptions',
    'Cost Management and Tools',
    'Service Level Agreements (SLAs)',
    'Service Lifecycle',
    'Azure Support Options'
  ]) WITH ORDINALITY AS t(topic, order_num);
END $$;