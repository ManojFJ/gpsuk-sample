/*
  # Create quotes table for GPS tracking quote requests

  1. New Tables
    - `quotes`
      - `id` (uuid, primary key) - Unique identifier for each quote request
      - `country` (text) - Country or region of the requester
      - `tracking_type` (text) - Type of tracking needed (Fleet, Bikes, Trucks, Assets, Personal, Other)
      - `quantity` (integer) - Number of vehicles or assets to track
      - `name` (text) - Requester's name
      - `email` (text) - Requester's email address
      - `phone` (text) - Requester's phone number
      - `message` (text) - Optional additional message
      - `status` (text) - Quote status (new, contacted, quoted, closed) with default 'new'
      - `created_at` (timestamptz) - Timestamp of when the quote was submitted

  2. Security
    - Enable RLS on `quotes` table
    - Add INSERT policy for anonymous users to submit quotes
    - No SELECT/UPDATE/DELETE policies for anonymous users (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  country text NOT NULL DEFAULT '',
  tracking_type text NOT NULL DEFAULT '',
  quantity integer NOT NULL DEFAULT 1,
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  message text DEFAULT '',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote"
  ON quotes
  FOR INSERT
  TO anon
  WITH CHECK (
    email <> '' AND
    tracking_type <> '' AND
    country <> ''
  );
