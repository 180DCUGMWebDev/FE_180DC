"use client";

// Import Packages
import Image from "next/image";

// Import Configs
import React from "react";
import { createBackground } from "@/config/Functions";
import { useState, useEffect, useMemo } from "react";

const DekstopComponent = React.memo(() => {
  return (
    <div className="relative mb-[5vw] flex flex-col items-center justify-center max-lg:hidden">
      {/* Content */}
      <div className="flex w-full items-center justify-center pl-[5vw]">
        <div className="relative">
          <Image
            src="/img/store/casebook/whitestar.png"
            alt="Star ornament"
            width={2000}
            height={2000}
            className="absolute -left-[4vw] -top-[5vw] h-[9.538vw] w-[9.141vw] object-cover max-lg:hidden"
          />
          <Image
            src="/img/store/casebook/vol2.png"
            alt="Star ornament"
            width={2000}
            height={2000}
            className="absolute -right-[1vw] -top-[3vw] h-[4.419vw] w-[7.255vw] object-cover max-lg:hidden"
          />
          <Image
            src="/img/store/casebook/curl.png"
            alt="Star ornament"
            width={2000}
            height={2000}
            className="absolute -left-[6vw] top-[2vw] h-[8.815vw] w-[7.415vw] object-cover max-lg:hidden"
          />
          <Image
            src="/img/store/casebook/sparkOrnament.png"
            alt="Star ornament"
            width={2000}
            height={2000}
            className="absolute right-[2vw] top-[5.5vw] h-[1.776vw] w-[1.531vw] object-cover max-lg:hidden"
          />

          <div className="flex h-[5.677vw] w-[22.708vw] flex-col items-center justify-center rounded-[5.208vw] bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] font-avenirBlack text-[3.333vw] text-lightWhite">
            CASEBOOK
          </div>
          <div className="ml-[1.6vw] font-avenirBook text-[2.5vw]">
            <h2>
              <span className="font-avenirRegular">by </span>
              <span className="font-avenirBlack">180DC UGM</span>
            </h2>
          </div>
          <div className="my-[2.5vw] ml-[1.6vw] font-avenirRegular text-[1.25vw]/[1.3vw]">
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
            className="ml-[1.6vw] flex h-[3.75vw] w-[10.677vw] items-center justify-center gap-[1vw] rounded-[5.208vw] bg-black font-avenirHeavy text-[1.25vw] text-white transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
          >
            <Image
              src="/img/store/casebook/trolley.png"
              alt="background"
              width={2000}
              height={2000}
              className="h-[1.389vw] w-[1.389vw] object-cover max-lg:hidden"
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
            className="inset-0 -right-[10vw] h-[1019.8] w-[63.006vw] object-cover max-lg:hidden"
          />
        </div>
        <div className="absolute bottom-[2vw] flex w-full flex-col items-center justify-center">
          <span className="mb-[1vw] font-latoBold text-[1.294vw]">GET TO KNOW MORE</span>
          <Image
            src="/img/store/casebook/blackArrowDown.png"
            alt="background"
            width={2000}
            height={2000}
            className="inset-0 h-[0.938vw] w-[1.615vw] animate-bounce object-cover max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
});

const MobileComponent = React.memo(() => {
  return (
    <div className="z-[2] mb-[26.372vw] mt-[12.372vw] flex w-full flex-col items-center lg:hidden">
      <div className="flex w-full flex-col items-center justify-center">
        <div>
          <Image
            src="/img/store/casebook/HeroImageBook.png"
            alt="background"
            width={2000}
            height={2000}
            className="inset-0 h-[86.923vw] w-[107.026vw] scale-[1.4] object-cover pr-[14vw] lg:hidden"
          />
          <div className="ml-[47vw] flex w-full scale-[2] justify-items-start pl-[5vw]">
            <div className="relative mt-[6vw]">
              <Image
                src="/img/store/casebook/whitestar.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="absolute -left-[4vw] top-[1vw] h-[9.538vw] w-[9.141vw] object-cover lg:hidden"
              />
              <Image
                src="/img/store/casebook/vol2.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="absolute right-[3vw] top-[3vw] h-[4.419vw] w-[7.255vw] object-cover lg:hidden"
              />
              <Image
                src="/img/store/casebook/curl.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="absolute -left-[4vw] top-[9.3vw] h-[8.815vw] w-[7.415vw] scale-[0.6] object-cover lg:hidden"
              />
              <Image
                src="/img/store/casebook/sparkOrnament.png"
                alt="Star ornament"
                width={2000}
                height={2000}
                className="absolute right-[8vw] top-[12.8vw] h-[1.776vw] w-[1.531vw] object-cover lg:hidden"
              />

              <div className="mt-[6vw] flex h-[5.677vw] w-[22.708vw] flex-col items-center justify-center rounded-[5.208vw] bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] font-avenirBlack text-[3.333vw] text-lightWhite">
                CASEBOOK
              </div>
              <div className="ml-[1.6vw] mt-[1.3vw] font-avenirBook text-[2.5vw]">
                <h2>
                  <span className="font-avenirRegular">by </span>
                  <span className="font-avenirBlack">180DC UGM</span>
                </h2>
              </div>
              <div className="my-[2.5vw] ml-[1.6vw] font-avenirRegular text-[1.65vw]/[1.75vw]">
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
                className="ml-[1.6vw] mt-[4vw] flex h-[3.75vw] w-[12.677vw] items-center justify-center gap-[1vw] rounded-[5.208vw] bg-black font-avenirHeavy text-[1.45vw] text-white transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
              >
                <Image
                  src="/img/store/casebook/trolley.png"
                  alt="background"
                  width={2000}
                  height={2000}
                  className="h-[1.389vw] w-[1.389vw] object-cover lg:hidden"
                />
                <h1>Buy now</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[4vw] flex w-full flex-col items-center justify-center">
        <span className="mb-[1vw] font-latoBold text-[3.077vw]">GET TO KNOW MORE</span>
        <Image
          src="/img/store/casebook/blackArrowDown.png"
          alt="background"
          width={2000}
          height={2000}
          className="inset-0 h-[2.051vw] w-[3.533vw] animate-bounce object-cover lg:hidden"
        />
      </div>
    </div>
  );
});

export default function HeroCasebook() {
  const [windowSize, setWindowSize] = useState();

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const memoizedWindowSize = useMemo(() => windowSize < 768, [windowSize]);

  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center max-lg:py-[8vh] lg:h-screen">
        <Image
          src="/img/store/casebook/bgHeroCasebook.png"
          alt="180DC UGM Casebook"
          width={2000}
          height={2000}
          className="absolute inset-0 z-0 h-full w-full object-cover max-lg:hidden"
        />
        <Image
          src="/img/store/casebook/bgHeroCasebookMobile.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 -top-[5vw] z-0 w-full object-cover lg:hidden"
        />
        {memoizedWindowSize ? <DekstopComponent /> : <MobileComponent />}
      </div>
    </section>
  );
}
