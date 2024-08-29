"use client";

// Import Packages
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

// Import Components
import Button from "./Button";
import NavFootItems from "./NavFootItems";
import ImgF from "./ImgF";
import { FaBars } from "react-icons/fa";
import { MdComment } from "react-icons/md";

// Import Configs
import { intLinks, navLinks } from "@/config/Links";
import { directRoute } from "@/config/Functions";

export default function Navbar() {
  // CONTENTS
  const copyright = "©2023 by 180 Degrees Consulting UGM";

  // Router Hook
  const router = useRouter();
  const pathname = usePathname();

  // Scroll Direction Hook
  const useLastScrollDirection = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollTop =
          window.scrollY || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          setScrollDirection("down");
        } else if (currentScrollTop < lastScrollTop) {
          setScrollDirection("up");
        }
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);

    useEffect(() => {
      setMobileMenuOpen(false);
    }, []);

    return scrollDirection;
  };
  const scroll = useLastScrollDirection();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [scroll]);

  // MOBILE HANDLER
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navIconMobCls =
    "text-[14vw] text-primary origin-center scale-[.7] hover:cursor-pointer";

  return (
    <>
      {/* DESKTOP */}
      <div
        className={
          "fixed top-0 left-0 z-[100] hidden lg:flex w-full py-[20px] px-[50px] transition-transform duration-[300ms] " +
          (scroll !== "down" ? "" : "translate-y-[-200%]") +
          (mobileMenuOpen ? "overflow-y-clip" : "")
        }
      >
        <nav className="flex w-full">
          {/* Logo */}
          <div className="w-[15%] h-full">
            <div className="flex w-[33%] h-full">
              <div className="w-full 2xl:w-[77px] h-full">
                <ImgF
                  src="/img/global/logo180dctrns.png"
                  alt="logo 180dc"
                  action={() => {
                    directRoute(navLinks.Home, router, pathname);
                  }}
                />
              </div>
            </div>
          </div>
          {/* Navigations */}
          <div className="flex w-[80%]">
            <NavFootItems
              ulClass="flex w-full items-center justify-center gap-[4vw]"
              liClass="flex justify-center w-fit"
              aClass="text-lightWhite text-[1.3vw] font-latoRegular hover:font-latoBold 2xl:text-[20px]"
            />
          </div>
          {/* Consult */}
          <div className="flex justify-end items-center w-[15%]">
            <Button
              color={"green"}
              text={"Consult Now!"}
              disableForm={intLinks.Apply == pathname}
              addClass={
                "w-[11vw] text-[1.1vw] py-[9px] 2xl:w-[170px] 2xl:text-[17px] " +
                (intLinks.Apply == pathname ? " opacity-[70%]" : "")
              }
              action={() => {
                directRoute(intLinks.Apply, router, pathname);
              }}
            />
          </div>
        </nav>
      </div>
      {/* MOBILE */}
      <div
        className={
          "fixed top-0 left-0 z-[100] lg:hidden flex w-full py-[20px] px-[30px] transition-transform duration-[300ms] " +
          (scroll === "down" || mobileMenuOpen ? "translate-y-[-200%]" : "")
        }
      >
        <nav className="flex w-full">
          {/* Logo */}
          <div className="w-[15%] h-full">
            <div className="flex w-full h-full">
              <div className="w-full h-full">
                <ImgF
                  src="/img/global/logo180dctrns.png"
                  alt="logo 180dc"
                  action={() => {
                    directRoute(navLinks.Home, router, pathname);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grow h-full flex items-center justify-end">
            <div className="flex">
              <MdComment
                className={navIconMobCls}
                onClick={() => {
                  directRoute(intLinks.Apply, router, pathname);
                }}
              />
              <FaBars
                className={navIconMobCls}
                onClick={() => setMobileMenuOpen(true)}
              />
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}
      {/* Black Bg */}
      <div
        className={
          "fixed z-[100] top-0 w-full h-[200vh] bg-black/[80%] " +
          (mobileMenuOpen ? "" : "hidden")
        }
        onClick={() => {
          setMobileMenuOpen(false);
        }}
      />

      {/* The Sidebar */}
      <div
        className={
          "lg:hidden fixed z-[101] h-full w-[45vw] py-[5vh] flex flex-col duration-[300ms] " +
          (mobileMenuOpen ? "right-0 " : "-right-[100%] ")
        }
      >
        <div className="flex flex-col items-center bg-[#F4F4F4] w-full h-full px-[4vw] pt-[4vh] pb-[1vh] gap-[3vh] rounded-l-[5vw]">
          {/* Logo */}
          <div className="w-8/12">
            <ImgF
              src="/img/global/mobnavbarlogo180dc.png"
              alt="logo navbar mobile 180dc"
              action={() => {
                directRoute(navLinks.Home, router, pathname);
              }}
            />
          </div>
          {/* Menu List */}
          <div className="flex flex-col w-full grow">
            <NavFootItems
              ulClass="flex flex-col w-full gap-[1vh]"
              liClass="flex items-center w-full gap-[1.8vw] rounded-[1vw] py-[1vh] px-[3vw]"
              aClass="text-[4vw]/[2.9vw] font-latoBold"
              sidebar={true}
              callback={() => setMobileMenuOpen(false)}
            />
          </div>
          {/* Copyright */}
          <div className="flex w-full justify-center items-center">
            <h3 className="text-black font-avenirBook text-[2vw]">
              {copyright}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
