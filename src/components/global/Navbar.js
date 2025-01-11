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
  const copyright = "©2024 by 180 Degrees Consulting UGM";

  // Router Hook
  const router = useRouter();
  const pathname = usePathname();

  // Scroll Direction Hook
  const useLastScrollDirection = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
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
  const navIconMobCls = "text-[14vw] text-primary origin-center scale-[.7] hover:cursor-pointer";

  return (
    <>
      {/* DESKTOP */}
      <div
        className={
          "fixed left-0 top-0 z-[100] hidden w-full px-[50px] py-[20px] transition-transform duration-[300ms] lg:flex " +
          (scroll !== "down" ? "" : "translate-y-[-200%]") +
          (mobileMenuOpen ? "overflow-y-clip" : "")
        }
      >
        <nav className="flex w-full">
          {/* Logo */}
          <div className="h-full w-[15%]">
            <div className="flex h-full w-[33%]">
              <div className="h-full w-full 2xl:w-[77px]">
                <ImgF
                  src="/img/global/logo180dctrns.png"
                  alt="logo 180dc"
                  className="transition-transform duration-500 hover:scale-[1.05]"
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
              dropDown
            />
          </div>
          {/* Consult */}
          <div className="flex w-[15%] items-center justify-end">
            <Button
              color={"green"}
              text={"Consult Now!"}
              disableForm={intLinks.Apply == pathname}
              addClass={
                "w-[11vw] text-[1.1vw] py-[9px] 2xl:w-[170px] 2xl:text-[17px] hover:bg-[green] duration-500 transition-all" +
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
          "fixed left-0 top-0 z-[100] flex w-full px-[30px] py-[20px] transition-transform duration-[300ms] lg:hidden " +
          (scroll === "down" || mobileMenuOpen ? "translate-y-[-200%]" : "")
        }
      >
        <nav className="flex w-full">
          {/* Logo */}
          <div className="h-full w-[15%]">
            <div className="flex h-full w-full">
              <div className="h-full w-full">
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
          <div className="flex h-full grow items-center justify-end">
            <div className="flex">
              <MdComment
                className={navIconMobCls}
                onClick={() => {
                  directRoute(intLinks.Apply, router, pathname);
                }}
              />
              <FaBars className={navIconMobCls} onClick={() => setMobileMenuOpen(true)} />
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}
      {/* Black Bg */}
      <div
        className={
          "fixed top-0 z-[100] h-[200vh] w-full bg-black/[80%] " + (mobileMenuOpen ? "" : "hidden")
        }
        onClick={() => {
          setMobileMenuOpen(false);
        }}
      />

      {/* The Sidebar */}
      <div
        className={
          "fixed z-[101] flex h-full w-[45vw] flex-col py-[5vh] duration-[300ms] lg:hidden " +
          (mobileMenuOpen ? "right-0" : "-right-[100%]")
        }
      >
        <div className="flex h-full w-full flex-col items-center gap-[3vh] rounded-l-[5vw] bg-[#F4F4F4] px-[4vw] pb-[1vh] pt-[4vh]">
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
          <div className="flex w-full grow flex-col">
            <NavFootItems
              ulClass="flex flex-col w-full gap-[1vh]"
              liClass="flex items-center w-full gap-[1.8vw] rounded-[1vw] py-[1vh] px-[3vw]"
              aClass="text-[4vw]/[2.9vw] md:text-[2.5vw]/[1.5vw] font-latoBold"
              sidebar={true}
              dropDownMobile
              callback={() => setMobileMenuOpen(false)}
            />
          </div>
          {/* Copyright */}
          <div className="flex w-full items-center justify-center">
            <h3 className="font-avenirBook text-[2vw] text-black">{copyright}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
