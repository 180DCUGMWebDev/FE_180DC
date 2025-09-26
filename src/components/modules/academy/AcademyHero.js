"use client";

// Import Packages
import React, { useCallback } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function AcademyHero() {
  const scrollRef = useRef();
  const handleClick = useCallback(
    () => scrollRef.current.scrollIntoView({ behavior: "smooth" }),
    [scrollRef],
  );
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center max-lg:py-[8vh] lg:h-screen">
        <Image
          src="/img/academy/heroAcad-c.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 -top-[10vw] z-0 h-full w-full object-cover max-lg:hidden"
        />
        <Image
          src="/img/academy/MobileHeroBg.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute -top-[5vw] z-0 w-full object-cover lg:hidden"
        />
        {/* Desktop */}
        <div className="relative flex flex-col items-center justify-center max-lg:hidden">
          {/* Content */}
          <div className="flex w-full flex-col items-center justify-center">
            <div className="py-[10vw]">
              <h1 className="bg-linear-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text text-center font-avenir-black text-[5.833vw]/[7.2vw] text-transparent">
                {"180DC Academy"}
              </h1>
              <h1 className="w-[60.219vw] pt-[2.5vw] text-center font-avenir-regular text-[1.823vw]/[1.67vw] text-light-white">
                {
                  "180DC Academy is our series of free courses to teach you all necessary materials to equip you with skills in attempt to increase the accessibility of consulting. You will learn everything you need to know to apply it to different fields even if you're not a part of our internal team."
                }
              </h1>
            </div>
            <button
              type="button"
              className="flex flex-col items-center outline-0"
              onClick={handleClick}
            >
              <h2 className="mt-[1.4vw] font-lato-bold text-[1vw] text-light-white max-lg:hidden">
                {"SCROLL DOWN"}
              </h2>
              <FaChevronDown className="animate-moving-pointer text-[1.4vw] text-light-white hover:cursor-pointer" />
            </button>
          </div>
          {/* Scroll Down Target */}
          <div className="absolute bottom-[1000]" ref={scrollRef} />
        </div>

        {/* Mobile */}
        <div className="z-2 mt-[24.372vw] flex w-full flex-col items-center lg:hidden">
          <div className="flex w-full flex-col items-center justify-center">
            <div>
              <h1 className="bg-linear-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text text-center font-avenir-black text-[8.333vw] text-transparent">
                {"180DC Academy"}
              </h1>
              <h1 className="w-[87.222vw] pt-[2.5vw] text-center font-avenir-regular text-[3.333vw]/[3.67vw] text-light-white">
                {
                  "180DC Academy is our series of free courses to teach you all necessary materials to equip you with skills in attempt to increase the accessibility of consulting. You will learn everything you need to know to apply it to different fields even if you're not a part of our internal team."
                }
              </h1>
              <h1 className="flex flex-col items-center justify-center pt-[15vw] text-center font-avenir-regular text-[3.056vw] text-light-white">
                {"SCROLL DOWN"}
                <Image
                  src="/img/academy/scrollDownArrow.png"
                  alt="Arrow"
                  width={2000}
                  height={2000}
                  className="w-[5.833vw] items-center object-cover pt-[0.2vw]"
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
