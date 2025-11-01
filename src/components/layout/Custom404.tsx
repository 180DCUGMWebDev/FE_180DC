"use client";

import Image from "next/image";
import Link from "next/link";
import Button180 from "@/components/elements/Button180";

export default function Custom404({
  title = "Page Not Found",
  subtitle = "Oops! The page you're looking for doesn't exist.",
  description = "The page might have been moved, deleted, or you entered the wrong URL. Let's get you back on track!",
  homeLink = "/",
  additionalLinks = [
    { text: "About Us", href: "/aboutus", onClick: null },
    { text: "Portfolio", href: "/portofolio", onClick: null },
    { text: "Store", href: "/store", onClick: null },
  ],
}) {
  return (
    <section>
      <div className="bg-black-300 relative min-h-screen">
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
          className="absolute top-[30%] right-[20%] z-20 h-[49.07vw] w-[68.27vw] lg:top-0 lg:right-[20.3vw] lg:h-[26.82vw] lg:w-[37.29vw]"
        />

        <Image
          src="/img/bootcamp/ellipseBlue.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute top-[30%] -right-[32vw] z-20 h-[49.07vw] w-[68.27vw] lg:top-0 lg:-right-[15%] lg:h-[26.82vw] lg:w-[37.29vw]"
        />

        <Image
          src="/img/bootcamp/ellipseGreen.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute bottom-[30%] z-20 h-[49.07vw] w-[68.27vw] lg:right-[10%] lg:bottom-[10%] lg:h-[26.82vw] lg:w-[37.29vw]"
        />

        <div className="relative z-30 flex min-h-screen flex-col items-center justify-center px-[5%] lg:flex-row lg:px-[4%]">
          {/* Left Section */}
          <div className="flex flex-col lg:w-1/2">
            <div className="flex w-full flex-col items-center px-8 text-center lg:items-start lg:text-left">
              {/* 404 Number */}
              <div className="mb-6 flex items-center justify-center">
                <span className="font-avenir-black text-8xl text-green-300 lg:text-9xl">404</span>
              </div>

              <h1 className="font-avenir-black mb-4 text-4xl text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <h2 className="font-avenir-light text-gray-100-180 mb-6 text-[4vw] lg:text-[2.5vw]">
                {subtitle}
              </h2>

              <p className="font-lato-regular mb-8 max-w-lg text-lg text-gray-100 lg:text-xl">
                {description}
              </p>

              {/* Buttons */}
              <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link href={homeLink}>
                  <Button180 color="green" text="Go to Homepage" />
                </Link>
                <Link href="/aboutus">
                  <Button180 color="white" text="About Us" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-12 flex flex-col lg:mt-0 lg:w-1/2">
            <div className="relative mt-[80px] ml-[8.667vw] h-[21.282vw] w-full rotate-2 rounded-bl-[40px] bg-white lg:ml-0 lg:h-[12.135vw]">
              <div className="absolute flex h-full w-full items-center justify-start">
                <h1 className="font-avenir-black max-w-[75%] pl-10 text-[6.154vw] leading-[5.385vw] text-cyan-300 md:text-[4vw] lg:max-w-full lg:pr-20 lg:text-[3.49vw] lg:leading-[3.125vw]">
                  Lost? Let&apos;s find your way back!
                </h1>
              </div>

              {/* Helpful Links */}
              <div className="absolute -top-10 flex flex-row lg:-top-[4.167vw]">
                <div className="mt-4 ml-4 w-full md:mt-1 lg:mt-[1.2vw] lg:ml-[1vw]">
                  <p className="font-avenir-regular text-gray-100-180 text-[3vw] lg:text-[1.875vw]">
                    Navigate back to safety!
                  </p>
                </div>
              </div>
            </div>

            {/* Popular Pages */}
            <div className="flex w-full flex-col justify-start px-[8.667vw] lg:px-0">
              <h3 className="text-gray-100-180 mt-2 text-sm lg:mt-[1vw] lg:mb-[1vw] lg:text-[2.083vw]">
                Popular Pages...
              </h3>

              <div className="mt-[3.2vw] flex flex-wrap gap-[2.133vw] lg:mt-[1vw] lg:gap-[0.833vw]">
                {additionalLinks.map((item, index) =>
                  item.onClick ? (
                    <button
                      key={index}
                      onClick={item.onClick}
                      className="cursor-pointer rounded-r-xl rounded-bl-xl bg-white px-[2.564vw] py-[0.513vw] transition-all duration-200 hover:scale-105 hover:bg-green-300 lg:rounded-r-3xl lg:rounded-bl-3xl lg:px-[1.458vw] lg:py-[0.365vw]"
                    >
                      <h2 className="font-avenir-black text-[2.9vw] text-green-300 hover:text-white lg:text-[1.823vw]">
                        {item.text}
                      </h2>
                    </button>
                  ) : (
                    <Link key={index} href={item.href}>
                      <div className="cursor-pointer rounded-r-xl rounded-bl-xl bg-white px-[2.564vw] py-[0.513vw] transition-all duration-200 hover:scale-105 hover:bg-green-300 lg:rounded-r-3xl lg:rounded-bl-3xl lg:px-[1.458vw] lg:py-[0.365vw]">
                        <h2 className="font-avenir-black text-[2.9vw] text-green-300 hover:text-white lg:text-[1.823vw]">
                          {item.text}
                        </h2>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
