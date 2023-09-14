"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Button from "./Button";
import NavFootItems from "./NavFootItems";
import ImgF from "./ImgF";

import { navLinks } from "@/config/Links";

export default function Navbar() {
  // Router Hook
  const router = useRouter();

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
        "fixed top-0 left-0 z-[999] flex w-full py-[20px] px-[50px] transition-transform duration-[300ms] " +
        (scroll !== "down" ? "" : "translate-y-[-200%]")
      }
    >
      <nav className="flex w-full">
        {/* Logo */}
        <div className="flex w-[5%]">
          <ImgF
            src="/img/global/logo180dctrns.png"
            alt="logo 180dc"
            action={() => {
              router.push(navLinks.Home);
            }}
          />
        </div>
        {/* Navigations */}
        <div className="flex w-[80%]">
          <NavFootItems
            ulClass="flex w-full items-center justify-center gap-[60px]"
            liClass="flex justify-center w-[10%]"
            aClass="text-lightWhite font-latoRegular hover:font-latoBold"
          />
        </div>
        {/* Consult */}
        <div className="flex justify-end items-center w-[15%]">
          <Button
            color={"green"}
            text={"Consult Now!"}
            addClass={"w-[170px] text-[16px]"}
          />
        </div>
      </nav>
    </div>
  );
}
