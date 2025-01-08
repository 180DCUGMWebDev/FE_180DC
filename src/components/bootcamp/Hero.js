import Image from "next/image";
import Button from "../global/Button";

export function Hero() {
  const items = [
    "Final Pitching",
    "Exclusive Speaker Sessions",
    "Mentoring Sessions",
    "Crack the Case",
  ];

  return (
    <section>
      <div className="relative">
        <Image
          src="/img/bootcamp/heroBootcamp.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-screen w-screen object-cover"
        />

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

        <div className="relative z-30 flex h-screen flex-col items-center justify-center lg:flex-row">
          {/* bagian kiri */}
          <div className="flex flex-col lg:w-1/2">
            <div className="flex w-full flex-col items-center px-8">
              <Image
                src="/img/bootcamp/consultingBootcampLogo.png"
                width={2000}
                height={2000}
                className="h-[30.162vw] w-[77.949vw] object-contain lg:h-[15.052vw] lg:w-[38.958vw]"
              />
              <h2 className="mt-3 font-avenirBlack text-[4vw] text-white lg:text-[2.5vw]">
                {" "}
                <span className="font-avenirLight">by</span> 180DC UGM
              </h2>
            </div>
            {/* bagian enroll */}
            <div className="mt-[3.646vw] hidden w-full flex-col items-center px-4 lg:mt-[1.8vw] lg:flex">
              <div>
                <p className="text-[4vw] text-white180 lg:text-[1.25vw]">
                  in-depth sessions to equip you <br /> all necessary materials of Consulting
                </p>
                <div className="flex gap-2">
                  <Button
                    color="white"
                    text="Enroll me Now"
                    addClass="w-[80%]  h-fit py-[1.563vw] lg:py-[0.9vw] text-[1.2vw] mt-[1.25vw] font-bold transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#73B743]  hover:text-white"
                    href="bit.ly/RegistrationCB180DC"
                  />

                  <Button
                    color="green"
                    text="Guidebook"
                    addClass="w-[60%]  h-fit py-[1.563vw] lg:py-[0.9vw] text-[1.2vw] mt-[1.25vw] font-bold transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-white hover:text-primary"
                    href="bit.ly/GuidebookCB180DC"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* bagian kanan */}
          <div className="flex flex-col lg:w-1/2">
            <div className="relative ml-[8.667vw] mt-[80px] h-[21.282vw] w-full rotate-2 rounded-bl-[40px] bg-white lg:ml-0 lg:h-[12.135vw]">
              <div className="absolute flex h-full w-full items-center justify-end">
                <h1 className="text-outline-decoration lg:max-w-[100%]: max-w-[75%] pr-10 font-avenirBlack text-[6.154vw] leading-[5.385vw] text-secondary md:text-[4vw] lg:pr-20 lg:text-[3.49vw] lg:leading-[3.125vw]">
                  The more you learn, the more you earn!
                </h1>
              </div>

              <div className="absolute -top-10 flex flex-row lg:-top-[4.167vw]">
                <Image
                  src="/img/bootcamp/bootcampBookHijau.png"
                  width={2000}
                  height={2000}
                  className="ml-8 h-[21.282vw] w-[15.128vw] lg:hidden"
                />

                <Image
                  src="/img/bootcamp/bootcampBookHijau.png"
                  width={2000}
                  height={2000}
                  className="ml-4 hidden h-[24.103vw] w-[16.923vw] object-contain lg:ml-[1.667vw] lg:flex lg:h-[12.292vw] lg:w-[8.646vw]"
                />
                <div className="ml-4 mt-4 w-full md:mt-1 lg:ml-[1vw] lg:mt-[1.2vw]">
                  <p className="font-avenirRegular text-[3vw] text-white180 lg:text-[1.875vw]">
                    learn now! become consultants tomorrow.
                  </p>
                </div>
              </div>

              <Image
                src="/img/bootcamp/bootcampStickyNotes.png"
                width={2000}
                height={2000}
                className="absolute -right-2 -top-10 h-[14.359vw] w-[21.795vw] md:-top-14 md:right-2 lg:-right-[5vw] lg:-top-[5vw] lg:h-[8.229vw] lg:w-[12.448vw]"
              />

              <Image
                src="/img/bootcamp/plsfixBootcamp.png"
                width={2000}
                height={2000}
                className="absolute -bottom-[30px] right-8 h-[14.359vw] w-[25.641vw] md:-bottom-[6.3vw] md:right-[18.205vw] md:h-[14.583vw] md:w-[26.042vw] lg:-bottom-[4.04vw] lg:right-[3.333vw] lg:h-[7.833vw] lg:w-[15.417vw]"
              />
            </div>

            <div className="flex w-full flex-col justify-start px-[8.667vw] lg:px-0">
              <h3 className="mt-2 text-sm text-white lg:mb-[1vw] lg:mt-[1vw] lg:text-[2.083vw]">
                Discover Yourself Through...
              </h3>

              <div className="mt-[3.2vw] flex flex-wrap gap-[2.133vw] lg:mt-[1vw] lg:gap-[0.833vw]">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-r-xl rounded-bl-xl bg-white px-[2.564vw] py-[0.513vw] lg:rounded-r-3xl lg:rounded-bl-3xl lg:px-[1.458vw] lg:py-[0.365vw]"
                  >
                    <h2 className="font-avenirBlack text-[2.9vw] text-[#73B743] lg:text-[1.823vw]">
                      {item}
                    </h2>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[10.938vw] flex w-full flex-col px-[8.667vw] lg:hidden">
              <p className="text-sm text-white180 lg:text-[2.188vw]">
                in-depth sessions to equip you <br /> all necessary materials of Consulting
              </p>
              <div className="flex gap-2">
                <Button
                  color="white"
                  text="Enroll me Now"
                  addClass="w-[40%]  h-fit py-[1.563vw] text-[2.9vw] mt-[6.154vw] lg:mt-[1.25vw] font-bold"
                  href="bit.ly/RegistrationCB180DC"
                />
                <Button
                  color="green"
                  text="Guidebook"
                  addClass="w-[40%]  h-fit py-[1.563vw] text-[2.9vw] mt-[6.154vw] lg:mt-[1.25vw] font-bold"
                  href="bit.ly/GuidebookCB180DC"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
