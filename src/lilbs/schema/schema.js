import { z } from "zod";

export const NamaSchema = z
  .string()
  .min(3, { message: "Full name must be at least 3 characters long!" })
  .max(255, { message: "Full name must be at most 255 characters long!" });

export const TanggalLahirSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
  message: "Date of birth is not valid! Use the format YYYY-MM-DD.",
});

export const NomorHPSchema = z.string().regex(/^\+\d{9,15}$/, {
  message: "Phone number is not valid! It must start with + and contain 9-15 digits.",
});

export const UniversitasSchema = z
  .string()
  .min(3, { message: "University name must be at least 3 characters long!" })
  .max(255, { message: "University name must be at most 255 characters long!" });

export const AsalProvinsiSchema = z
  .string()
  .min(3, { message: "Province name must be at least 3 characters long!" })
  .max(255, { message: "Province name must be at most 255 characters long!" });

export const AlamatLengkapSchema = z
  .string()
  .min(3, { message: "Full address must be at least 3 characters long!" })
  .max(255, { message: "Full address must be at most 255 characters long!" });

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
  proofLink: z.string().min(3).max(255),
});
