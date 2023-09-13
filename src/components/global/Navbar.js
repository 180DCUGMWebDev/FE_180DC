"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  const options = ["Home", "About Us", "Our Clients", "Telescope"];
  const directs = [
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.gmail.com",
    "https://www.facebook.com",
  ];

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
        "fixed top-0 left-0 z-[999] flex w-full py-[10px] px-[20px] transition-transform duration-[300ms] " +
        (scroll !== "down" ? "" : "translate-y-[-200%]")
      }
    >
      <nav className="flex relative top-0 left-0 w-full">
        <div className="flex w-[5%]">
          <Image
            src="/img/logo180dctrns.png"
            alt="logo 180dc"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            draggable="false"
          />
        </div>
        <div className="flex w-[80%]">
          <ul className="flex w-full items-center justify-center gap-[60px]">
            {options.map((val, idx) => {
              return (
                <li className="flex justify-center text-lightWhite font-mulishRegular hover:font-mulishBold w-[10%]">
                  <a href={directs[idx]} target="_blank">
                    {val}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
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
