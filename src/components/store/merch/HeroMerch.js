"use client";

// Import Packages
import Image from "next/image";

// Import Configs
import React from "react";
import { createBackground } from "@/config/Functions";
import Link from "next/link";

export default function HeroMerch() {
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="relative flex min-h-screen w-full items-center justify-center max-lg:mb-[4dvh] max-lg:py-[8vh] md:mb-[8dvh] lg:mb-0 lg:h-screen">
        <Image
          src="/img/store/merch/merch-bg-c.png"
          alt="180DC UGM merch"
          width={2000}
          height={2000}
          className="absolute inset-0 z-0 h-full w-full object-cover max-lg:hidden"
        />
        <Image
          src="/img/store/merch/merch-bg-mobile.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 -top-[5vw] z-0 w-full object-cover lg:hidden"
        />
        <div className="relative mb-[5vw] flex flex-col items-center justify-center max-lg:w-full lg:mt-[4vw]">
          {/* Content */}
          <div className="flex w-full flex-col-reverse items-center justify-center lg:flex-row lg:pl-[5vw]">
            <div className="relative mt-[14vw] max-lg:scale-[2.3] lg:ml-[6.5vw] lg:mt-0">
              <Image
                src="/img/store/casebook/whitestar.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="absolute -top-[5.7vw] left-[-2.7vw] h-[9.538vw] w-[9.141vw] object-cover lg:-top-[5vw] lg:h-[9.538vw] lg:w-[9.141vw]"
              />
              <Image
                src="/img/store/merch/official.png"
                alt="Star ornament"
                width={3000}
                height={2000}
                className="absolute left-[11.5vw] top-[-2.7vw] h-[4vw] w-[6.7vw] object-cover lg:-top-[2.5vw] lg:left-[10vw] lg:h-[4.419vw] lg:w-[9vw]"
              />
              <Image
                src="/img/store/casebook/curl.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="absolute -left-[4vw] top-[2.4vw] h-[8vw] w-[7vw] object-cover max-lg:scale-[0.6] lg:-left-[6vw] lg:top-[2vw] lg:h-[8.815vw] lg:w-[7.415vw]"
              />
              <Image
                src="/img/store/casebook/sparkOrnament.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="absolute left-[14.5vw] top-[6vw] h-[1.776vw] w-[1.531vw] object-cover lg:right-[2vw] lg:top-[5.5vw] lg:h-[1.776vw] lg:w-[1.531vw]"
              />

              <div className="flex h-[5.677vw] w-fit flex-col items-center justify-center rounded-[5.208vw] bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] px-[2vw] pt-[1vw] font-avenirBlack text-[3.333vw] text-lightWhite lg:mt-[0.5vw] lg:pt-[0.5vw]">
                MERCH
              </div>
              <div className="ml-[1.6vw] font-avenirBook text-[1.7vw] max-lg:mt-[0.8vw]">
                <h2>
                  <span className="font-avenirRegular">by </span>
                  <span className="font-avenirBlack">180DC UGM</span>
                </h2>
              </div>
              <div className="my-[2.5vw] ml-[1.6vw] max-w-[28vw] font-avenirRegular text-[1.25vw]/[1.3vw] leading-[1.7vw] lg:leading-[1.4vw]">
                <u>
                  <b>#PLSFIX</b>
                </u>{" "}
                is an initiative by 180DC UGM to offer merchandise. Wear
                <b>
                  <u> #PLXFIX and contributing to society</u>{" "}
                </b>
                while becoming <b>#TheBestofYOUth</b>
              </div>
              <Link
                href="#"
                className="relative ml-[1.6vw] flex h-[3.75vw] w-[12.677vw] items-center justify-center gap-[1vw] rounded-[5.208vw] bg-black font-avenirHeavy text-[1.25vw] text-white transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20 lg:h-[3.75vw] lg:w-[10.677vw]"
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
              </Link>
            </div>
            <div>
              <Image
                src="/img/store/casebook/HeroImageBook-c.png"
                alt="background"
                width={2000}
                height={2000}
                className="inset-0 h-auto object-cover max-lg:w-[107.026vw] max-lg:scale-[1.4] max-lg:pr-[14vw] lg:-right-[10vw] lg:h-[1019.8] lg:w-[63.006vw]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0vw] flex w-full flex-col items-center justify-center md:-bottom-[7.8vw] lg:bottom-[1vw]">
        <span className="mb-[1vw] font-latoBold text-[3.2vw] md:text-[2.6vw] lg:text-[1.294vw]">
          GET TO KNOW MORE
        </span>
        <Image
          src="/img/store/casebook/blackArrowDown.png"
          alt="background"
          width={2000}
          height={2000}
          className="h-auto w-[3.3vw] animate-bounce object-cover md:w-[2.7vw] lg:w-[1.615vw]"
        />
      </div>
    </section>
  );
}