// Import Packages
"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function Module2Main() {
  //Ignore Hydration Error
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="relative flex h-fit w-full items-center justify-center max-lg:py-[8vh] lg:h-screen">
        <Link href="/academy" className="absolute top-[9.5vw] left-[5vw] h-[1.042vw] w-[0.625vw]">
          <Image
            src="/img/academy/arrow.png"
            alt="arrow"
            width={2000}
            height={2000}
            className="absolute mx-auto object-cover max-lg:hidden"
          />
        </Link>
        {/* Desktop */}
        <div className="relative mt-[5vw] flex items-center justify-center gap-x-[5vw] max-lg:hidden">
          {/* Kiri */}
          <div className="">
            <div>
              <h1 className="font-avenir-black text-[1.563vw] text-white">Module 2</h1>
              <h1 className="font-avenir-black bg-linear-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text text-[2.865vw] text-transparent">
                {"Consulting 101"}
              </h1>
            </div>
            <div className="mt-[8vw]">
              <h1 className="font-avenir-heavy text-brand-light-white text-[1.823vw]">
                Download E-Module!
              </h1>
              <div className="flex h-[21.667vw] w-[21.354vw] flex-col rounded-[1.302vw] bg-white p-[1.302vw]">
                <Image
                  src="/img/academy/module1.png"
                  alt="module image"
                  width={2000}
                  height={2000}
                  className="mx-auto h-[10.938vw] w-[20.427vw] object-cover max-lg:hidden"
                />
                <div className="text-[1.2vw]/[1.7vw]">
                  <h1 className="font-avenir-black text-brand-black text-[1.302vw]">Module 2</h1>
                  <h1 className="font-avenir-black bg-linear-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text text-[1.823vw] text-transparent">
                    {"Business Analysis Framework"}
                  </h1>
                </div>
                <Link
                  href=""
                  className="font-lato-bold mt-[0.8vw] flex h-[3.927vw] w-[19.427vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[1.042vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
          {/* Kanan */}
          <div className="w-[55.469vw]">
            <h1 className="font-avenir-regular text-brand-light-white text-justify text-[1.823vw]/[2vw]">
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </h1>
            <div className="z-2 mt-[2.4vw] overflow-clip rounded-3xl">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=zkgZ5LiRiZA"}
                controls={true}
                light={true}
                width="55.469vw"
                height="31.201vw"
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="relative z-2 mt-[20.372vw] flex w-full flex-col items-center lg:hidden">
          <div className="relative flex w-[81.944vw] text-[2vw]/[7vw]">
            <Link
              href="/academy"
              className="absolute top-[2.5vw] -left-[3.7vw] h-[3.056vw] w-[1.944vw]"
            >
              <Image
                src="/img/academy/arrow.png"
                alt="arrow"
                width={2000}
                height={2000}
                className="h-[3.056vw] w-[1.944vw] object-cover lg:hidden"
              />
            </Link>
            <div className="h-[22.111vw]">
              <h1 className="font-avenir-heavy text-[5.556vw] text-white">Module 2</h1>
              <h1 className="font-avenir-black h-[18vw] bg-linear-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text text-[7.222vw] text-transparent">
                {"Business Analysis Framework"}
              </h1>
            </div>
          </div>

          <div className="my-[3vw] overflow-clip rounded-xl">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=zkgZ5LiRiZA"}
              controls={true}
              light={true}
              height="45.556vw"
              width="81.944vw"
            />
          </div>

          <h1 className="font-avenir-regular text-brand-light-white w-[81.944vw] text-justify text-[3.333vw]/[3.1vw]">
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </h1>

          <div className="relative mt-[4vw] mb-[2vw] flex w-[81.944vw] justify-end text-[2vw]/[7vw]">
            <h1 className="font-avenir-regular text-brand-light-white text-[4.167vw]">
              Download E-Module!
            </h1>
          </div>

          <div className="relative flex h-[21.742vw] w-[81.944vw] rounded-md bg-white">
            <Image
              src="/img/academy/module1.png"
              alt="module image"
              width={2000}
              height={2000}
              className="my-auto ml-[0.5vw] h-[17.392vw] w-[30.639vw] object-cover lg:hidden"
            />
            <div className="mb-[1vw] flex w-[40vw] flex-col justify-end text-[2vw]/[4.3vw]">
              <h1 className="font-avenir-black text-brand-black text-[3.333vw]">Module 2</h1>
              <h1 className="font-avenir-black h-[10vw] bg-linear-to-r from-[#6FAA26] to-[#58B9D1] bg-clip-text text-[4.722vw] text-transparent">
                {"Business Analysis Framework"}
              </h1>
            </div>
            <a
              href=""
              className="mx-auto my-auto h-[8.572vw] w-[7.347vw] rounded-lg border border-black bg-white transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
            >
              <Image
                src="/img/academy/ArrowDownload.png"
                alt="Download Arrow"
                width={200000}
                height={200000}
                className="mx-auto my-[1.5vw] w-[2.939vw] object-cover lg:hidden"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
