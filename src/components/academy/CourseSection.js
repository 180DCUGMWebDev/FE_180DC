// Import Packages
"use client";

import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

// Import Configs
import { createBackground } from "@/config/Functions";
import Slider from "./Slider";
import Blur from "../global/Blur";

export default function CourseSection() {
  const modules = [
    {
      id: 1,
      title: "Consulting 101",
      module: "Module 1:",
      link: "academy/module1",
      isBlur: false,
    },
    {
      id: 2,
      title: "Internal Mentoring 2",
      module: "Mini Quiz:",
      link: "academy/im2",
      isBlur: true,
    },
    {
      id: 3,
      title: "Internal Mentoring 3 Quiz",
      module: "Storytelling & Deck Making",
      link: "academy/im3",
      isBlur: true,
    },
    {
      id: 4,
      title: "Internal Mentoring 4 Quiz",
      module: "Nonprofits organization",
      link: "academy/im4",
      isBlur: true,
    },
  ];

  const renderModuleCard = ({ id, module, title, link, isBlur = true }) => (
    <Blur
      isBlur={isBlur}
      key={id}
      className="z-[3] my-[2vw] h-[51.389vw] w-[87.222vw] rounded-[1.6vw] bg-[white] shadow-xl"
    >
      <Image
        src="/img/academy/dummyCardImage.png"
        alt="module background"
        width={2000}
        height={2000}
        className="inset-0 mx-auto my-[2vw] h-[28.333vw] w-[83.333vw] object-cover lg:hidden"
      />
      <div className="text-[1vw]/[4.7vw]">
        <h1 className="ml-[2vw] font-avenirHeavy text-[3.333vw]">{module}</h1>
        <h1 className="ml-[2vw] font-avenirHeavy text-[4.167vw] text-[#58B9D1]">{title}</h1>
      </div>

      <Link
        href={link}
        className="mx-auto mb-[1vw] mt-[2vw] flex h-[5.919vw] w-[82.286vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[3.611vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
      >
        See Details
      </Link>
    </Blur>
  );

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
          {modules.map(renderModuleCard)}
        </div>
      </div>
    </section>
  );
}
