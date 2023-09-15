"use client";

import { useRouter } from "next/navigation";

import {
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
} from "react-icons/fa";
import NavFootItems from "./NavFootItems";
import ImgF from "./ImgF";

import { navLinks } from "@/config/Links";

export default function Footer() {
  // Router Hook
  const router = useRouter();

  // Classes
  const classHead = "font-latoBold text-[24px]";

  return (
    <div className="flex w-full bg-gradient-to-br from-black to-primary rounded-tl-[20px] rounded-tr-[20px] p-[3px]">
      <div className="flex flex-col w-full bg-black rounded-tl-[20px] rounded-tr-[20px] px-[47px] py-[35px] pb-[2px] gap-[16px]">
        {/* Contents */}
        <div className="flex w-full gap-[60px] text-lightWhite">
          {/* Logo */}
          <div className="w-2/12">
            <ImgF src="/img/global/footerlogo180dc.png" alt="logo footer 180dc" action={() => {router.push(navLinks.Home)}} />
          </div>
          {/* Office */}
          <div className="flex flex-col w-3/12 gap-[8px]">
            <h1 className={classHead}>{"Office"}</h1>
            <p className="text-[12px]">
              {
                "180 Degrees Consulting UGM Universitas Gadjah Mada Bulaksumur, Caturtunggal, Depok, Sleman, Yogyakarta 55281"
              }
            </p>
            <p className="text-[12px]">{"ugm@180dc.org"}</p>
          </div>
          {/* Navigation */}
          <div className="flex flex-col w-2/12 gap-[8px]">
            <h1 className={classHead}>{"Navigation"}</h1>
            <NavFootItems
              ulClass="flex flex-col w-full gap-[2.5px] text-[12px]"
              liClass="flex w-full"
              aClass="text-lightWhite font-latoRegular hover:font-latoBold"
            />
          </div>
          {/* Stay Connected */}
          <form className="flex flex-col justify-center w-[41.67%] gap-[8px]">
            <div className="flex items-start w-full">
              <div className="w-8/12">
                <h1 className="font-avenirRegular text-[24px]">
                  {"Let's Stay Connected"}
                </h1>
              </div>
              <div className="flex justify-end w-4/12 gap-[24px]">
                <a target="_blank" href="https://www.instagram.com/180dcugm/">
                  <FaInstagram size="32px" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/180dcugm/"
                >
                  <FaLinkedin size="32px" />
                </a>
                <a
                  target="_blank"
                  href="https://open.spotify.com/show/4JoRSSOG8SospplfsJTxSe"
                >
                  <FaSpotify size="32px" />
                </a>
              </div>
            </div>
            <div className="flex items-center w-full">
              <input
                type="text"
                className="w-full px-[12px] py-[10px] rounded-tl-[5px] rounded-bl-[5px] outline-none text-black bg-white180 text-[12px]"
                placeholder="Enter Your Email to Subscribe to Our Newsletter"
              />
              <button className="h-full bg-white180 rounded-tr-[5px] rounded-br-[5px] pr-[12px]">
                <FaArrowRight color="#1A1A1A" opacity="57%" size="24px" />
              </button>
            </div>
          </form>
        </div>
        {/* Copyright */}
        <div className="flex justify-center w-full">
          <h3 className="text-primary font-avenirBook text-[12px]">
            {"©2023 by 180 Degrees Consulting UGM"}
          </h3>
        </div>
      </div>
    </div>
  );
}
