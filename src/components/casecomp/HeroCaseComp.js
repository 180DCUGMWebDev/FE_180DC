import Image from "next/image";
import Button from "../global/Button";

export function HeroCaseComps() {
  return (
    <section>
      <div className="relative">
        <Image
          src="/img/casecomp/heroCaseComp.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-screen w-full object-cover"
        />

        <div className="relative z-30 flex h-screen flex-col items-center justify-center lg:flex-row">
          {/* bagian kiri */}
          <div className="flex flex-col lg:w-1/2">
            <div className="flex w-full flex-col items-center px-8">
              <Image
                alt="APAC Title"
                src="/img/casecomp/APACTitle.png"
                width={2000}
                height={2000}
                className="h-[30.162vw] w-[77.949vw] object-contain max-lg:hidden lg:h-[15.052vw] lg:w-[38.958vw]"
              />
              <Image
                alt="APAC Title"
                src="/img/casecomp/APACTitle.png"
                width={2000}
                height={2000}
                className="h-[30.162vw] w-[77.949vw] object-contain lg:hidden lg:h-[15.052vw] lg:w-[38.958vw]"
              />
            </div>
            {/* bagian enroll */}
            <div className="mt-[3.646vw] hidden w-full flex-col items-center px-4 lg:mt-[1.8vw] lg:flex">
              <div>
                <p className="w-[30vw] font-latoSemibold text-[4vw] text-white180 lg:text-[1.25vw]">
                  Calling all aspiring Problem Solver Join 180DC APAC Case Competition UGM and leave
                  your mark.
                </p>
                <div className="flex gap-2">
                  <Button
                    color="green"
                    text="Enroll Competition"
                    addClass="w-[80%]  h-fit py-[1.563vw] lg:py-[0.9vw] text-[1.2vw] mt-[1.25vw] font-bold transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#73B743]  hover:text-white"
                    href="bit.ly/180DC-ConsultingOpenRecruitmentForm-Cycle2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* bagian kanan */}
          <div className="flex flex-col items-center justify-center max-lg:my-[14vw] max-lg:scale-[1.5] lg:w-1/2">
            <Image
              src="/img/casecomp/HeroMainOrnament.png"
              alt="background"
              width={2000}
              height={2000}
              className="absolute -bottom-[10.6vw] -right-[20vw] z-10 mr-[5vw] w-full scale-[0.7] max-lg:hidden"
            />
          </div>

          <div className="relative -mt-[20vw] flex w-full flex-col items-center justify-center gap-y-[2vw] px-[8.667vw] lg:hidden">
            <p className="flex w-[70vw] justify-center text-center font-latoSemibold text-[3vw] text-white180">
              Calling all aspiring consultants and changemakers! <br /> Join 180DC APAC Case
              Competition UGM and leave your mark.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-[2vw]">
              <Button
                color="green"
                text="Registration"
                addClass="w-[40%]  h-fit py-[1.563vw] text-[2.9vw] mt-[2.154vw] lg:mt-[1.25vw] font-bold"
                href="bit.ly/180DC-ConsultingOpenRecruitmentForm-Cycle2"
              />
              {/* <Image
                src="/img/casecomp/HeroMainOrnament.png"
                alt="background"
                width={2000}
                height={2000}
                className="mt-[20vw] w-full scale-[2] lg:hidden"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
