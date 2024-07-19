// Import Packages
"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";
import dynamic from "next/dynamic";
import Image from "next/image";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function Module1Main() {
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
        <div className="flex justify-center items-center relative max-lg:hidden gap-x-[5vw] mt-[5vw]">
          {/* Kiri */}
          <div className="">
            <div>
              <h1 className="text-[1.563vw] text-white font-avenirBlack">
                Module 1
              </h1>
              <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-[#6FAA26] to-[#58B9D1]  font-avenirBlack text-[2.865vw]">
                {"Consulting 101"}
              </h1>
            </div>
            <div className="mt-[8vw]">
              <h1 className="text-[1.823vw] text-lightWhite font-avenirHeavy">
                Download E-Module!
              </h1>
              <div className="bg-white w-[21.354vw] h-[21.667vw] rounded-[1.302vw]">
                <Image
                  src="/img/academy/module1.png"
                  alt="background"
                  width={2000}
                  height={2000}
                  className="mx-auto w-[20.427vw] h-[10.938vw] object-cover max-lg:hidden"
                />
                <h1 className="text-[1.302vw] text-black font-avenirBlack">
                  Module 1
                </h1>
                <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-[#6FAA26] to-[#58B9D1]  font-avenirBlack text-[1.823vw]">
                  {"Consulting 101"}
                </h1>
                <div className="bg-white border-black border w-[19.427vw]  mx-auto mb-[0.2vw] rounded-[1.3vw] text-[1.563vw] text-center font-latoBold">
                  Download
                </div>
              </div>
            </div>
          </div>
          {/* Kanan */}
          <div className="w-[55.469vw]">
            <h1 className="text-[1.823vw]/[2vw] text-lightWhite font-avenirRegular text-justify">
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </h1>
            <div className=" rounded-3xl  overflow-clip z-[2] mt-[2.4vw]">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=zkgZ5LiRiZA"}
                controls={true}
                light={true}
                width="55.469vw"
                height="31.201vw"
              />
            </div>
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
