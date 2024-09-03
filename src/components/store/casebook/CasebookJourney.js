"use client";

// Import Packages
import React from "react";
import Image from "next/image";

// Import Configs
import { createBackground } from "@/config/Functions";
import { useState, useEffect, useMemo } from "react";

export default function CasebookJourney() {
  const [windowSize, setWindowSize] = useState();

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const memoizedWindowSize = useMemo(() => windowSize < 768, [windowSize]);
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center max-lg:py-[8vh] lg:h-screen">
        <Image
          src="/img/store/casebook/bgBlackPatterned2.png"
          alt="180DC UGM Casebook"
          width={2000}
          height={2000}
          className="absolute inset-0 z-0 h-full w-full object-cover max-lg:hidden"
        />
        <Image
          src="/img/store/casebook/bgBlackPatternedMobile.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-0 w-full object-cover lg:hidden"
        />

        {/* Desktop */}
        <div className="relative flex flex-col items-center justify-center max-lg:hidden">
          {/* Content */}
          <div className="flex w-full flex-col items-center justify-center">
            <div className="mb-[2vw] flex flex-col items-center justify-center">
              <h1 className="font-avenirHeavy text-[3.333vw]/[3vw] text-white">CASEBOOK</h1>
              <h1 className="font-avenirHeavy text-[3.333vw]/[3vw] text-white">Journey</h1>
            </div>

            <div className="relative ml-[4vw]">
              <Image
                src="/img/store/casebook/LineBeside.png"
                alt="background"
                width={2000}
                height={2000}
                className="absolute -left-[5vw] top-[3vw] z-0 h-[35.313vw] w-[1.446vw] object-cover max-lg:hidden"
              />
              <div className="mb-[2vw] h-[15.625vw] w-[47.917vw] rounded-[1.25vw] bg-white px-[2vw] py-[2vw]">
                <h1 className="font-avenirBlack text-[1.25vw] text-[#6FAA26] ">August 2021</h1>
                <h1 className="font-avenirBlack text-[1.667vw] text-[#58B9D1]">Our Mini Casebook was published.</h1>
                <h1 className="w-[42.917vw] font-latoRegular text-[1.25vw]/[1.25vw] text-black">
                  180 DC UGM Mini Casebook is our initial version of delivering Consulting 101
                  materials, as well as case interview practices and a step-by-step guide on how to
                  solve a typical business case, which was loved by thousands of you
                </h1>
              </div>
              <div className="mb-[2vw] h-[20.521vw] w-[47.917vw] rounded-[1.25vw] bg-white"> </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="z-[2] mb-[26.372vw] mt-[12.372vw] flex w-full flex-col items-center lg:hidden">
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="font-avenirHeavy text-[6.154vw] text-white"> What's Inside?</h1>

            <div className="mt-[10vw]">
              <div className="relative flex h-[82.051vw] w-[81.538vw] flex-col items-center justify-center rounded-[4.103vw] bg-white">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute inset-0 left-[27.5vw] top-[12vw] h-[4.103vw] w-[25.641vw] object-cover lg:hidden"
                />
                <h1 className="mt-[6vw] w-[67.179vw] px-[2vw] text-center font-latoRegular text-[4.303vw]/[4.4vw]">
                  <span>All you need to know to ace </span>
                  <span className="font-bold underline">CV-making, Cover Letters,</span>
                  <span>and </span>
                  <span className="font-bold underline">Case-Based interview</span>
                </h1>
              </div>
              <div className="relative mt-[5vw] flex h-[82.051vw] w-[81.538vw] flex-col items-center justify-center rounded-[4.103vw] bg-white">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute inset-0 left-[27.5vw] top-[12vw] h-[4.103vw] w-[25.641vw] object-cover lg:hidden"
                />
                <h1 className="mt-[6vw] w-[67.179vw] px-[2vw] text-center font-latoRegular text-[4.303vw]/[4.4vw]">
                  <span>All you need to know to ace </span>
                  <span className="font-bold underline">CV-making, Cover Letters,</span>
                  <span>and </span>
                  <span className="font-bold underline">Case-Based interview</span>
                </h1>
              </div>
              <div className="relative mt-[5vw] flex h-[82.051vw] w-[81.538vw] flex-col items-center justify-center rounded-[4.103vw] bg-white">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute inset-0 left-[27.5vw] top-[12vw] h-[4.103vw] w-[25.641vw] object-cover lg:hidden"
                />
                <h1 className="mt-[6vw] w-[67.179vw] px-[2vw] text-center font-latoRegular text-[4.303vw]/[4.4vw]">
                  <span>All you need to know to ace </span>
                  <span className="font-bold underline">CV-making, Cover Letters,</span>
                  <span>and </span>
                  <span className="font-bold underline">Case-Based interview</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
