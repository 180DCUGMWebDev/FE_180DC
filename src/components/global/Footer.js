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
import { navLinks, socLinks, intLinks } from "@/config/Links";
import { copyContent, directRoute } from "@/config/Functions";

export default function Footer() {
  // Router Hooks
  const router = useRouter();
  const pathname = usePathname();

  // Without Footer Routes
  const disableRoute = [navLinks.Apply];

  // Themes
  //// Registered Light Themes
  const lightThemes = [navLinks["About Us"]];

  //// Registered Dark Themes
  const darkThemes = [navLinks.Home, intLinks.Apply, navLinks["Our Clients"]];

  const bgTheme = lightThemes.includes(pathname)
    ? " bg-white "
    : darkThemes.includes(pathname)
    ? " bg-black "
    : " bg-primary ";

  // Classes
  const classHead = "font-latoBold text-[2vw] 2xl:text-[30.7px]";
  const classFavIcon = "text-[2.4vw] 2xl:text-[28px] hover:cursor-pointer"; // Let's Stay Connected

  // Contents
  const office = {
    addr: "180 Degrees Consulting UGM Universitas Gadjah Mada Bulaksumur, Caturtunggal, Depok, Sleman, Yogyakarta 55281",
    link: "ugm@180dc.org",
  };

  const copyright = "©2023 by 180 Degrees Consulting UGM";

  const getAddress = (inClass) => {
    return (
      <p
        className={"w-fit hover:cursor-pointer " + inClass}
        onClick={() => {
          copyContent(office.addr, "Address");
        }}
      >
        {office.addr}
      </p>
    );
  };

  const getEmail = (inClass) => {
    return (
      <p
        className={"w-fit hover:cursor-pointer " + inClass}
        onClick={() => {
          copyContent(office.link, "Email");
        }}
      >
        {office.link}
      </p>
    );
  };

  // Page
  return (
    <div
      className={
        "w-full h-full" +
        bgTheme +
        (disableRoute.includes(pathname) ? " hidden " : "")
      }
    >
      <div className="relative flex w-full bg-gradient-to-br from-black to-primary rounded-tl-[20px] rounded-tr-[20px] p-[3px]">
        {/* Background */}
        <div className="absolute -z-[999] top-0 left-0 w-full h-full bg-white" />

        <div className="flex flex-col w-full bg-black rounded-tl-[20px] rounded-tr-[20px] px-[3vw] py-[2.2vw] pb-[2px] gap-[16px] select-none 2xl:px-[46px] 2xl:py-[33.8px]">
          {/* Contents */}
          <div className="flex w-full gap-[12vw] lg:gap-[60px] text-lightWhite 2xl:justify-between">
            {/* Logo */}
            <div className="w-3/12 lg:w-2/12 2xl:w-[560px]">
              <div className="flex flex-col items-center justify-center w-full 2xl:w-[160px] gap-[8px]">
                <ImgF
                  src="/img/global/footerlogo180dc.png"
                  alt="logo footer 180dc"
                  action={() => {
                    directRoute(navLinks.Home, router, pathname);
                  }}
                />
                {/* Address [MOBILE] */}
                {getAddress("lg:hidden text-center text-[1.5vw]")}
                {/* Email [MOBILE] */}
                {getEmail("lg:hidden text-[1.5vw]")}
              </div>
            </div>
            {/* Office n Navigation [DESKTOP] */}
            <div className="hidden lg:flex w-[41.66%] gap-[60px] 2xl:w-fit">
              {/* Office [DESKTOP] */}
              <div className="flex flex-col items-end w-[60%] 2xl:w-fit">
                <div className="2xl:w-[320px]">
                  <h1 className={classHead}>{"Office"}</h1>
                  {/* Address */}
                  {getAddress("text-[0.9vw] 2xl:text-[13.8px]")}
                  {/* Email */}
                  {getEmail("text-[0.9vw] 2xl:text-[13.8px] mt-[8px]")}
                </div>
              </div>
              {/* Navigations [DESKTOP] */}
              <div className="flex flex-col w-[40%] 2xl:w-fit">
                <h1 className={classHead}>{"Navigation"}</h1>
                <NavFootItems
                  ulClass="flex flex-col w-full gap-[2.5px] text-[12px] 2xl:w-[150px]"
                  liClass="flex w-full"
                  aClass="text-lightWhite font-latoRegular hover:font-latoBold"
                />
              </div>
            </div>
            {/* Stay Connected */}
            <div className="flex flex-col justify-center items-end w-9/12 lg:w-[41.67%] gap-[8px] 2xl:w-[560px]">
              {/* Navigations [MOBILE] */}
              <div className="lg:hidden w-full h-[75%]">
                <NavFootItems
                  ulClass="flex flex-col w-full gap-[2vw] text-[2vw]"
                  liClass="flex w-full border-b-[0.25vw] border-b-primary"
                  aClass="text-lightWhite font-latoLight hover:font-latoRegular"
                />
              </div>
              {/* Form */}
              <form className="w-full max-lg:h-[25%]">
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
                        window.open(socLinks.Instagram, "_blank");
                      }}
                    />
                    <FaLinkedin
                      className={classFavIcon}
                      onClick={() => {
                        window.open(socLinks.LinkedIn, "_blank");
                      }}
                    />
                    <FaSpotify
                      className={classFavIcon}
                      onClick={() => {
                        window.open(socLinks.Spotify, "_blank");
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center w-full h-[4vw] lg:h-[3vw] 2xl:h-[46px]">
                  <input
                    type="text"
                    className="w-full h-full px-[1.5vw] py-[1vw] rounded-tl-[.7vw] rounded-bl-[.7vw] outline-none text-black bg-white180 text-[1.3vw] lg:text-[0.9vw] 2xl:text-[13.8px] 2xl:px-[23.1px] 2xl:py-[15.4px] 2xl:rounded-tl-[10.8px] 2xl:rounded-bl-[10.8px]"
                    placeholder="Enter Your Email to Subscribe to Our Newsletter"
                  />
                  <button className="h-full bg-white180 rounded-tr-[.7vw] rounded-br-[.7vw] pr-[12px] 2xl:rounded-tr-[10.8px] 2xl:rounded-br-[10.8px]">
                    <FaArrowRight className="text-black opacity-[57%] text-[2.5vw] lg:text-[2vw] 2xl:text-[30.7px]" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Copyright */}
          <div className="flex justify-center w-full">
            <h3 className="text-primary font-avenirBook text-[1.5vw] lg:text-[0.9vw] 2xl:text-[13.8px]">
              {copyright}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
