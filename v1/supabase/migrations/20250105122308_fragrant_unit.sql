/*
  # Update consultation_requests table

  1. Changes
    - Add state and company_name columns
    - Remove phone and referral_code columns
*/

ALTER TABLE consultation_requests 
  ADD COLUMN IF NOT EXISTS state text,
  ADD COLUMN IF NOT EXISTS company_name text,
  DROP COLUMN IF EXISTS phone,
  DROP COLUMN IF EXISTS referral_code;