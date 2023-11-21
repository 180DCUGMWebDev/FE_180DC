"use client";
import Image from "next/image";
import { articles } from "@/components/content";
import { TelescopeBox } from "./TelescopeBox";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export function Telescopes() {
  const [showArticles, setShowArticles] = useState(false);
  const [slide, setSlide] = useState(0);
  const [search, setSearch] = useState("");
  const scrollRef = useRef();
  const swiperRef = useRef();
  const swiperArticles = articles.slice(1, 9);
  const slideMod = (slide) =>
    (slide + swiperArticles.length - 1) % (swiperArticles.length - 1);
  useEffect(() => {
    swiperRef.current.slideTo(slide);
  }, [slide]);
  return (
    <section className="flex flex-col relative">
      {/* Hero */}
      <div className="max-lg:pt-[20vh] max-lg:pb-[15vh] px-[5vw] relative bg-black lg:h-screen">
        {/* Hero Background */}
        <Image
          src="/img/telescope/hero_bg.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute z-10 inset-0 w-full h-full object-cover"
        />
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col gap-[3vh] lg:w-full lg:h-full lg:justify-center items-center">
          <h1 className="text-lightWhite text-center text-[12vw] lg:text-[4.9vw] font-avenirBlack leading-[1.2]">
            Telescope,
            <br />
            Our Newsletter
          </h1>
          <h2 className="text-lightWhite text-center font-latoRegular text-[3.5vw] lg:px-[27%] lg:text-[1.5vw] leading-[1.2]">
            Bringing you the most up-to-date news on 180DC UGM, consulting 101,
            and mindfulness in professional workspaces. Telescope is 180DC
            UGM&apos;s ongoing quarterly newsletter you won&apos;t want to miss.
          </h2>
          <h2 className="text-lightWhite text-center font-latoRegular text-[3.5vw] lg:text-[1.5vw] leading-[1.2]">
            View it here or{" "}
            <span className="underline">subscribe for free!</span>
          </h2>
          <button
            className="max-lg:hidden text-lightWhite flex flex-col items-center outline-0"
            onClick={() =>
              scrollRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <h2 className="font-latoBold text-[1vw]">SCROLL DOWN</h2>
            <FaChevronDown className="text-[1.4vw] animate-movingPointer" />
          </button>
        </div>
      </div>
      {/* Articles */}
      <div
        ref={scrollRef}
        className="pb-[30vh] relative flex flex-col items-center gap-[5vw] px-[5vw] max-lg:bg-gradient-to-b max-lg:from-black max-lg:from-70% max-lg:to-black/[85.45%] max-lg:to-100% lg:bg-black"
      >
        {/* Main Article */}
        <div className="font-latoRegular italic text-lightWhite text-[4.5vw] w-full lg:hidden">
          Earlier This Week
        </div>
        <div className="w-full lg:mt-[9vh]">
          <TelescopeBox article={articles[0]} type="lg" />
        </div>
        {/* Article List (Mobile) */}
        <div className="grid grid-cols-2 gap-[5vw] w-full lg:hidden">
          {articles.slice(1, showArticles ? 9 : 3).map((article, idx) => (
            <TelescopeBox key={article.id + idx} article={article} type="sm" />
          ))}
        </div>
        {articles.length >= 3 && (
          <button
            className="w-fit text-lightWhite text-center font-latoRegular text-[3.5vw] leading-[1.2] underline lg:hidden"
            onClick={() => setShowArticles(!showArticles)}
          >
            Show {showArticles ? "less" : "more"}
          </button>
        )}
        {/* Article Swiper (Desktop) */}
        <div className="max-lg:hidden w-full rounded-[20px] flex flex-col gap-[2vw]">
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{ delay: 5000 }}
              onSlideChange={(swiper) => setSlide(swiper.realIndex)}
            >
              {swiperArticles.map((article, idx) => (
                <SwiperSlide key={article.id + idx}>
                  <TelescopeBox article={article} type="sm" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Swiper Control */}
          <div className="flex justify-center gap-[10px]">
            <button
              className="w-fit"
              onClick={() => setSlide(slideMod(slide - 1))}
            >
              <FaChevronLeft className="text-lightWhite text-[2vw] hover:cursor-pointer" />
            </button>
            <div className="flex items-center gap-[8px]">
              {swiperArticles.map(
                (articles, idx) =>
                  idx < swiperArticles.length - 1 && (
                    <button
                      key={articles.id}
                      className={`w-[17px] h-[17px] rounded-full ${
                        slide === idx ? "bg-primary" : "bg-lightWhite"
                      }`}
                      onClick={() => setSlide(idx)}
                    />
                  )
              )}
            </div>
            <button
              className="w-fit"
              onClick={() => setSlide(slideMod(slide + 1))}
            >
              <FaChevronRight className="text-lightWhite text-[2vw] hover:cursor-pointer" />
            </button>
          </div>
        </div>
        {/* Search Article */}
        <div className="w-full flex flex-col gap-[2vw] lg:hidden">
          <div className="font-latoRegular italic text-lightWhite text-[4.5vw] lg:hidden">
            Find The Article
          </div>
          <input
            className="rounded-[4px] px-[9px] py-[4px] w-full text-[3.6vw] outline-none outline-grey-white180 outline-offset-0"
            placeholder="Type the news title or the author's name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* Article List (Mobile) */}
          <div className="grid grid-cols-2 mt-[2vw] gap-[5vw] w-full lg:hidden">
            {articles
              .filter((article) =>
                search
                  .split(/\s+/)
                  .every((word) =>
                    (article.title + " " + article.author)
                      .toLowerCase()
                      .includes(word.toLowerCase())
                  )
              )
              .map((article, idx) => (
                <TelescopeBox
                  key={article.id + idx}
                  article={article}
                  type="sm"
                />
              ))}
            {JSON.stringify(search.split(/\s+/))}
          </div>
        </div>
      </div>
    </section>
  );
}
