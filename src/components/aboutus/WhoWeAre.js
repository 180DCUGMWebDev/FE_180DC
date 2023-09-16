// Import Packages
import { FaPlay } from "react-icons/fa";

// Import Components
import ImgF from "../global/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function WhoWeAre() {
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="w-full h-screen px-[50px] pt-[12%] pb-[5%] flex justify-center items-center gap-[60px]">
        <div className="w-3/12 h-full flex flex-col gap-[20px]">
          {/* Who Are We? */}
          <div className="w-full h-[25%] flex items-center text-lightWhite font-avenirBlack text-[52px]">
            <h1>{"Who Are We?"}</h1>
          </div>
          {/* 20+ Clients */}
          <div className="relative w-full h-[75%] flex flex-col items-start rounded-[10px] text-lightWhite p-[40px]">
            {/* Background */}
            <div className="absolute -z-[1] top-0 left-0 w-full h-full rounded-[10px] overflow-clip">
              <ImgF
                src="/img/aboutus/WhatWeAre/leftcontent.png"
                alt="180dc who we are leftcontent"
              />
            </div>
            {/* Content */}
            <div className="w-full h-[60%] flex flex-col font-avenirBlack">
              <h1 className="text-[144px]/[110px]">{"20+"}</h1>
              <h1 className="text-[40px]/[30px] ml-[4px]">{"Clients"}</h1>
            </div>
            <div className="w-full h-[40%] flex items-end font-latoRegular">
              <p className="text-[14px] ml-[4px]">
                {
                  "Successfully assisted both national and international enterprises to tackle their problems and reach their respective goals."
                }
              </p>
            </div>
          </div>
        </div>
        <div className="w-9/12 h-full flex flex-col gap-[20px]">
          {/* Who Are We? */}
          <div className="w-full h-[25%] flex items-center text-lightWhite font-latoRegular text-[20px]">
            {
              "180 DC UGM is the first Indonesian branch of the world’s largest consultancy for non-profit and social enterprises. Being at the very forefront of desirable change, 180 DC UGM has helped various entities in overcoming the challenges they face while further broadening its reach."
            }
          </div>
          {/* Video */}
          <div className="relative w-full h-[75%] flex items-start rounded-[10px]">
            {/* Background Content */}
            <div className="absolute -z-[1] top-0 left-0 w-full h-full rounded-[10px] overflow-clip">
              <ImgF
                src="/img/aboutus/WhatWeAre/rightcontent.png"
                alt="180dc who we are rightcontent"
              />
            </div>
            {/* Button */}
            <div className="absolute p-[10px] -right-[10px] -bottom-[20px] rounded-full rounded-br-none w-[100px] h-[100px] bg-black">
              <a href="#">
                <div className="rounded-full bg-lightWhite w-full h-full p-[16px] pl-[24px]">
                  <FaPlay className="w-full h-full text-primary" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
