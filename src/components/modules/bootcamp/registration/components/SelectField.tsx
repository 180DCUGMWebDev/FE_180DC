// /modules/registration/components/SelectField.tsx (FILE BARU)
"use client";

import React from "react";
import { Controller, Control, FieldValues, Path, FieldError } from "react-hook-form";

// 1. IMPORT KOMPONEN SELECT DARI SHADCN
import { Label } from "@/components/elements/Form/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/elements/Form/select";

// 2. DEFINISIKAN PROPS YANG KITA BUTUHKAN
interface SelectFieldProps<T extends FieldValues> {
  control: Control<T>; // <-- 'control' ini wajib dari react-hook-form
  name: Path<T>;
  label: string;
  placeholder: string;
  options: string[]; // Daftar pilihan, cth: ["Instagram", "LinkedIn"]
  validationRules?: object;
  error?: FieldError;
}

// 3. BUAT KOMPONENNYA
export default function SelectField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  options,
  validationRules,
  error,
}: SelectFieldProps<T>) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div className="my-3 grid w-full items-center gap-1.5">
      <Label htmlFor={name} className={error ? "text-destructive" : ""}>
        {label} <span className="text-red-500">*</span>
      </Label>

      {/* Kita pakai <Controller> dari react-hook-form
        untuk "membungkus" komponen <Select> dari ShadCN
      */}
      <Controller
        name={name}
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange} // <-- Kirim value baru ke RHF
            defaultValue={field.value} // <-- Ambil value dari RHF
          >
            <SelectTrigger 
              id={name} 
              className="w-full"
              aria-invalid={error ? "true" : "false"}
              aria-describedby={errorId}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {/* Loop semua opsi yang dikasih */}
              {options.map((option) => (
                <SelectItem 
                  key={option} 
                  value={option}
                  className="cursor-pointer hover:bg-green-300/10"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      {/* Tampilkan error jika ada */}
      {error && (
        <p id={errorId} className="text-destructive text-sm font-medium text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}
