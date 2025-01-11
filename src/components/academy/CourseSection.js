// Import Packages
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Pagination } from "swiper/modules";

// Import Configs
import { createBackground } from "@/config/Functions";
import Blur from "../global/Blur";

export default function CourseSection() {
  // Page
  const mobileData = [
    {
      image: "/img/academy/dummyCardImage.png",
      title: "Consulting 101",
      href: "academy/module1",
    },
    {
      image: "/img/academy/dummyCardImage.png",
      title: "Business Analysis Framework",
      href: "academy/",
    },
  ];
  // Data
  const data = {
    image: [
      "/img/academy/dummyCardImage.png",
      "/img/academy/dummyCardImage.png",
      "/img/academy/dummyCardImage.png",
      "/img/academy/dummyCardImage.png",
    ],
    module: ["Module 1", "Module 2", "Module 3", "Module 4"],
    title: ["Consulting 101", "Business Analysis Framework", "TBA", "TBA"],
    link: ["academy/module1", "academy/", "academy/", "academy/"],
  };

  const [swiper, setSwiper] = useState();
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center max-lg:py-[8vh] lg:h-screen">
        <Image
          src="/img/academy/GRAD_180-c.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 top-[0vw] z-0 h-full w-full origin-top scale-125 object-cover max-lg:hidden"
        />
        {/* Desktop */}
        <div className="relative flex flex-col items-center justify-center max-lg:hidden">
          {/* Content */}
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="stroke- font-avenirBlack text-[3.385vw] text-lightWhite">
              Start Your Course !
            </h1>
            <div className="w-[90vw]">
              <div className="relative">
                <div onClick={() => swiper.slidePrev()}>
                  <Image
                    src="/img/academy/arrow_back.png"
                    alt="Previous Arrow"
                    className="absolute bottom-[0vh] left-[41vw] z-[20] h-[2.6vw] w-[1.45vw]"
                    width={2000}
                    height={2000}
                    draggable="false"
                  />
                </div>
                <div onClick={() => swiper.slideNext()}>
                  <Image
                    src="/img/academy/arrow_forward.png"
                    alt="Previous Arrow"
                    className="absolute bottom-[0vh] right-[41vw] z-[20] h-[2.6vw] w-[1.45vw]"
                    width={2000}
                    height={2000}
                    draggable="false"
                  />
                </div>
                <Swiper
                  height={720}
                  spaceBetween={10}
                  slidesPerView={2}
                  loop={false}
                  className="z-10"
                  onSwiper={setSwiper}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                >
                  {data.image.map(function (item, index) {
                    return (
                      <SwiperSlide key={item}>
                        <div className="flex gap-x-[2vw]">
                          <Blur
                            isBlur={index !== 0}
                            className="mb-[5vw] h-[25.313vw] w-[42.969vw] rounded-[1.6vw] bg-white shadow-xl"
                          >
                            <Image
                              src={data.image[index]}
                              alt="background"
                              width={2000}
                              height={2000}
                              className="inset-0 mx-[1vw] my-[1vw] h-[14.01vw] w-[40.99vw] object-cover max-lg:hidden"
                            />
                            <div className="mt-[1.5vw] text-[1vw]/[1.7vw]">
                              <h1 className="ml-[1vw] font-avenirHeavy text-[1.302vw]">
                                {data.module[index]}:
                              </h1>
                              <h1 className="ml-[1vw] font-avenirHeavy text-[1.823vw] text-[#58B9D1]">
                                {data.title[index]}
                              </h1>
                            </div>

                            <Link
                              href={data.link[index]}
                              className="mx-[1.3vw] mt-[1.7vw] flex h-[2.917vw] w-[39.948vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[1.563vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
                            >
                              See Details
                            </Link>
                          </Blur>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="z-[2] flex h-[139.722vw] w-full flex-col items-center lg:hidden">
          <Image
            src="/img/academy/GRAD_180Mobile.png"
            alt="background"
            width={2000}
            height={2000}
            className="absolute inset-0 top-[0vw] z-0 h-full w-full origin-top scale-[1.1] rounded-t-xl object-cover lg:hidden"
          />
          <h1 className="z-[3] font-avenirBlack text-[5.556vw] text-lightWhite">
            Start Your Course !
          </h1>
          {mobileData.map((item, index) => {
            return (
              <>
                <Blur
                  key={`${item + index}`}
                  isBlur={index !== 0}
                  className="z-[3] my-[2vw] h-[51.389vw] w-[87.222vw] rounded-[1.6vw] bg-white shadow-xl"
                >
                  <Image
                    src={item.image}
                    alt="background"
                    width={2000}
                    height={2000}
                    className="inset-0 mx-auto my-[2vw] h-[28.333vw] w-[83.333vw] object-cover lg:hidden"
                  />
                  <div className="text-[1vw]/[4.7vw]">
                    <h1 className="ml-[2vw] font-avenirHeavy text-[3.333vw]">
                      {" "}
                      Module {index + 1}:{" "}
                    </h1>
                    <h1 className="ml-[2vw] font-avenirHeavy text-[4.167vw] text-[#58B9D1]">
                      {item.title}
                    </h1>
                  </div>

                  <Link
                    href={item.href}
                    className="mx-auto mb-[1vw] mt-[2vw] flex h-[5.919vw] w-[82.286vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[3.611vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
                  >
                    See Details
                  </Link>
                </Blur>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
