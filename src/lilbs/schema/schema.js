import { z } from "zod";

export const ACCEPTED_IMAGE_FORMATS = ["image/jpeg", "image/png", "image/jpg"];
export const getFileSizeMb = (size) => size * 1024 * 1024; // 1 MB = 1024 KB = 1024 * 1024 bytes

export const NamaSchema = z
  .string()
  .min(3, { message: "Full name must be at least 3 characters long!" })
  .max(255, { message: "Full name must be at most 255 characters long!" });

export const TanggalLahirSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
  message: "Date of birth must be selected!",
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

export const ProdiSchema = z
  .string()
  .min(3, { message: "Major must be at least 3 characters long!" })
  .max(255, { message: "Major must be at most 255 characters long!" });

export const BatchSchema = z.string().regex(/^\d{4}$/, {
  message: "Batch must be a 4-digit number!",
});

export const SubmissionSchema = z.object({
  proofLink: z.string().min(3).max(255),
});

export const EmailSchema = z.string().email({ message: "Email address is not valid!" });

export const TeamLeaderSchema = z.object({
  namaTim: z.string().min(3, { message: "Team name must be at least 3 characters long!" }),
  namaLengkap: NamaSchema,
  universitas: UniversitasSchema,
  prodi: ProdiSchema,
  batch: BatchSchema,
  email: EmailSchema,
  nomorHP: NomorHPSchema,
});

export const TeamMemberSchema = z.object({
  namaLengkap: NamaSchema,
  universitas: UniversitasSchema,
  prodi: ProdiSchema,
  batch: BatchSchema,
  email: EmailSchema,
  nomorHP: NomorHPSchema,
});
