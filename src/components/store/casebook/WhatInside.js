"use client";

// Import Packages
import React from "react";
import Image from "next/image";

// Import Configs
import { createBackground } from "@/config/Functions";
import { useState, useEffect, useMemo } from "react";

export default function WhatInside() {
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
          src="/img/store/casebook/bgBlackPatterned1.png"
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
          <Image
            src="/img/store/casebook/BlueSpark.png"
            alt="180DC UGM Casebook"
            width={2000}
            height={2000}
            className="absolute -right-[10vw] -top-[2vw] z-0 w-[14.008vw] object-cover max-lg:hidden"
          />
          {/* Content */}
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="font-avenirHeavy text-[3.333vw] text-white">{"What's Inside?"}</h1>
            <div className="mt-[2vw] flex gap-[2vw]">
              <div className="relative flex h-[30.573vw] w-[24.167vw] flex-col items-center rounded-[1.25vw] bg-white">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute inset-0 left-[3vw] top-[3vw] h-[1.25vw] w-[6.25vw] object-cover max-lg:hidden"
                />
                <h1 className="mt-[6vw] w-[17.188vw] font-latoRegular text-[1.567vw]">
                  <span>All you need to know to ace </span>
                  <span className="font-bold underline">CV-making, Cover Letters,</span>
                  <span>and </span>
                  <span className="font-bold underline">Case-Based interview</span>
                </h1>
              </div>

              <div className="relative flex h-[30.573vw] w-[24.167vw] flex-col items-center rounded-[1.25vw] bg-white">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute inset-0 left-[3vw] top-[3vw] h-[1.25vw] w-[6.25vw] object-cover max-lg:hidden"
                />
                <h1 className="mt-[6vw] w-[17.188vw] font-latoRegular text-[1.567vw]">
                  <span>Case practices on Yogyakarta’s SMEs, including </span>
                  <span className="font-bold underline">
                    market entry, profitability, supply chain efficiency,
                  </span>
                  <span> and </span>
                  <span className="font-bold underline">employee retention case</span>
                </h1>
              </div>

              <div className="relative flex h-[30.573vw] w-[24.167vw] flex-col items-center rounded-[1.25vw] bg-white">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute inset-0 left-[3vw] top-[3vw] h-[1.25vw] w-[6.25vw] object-cover max-lg:hidden"
                />
                <h1 className="mt-[6vw] w-[17.188vw] font-latoRegular text-[1.567vw]">
                  <span>Duplicate </span>
                  <span className="font-bold underline">ghost deck & slide format examples </span>
                  <span>you can use to present your own business cases </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="z-[2] mb-[26.372vw] mt-[12.372vw] flex w-full flex-col items-center lg:hidden">
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="font-avenirHeavy text-[6.154vw] text-white">{"What's Inside?"}</h1>

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
                  <span>Case practices on Yogyakarta’s SMEs, including </span>
                  <span className="font-bold underline">
                    market entry, profitability, supply chain efficiency,
                  </span>
                  <span> and </span>
                  <span className="font-bold underline">employee retention case</span>
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
                  <span>Duplicate </span>
                  <span className="font-bold underline">ghost deck & slide format examples </span>
                  <span>you can use to present your own business cases </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
