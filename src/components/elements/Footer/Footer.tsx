"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useCallback, useEffect, useState, useContext } from "react";

// Import Components
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaHandshake,
  FaHome,
  FaUserFriends,
  FaStore,
  FaBookOpen,
} from "react-icons/fa";
import { IoTelescope } from "react-icons/io5";
import ImageAction from "@/components/elements/ImageAction";

// Import Configs
import { childLink, navLinks, socLinks, intLinks } from "@/config/Links";
import { copyContent, directRoute } from "@/config/Functions";
import { connectSS } from "@/components/modules/apply/connectSpreadsheets";
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

  // Themes
  const lightThemes = [navLinks["About Us"]];
  const lightThemesMobile: string[] = [];

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

  const bgTheme = pathname.includes("/article/")
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
        ? "bg-gray-300 "
        : "bg-transparent ";

  const bgThemeMobile = pathname.includes("/article/")
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
        ? "bg-gray-300 "
        : "bg-transparent ";

  const classHead = "font-lato-bold text-2xl mb-4 lg:mb-0 lg:text-[22px] 2xl:text-[20px]";
  const classFavIcon =
    "text-3xl lg:text-[26px] 2xl:text-[22px] hover:cursor-pointer transition-transform hover:scale-110";

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
  }, [email, toastNotify]);

  const DropDown = ({ childClass, aClass, link }) => {
    const options: string[] = [];
    const directs: string[] = [];

    Object.entries(link).forEach((entry) => {
      const [key, value] = entry as [string, string];
      options.push(key);
      directs.push(value);
    });

    return (
      <div
        className={`${childClass} font-avenir-regular absolute top-[72px] flex w-[90px] flex-col gap-[5px] rounded-[5px] py-[5px] text-center transition-opacity duration-1000 ease-in-out`}
      >
        {options.map((item, idx) => (
          <Link
            key={JSON.stringify({ item, idx })}
            href={directs[idx]}
            className={`${aClass} hover:cursor-pointer`}
          >
            {item}
          </Link>
        ))}
      </div>
    );
  };

  const DropDownMobile = ({ childClass, aClass, link, route, path, callback }) => {
    const options: string[] = [];
    const directs: string[] = [];
    const router = route;

    Object.entries(link).forEach((entry) => {
      const [key, value] = entry as [string, string];
      options.push(key);
      directs.push(value);
    });

    return (
      <div
        className={`${childClass} font-lato-regular! relative mt-[16px] flex w-[140%] flex-col gap-[32px] rounded-[5px] py-[5px] text-center text-[52.8px]/[36.8px]! transition-opacity duration-1000 ease-in-out md:text-[17.6px]/[12.8px]! lg:text-[28.8px]/[20.8px]! xl:text-[20.8px]/[16px]!`}
      >
        {options.map((item, idx) => (
          <button
            key={JSON.stringify({ item, idx })}
            onClick={() => {
              directRoute(directs[idx], router, path);
              if (callback) callback();
            }}
            className={`${aClass} hover:cursor-pointer`}
          >
            {item}
          </button>
        ))}
      </div>
    );
  };

  const NavFootItems = ({
    ulClass,
    liClass,
    aClass,
    sidebar = false,
    callback = null,
    dropDown = false,
    dropDownMobile = false,
    identifier = "",
  }) => {
    const router = useRouter();
    const pathname = usePathname();

    const options: string[] = [];
    const directs: string[] = [];

    Object.entries(navLinks).forEach((entry) => {
      const [key, value] = entry as [string, string];
      options.push(key);
      directs.push(value);
    });

    const obtainIconFunction = (val: string) => {
      const navbarIconClass = pathname === navLinks[val] ? "text-gray-300" : "text-[#73757E]";

      switch (val) {
        case "Home":
          return <FaHome className={navbarIconClass} />;
        case "About Us":
          return <FaUserFriends className={navbarIconClass} />;
        case "Event":
          return <FaHandshake className={navbarIconClass} />;
        case "Store":
          return <FaStore className={navbarIconClass} />;
        case "Academy":
          return <FaBookOpen className={navbarIconClass} />;
        case "Our Clients":
          return <FaHandshake className={navbarIconClass} />;
        case "Telescope":
          return <IoTelescope className={navbarIconClass} />;
        default:
          return null;
      }
    };

    const containDropdown = ["Store", "Event", "Telescope"];

    return (
      <div className={ulClass + " select-none"}>
        {options.map((val, idx) => (
          <div
            key={JSON.stringify({ val, idx, identifier })}
            className={`${liClass} ${containDropdown.includes(val) ? "group" : ""} max-lg:flex max-lg:flex-col max-lg:items-center${
              sidebar && navLinks[val] === pathname ? "bg-[#E9E9E9]" : ""
            }`}
            onClick={() => {
              if (!(dropDownMobile && val === "Store")) {
                directRoute(directs[idx], router, pathname);
                if (callback) callback();
              }
            }}
          >
            {sidebar && obtainIconFunction(val)}
            <span
              className={`${aClass} transition-all duration-500 hover:font-bold${
                sidebar ? (navLinks[val] === pathname ? "text-gray-300" : "text-[#73757E]") : ""
              }`}
            >
              {val}
            </span>
            {containDropdown.includes(val) && (
              <>
                {dropDown && !dropDownMobile && (
                  <DropDown
                    childClass="opacity-0 group-hover:opacity-100"
                    aClass={aClass}
                    link={childLink[val]}
                  />
                )}
                {dropDownMobile && !dropDown && (
                  <DropDownMobile
                    childClass="opacity-100"
                    aClass={aClass}
                    link={childLink[val]}
                    route={router}
                    path={pathname}
                    callback={callback}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  if (!isClient) return <>Loading ...</>;

  return (
    <>
      <div className="bg-black-300 h-full w-full">
        <div className="from-black-300 relative flex w-full bg-gradient-to-r to-green-300 pt-[3px] lg:rounded-tl-[20px] lg:rounded-tr-[20px]">
          {/* Background */}
          <div
            className={
              "absolute top-0 left-0 -z-999 h-full w-full " + "lg:" + bgTheme + bgThemeMobile
            }
          />

          <div className="bg-black-300 flex w-full flex-col gap-8 px-6 py-8 select-none lg:gap-6 lg:rounded-tl-[20px] lg:rounded-tr-[20px] lg:px-8 lg:py-6 2xl:px-[30px] 2xl:py-[22px]">
            {/* Contents */}
            <div className="mx-auto flex w-full max-w-[2160px] flex-col gap-12 text-white lg:flex-row lg:gap-10 2xl:justify-between">
              {/* Logo */}
              <div className="flex justify-center lg:w-2/12 2xl:w-[400px]">
                <div className="flex w-32 flex-col items-center justify-center 2xl:w-[120px]">
                  <ImageAction
                    src="/img/global/footerlogo180dc.png"
                    alt="logo footer 180dc"
                    action={() => {
                      directRoute(navLinks.Home, router, pathname);
                    }}
                  />
                </div>
              </div>
              {/* Office */}
              <div className="flex flex-col items-center text-center lg:w-[41.66%] lg:items-end lg:text-left 2xl:w-fit">
                <div className="w-full lg:w-auto 2xl:w-[260px]">
                  <h1 className={classHead}>{"Office"}</h1>
                  {getAddress("text-sm leading-relaxed lg:text-[12px] 2xl:text-[11px]")}
                  {getEmail("text-sm lg:text-[12px] 2xl:text-[11px] mt-2")}
                </div>
              </div>
              {/* Navigations */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left 2xl:w-fit">
                <h1 className={classHead}>{"Navigation"}</h1>
                <NavFootItems
                  ulClass="flex flex-col w-full gap-4 text-sm lg:gap-1 lg:text-[12px] 2xl:text-[11px]"
                  liClass="flex w-full justify-center lg:justify-start"
                  aClass="text-white font-lato-regular hover:font-lato-bold transition-all"
                  identifier="Footer"
                />
              </div>
              {/* Stay Connected */}
              <div className="flex w-full flex-col gap-4 lg:w-[41.67%] lg:items-end 2xl:w-[400px]">
                {/* Form */}
                <div className="flex w-full flex-col gap-4">
                  <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="w-full">
                      <h1 className="font-avenir-regular text-center text-xl lg:text-left lg:text-[22px] 2xl:text-[18px]">
                        {"Let's Stay Connected"}
                      </h1>
                    </div>
                    <div className="flex gap-6 lg:gap-4 2xl:gap-4">
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
                  <div className="flex h-12 w-full items-center lg:h-9 2xl:h-[34px]">
                    <input
                      type="text"
                      value={email}
                      className="text-black-300 h-full w-full rounded-l-lg bg-gray-100 px-4 py-2 text-sm outline-none placeholder:text-xs lg:text-[11px] 2xl:text-[10px]"
                      placeholder="Enter Your Email to Subscribe to Our Newsletter"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="button"
                      className="flex h-full items-center justify-center rounded-r-lg bg-blue-300 px-3 transition-opacity hover:opacity-80 disabled:opacity-80"
                      onClick={handleSubmitButton}
                      disabled={!email}
                    >
                      <FaArrowRight className="text-lg text-white lg:text-base 2xl:text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Copyright */}
            <div className="flex w-full justify-center border-t border-gray-600 pt-6 lg:pt-4">
              <h3 className="font-avenir-book text-sm text-green-300 lg:text-[11px] 2xl:text-[10px]">
                {copyright}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
