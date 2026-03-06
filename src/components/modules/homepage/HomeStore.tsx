import Button180 from "@/components/elements/Button180";
import Container from "@/components/layout/Container";
import Image from "next/image";

const storeItems = [
  {
    title: "Casebook",
    description: "The ultimate e-book you need to learn about consulting! Get in bundles!",
    image: "/img/homepage/caseBook.webp",
  },
  {
    title: "Merch",
    description:
      "#PLSFIX is an initiative by 180DC UGM to offer merchandise. Wear #PLSFIX and contributing to society while becoming #TheBestofYOUth",
    image: "/img/homepage/merch.webp",
  },
  {
    title: "Framework Bank",
    description:
      "Your Shortcut to 21+ effective consulting frameworks! Discover our Case Study and MAny More!",
    image: "/img/homepage/frameworkBank.webp",
  },
];

export function HomeStore() {
  return (
    <>
      <div className="relative flex h-fit w-full items-center bg-[#A6CED1] px-[5%] sm:px-[10%] lg:h-[50vw] lg:px-[4%]">
        <Image
          src="/img/homepage/splash.webp"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/img/homepage/homeLeftEllipse.webp"
            alt="background"
            width={2000}
            height={2000}
            className="absolute inset-0 bottom-0 left-0 z-0 w-[80vw] -translate-x-[65%] -translate-y-[10%]"
          />
          <Image
            src="/img/homepage/homeRightEllipse.webp"
            alt="background"
            width={2000}
            height={2000}
            className="absolute inset-0 right-0 bottom-0 z-0 w-[60vw] translate-x-[65%] translate-y-[10%] blur-[50px]"
          />
        </div>
        <Image
          src="/img/bootcamp/cincin.webp"
          alt="background"
          width={2000}
          height={2000}
          className="absolute bottom-0 left-0 z-20 w-[40vw] -translate-x-[35%] translate-y-[15%] rotate-25 md:w-[25vw]"
        />
        <Image
          src="/img/bootcamp/cincin.webp"
          alt="background"
          width={2000}
          height={2000}
          className="absolute top-0 right-0 z-20 w-[40vw] translate-x-[10%] -translate-y-[50%] rotate-3 md:w-[25vw]"
        />
        <Image
          src="/img/bootcamp/downTree.webp"
          alt="background"
          width={2000}
          height={2000}
          className="absolute top-0 right-0 z-20 w-[20vw] translate-y-[90%] rotate-3 sm:translate-y-[30%] md:w-[15vw] md:translate-x-[10%] md:translate-y-[70%] lg:w-[10vw] lg:translate-x-[10%] lg:translate-y-[80%]"
        />
        <div className="relative z-30 w-full">
          <Container>
            <div className="flex flex-col">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="font-avenir-black mx-auto flex w-fit flex-wrap items-center justify-center rounded-[20px] border-1 border-white/37 bg-[#C5C5C5]/23 px-6 py-2 text-center text-[20px] shadow-[3px_6px_4px_rgba(0,0,0,0.18)] backdrop-blur-[13.8px] md:px-10 md:py-2 md:text-[28px] lg:rounded-[41px] lg:text-[38.98px]"
              >
                <p className="text-white">Shop at&nbsp;</p>
                <p className="text-[#73B743]">180DC UGM&nbsp;</p>
                <p className="text-white">Store</p>
              </div>

              <div className="relative z-20 mt-16 grid w-full grid-cols-1 gap-16 md:mt-24 md:grid-cols-3 md:gap-6">
                {storeItems.map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={index * 300}
                    className="flex flex-col items-center rounded-[17px] border border-white/81 bg-[#7FF7DD]/12 px-6 pt-0 pb-6 shadow-[8px_12px_8px_rgba(0,0,0,0.11)] backdrop-blur-[18px] md:pb-4"
                  >
                    <div className="pointer-events-none relative -mt-12 mb-6 flex w-full justify-center drop-shadow-2xl md:-mt-10 md:mb-12">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="h-auto w-[45%] object-contain md:w-[60%] lg:w-[50%]"
                      />
                    </div>
                    <h3 className="font-avenir-black text-center text-[24px] text-black lg:text-[30.41px]">
                      {item.title}
                    </h3>
                    <p className="font-avenir-regular mt-2 text-center text-[14px] leading-relaxed text-black md:mt-0 lg:text-[13.41px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="450"
                className="relative z-40 mx-auto mt-12 mb-10 flex w-fit justify-center md:mb-0"
              >
                <Button180
                  size="md"
                  color="green"
                  text="Check Out the Store!"
                  href="/store"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
