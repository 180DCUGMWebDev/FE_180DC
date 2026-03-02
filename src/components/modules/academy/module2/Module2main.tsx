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
        <Link
          href="/events/academy"
          className="absolute top-[9.5vw] left-[5vw] h-[1.042vw] w-[0.625vw]"
        >
          <Image
            src="/img/academy/module2/Vector.png"
            alt="vector"
            layout="fill"
            className="z-100 hidden object-contain transition-all duration-300 hover:scale-110 lg:block"
          />
        </Link>
        <Image
          src="/img/academy/module2/Topright.png"
          alt="Top Right"
          layout="fill"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center">
        {/* Course Info Cards */}
        {/* Mobile View */}
        <div className="relative mt-[5%] mb-[16%] flex w-[80%] flex-col gap-6 lg:hidden">
          <Image
            src="/img/academy/module2/Bottomleftt.png"
            alt="bl"
            layout="fill"
            className="absolute top-[35%] right-[20vw] z-[-1] !h-auto !w-[43vw]"
          />
          <Image
            src="/img/academy/module2/TopRightt.png"
            alt="tr"
            layout="fill"
            className="absolute bottom-[30%] left-[10vw] z-[-1] !h-auto !w-[43vw]"
          />

          {/* About This Course Card */}
          <div className="h-auto w-full rounded-[18.23px] border border-green-300 bg-white p-[20px] shadow-[0px_36.47px_45.58px_-13.68px_rgba(24,39,75,0.12)]">
            <h2 className="font-lato-bold mb-2 ml-[2%] bg-gradient-to-r from-[#77ba47] to-[#58B9D1] bg-clip-text text-[15.82px] text-transparent">
              About This Course
            </h2>
            <div className="-mt-1 mb-[8px] ml-[2%] h-[0.38px] w-full bg-gradient-to-r from-[#77ba47] to-white" />
            <p className="font-avenir-regular text-[9px] leading-[1.6] text-[#424446]">
              A step further into our learning process, introducing you to the next-level framework
              you can utilize in cracking cases. These tools will enable you to execute your
              solutions even better!{" "}
            </p>
          </div>

          <Link
            href="/events/academy"
            className="absolute top-[-3.5vw] left-[0vw] h-[4vw] w-[2.5vw]"
          >
            <Image
              src="/img/academy/module2/Vector.png"
              alt="vector"
              layout="fill"
              className="z-100 cursor-pointer object-contain transition-all duration-300 hover:scale-110 lg:hidden"
            />
          </Link>

          {/* Take Action Card */}
          <div className="group relative z-20 w-full overflow-hidden rounded-[18.23px] border border-green-300 bg-white p-[20px] pb-[32px] shadow-[0px_36.47px_45.58px_-13.68px_rgba(24,39,75,0.12)]">
            <div className="absolute inset-0 -z-10 translate-x-full transform rounded-[24.22px] bg-[#A6D589] transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <h2 className="font-lato-boldtext-xl mb-2 ml-[2%] bg-gradient-to-r from-[#77ba47] to-[#58B9D1] bg-clip-text text-[15.82px] text-transparent transition-all duration-100 group-hover:invisible lg:text-3xl">
              Take Action
            </h2>
            <h2 className="font-lato-bold invisible absolute top-[20px] left-[20px] z-10 text-[15.82px] text-white opacity-0 transition-all duration-100 group-hover:visible group-hover:opacity-100">
              Take Action
            </h2>

            <div className="-mt-1 mb-[8px] ml-[2%] h-[0.38px] w-full bg-gradient-to-r from-[#77ba47] to-white group-hover:hidden" />

            <div className="mb-4 flex flex-col gap-[36.47px]">
              <div className="ml-[2%] flex flex-col items-start justify-center gap-1">
                <span className="font-lato-bold text-black-400 text-[12.16px] leading-[1.6] transition-colors duration-200 group-hover:text-white">
                  Deadline
                </span>
                <span className="font-avenir-regular text-[12.16px] text-[#424446] transition-colors duration-200 group-hover:text-[#F3FAF0]">
                  24 February 2025
                </span>
              </div>
            </div>

            <div className="relative mt-4 -mb-2 flex justify-center">
              <Link
                href="/events/academy"
                className="font-lato-bold flex h-[3.927vw] w-[19.427vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[1.042vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
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
              <h1 className="font-avenir-heavy text-[1.823vw] text-gray-100">Download E-Module!</h1>
              <div className="flex h-[21.667vw] w-[21.354vw] flex-col rounded-[1.302vw] bg-white p-[1.302vw]">
                <Image
                  src="/img/academy/module1.png"
                  alt="module image"
                  width={2000}
                  height={2000}
                  className="mx-auto h-[10.938vw] w-[20.427vw] object-cover max-lg:hidden"
                />
                <div className="text-[1.2vw]/[1.7vw]">
                  <h1 className="font-avenir-black text-black-300 text-[1.302vw]">Module 2</h1>
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
            <h1 className="font-avenir-regular text-justify text-[1.823vw]/[2vw] text-gray-100">
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

          <h1 className="font-avenir-regular w-[81.944vw] text-justify text-[3.333vw]/[3.1vw] text-gray-100">
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </h1>

          <div className="relative mt-[4vw] mb-[2vw] flex w-[81.944vw] justify-end text-[2vw]/[7vw]">
            <h1 className="font-avenir-regular text-[4.167vw] text-gray-100">Download E-Module!</h1>
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
              <h1 className="font-avenir-black text-black-300 text-[3.333vw]">Module 2</h1>
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
