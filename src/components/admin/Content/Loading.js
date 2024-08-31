// Loading.js
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-primary bg-opacity-10 z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-700 font-semibold">Loading...</p>
    </div>
  );
}
