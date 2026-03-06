import Button180 from "@/components/elements/Button180";
import Container from "@/components/layout/Container";
import Image from "next/image";

export function HomeJoinUs() {
  const clients = [
    {
      buttonTitle: "I'm a Business Owner",
      imageBG: "/img/homepage/owner.webp",
      icon: "/img/homepage/ownerIcon.webp",
    },
    {
      title: "I'm a Student",
      imageBG: "/img/homepage/student.webp",
      icon: "/img/homepage/studentIcon.webp",
    },
  ];
  return (
    <div className="relative z-10 flex h-fit w-full items-center bg-[#262626] px-[5%] py-16 sm:px-[10%] md:py-24 lg:h-screen lg:min-h-[50vw] lg:px-[4%] lg:py-0">
      <Image
        src="/img/homepage/background2JoinUs.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute inset-0 z-10 h-full w-full object-cover"
      />
      <Image
        src="/img/homepage/homeStar.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute z-10 w-[150vw] max-w-none -translate-x-[40%] -translate-y-[20%] object-contain sm:-translate-x-[45%] lg:-translate-x-[40%] lg:-translate-y-[35%]"
      />
      <Image
        src="/img/bootcamp/180PlsFix.webp"
        alt="plsfix banner"
        width={500}
        height={150}
        className="absolute top-0 left-0 z-10 w-[40%] max-w-[500px] -translate-y-[10%] object-contain sm:w-[35%] md:w-[30%] lg:w-[20%]"
      />
      <Image
        src="/img/bootcamp/180dc_semicircle.webp"
        alt="180dc semi circle"
        width={500}
        height={150}
        className="absolute right-0 bottom-0 z-10 w-[50%] max-w-[500px] translate-x-[10%] translate-y-[30%] rotate-20 object-contain sm:w-[40%] md:w-[35%] lg:w-[30%]"
      />
      <Container className="flex flex-col">
        <div className="relative z-30 flex w-full flex-col items-center gap-4 md:gap-6">
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="flex flex-col items-center justify-center text-center"
          >
            <p className="font-avenir-black text-[26px] leading-tight text-white md:text-[32px] lg:text-[52px]">
              Join Us!
            </p>
            <p className="font-avenir-book mt-2 text-[16px] text-white md:text-[20px] lg:text-[24px]">
              Connect with Indonesia&apos;s premier student consultancy.
            </p>
          </div>
          <div className="mx-auto mt-2 grid w-full max-w-[800px] grid-cols-1 gap-5 md:mt-4 md:grid-cols-2 md:gap-8 lg:mt-8 lg:max-w-[1100px] lg:gap-10">
            {clients.map((client, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="600"
                className="group relative aspect-[4/3] min-h-[200px] overflow-hidden rounded-[20px] shadow-[0_24px_15px_rgba(0,0,0,0.31)]"
              >
                <Image
                  src={client.imageBG}
                  alt={client.buttonTitle ?? client.title ?? ""}
                  width={800}
                  height={600}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-white/90 shadow-md md:h-[52px] md:w-[52px]">
                  <Image
                    src={client.icon}
                    alt="icon"
                    width={32}
                    height={32}
                    className="h-[24px] w-[24px] object-contain md:h-[30px] md:w-[30px]"
                  />
                </div>
                <div className="absolute bottom-4 left-1/2 flex w-[85%] -translate-x-1/2 justify-center">
                  <Button180
                    size="sm"
                    color="green"
                    text={client.buttonTitle ?? client.title ?? ""}
                    addClass="w-full justify-center whitespace-nowrap"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
