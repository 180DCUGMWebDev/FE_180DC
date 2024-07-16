// Import Packages
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import Image from "next/image";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function AcademyHero() {
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex w-full h-fit max-lg:py-[8vh] lg:h-screen items-center justify-center ">
        <Image
          src="/img/academy/heroAcad.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute z-0 -top-[10vw] inset-0 w-full h-full object-cover max-lg:hidden"
        />
        {/* Desktop */}
        <div className="flex flex-col justify-center items-center max-lg:hidden relative">
          {/* Content */}
          <div className="w-full flex flex-col justify-center items-center ">
            <div className="py-[10vw]">
              <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] text-[5.833vw]/[7.2vw]  font-avenirBlack ">
                {"180DC Academy"}
              </h1>
              <h1 className="text-center w-[60.219vw] text-lightWhite text-[1.823vw]/[1.67vw] pt-[2.5vw] font-avenirRegular">
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                }
              </h1>
            </div>
            <h1 className="text-center w-[60.219vw] text-lightWhite text-[1.302vw]/[2vw] pt-[4vw] font-avenirRegular">
              {"SCROLL DOWN"}
              <Image
                src="/img/academy/scrollDownArrow.png"
                alt="Arrow"
                width={2000}
                height={2000}
                className="absolute right-[29vw] w-[1.7vw] items-center object-cover pt-[0.2vw]"
              />
            </h1>
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
