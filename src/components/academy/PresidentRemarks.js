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
        <div className="flex flex-col lg:hidden w-full items-center mb-[40vw] z-[2] mt-[24.372vw]">
          <div className="text-[8.6vw] text-primary font-avenirBlack ">
            Mobile View{" "}
          </div>
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=zkgZ5LiRiZA"}
            controls={true}
            light={true}
            height="48vw"
            width="85vw"
          />
        </div>
      </div>
    </section>
  );
}
