"use client";

import React, { useState, useRef } from "react";
import { UseFormRegister, FieldValues, Path, FieldError, UseFormWatch } from "react-hook-form";
import { Upload, X, FileCheck, Image as ImageIcon } from "lucide-react";

// --- 1. IMPORT KOMPONEN SHADCN ---
import { Label } from "@/components/elements/Form/label";
import { Button } from "@/components/elements/Form/button";

// Definisikan tipe props-nya
interface FileUploadFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  error?: FieldError;
  validationRules?: object;
  className?: string;
  accept?: string; // e.g., "image/*" or ".pdf,.jpg,.png"
  maxSizeKB?: number; // Max file size in KB
}

// Gunakan generic type <T>
export default function FileUploadField<T extends FieldValues>({
  label,
  name,
  register,
  watch,
  error,
  validationRules = {},
  className = "",
  accept = "image/*,.pdf",
  maxSizeKB = 500,
}: FileUploadFieldProps<T>) {
  const errorId = error ? `${name}-error` : undefined;
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileList = watch(name) as FileList | undefined;
  const currentFile = fileList && fileList.length > 0 ? fileList[0] : null;

  const { ref: registerRef, ...registerRest } = register(name, {
    ...validationRules,
    validate: {
      ...((validationRules as any)?.validate || {}),
      fileSize: (files: FileList) => {
        if (!files || files.length === 0) return true;
        const file = files[0];
        const maxSize = maxSizeKB * 1024; // Jadi 500 * 1024 bytes
        return file.size <= maxSize || `File size must be less than ${maxSizeKB}KB`; // Update teks error
      },
    },
  });

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
      const input = fileInputRef.current;
      if (input) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(e.dataTransfer.files[0]);
        input.files = dataTransfer.files;

        const event = new Event("change", { bubbles: true });
        input.dispatchEvent(event);
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      const event = new Event("change", { bubbles: true });
      fileInputRef.current.dispatchEvent(event);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const isImageFile = (file: File) => {
    return file.type.startsWith("image/");
  };

  const truncateFileName = (fileName: string, maxLength: number = 30) => {
    if (fileName.length <= maxLength) return fileName;

    const lastDotIndex = fileName.lastIndexOf(".");
    const extension = lastDotIndex !== -1 ? fileName.substring(lastDotIndex) : "";
    const nameWithoutExt = lastDotIndex !== -1 ? fileName.substring(0, lastDotIndex) : fileName;

    const extLength = extension.length;
    const availableLength = maxLength - extLength - 3;

    if (availableLength <= 0) return fileName.substring(0, maxLength - 3) + "...";
    const firstPart = nameWithoutExt.substring(0, availableLength);
    return `${firstPart}...${extension}`;
  };

  return (
    <div className={`grid w-full items-center gap-3 ${className}`}>
      <Label htmlFor={name} className={`font-avenir-regular ${error ? "text-red-500" : ""}`}>
        {label} <span className="text-red-500">*</span>
      </Label>
      <input
        type="file"
        id={name}
        accept={accept}
        className="hidden"
        {...registerRest}
        ref={(e) => {
          registerRef(e);
          fileInputRef.current = e;
        }}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={errorId}
      />
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative rounded-lg border-2 border-gray-400/30 transition-all duration-200 ${
          isDragging
            ? "border-green-300 bg-green-50"
            : error
              ? "border-red-300 bg-red-50"
              : currentFile
                ? "border-green-300/50"
                : "border-gray-300 bg-gray-50 hover:bg-green-50/50"
        }`}
      >
        {!currentFile ? (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-4 rounded-full bg-green-100 p-4">
              <Upload className="h-8 w-8 text-green-300" />
            </div>
            <p className="font-avenir-book mb-2 text-base font-semibold text-gray-700">
              Drop your file here, or{" "}
              <button
                type="button"
                onClick={handleButtonClick}
                className="text-green-300 underline hover:text-green-400"
              >
                browse
              </button>
            </p>
            <p className="font-lato-regular text-sm text-gray-500">
              Supports: Images (max {maxSizeKB}KB)
            </p>
          </div>
        ) : (
          // File preview when file is uploaded
          <div className="flex items-center gap-4 p-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-green-100/20">
              {isImageFile(currentFile) ? (
                <ImageIcon className="h-8 w-8 text-green-300" />
              ) : (
                <FileCheck className="h-8 w-8 text-green-300" />
              )}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="font-avenir-regular text-sm text-gray-900" title={currentFile.name}>
                {truncateFileName(currentFile.name, 35)}
              </p>
              <p className="font-lato-regular text-xs text-gray-500">
                {formatFileSize(currentFile.size)}
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleRemoveFile}
              className="flex-shrink-0 rounded-full bg-red-50 text-red-500 hover:bg-red-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p id={errorId} className="font-lato-regular text-sm font-medium text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}
