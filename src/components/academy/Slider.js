"use client";

import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import CardContents from "./CardContents";
import Image from "next/image";

export default function Slider(image, module, title, link) {
  const data = {
    image: [
      "/img/academy/dummyCardImage.png",
      "/img/academy/dummyCardImage.png",
      "/img/academy/dummyCardImage.png",
    ],
    module: ["Module 1", "Internal Mentoring 2 ", "TBA"],
    title: ["Consulting 101", "Mini Quiz", "TBA"],
    link: ["academy/module1", "academy/im2"],
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
            <SwiperSlide key={index}>
              <CardContents
                image={data.image[index]}
                module={data.module[index]}
                title={data.title[index]}
                link={data.link[index]}
                isBlur={false}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
