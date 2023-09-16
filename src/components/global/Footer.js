"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Components
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
} from "react-icons/fa";
import NavFootItems from "./NavFootItems";
import ImgF from "./ImgF";

// Import Configs
import { navLinks, socLinks } from "@/config/Links";
import { copyContent, directRoute } from "@/config/Functions"

export default function Footer() {
  // Router Hooks
  const router = useRouter();
  const pathname = usePathname();

  // Classes
  const classHead = "font-latoBold text-[2vw] 2xl:text-[30.7px]";
  const classFavIcon = "text-[2.4vw] 2xl:text-[28px] hover:cursor-pointer"; // Let's Stay Connected

  // Contents
  const office = {
    addr: "180 Degrees Consulting UGM Universitas Gadjah Mada Bulaksumur, Caturtunggal, Depok, Sleman, Yogyakarta 55281",
    link: "ugm@180dc.org",
  };

  const copyright = "©2023 by 180 Degrees Consulting UGM";

  // Page
  return (
    <div className="hidden lg:flex w-full bg-gradient-to-br from-black to-primary rounded-tl-[20px] rounded-tr-[20px] p-[3px]">
      <div className="flex flex-col w-full bg-black rounded-tl-[20px] rounded-tr-[20px] px-[47px] py-[35px] pb-[2px] gap-[16px] select-none">
        {/* Contents */}
        <div className="flex w-full gap-[60px] text-lightWhite 2xl:justify-between">
          {/* Logo */}
          <div className="w-[2/12] 2xl:w-[560px]">
            <div className="w-full 2xl:w-[160px]">
              <ImgF
                src="/img/global/footerlogo180dc.png"
                alt="logo footer 180dc"
                action={() => {
                  directRoute(navLinks.Home, router, pathname);
                }}
              />
            </div>
          </div>
          {/* Office n Navigation */}
          <div className="flex w-[41.66%] gap-[60px]">
            {/* Office */}
            <div className="flex flex-col items-end w-[60%] 2xl:w-[57%]">
              <div className="2xl:w-[320px]">
                <h1 className={classHead}>{"Office"}</h1>
                <p
                  className="text-[0.9vw] 2xl:text-[13.8px] w-fit hover:cursor-pointer"
                  onClick={() => {
                    copyContent(office.addr, "Address");
                  }}
                >
                  {office.addr}
                </p>
                <p
                  className="text-[0.9vw] 2xl:text-[13.8px] w-fit hover:cursor-pointer mt-[8px]"
                  onClick={() => {
                    copyContent(office.link, "Link");
                  }}
                >
                  {office.link}
                </p>
              </div>
            </div>
            {/* Navigation */}
            <div className="flex flex-col w-[40%] gap-[8px] 2xl:w-[43%]">
              <h1 className={classHead}>{"Navigation"}</h1>
              <NavFootItems
                ulClass="flex flex-col w-full gap-[2.5px] text-[12px] 2xl:w-[150px]"
                liClass="flex w-full"
                aClass="text-lightWhite font-latoRegular hover:font-latoBold"
              />
            </div>
          </div>
          {/* Stay Connected */}
          <form className="flex flex-col justify-center items-end w-[41.67%] gap-[8px] 2xl:w-[560px]">
            <div className="flex items-start w-full">
              <div className="w-full">
                <h1 className="font-avenirRegular text-[2vw] 2xl:text-[23px]">
                  {"Let's Stay Connected"}
                </h1>
              </div>
              <div className="flex justify-end w-fit gap-[1.6vw] 2xl:gap-[24.3px]">
                <FaInstagram
                  className={classFavIcon}
                  onClick={() => {
                    window.open(
                      socLinks.Instagram,
                      "_blank"
                    );
                  }}
                />
                <FaLinkedin
                  className={classFavIcon}
                  onClick={() => {
                    window.open(
                      socLinks.LinkedIn,
                      "_blank"
                    );
                  }}
                />
                <FaSpotify
                  className={classFavIcon}
                  onClick={() => {
                    window.open(
                      socLinks.Spotify,
                      "_blank"
                    );
                  }}
                />
              </div>
            </div>
            <div className="flex items-center w-full">
              <input
                type="text"
                className="w-full px-[12px] py-[10px] rounded-tl-[5px] rounded-bl-[5px] outline-none text-black bg-white180 text-[0.9vw] 2xl:text-[13.8px]"
                placeholder="Enter Your Email to Subscribe to Our Newsletter"
              />
              <button className="h-full bg-white180 rounded-tr-[5px] rounded-br-[5px] pr-[12px]">
                <FaArrowRight className="text-black opacity-[57%] text-[2vw] 2xl:text-[30.7px]" />
              </button>
            </div>
          </form>
        </div>
        {/* Copyright */}
        <div className="flex justify-center w-full">
          <h3 className="text-primary font-avenirBook text-[0.9vw] 2xl:text-[13.8px]">
            {copyright}
          </h3>
        </div>
      </div>
    </div>
  );
}
