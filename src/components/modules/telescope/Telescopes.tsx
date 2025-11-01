"use client";
import Image from "next/image";
import { TelescopeBox } from "./TelescopeBox";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Telescopes({ articles, subscribeScrollRef = null }) {
  const [showArticles, setShowArticles] = useState(false);
  const [slide, setSlide] = useState(0);
  const [search, setSearch] = useState("");
  const scrollRef = useRef(null);
  const carouselApiRef = useRef(null);

  // Ensure articles is always an array
  const safeArticles = Array.isArray(articles) ? articles : [];
  const carouselArticles = safeArticles.slice(1, 9);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    if (!carouselApiRef.current) return;

    carouselApiRef.current.on("select", () => {
      setSlide(carouselApiRef.current.selectedScrollSnap());
    });
  }, [carouselApiRef.current]);

  const scrollPrev = () => {
    carouselApiRef.current?.scrollPrev();
  };

  const scrollNext = () => {
    carouselApiRef.current?.scrollNext();
  };

  const scrollTo = (index) => {
    carouselApiRef.current?.scrollTo(index);
  };

  return (
    <section className="relative flex flex-col">
      {/* Hero */}
      <div className="bg-black-300 relative px-[5vw] max-lg:pt-[20vh] max-lg:pb-[15vh] lg:h-screen">
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
          <h1 className="font-avenir-black text-center text-[12vw] leading-[1.2] text-gray-100 lg:text-[4.9vw]">
            Telescope,
            <br />
            Our Newsletter
          </h1>
          <h2 className="font-lato-regular text-center text-[3.5vw] leading-[1.2] text-gray-100 lg:px-[27%] lg:text-[1.5vw]">
            Bringing you the most up-to-date news on 180DC UGM, consulting 101, and mindfulness in
            professional workspaces. Telescope is 180DC UGM&apos;s ongoing quarterly newsletter you
            won&apos;t want to miss.
          </h2>
          <h2 className="font-lato-regular text-center text-[3.5vw] leading-[1.2] text-gray-100 lg:text-[1.5vw]">
            View it here or{" "}
            <button
              className="underline"
              onClick={() => {
                if (subscribeScrollRef?.current) {
                  subscribeScrollRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              subscribe for free!
            </button>
          </h2>
          <button
            className="flex flex-col items-center text-gray-100 outline-0 max-lg:hidden"
            onClick={() => scrollRef.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <h2 className="font-lato-bold text-[1vw]">SCROLL DOWN</h2>
            <FaChevronDown className="animate-moving-pointer text-[1.4vw]" />
          </button>
        </div>
      </div>
      {/* Articles */}
      <div
        ref={scrollRef}
        className="lg:bg-black-300 relative flex flex-col items-center gap-[5vw] px-[5vw] pb-[30vh] max-lg:bg-linear-to-b max-lg:from-black max-lg:from-70% max-lg:to-black/[85.45%] max-lg:to-100%"
      >
        {/* Main Article */}
        {safeArticles.length > 0 && (
          <>
            <div className="font-lato-regular w-full text-[4.5vw] text-gray-100 italic lg:hidden">
              Earlier This Week
            </div>
            <div className="w-full lg:mt-[9vh]">
              <TelescopeBox article={safeArticles[0]} type="lg" />
            </div>
          </>
        )}
        {/* Article List (Mobile) */}
        {safeArticles.length > 1 && (
          <div className="grid w-full grid-cols-2 gap-[5vw] lg:hidden">
            {safeArticles.slice(1, showArticles ? 9 : 3).map((article) => (
              <TelescopeBox key={article.id} article={article} type="sm" />
            ))}
          </div>
        )}
        {safeArticles.length >= 3 && (
          <button
            className="font-lato-regular w-fit text-center text-[3.5vw] leading-[1.2] text-gray-100 underline lg:hidden"
            onClick={() => setShowArticles(!showArticles)}
          >
            Show {showArticles ? "less" : "more"}
          </button>
        )}
        {/* Article Carousel (Desktop) */}
        {carouselArticles.length > 0 && (
          <div className="flex w-full flex-col gap-[2vw] rounded-[20px] max-lg:hidden">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={(api) => (carouselApiRef.current = api)}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="-ml-[50px]">
                {carouselArticles.map((article) => (
                  <CarouselItem key={article.id} className="basis-1/2 pl-[50px]">
                    <TelescopeBox article={article} type="sm" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Carousel Control */}
            {carouselArticles.length > 2 && (
              <div className="flex justify-center gap-[10px]">
                <button className="w-fit" onClick={scrollPrev}>
                  <FaChevronLeft className="text-[2vw] text-gray-100 hover:cursor-pointer" />
                </button>
                <div className="flex items-center gap-[8px]">
                  {Array.from({ length: Math.ceil(carouselArticles.length / 2) }).map((_, idx) => (
                    <button
                      key={idx}
                      className={`h-[17px] w-[17px] rounded-full transition-colors ${
                        slide === idx ? "bg-green-300" : "bg-light-white"
                      }`}
                      onClick={() => scrollTo(idx)}
                    />
                  ))}
                </div>
                <button className="w-fit" onClick={scrollNext}>
                  <FaChevronRight className="text-[2vw] text-gray-100 hover:cursor-pointer" />
                </button>
              </div>
            )}
          </div>
        )}
        {/* Search Article */}
        {safeArticles.length > 0 && (
          <div className="flex w-full flex-col gap-[2vw] lg:hidden">
            <div className="font-lato-regular text-[4.5vw] text-gray-100 italic lg:hidden">
              Find The Article
            </div>
            <input
              className="font-lato-semibold outline-grey-gray-100-180 w-full rounded-[4px] px-[9px] py-[4px] text-[3.6vw] outline-hidden outline-offset-0"
              placeholder="Type the news title or the author's name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* Article List (Mobile) */}
            <div className="mt-[2vw] grid w-full grid-cols-2 gap-[5vw] lg:hidden">
              {safeArticles
                .filter((article) =>
                  search
                    .split(/\s+/)
                    .every((word) =>
                      (article.title + " " + (article.author || ""))
                        .toLowerCase()
                        .includes(word.toLowerCase())
                    )
                )
                .map((article) => (
                  <TelescopeBox key={article.id} article={article} type="sm" />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
