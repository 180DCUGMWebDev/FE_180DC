"use client";

import React, { useState, useRef } from "react";
import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";
import { Upload, X, FileCheck, Loader2, ExternalLink } from "lucide-react";

// --- IMPORT KOMPONEN SHADCN ---
import { Label } from "@/components/elements/Form/label";
import { Button } from "@/components/elements/Form/button";
import { toast } from "sonner"; // Opsional: untuk notifikasi error/success
import { createClient } from "@/integrations/supabase/client";

export const supabase = createClient();

interface FileUploadFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  paymentProofFileName?: Path<T>;
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  setValue: UseFormSetValue<T>; // Set URL ke form
  error?: FieldError;
  validationRules?: object;
  className?: string;
  accept?: string;
  maxSizeKB?: number;
  bucketName: string; // Nama bucket di Supabase
  folderPath?: string; // Nama folder di bucker
}

export default function FormUploadField<T extends FieldValues>({
  label,
  name,
  register,
  watch,
  setValue,
  error,
  validationRules = {},
  className = "",
  accept = "image/*,.pdf",
  maxSizeKB = 500,
  bucketName,
  folderPath = "temp",
  paymentProofFileName,
}: FileUploadFieldProps<T>) {
  const errorId = error ? `${name}-error` : undefined;
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  // State lokal
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [localFileName, setLocalFileName] = useState<string>("");

  const formValue = watch(name);
  
  // Cek apakah sudah ada file terupload (berupa URL string)
  const hasValue = typeof formValue === 'string' && formValue.length > 0;

  // Upload Supabase
  const handleUpload = async (file: File) => {
    // Validasi Ukuran
    if (file.size > maxSizeKB * 1024) {
      alert(`File size must be less than ${maxSizeKB}KB`);
      return;
    }

    try {
      setUploading(true);
      setLocalFileName(file.name); // Nama file untuk placeholder

      // Unique File Name
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9]/g, '_')}.${fileExt}`;
      const filePath = `${folderPath}/${fileName}`;

      // Upload to Supabase
      const { data, error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get Public URL
      const { data: urlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);

      const publicUrl = urlData.publicUrl;

      // Set Value Form with URL
      setValue(name, publicUrl as any, { 
        shouldValidate: true, 
        shouldDirty: true 
      });

      setValue(
        paymentProofFileName,
        fileName as any, 
        { shouldValidate: true }
      );

      toast.success("File uploaded successfully");

    } catch (err: any) {
      console.error("Upload failed:", err);
      // Reset input if fail
      if (fileInputRef.current) fileInputRef.current.value = "";
      setLocalFileName("");
      alert(`Upload failed: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleUpload(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleUpload(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveFile = async () => {
    const fileUrl = watch(name);

    if (typeof fileUrl === "string" && fileUrl.length > 0) {
      try {
        const urlParts = fileUrl.split('/');
        const rawFileName = urlParts[urlParts.length - 1];
        
        const cleanFileName = decodeURIComponent(rawFileName);

        const pathToDelete = `${folderPath}/${cleanFileName}`;

        console.log("Menghapus file:", pathToDelete);

        // Delete
        const { error } = await supabase.storage
          .from(bucketName)
          .remove([pathToDelete]);

        if (error) {
          console.error("Gagal menghapus dari cloud:", error.message);
          return;
        }

      } catch (err) {
        console.error("Terjadi kesalahan saat parsing URL:", err);
      }
    }

    // Reset Form
    setValue(name, "" as any, { shouldValidate: true, shouldDirty: true });
    setLocalFileName("");
    if (paymentProofFileName) {
        setValue(paymentProofFileName, "" as any, { shouldValidate: true, shouldDirty: true });
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const truncateFileName = (fileName: string, maxLength: number = 30) => {
    if (!fileName) return "";
    if (fileName.length <= maxLength) return fileName;
    return fileName.substring(0, maxLength - 3) + "...";
  };

  // Helper untuk menampilkan nama file.
  // Jika user baru upload, pakai localFileName.
  // Jika ini data dari database (edit mode) dan localFileName kosong, 
  // kita coba ambil nama file dari URL atau tampilkan generic name.
  const displayFileName = localFileName || (hasValue ? formValue.split('/').pop() : "Uploaded File");

  return (
    <div className={`grid w-full flex-col gap-2 ${className}`}>
      <Label htmlFor={name} className={`block text-sm font-semibold text-gray-300 mb-1 ${error ? "text-red-400" : ""}`}>
        {label} <span className="text-red-400">*</span>
      </Label>
      
      {/* Hidden Input */}
      <input
        type="file"
        id={name}
        accept={accept}
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileSelect}
        disabled={uploading}
      />

      {/* Input Visual Area */}
      <div
        onDragOver={!uploading && !hasValue ? handleDragOver : undefined}
        onDragLeave={!uploading && !hasValue ? handleDragLeave : undefined}
        onDrop={!uploading && !hasValue ? handleDrop : undefined}
        className={`relative rounded-xl border-2 border-dashed transition-all duration-200 ${
          isDragging
            ? "border-[#75C44D] bg-[#75C44D]/10"
            : error
            ? "border-red-500/50 bg-red-500/5"
            : hasValue
            ? "border-[#75C44D]/50 bg-[#222222]"
            : "border-white/20 bg-[#222222] hover:bg-[#75C44D]/5 hover:border-[#75C44D]/30"
        }`}
      >
        
        {/* KONDISI 1: LOADING UPLOAD */}
        {uploading ? (
           <div className="flex flex-col items-center justify-center p-8 text-center">
             <Loader2 className="h-8 w-8 animate-spin text-[#75C44D] mb-2" />
             <p className="text-sm text-gray-400">Uploading to cloud...</p>
           </div>
        ) : 
        
        /* KONDISI 2: SUDAH ADA VALUE (URL) */
        hasValue ? (
          <div className="flex items-center gap-4 p-4">
            {/* Icon Preview */}
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-black/30 overflow-hidden border border-white/10">
              {/* Jika URL adalah gambar, tampilkan thumbnail */}
              {formValue.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
                 <img src={formValue} alt="preview" className="h-full w-full object-cover" />
              ) : (
                 <FileCheck className="h-8 w-8 text-[#75C44D]" />
              )}
            </div>

            {/* File Info & Link */}
            <div className="flex-1 overflow-hidden">
              <p className="font-avenir-regular text-sm text-white truncate" title={displayFileName}>
                {truncateFileName(displayFileName, 35)}
              </p>
              <a 
                href={formValue} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-[#75C44D] hover:underline mt-1"
              >
                View Uploaded File <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Delete Button */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleRemoveFile}
              className="flex-shrink-0 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        ) : (

        /* KONDISI 3: KOSONG (DEFAULT) */
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-4 rounded-full bg-[#75C44D]/10 p-4">
              <Upload className="h-8 w-8 text-[#75C44D]" />
            </div>
            <p className="font-avenir-book mb-2 text-base font-semibold text-gray-300">
              Drop your file here, or{" "}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-[#75C44D] underline hover:text-[#82D956]"
              >
                browse
              </button>
            </p>
            <p className="font-lato-regular text-sm text-gray-500">
              Supports: {accept.replace('image/*', 'Images')} (max {maxSizeKB}KB)
            </p>
          </div>
        )}
      </div>

      {/* Hidden Input field untuk registrasi ke form agar validasi 'required' tetap jalan jika perlu */}
      {/* Kita registrasikan dummy input atau gunakan input hidden dengan value URL */}
      <input 
        type="hidden" 
        {...register(name, validationRules)} 
      />

      {/* Error message */}
      {error && (
        <p id={errorId} className="font-lato-regular text-sm font-medium text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}