import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function HeroPage() {
  return (
    <section className="relative">
      <Image
        src="/img/opreccycle/bgHeroOprec.png"
        alt="Open Recruitment Background"
        width={2000}
        height={2000}
        className="absolute inset-0 z-10 h-screen w-full object-cover"
      />

      <Image
        src="/img/oprec/sprinkle-blue.webp"
        alt="Decorative Element"
        width={2000}
        height={2000}
        className="absolute top-[30%] -left-[15%] z-20 h-[49.07vw] w-[68.27vw] lg:top-0 lg:right-[20.3vw] lg:h-[26.82vw] lg:w-[37.29vw]"
      />

      <Image
        src="/img/oprec/sprinkle-white.webp"
        alt="Decorative Element"
        width={2000}
        height={2000}
        className="absolute top-[30%] -right-[32vw] z-20 h-[49.07vw] w-[68.27vw] lg:top-3 lg:right-[5%] lg:h-[26.82vw] lg:w-[37.29vw]"
      />

      <Image
        src="/img/oprec/sprinkle-green.webp"
        alt="Decorative Element"
        width={2000}
        height={2000}
        className="absolute bottom-[30%] z-20 h-[49.07vw] w-[68.27vw] lg:right-[10%] lg:bottom-[10%] lg:h-[26.82vw] lg:w-[37.29vw]"
      />

      <div className="relative z-30 flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <Image
            alt="180DC Open Recruitment Title"
            src="/img/oprec/oprec-functional.webp"
            width={3000}
            height={3000}
            className="h-[30.162vw] w-[89.949vw] object-contain max-lg:hidden lg:h-[35.052vw] lg:w-[58.958vw]"
          />
          <Image
            alt="180DC Open Recruitment Title Mobile"
            src="/img/oprec/oprec-functional.webp"
            width={2000}
            height={2000}
            className="h-[45.162vw] w-[97.949vw] object-contain lg:hidden"
          />

          <div className="mt-8 max-lg:hidden">
            <p className="font-lato-semibold max-w-2xl text-xl text-white lg:text-2xl">
              Calling all problem-solvers and impact-driven minds
              <br />
              180DC UGM is your next big step!
            </p>
          </div>

          <div className="mt-6 lg:hidden">
            <p className="font-lato-semibold max-w-sm text-base text-white">
              Calling all problem-solvers and impact-driven minds
              <br />
              180DC UGM is your next big step!
            </p>
          </div>
          {/* Scroll Down [DESKTOP] */}
          <div className="flex flex-col items-center outline-0">
            <h2 className="font-lato-bold text-brand-light-white mt-[1.4vw] text-[12px]">
              {"SCROLL DOWN TO ACCESS GUIDEBOOK AND REGISTRATION"}
            </h2>
            <FaChevronDown className="animate-moving-pointer text-brand-light-white text-[1.4vw]" />
          </div>
        </div>

        {/* <div className="absolute bottom-8 right-8 max-lg:hidden">
          <Image
            src="/img/opreccycle/postcard.png"
            alt="180DC Postcard"
            width={400}
            height={420}
            className="aspect-681/715 w-[25vw] object-contain"
          />
        </div> */}
      </div>
    </section>
  );
}
