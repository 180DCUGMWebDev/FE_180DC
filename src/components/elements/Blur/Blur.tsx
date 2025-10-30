"use client";

import Cookies from "js-cookie";
import { UtilsContext } from "@/contexts/UtilsContext";
import { useContext, useEffect, useRef, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import "./Blur.css";
import { connectSS } from "@/components/modules/apply/connectSpreadsheets";
import { checkEmail } from "@/config/Functions";

export default function Blur({ className, children, isBlur = false }) {
  const { isLogin, setIsLogin, toastNotify } = useContext(UtilsContext);

  const inputRef = useRef(null);
  const submitEmail = (value) => {
    if (!checkEmail(value)) {
      toastNotify("Invalid email format!");
      return;
    }
    connectSS(value, "Newsletter", () => {});
    toastNotify("Email has been submitted!", "success");
    Cookies.set("user_email", value, { expires: 3 });
    setIsLogin(true);
  };
  const [open, setOpen] = useState(false);
  const [hydrate, setHydrate] = useState(false);
  useEffect(() => {
    setHydrate(true);
    const userEmail = Cookies.get("user_email");
    if (userEmail) {
      setIsLogin(true);
    }
  }, [setIsLogin]);
  const handleOpen = () => {
    hydrate && !open && setOpen(true);
  };
  return (
    <div className={`relative overflow-clip ${className}`}>
      {isBlur && !isLogin && (
        <>
          <div
            onMouseEnter={handleOpen}
            onClick={handleOpen}
            className="absolute top-[-7.5%] left-[-7.5%] z-100 h-[115%] w-[115%] bg-[#58B9D1] opacity-[0.5] md:top-[-2.5%] md:left-[-2.5%] md:h-[105%] md:w-[105%]"
          />
          <div
            onMouseEnter={handleOpen}
            onClick={handleOpen}
            className="absolute top-[-7.5%] left-[-7.5%] z-101 h-[115%] w-[115%] backdrop-blur-md md:top-[-2.5%] md:left-[-2.5%] md:h-[105%] md:w-[105%]"
          />
          {hydrate && (
            <div
              className={`${open ? "openZ translate-y-0 opacity-100" : "closeZ translate-y-[50%] opacity-0"} absolute top-0 right-0 bottom-0 left-0 z-101 m-auto flex h-[40%] w-[75%] flex-col items-center justify-center rounded-[2.6%/8%] bg-white blur-none transition-all duration-1000`}
            >
              <h3 className="font-avenir-book mb-[2%] text-[3.2vw] font-bold text-[#7BBA74] md:text-[3.2vw] lg:text-[1.6vw]">
                {"Let's stay connected"}
              </h3>
              <div className="flex h-[27%] w-[85%] items-center justify-evenly rounded-[2%/17%] bg-[#EEEEEE] px-[3%] text-[2.2vw] md:text-[2.4vw] lg:text-[1vw]">
                <input
                  ref={inputRef}
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      const target = e.target as HTMLInputElement;
                      submitEmail(target.value);
                      inputRef.current.value = null;
                    }
                  }}
                  placeholder="Type your email here..."
                  className="h-full w-full bg-transparent pr-[4%] outline-hidden"
                />
                <div className="mb-[1%] aspect-square w-[5%] -rotate-45">
                  <BiSolidSend style={{ color: "#58B9D1" }} className="aspect-1/1 h-full w-full" />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {children}
    </div>
  );
}
