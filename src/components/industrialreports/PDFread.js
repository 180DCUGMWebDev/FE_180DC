// Import Packages
"use client";

import React from "react";
import { createBackground } from "@/config/Functions";

export default function PDFRead() {
  return (
    <section className="relative min-h-screen">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="relative flex flex-col w-full items-center justify-center py-16 px-4 mt-[5vh]">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Industrial Report: <span className="text-teal-400">Café Industries</span></h2>
        </div>
        
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl rounded-2xl">
          {/* PDF Viewer with Controls */}
          
          
          {/* PDF container with aspect ratio */}
          <div className="w-full scale-[0.9] aspect-[3/5] md:aspect-[4/3] lg:aspect-[12/9] relative">
            <iframe
              src="/file/ADLReport.pdf"
              className="absolute inset-0 w-full h-full border-2 border-gray-700 bg-gray-800"
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
        
        {/* Decorative Elements - responsive positioning */}
        <div className="hidden md:block absolute top-1/4 left-10 md:left-20 text-blue-300 text-4xl md:text-5xl opacity-70">✦</div>
        <div className="hidden md:block absolute bottom-1/4 right-10 md:right-20 text-green-400 text-4xl md:text-5xl opacity-70">✦</div>
      </div>
    </section>
  );
}