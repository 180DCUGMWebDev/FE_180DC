// Import Packages
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import Image from "next/image";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function WhatInside() {
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex w-full h-fit max-lg:py-[8vh] lg:h-screen items-center justify-center ">
        <Image
          src="/img/store/casebook/bgBlackPatterned.png"
          alt="180DC UGM Casebook"
          width={2000}
          height={2000}
          className="absolute z-0  inset-0 w-full h-full object-cover max-lg:hidden"
        />
        <Image
          src="/img/store/casebook/bgBlackPatternedMobile.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute z-0 inset-0 w-full object-cover lg:hidden"
        />
        {/* Desktop */}
        <div className="flex flex-col justify-center items-center max-lg:hidden relative">
          {/* Content */}
          <div className="w-full flex flex-col justify-center items-center ">
            <h1 className="text-[3.333vw] text-white font-avenirHeavy">
              {" "}
              What's Inside?
            </h1>

            <div className="flex gap-[2vw] mt-[2vw]">
              <div className="w-[24.167vw] h-[30.573vw] bg-white rounded-[1.25vw] flex flex-col items-center relative  ">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute top-[3vw] left-[3vw] inset-0 w-[6.25vw] h-[1.25vw] object-cover max-lg:hidden"
                />
                <h1 className="w-[17.188vw]  text-[1.567vw] font-latoRegular mt-[6vw] ">
                  <span>All you need to know to ace </span>
                  <span className="font-bold underline">
                    CV-making, Cover Letters,
                  </span>
                  <span>and </span>
                  <span className="font-bold underline">
                    Case-Based interview
                  </span>
                </h1>
              </div>

              <div className="w-[24.167vw] h-[30.573vw] bg-white rounded-[1.25vw] flex flex-col items-center relative ">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute top-[3vw] left-[3vw] inset-0 w-[6.25vw] h-[1.25vw] object-cover max-lg:hidden"
                />
                <h1 className="w-[17.188vw]  text-[1.567vw] font-latoRegular mt-[6vw] ">
                  <span>All you need to know to ace </span>
                  <span className="font-bold underline">
                    CV-making, Cover Letters,
                  </span>
                  <span>and </span>
                  <span className="font-bold underline">
                    Case-Based interview
                  </span>
                </h1>
              </div>

              <div className="w-[24.167vw] h-[30.573vw] bg-white rounded-[1.25vw] flex flex-col items-center relative ">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute top-[3vw] left-[3vw] inset-0 w-[6.25vw] h-[1.25vw] object-cover max-lg:hidden"
                />
                <h1 className="w-[17.188vw]  text-[1.567vw] font-latoRegular mt-[6vw] ">
                  <span>All you need to know to ace </span>
                  <span className="font-bold underline">
                    CV-making, Cover Letters,
                  </span>
                  <span>and </span>
                  <span className="font-bold underline">
                    Case-Based interview
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col lg:hidden w-full items-center z-[2] mt-[12.372vw] mb-[26.372vw]">
          <div className="w-full flex flex-col justify-center items-center ">
            <h1 className="text-[6.154vw] text-white font-avenirHeavy ">
              {" "}
              What's Inside?
            </h1>

            <div className="mt-[10vw] ">
              <div className="w-[81.538vw] h-[82.051vw] bg-white rounded-[4.103vw] flex flex-col items-center justify-center relative ">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute top-[12vw] left-[27.5vw] inset-0 w-[25.641vw] h-[4.103vw] object-cover lg:hidden"
                />
                <h1 className="w-[67.179vw]  text-[4.303vw]/[4.4vw] font-latoRegular mt-[6vw] px-[2vw] text-center ">
                  <span>All you need to know to ace </span>
                  <span className="font-bold underline">
                    CV-making, Cover Letters,
                  </span>
                  <span>and </span>
                  <span className="font-bold underline">
                    Case-Based interview
                  </span>
                </h1>
              </div>
              <div className="w-[81.538vw] h-[82.051vw] bg-white rounded-[4.103vw] flex flex-col items-center justify-center relative mt-[5vw]">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute top-[12vw] left-[27.5vw] inset-0 w-[25.641vw] h-[4.103vw] object-cover lg:hidden"
                />
                <h1 className="w-[67.179vw]  text-[4.303vw]/[4.4vw] font-latoRegular mt-[6vw] px-[2vw] text-center ">
                  <span>All you need to know to ace </span>
                  <span className="font-bold underline">
                    CV-making, Cover Letters,
                  </span>
                  <span>and </span>
                  <span className="font-bold underline">
                    Case-Based interview
                  </span>
                </h1>
              </div>
              <div className="w-[81.538vw] h-[82.051vw] bg-white rounded-[4.103vw] flex flex-col items-center justify-center relative mt-[5vw]">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={2000}
                  height={2000}
                  className="absolute top-[12vw] left-[27.5vw] inset-0 w-[25.641vw] h-[4.103vw] object-cover lg:hidden"
                />
                <h1 className="w-[67.179vw]  text-[4.303vw]/[4.4vw] font-latoRegular mt-[6vw] px-[2vw] text-center ">
                  <span>All you need to know to ace </span>
                  <span className="font-bold underline">
                    CV-making, Cover Letters,
                  </span>
                  <span>and </span>
                  <span className="font-bold underline">
                    Case-Based interview
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
