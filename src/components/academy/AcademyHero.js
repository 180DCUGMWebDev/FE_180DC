// Import Packages
import React from "react";
import { FaBriefcase } from "react-icons/fa";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function AcademyHero() {
  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex w-full h-fit max-lg:py-[8vh] lg:h-screen items-center justify-center">
        <div className="flex flex-col justify-center items-center px-[6vw] 2xl:w-[1536px] 2xl:px-[100px]">
          {/* Title */}
          <div className="w-full">
            <h1 className="text-center text-lightWhite lg:text-primary text-[8vw]/[7.2vw] lg:text-[4vw]/[3.8vw] font-avenirBlack 2xl:text-[61px]/[58px]">
              {"Dummy 180DC Academy"}
              <br />
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
}
