"use client";

// Import Packages
import Image from "next/image";

// Import Configs
import React from "react";
import Link from "next/link";
import HeroTemplate from "../HeroTemplate";

export default function HeroMerch() {
  // Page
  return (
    <HeroTemplate>
      {/* Content */}
      <div className="flex w-full flex-col-reverse items-center justify-center lg:flex-row lg:pl-[5vw]">
        <div className="relative">
          {/* Old Hero components */}
          <div className="max-lg:[70vw] relative w-[40vw]">
            <Image
              src="/img/store/casebook/whitestar.png"
              alt="Star ornament"
              width={2000}
              height={2000}
              className="absolute -top-[5.7vw] left-[28.7vw] h-[9.538vw] w-[9.141vw] object-cover lg:-top-[5vw] lg:h-[9.538vw] lg:w-[9.141vw]"
            />
            <Image
              src="/img/store/casebook/curl.png"
              alt="Curl ornament"
              width={2000}
              height={2000}
              className="absolute -left-[4vw] top-[2.4vw] h-[8vw] w-[7vw] object-cover max-lg:scale-[0.6] lg:-left-[6vw] lg:top-[2vw] lg:h-[8.815vw] lg:w-[7.415vw]"
            />
            <Image
              src="/img/store/merch/PLXFIX.png"
              alt=""
              width={2000}
              height={2000}
              className="object-cover lg:scale-[0.9] max-lg:scale-[1.5] "
            />
            <div className="my-[0.5vw] mb-[2vw] ml-[1.6vw] max-w-[28vw] font-avenirRegular text-[1.25vw]/[1.3vw] leading-[1.7vw] max-lg:scale-[2] lg:leading-[1.4vw] max-lg:mt-[10vw]">
              <u>
                <b>#PLSFIX</b>
              </u>{" "}
              is an initiative by 180DC UGM to offer merchandise. Wear
              <b>
                <u> #PLXFIX and contributing to society</u>{" "}
              </b>
              while becoming <b>#TheBestofYOUth</b>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScOuHT1hdVMUeLNjxFaLC8zAcgERZnL5b2qZgjcWBdaRSi4NQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative lg:ml-[1.6vw] flex h-[3.75vw] w-[12.677vw] items-center justify-center gap-[1vw] rounded-[5.208vw] bg-black font-avenirHeavy text-[1.25vw] text-white transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20 max-lg:mt-[10vw] max-lg:scale-[2] lg:h-[3.75vw] lg:w-[10.677vw]"
            >
              <Image
                src="/img/store/casebook/greenstar.png"
                alt=""
                width={2000}
                height={2000}
                className="absolute -left-[3.2vw] -top-[4vw] w-[8vw]"
              />
              <Image
                src="/img/store/casebook/trolley.png"
                alt="background"
                width={2000}
                height={2000}
                className="h-[1.389vw] w-[1.389vw] object-cover"
              />
              <h1>Buy now</h1>
            </a>
          </div>

          {/* <Image
            src="/img/store/casebook/sparkOrnament.png"
            alt="Star ornament"
            width={2000}
            height={2000}
            className="absolute left-[14.5vw] top-[6vw] h-[1.776vw] w-[1.531vw] object-cover lg:right-[2vw] lg:top-[5.5vw] lg:h-[1.776vw] lg:w-[1.531vw]"
          />
          <Image
            src="/img/store/merch/official.png"
            alt="Star ornament"
            width={3000}
            height={2000}
            className="absolute left-[11.5vw] top-[-2.7vw] h-[4vw] w-[6.7vw] object-cover lg:-top-[2.5vw] lg:left-[10vw] lg:h-[4.419vw] lg:w-[9vw]"
          />
          <div className="flex h-[5.677vw] w-fit flex-col items-center justify-center rounded-[5.208vw] bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] px-[2vw] pt-[1vw] font-avenirBlack text-[3.333vw] text-lightWhite lg:mt-[0.5vw] lg:pt-[0.5vw]">
            MERCH
          </div>
          <div className=" font-avenirBook text-[1.7vw] max-lg:mt-[0.8vw]">
            <h2>
              <span className="font-avenirRegular">by </span>
              <span className="font-avenirBlack">180DC UGM</span>
            </h2>
          </div> */}
        </div>

        {/* Hero Image  */}
        <div className="flex w-full justify-center lg:w-auto lg:justify-start">
          <Image
            src="/img/store/merch/MERCH_ALL.png"
            alt="Wear-it bundle"
            width={2000}
            height={2000}
            className="ml-[5vw] mr-[5vw] h-auto w-[75vw] max-w-[300px] object-contain max-lg:mb-[15vw] max-lg:mt-[15vw] lg:w-[33vw] lg:max-w-none"
          />
        </div>
      </div>
    </HeroTemplate>
  );
}
