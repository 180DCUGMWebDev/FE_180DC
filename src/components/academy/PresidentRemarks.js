// Import Packages
"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";
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
      <div className="flex w-full h-fit max-lg:py-[8vh] lg:h-screen items-center justify-center">
        {/* Desktop */}
        <div className="flex flex-col justify-center items-center relative max-lg:hidden">
          <div className="w-full ">
            <h1 className=" absolute z-1 bottom-[19vw] right-[17vw] bg-clip-text text-transparent bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] font-avenirRegular text-[15.625vw]">
              {"Preview"}
            </h1>
          </div>
          <div className="w-full ">
            <h1 className=" absolute z-1 top-[17vw] left-[17vw] bg-clip-text text-transparent bg-gradient-to-r from-[#58B9D1] to-[#6FAA26]  font-avenirRegular text-[15.625vw]">
              {"Preview"}
            </h1>
          </div>
          <div>
            <div className="w-full ">
              <h1 className="absolute z-[3] top-[25vw] right-[52.5vw] text-lightWhite font-avenirBlack text-[1.042vw] flex flex-col">
                Beatrice&nbsp;Sarah
              </h1>
              <h1 className="absolute z-[3] top-[26.2vw] right-[52.5vw] text-lightWhite font-avenirRegular text-[1.042vw] flex flex-col">
                President&nbsp;of&nbsp;180DC&nbsp;UGM&nbsp;23.24
              </h1>
            </div>
            <div></div>
          </div>
          <div className=" rounded-3xl  overflow-clip z-[2]">
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
        <div className="flex flex-col lg:hidden w-full items-center mb-[10vw] z-[2] ">
          <div className="w-[85vw] text-end h-[10.556vw] relative pb-[10vw]">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] font-avenirHeavy text-[9.722vw]">
              {"Preview"}
            </h1>
          </div>
          <div className="rounded-3xl overflow-clip ">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=zkgZ5LiRiZA"}
              controls={true}
              light={true}
              height="48vw"
              width="85vw"
            />
          </div>
          <div className="w-[85vw] text-start h-[10.556vw] relative pb-[10vw]">
            <div className="bg-clip-text pt-[2vw] text-transparent bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] font-avenirRegular text-[3.333vw]/[3vw]">
              <h1 className=" text-lightWhite font-avenirBlack  flex flex-col">
                Beatrice&nbsp;Sarah
              </h1>
              <h1 className=" text-lightWhite font-avenirRegular flex flex-col">
                President&nbsp;of&nbsp;180DC&nbsp;UGM&nbsp;23.24
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
