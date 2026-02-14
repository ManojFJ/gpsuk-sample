/*
  # Create inquiries table for promotional product contact requests

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key)
      - `name` (text) - Contact person's name
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone
      - `company` (text) - Company name
      - `product_interest` (text) - Product category they're interested in
      - `message` (text) - Additional message
      - `status` (text) - Inquiry status (new, replied, closed)
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on `inquiries` table
    - Add INSERT policy for anonymous users to submit inquiries
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  product_interest text NOT NULL DEFAULT '',
  message text DEFAULT '',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
  ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (
    name <> '' AND
    email <> ''
  );
