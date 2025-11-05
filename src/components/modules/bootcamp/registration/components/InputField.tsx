"use client";

import React from "react";
import { UseFormRegister, FieldValues, Path, FieldError } from "react-hook-form";

// --- 1. IMPORT KOMPONEN SHADCN ---
import { Input } from "@/components/elements/Form/input";
import { Textarea } from "@/components/elements/Form/textarea";
import { Label } from "@/components/elements/Form/label";

// Definisikan tipe props-nya
interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  type?: string;
  placeholder?: string;
  validationRules?: object;
  className?: string;
  as?: "input" | "textarea"; // Tambahkan prop untuk pilih tipe
  rows?: number; // Untuk textarea rows
}

// Gunakan generic type <T>
export default function InputField<T extends FieldValues>({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder,
  validationRules = {},
  className = "",
  as = "input", // Default adalah input
  rows = 4, // Default rows untuk textarea
}: InputFieldProps<T>) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div className={`my-3 grid w-full items-center gap-1.5 ${className}`}>
      <Label htmlFor={name} className={error ? "text-destructive" : ""}>
        {label} <span className="text-red-500">*</span>
      </Label>

      {as === "textarea" ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          rows={rows}
          // 'register' dari RHF tetap kita pakai
          {...register(name, validationRules)}
          // Atribut ARIA untuk accessibility (dibaca screen reader)
          aria-invalid={error ? "true" : "false"}
          aria-describedby={errorId}
        />
      ) : (
        <Input
          type={type}
          id={name}
          placeholder={placeholder}
          // 'register' dari RHF tetap kita pakai
          {...register(name, validationRules)}
          // Atribut ARIA untuk accessibility (dibaca screen reader)
          aria-invalid={error ? "true" : "false"}
          aria-describedby={errorId}
        />
      )}

      {error && (
        <p id={errorId} className="text-destructive text-sm font-medium text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}
