// Import Packages
"use client";

import React from "react";
import dynamic from "next/dynamic";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function PresidentRemarks() {
  //Ignore Hydration Error
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center max-lg:py-[8vh] lg:h-screen">
        {/* Desktop */}
        <div className="relative flex flex-col items-center justify-center max-lg:hidden">
          <div className="w-full">
            <h1 className="z-1 absolute bottom-[19vw] right-[17vw] bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text font-avenirRegular text-[15.625vw] text-transparent">
              {"Preview"}
            </h1>
          </div>
          <div className="w-full">
            <h1 className="z-1 absolute left-[17vw] top-[17vw] bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text font-avenirRegular text-[15.625vw] text-transparent">
              {"Preview"}
            </h1>
          </div>
          <div>
            <div className="w-full">
              <h1 className="absolute right-[52.5vw] top-[25vw] z-[3] flex flex-col font-avenirBlack text-[1.042vw] text-lightWhite">
                Beatrice&nbsp;Sarah
              </h1>
              <h1 className="absolute right-[52.5vw] top-[26.2vw] z-[3] flex flex-col font-avenirRegular text-[1.042vw] text-lightWhite">
                President&nbsp;of&nbsp;180DC&nbsp;UGM&nbsp;23.24
              </h1>
            </div>
            <div></div>
          </div>
          <div className="z-[2] overflow-clip rounded-3xl">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=zkgZ5LiRiZA"}
              controls={true}
              light={true}
              width="50.833vw"
              height="28.594vw"
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="z-[2] mb-[10vw] flex w-full flex-col items-center lg:hidden">
          <div className="relative h-[10.556vw] w-[85vw] pb-[10vw] text-end">
            <h1 className="bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text font-avenirHeavy text-[9.722vw] text-transparent">
              {"Preview"}
            </h1>
          </div>
          <div className="overflow-clip rounded-3xl">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=zkgZ5LiRiZA"}
              controls={true}
              light={true}
              height="48vw"
              width="85vw"
            />
          </div>
          <div className="relative h-[10.556vw] w-[85vw] pb-[10vw] text-start">
            <div className="bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text pt-[2vw] font-avenirRegular text-[3.333vw]/[3vw] text-transparent">
              <h1 className="flex flex-col font-avenirBlack text-lightWhite">
                Beatrice&nbsp;Sarah
              </h1>
              <h1 className="flex flex-col font-avenirRegular text-lightWhite">
                President&nbsp;of&nbsp;180DC&nbsp;UGM&nbsp;23.24
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
