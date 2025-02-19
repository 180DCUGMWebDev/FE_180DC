// Import Packages
"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";
import dynamic from "next/dynamic";
import Image from "next/image";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function ModuleMain({ data }) {
  //Ignore Hydration Error
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="relative flex h-fit w-full items-center justify-center max-lg:py-[8vh] lg:h-screen">
        <a href="/academy" className="absolute left-[5vw] top-[9.5vw] h-[1.042vw] w-[0.625vw]">
          <Image
            src="/img/academy/arrow.png"
            alt="arrow"
            width={2000}
            height={2000}
            className="absolute mx-auto object-cover max-lg:hidden"
          />
        </a>
        {/* Desktop */}
        <div className="relative mt-[5vw] flex items-center justify-center gap-x-[5vw] max-lg:hidden">
          {/* Kiri */}
          <div className="">
            <div>
              <h1 className="font-avenirBlack text-[1.563vw] text-white">{data.type}</h1>
              <h1 className="bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text font-avenirBlack text-[2.865vw] text-transparent">
                {data.name}
              </h1>
            </div>
            <div className="mt-[8vw]">
              <h1 className="font-avenirHeavy text-[1.823vw] text-lightWhite">
                Download E-Module!
              </h1>
              <div className="flex h-[21.667vw] w-[21.354vw] flex-col rounded-[1.302vw] bg-white p-[1.302vw]">
                <Image
                  src="/img/academy/module1.png"
                  alt="module image"
                  width={2000}
                  height={2000}
                  className="mx-auto h-[10.938vw] w-[20.427vw] object-cover max-lg:hidden"
                />
                <div className="mt-[1vw] text-[1.2vw]/[1.7vw]">
                  <h1 className="font-avenirBlack text-[1.302vw] text-black">{data.type}</h1>
                  <h1 className="h-[1.8vw] bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text font-avenirBlack text-[1.823vw] text-transparent">
                    {data.name}
                  </h1>
                </div>
                <a
                  href="https://docs.google.com/presentation/d/1Qv1JAEbbzToe7ErGKi9j5mVo-BuR4UWQBoDmpOmiiuQ"
                  className="mt-[1vw] flex h-[3.927vw] w-[19.427vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center font-latoBold text-[1.042vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
          {/* Kanan */}
          <div className="w-[55.469vw]">
            <h1 className="text-justify font-avenirRegular text-[1.823vw]/[2vw] text-lightWhite">
              In this module, you will learn the basics to consulting through problem identification
              and formulation of a proper logical approach. You will learn frameworks like MECE,
              develop analysis, and deliver spot-on solutions.
            </h1>
            <div className="z-[2] mt-[2.4vw] overflow-clip rounded-3xl">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=jETOvv9PzTo"}
                controls={true}
                light={true}
                width="55.469vw"
                height="31.201vw"
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="relative z-[2] mt-[20.372vw] flex w-full flex-col items-center lg:hidden">
          <div className="relative flex w-[81.944vw] text-[2vw]/[7vw]">
            <a
              href="/academy"
              className="absolute -left-[3.7vw] top-[2.5vw] h-[3.056vw] w-[1.944vw]"
            >
              <Image
                src="/img/academy/arrow.png"
                alt="arrow"
                width={2000}
                height={2000}
                className="h-[3.056vw] w-[1.944vw] object-cover lg:hidden"
              />
            </a>
            <div className="h-[16.111vw]">
              <h1 className="font-avenirHeavy text-[5.556vw] text-white">Module 1</h1>
              <h1 className="h-[8vw] bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text font-avenirBlack text-[7.222vw] text-transparent">
                {"Consulting 101"}
              </h1>
            </div>
          </div>

          <div className="my-[3vw] overflow-clip rounded-xl">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=jETOvv9PzTo"}
              controls={true}
              light={true}
              height="45.556vw"
              width="81.944vw"
            />
          </div>

          <h1 className="w-[81.944vw] text-justify font-avenirRegular text-[3.333vw]/[3.1vw] text-lightWhite">
            In this module, you will learn the basics to consulting through problem identification
            and formulation of a proper logical approach. You will learn frameworks like MECE,
            develop analysis, and deliver spot-on solutions.
          </h1>

          <div className="relative mb-[2vw] mt-[4vw] flex w-[81.944vw] justify-end text-[2vw]/[7vw]">
            <h1 className="font-avenirRegular text-[4.167vw] text-lightWhite">
              Download E-Module!
            </h1>
          </div>

          <div className="relative flex h-[21.742vw] w-[81.944vw] rounded-md bg-white">
            <Image
              src="/img/academy/module1.png"
              alt="module image"
              width={2000}
              height={2000}
              className="my-[auto] ml-[1.5vw] h-[17.392vw] w-[30.639vw] object-cover lg:hidden"
            />
            <div className="mb-[2vw] flex flex-col justify-end text-[2vw]/[4.3vw]">
              <h1 className="font-avenirBlack text-[3.333vw] text-black">Module 1</h1>
              <h1 className="h-[5vw] bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text font-avenirBlack text-[4.722vw] text-transparent">
                {"Consulting 101"}
              </h1>
            </div>
            <a
              href="https://docs.google.com/presentation/d/1Qv1JAEbbzToe7ErGKi9j5mVo-BuR4UWQBoDmpOmiiuQ"
              className="mx-auto my-auto h-[8.572vw] w-[7.347vw] rounded-lg border border-black bg-white transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
            >
              <Image
                src="/img/academy/ArrowDownload.png"
                alt="Download Arrow"
                width={200000}
                height={200000}
                className="mx-auto my-[1.5vw] w-[2.939vw] object-cover lg:hidden"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
