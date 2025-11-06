"use client";
import React from "react";
import { createBackground } from "@/config/Functions";
import Image from "next/image";
import { IndustrialReport } from "./data";
import { Download, ExternalLink } from "lucide-react";
import Container from "@/components/layout/Container";
import Button180 from "@/components/elements/Button180";

interface IndustrialReportsDetailProps {
  report: IndustrialReport;
}

export default function IndustrialReportsDetail({ report }: IndustrialReportsDetailProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = report.pdfFile;
    link.download = report.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const redirectToDrive = () => {
    window.open(report.driveLink, "_blank");
  };

  return (
    <Container color="dark" className="min-h-screen">
      {/* Content */}
      <div className="font-lato-regular relative z-10 flex flex-col gap-5 px-[5%] py-16 text-gray-100 lg:px-[26%]">
        {/* Title */}
        <div className="flex w-full items-center justify-center">
          <div className="w-fit rounded-[24px] bg-white px-6 py-2">
            <h1 className="font-avenir-regular text-center text-base">
              <span className="text-black">Industrial Reports:</span>
              <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                {" "}
                {report.title}
              </span>
            </h1>
          </div>
        </div>
        {/* Media Viewer Section */}
        <div className="relative w-full">
          {/* Desktop PDF Viewer */}
          <div className="bg-black-400/50 relative hidden aspect-[21/29.7] w-full overflow-hidden rounded-[10px] border-[1px] border-gray-400/30 lg:block">
            <iframe
              src={report.pdfFile}
              className="h-full w-full"
              title={`${report.title} PDF Viewer`}
            />
          </div>

          {/* Mobile Cover Image */}
          <div className="relative block aspect-[9/12] w-full overflow-hidden rounded-[20px] border-2 border-gray-400/30 lg:hidden">
            <Image
              src={report.coverImage}
              alt={`${report.title} Cover`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Subtitle */}
          <h2 className="mt-10 text-center text-lg text-gray-300 lg:text-2xl">{report.subtitle}</h2>

          {/* Description */}
          <p className="text-center text-base leading-relaxed text-gray-400 lg:text-lg">
            {report.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row lg:gap-5">
            <Button180 onClick={handleDownload} text="Download PDF" icon={<Download />} />
            <Button180 onClick={redirectToDrive} text="View on Drive" icon={<ExternalLink />} />
          </div>

          {/* Mobile Message */}
          <div className="mt-4 text-center text-sm text-gray-400 lg:hidden">
            <p>For a better experience, view the embedded PDF on a desktop.</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[20%] left-[5%] hidden text-5xl text-green-300/30 lg:block lg:text-6xl">
        ✦
      </div>
      <div className="absolute right-[5%] bottom-[20%] hidden text-5xl text-cyan-300/30 lg:block lg:text-6xl">
        ✦
      </div>
    </Container>
  );
}
