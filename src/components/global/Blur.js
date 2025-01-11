"use client";

import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useRef } from "react";

export default function Blur({ className, children, isBlur }) {
  const { isLogin } = useContext(AuthContext);
  const inputRef = useRef();
  let currentEmail = "";
  const submitEmail = (value) => {
    currentEmail = value;
    console.log(value);
  };
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* {(isBlur || isLogin) && (
        <>
          <div className="absolute left-[-7.5%] top-[-7.5%] z-[100] h-[115%] w-[115%] bg-[url('/img/academy/GRAD_180Mobile.png')] bg-cover opacity-[0.99] blur-xl md:left-[-2.5%] md:top-[-2.5%] md:h-[105%] md:w-[105%] md:opacity-[0.99] md:blur-xl" />
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[101] m-auto flex h-[80%] w-[85%] flex-col items-center justify-center rounded-[2%/3.5%] bg-[#D9D9D9] blur-none">
            <h3 className="mb-[2%] font-avenirBlack text-[3.2vw] text-[#7BBA74] md:text-[3.1vw] lg:text-[1.5vw]">
              Insert your email, connect with us
            </h3>
            <input
              ref={inputRef}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  submitEmail(e.target.value);
                  inputRef.current.value = null;
                }
              }}
              className="h-[14%] w-[75%] rounded-[5%/48%] bg-[#C3C2C0] px-[3%] outline-0"
            />
            {currentEmail}
          </div>
        </>
      )} */}

      {children}
    </div>
  );
}
