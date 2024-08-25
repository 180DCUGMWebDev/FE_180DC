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
      <div className="flex w-full h-fit max-lg:py-[8vh] lg:h-screen items-center justify-center relative">
        <a
          href="/academy"
          className="absolute left-[5vw] top-[9.5vw] w-[0.625vw] h-[1.042vw]"
        >
          <Image
            src="/img/academy/arrow.png"
            alt="arrow"
            width={2000}
            height={2000}
            className="mx-auto absolute  object-cover max-lg:hidden"
          />
        </a>
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
              <div className="bg-white w-[21.354vw] h-[21.667vw] rounded-[1.302vw] flex flex-col p-[1.302vw]">
                <Image
                  src="/img/academy/module1.png"
                  alt="module image"
                  width={2000}
                  height={2000}
                  className="mx-auto w-[20.427vw] h-[10.938vw] object-cover max-lg:hidden"
                />
                <div className="text-[1.2vw]/[1.7vw] mt-[1vw]">
                  <h1 className="text-[1.302vw] text-black font-avenirBlack">
                    Module 1
                  </h1>
                  <h1 className="h-[1.8vw] bg-clip-text text-transparent bg-gradient-to-r from-[#6FAA26] to-[#58B9D1]  font-avenirBlack text-[1.823vw]">
                    {"Consulting 101"}
                  </h1>
                </div>
                <a
                  href="https://docs.google.com/presentation/d/1Qv1JAEbbzToe7ErGKi9j5mVo-BuR4UWQBoDmpOmiiuQ"
                  className="bg-white font-latoBold text-[1.042vw] border-black border w-[19.427vw] h-[3.927vw] rounded-[1.3vw] mt-[1vw] text-center flex items-center justify-center hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
          {/* Kanan */}
          <div className="w-[55.469vw]">
            <h1 className="text-[1.823vw]/[2vw] text-lightWhite font-avenirRegular text-justify">
              In this module, you will learn the basics to consulting through
              problem identification and formulation of a proper logical
              approach. You will learn frameworks like MECE, develop analysis,
              and deliver spot-on solutions.
            </h1>
            <div className=" rounded-3xl  overflow-clip z-[2] mt-[2.4vw]">
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
        <div className="flex flex-col lg:hidden w-full items-center  z-[2] mt-[20.372vw] relative">
          <div className="flex w-[81.944vw] text-[2vw]/[7vw] relative">
            <a
              href="/academy"
              className="w-[1.944vw] h-[3.056vw] absolute -left-[3.7vw] top-[2.5vw]"
            >
              <Image
                src="/img/academy/arrow.png"
                alt="arrow"
                width={2000}
                height={2000}
                className="object-cover lg:hidden w-[1.944vw] h-[3.056vw] "
              />
            </a>
            <div className="h-[16.111vw]">
              <h1 className="text-[5.556vw] text-white font-avenirHeavy">
                Module 1
              </h1>
              <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] h-[8vw]  font-avenirBlack text-[7.222vw]">
                {"Consulting 101"}
              </h1>
            </div>
          </div>

          <div className="my-[3vw] rounded-xl overflow-clip">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=jETOvv9PzTo"}
              controls={true}
              light={true}
              height="45.556vw"
              width="81.944vw"
            />
          </div>

          <h1 className="text-[3.333vw]/[3.1vw] w-[81.944vw] text-lightWhite font-avenirRegular text-justify">
            In this module, you will learn the basics to consulting through
            problem identification and formulation of a proper logical approach.
            You will learn frameworks like MECE, develop analysis, and deliver
            spot-on solutions.
          </h1>

          <div className="flex w-[81.944vw] text-[2vw]/[7vw] relative justify-end mt-[4vw] mb-[2vw]">
            <h1 className="font-avenirRegular text-lightWhite text-[4.167vw] ">
              Download E-Module!
            </h1>
          </div>

          <div className="flex w-[81.944vw] h-[21.742vw] relative bg-white rounded-md ">
            <Image
              src="/img/academy/module1.png"
              alt="module image"
              width={2000}
              height={2000}
              className="w-[30.639vw] h-[17.392vw] object-cover lg:hidden my-[auto] ml-[1.5vw]"
            />
            <div className="text-[2vw]/[4.3vw] flex flex-col justify-end mb-[2vw]">
              <h1 className="text-[3.333vw] text-black font-avenirBlack">
                Module 1
              </h1>
              <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-[#6FAA26] to-[#58B9D1]  font-avenirBlack text-[4.722vw] h-[5vw]">
                {"Consulting 101"}
              </h1>
            </div>
            <a
              href="https://docs.google.com/presentation/d/1Qv1JAEbbzToe7ErGKi9j5mVo-BuR4UWQBoDmpOmiiuQ"
              className="w-[7.347vw] h-[8.572vw] border-black border bg-white my-auto mx-auto rounded-lg hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
            >
              <Image
                src="/img/academy/ArrowDownload.png"
                alt="Download Arrow"
                width={200000}
                height={200000}
                className="w-[2.939vw] object-cover lg:hidden mx-auto my-[1.5vw] "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
