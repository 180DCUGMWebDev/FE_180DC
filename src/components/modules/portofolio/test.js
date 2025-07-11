"use client";

// Import Packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useMemo, useCallback, useEffect, useRef, useState } from "react";

// Import Components
import ImgF from "@/components/global/ImgF";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Configs
import { createBackground } from "@/config/Functions";

// Import Styles
import "swiper/css";

export default function PreviousClients() {
  // Data
  const clientsPorto = useMemo(
    () => [
      {
        name: "Kopi Sembilan",
        nps: "100%",
        backgr: "/img/portofolio/company_bgs/kopi_sembilan.png",
        logo: "/img/portofolio/company_logos/kopi_sembilan.png",
        pleft:
          "Kopi Sembilan faced problems regarding to supply chain, ambiguity of their management structure, and challenges on getting structured budget planning and bookkeeping.",
        pcenter:
          "We helped them by restructurizing the hierarchy of Kopi Sembilan’s management. Our team also provided the integrated bookkeeping system by creating supply chain tracking management system",
        pright:
          "We provided organization structure, inventory management, and management controlling system which are more effective for financial reporting. It also affects for the better operational controlling and decision making in Kopi Sembilan.",
      },
      {
        name: "Planet Protector Packaging",
        nps: "100%",
        backgr: "/img/portofolio/company_bgs/planet_protector_packaging.png",
        logo: "/img/portofolio/company_logos/planet_protector_packaging.png",
        pleft:
          "PPP needs advice to penetrate the Indonesian market as the part of their market expansion.",
        pcenter:
          "We provided organization structure, inventory management, and management controlling syst",
        pright:
          "We had been able to secure several companies to make partnership with PPP and recommended strategy to approach the government. The insights that we had got, helped PPP to penetrate Indonesian market.",
      },
    ],
    [],
  );

  // Scroll Down Button
  const handleClick = () => scrollRef.current.scrollIntoView({ behavior: "smooth" });

  // Slide Position
  const [slide, setSlide] = useState(0);
  const swiperRef = useRef();
  const swiperRefMobile = useRef();
  const scrollRef = useRef();

  // Bullets
  const loopForBullets = useCallback(() => {
    return (
      <>
        {clientsPorto.map((client, idx) => {
          if (idx !== clientsPorto.length - 1)
            return (
              <div
                key={JSON.stringify(client) + idx}
                className={
                  "h-[0.8vw] w-[0.8vw] rounded-full hover:cursor-pointer 2xl:h-[12.3px] 2xl:w-[12.3px] " +
                  (slide === idx ? "bg-primary" : "bg-lightWhite")
                }
                onClick={() => {
                  setSlide(idx);
                }}
              />
            );
        })}
      </>
    );
  }, [clientsPorto, slide]);

  const [slideBullets, setSlideBullets] = useState(loopForBullets);

  useEffect(() => {
    setSlideBullets(loopForBullets);
    swiperRef.current.slideTo(slide);
    swiperRefMobile.current.slideTo(slide);
  }, [loopForBullets, slide]);

  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Section 1: Title */}
      <div className="relative flex h-[100vmax] w-full flex-col items-center justify-center overflow-clip px-[10vw] max-lg:gap-[2vh] lg:h-[100vh]">
        {/* Background */}
        <div className="absolute -z-[998] h-full w-[240vh] overflow-clip lg:w-full">
          <ImgF alt="portofolio hero background" src="/img/portofolio/hero_bg-c.png" />
        </div>
        <div className="absolute -z-[997] h-full w-full bg-gradient-to-b from-transparent from-[70%] to-lightWhite to-[90%]" />
        <div className="absolute -z-[996] h-full w-full bg-black opacity-[85.45%]" />

        {/* Hero */}
        <h1 className="text-center font-avenirBlack text-[12vw]/[11vw] text-lightWhite lg:text-[4.9vw]/[4.8vw] 2xl:text-[75px]/[64.5px]">
          {"Our Previous Clients"}
        </h1>

        {/* Scroll Down [DESKTOP] */}
        <button className="flex flex-col items-center outline-0" onClick={handleClick}>
          <h2 className="mt-[1.4vw] font-latoBold text-[1vw] text-lightWhite max-lg:hidden 2xl:mt-[21.5px] 2xl:text-[15.36px]">
            {"SCROLL DOWN"}
          </h2>
          <FaChevronDown className="animate-movingPointer text-[1.4vw] text-lightWhite hover:cursor-pointer 2xl:text-[21.5px]" />
        </button>

        {/* Swiper [MOBILE] */}
        <div className="h-fit w-full overflow-clip rounded-[5vw] rounded-bl-none lg:hidden">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRefMobile.current = swiper;
            }}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            // loop={true}
            onSlideChange={(swiper) => {
              setSlide(swiper.realIndex);
            }}
          >
            {clientsPorto.map((client, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="relative h-[55vmax] w-full overflow-clip rounded-[5vw] rounded-bl-none">
                    {/* Background */}
                    <div className="absolute -z-[990] h-full w-full">
                      <div className="relative h-full w-full bg-[#2C6970]/[47%]">
                        <div className="absolute left-0 -z-[990] h-full w-[70vh]">
                          <ImgF
                            alt={client.name + "_bg" + "_" + { idx }}
                            src={client.backgr}
                            heightPtg={"100%"}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Cards */}
                    <div className="flex h-full w-full items-center justify-center px-[1vmin] py-[1.5vh]">
                      {/* Side Arrow Left */}
                      <div
                        className="mr-[1vw] w-fit"
                        onClick={() => {
                          setSlide(
                            (slide - 1 + clientsPorto.length - 1) % (clientsPorto.length - 1),
                          );
                        }}
                      >
                        <FaChevronLeft className="text-[6vw] text-lightWhite/[35%]" />
                      </div>

                      <div className="flex h-full w-full flex-col items-center justify-center gap-[5vw] overflow-clip">
                        {/* Identity */}
                        <div className="relative mt-[1.1vw] flex h-[30%] w-full gap-[4vw]">
                          {/* Company Logo */}
                          <div className="flex h-full w-[35%] items-center justify-end">
                            <div className="flex w-[100%] overflow-clip rounded-[3vw]">
                              <ImgF alt={client.name + "_logo"} src={client.logo} />
                            </div>
                          </div>

                          {/* Title & NPS */}
                          <div className="flex h-full w-[65%] flex-col items-start justify-center gap-[.8vh]">
                            <p className="font-avenirBlack text-[5vw] leading-none text-primary">
                              {client.name}
                            </p>
                            {/* <p className="font-avenirLight text-[4.5vw] leading-none text-secondary">
                              {"NPS of "}
                              <strong className="font-avenirHeavy">{client.nps}</strong>
                            </p> */}
                          </div>
                        </div>

                        {/* Lower Body: Description */}
                        <div className="swiper-no-swiping flex h-[60%] w-full flex-col gap-[2vh] overflow-y-scroll">
                          <p className="font-avenirBlack text-primary">
                            What challenges does {client.name} face?
                          </p>
                          <p className="font-latoRegular text-[3.5vw] leading-[1.2] text-lightWhite">
                            {client.pright}
                          </p>
                          <p className="font-latoRegular text-[3.5vw] leading-[1.2] text-lightWhite">
                            {client.pcenter}
                          </p>
                          <p className="font-latoRegular text-[3.5vw] leading-[1.2] text-lightWhite">
                            {client.pleft}
                          </p>
                        </div>

                        <div className="h-[10%]">
                          <p className="font-latoLightItalic text-[3.5vmin] text-lightWhite">
                            {"Slide For More"}
                          </p>
                        </div>
                      </div>

                      {/* Side Arrow Right */}
                      <div
                        className="ml-[1vw] w-fit"
                        onClick={() => {
                          setSlide((slide + 1) % (clientsPorto.length + 1));
                        }}
                      >
                        <FaChevronRight className="w-fit text-[6vw] text-lightWhite/[35%]" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Section 2: Portos [DESKTOP] */}
      <div
        ref={scrollRef}
        className="relative hidden w-full flex-col items-center justify-center px-[50px] lg:flex lg:h-[100vh]"
      >
        {/* Background */}
        <div className="absolute top-0 -z-[998] h-full w-full overflow-clip">
          <ImgF alt="portofolio hero background" src="/img/portofolio/hero_bg-c.png" />
        </div>
        <div className="absolute -z-[997] h-full w-full bg-gradient-to-b from-lightWhite from-[20%] via-transparent via-[45%] to-black to-[75%]" />
        <div className="absolute top-0 -z-[997] h-full w-full bg-black opacity-[85%]" />

        <div className="h-full w-full 2xl:w-[1536px]">
          {/* Card Frame */}
          <div className="flex h-[85%] w-full items-end justify-center overflow-clip pb-[50px]">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={100}
              slidesPerView={2}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              // loop={true}
              onSlideChange={(swiper) => {
                setSlide(swiper.realIndex);
              }}
            >
              {clientsPorto.map((client, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="relative h-[40vw] min-w-[45%] 2xl:h-[400px] 2xl:w-[690px]">
                      {/* Background */}
                      <div className="absolute h-[50%] w-full overflow-clip rounded-[1.25vw] rounded-bl-none 2xl:rounded-[19.2px]">
                        <div className="relative h-full w-full bg-[#0A1E22]/[47%]">
                          <div className="absolute left-0 -z-[990] h-full w-full">
                            <ImgF alt={client.name + "_bg" + "_" + { idx }} src={client.backgr} />
                          </div>
                        </div>
                      </div>

                      {/* Upper Body: Identity */}
                      <div className="relative mt-[1.1vw] flex h-[50%] w-full gap-[30px] p-[20px] 2xl:mt-[16.8px] 2xl:p-[23px]">
                        {/* Title & NPS */}
                        <div className="flex h-full w-6/12 flex-col items-start justify-end">
                          <p className="font-avenirBlack text-[2vw] leading-none text-primary 2xl:text-[30.7px]">
                            {client.name}
                          </p>
                          {/* <p className="font-avenirLight text-[1.2vw] leading-none text-secondary 2xl:text-[18.4px]">
                            {"NPS of "}
                            <strong className="font-avenirHeavy">{client.nps}</strong>
                          </p> */}
                        </div>

                        {/* Company Logo */}
                        <div className="flex h-full w-6/12 items-center justify-end">
                          <div className="2x:rounded-[23px] flex w-[67%] overflow-clip rounded-[1.5vw] 2xl:w-[60%]">
                            <ImgF alt={client.name + "_logo"} src={client.logo} />
                          </div>
                        </div>
                      </div>
                      {/* Lower Body: Description */}
                      <div className="mt-[1.2vw] flex h-full w-full gap-[1vw] px-[20px] pb-[20vw] 2xl:mt-[18px] 2xl:px-[23px]">
                        <p className="w-4/12 font-latoRegular text-[1vw] leading-[1.2] text-lightWhite 2xl:text-[15.36px]">
                          <p className="mb-[0.6vw] font-avenirBlack text-primary">
                            What challenges does {client.name} face?
                          </p>
                          {client.pleft}
                        </p>
                        <p className="w-4/12 font-latoRegular text-[1vw] leading-[1.2] text-lightWhite 2xl:text-[15.36px]">
                          <p className="mb-[0.6vw] font-avenirBlack text-primary">
                            What solution does we offer?
                          </p>
                          {client.pcenter}
                        </p>
                        <p className="w-4/12 font-latoRegular text-[1vw] leading-[1.2] text-lightWhite 2xl:text-[15.36px]">
                          <p className="mb-[0.6vw] font-avenirBlack text-primary">
                            Impact that we deliver
                          </p>
                          {client.pright}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* Dot Frame */}
          <div className="flex h-[15%] items-start justify-center">
            <div className="flex h-fit items-center gap-[10px]">
              <div
                className="w-fit"
                onClick={() => {
                  setSlide((slide - 1 + clientsPorto.length - 1) % (clientsPorto.length - 1));
                }}
              >
                <FaChevronLeft className="text-[1.4vw] text-lightWhite hover:cursor-pointer 2xl:text-[21.5px]" />
              </div>
              <div className="flex items-center gap-[8px]">{slideBullets}</div>
              <div
                className="w-fit"
                onClick={() => {
                  setSlide((slide + 1) % (clientsPorto.length - 1));
                }}
              >
                <FaChevronRight className="text-[1.4vw] text-lightWhite hover:cursor-pointer 2xl:text-[21.5px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
