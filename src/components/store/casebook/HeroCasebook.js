// Import Packages
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import Image from "next/image";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function HeroCasebook() {
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex w-full h-fit max-lg:py-[8vh] lg:h-screen items-center justify-center ">
        <Image
          src="/img/store/casebook/bgHeroCasebook.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute z-0  inset-0 w-full h-full object-cover max-lg:hidden"
        />
        <Image
          src="/img/academy/MobileHeroBg.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute z-0 -top-[5vw] w-full object-cover lg:hidden"
        />
        {/* Desktop */}
        <div className="flex flex-col justify-center items-center max-lg:hidden relative">
          {/* Content */}
          <div className="w-full flex  justify-center items-center pl-[5vw] ">
            <div>
              <div className="w-[22.708vw] h-[5.677vw] bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] rounded-[5.208vw] flex flex-col justify-center items-center font-avenirBlack text-lightWhite text-[3.333vw]">
                CASEBOOK
              </div>
              <div className="text-[2.5vw] font-avenirBook ml-[1.6vw]">
                <h2>
                  <span className="font-avenirRegular">by </span>
                  <span className="font-avenirBlack">180DC UGM</span>
                </h2>
              </div>
              <div className="font-avenirRegular text-[1.25vw]/[1.3vw] my-[2.5vw] ml-[1.6vw]">
                <span>The </span>
                <span className="font-bold underline">
                  ultimate e-book you need to learn <br />
                  about consulting!
                </span>
                <span> Get it in </span>
                <span className="font-bold underline">bundles!</span>
              </div>
              <div className="w-[10.677vw] h-[3.75vw] gap-[1vw] bg-black180 rounded-[5.208vw] font-avenirHeavy text-[1.25vw] text-white flex justify-center items-center ml-[1.6vw]">
                <Image
                  src="/img/store/casebook/trolley.png"
                  alt="background"
                  width={2000}
                  height={2000}
                  className="w-[1.389vw] h-[1.389vw] object-cover max-lg:hidden"
                />
                <h1>Buy now</h1>
              </div>
            </div>
            <div>
              <Image
                src="/img/store/casebook/HeroImageBook.png"
                alt="background"
                width={2000}
                height={2000}
                className="inset-0 -right-[10vw] w-[63.006vw] h-[1019.8] object-cover max-lg:hidden"
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col lg:hidden w-full items-center z-[2] mt-[24.372vw]">
          <div className="w-full flex flex-col justify-center items-center ">
            <div>
              <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] text-[8.333vw] font-avenirBlack ">
                {"180DC Academy"}
              </h1>
              <h1 className="pt-[15vw] text-center flex flex-col justify-center items-center text-lightWhite text-[3.056vw] font-avenirRegular">
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
