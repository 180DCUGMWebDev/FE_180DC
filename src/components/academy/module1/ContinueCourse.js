"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";
import dynamic from "next/dynamic";
import Image from "next/image";

import { createBackground } from "@/config/Functions";

export default function CountinueCourse() {
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex w-full h-fit  lg:h-screen items-center justify-center relative">
        {/* Desktop */}
        <div className="flex justify-center items-center relative max-lg:hidden gap-x-[5vw] mt-[5vw]">
          {/* Kiri */}
          <div className="">
            <h1 className="font-avenirHeavy text-[3.385vw] text-lightWhite w-[80.26vw] text-start">
              Continue Learning.......
            </h1>
            <div className="flex gap-x-[2vw]">
              <div className="w-[38.75vw] h-[22.813vw] rounded-[1.6vw]  bg-white shadow-xl">
                <Image
                  src="/img/academy/dummyCardImage.png"
                  alt="background"
                  width={2000}
                  height={2000}
                  className="mx-[1vw] my-[1vw] inset-0 w-[36.927vw] h-[12.604vw] object-cover max-lg:hidden"
                />
                <div className="text-[1vw]/[1.7vw]">
                  <h1 className="text-[1.302vw] font-avenirHeavy ml-[1vw]">
                    {" "}
                    Module 1:{" "}
                  </h1>
                  <h1 className="text-[1.823vw] font-avenirHeavy ml-[1vw] text-[#58B9D1]">
                    {" "}
                    Consulting 101{" "}
                  </h1>
                </div>

                <a
                  href="academy/module1"
                  className="bg-white border-black border w-[36.042vw] h-[2.604vw] mx-[1.3vw] rounded-[1.3vw] mt-[1vw] text-[1.563vw] text-center flex items-center justify-center hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
                >
                  See Details
                </a>
              </div>

              <div className="w-[38.75vw] h-[22.813vw] rounded-[1.6vw]  bg-white shadow-xl">
                <Image
                  src="/img/academy/dummyCardImage.png"
                  alt="background"
                  width={2000}
                  height={2000}
                  className="mx-[1vw] my-[1vw] inset-0 w-[36.927vw] h-[12.604vw] object-cover max-lg:hidden"
                />
                <div className="text-[1vw]/[1.7vw]">
                  <h1 className="text-[1.302vw] font-avenirHeavy ml-[1vw]">
                    {" "}
                    Module 1:{" "}
                  </h1>
                  <h1 className="text-[1.823vw] font-avenirHeavy ml-[1vw] text-[#58B9D1]">
                    {" "}
                    Consulting 101{" "}
                  </h1>
                </div>

                <a
                  href="academy/module1"
                  className="bg-white border-black border w-[36.042vw] h-[2.604vw] mx-[1.3vw] rounded-[1.3vw] mt-[1vw] text-[1.563vw] text-center flex items-center justify-center hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
                >
                  See Details
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col lg:hidden w-full items-center mb-[25vw] z-[2] relative">
          {/* <Image
            src="/img/academy/bgblack.png"
            alt="Black Background"
            width={2000}
            height={2000}
            className="w-full object-cover lg:hidden absolute -z-[10000000] -bottom-[100vw]"
          /> */}
          <div className="w-[81.944vw] mt-[5vw] ">
            <h1 className="text-[4.167vw] font-avenirRegular bg-clip-text text-transparent bg-gradient-to-r from-[#58B9D1] to-[#6FAA26]  ">
              Continue Learning...
            </h1>
          </div>
          <div className="w-[81.167vw] h-[48.306vw] bg-white rounded-[1.389vw] my-[2vw]">
            <Image
              src="/img/academy/dummyCardImage.png"
              alt="background"
              width={2000}
              height={2000}
              className="inset-0 w-[78.222vw] h-[26.736vw] my-[2vw] mx-[auto] object-cover lg:hidden"
            />
            <div className="text-[1vw]/[4.3vw]">
              <h1 className="text-[3.333vw] font-avenirHeavy ml-[1vw]">
                {" "}
                Module 1:{" "}
              </h1>
              <h1 className="text-[4.167vw] font-avenirHeavy ml-[1vw] text-[#58B9D1]">
                {" "}
                Consulting 101{" "}
              </h1>
            </div>
            <a
              href="academy/module1"
              className="bg-white border-black border w-[77.361vw] h-[5.556vw] mx-[1.3vw] rounded-[1.3vw] mt-[1vw] text-[3.611vw] text-center flex items-center justify-center hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
            >
              See Details
            </a>
          </div>

          <div className="w-[81.167vw] h-[48.306vw] bg-white rounded-[1.389vw] my-[2vw]">
            <Image
              src="/img/academy/dummyCardImage.png"
              alt="background"
              width={2000}
              height={2000}
              className="inset-0 w-[78.222vw] h-[26.736vw] my-[2vw] mx-[auto] object-cover lg:hidden"
            />
            <div className="text-[1vw]/[4.3vw]">
              <h1 className="text-[3.333vw] font-avenirHeavy ml-[1vw]">
                {" "}
                Module 1:{" "}
              </h1>
              <h1 className="text-[4.167vw] font-avenirHeavy ml-[1vw] text-[#58B9D1]">
                {" "}
                Consulting 101{" "}
              </h1>
            </div>
            <a
              href="academy/module1"
              className="bg-white border-black border w-[77.361vw] h-[5.556vw] mx-[1.3vw] rounded-[1.3vw] mt-[1vw] text-[3.611vw] text-center flex items-center justify-center hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
