"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import ImageAction from "@/components/elements/ImageAction";
import Button180 from "@/components/elements/Button180";
import Image from "next/image";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/elements/Navbar/navigation-menu";

const components = [
  {
    title: "Operations",
    href: "/aboutus/#services",
    description: "Operations management and process optimization.",
  },
  {
    title: "Market Research",
    href: "/aboutus/#services",
    description: "Market research and analysis services.",
  },
  {
    title: "Growth",
    href: "/aboutus/#services",
    description: "Business growth strategies and implementation.",
  },
  {
    title: "Organization",
    href: "/aboutus/#services",
    description: "Organization and management consulting.",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveAccordion(null); // Reset accordion when closing menu
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  // Scroll Direction Hook
  const useLastScrollDirection = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

        // Update background berdasarkan scroll position
        setIsScrolled(currentScrollTop > 50);

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
    // Hanya tutup mobile menu saat scroll di desktop (lg breakpoint ke atas)
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setMobileMenuOpen(false);
      }
    };

    // Tutup mobile menu saat scroll hanya di desktop
    if (window.innerWidth >= 1024) {
      setMobileMenuOpen(false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scroll]);

  return (
    <nav className="fixed z-101 flex w-full">
      <div className="flex w-full flex-col">
        <div
          className={`${scroll !== "down" || mobileMenuOpen ? "" : "translate-y-[-200%]"} ${mobileMenuOpen ? "bg-black-300 overflow-y-clip" : ""} flex h-20 w-full flex-row items-center justify-between gap-2 px-[10px] text-white transition-all ${mobileMenuOpen ? "duration-0" : "duration-1000"} ease-in-out lg:px-[30px] xl:px-[50px] ${
            isScrolled ? "lg:bg-black-300/70 lg:shadow-lg lg:backdrop-blur-lg" : "lg:bg-transparent"
          },`}
        >
          {/* Logo */}
          <Link className="flex w-[48px] items-center" href="/">
            <ImageAction
              src="/img/global/logo180dctrns.png"
              alt="logo 180dc"
              className="transition-transform duration-500 hover:scale-[1.05]"
            />
          </Link>
          <>
            {/* Navigation Menu */}
            <div className="hidden lg:block">
              <NavigationMenu
                //viewport harus selalu false untuk menghindari error
                viewport={false}
              >
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <div className="relative flex items-center justify-center">
                              <div className="relative aspect-square h-full w-full">
                                <Image
                                  src="/180dc.webp"
                                  alt="logo 180dc"
                                  fill
                                  style={{ objectFit: "contain" }}
                                  className="aspect-square transition-transform duration-500 hover:scale-[1.05]"
                                />
                              </div>
                            </div>
                          </NavigationMenuLink>
                        </div>
                        <ListItem href="/aboutus" title="Who Are We?">
                          Get to know 180DC UGM.
                        </ListItem>
                        <ListItem href="/aboutus/#vismis" title="Vission & Mission">
                          Our Vision & Mission.
                        </ListItem>
                        <ListItem href="/aboutus/#team" title="Our Team">
                          Meet the people behind 180DC UGM.
                        </ListItem>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[300px] gap-2 md:w-[400px] md:grid-cols-2">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link
                        href="/portofolio"
                        className={`hover:text-black-300 transition-all duration-300 hover:bg-white ${
                          pathname === "/portofolio" ? "text-black-300 bg-white" : ""
                        }`}
                      >
                        <p className="text-lg">Clients</p>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Store</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[300px]">
                        <ListItem href="/store/casebook" title="Casebook">
                          Casebook of 180DC UGM.
                        </ListItem>
                        <ListItem href="/store/merch" title="Merch">
                          Explore our merchandise.
                        </ListItem>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex w-[300px] flex-col">
                        <ListItem href="/bootcamp" title="Bootcamp">
                          Bootcamp of 180DC UGM.
                        </ListItem>
                        <ListItem href="/oprec" title="Open Recruitment">
                          Open Recruitment 180DC UGM.
                        </ListItem>
                        <ListItem href="/casecompetition" title="Asian Pasific Case Competition">
                          Competition of 180DC UGM.
                        </ListItem>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link
                        href="/academy"
                        className={`hover:text-black-300 transition-all duration-300 hover:bg-white ${
                          pathname === "/academy" ? "text-black-300 bg-white" : ""
                        }`}
                      >
                        <div className="text-lg">Academy</div>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Article</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[200px]">
                        <ListItem href="/telescope" title="Article">
                          Article of 180DC UGM.
                        </ListItem>
                        <ListItem href="/industrialreport" title="Telescope">
                          Telescope of 180DC UGM.
                        </ListItem>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Button */}
            <div className="hidden items-center justify-end lg:flex">
              <Link href="/apply">
                <Button180 color="green" text="Consult Now!" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={48} /> : <Menu size={48} />}
            </div>
          </>
        </div>
        {/* Mobile Menu */}
        <div
          className={cn(
            "bg-black-300 relative w-full rounded-b-[10px] py-4 text-center text-lg font-normal text-white lg:hidden",
            mobileMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="flex w-full flex-col items-start justify-start gap-2 px-[20px] text-left">
            <div className="w-full">
              <Link
                onClick={closeMobileMenu}
                href="/aboutus"
                className={`w-full ${pathname === "/aboutus" ? "font-semibold text-green-300" : ""}`}
              >
                <div>About</div>
              </Link>
            </div>
            <div className="w-full">
              <Link
                onClick={closeMobileMenu}
                href="/aboutus/#services"
                className={`w-full ${
                  pathname === "/aboutus#services" ? "font-semibold text-green-300" : ""
                } `}
              >
                <div>Services</div>
              </Link>
            </div>
            <div className="w-full">
              <Link
                onClick={closeMobileMenu}
                href="/portofolio"
                className={`w-full ${
                  pathname === "/portofolio" ? "font-semibold text-green-300" : ""
                }`}
              >
                <div>Clients</div>
              </Link>
            </div>

            {/* Store Accordion */}
            <div className="w-full">
              <div
                className={`flex w-full cursor-pointer items-center justify-between ${
                  pathname === "/store/casebook" || pathname === "/store/merch"
                    ? "font-semibold text-green-300"
                    : ""
                }`}
                onClick={() => toggleAccordion("store")}
              >
                <span>Store</span>
                <span
                  className={`transition-transform duration-300 ${activeAccordion === "store" ? "rotate-180" : ""}`}
                >
                  <ChevronDown size={24} />
                </span>
              </div>
              {activeAccordion === "store" && (
                <div className="mt-1 flex flex-col gap-2 border-l border-neutral-200 pl-4 text-base">
                  <Link
                    href="/store/merch"
                    onClick={closeMobileMenu}
                    className="text-white/90 transition-colors duration-200 hover:text-white"
                  >
                    Merch
                  </Link>
                  <Link
                    href="/store/casebook"
                    onClick={closeMobileMenu}
                    className="text-white/90 transition-colors duration-200 hover:text-white"
                  >
                    Casebook
                  </Link>
                </div>
              )}
            </div>

            {/* Event Accordion */}
            <div className="w-full">
              <div
                className={`flex cursor-pointer items-center justify-between ${
                  pathname === "/bootcamp" ||
                  pathname === "/cycle2oprec" ||
                  pathname === "/casecompetition"
                    ? "font-semibold text-green-300"
                    : ""
                }`}
                onClick={() => toggleAccordion("event")}
              >
                <span>Event</span>
                <span
                  className={`transition-transform duration-300 ${activeAccordion === "event" ? "rotate-180" : ""}`}
                >
                  <ChevronDown size={24} />
                </span>
              </div>
              {activeAccordion === "event" && (
                <div className="mt-1 flex flex-col gap-2 border-l border-neutral-200 pl-4 text-base">
                  <Link
                    href="/bootcamp"
                    onClick={closeMobileMenu}
                    className="text-white/90 transition-colors duration-200 hover:text-white"
                  >
                    Bootcamp
                  </Link>
                  <Link
                    href="/oprec"
                    onClick={closeMobileMenu}
                    className="text-white/90 transition-colors duration-200 hover:text-white"
                  >
                    Open Recruitment
                  </Link>
                  <Link
                    href="/casecompetition"
                    onClick={closeMobileMenu}
                    className="text-white/90 transition-colors duration-200 hover:text-white"
                  >
                    Asian Pacific Case Competition
                  </Link>
                </div>
              )}
            </div>

            <div className="w-full">
              <Link
                onClick={closeMobileMenu}
                href="/academy"
                className={pathname === "/academy" ? "font-semibold text-green-300" : ""}
              >
                <div>Academy</div>
              </Link>
            </div>

            {/* Telescope Accordion */}
            <div className="w-full">
              <div
                className={`flex cursor-pointer items-center justify-between ${
                  pathname === "/telescope" || pathname === "/industrialreport"
                    ? "font-semibold text-green-300"
                    : ""
                }`}
                onClick={() => toggleAccordion("telescope")}
              >
                <span>Article</span>
                <span
                  className={`transition-transform duration-300 ${activeAccordion === "telescope" ? "rotate-180" : ""}`}
                >
                  <ChevronDown size={24} />
                </span>
              </div>
              {activeAccordion === "telescope" && (
                <div className="mt-1 flex flex-col gap-2 border-l border-neutral-200 pl-4 text-base">
                  <Link
                    onClick={closeMobileMenu}
                    href="/telescope"
                    className="text-white/90 transition-colors duration-200 hover:text-white"
                  >
                    Article
                  </Link>
                  <Link
                    onClick={closeMobileMenu}
                    href="/industrialreport"
                    className="text-white/90 transition-colors duration-200 hover:text-white"
                  >
                    Telescope
                  </Link>
                </div>
              )}
            </div>
            <div className="mt-6 mb-4 h-px w-full bg-neutral-200" />
            <Link onClick={closeMobileMenu} className="w-full" href="/apply">
              <div className="font-mulish-bold w-full rounded-[5px] bg-green-300 py-[6px] text-center text-base text-white">
                Consult Now!
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <div
      className="flex items-center justify-start rounded-[10px] p-2 hover:bg-neutral-200"
      {...props}
    >
      <NavigationMenuLink asChild>
        <Link href={href} className="flex flex-col items-start justify-center">
          <div className="text-md leading-snug font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-none">{children}</p>
        </Link>
      </NavigationMenuLink>
    </div>
  );
}
