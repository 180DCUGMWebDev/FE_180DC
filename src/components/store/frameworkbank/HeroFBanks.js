"use client";

// Import Packages
import Image from "next/image";
import Link from "next/link";

// Import Configs
import React from "react";
import HeroTemplate from "../HeroTemplate";

export default function HeroFbanks() {
  // Page
  return (
    <HeroTemplate>
      <div className="flex w-full flex-col-reverse items-center justify-center lg:flex-row lg:pl-[5vw] max-lg:ml-[10vw]">
        <div className="relative mt-[14vw] max-lg:scale-[2.3] lg:ml-[6.5vw] lg:mt-0">
          <Image
            src="/img/store/casebook/whitestar.png"
            alt="Star ornament"
            width={2000}
            height={2000}
            className="absolute -top-[5.7vw] left-[-2.7vw] h-[9.538vw] w-[9.141vw] object-cover lg:-top-[5vw] lg:h-[9.538vw] lg:w-[9.141vw]"
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

          <div className="flex h-[5.677vw] w-[30vw] flex-col items-center justify-center rounded-[5.208vw] bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] px-[2vw] pt-[1vw] font-avenirBlack text-[3vw] text-lightWhite lg:mt-[0.5vw] lg:pt-[0.5vw]">
            Framework Bank
          </div>
          <div className="ml-[1.6vw] font-avenirBook text-[1.7vw] max-lg:mt-[0.8vw]">
            <h2>
              <span className="font-avenirRegular">by </span>
              <span className="font-avenirBlack">180DC UGM</span>
            </h2>
          </div>
          <div className="mb-[0.4vw] ml-[1.6vw] mt-[1vw] flex w-[40vw] font-avenirRegular text-[1.5vw]/[1.3vw] leading-[1.7vw] lg:leading-[1.4vw]">
            Your shortcut to{" "}
            <span className="font-semibold text-[#6FAA26]"> &nbsp;21+ effective&nbsp;</span>
            consulting <span className="font-semibold text-[#6FAA26]">&nbsp;frameworks!</span>
          </div>
          <div className="mb-[2vw] ml-[1.6vw] flex w-[40vw] font-avenirRegular text-[1.5vw]/[1.3vw] leading-[1.7vw] lg:leading-[1.4vw]">
            Discover our <span className="font-semibold text-[#58B9D1]">&nbsp;Case Study&nbsp;</span>
            and Many More!
          </div>

          <Link
            href="https://lynk.id/180dcugm/wxwNY7V"
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
            <h1>Buy Now</h1>
          </Link>
        </div>
        <div>
          <Image
            src="/img/store/fbank/FbankHero.png"
            alt="background"
            width={2000}
            height={2000}
            className="inset-0 h-auto scale-[0.9] object-cover max-lg:w-[107.026vw] max-lg:scale-[1.4] max-lg:pr-[14vw] lg:-right-[10vw] lg:h-[1019.8] lg:w-[63.006vw]"
          />
        </div>
      </div>
    </HeroTemplate>
  );
}
