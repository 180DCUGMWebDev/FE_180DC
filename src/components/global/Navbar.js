"use client";

// Import Packages
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

// Import Components
import Button from "./Button";
import NavFootItems from "./NavFootItems";
import ImgF from "./ImgF";

// Import Configs
import { intLinks, navLinks } from "@/config/Links";
import { directRoute } from "@/config/Functions"

export default function Navbar() {
  // Router Hook
  const router = useRouter();
  const pathname = usePathname();

  // Scroll Direction Hook
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <div
      className={
        "fixed top-0 left-0 z-[999] hidden lg:flex w-full py-[20px] px-[50px] transition-transform duration-[300ms] " +
        (scroll !== "down" ? "" : "translate-y-[-200%]")
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
            addClass={"w-[11vw] text-[1.1vw] py-[9px] 2xl:w-[170px] 2xl:text-[17px] " + (intLinks.Apply == pathname ? " opacity-[70%]" : "")}
            action={() => {
              directRoute(intLinks.Apply, router, pathname);
            }}
          />
        </div>
      </nav>
    </div>
  );
}
