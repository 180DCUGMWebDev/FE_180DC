// Import Packages
"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";
import dynamic from "next/dynamic";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function SecondPage() {
  //Ignore Hydration Error
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("light")}

      {/* Content */}
      <div className="flex w-full h-fit max-lg:py-[8vh] lg:h-screen items-center justify-center">
        
        {/* Desktop */}
        <div className="flex flex-col justify-center items-center px-[6vw] 2xl:w-[1536px] 2xl:px-[100px] max-lg:hidden">
          {/* Title */}
          <div className="w-full">
            <h1 className="text-center text-lightWhite lg:text-primary text-[8vw]/[7.2vw] lg:text-[4vw]/[3.8vw] font-avenirBlack 2xl:text-[61px]/[58px]">
              {"Dummy 180DC Academy"}
            </h1>
          </div>
          <div className="pt-[3vh]">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=zkgZ5LiRiZA"}
              controls={true}
              light={true}
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
