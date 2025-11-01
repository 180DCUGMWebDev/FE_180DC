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
      <div className="relative flex h-fit w-full items-center justify-center lg:h-screen">
        {/* Desktop */}
        <div className="relative mt-[5vw] flex items-center justify-center gap-x-[5vw] max-lg:hidden">
          {/* Kiri */}
          <div className="">
            <h1 className="font-avenir-heavy w-[80.26vw] text-start text-[3.385vw] text-gray-100">
              Next Module.......
            </h1>
            <div className="flex gap-x-[2vw]">
              <div className="h-[22.813vw] w-[38.75vw] rounded-[1.6vw] bg-white shadow-xl">
                <Image
                  src="/img/academy/dummyCardImage.png"
                  alt="background"
                  width={2000}
                  height={2000}
                  className="inset-0 mx-[1vw] my-[1vw] h-[12.604vw] w-[36.927vw] object-cover max-lg:hidden"
                />
                <div className="text-[1vw]/[1.7vw]">
                  <h1 className="font-avenir-heavy ml-[1vw] text-[1.302vw]"> Module 1: </h1>
                  <h1 className="font-avenir-heavy ml-[1vw] text-[1.823vw] text-[#58B9D1]">
                    {" "}
                    Consulting 101{" "}
                  </h1>
                </div>

                <a
                  href="academy/module1"
                  className="mx-[1.3vw] mt-[1vw] flex h-[2.604vw] w-[36.042vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[1.563vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
                >
                  See Details
                </a>
              </div>

              <div className="h-[22.813vw] w-[38.75vw] rounded-[1.6vw] bg-white shadow-xl">
                <Image
                  src="/img/academy/dummyCardImage.png"
                  alt="background"
                  width={2000}
                  height={2000}
                  className="inset-0 mx-[1vw] my-[1vw] h-[12.604vw] w-[36.927vw] object-cover max-lg:hidden"
                />
                <div className="text-[1vw]/[1.7vw]">
                  <h1 className="font-avenir-heavy ml-[1vw] text-[1.302vw]"> Module 1: </h1>
                  <h1 className="font-avenir-heavy ml-[1vw] text-[1.823vw] text-[#58B9D1]">
                    {" "}
                    Consulting 101{" "}
                  </h1>
                </div>

                <a
                  href="academy/module1"
                  className="mx-[1.3vw] mt-[1vw] flex h-[2.604vw] w-[36.042vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[1.563vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
                >
                  See Details
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="relative z-2 mb-[25vw] flex w-full flex-col items-center lg:hidden">
          {/* <Image
            src="/img/academy/bgblack.png"
            alt="Black Background"
            width={2000}
            height={2000}
            className="w-full object-cover lg:hidden absolute -z-10000000 -bottom-[100vw]"
          /> */}
          <div className="mt-[5vw] w-[81.944vw]">
            <h1 className="font-avenir-regular bg-linear-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text text-[4.167vw] text-transparent">
              Next Module...
            </h1>
          </div>
          <div className="my-[2vw] h-[48.306vw] w-[81.167vw] rounded-[1.389vw] bg-white">
            <Image
              src="/img/academy/dummyCardImage.png"
              alt="background"
              width={2000}
              height={2000}
              className="inset-0 mx-auto my-[2vw] h-[26.736vw] w-[78.222vw] object-cover lg:hidden"
            />
            <div className="text-[1vw]/[4.3vw]">
              <h1 className="font-avenir-heavy ml-[1vw] text-[3.333vw]"> Module 1: </h1>
              <h1 className="font-avenir-heavy ml-[1vw] text-[4.167vw] text-[#58B9D1]">
                {" "}
                Consulting 101{" "}
              </h1>
            </div>
            <a
              href="academy/module1"
              className="mx-[1.3vw] mt-[1vw] flex h-[5.556vw] w-[77.361vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[3.611vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
            >
              See Details
            </a>
          </div>

          <div className="my-[2vw] h-[48.306vw] w-[81.167vw] rounded-[1.389vw] bg-white">
            <Image
              src="/img/academy/dummyCardImage.png"
              alt="background"
              width={2000}
              height={2000}
              className="inset-0 mx-auto my-[2vw] h-[26.736vw] w-[78.222vw] object-cover lg:hidden"
            />
            <div className="text-[1vw]/[4.3vw]">
              <h1 className="font-avenir-heavy ml-[1vw] text-[3.333vw]"> Module 1: </h1>
              <h1 className="font-avenir-heavy ml-[1vw] text-[4.167vw] text-[#58B9D1]">
                {" "}
                Consulting 101{" "}
              </h1>
            </div>
            <a
              href="academy/module1"
              className="mx-[1.3vw] mt-[1vw] flex h-[5.556vw] w-[77.361vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[3.611vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
