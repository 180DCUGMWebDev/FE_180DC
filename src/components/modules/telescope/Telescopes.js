"use client";
import Image from "next/image";
import { TelescopeBox } from "./TelescopeBox";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export function Telescopes({ articles, subscribeScrollRef }) {
  const [showArticles, setShowArticles] = useState(false);
  const [slide, setSlide] = useState(0);
  const [search, setSearch] = useState("");
  const scrollRef = useRef();
  const swiperRef = useRef();
  const swiperArticles = articles.slice(1, 9);
  const slideMod = (slide) => (slide + swiperArticles.length - 1) % (swiperArticles.length - 1);
  useEffect(() => {
    swiperRef.current.slideTo(slide);
  }, [slide]);
  return (
    <section className="relative flex flex-col">
      {/* Hero */}
      <div className="relative bg-black px-[5vw] max-lg:pb-[15vh] max-lg:pt-[20vh] lg:h-screen">
        {/* Hero Background */}
        <Image
          src="/img/telescope/hero_bg-c.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-full w-full object-cover"
        />
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center gap-[3vh] lg:h-full lg:w-full lg:justify-center">
          <h1 className="text-center font-avenir-black text-[12vw] leading-[1.2] text-light-white lg:text-[4.9vw]">
            Telescope,
            <br />
            Our Newsletter
          </h1>
          <h2 className="text-center font-lato-regular text-[3.5vw] leading-[1.2] text-light-white lg:px-[27%] lg:text-[1.5vw]">
            Bringing you the most up-to-date news on 180DC UGM, consulting 101, and mindfulness in
            professional workspaces. Telescope is 180DC UGM&apos;s ongoing quarterly newsletter you
            won&apos;t want to miss.
          </h2>
          <h2 className="text-center font-lato-regular text-[3.5vw] leading-[1.2] text-light-white lg:text-[1.5vw]">
            View it here or{" "}
            <button
              className="underline"
              onClick={() =>
                subscribeScrollRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              subscribe for free!
            </button>
          </h2>
          <button
            className="flex flex-col items-center text-light-white outline-0 max-lg:hidden"
            onClick={() => scrollRef.current.scrollIntoView({ behavior: "smooth" })}
          >
            <h2 className="font-lato-bold text-[1vw]">SCROLL DOWN</h2>
            <FaChevronDown className="animate-moving-pointer text-[1.4vw]" />
          </button>
        </div>
      </div>
      {/* Articles */}
      <div
        ref={scrollRef}
        className="relative flex flex-col items-center gap-[5vw] px-[5vw] pb-[30vh] max-lg:bg-linear-to-b max-lg:from-black max-lg:from-70% max-lg:to-black/[85.45%] max-lg:to-100% lg:bg-black"
      >
        {/* Main Article */}
        <div className="w-full font-lato-regular text-[4.5vw] italic text-light-white lg:hidden">
          Earlier This Week
        </div>
        <div className="w-full lg:mt-[9vh]">
          <TelescopeBox article={articles[0]} type="lg" />
        </div>
        {/* Article List (Mobile) */}
        <div className="grid w-full grid-cols-2 gap-[5vw] lg:hidden">
          {articles.slice(1, showArticles ? 9 : 3).map((article) => (
            <TelescopeBox key={article.id} article={article} type="sm" />
          ))}
        </div>
        {articles.length >= 3 && (
          <button
            className="w-fit text-center font-lato-regular text-[3.5vw] leading-[1.2] text-light-white underline lg:hidden"
            onClick={() => setShowArticles(!showArticles)}
          >
            Show {showArticles ? "less" : "more"}
          </button>
        )}
        {/* Article Swiper (Desktop) */}
        <div className="flex w-full flex-col gap-[2vw] rounded-[20px] max-lg:hidden">
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{ delay: 5000 }}
              onSlideChange={(swiper) => setSlide(swiper.realIndex)}
            >
              {swiperArticles.map((article) => (
                <SwiperSlide key={article.id}>
                  <TelescopeBox article={article} type="sm" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Swiper Control */}
          <div className="flex justify-center gap-[10px]">
            <button className="w-fit" onClick={() => setSlide(slideMod(slide - 1))}>
              <FaChevronLeft className="text-[2vw] text-light-white hover:cursor-pointer" />
            </button>
            <div className="flex items-center gap-[8px]">
              {swiperArticles.map(
                (article, idx) =>
                  idx < swiperArticles.length - 1 && (
                    <button
                      key={article.slug}
                      className={`h-[17px] w-[17px] rounded-full ${
                        slide === idx ? "bg-primary" : "bg-light-white"
                      }`}
                      onClick={() => setSlide(idx)}
                    />
                  ),
              )}
            </div>
            <button className="w-fit" onClick={() => setSlide(slideMod(slide + 1))}>
              <FaChevronRight className="text-[2vw] text-light-white hover:cursor-pointer" />
            </button>
          </div>
        </div>
        {/* Search Article */}
        <div className="flex w-full flex-col gap-[2vw] lg:hidden">
          <div className="font-lato-regular text-[4.5vw] italic text-light-white lg:hidden">
            Find The Article
          </div>
          <input
            className="w-full rounded-[4px] px-[9px] py-[4px] font-lato-semibold text-[3.6vw] outline-hidden outline-offset-0 outline-grey-white180"
            placeholder="Type the news title or the author's name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* Article List (Mobile) */}
          <div className="mt-[2vw] grid w-full grid-cols-2 gap-[5vw] lg:hidden">
            {articles
              .filter((article) =>
                search
                  .split(/\s+/)
                  .every((word) =>
                    (article.title + " " + article.author)
                      .toLowerCase()
                      .includes(word.toLowerCase()),
                  ),
              )
              .map((article) => (
                <TelescopeBox key={article.id} article={article} type="sm" />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
