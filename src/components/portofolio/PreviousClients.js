"use client";

// Import Packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Components
import ImgF from "../global/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function PreviousClients() {
  // Data
  const clientsPorto = [
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
  ];

  // Handle Sliding
  const [translate, setTranslate] = useState(0);

  // Scroll Down Button
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Sliding Screens
  const handleSwipe = (direction) => {
    if (direction < 0 && direction != 0) setTranslate(translate - 1);
    else if (direction > 0 && direction != Math.ceil(clientsPorto.length / 2))
      setTranslate(translate + 1);
  };

  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Section 1: Title */}
      <div className="relative hidden lg:flex flex-col justify-center items-center w-full h-[100vh] px-[50px] bg-[#0A1E22]/[47%]">
        {/* Background */}
        <div className="absolute w-full h-full -z-[998] overflow-clip">
          <ImgF
            alt="portofolio hero background"
            src="/img/portofolio/hero_bg.png"
          />
        </div>

        {/* Hero */}
        <h1 className="text-lightWhite text-center text-[4.9vw]/[4.8vw] font-avenirBlack 2xl:text-[75px]/[64.5px]">
          {"Our Previous Clients"}
        </h1>

        <h2 className="font-latoBold text-lightWhite text-[1vw] mt-[1.4vw] 2xl:text-[15.36px] 2xl:mt-[21.5px]">
          {"SCROLL DOWN"}
        </h2>
        <a href="#">
          <FaChevronDown
            className="text-lightWhite text-[1.4vw] animate-movingPointer hover:cursor-pointer 2xl:text-[21.5px]"
            onClick={() => {
              handleClick();
            }}
          />
        </a>
      </div>

      {/* Section 2: Portos */}
      <div className="hidden lg:flex flex-col justify-center items-center w-full h-[100vh] px-[50px]">
        <div className="w-full h-full">
          {/* Card Frame */}
          <div className="flex grow justify-start items-end w-full h-[85%] pb-[50px] gap-[8vw] 2xl:gap-[123px] overflow-clip">
            {clientsPorto.map((client) => {
              return (
                <div className="relative flex-col min-w-[45%] h-[80%] max-h-[400px] 2xl:w-[690px]">
                  {/* Background */}
                  <div className="absolute w-full h-[60%] rounded-[1.25vw] rounded-bl-none overflow-clip 2xl:rounded-[19.2px]">
                    <div className="relative w-full h-full bg-[#0A1E22]/[47%]">
                      <div className="absolute left-0 w-full h-full -z-[990]">
                        <ImgF alt={client.name + "_bg"} src={client.backgr} />
                      </div>
                    </div>
                  </div>

                  {/* Upper Body: Identity */}
                  <div className="relative flex w-full h-[60%] gap-[30px] p-[20px] mt-[1.1vw] 2xl:mt-[16.8px]">
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
                        <ImgF alt={client.name + "_logo"} src={client.logo} />
                      </div>
                    </div>
                  </div>
                  {/* Lower Body: Description */}
                  <div className="flex w-full h-[40%] gap-[30px] px-[20px]">
                    <p className="w-6/12 font-latoRegular text-lightWhite text-[1vw] leading-[1.2] 2xl:text-[15.36px]">
                      {client.pleft}
                    </p>
                    <p className="w-6/12 font-latoRegular text-lightWhite text-[1vw] leading-[1.2] 2xl:text-[15.36px]">
                      {client.pright}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Dot Frame */}
          <div className="flex justify-center h-[15%]">
            <div className="h-fit flex items-center gap-[10px]">
              <FaChevronLeft
                className="text-lightWhite text-[1.4vw] 2xl:text-[21.5px]"
                onClick={() => {
                  handleSwipe(-1);
                }}
              />
              <div className="flex items-center gap-[8px]">
                <div className="bg-primary w-[0.8vw] h-[0.8vw] rounded-full" />
                {clientsPorto.map((client, idx) => {
                  if (idx % 2 != 0)
                    return (
                      <div className="bg-lightWhite w-[0.8vw] h-[0.8vw] rounded-full" />
                    );
                })}
              </div>
              <FaChevronRight
                className="text-lightWhite text-[1.4vw] 2xl:text-[21.5px]"
                onClick={() => {
                  handleSwipe(1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
