-- ============================================
-- 180DC Open Recruitment 26/27 - 180UNLOCKED fields
-- ============================================
-- Run after oprec-26-27.sql. Adds the three fields the functional form gained:
-- how the applicant heard about us, their 180UNLOCKED registration proof, and
-- the acknowledgement that attending is encouraged.
--
-- hearAboutUs is TEXT rather than an array because the form serialises its
-- checkbox list into a comma separated string before posting, the same way the
-- consulting form already does.

ALTER TABLE "functional-batch1-26-27-submissions"
  ADD COLUMN IF NOT EXISTS "hearAboutUs" TEXT,
  ADD COLUMN IF NOT EXISTS "unlockedProofLink" TEXT,
  ADD COLUMN IF NOT EXISTS "unlockedAcknowledged" BOOLEAN DEFAULT FALSE;
