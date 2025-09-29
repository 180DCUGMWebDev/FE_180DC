"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button180 from "@/components/element/Button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section>
      <div className="relative min-h-screen bg-black">
        {/* Background */}
        <Image
          src="/img/homepage/balairung.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-full w-full object-cover"
        />

        {/* Decorative Elements */}
        <Image
          src="/img/bootcamp/ellipseBlack.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute right-[20%] top-[30%] z-20 h-[49.07vw] w-[68.27vw] lg:right-[20.3vw] lg:top-0 lg:h-[26.82vw] lg:w-[37.29vw]"
        />

        <Image
          src="/img/bootcamp/ellipseBlue.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute -right-[32vw] top-[30%] z-20 h-[49.07vw] w-[68.27vw] lg:-right-[15%] lg:top-0 lg:h-[26.82vw] lg:w-[37.29vw]"
        />

        <Image
          src="/img/bootcamp/ellipseGreen.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute bottom-[30%] z-20 h-[49.07vw] w-[68.27vw] lg:bottom-[10%] lg:right-[10%] lg:h-[26.82vw] lg:w-[37.29vw]"
        />

        <div className="relative z-30 flex min-h-screen flex-col items-center justify-center px-[5%] lg:flex-row lg:px-[4%]">
          {/* Left Section */}
          <div className="flex flex-col lg:w-1/2">
            <div className="flex w-full flex-col items-center px-8 text-center lg:items-start lg:text-left">
              {/* Error Icon */}
              <div className="mb-6 flex items-center justify-center">
                <span className="font-avenir-black text-8xl text-red180 lg:text-9xl">⚠️</span>
              </div>

              <h1 className="mb-4 font-avenir-black text-4xl text-white sm:text-5xl lg:text-6xl">
                Something went <span className="text-red180">wrong!</span>
              </h1>

              <h2 className="mb-6 font-avenir-light text-[4vw] text-white180 lg:text-[2.5vw]">
                Oops! An unexpected error occurred.
              </h2>

              <p className="mb-8 max-w-lg font-lato-regular text-lg text-grey-white180 lg:text-xl">
                Don&apos;t worry, it&apos;s not your fault. Our team has been notified and
                we&apos;re working to fix this issue. Please try again later.
              </p>

              {/* Buttons */}
              <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <div className="block w-full sm:w-auto">
                  <Button180
                    color="green"
                    onClick={reset}
                    text="Try Again"
                    addClass="w-full px-8 py-3 text-lg font-bold transition-all duration-200 hover:scale-105"
                  />
                </div>
                <Link href="/" className="block w-full sm:w-auto">
                  <Button180
                    color="white"
                    text="Go Home"
                    addClass="w-full px-8 py-3 text-lg font-bold transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-white"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-12 flex flex-col lg:mt-0 lg:w-1/2">
            <div className="relative ml-[8.667vw] mt-[80px] h-[21.282vw] w-full rotate-2 rounded-bl-[40px] bg-white lg:ml-0 lg:h-[12.135vw]">
              <div className="absolute flex h-full w-full items-center justify-start">
                <h1 className="max-w-[75%] pl-10 font-avenir-black text-[6.154vw] leading-[5.385vw] text-secondary md:text-[4vw] lg:max-w-full lg:pr-20 lg:text-[3.49vw] lg:leading-[3.125vw]">
                  We&apos;re fixing this right now!
                </h1>
              </div>

              {/* Helpful Links */}
              <div className="absolute -top-10 flex flex-row lg:-top-[4.167vw]">
                <div className="ml-4 mt-4 w-full md:mt-1 lg:ml-[1vw] lg:mt-[1.2vw]">
                  <p className="font-avenir-regular text-[3vw] text-white180 lg:text-[1.875vw]">
                    Technical difficulties ahead!
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex w-full flex-col justify-start px-[8.667vw] lg:px-0">
              <h3 className="mt-2 text-sm text-white180 lg:mb-[1vw] lg:mt-[1vw] lg:text-[2.083vw]">
                Quick Actions...
              </h3>

              <div className="mt-[3.2vw] flex flex-wrap gap-[2.133vw] lg:mt-[1vw] lg:gap-[0.833vw]">
                {[
                  { text: "Homepage", href: "/" },
                  { text: "About Us", href: "/aboutus" },
                  { text: "Portfolio", href: "/portofolio" },
                ].map((item, index) => (
                  <Link key={index} href={item.href}>
                    <div className="cursor-pointer rounded-r-xl rounded-bl-xl bg-white px-[2.564vw] py-[0.513vw] transition-all duration-200 hover:scale-105 hover:bg-primary lg:rounded-r-3xl lg:rounded-bl-3xl lg:px-[1.458vw] lg:py-[0.365vw]">
                      <h2 className="font-avenir-black text-[2.9vw] text-primary hover:text-white lg:text-[1.823vw]">
                        {item.text}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
