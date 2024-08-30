import { createBackground } from "@/config/Functions";
import Image from "next/image";
import React from "react";

const WhatTheySay = () => {
  return (
    <section className="relative">
      {createBackground("dark")}
      <div className="relative w-full bg-[url('/img/store/merch/bg-wts.png')] object-cover py-[6vw] text-white">
        {/* Testimoni */}
        <div className="w-full justify-center max-lg:flex lg:px-[10vw]">
          <span className="bg-[linear-gradient(90deg,_#6FAA26_7%,_#58B9D1_85%)] bg-clip-text font-avenirBlack text-[6.7vw] text-transparent lg:text-[3vw]">
            What did they say?
          </span>
        </div>
        {/* Testimoni */}
        <div className="w-full"></div>
      </div>
    </section>
  );
};

export default WhatTheySay;
