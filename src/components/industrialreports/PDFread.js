"use client";
import React from "react";
import { createBackground } from "@/config/Functions";
import Image from "next/image";

export default function PDFRead() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/file/ADLReport.pdf';
    link.download = 'CafeIndustries-Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const redirectToDrive = () => {
    window.open("https://drive.google.com/file/d/1-b-srMHzofqIB-TW4IKtaBNzvWlFisqW/view?usp=sharing", "_blank");
  };

  return (
    <section className="relative min-h-screen">
      {/* Background */}
      {createBackground("dark")}
      
      {/* Content */}
      <div className="relative flex flex-col w-full items-center justify-center py-8 px-4 mt-[5vh]">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Industrial Report: <span className="text-teal-400">Café Industries</span></h2>
        </div>
        
        {/* Desktop Version */}
        <div className="hidden md:block relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl rounded-2xl">
          <div className="w-full scale-[0.9] aspect-[3/5] md:aspect-[4/3] lg:aspect-[12/9] relative">
            <iframe
              src="/file/ADLReport.pdf"
              className="absolute inset-0 w-full h-full border-2 border-gray-700 bg-gray-800"
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
        
        {/* Mobile Version */}
        <div className="md:hidden flex flex-col items-center w-full max-w-xs">
          {/* Cover Image (9:16 aspect ratio) */}
          <div className="w-full aspect-[11/16] relative mb-6 overflow-hidden rounded-lg border-2 border-gray-700">
            <Image 
              src="/img/industrialreport/IR1.png"
              alt="Café Industries Report Cover"
              layout="fill"
              objectFit="cover"
              className="bg-gray-800"
              unoptimized={true}
            />
          </div>
          
          {/* Download Button */}
          <button 
            onClick={handleDownload}
            className="w-full py-4 mb-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg flex items-center justify-center shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download File
          </button>
          
          {/* Google Drive Link */}
          <button 
            onClick={redirectToDrive}
            className="w-full py-4 mb-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.545 5.555L14.73 4.29l.28-.29c.58-.58 1.59-.58 2.17 0l.28.29-.85 1.265zm-3.38 5.212L7.55 5.555l1.41-2.117 4.62 5.212-1.41 2.117zm-2.46 3.704l-2.9-4.355 1.415-2.117 2.9 4.35-1.415 2.122zm8.77-2.117l-4.62-5.208 1.41-2.122L20 10.383l-1.53 2.17z" />
            </svg>
            View on Google Drive
          </button>
          
          {/* Desktop Recommendation Message */}
          <div className="text-center px-4 py-3 bg-gray-800 bg-opacity-70 rounded-lg text-white text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            For embedded version, open with desktop
          </div>
        </div>
        
        {/* Decorative Elements - responsive positioning */}
        <div className="hidden md:block absolute top-1/4 left-10 md:left-20 text-blue-300 text-4xl md:text-5xl opacity-70">✦</div>
        <div className="hidden md:block absolute bottom-1/4 right-10 md:right-20 text-green-400 text-4xl md:text-5xl opacity-70">✦</div>
      </div>
    </section>
  );
}