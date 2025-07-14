"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/element/Button";

export default function ReapraPDFViewer() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const pdfData = {
    title: "Reapra Report",
    filename: "ReapraReport.pdf",
    path: "/file/ReapraReport.pdf",
    description:
      "Comprehensive analysis and findings from the Reapra project conducted by 180DC UGM.",
    fileSize: "2.1 MB",
    lastUpdated: "2024",
  };

  const handlePDFLoad = () => {
    setIsLoading(false);
    setError(false);
  };

  const handlePDFError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Header */}
      <section className="border-b border-white/10 px-[5%] py-6 sm:px-[10%] lg:px-[4%]">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="mb-4 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/oprec" className="transition-colors hover:text-primary">
              Resources
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">PDF Viewer</span>
          </nav>

          {/* PDF Info */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                <svg className="h-6 w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-avenirBlack text-xl text-white lg:text-2xl">{pdfData.title}</h1>
                <p className="text-sm text-white/60">{pdfData.description}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={pdfData.path} download={pdfData.filename} className="inline-block">
                <Button
                  color="green"
                  text="Download PDF"
                  addClass="w-full sm:w-auto px-6 py-2.5 font-medium transition-all duration-200 hover:scale-105"
                />
              </a>
              <a
                href={pdfData.path}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  color="transparent"
                  text="Open in New Tab"
                  addClass="w-full sm:w-auto border border-white/20 px-6 py-2.5 text-white hover:bg-white/10 transition-all duration-200"
                />
              </a>
            </div>
          </div>

          {/* File Details */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
            <span>File Size: {pdfData.fileSize}</span>
            <span>•</span>
            <span>Last Updated: {pdfData.lastUpdated}</span>
            <span>•</span>
            <span>Format: PDF</span>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="flex-1 px-[2%] py-6 sm:px-[5%] lg:px-[2%]">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
            {/* Loading State */}
            {isLoading && (
              <div className="flex h-[80vh] items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                  <p className="text-white/60">Loading PDF...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="flex h-[80vh] items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <svg
                      className="h-12 w-12 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-avenirBlack text-lg text-white">Failed to Load PDF</h3>
                  <p className="mb-4 text-white/60">
                    The PDF file could not be displayed in the browser.
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                    <a href={pdfData.path} download={pdfData.filename} className="inline-block">
                      <Button
                        color="green"
                        text="Download Instead"
                        addClass="w-full sm:w-auto px-6 py-2.5"
                      />
                    </a>
                    <button onClick={() => window.location.reload()} className="inline-block">
                      <Button
                        color="transparent"
                        text="Try Again"
                        addClass="w-full sm:w-auto border border-white/20 px-6 py-2.5 text-white hover:bg-white/10"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* PDF Embed */}
            <iframe
              src={`${pdfData.path}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
              width="100%"
              height="800"
              title={pdfData.title}
              className={`${isLoading || error ? "hidden" : "block"} min-h-[80vh]`}
              onLoad={handlePDFLoad}
              onError={handlePDFError}
            />
          </div>

          {/* PDF Controls */}
          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-white/60">
                💡 Tip: Use Ctrl+F (Cmd+F on Mac) to search within the document
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                >
                  Print
                </button>
                <button
                  onClick={() => {
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    } else {
                      document.querySelector("iframe")?.requestFullscreen();
                    }
                  }}
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                >
                  Fullscreen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-white/10 px-[5%] py-6 sm:px-[10%] lg:px-[4%]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/oprec" className="inline-block">
              <Button
                color="transparent"
                text="← Back to Resources"
                addClass="border border-white/20 px-6 py-2.5 text-white hover:bg-white/10 transition-all duration-200"
              />
            </Link>

            <div className="text-sm text-white/60">
              Having trouble viewing? Try{" "}
              <a
                href={pdfData.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                opening in a new tab
              </a>{" "}
              or{" "}
              <a
                href={pdfData.path}
                download={pdfData.filename}
                className="text-primary hover:underline"
              >
                downloading the file
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
