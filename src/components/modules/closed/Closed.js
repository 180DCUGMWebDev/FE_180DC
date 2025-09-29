import Image from "next/image";
import Link from "next/link";
import Button180 from "@/components/element/Button";

export default function Closed() {
  return (
    <section>
      <div className="relative min-h-[120vh] bg-black lg:min-h-screen">
        {/* Background */}
        <Image
          src="/img/homepage/balairung.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-full min-h-[120vh] w-full object-cover lg:min-h-screen"
        />

        {/* Decorative Elements - Following bootcamp pattern */}
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

        <div className="relative z-30 flex min-h-screen flex-col items-center justify-center pb-[10vw] lg:flex-row lg:pb-0">
          {/* Left Section */}
          <div className="flex flex-col lg:w-1/2">
            <div className="flex w-full flex-col items-center px-8">
              {/* Title Section */}
              <div className="mb-6 flex aspect-square items-center justify-center rounded-full">
                <Image src={"/logowhite180.png"} width={200} height={200} alt="logo-180" />
              </div>

              <h1 className="text-center font-avenir-black text-4xl text-white sm:text-5xl lg:text-6xl">
                Closed <span className="text-primary">Registration</span>
              </h1>

              <h2 className="mt-3 text-center font-avenir-black text-[4vw] text-white lg:text-[2.5vw]">
                <span className="font-avenir-light">by</span> 180DC UGM
              </h2>
            </div>

            {/* Description and Buttons - Desktop */}
            <div className="mt-[3.646vw] hidden w-full flex-col items-center px-4 lg:mt-[1.8vw] lg:flex">
              <div>
                <p className="text-center text-[4vw] text-white180 lg:text-[1.25vw]">
                  Sorry registration is closed. Stay tuned for future opportunities!
                </p>
                <div className="mt-4 flex w-full justify-center gap-2 whitespace-nowrap">
                  <Link href="/">
                    <Button180
                      color="white"
                      text="Back to Home"
                      addClass="h-fit py-[1.563vw] lg:py-[0.9vw] w-full text-[1.2vw] mt-[1.25vw] px-6 font-bold transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#73B743] hover:text-white"
                    />
                  </Link>
                  <Link href="/aboutus">
                    <Button180
                      color="green"
                      text="About Us"
                      addClass="h-fit py-[1.563vw] lg:py-[0.9vw] w-full text-[1.2vw] mt-[1.25vw] px-6 font-bold transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#73B743] hover:text-white"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col lg:w-1/2">
            <div className="relative ml-[8.667vw] mt-[80px] h-[21.282vw] w-full rotate-2 rounded-bl-[40px] bg-white lg:ml-0 lg:h-[12.135vw]">
              <div className="absolute flex h-full w-full items-center justify-end">
                <h1 className="text-outline-decoration lg:max-w-full max-w-[75%] pr-10 font-avenir-black text-[6.154vw] leading-[5.385vw] text-secondary md:text-[4vw] lg:pr-20 lg:text-[3.49vw] lg:leading-[3.125vw]">
                  Registration is now closed
                </h1>
              </div>

              {/* Progress Indicator */}
              <div className="absolute -top-10 flex flex-row lg:-top-[4.167vw]">
                <div className="ml-8 flex h-[21.282vw] w-[15.128vw] flex-col items-center justify-center rounded-lg bg-primary/80 lg:hidden">
                  <div className="px-3 text-center text-white">
                    <div className="font-avenir-black text-2xl">100%</div>
                    <div className="font-lato-regular text-sm">Complete</div>
                  </div>
                </div>

                <div className="ml-4 hidden h-[24.103vw] w-[16.923vw] flex-col items-center justify-center rounded-lg bg-primary/80 object-contain lg:ml-[1.667vw] lg:flex lg:h-[12.292vw] lg:w-[8.646vw]">
                  <div className="text-center text-white">
                    <div className="font-avenir-black text-xl">100%</div>
                    <div className="font-lato-regular text-xs">Complete</div>
                  </div>
                </div>

                <div className="ml-4 mt-4 w-full md:mt-1 lg:ml-[1vw] lg:mt-[1.2vw]">
                  <p className="font-avenir-regular text-[3vw] text-white180 lg:text-[1.875vw]">
                    Thank you for your interest in joining us!
                  </p>
                </div>
              </div>
            </div>

            {/* Development Progress Items */}
            <div className="flex w-full flex-col justify-start px-[8.667vw] lg:px-0">
              <h3 className="mt-2 text-sm text-white lg:mb-[1vw] lg:mt-[1vw] lg:text-[2.083vw]">
                Current Progress...
              </h3>

              <div className="mt-[3.2vw] flex flex-wrap gap-[2.133vw] lg:mt-[1vw] lg:gap-[0.833vw]">
                {[
                  "Design Complete",
                  "Backend Development",
                  "Frontend Development",
                  "Testing & Launch",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-r-xl rounded-bl-xl bg-white px-[2.564vw] py-[0.513vw] lg:rounded-r-3xl lg:rounded-bl-3xl lg:px-[1.458vw] lg:py-[0.365vw]"
                  >
                    <h2 className="font-avenir-black text-[2.9vw] text-[#73B743] lg:text-[1.823vw]">
                      {item}
                    </h2>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Buttons */}
            <div className="mt-[10.938vw] flex w-full flex-col px-[8.667vw] pb-6 lg:hidden">
              <p className="mb-4 text-center text-sm text-white180 lg:text-[2.188vw]">
                Sorry, registration is closed. Stay tuned for future opportunities!
              </p>
              <div className="flex justify-center gap-2 whitespace-nowrap">
                <Link href="/">
                  <Button180
                    color="white"
                    text="Back to Home"
                    addClass="w-full h-fit px-6 py-[1.563vw] text-[2.9vw] mt-[6.154vw] lg:mt-[1.25vw] font-bold"
                  />
                </Link>
                <Link href="/aboutus">
                  <Button180
                    color="green"
                    text="About Us"
                    addClass="w-full px-6 h-fit py-[1.563vw] text-[2.9vw] mt-[6.154vw] lg:mt-[1.25vw] font-bold"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
