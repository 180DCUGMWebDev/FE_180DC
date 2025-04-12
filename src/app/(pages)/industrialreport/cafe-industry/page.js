"use client";
import React from "react";
import { createBackground } from "@/config/Functions";
import Image from "next/image";

export default function CafeIndustries() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/file/ADLReport.pdf";
    link.download = "CafeIndustries-Report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const redirectToDrive = () => {
    window.open(
      "https://drive.google.com/file/d/1-b-srMHzofqIB-TW4IKtaBNzvWlFisqW/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <section className="relative min-h-screen">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="relative mt-[5vh] flex w-full flex-col items-center justify-center px-4 py-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
           <span className="text-teal-400">Café Industries</span>
          </h2>
        </div>

        {/* Desktop Version */}
        <div className="relative hidden w-full max-w-xs rounded-2xl sm:max-w-md md:block md:max-w-2xl lg:max-w-3xl">
          <div className="relative aspect-[3/5] w-full scale-[0.9] md:aspect-[4/3] lg:aspect-[12/9]">
            <iframe
              src="/file/ADLReport.pdf"
              className="absolute inset-0 h-full w-full border-2 border-gray-700 bg-gray-800"
              title="PDF Viewer"
            ></iframe>
          </div>
          <div className="my-4 w-full rounded-lg bg-transparent py-2 text-center text-sm font-semibold shadow-md">
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
              For Better Resolution:
            </span>
          </div>
          <button
            onClick={handleDownload}
            className="mb-3 flex w-full items-center justify-center rounded-lg bg-teal-600 py-4 font-medium text-white shadow-lg hover:bg-teal-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download File
          </button>
          <button
            onClick={redirectToDrive}
            className="mb-6 flex w-full items-center justify-center rounded-lg bg-blue-600 py-4 font-medium text-white shadow-lg hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.545 5.555L14.73 4.29l.28-.29c.58-.58 1.59-.58 2.17 0l.28.29-.85 1.265zm-3.38 5.212L7.55 5.555l1.41-2.117 4.62 5.212-1.41 2.117zm-2.46 3.704l-2.9-4.355 1.415-2.117 2.9 4.35-1.415 2.122zm8.77-2.117l-4.62-5.208 1.41-2.122L20 10.383l-1.53 2.17z" />
            </svg>
            View on Google Drive
          </button>
        </div>

        {/* Mobile Version */}
        <div className="flex w-full max-w-xs flex-col items-center md:hidden">
          {/* Cover Image (9:16 aspect ratio) */}
          <div className="relative mb-6 aspect-[11/16] w-full overflow-hidden rounded-lg border-2 border-gray-700">
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
            className="mb-3 flex w-full items-center justify-center rounded-lg bg-teal-600 py-4 font-medium text-white shadow-lg hover:bg-teal-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download File
          </button>

          {/* Google Drive Link */}
          <button
            onClick={redirectToDrive}
            className="mb-6 flex w-full items-center justify-center rounded-lg bg-blue-600 py-4 font-medium text-white shadow-lg hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.545 5.555L14.73 4.29l.28-.29c.58-.58 1.59-.58 2.17 0l.28.29-.85 1.265zm-3.38 5.212L7.55 5.555l1.41-2.117 4.62 5.212-1.41 2.117zm-2.46 3.704l-2.9-4.355 1.415-2.117 2.9 4.35-1.415 2.122zm8.77-2.117l-4.62-5.208 1.41-2.122L20 10.383l-1.53 2.17z" />
            </svg>
            View on Google Drive
          </button>

          {/* Desktop Recommendation Message */}
          <div className="rounded-lg bg-gray-800 bg-opacity-70 px-4 py-3 text-center text-sm text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            For embedded version, open with desktop
          </div>
        </div>

        {/* Decorative Elements - responsive positioning */}
        <div className="absolute left-10 top-1/4 hidden text-4xl text-blue-300 opacity-70 md:left-20 md:block md:text-5xl">
          ✦
        </div>
        <div className="absolute bottom-1/4 right-10 hidden text-4xl text-green-400 opacity-70 md:right-20 md:block md:text-5xl">
          ✦
        </div>
      </div>
    </section>
  );
}
