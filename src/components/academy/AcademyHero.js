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
              <h1 className="bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text text-center font-avenirBlack text-[5.833vw]/[7.2vw] text-transparent">
                {"180DC Academy"}
              </h1>
              <h1 className="w-[60.219vw] pt-[2.5vw] text-center font-avenirRegular text-[1.823vw]/[1.67vw] text-lightWhite">
                {
                  "180DC Academy is our series of free courses to teach you all necessary materials to equip you with skills in attempt to increase the accessibility of consulting. You will learn everything you need to know to apply it to different fields even if you're not a part of our internal team."
                }
              </h1>
            </div>
            <h1 className="w-[60.219vw] pt-[4vw] text-center font-avenirRegular text-[1.302vw]/[2vw] text-lightWhite">
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
        <div className="z-[2] mt-[24.372vw] flex w-full flex-col items-center lg:hidden">
          <div className="flex w-full flex-col items-center justify-center">
            <div>
              <h1 className="bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text text-center font-avenirBlack text-[8.333vw] text-transparent">
                {"180DC Academy"}
              </h1>
              <h1 className="w-[87.222vw] pt-[2.5vw] text-center font-avenirRegular text-[3.333vw]/[3.67vw] text-lightWhite">
                {
                  "180DC Academy is our series of free courses to teach you all necessary materials to equip you with skills in attempt to increase the accessibility of consulting. You will learn everything you need to know to apply it to different fields even if you're not a part of our internal team."
                }
              </h1>
              <h1 className="flex flex-col items-center justify-center pt-[15vw] text-center font-avenirRegular text-[3.056vw] text-lightWhite">
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
