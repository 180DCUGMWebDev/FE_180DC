"use client";

import { createBackground } from "@/config/Functions";
import Image from "next/image";
import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const HeroTemplate = ({ children }) => {
  const scrollRef = useRef(null);
  const handleClick = () => scrollRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="relative bg-[url(/img/store/casebook/bgHeroCasebookMobile.png)] bg-cover lg:bg-[url(/img/store/casebook/bgHeroCasebook-c.png)]">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="relative flex min-h-screen w-full items-center justify-center max-sm:py-[4vw] md:py-[8vw] lg:h-screen lg:py-0">
        <div className="relative mb-[5vw] flex flex-col items-center justify-center max-lg:w-full max-lg:pb-[20vw] lg:mt-[0] lg:mb-0">
          {children}
        </div>
      </div>
      <div className="absolute bottom-[5vw] flex w-full flex-col items-center justify-center md:bottom-[3vw] lg:bottom-[2vw]">
        {/* <span className="mb-[1vw] font-lato-bold text-[3.2vw] md:text-[2.6vw] lg:text-[1.294vw]">
          GET TO KNOW MORE
        </span>
        <Image
          src="/img/store/casebook/blackArrowDown.png"
          alt="background"
          width={2000}
          height={2000}
          className="h-auto w-[3.3vw] animate-bounce object-cover md:w-[2.7vw] lg:w-[1.615vw]"
        /> */}
        <button className="flex flex-col items-center outline-0" onClick={handleClick}>
          <h2 className="font-lato-bold text-black-300180 mt-[1.4vw] text-[1vw] max-lg:hidden">
            {"GET TO KNOW MORE"}
          </h2>
          <FaChevronDown className="animate-moving-pointer text-black-300180 text-[1.4vw] hover:cursor-pointer" />
        </button>
      </div>
      <div className="absolute bottom-[1000]" ref={scrollRef}></div>
    </section>
  );
};

export default HeroTemplate;
