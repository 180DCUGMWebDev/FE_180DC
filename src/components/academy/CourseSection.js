// Import Packages
"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

// Import Configs
import { createBackground } from "@/config/Functions";
import Slider from "./Slider";

export default function CourseSection() {
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center max-lg:py-[8vh] lg:h-screen">
        <Image
          src="/img/academy/GRAD_180-c.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 top-[0vw] z-0 h-full w-full origin-top scale-125 object-cover max-lg:hidden"
        />
        {/* Desktop */}
        <div className="relative flex flex-col items-center justify-center max-lg:hidden">
          {/* Content */}
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="stroke- font-avenirBlack text-[3.385vw] text-lightWhite">
              Start Your Course !
            </h1>
            <div className="w-[90vw]">
              <Slider />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="z-[2] flex h-[139.722vw] w-full flex-col items-center lg:hidden">
          <Image
            src="/img/academy/GRAD_180Mobile.png"
            alt="background"
            width={2000}
            height={2000}
            className="absolute inset-0 top-[0vw] z-0 h-full w-full origin-top scale-[1.1] rounded-t-xl object-cover lg:hidden"
          />
          <h1 className="z-[3] font-avenirBlack text-[5.556vw] text-lightWhite">
            Start Your Course !
          </h1>
          <div className="z-[3] my-[2vw] h-[51.389vw] w-[87.222vw] rounded-[1.6vw] bg-white shadow-xl">
            <Image
              src="/img/academy/dummyCardImage.png"
              alt="background"
              width={2000}
              height={2000}
              className="inset-0 mx-auto my-[2vw] h-[28.333vw] w-[83.333vw] object-cover lg:hidden"
            />
            <div className="text-[1vw]/[4.7vw]">
              <h1 className="ml-[2vw] font-avenirHeavy text-[3.333vw]"> Module 1: </h1>
              <h1 className="ml-[2vw] font-avenirHeavy text-[4.167vw] text-[#58B9D1]">
                {" "}
                Consulting 101{" "}
              </h1>
            </div>

            <a
              href="academy/module1"
              className="mx-auto mb-[1vw] mt-[2vw] flex h-[5.919vw] w-[82.286vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[3.611vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
            >
              See Details
            </a>
          </div>
          <div className="z-[3] my-[2vw] h-[51.389vw] w-[87.222vw] rounded-[1.6vw] bg-white shadow-xl">
            <Image
              src="/img/academy/dummyCardImage.png"
              alt="background"
              width={2000}
              height={2000}
              className="inset-0 mx-auto my-[2vw] h-[28.333vw] w-[83.333vw] object-cover lg:hidden"
            />
            <div className="text-[1vw]/[4.7vw]">
              <h1 className="ml-[2vw] font-avenirHeavy text-[3.333vw]"> Module 2: </h1>
              <h1 className="ml-[2vw] font-avenirHeavy text-[4.167vw] text-[#58B9D1]">
                {" "}
                Business Analysis Framework{" "}
              </h1>
            </div>

            <a
              href="academy/"
              className="mx-auto mb-[1vw] mt-[2vw] flex h-[5.919vw] w-[82.286vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[3.611vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
