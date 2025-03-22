import { z } from "zod";

export const NamaSchema = z.string().min(3).max(255);
export const TanggalLahirSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
export const NomorHPSchema = z.string().regex(/^\+62\d{9,11}$/);
export const UniversitasSchema = z.string().min(3).max(255);
export const AsalProvinsiSchema = z.string().min(3).max(255);
export const AlamatLengkapSchema = z.string().min(3).max(255);

export const TeamLeaderSchema = z.object({
  namaLengkap: NamaSchema,
  tanggalLahir: TanggalLahirSchema,
  nomorHP: NomorHPSchema,
  universitas: UniversitasSchema,
  asalProvinsi: AsalProvinsiSchema,
  alamatLengkap: AlamatLengkapSchema,
});

export const TeamMemberSchema = z.object({
  namaLengkap: NamaSchema,
  tanggalLahir: TanggalLahirSchema,
  nomorHP: NomorHPSchema,
  universitas: UniversitasSchema,
  asalProvinsi: AsalProvinsiSchema,
  alamatLengkap: AlamatLengkapSchema,
});

export const proofSchema = z.object({
  proofLink: z.string().url(),
});
