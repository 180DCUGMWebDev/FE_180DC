// Import Packages
import React from "react";
import Image from "next/image";

// Exported Component
export function TimelineCaseComp() {
  // Page
  return (
    <section className="relative">
      <Image
        src="/img/opreccycle/bgTimelineOprec.png"
        alt="background"
        width={2000}
        height={2000}
        className="absolute inset-0 -top-[20] z-[0] h-screen w-full max-lg:w-[200vw] max-lg:pb-[20vw] max-sm:pb-[70vw]"
      />
      {/* Content */}
      <div className="z-30 mb-[7vw] flex w-full items-center justify-center bg-[#E8E8E8]">
        {/* Container for the centered Timeline image */}
        <div className="relative mt-[3vw] flex flex-col items-center justify-center">
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
          <h1 className="font-latoBold text-[3.33vw] text-[#73B743]">Timeline</h1>

          <Image
            src="/img/opreccycle/TimelineOprec.png" // Replace with your image path
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
