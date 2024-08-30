"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Components
import { FaArrowRight, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import NavFootItems from "./NavFootItems";
import ImgF from "./ImgF";

// Import Configs
import { navLinks, socLinks, intLinks } from "@/config/Links";
import { copyContent, directRoute, toastNotify } from "@/config/Functions";
import { connectSS } from "../apply/connectSpreadsheets";
import { useState } from "react";

export default function Footer() {
  // Contents
  const office = {
    addr: "180 Degrees Consulting UGM Universitas Gadjah Mada Bulaksumur, Caturtunggal, Depok, Sleman, Yogyakarta 55281",
    link: "ugm@180dc.org",
  };

  const copyright = "©2023 by 180 Degrees Consulting UGM";

  // Router Hooks
  const router = useRouter();
  const pathname = usePathname();

  // Without Footer Routes
  const disableRoute = [navLinks.Apply];

  // Themes
  // Registered Light Themes
  const lightThemes = [navLinks["About Us"]];
  const lightThemesMobile = [];

  // Registered Dark Themes
  const darkThemes = [
    navLinks.Home,
    intLinks.Apply,
    navLinks["Our Clients"],
    navLinks.Telescope,
    intLinks.Module,
  ];
  const darkThemesMobile = [intLinks.Apply, intLinks.Module];

  const checkTheme = ({ theme, device }) => {
    const themeDevice =
      device === "desktop"
        ? {
            light: lightThemes,
            dark: darkThemes,
          }
        : device === "mobile"
          ? {
              light: lightThemesMobile,
              dark: darkThemesMobile,
            }
          : {
              light: [],
              dark: [],
            };

    const themeCheck = ({ themeToCheck }) => {
      const val =
        themeToCheck.includes(pathname) ||
        themeToCheck.some((t) => pathname.toLowerCase().includes(t.toLowerCase()));
      return val;
    };

    if (theme === "light") return themeCheck({ themeToCheck: themeDevice.light });
    else if (theme === "black") return themeCheck({ themeToCheck: themeDevice.dark });
  };

  const bgTheme = pathname.includes("/telescope/")
    ? "bg-[black] "
    : checkTheme({
          theme: "light",
          device: "desktop",
        })
      ? "bg-white "
      : checkTheme({
            theme: "black",
            device: "desktop",
          })
        ? "bg-black "
        : "bg-transparent ";

  const bgThemeMobile = pathname.includes("/telescope/")
    ? "bg-[black]"
    : checkTheme({
          theme: "light",
          device: "mobile",
        })
      ? "bg-white "
      : checkTheme({
            theme: "black",
            device: "mobile",
          })
        ? "bg-black "
        : "bg-transparent ";

  // Classes
  const classHead = "font-latoBold text-[2vw] 2xl:text-[30.7px]";
  const classFavIcon = "text-[2.4vw] 2xl:text-[28px] hover:cursor-pointer"; // Let's Stay Connected

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

  // Email State
  const [email, setEmail] = useState("");

  // Page
  return (
    <div className="h-full w-full max-lg:bg-transparent">
      <div className="relative flex w-full rounded-tl-[20px] rounded-tr-[20px] bg-gradient-to-br from-black to-primary p-[3px]">
        {/* Background */}
        <div
          className={
            "absolute left-0 top-0 -z-[999] h-full w-full " +
            "lg:" +
            bgTheme + // desktop
            bgThemeMobile + // mobile
            (disableRoute.includes(pathname) ? " hidden" : "") // no footer page
          }
        />

        <div className="flex w-full select-none flex-col gap-[16px] rounded-tl-[20px] rounded-tr-[20px] bg-black px-[3vw] py-[2.2vw] pb-[2px] 2xl:px-[46px] 2xl:py-[33.8px]">
          {/* Contents */}
          <div className="flex w-full gap-[12vw] text-lightWhite lg:gap-[60px] 2xl:justify-between">
            {/* Logo */}
            <div className="w-3/12 lg:w-2/12 2xl:w-[560px]">
              <div className="flex w-full flex-col items-center justify-center gap-[8px] 2xl:w-[160px]">
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
            <div className="hidden w-[41.66%] gap-[60px] lg:flex 2xl:w-fit">
              {/* Office [DESKTOP] */}
              <div className="flex w-[60%] flex-col items-end 2xl:w-fit">
                <div className="2xl:w-[320px]">
                  <h1 className={classHead}>{"Office"}</h1>
                  {/* Address */}
                  {getAddress("text-[0.9vw] 2xl:text-[13.8px]")}
                  {/* Email */}
                  {getEmail("text-[0.9vw] 2xl:text-[13.8px] mt-[8px]")}
                </div>
              </div>
              {/* Navigations [DESKTOP] */}
              <div className="flex w-[40%] flex-col 2xl:w-fit">
                <h1 className={classHead}>{"Navigation"}</h1>
                <NavFootItems
                  ulClass="flex flex-col w-full gap-[2.5px] text-[12px] 2xl:w-[150px]"
                  liClass="flex w-full"
                  aClass="text-lightWhite font-latoRegular hover:font-latoBold"
                />
              </div>
            </div>
            {/* Stay Connected */}
            <div className="flex w-9/12 flex-col items-end justify-center gap-[8px] lg:w-[41.67%] 2xl:w-[560px]">
              {/* Navigations [MOBILE] */}
              <div className="h-[75%] w-full lg:hidden">
                <NavFootItems
                  ulClass="flex flex-col w-full gap-[2vw] text-[2vw]"
                  liClass="w-full border-b-[0.25vw] border-b-primary"
                  aClass="text-lightWhite font-latoLight hover:font-latoRegular"
                />
              </div>
              {/* Form */}
              <form className="w-full max-lg:h-[25%]">
                <div className="flex w-full items-start">
                  <div className="w-full">
                    <h1 className="font-avenirRegular text-[2vw] 2xl:text-[23px]">
                      {"Let's Stay Connected"}
                    </h1>
                  </div>
                  <div className="flex w-fit justify-end gap-[1.6vw] 2xl:gap-[24.3px]">
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
                <div className="flex h-[4vw] w-full items-center lg:h-[3vw] 2xl:h-[46px]">
                  <input
                    type="text"
                    className="h-full w-full rounded-bl-[.7vw] rounded-tl-[.7vw] bg-white180 px-[1.5vw] py-[1vw] text-[1.3vw] text-black outline-none lg:text-[0.9vw] 2xl:rounded-bl-[10.8px] 2xl:rounded-tl-[10.8px] 2xl:px-[23.1px] 2xl:py-[15.4px] 2xl:text-[13.8px]"
                    placeholder="Enter Your Email to Subscribe to Our Newsletter"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="h-full rounded-br-[.7vw] rounded-tr-[.7vw] bg-white180 pr-[12px] 2xl:rounded-br-[10.8px] 2xl:rounded-tr-[10.8px]"
                    onClick={(e) => {
                      e.preventDefault();
                      connectSS(email, "Newsletter", () => {
                        setEmail("");
                      });
                      toastNotify("Email has been submitted!", "success");
                    }}
                  >
                    <FaArrowRight className="text-[2.5vw] text-black opacity-[57%] lg:text-[2vw] 2xl:text-[30.7px]" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Copyright */}
          <div className="flex w-full justify-center">
            <h3 className="font-avenirBook text-[1.5vw] text-primary lg:text-[0.9vw] 2xl:text-[13.8px]">
              {copyright}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
