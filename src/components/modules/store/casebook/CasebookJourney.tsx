"use client";

// Import Packages
import React from "react";
import Image from "next/image";

// Import Configs
import { createBackground } from "@/config/Functions";
import Container from "@/components/layout/Container";

export default function CasebookJourney() {
  // Page
  return (
    <div className="relative">
      <Image
        src="/img/store/casebook/bgBlackPatterned1.png"
        alt="180DC UGM Casebook"
        width={2000}
        height={2000}
        className="absolute inset-0 h-full w-full object-cover max-lg:hidden"
      />
      <Image
        src="/img/store/casebook/bgBlackPatternedMobile.png"
        alt="background"
        width={2000}
        height={2000}
        className="absolute inset-0 w-full object-cover lg:hidden"
      />

      <Container className="relative">
        {/* What&apos;s Inside Section */}
        <div className="flex h-fit w-full items-center justify-center px-4 py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Desktop */}
          <div className="relative hidden w-full flex-col items-center justify-center overflow-clip lg:flex">
            <Image
              src="/img/store/casebook/BlueSpark.png"
              alt="180DC UGM Casebook"
              width={202}
              height={202}
              className="absolute -top-8 -right-40 z-0 w-[202px] object-cover"
            />
            {/* Content */}
            <div className="flex w-full flex-col items-center justify-center">
              <h1 className="font-avenir-heavy text-4xl text-white sm:text-5xl lg:text-5xl">
                What&apos;s Inside?
              </h1>
              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-8 lg:gap-8">
                {/* Card 1 */}
                <div className="relative flex h-auto w-full flex-col items-center justify-center rounded-lg bg-white p-6 sm:h-[440px] sm:w-[348px] sm:rounded-[18px] sm:p-4 sm:pt-24">
                  <Image
                    src="/img/store/casebook/gradientCardOrnament.png"
                    alt="Gradient Card Ornament"
                    width={90}
                    height={18}
                    className="absolute top-12 left-12 hidden h-[18px] w-[90px] object-cover sm:block"
                  />
                  <h1 className="font-lato-regular text-center text-sm sm:text-center sm:text-2xl">
                    <span>All you need to know to ace </span>
                    <span className="font-bold underline">CV-making, Cover Letters,</span>
                    <span>and </span>
                    <span className="font-bold underline">Case-Based interview</span>
                  </h1>
                </div>

                {/* Card 2 */}
                <div className="relative flex h-auto w-full flex-col items-center justify-center rounded-lg bg-white p-6 sm:h-[440px] sm:w-[348px] sm:rounded-[18px] sm:p-4 sm:pt-24">
                  <Image
                    src="/img/store/casebook/gradientCardOrnament.png"
                    alt="Gradient Card Ornament"
                    width={90}
                    height={18}
                    className="absolute top-12 left-12 hidden h-[18px] w-[90px] object-cover sm:block"
                  />
                  <h1 className="font-lato-regular text-center text-sm sm:text-center sm:text-2xl">
                    <span>Case practices on Yogyakarta&apos;s SMEs, including </span>
                    <span className="font-bold underline">
                      market entry, profitability, supply chain efficiency,
                    </span>
                    <span> and </span>
                    <span className="font-bold underline">employee retention case</span>
                  </h1>
                </div>

                {/* Card 3 */}
                <div className="relative flex h-auto w-full flex-col items-center justify-center rounded-lg bg-white p-6 sm:h-[440px] sm:w-[348px] sm:rounded-[18px] sm:p-4 sm:pt-24">
                  <Image
                    src="/img/store/casebook/gradientCardOrnament.png"
                    alt="Gradient Card Ornament"
                    width={90}
                    height={18}
                    className="absolute top-12 left-12 hidden h-[18px] w-[90px] object-cover sm:block"
                  />
                  <h1 className="font-lato-regular text-center text-sm sm:text-center sm:text-2xl">
                    <span>Duplicate </span>
                    <span className="font-bold underline">ghost deck & slide format examples </span>
                    <span>you can use to present your own business cases </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet */}
          <div className="z-10 flex w-full flex-col items-center lg:hidden">
            <h1 className="font-avenir-heavy text-center text-3xl text-white sm:text-5xl md:text-6xl">
              What&apos;s Inside?
            </h1>

            <div className="mt-8 flex w-full flex-col gap-6 sm:mt-12 sm:gap-8 md:mt-16 md:gap-10">
              {/* Card 1 */}
              <div className="relative flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 sm:rounded-2xl sm:p-8 md:p-10">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={90}
                  height={18}
                  className="absolute top-6 left-6 h-[18px] w-[90px] object-cover opacity-50 sm:top-8 sm:left-8"
                />
                <h1 className="font-lato-regular text-center text-base sm:text-lg md:text-xl">
                  <span>All you need to know to ace </span>
                  <span className="font-bold underline">CV-making, Cover Letters,</span>
                  <span>and </span>
                  <span className="font-bold underline">Case-Based interview</span>
                </h1>
              </div>

              {/* Card 2 */}
              <div className="relative flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 sm:rounded-2xl sm:p-8 md:p-10">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={90}
                  height={18}
                  className="absolute top-6 left-6 h-[18px] w-[90px] object-cover opacity-50 sm:top-8 sm:left-8"
                />
                <h1 className="font-lato-regular text-center text-base sm:text-lg md:text-xl">
                  <span>Case practices on Yogyakarta&apos;s SMEs, including </span>
                  <span className="font-bold underline">
                    market entry, profitability, supply chain efficiency,
                  </span>
                  <span> and </span>
                  <span className="font-bold underline">employee retention case</span>
                </h1>
              </div>

              {/* Card 3 */}
              <div className="relative flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 sm:rounded-2xl sm:p-8 md:p-10">
                <Image
                  src="/img/store/casebook/gradientCardOrnament.png"
                  alt="Gradient Card Ornament"
                  width={90}
                  height={18}
                  className="absolute top-6 left-6 h-[18px] w-[90px] object-cover opacity-50 sm:top-8 sm:left-8"
                />
                <h1 className="font-lato-regular text-center text-base sm:text-lg md:text-xl">
                  <span>Duplicate </span>
                  <span className="font-bold underline">ghost deck & slide format examples </span>
                  <span>you can use to present your own business cases </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-fit w-full items-center justify-center max-lg:py-24">
          {/* Desktop */}
          <div className="relative flex flex-col items-center justify-center max-lg:hidden">
            {/* Content */}
            <div className="flex w-full flex-col items-center justify-center">
              <div className="mb-8 flex flex-col items-center justify-center">
                <h1 className="font-avenir-heavy text-4xl text-white lg:text-5xl">CASEBOOK</h1>
                <h1 className="font-avenir-heavy text-4xl text-white lg:text-5xl">Journey</h1>
              </div>

              <div className="relative ml-16">
                <Image
                  src="/img/store/casebook/LineBeside.png"
                  alt="Timeline line"
                  width={54}
                  height={800}
                  className="absolute top-12 -left-20 z-0 hidden h-[508px] w-[21px] object-cover lg:flex"
                />
                <div className="mb-8 h-auto w-96 rounded-2xl bg-white px-8 py-6 lg:h-[225px] lg:w-[690px] lg:rounded-[18px] lg:px-8 lg:py-8">
                  <h1 className="font-avenir-black text-lg text-[#6FAA26] lg:text-[19px]">
                    August 2021
                  </h1>
                  <h1 className="font-avenir-black mt-1 text-xl text-[#58B9D1] lg:text-[27px]">
                    Our Mini Casebook was published.
                  </h1>
                  <h1 className="font-lato-regular text-black-300 mt-4 w-full text-sm lg:mt-[12px] lg:w-[618px] lg:text-lg lg:leading-[19px]">
                    180 DC UGM Mini Casebook is our initial version of delivering Consulting 101
                    materials, as well as case interview practices and a step-by-step guide on how
                    to solve a typical business case, which was loved by thousands of you
                  </h1>
                </div>

                <div className="mb-8 h-auto w-96 rounded-2xl bg-white px-8 py-6 lg:mb-8 lg:h-[296px] lg:w-[690px] lg:rounded-[18px] lg:px-8 lg:py-8">
                  <h1 className="font-avenir-black text-lg text-[#6FAA26] lg:text-[19px]">
                    January 2024 - Now
                  </h1>
                  <h1 className="font-avenir-black mt-1 text-xl text-[#58B9D1] lg:text-[27px]">
                    Introducing Casebook Vol.2
                  </h1>
                  <h1 className="font-lato-regular text-black-300 mt-4 w-full text-sm lg:mt-[12px] lg:w-[618px] lg:text-lg lg:leading-[19px]">
                    Casebook Vol 2 aims to provide a walkthrough for readers on getting into
                    Consulting companies, including CV, Cover Letter, and especially case-based
                    interviews. In this newest version of 180DC UGM&apos;s Casebook, SMEs in
                    Yogyakarta become our subject for our thorough case practices, including market
                    entry, profitability case practices, including market entry, profitability,
                    supply chain efficiency, and employee retention case illustrations.
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet */}
          <div className="z-10 flex w-full flex-col items-center lg:hidden">
            <div className="flex w-full flex-col items-center justify-center">
              <div className="mb-8 flex flex-col items-center justify-center sm:mb-12">
                <h1 className="font-avenir-heavy text-3xl text-white sm:text-4xl md:text-5xl">
                  CASEBOOK
                </h1>
                <h1 className="font-avenir-heavy text-3xl text-white sm:text-4xl md:text-5xl">
                  Journey
                </h1>
              </div>

              <div className="relative">
                {/* Card 1 Mobile */}
                <div className="mb-6 rounded-lg bg-white px-6 py-4 sm:mb-8 sm:rounded-2xl sm:px-8 sm:py-6">
                  <h1 className="font-avenir-black text-base text-[#6FAA26] sm:text-lg md:text-xl">
                    August 2021
                  </h1>
                  <h1 className="font-avenir-black mt-1 text-lg text-[#58B9D1] sm:text-xl md:text-2xl">
                    Our Mini Casebook was published.
                  </h1>
                  <h1 className="font-lato-regular text-black-300 mt-3 text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg">
                    180 DC UGM Mini Casebook is our initial version of delivering Consulting 101
                    materials, as well as case interview practices and a step-by-step guide on how
                    to solve a typical business case, which was loved by thousands of you
                  </h1>
                </div>

                {/* Card 2 Mobile */}
                <div className="rounded-lg bg-white px-6 py-4 sm:rounded-2xl sm:px-8 sm:py-6">
                  <h1 className="font-avenir-black text-base text-[#6FAA26] sm:text-lg md:text-xl">
                    January 2024 - Now
                  </h1>
                  <h1 className="font-avenir-black mt-1 text-lg text-[#58B9D1] sm:text-xl md:text-2xl">
                    Introducing Casebook Vol.2
                  </h1>
                  <h1 className="font-lato-regular text-black-300 mt-3 text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg">
                    Casebook Vol 2 aims to provide a walkthrough for readers on getting into
                    Consulting companies, including CV, Cover Letter, and especially case-based
                    interviews. In this newest version of 180DC UGM&apos;s Casebook, SMEs in
                    Yogyakarta become our subject for our thorough case practices, including market
                    entry, profitability case practices, including market entry, profitability,
                    supply chain efficiency, and employee retention case illustrations.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
