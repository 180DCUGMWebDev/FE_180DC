"use client";

// Import Packages
import Image from "next/image";

// Import Configs
import React from "react";
import { createBackground } from "@/config/Functions";
import { useState, useEffect, useMemo } from "react";

const DekstopComponent = React.memo(() => {
  return (
    <div className="flex flex-col justify-center items-center max-lg:hidden relative  mb-[5vw]">
      {/* Content */}
      <div className="w-full flex justify-center items-center pl-[5vw] ">
        <div className="relative">
          <Image
            src="/img/store/casebook/whitestar.png"
            alt="Star ornament"
            width={2000}
            height={2000}
            className="w-[9.141vw] h-[9.538vw] absolute -top-[5vw] -left-[4vw] object-cover max-lg:hidden"
          />
          <Image
            src="/img/store/casebook/vol2.png"
            alt="Star ornament"
            width={2000}
            height={2000}
            className="w-[7.255vw] h-[4.419vw] absolute -top-[3vw] -right-[1vw] object-cover max-lg:hidden"
          />
          <Image
            src="/img/store/casebook/curl.png"
            alt="Star ornament"
            width={2000}
            height={2000}
            className="w-[7.415vw] h-[8.815vw] absolute top-[2vw] -left-[6vw] object-cover max-lg:hidden"
          />
          <Image
            src="/img/store/casebook/sparkOrnament.png"
            alt="Star ornament"
            width={2000}
            height={2000}
            className="w-[1.531vw] h-[1.776vw] absolute top-[5.5vw] right-[2vw] object-cover max-lg:hidden"
          />

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
          <a
            href="#"
            className="w-[10.677vw] h-[3.75vw] gap-[1vw] bg-black rounded-[5.208vw] font-avenirHeavy text-[1.25vw] text-white flex justify-center items-center ml-[1.6vw] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
          >
            <Image
              src="/img/store/casebook/trolley.png"
              alt="background"
              width={2000}
              height={2000}
              className="w-[1.389vw] h-[1.389vw] object-cover max-lg:hidden"
            />
            <h1>Buy now</h1>
          </a>
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
        <div className="absolute bottom-[2vw] w-full flex justify-center items-center flex-col">
          <span className="text-[1.294vw] font-latoBold  mb-[1vw]">
            GET TO KNOW MORE
          </span>
          <Image
            src="/img/store/casebook/blackArrowDown.png"
            alt="background"
            width={2000}
            height={2000}
            className="inset-0  w-[1.615vw] h-[0.938vw] object-cover max-lg:hidden animate-bounce"
          />
        </div>
      </div>
    </div>
  );
});

const MobileComponent = React.memo(() => {
  return (
    <div className="flex flex-col lg:hidden w-full items-center z-[2] mt-[12.372vw] mb-[26.372vw]">
      <div className="w-full flex flex-col justify-center items-center ">
        <div>
          <Image
            src="/img/store/casebook/HeroImageBook.png"
            alt="background"
            width={2000}
            height={2000}
            className="inset-0 w-[107.026vw] h-[86.923vw] pr-[14vw] scale-[1.4] object-cover lg:hidden"
          />
          <div className="w-full flex justify-items-start ml-[47vw] pl-[5vw] scale-[2]">
            <div className="relative mt-[6vw]">
              <Image
                src="/img/store/casebook/whitestar.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="w-[9.141vw] h-[9.538vw] absolute top-[1vw] -left-[4vw] object-cover lg:hidden"
              />
              <Image
                src="/img/store/casebook/vol2.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="w-[7.255vw] h-[4.419vw] absolute top-[3vw] right-[3vw] object-cover lg:hidden"
              />
              <Image
                src="/img/store/casebook/curl.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="w-[7.415vw] h-[8.815vw] absolute top-[9.3vw] -left-[4vw] object-cover lg:hidden scale-[0.6]"
              />
              <Image
                src="/img/store/casebook/sparkOrnament.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="w-[1.531vw] h-[1.776vw] absolute top-[12.8vw] right-[8vw] object-cover lg:hidden"
              />

              <div className="w-[22.708vw] h-[5.677vw] bg-gradient-to-r mt-[6vw] from-[#6FAA26] to-[#58B9D1] rounded-[5.208vw] flex flex-col justify-center items-center font-avenirBlack text-lightWhite text-[3.333vw]">
                CASEBOOK
              </div>
              <div className="text-[2.5vw] font-avenirBook ml-[1.6vw] mt-[1.3vw]">
                <h2>
                  <span className="font-avenirRegular">by </span>
                  <span className="font-avenirBlack">180DC UGM</span>
                </h2>
              </div>
              <div className="font-avenirRegular text-[1.65vw]/[1.75vw] my-[2.5vw] ml-[1.6vw]">
                <span>The </span>
                <span className="font-bold underline">
                  ultimate e-book you need to learn <br />
                  about consulting!
                </span>
                <span> Get it in </span>
                <span className="font-bold underline">bundles!</span>
              </div>
              <a
                href="#"
                className="w-[12.677vw] h-[3.75vw] gap-[1vw] bg-black rounded-[5.208vw] font-avenirHeavy text-[1.45vw] text-white flex justify-center items-center ml-[1.6vw] mt-[4vw] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
              >
                <Image
                  src="/img/store/casebook/trolley.png"
                  alt="background"
                  width={2000}
                  height={2000}
                  className="w-[1.389vw] h-[1.389vw] object-cover lg:hidden"
                />
                <h1>Buy now</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[4vw] w-full flex justify-center items-center flex-col">
        <span className="text-[3.077vw] font-latoBold  mb-[1vw]">
          GET TO KNOW MORE
        </span>
        <Image
          src="/img/store/casebook/blackArrowDown.png"
          alt="background"
          width={2000}
          height={2000}
          className="inset-0  w-[3.533vw] h-[2.051vw] object-cover lg:hidden animate-bounce"
        />
      </div>
    </div>
  );
});

export default function HeroMerch() {
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex w-full h-fit max-lg:py-[8vh] lg:h-screen items-center justify-center ">
        <Image
          src="/img/store/casebook/bgHeroCasebook.png"
          alt="180DC UGM Casebook"
          width={2000}
          height={2000}
          className="absolute z-0  inset-0 w-full h-full object-cover max-lg:hidden"
        />
        <Image
          src="/img/store/casebook/bgHeroCasebookMobile.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute z-0 inset-0 -top-[5vw] w-full object-cover lg:hidden"
        />
        <div className="flex flex-col justify-center items-center max-lg:hidden relative  mb-[5vw]">
          {/* Content */}
          <div className="w-full flex justify-center items-center pl-[5vw]">
            <div className="relative ml-[6.5vw]">
              <Image
                src="/img/store/casebook/whitestar.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="w-[9.141vw] h-[9.538vw] absolute -top-[5vw] -left-[4vw] object-cover max-lg:hidden"
              />
              <Image
                src="/img/store/merch/official.png"
                alt="Star ornament"
                width={3000}
                height={2000}
                className="w-[9vw] h-[4.419vw] absolute -top-[2.2vw] left-[9vw] object-cover max-lg:hidden"
              />
              <Image
                src="/img/store/casebook/curl.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="w-[7.415vw] h-[8.815vw] absolute top-[2vw] -left-[6vw] object-cover max-lg:hidden"
              />
              <Image
                src="/img/store/casebook/sparkOrnament.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="w-[1.531vw] h-[1.776vw] absolute top-[5.5vw] right-[2vw] object-cover max-lg:hidden"
              />

              <div className="w-fit px-[2vw] h-[5.677vw] bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] rounded-[5.208vw] flex flex-col justify-center items-center font-avenirBlack text-lightWhite text-[3.333vw]">
                MERCH
              </div>
              <div className="text-[2.5vw] font-avenirBook ml-[1.6vw]">
                <h2>
                  <span className="font-avenirRegular">by </span>
                  <span className="font-avenirBlack">180DC UGM</span>
                </h2>
              </div>
              <div className="font-avenirRegular max-w-[28vw] text-[1.25vw]/[1.3vw] my-[2.5vw] ml-[1.6vw] leading-[1.4vw]">
                <span className="font-bold underline">#PLSFIX</span>{" "}
                <span>
                  is an initiative by 180DC UGM to offer merchandise. Wear
                </span>
                <span className="font-bold underline">
                  {" "}
                  #PLXFIX and contributing to society{" "}
                </span>
                while becoming{" "}
                <span className="font-bold">#TheBestofYOUth</span>
              </div>
              <a
                href="#"
                className="w-[10.677vw] h-[3.75vw] gap-[1vw] bg-black rounded-[5.208vw] font-avenirHeavy text-[1.25vw] text-white flex justify-center items-center ml-[1.6vw] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
              >
                <Image
                  src="/img/store/casebook/trolley.png"
                  alt="background"
                  width={2000}
                  height={2000}
                  className="w-[1.389vw] h-[1.389vw] object-cover max-lg:hidden"
                />
                <h1>Buy now</h1>
              </a>
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
            <div className="absolute bottom-[2vw] w-full flex justify-center items-center flex-col">
              <span className="text-[1.294vw] font-latoBold  mb-[1vw]">
                GET TO KNOW MORE
              </span>
              <Image
                src="/img/store/casebook/blackArrowDown.png"
                alt="background"
                width={2000}
                height={2000}
                className="inset-0  w-[1.615vw] h-[0.938vw] object-cover max-lg:hidden animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
