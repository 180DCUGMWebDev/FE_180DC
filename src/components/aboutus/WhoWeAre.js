// Import Packages
import { FaPlay } from "react-icons/fa";

// Import Components
import ImgF from "../global/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function WhoWeAre() {
  // Contents
  const content = {
    title: "Who Are We?",
    weDesc:
      "180 DC UGM is the first Indonesian branch of the world’s largest consultancy for non-profit and social enterprises. Being at the very forefront of desirable change, 180 DC UGM has helped various entities in overcoming the challenges they face while further broadening its reach.",
    clients: "20+",
    clientsTitle: "Clients",
    clientsDesc:
      "Successfully assisted both national and international enterprises to tackle their problems and reach their respective goals.",
  };

  const contentTag = (
    <>
      {/* Who Are We? Title */}
      <div className="w-full lg:w-[27%] flex items-center text-lightWhite font-avenirBlack text-[5.5vw] lg:text-[3vw] 2xl:text-[46px]">
        <h1>{content.title}</h1>
      </div>
      {/* Who Are We? Content */}
      <div className="w-full h-full lg:w-[73%] flex items-center">
        <p className="text-lightWhite font-latoRegular text-justify text-[3vw]/[2.7vw] lg:text-[1.5vw]/[2vw] 2xl:text-[23.1px]/[30.8px]">
          {content.weDesc}
        </p>
      </div>
    </>
  );

  const videoTag = (
    <>
      {/* Background Content */}
      <div className="absolute -z-[1] top-0 left-0 w-full h-full rounded-[10px] overflow-clip">
        <ImgF
          src="/img/aboutus/WhatWeAre/rightcontent.png"
          alt="180dc who we are rightcontent"
        />
      </div>
      {/* Button Desktop */}
      <div className="max-lg:hidden absolute p-[0.6vw] -right-[10px] -bottom-[20px] rounded-full rounded-br-none w-[6.5vw] h-[6.5vw] bg-black 2xl:w-[100px] 2xl:h-[100px] 2xl:p-[9.2px]">
        <a href="#">
          <div className="rounded-full bg-lightWhite w-full h-full p-[1vw] pl-[1.5vw] 2xl:p-[15.36px] 2xl:pl-[23px]">
            <FaPlay className="w-full h-full text-primary" />
          </div>
        </a>
      </div>
      {/* Button Mobile */}
      <div className="lg:hidden w-full h-full flex items-center justify-center">
        <a href="#">
          <div className="w-[4vmax] h-[4vmax]">
            <FaPlay className="w-full h-full text-lightWhite" />
          </div>
        </a>
      </div>
    </>
  );

  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col justify-center items-center w-full h-fit lg:h-full px-[6vw] lg:px-[50px] lg:pt-[12%] lg:pb-[5%] 2xl:w-[1536px]">
          <div className="flex flex-col justify-center w-full h-fit py-[6vh] lg:py-0 lg:h-full gap-[2vmax] 2xl:gap-[16px] 2xl:h-fit">
            <div className="hidden w-full h-fit lg:flex gap-[3.5vw] 2xl:gap-[72px]">
              {contentTag}
            </div>
            {/* Images / All for Mobile */}
            <div className="w-full h-fit lg:h-[38vh] lg:max-h-[26vw] flex lg:flex-row gap-[4vw] lg:gap-[3.5vw] 2xl:gap-[72px] 2xl:h-[350px]">
              <div className="relative max-lg:grow w-[35vw] lg:w-[27%] h-[35vw] lg:h-full flex flex-col items-start rounded-[10px] text-lightWhite p-[2vw] pb-[15px] 2xl:pb-[25px] 2xl:p-[30px] 2xl:gap-[40px]">
                {/* Background */}
                <div className="absolute -z-[1] top-0 left-0 w-full h-full rounded-[10px] overflow-clip">
                  <ImgF
                    src="/img/aboutus/WhatWeAre/leftcontent.png"
                    alt="180dc who we are leftcontent"
                  />
                </div>
                {/* Content */}
                <div className="w-full flex flex-col font-avenirBlack">
                  <h1 className="text-[10vw]/[10vw] lg:text-[8vw]/[6vw] 2xl:text-[152px]/[124px]">
                    {content.clients}
                  </h1>
                  <h1 className="text-[3vw]/[1.5vw] lg:text-[2vw]/[1.6vw] ml-[4px] 2xl:text-[42px]/[24px]">
                    {content.clientsTitle}
                  </h1>
                </div>
                <div className="w-full h-full flex items-end font-latoRegular">
                  <p className="text-[3vw]/[2.8vw] lg:text-[1.3vw]/[1.3vw] ml-[4px] 2xl:text-[23.1px]/[23.1px]">
                    {content.clientsDesc}
                  </p>
                </div>
              </div>
              {/* Mobile Content Position */}
              <div className="lg:hidden grow w-[40vw] h-[26vw] flex flex-wrap">
                {contentTag}
              </div>
              {/* Video DESKTOP */}
              <div className="hidden relative w-[73%] h-full lg:flex items-start rounded-[10px]">
                {videoTag}
              </div>
            </div>
            {/* Video MOBILE */}
            <div className="lg:hidden relative w-full h-[12vh] min-[300px]:h-[15vh] md:h-[18vh]">
              {videoTag}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
