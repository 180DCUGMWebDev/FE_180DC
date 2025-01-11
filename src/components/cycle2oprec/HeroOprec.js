import Image from "next/image";
import Button from "../global/Button";

export function HeroOprec() {
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
          src="/img/opreccycle/bgHeroOprec.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-screen w-full object-cover"
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
                src="/img/opreccycle/OrnamentTitle.png"
                width={2000}
                height={2000}
                className="h-[30.162vw] w-[77.949vw] object-contain lg:h-[15.052vw] lg:w-[38.958vw] max-lg:hidden"
              />
              <Image
                src="/img/opreccycle/OrnamentTitleMobile.png"
                width={2000}
                height={2000}
                className="h-[30.162vw] w-[77.949vw] object-contain lg:h-[15.052vw] lg:w-[38.958vw] lg:hidden"
              />
            </div>
            {/* bagian enroll */}
            <div className="mt-[3.646vw] hidden w-full flex-col items-center px-4 lg:mt-[1.8vw] lg:flex">
              <div>
                <p className="text-[4vw] font-latoSemibold text-white180 lg:text-[1.25vw] w-[30vw]">
                Calling all aspiring consultants and changemakers! <br /> Join 180DC UGM and leave your mark.
                </p>
                <div className="flex gap-2">
                  <Button
                    color="white"
                    text="Register Now"
                    addClass="w-[80%]  h-fit py-[1.563vw] lg:py-[0.9vw] text-[1.2vw] mt-[1.25vw] font-bold transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#73B743]  hover:text-white"
                    href="bit.ly/180DC-ConsultingOpenRecruitmentForm-Cycle2"
                  />

                  <Button
                    color="green"
                    text="Guidebook"
                    addClass="w-[60%]  h-fit py-[1.563vw] lg:py-[0.9vw] text-[1.2vw] mt-[1.25vw] font-bold transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-white hover:text-primary"
                    href="bit.ly/ConsultingCycle2-BookletOprec2025"
                  />
                </div>
                <Button
                    color="white"
                    text="Consulting Day Registration"
                    addClass="w-[100%]  h-fit py-[1.563vw] lg:py-[0.9vw] text-[1.2vw] mt-[1.25vw] font-bold transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#73B743]  hover:text-white"
                    href="bit.ly/180DC-ConsultingOpenRecruitmentForm-Cycle2"
                  />
              </div>
            </div>
          </div>

          {/* bagian kanan */}
          <div className="flex flex-col items-center justify-center max-lg:my-[14vw] max-lg:scale-[1.5] lg:w-1/2">
            <Image
              src="/img/opreccycle/postcard.png"
              alt="background"
              width={2000}
              height={2000}
              className="aspect-[681/715] z-10 ml-[2vw] mr-[5vw] w-[35vw] max-lg:w-[40vw]"
            />
          </div>

          <div className="mt-[5.938vw] flex w-full flex-col justify-center items-center px-[8.667vw] lg:hidden gap-y-[2vw]">
          <p className="font-latoSemibold text-white180 text-[3vw] w-[70vw] flex  text-center justify-center">
                Calling all aspiring consultants and changemakers! <br /> Join 180DC UGM and leave your mark.
                </p>
            <div className="flex w-full items-center justify-center gap-[2vw]">
              <Button
                color="white"
                text="Registration"
                addClass="w-[40%]  h-fit py-[1.563vw] text-[2.9vw] mt-[2.154vw] lg:mt-[1.25vw] font-bold"
                href="bit.ly/180DC-ConsultingOpenRecruitmentForm-Cycle2"
              />
              <Button
                color="green"
                text="Guidebook"
                addClass="w-[40%]  h-fit py-[1.563vw] text-[2.9vw] mt-[2.154vw] lg:mt-[1.25vw] font-bold"
                href="bit.ly/ConsultingCycle2-BookletOprec2025"
              />
              <Button
                color="green"
                text="Consulting Day"
                addClass="w-[40%]  h-fit py-[1.563vw] text-[2.9vw] mt-[2.154vw] lg:mt-[1.25vw] font-bold"
                href="bit.ly/180DC-ConsultingOpenRecruitmentForm-Cycle2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
