"use client";

import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";
import Blur from "../global/Blur";

export default function Slider() {
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
                <Blur className="mb-[5vw] h-[25.313vw] w-[42.969vw] rounded-[1.6vw] bg-white shadow-xl">
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
  );
}
