"use client";

// Import Packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Components
import ImgF from "../global/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMemo, useCallback, useEffect, useRef, useState } from "react";

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
        pright:
          "We had been able to secure several companies to make partnership with PPP and recommended strategy to approach the government. The insights that we had got, helped PPP to penetrate Indonesian market.",
      },
      {
        name: "Kopi Sembilan",
        nps: "100%",
        backgr: "/img/portofolio/company_bgs/kopi_sembilan.png",
        logo: "/img/portofolio/company_logos/kopi_sembilan.png",
        pleft:
          "Kopi Sembilan faced problems regarding to supply chain, ambiguity of their management structure, and challenges on getting structured budget planning and bookkeeping.",
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
        pright:
          "We had been able to secure several companies to make partnership with PPP and recommended strategy to approach the government. The insights that we had got, helped PPP to penetrate Indonesian market.",
      },
      {
        name: "Kopi Sembilan",
        nps: "100%",
        backgr: "/img/portofolio/company_bgs/kopi_sembilan.png",
        logo: "/img/portofolio/company_logos/kopi_sembilan.png",
        pleft:
          "Kopi Sembilan faced problems regarding to supply chain, ambiguity of their management structure, and challenges on getting structured budget planning and bookkeeping.",
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
        pright:
          "We had been able to secure several companies to make partnership with PPP and recommended strategy to approach the government. The insights that we had got, helped PPP to penetrate Indonesian market.",
      },
    ],
    []
  );

  // Scroll Down Button
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Slide Position
  const [slide, setSlide] = useState(0);
  const swiperRef = useRef();

  // Bullets
  const loopForBullets = useCallback(() => {
    return (
      <>
        {clientsPorto.map((client, idx) => {
          if (idx !== clientsPorto.length - 1)
            return (
              <div
                className={
                  "w-[0.8vw] h-[0.8vw] rounded-full 2xl:w-[12.3px] 2xl:h-[12.3px] hover:cursor-pointer " +
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
  }, [loopForBullets, slide]);

  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Section 1: Title */}
      <div className="relative flex flex-col justify-center items-center w-full h-[100vh] px-[10vw] overflow-clip max-lg:gap-[2vh]">
        {/* Background */}
        <div className="absolute w-[240vh] lg:w-full h-full -z-[998] overflow-clip">
          <ImgF
            alt="portofolio hero background"
            src="/img/portofolio/hero_bg.png"
          />
        </div>
        <div className="absolute w-full h-full -z-[997] bg-gradient-to-b from-transparent from-[70%] to-lightWhite to-[90%]" />
        <div className="absolute w-full h-full -z-[996] bg-black opacity-[85.45%]" />

        {/* Hero */}
        <h1 className="text-lightWhite text-center text-[12vw]/[11vw] lg:text-[4.9vw]/[4.8vw] font-avenirBlack 2xl:text-[75px]/[64.5px]">
          {"Our Previous Clients"}
        </h1>

        {/* Scroll Down [DESKTOP] */}
        <h2 className="max-lg:hidden font-latoBold text-lightWhite text-[1vw] mt-[1.4vw] 2xl:text-[15.36px] 2xl:mt-[21.5px]">
          {"SCROLL DOWN"}
        </h2>
        <a href="#" className="max-lg:hidden">
          <FaChevronDown
            className="text-lightWhite text-[1.4vw] animate-movingPointer hover:cursor-pointer 2xl:text-[21.5px]"
            onClick={() => {
              handleClick();
            }}
          />
        </a>

        {/* Swiper [MOBILE] */}
        <div className="lg:hidden w-full h-fit rounded-[5vw] rounded-bl-none overflow-clip">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
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
                  <div className="relative w-full h-[50vmax]">
                    {/* Background */}
                    <div className="absolute w-full h-full -z-[990]">
                      <div className="relative w-full h-full bg-[#2C6970]/[47%]">
                        <div className="absolute left-0 w-[70vmax] h-full -z-[990]">
                          <ImgF
                            alt={client.name + "_bg" + "_" + { idx }}
                            src={client.backgr}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full h-full px-[8vw] py-[6vw] gap-[5vw] overflow-clip">
                      {/* Upper Body: Identity */}
                      <div className="relative flex w-full h-[30%] gap-[4vw] mt-[1.1vw]">
                        {/* Company Logo */}
                        <div className="flex justify-end items-center w-[35%] h-full">
                          <div className="flex w-[100%]">
                            <ImgF
                              alt={client.name + "_logo"}
                              src={client.logo}
                            />
                          </div>
                        </div>

                        {/* Title & NPS */}
                        <div className="flex flex-col w-[65%] h-full justify-center items-start">
                          <p className="text-primary font-avenirBlack text-[5vw] leading-none">
                            {client.name}
                          </p>
                          <p className="text-secondary font-avenirLight text-[4.5vw] leading-none">
                            {"NPS of "}
                            <strong className="font-avenirHeavy">
                              {client.nps}
                            </strong>
                          </p>
                        </div>
                      </div>

                      {/* Lower Body: Description */}
                      <div className="flex flex-col w-full h-[68%] gap-[2vh] overflow-scroll">
                        <p className="font-latoRegular text-lightWhite text-[3.5vw] leading-[1.2]">
                          {client.pright}
                        </p>
                        <p className="font-latoRegular text-lightWhite text-[3.5vw] leading-[1.2]">
                          {client.pleft}
                        </p>
                      </div>

                      <div className="h-[2%]">
                        <p className="text-lightWhite font-latoSemiboldItalic text-[4vw]">
                          {"Slide For More"}
                        </p>
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
      <div className="relative hidden lg:flex flex-col justify-center items-center w-full lg:h-[100vh] px-[50px]">
        {/* Background */}
        <div className="absolute w-full h-full top-0 -z-[998] overflow-clip">
          <ImgF
            alt="portofolio hero background"
            src="/img/portofolio/hero_bg.png"
          />
        </div>
        <div className="absolute w-full h-full -z-[997] bg-gradient-to-b from-lightWhite from-[20%] via-transparent via-[45%] to-black to-[75%]" />
        <div className="absolute w-full h-full top-0 -z-[997] bg-black opacity-[85%]" />

        <div className="w-full h-full 2xl:w-[1536px]">
          {/* Card Frame */}
          <div className="flex w-full justify-center items-end h-[85%] pb-[50px] overflow-clip">
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
                    <div className="relative min-w-[45%] h-[26vw] 2xl:w-[690px] 2xl:h-[400px]">
                      {/* Background */}
                      <div className="absolute w-full h-[60%] rounded-[1.25vw] rounded-bl-none overflow-clip 2xl:rounded-[19.2px]">
                        <div className="relative w-full h-full bg-[#0A1E22]/[47%]">
                          <div className="absolute left-0 w-full h-full -z-[990]">
                            <ImgF
                              alt={client.name + "_bg" + "_" + { idx }}
                              src={client.backgr}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Upper Body: Identity */}
                      <div className="relative flex w-full h-[60%] gap-[30px] p-[20px] mt-[1.1vw] 2xl:mt-[16.8px] 2xl:p-[23px]">
                        {/* Title & NPS */}
                        <div className="flex flex-col w-6/12 h-full justify-end items-start">
                          <p className="text-primary font-avenirBlack text-[2vw] leading-none 2xl:text-[30.7px]">
                            {client.name}
                          </p>
                          <p className="text-secondary font-avenirLight text-[1.2vw] leading-none 2xl:text-[18.4px]">
                            {"NPS of "}
                            <strong className="font-avenirHeavy">
                              {client.nps}
                            </strong>
                          </p>
                        </div>

                        {/* Company Logo */}
                        <div className="flex justify-end items-center w-6/12 h-full">
                          <div className="flex w-[67%] 2xl:w-[60%]">
                            <ImgF
                              alt={client.name + "_logo"}
                              src={client.logo}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Lower Body: Description */}
                      <div className="flex w-full h-[40%] gap-[30px] px-[20px] mt-[1.2vw] 2xl:mt-[18px] 2xl:px-[23px]">
                        <p className="w-6/12 font-latoRegular text-lightWhite text-[1vw] leading-[1.2] 2xl:text-[15.36px]">
                          {client.pleft}
                        </p>
                        <p className="w-6/12 font-latoRegular text-lightWhite text-[1vw] leading-[1.2] 2xl:text-[15.36px]">
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
          <div className="flex justify-center items-start h-[15%]">
            <div className="h-fit flex items-center gap-[10px]">
              <FaChevronLeft
                className="text-lightWhite text-[1.4vw] 2xl:text-[21.5px] hover:cursor-pointer"
                onClick={() => {
                  setSlide((slide - 1) % (clientsPorto.length - 1));
                }}
              />
              <div className="flex items-center gap-[8px]">{slideBullets}</div>
              <FaChevronRight
                className="text-lightWhite text-[1.4vw] 2xl:text-[21.5px] hover:cursor-pointer"
                onClick={() => {
                  setSlide((slide + 1) % (clientsPorto.length - 1));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
