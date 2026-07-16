-- Migration: create waitlist_submissions table with RLS
-- Project: CC-Kick (cckick-withada-1784236806391)
-- Created: 2026-07-16

CREATE TABLE IF NOT EXISTS waitlist_submissions (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email       text NOT NULL,
  created_at  timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT waitlist_submissions_email_unique UNIQUE (email)
);

-- Enable Row Level Security
ALTER TABLE waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (waitlist form submissions)
CREATE POLICY "anon_insert_only"
  ON waitlist_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL
    AND email ~ '^[^\s@]+@[^\s@]+\.[^\s@]+$'
  );

-- Deny anonymous reads
CREATE POLICY "deny_anon_select"
  ON waitlist_submissions
  FOR SELECT
  TO anon
  USING (false);

-- Deny anonymous updates
CREATE POLICY "deny_anon_update"
  ON waitlist_submissions
  FOR UPDATE
  TO anon
  USING (false);

-- Deny anonymous deletes
CREATE POLICY "deny_anon_delete"
  ON waitlist_submissions
  FOR DELETE
  TO anon
  USING (false);
