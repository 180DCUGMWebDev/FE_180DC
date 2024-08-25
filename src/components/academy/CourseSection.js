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
      <div className="flex w-full h-fit max-lg:py-[8vh] lg:h-screen items-center justify-center ">
        <Image
          src="/img/academy/GRAD_180.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute z-0 top-[0vw] inset-0 w-full h-full object-cover max-lg:hidden origin-top scale-125"
        />
        {/* Desktop */}
        <div className="flex flex-col justify-center items-center max-lg:hidden relative">
          {/* Content */}
          <div className="w-full flex flex-col justify-center items-center ">
            <h1 className="font-avenirBlack text-lightWhite text-[3.385vw] stroke-">
              Start Your Course !
            </h1>
            <div className=" w-[90vw]">
              <Slider />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col lg:hidden w-full h-[239.722vw] items-center z-[2]">
          <Image
            src="/img/academy/GRAD_180Mobile.png"
            alt="background"
            width={2000}
            height={2000}
            className="absolute z-0 top-[0vw] inset-0 w-full h-full object-cover lg:hidden rounded-t-xl origin-top scale-[1.1]"
          />
          <h1 className="font-avenirBlack z-[3] text-lightWhite text-[5.556vw]">
            Start Your Course !
          </h1>
          <div className="w-[87.222vw] h-[51.389vw] z-[3] rounded-[1.6vw]  bg-white shadow-xl my-[2vw]">
            <Image
              src="/img/academy/dummyCardImage.png"
              alt="background"
              width={2000}
              height={2000}
              className="mx-auto my-[2vw] inset-0 w-[83.333vw] h-[28.333vw] object-cover lg:hidden"
            />
            <div className="text-[1vw]/[4.7vw]">
              <h1 className="text-[3.333vw] font-avenirHeavy ml-[2vw]">
                {" "}
                Module 1:{" "}
              </h1>
              <h1 className="text-[4.167vw] font-avenirHeavy ml-[2vw] text-[#58B9D1]">
                {" "}
                Consulting 101{" "}
              </h1>
            </div>

            <a
              href="academy/module1"
              className="bg-white border-black border w-[82.286vw] h-[5.919vw] mx-auto rounded-[1.3vw] mt-[2vw] mb-[1vw] text-[3.611vw] text-center flex items-center justify-center hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
            >
              See Details
            </a>
          </div>
          <div className="w-[87.222vw] h-[51.389vw] z-[3] rounded-[1.6vw]  bg-white shadow-xl my-[2vw]">
          <Image
              src="/img/academy/dummyCardImage.png"
              alt="background"
              width={2000}
              height={2000}
              className="mx-auto my-[2vw] inset-0 w-[83.333vw] h-[28.333vw] object-cover lg:hidden"
            />
            <div className="text-[1vw]/[4.7vw]">
              <h1 className="text-[3.333vw] font-avenirHeavy ml-[2vw]">
                {" "}
                Module 2:{" "}
              </h1>
              <h1 className="text-[4.167vw] font-avenirHeavy ml-[2vw] text-[#58B9D1]">
                {" "}
                Business Analysis Framework{" "}
              </h1>
            </div>

            <a
              href="academy/"
              className="bg-white border-black border w-[82.286vw] h-[5.919vw] mx-auto rounded-[1.3vw] mt-[2vw] mb-[1vw] text-[3.611vw] text-center flex items-center justify-center hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
