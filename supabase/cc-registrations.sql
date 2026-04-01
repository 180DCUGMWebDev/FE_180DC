-- ============================================
-- 180DC Case Competition - Supabase SQL Setup
-- ============================================

-- 1. Create the Case Competition registrations table
CREATE TABLE IF NOT EXISTS "casecomp-registrations" (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Registration status: pending, accepted, rejected
  status TEXT NOT NULL DEFAULT 'pending',
  rejection_reason TEXT,

  -- Payment info
  payment TEXT,
  rekening TEXT,

  -- Registration Phase: early, normal, late
  registration_phase TEXT,

  -- Team info
  team_name TEXT,

  -- Leader
  leader_name TEXT NOT NULL,
  leader_university TEXT,
  leader_major TEXT,
  leader_batch TEXT,
  leader_email TEXT NOT NULL,
  leader_phone TEXT,

  -- 1st Member
  member1_name TEXT,
  member1_university TEXT,
  member1_major TEXT,
  member1_batch TEXT,
  member1_email TEXT,
  member1_phone TEXT,

  -- 2nd Member
  member2_name TEXT,
  member2_university TEXT,
  member2_major TEXT,
  member2_batch TEXT,
  member2_email TEXT,
  member2_phone TEXT,

  -- Document links (Google Drive)
  doc_id_card TEXT,
  doc_cv TEXT,
  doc_follow TEXT,
  doc_twibbon TEXT,
  doc_bukti_pembayaran TEXT,

  -- Meta
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ,
  reviewed_by UUID REFERENCES auth.users(id)
);

-- 2. Enable Row Level Security
ALTER TABLE "casecomp-registrations" ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies

-- Allow authenticated admins to read all registrations
CREATE POLICY "Admins can read all casecomp registrations"
  ON "casecomp-registrations"
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

-- Allow authenticated admins to update registrations (accept/reject)
CREATE POLICY "Admins can update casecomp registrations"
  ON "casecomp-registrations"
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

-- Allow anyone to insert (public registration)
CREATE POLICY "Anyone can submit casecomp registration"
  ON "casecomp-registrations"
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 4. Indexes for common queries
CREATE INDEX idx_casecomp_registrations_status ON "casecomp-registrations" (status);
CREATE INDEX idx_casecomp_registrations_team_name ON "casecomp-registrations" (team_name);
CREATE INDEX idx_casecomp_registrations_leader_email ON "casecomp-registrations" (leader_email);
CREATE INDEX idx_casecomp_registrations_submitted_at ON "casecomp-registrations" (submitted_at DESC);
