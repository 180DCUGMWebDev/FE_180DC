-- ============================================
-- 180DC Open Recruitment 26/27 - Supabase SQL Setup
-- ============================================
-- Mirrors the 25/26 submission tables, with two changes on the functional side:
--   * sngManager is now sngCeoCC (CEO of 180DC Case Competition)
--   * the role flags are BOOLEAN here; they were TEXT in 25/26 even though the
--     API has always written booleans into them
-- Knowledge Team moved from functional to consulting, so it needs no column of
-- its own: it is stored in firstChoicePosition / secondChoicePosition.

-- 1. Functional Analyst submissions
CREATE TABLE IF NOT EXISTS "functional-batch1-26-27-submissions" (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Personal info
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  faculty TEXT,
  major TEXT,
  batch TEXT,
  gpa NUMERIC,
  "activeStudent" BOOLEAN,

  -- Alumni info
  "is180DCAlumni" BOOLEAN DEFAULT FALSE,
  "pastPosition" TEXT,
  "pastBatch" TEXT,

  -- Position choices
  "onePosition" BOOLEAN,
  "twoPositions" BOOLEAN,
  "firstChoice" TEXT,
  "secondChoice" TEXT,

  -- First choice role preferences
  "first_content" BOOLEAN,
  "first_graphicDesigner" BOOLEAN,
  "first_videographer" BOOLEAN,
  "first_partnership" BOOLEAN,
  "first_frontend" BOOLEAN,
  "first_backend" BOOLEAN,
  "first_uiux" BOOLEAN,
  "first_sngCeoCC" BOOLEAN,
  "first_sngAnalyst" BOOLEAN,

  -- First choice documents
  "first_documentLink" TEXT,
  "first_cvLink" TEXT,
  "first_portfolioLink" TEXT,

  -- Second choice role preferences
  "second_content" BOOLEAN,
  "second_graphicDesigner" BOOLEAN,
  "second_videographer" BOOLEAN,
  "second_partnership" BOOLEAN,
  "second_frontend" BOOLEAN,
  "second_backend" BOOLEAN,
  "second_uiux" BOOLEAN,
  "second_sngCeoCC" BOOLEAN,
  "second_sngAnalyst" BOOLEAN,

  -- Second choice documents
  "second_documentLink" TEXT,
  "second_cvLink" TEXT,
  "second_portfolioLink" TEXT,

  -- Twibbon & consent
  "twibbonPostLink" TEXT,
  "twibbonProofLink" TEXT,
  "consentAgreed" BOOLEAN NOT NULL,

  -- Metadata
  user_agent TEXT,
  ip_address INET,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Consulting Analyst submissions (Cycle 1)
CREATE TABLE IF NOT EXISTS "consulting-batch1-26-27-submissions" (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Personal info
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  faculty TEXT NOT NULL,
  major TEXT NOT NULL,
  batch TEXT NOT NULL,
  gpa NUMERIC,
  "activeStudent" BOOLEAN NOT NULL,

  -- Alumni info
  "is180DCAlumni" BOOLEAN NOT NULL,
  "pastPosition" TEXT,
  "pastBatch" TEXT,

  -- Position choices (Project Leader, Project Analyst, Knowledge Team)
  "firstChoicePosition" TEXT NOT NULL,
  "secondChoicePosition" TEXT,

  -- Documents
  "documentLink" TEXT NOT NULL,
  "cvLink" TEXT NOT NULL,

  -- Twibbon & socials
  "twibbonPost" TEXT NOT NULL,
  "instagramProofLink" TEXT NOT NULL,
  "registrationProofLink" TEXT,
  "hearAboutUs" TEXT NOT NULL,

  -- Consent
  "consentAgreed" BOOLEAN NOT NULL,
  "consentConsultingAgreed" BOOLEAN,

  -- Metadata
  user_agent TEXT,
  ip_address INET,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Row Level Security
-- Both tables are written by the API with the service role key, which bypasses
-- RLS. Enabling it keeps the anon key from reading applicants' data.
ALTER TABLE "functional-batch1-26-27-submissions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "consulting-batch1-26-27-submissions" ENABLE ROW LEVEL SECURITY;
