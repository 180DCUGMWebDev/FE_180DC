"use client";

import { createBackground } from "@/config/Functions";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./merch.css";
import "swiper/css";
import "swiper/css/pagination";

const WhatTheySay = () => {
  const testimonies = [
    {
      name: "John Doe 1",
      role: "Chief Marketing of MyCompany",
      text: "180 DC UGM Mini Casebook is our initial version of delivering Consulting 101 materials, as well as case interview practices and a step-by-step guide on how to solve a typical business case, which was loved by thousands of yous",
      profile: "",
    },
    {
      name: "John Doe 2",
      role: "Chief Marketing of MyCompany",
      text: "180 DC UGM Mini Casebook is our initial version of delivering Consulting 101 materials, as well as case interview practices and a step-by-step guide on how to solve a typical business case, which was loved by thousands of yous",
      profile: "",
    },
    {
      name: "John Doe 3",
      role: "Chief Marketing of MyCompany",
      text: "180 DC UGM Mini Casebook is our initial version of delivering Consulting 101 materials, as well as case interview practices and a step-by-step guide on how to solve a typical business case, which was loved by thousands of yous",
      profile: "",
    },
    {
      name: "John Doe 4",
      role: "Chief Marketing of MyCompany",
      text: "180 DC UGM Mini Casebook is our initial version of delivering Consulting 101 materials, as well as case interview practices and a step-by-step guide on how to solve a typical business case, which was loved by thousands of yous",
      profile: "",
    },
    {
      name: "John Doe 5",
      role: "Chief Marketing of MyCompany",
      text: "180 DC UGM Mini Casebook is our initial version of delivering Consulting 101 materials, as well as case interview practices and a step-by-step guide on how to solve a typical business case, which was loved by thousands of yous",
      profile: "",
    },
    {
      name: "John Doe 6",
      role: "Chief Marketing of MyCompany",
      text: "180 DC UGM Mini Casebook is our initial version of delivering Consulting 101 materials, as well as case interview practices and a step-by-step guide on how to solve a typical business case, which was loved by thousands of yous",
      profile: "",
    },
    {
      name: "John Doe 7",
      role: "Chief Marketing of MyCompany",
      text: "180 DC UGM Mini Casebook is our initial version of delivering Consulting 101 materials, as well as case interview practices and a step-by-step guide on how to solve a typical business case, which was loved by thousands of yous",
      profile: "",
    },
    {
      name: "John Doe 8",
      role: "Chief Marketing of MyCompany",
      text: "180 DC UGM Mini Casebook is our initial version of delivering Consulting 101 materials, as well as case interview practices and a step-by-step guide on how to solve a typical business case, which was loved by thousands of yous",
      profile: "",
    },
    {
      name: "John Doe 9",
      role: "Chief Marketing of MyCompany",
      text: "180 DC UGM Mini Casebook is our initial version of delivering Consulting 101 materials, as well as case interview practices and a step-by-step guide on how to solve a typical business case, which was loved by thousands of yous",
      profile: "",
    },
    {
      name: "John Doe 10",
      role: "Chief Marketing of MyCompany",
      text: "180 DC UGM Mini Casebook is our initial version of delivering Consulting 101 materials, as well as case interview practices and a step-by-step guide on how to solve a typical business case, which was loved by thousands of yous",
      profile: "",
    },
  ];
  const P = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className="relative">
      {createBackground("dark")}
      <div className="relative w-full bg-[url('/img/store/merch/bg-wts.png')] object-cover py-[6vw] text-white">
        {/* Testimoni */}
        <div className="w-full justify-center max-lg:flex lg:px-[10vw]">
          <span className="bg-[linear-gradient(90deg,_#6FAA26_7%,_#58B9D1_85%)] bg-clip-text font-avenirBlack text-[6.7vw] text-transparent lg:text-[3vw]">
            What did they say?
          </span>
        </div>
        {/* Testimoni */}
        <div className="mt-[5vw] w-full lg:mt-[2vw]">
          <Swiper
            effect="slide"
            slidesPerView={1.6}
            freeMode
            spaceBetween={"2vw"}
            centeredSlides
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            loop
            speed={4000}
            autoplay={{
              delay: 1000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
              waitForTransition: true,
              stopOnLastSlide: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="swipper-wrapper relative flex w-full items-center justify-center gap-[2vw] overflow-visible bg-transparent"
          >
            {testimonies.map((item) => {
              return (
                <SwiperSlide className="relative bg-transparent">
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div className="flex h-[75vw] w-[92%] max-w-[1200px] flex-col items-center justify-center rounded-2xl bg-primary lg:h-[15vw] lg:w-[98%]">
                      <div className="w-[90%]">
                        <i>"{item.text}"</i>
                      </div>
                      <div className="flex h-auto w-[90%] flex-row gap-[2%] bg-[blue]">
                        <div className="relative h-fit w-[8%] rounded-[50%] bg-[white]">
                          <div className="aspect-[1/1] w-[20px] bg-[red]">
                            <Image alt="" src={item.profile} width={2000} height={2000} fill />
                          </div>
                        </div>

                        <div className="w-[85%]">
                          <div>
                            <b>{item.name}</b>
                          </div>
                          <div>{item.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhatTheySay;
