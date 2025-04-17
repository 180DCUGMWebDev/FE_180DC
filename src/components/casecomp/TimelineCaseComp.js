// Import Packages
import React from "react";
import Image from "next/image";

// Exported Component
export function TimelineCaseComp() {
  // Page
  return (
    <section className="relative aspect-[1920/1200] w-full">
      <Image
        src="/img/casecomp/bg-timeline-apac.png"
        alt="background"
        width={2000}
        height={2000}
        className="absolute inset-0 z-0 aspect-[1920/1200] w-full object-cover max-lg:hidden"
      />
      <Image
        src="/img/casecomp/bg-timeline-event-mobile.png"
        alt="background"
        width={2000}
        height={2000}
        className="absolute inset-0 z-0 aspect-[9/16] w-full object-cover lg:hidden"
      />

      {/* Content */}
      <div className="z-50 mb-[7vw] flex w-full items-center justify-center bg-[#E8E8E8]">
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
          <div className="font-latoBold text-[3.33vw] text-[#73B743] mt-[3vw] mb-[2vw]">
            <Image
            src="/img/casecomp/apactimelinetitle.png"
            alt=""
            width={2000}
            height={2000}
            className="w-[24.008vw] object-cover "
          />
          </div>


          <Image
            src="/img/casecomp/TimelineAPAC.png" // Replace with your image path
            alt="Centered Image"
            width={2000}
            height={2000}
            className="w-[80vw] max-w-full object-cover lg:w-[40vw] mb-[10vw]"
          />
        </div>
      </div>
    </section>
  );
}
