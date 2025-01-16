"use client";

import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import "./Blur.css";

export default function Blur({ className, children, isBlur }) {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const inputRef = useRef();
  let currentEmail = "";
  const submitEmail = (value) => {
    currentEmail = value;
    setIsLogin(true);
  };
  const [open, setOpen] = useState(true);
  const [hydrate, setHydrate] = useState(false);
  useEffect(() => {
    setHydrate(true);
    setIsLogin(true);
  }, []);
  const handleOpen = () => {
    hydrate && !open && setOpen(true);
  };
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isBlur && !isLogin && (
        <>
          <div
            onMouseEnter={handleOpen}
            onClick={handleOpen}
            className="absolute left-[-7.5%] top-[-7.5%] z-[100] h-[115%] w-[115%] bg-[#58B9D1] bg-cover opacity-[0.99] blur-md md:left-[-2.5%] md:top-[-2.5%] md:h-[105%] md:w-[105%] md:opacity-[0.99] md:blur-xl"
          />
          {hydrate && (
            <div
              className={`${open ? "openZ translate-y-0 opacity-100" : "closeZ translate-y-[50%] opacity-0"} absolute bottom-0 left-0 right-0 top-0 z-[101] m-auto flex h-[40%] w-[75%] flex-col items-center justify-center rounded-[2.6%/8%] bg-white blur-none transition-all duration-1000`}
            >
              <h3 className="mb-[2%] font-avenirBook text-[3.2vw] font-[700] text-[#7BBA74] md:text-[3.2vw] lg:text-[1.6vw]">
                Let's stay connected
              </h3>
              <p className="flex h-[27%] w-[85%] items-center justify-evenly rounded-[2%/17%] bg-[#EEEEEE] px-[3%] text-[2.2vw] md:text-[2.4vw] lg:text-[1vw]">
                <input
                  ref={inputRef}
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      submitEmail(e.target.value);
                      inputRef.current.value = null;
                    }
                  }}
                  placeholder="Type your email here..."
                  className="h-full w-full bg-transparent pr-[4%] outline-none"
                />
                <div className="mb-[1%] aspect-square w-[5%] rotate-[-45deg]">
                  <BiSolidSend
                    style={{ color: "#58B9D1" }}
                    className="aspect-[1/1] h-full w-full"
                  />
                </div>
              </p>
            </div>
          )}
        </>
      )}

      {children}
    </div>
  );
}
