// Import Packages
'use client'

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
// Import Configs
import { createBackground } from "@/config/Functions";

export default function CourseSection() {
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex w-full h-fit max-lg:py-[8vh] lg:h-screen items-center justify-center ">
        <Image
          src="/img/academy/GRAD_180.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute z-0 top-[0vw] inset-0 w-full h-full object-cover max-lg:hidden"
        />
        {/* Desktop */}
        <div className="flex flex-col justify-center items-center max-lg:hidden relative">
          {/* Content */}
          <div className="w-full flex flex-col justify-center items-center ">
            <h1 className="font-avenirBlack text-lightWhite text-[3.385vw] stroke-">
              Start Your Course !
            </h1>

            <div className="flex gap-x-[2vw]">
              <div className="w-[42.969vw] h-[25.313vw] rounded-[1.6vw]  bg-white shadow-xl">
                <Image
                  src="/img/academy/dummyCardImage.png"
                  alt="background"
                  width={2000}
                  height={2000}
                  className="mx-[1vw] my-[1vw] inset-0 w-[40.99vw] h-[14.01vw] object-cover max-lg:hidden"
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

                <div className="bg-white border-black border w-[39.948vw] h-[2.917vw] mx-[1.3vw] rounded-[1.3vw] mt-[1vw] text-[1.563vw] text-center">
                  See Details
                </div>
              </div>

              <div className="w-[42.969vw] h-[25.313vw] rounded-[1.6vw] bg-white">
                <Image
                  src="/img/academy/dummyCardImage.png"
                  alt="background"
                  width={2000}
                  height={2000}
                  className="mx-[1vw] my-[1vw] inset-0 w-[40.99vw] h-[14.01vw] object-cover max-lg:hidden"
                />
                <div className="text-[1vw]/[1.7vw]">
                  <h1 className="text-[1.302vw] font-avenirHeavy ml-[1vw]">
                    {" "}
                    Module 2:{" "}
                  </h1>
                  <h1 className="text-[1.823vw] font-avenirHeavy ml-[1vw] text-[#58B9D1]">
                    {" "}
                    Frameworks{" "}
                  </h1>
                </div>

                <div className="bg-white border-black border w-[39.948vw] h-[2.917vw] mx-[1.3vw] rounded-[1.3vw] mt-[1vw] text-[1.563vw] text-center">
                  See Details
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col lg:hidden w-full items-center mb-[40vw] z-[2] mt-[24.372vw]">
          <div className="text-[8.6vw] text-primary font-avenirBlack ">
            Mobile View{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
