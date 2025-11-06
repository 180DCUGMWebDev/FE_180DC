"use client";

// Import Packages
import Image from "next/image";
import Link from "next/link";

// Import Configs
import React from "react";
import Container from "@/components/layout/Container";

export default function HeroCasebook() {
  // Page
  return (
    <div className="bg-[url(/img/store/casebook/bgHeroCasebookMobile.png)] bg-cover lg:bg-[url(/img/store/casebook/bgHeroCasebook-c.png)]">
      <Container>
        <div className="flex min-h-screen w-full flex-col-reverse items-center justify-center gap-4 px-4 py-8 sm:px-6 sm:py-12 lg:flex-row lg:gap-0 lg:py-0 lg:pl-20">
          {/* Content Section */}
          <div className="relative mt-12 flex flex-col flex-wrap items-center lg:ml-24 lg:scale-100 lg:items-start">
            {/* Ornaments */}
            <Image
              src="/img/store/casebook/whitestar.png"
              alt="Star ornament"
              width={132}
              height={137}
              className="absolute -top-8 -left-2 hidden h-20 w-24 object-cover sm:-top-10 sm:h-24 sm:w-28 md:-top-12 md:flex md:h-28 md:w-32 lg:-top-20 lg:h-[137px] lg:w-[132px]"
            />
            <Image
              src="/img/store/casebook/vol2.png"
              alt="Vol 2 badge"
              width={130}
              height={60}
              className="absolute top-0 left-[60%] z-2 h-10 w-16 object-cover sm:left-[70%] sm:h-12 sm:w-20 md:-top-4 md:left-[63%] md:h-14 md:w-24 lg:-top-10 lg:left-[216px] lg:h-16 lg:w-[130px]"
            />
            <Image
              src="/img/store/casebook/curl.png"
              alt="Curl ornament"
              width={107}
              height={127}
              className="absolute top-6 -left-12 h-20 w-16 object-cover sm:top-8 sm:-left-14 sm:h-24 sm:w-20 md:top-10 md:-left-16 md:h-28 md:w-24 lg:top-8 lg:-left-24 lg:h-[127px] lg:w-[107px]"
            />
            <Image
              src="/img/store/casebook/sparkOrnament.png"
              alt="Spark ornament"
              width={22}
              height={26}
              className="absolute top-12 left-54 h-4 w-3 object-cover sm:top-16 sm:left-62 sm:h-5 sm:w-4 md:top-18 md:left-80 md:h-6 md:w-5 lg:top-20 lg:right-8 lg:h-[26px] lg:w-[22px]"
            />

            {/* CASEBOOK Title */}
            <div className="font-avenir-black relative flex h-12 w-fit flex-col items-center justify-center rounded-full bg-gradient-to-r from-[#6FAA26] to-[#58B9D1] px-6 pt-2 text-2xl text-gray-100 sm:h-14 sm:px-8 sm:pt-3 sm:text-3xl md:h-16 md:text-4xl lg:h-20 lg:px-8 lg:pt-4 lg:text-5xl">
              CASEBOOK
            </div>

            {/* By 180DC UGM */}
            <div className="font-avenir-book mt-2 text-base sm:mt-3 sm:text-lg md:mt-4 md:text-xl lg:mt-0 lg:ml-6 lg:text-2xl">
              <h2>
                <span className="font-avenir-regular">by </span>
                <span className="font-avenir-black">180DC UGM</span>
              </h2>
            </div>

            {/* Description */}
            <div className="font-avenir-regular my-6 flex w-full flex-wrap px-4 text-center text-sm leading-5 whitespace-normal sm:my-8 sm:text-base sm:leading-6 md:my-10 md:text-lg md:leading-7 lg:my-10 lg:ml-6 lg:text-left lg:leading-5">
              <p>The ultimate e-book you need to learn about consulting! Get it in bundles!</p>
            </div>

            {/* Buy Now Button */}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9lMS6EHYZPyo6IL80EcYrdxVglOv1PnpZnTS29Ew0jBHEMw/viewform"
              className="bg-black-300 font-avenir-heavy hover:bg-black-200 relative flex h-12 w-44 items-center justify-center gap-3 rounded-full text-base text-white transition-all duration-300 ease-in-out hover:scale-105 sm:h-13 sm:w-48 sm:text-lg md:h-14 md:text-base lg:h-14 lg:w-[154px] lg:text-lg"
            >
              <Image
                src="/img/store/casebook/greenstar.png"
                alt=""
                width={128}
                height={128}
                className="absolute -top-12 -left-8 w-20 sm:-top-14 sm:-left-10 sm:w-24 md:-top-16 md:-left-12 md:w-28 lg:-top-16 lg:-left-12 lg:w-32"
              />
              <Image
                src="/img/store/casebook/trolley.png"
                alt="Cart icon"
                width={20}
                height={20}
                className="h-4 w-4 object-cover sm:h-5 sm:w-5"
              />
              <h1>Buy Now</h1>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative flex aspect-[9027/1020] w-full items-center justify-center">
            <Image
              src="/img/store/casebook/HeroImageBook-c.png"
              alt="Casebook cover"
              width={907}
              height={1020}
              className="absolute h-full w-full object-cover sm:scale-90 md:scale-100 lg:-right-40 lg:h-[1019.8px] lg:w-[907px] lg:scale-100"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
