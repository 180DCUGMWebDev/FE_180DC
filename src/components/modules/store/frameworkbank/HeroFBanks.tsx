"use client";

// Import Packages
import Image from "next/image";
import Link from "next/link";

// Import Configs
import React from "react";
import HeroTemplate from "../HeroTemplate";
import Container from "@/components/layout/Container";

export default function HeroFbanks() {
  // Page
  return (
    <div className="bg-[url(/img/store/casebook/bgHeroCasebookMobile.png)] bg-cover lg:bg-[url(/img/store/casebook/bgHeroCasebook-c.png)]">
      <Container>
        <div className="relative flex min-h-screen w-full flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:gap-0 lg:pl-20">
          {/* Left Content */}
          <div className="relative flex flex-col items-center px-4 max-lg:scale-75 lg:ml-24 lg:items-start">
            {/* Ornaments */}
            <Image
              src="/img/store/casebook/whitestar.png"
              alt="Star ornament"
              width={137}
              height={137}
              className="absolute -top-20 left-[-39px] h-[137px] w-[132px] object-cover lg:-top-20 lg:h-[137px] lg:w-[132px]"
            />

            <Image
              src="/img/store/casebook/curl.png"
              alt="Curl ornament"
              width={107}
              height={127}
              className="absolute top-9 -left-16 h-32 w-28 object-cover max-lg:scale-60 lg:top-8 lg:-left-24 lg:h-[127px] lg:w-[107px]"
            />
            <Image
              src="/img/store/casebook/sparkOrnament.png"
              alt="Spark ornament"
              width={26}
              height={26}
              className="absolute top-24 left-[209px] h-[26px] w-[22px] object-cover lg:top-20 lg:right-8 lg:h-[26px] lg:w-[22px]"
            />

            {/* Main Title */}
            <div className="font-avenir-black flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] px-6 py-3 text-2xl text-gray-100 sm:px-8 sm:text-3xl lg:mt-2 lg:h-20 lg:w-[432px] lg:px-8 lg:text-[43px]">
              Framework Bank
            </div>

            {/* Subtitle */}
            <div className="font-avenir-book mt-3 text-center text-lg lg:ml-6 lg:text-left">
              <h2>
                <span className="font-avenir-regular">by </span>
                <span className="font-avenir-black">180DC UGM</span>
              </h2>
            </div>

            {/* Description */}
            <div className="font-avenir-regular mt-4 mb-2 flex w-full flex-col gap-2 text-center text-sm sm:text-base lg:ml-6 lg:w-[576px] lg:text-left lg:text-[22px]">
              <p className="leading-relaxed">
                Your shortcut to <span className="font-semibold text-[#6FAA26]">21+ effective</span>{" "}
                consulting <span className="font-semibold text-[#6FAA26]">frameworks!</span>
              </p>
              <p className="leading-relaxed">
                Discover our <span className="font-semibold text-[#58B9D1]">Case Study</span> and
                Many More!
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="https://lynk.id/180dcugm/wxwNY7V"
              className="bg-black-300 font-avenir-heavy hover:bg-black-200 relative mt-6 mb-8 flex h-12 w-[182px] items-center justify-center gap-3 rounded-full text-base text-white transition-all duration-300 ease-in-out sm:h-14 sm:w-48 lg:ml-6 lg:h-14 lg:w-[154px]"
            >
              <Image
                src="/img/store/casebook/greenstar.png"
                alt=""
                width={128}
                height={128}
                className="absolute -top-16 -left-12 w-24 lg:w-32"
              />
              <Image
                src="/img/store/casebook/trolley.png"
                alt="shopping cart"
                width={20}
                height={20}
                className="h-5 w-5 object-cover"
              />
              <span>Buy Now</span>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative flex w-full items-center justify-center lg:justify-end">
            <Image
              src="/img/store/fbank/Book_Mockup_1.png"
              alt="Framework Bank Mockup"
              width={907}
              height={1020}
              className="h-auto w-full scale-75 rotate-12 object-cover sm:w-[1541px] sm:scale-100 sm:rotate-30 lg:-right-40 lg:w-[907px] lg:scale-100 lg:rotate-30"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
