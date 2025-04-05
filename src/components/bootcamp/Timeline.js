"use client";

// Import Packages
import React from "react";
import Image from "next/image";

// Exported Component
export function Timeline() {
  // Page
  return (
    <section className="relative">
      {/* Content */}
      <div className="flex w-full items-center justify-center bg-[#E8E8E8] max-md:mt-[7vw]">
        {/* Container for the centered Timeline image */}
        <div className="relative flex items-center justify-center">
          {/* Green Star positioned absolutely relative to the container */}
          <Image
            src="/img/store/casebook/greenstar.png"
            alt="Star ornament"
            width={2000}
            height={2000}
            className="absolute -left-[14.5vw] top-[9vw] w-[10.531vw] object-cover"
          />
          {/* Blue Spark positioned absolutely relative to the container */}
          <Image
            src="/img/store/casebook/BlueSpark.png"
            alt="180DC UGM Casebook"
            width={2000}
            height={2000}
            className="z-5 absolute -right-[18vw] -top-[10vw] w-[24.008vw] object-cover max-lg:hidden"
          />
          {/* Centered Timeline image */}
          <Image
            src="/img/bootcamp/Timeline.png" // Replace with your image path
            alt="Centered Image"
            width={2000}
            height={2000}
            className="w-[80vw] max-w-full object-cover lg:w-[40vw]"
          />
        </div>
      </div>
    </section>
  );
}
