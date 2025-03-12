"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Components
import { FaArrowRight, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import NavFootItems from "./NavFootItems";
import ImgF from "./ImgF";

// Import Configs
import { navLinks, socLinks, intLinks } from "@/config/Links";
import { copyContent, directRoute } from "@/config/Functions";
import { connectSS } from "../apply/connectSpreadsheets";
import { useCallback, useEffect, useState, useRef, useContext } from "react";
import { UtilsContext } from "@/contexts/UtilsContext";

export default function Footer() {
  const { toastNotify } = useContext(UtilsContext);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Contents
  const office = {
    addr: "180 Degrees Consulting UGM Universitas Gadjah Mada Bulaksumur, Caturtunggal, Depok, Sleman, Yogyakarta 55281",
    link: "ugm@180dc.org",
  };

  const copyright = "©2024 by 180 Degrees Consulting UGM";

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
    navLinks.Store,
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
  const classHead = "max-lg:mb-[2vw] font-latoBold text-[5vw] lg:text-[2vw] 2xl:text-[30.7px]";
  const classFavIcon = "text-[6vw] lg:text-[2.4vw] 2xl:text-[28px] hover:cursor-pointer"; // Let's Stay Connected

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
        className={"w-full hover:cursor-pointer lg:w-fit " + inClass}
        onClick={() => {
          copyContent(office.link, "Email");
        }}
      >
        {office.link}
      </p>
    );
  };

  const [email, setEmail] = useState("");

  const handleSubmitButton = useCallback(() => {
    if (!email) return;
    connectSS(email, "Newsletter", () => setEmail(""));
    toastNotify("Email has been submitted!", "success");
  }, [email]);

  if (!isClient) return <>Loading ...</>;

  // Page
  return (
    <div className="h-full w-full max-lg:bg-transparent">
      <div className="relative flex w-full bg-gradient-to-r from-black to-primary pt-[3px] lg:rounded-tl-[20px] lg:rounded-tr-[20px]">
        {/* Background */}
        <div
          className={
            "absolute left-0 top-0 -z-[999] h-full w-full " +
            "lg:" +
            bgTheme + // desktop
            bgThemeMobile + // mobile
            (disableRoute.includes(pathname) ? "" : "") // no footer page
          }
        />

        <div className="flex w-full select-none flex-col gap-[16px] bg-black px-[3vw] py-[2.2vw] pb-[2px] lg:rounded-tl-[20px] lg:rounded-tr-[20px] 2xl:px-[46px] 2xl:py-[33.8px]">
          {/* Contents */}
          <div className="flex w-full gap-[8vw] text-lightWhite max-lg:flex-col max-lg:items-center lg:gap-[60px] 2xl:justify-between">
            {/* Logo */}
            <div className="w-[38%] max-lg:mb-[4vw] lg:w-2/12 2xl:w-[560px]">
              <div className="flex w-full flex-col items-center justify-center gap-[8px] 2xl:w-[160px]">
                <ImgF
                  src="/img/global/footerlogo180dc.png"
                  alt="logo footer 180dc"
                  action={() => {
                    directRoute(navLinks.Home, router, pathname);
                  }}
                />
              </div>
            </div>
            {/* Office n Navigation [DESKTOP] */}
            <div className="flex w-[90%] gap-[60px] max-lg:mb-[3vw] max-lg:justify-center lg:flex lg:w-[41.66%] 2xl:w-fit">
              {/* Office [DESKTOP] */}
              <div className="flex w-full flex-col items-center lg:w-[60%] lg:items-end 2xl:w-fit">
                <div className="max-lg:w-full 2xl:w-[320px]">
                  <h1 className={classHead + " max-lg:text-center"}>{"Office"}</h1>
                  {/* Address */}
                  {getAddress(
                    "max-lg:leading-[3.8vw] text-[3.5vw] lg:text-[0.9vw] 2xl:text-[13.8px] max-lg:text-center",
                  )}
                  {/* Email */}
                  {getEmail(
                    "text-[3.5vw] lg:text-[0.9vw] 2xl:text-[13.8px] mt-[8px] max-lg:text-center",
                  )}
                </div>
              </div>
            </div>
            {/* Navigations [DESKTOP] */}
            <div className="flex w-[40%] flex-col max-lg:-mb-[3vw] 2xl:w-fit">
              <h1 className={classHead + " max-lg:text-center"}>{"Navigation"}</h1>
              <NavFootItems
                ulClass="flex !flex-col w-full max-lg:text-center gap-[2.5vw] lg:gap-[2.5px] text-[3.5vw] lg:text-[0.9vw] 2xl:text-[13.8px] max-lg:text-center"
                liClass="flex w-full text-center"
                aClass="text-lightWhite font-latoRegular hover:font-latoBold"
                identifier="Footer"
              />
            </div>
            {/* Stay Connected */}
            <div className="flex w-[90%] flex-col items-end justify-center gap-[8px] lg:w-[41.67%] 2xl:w-[560px]">
              {/* Form */}
              <div className="w-full max-lg:flex max-lg:h-[25%] max-lg:flex-col max-lg:gap-[2vw]">
                <div className="flex w-full items-start">
                  <div className="w-full">
                    <h1 className="font-avenirRegular text-[3.7vw] lg:text-[2vw] 2xl:text-[23px]">
                      {"Let's Stay Connected"}
                    </h1>
                  </div>
                  <div className="flex w-fit justify-end gap-[3.6vw] lg:gap-[1.6vw] 2xl:gap-[24.3px]">
                    <FaInstagram
                      className={classFavIcon}
                      onClick={() => {
                        if (isClient) {
                          window.open(socLinks.Instagram, "_blank");
                        }
                      }}
                    />
                    <FaLinkedin
                      className={classFavIcon}
                      onClick={() => {
                        if (isClient) {
                          window.open(socLinks.LinkedIn, "_blank");
                        }
                      }}
                    />
                    <FaSpotify
                      className={classFavIcon}
                      onClick={() => {
                        if (isClient) {
                          window.open(socLinks.Spotify, "_blank");
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="flex h-[8vw] w-full items-center max-lg:mb-[4vw] lg:h-[3vw] 2xl:h-[46px]">
                  <input
                    type="text"
                    value={email}
                    className="h-full w-full rounded-bl-[.7vw] rounded-tl-[.7vw] bg-white180 px-[1.5vw] py-[1vw] text-[3.1vw] text-black outline-none lg:text-[0.9vw] 2xl:rounded-bl-[10.8px] 2xl:rounded-tl-[10.8px] 2xl:px-[23.1px] 2xl:py-[15.4px] 2xl:text-[13.8px]"
                    placeholder="Enter Your Email to Subscribe to Our Newsletter"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="button"
                    className="h-full rounded-br-[.7vw] rounded-tr-[.7vw] bg-white180 pr-[12px] 2xl:rounded-br-[10.8px] 2xl:rounded-tr-[10.8px]"
                    onClick={handleSubmitButton}
                    disabled={!email} // Disables button when input is empty
                  >
                    <FaArrowRight className="text-[2.5vw] text-black opacity-[57%] lg:text-[2vw] 2xl:text-[30.7px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="flex w-full justify-center">
            <h3 className="font-avenirBook text-[2.8vw] text-primary lg:text-[0.9vw] 2xl:text-[13.8px]">
              {copyright}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
