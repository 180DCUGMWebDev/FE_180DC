import Image from "next/image";
import Button from "../global/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

export function OurClients() {
  return (
    <section className="flex flex-col justify-between">
      {/* Our Previous Clients */}
      <div className="relative h-fit w-[96%] max-lg:py-7 lg:h-[30vh] mt-[3vw]">
        <Image
          src="/img/homepage/clients.png"
          alt="Clients"
          width={1000}
          height={1000}
          className="absolute inset-0 z-10 h-full w-full rounded-r-[18px] object-cover"
        />
        <div className="relative z-20 flex h-full items-center justify-between px-[4%] lg:pr-[2%]">
          <div className="font-avenirBlack text-2xl text-white sm:text-4xl lg:text-[80px] lg:leading-none 2xl:text-[112px]">
            Our Previous Clients
          </div>
          <Link href="/portofolio" className="w-[15%] max-lg:hidden">
            <Button
              color="black"
              text={
                <>
                  <div>Read More</div>
                  <AiOutlineArrowRight />
                </>
              }
              addClass="w-full h-fit py-3 text-xl flex justify-between items-center px-10"
            />
          </Link>
          <Link href="/portofolio" className="w-fit lg:hidden">
            <Button
              color="green"
              text={<HiOutlineArrowUpRight />}
              addClass="h-fit rounded-full p-[3px] sm:p-[4px] text-lg sm:text-xl"
            />
          </Link>
        </div>
      </div>
      {/* Newsletter & Press Releases */}
      <div className="flex flex-col gap-[10px] px-[4%] py-[9vh] max-lg:pt-[10vw] lg:gap-[30px]">
        <div
          data-gsap="right"
          className="font-avenirBlack text-2xl sm:text-4xl lg:text-[80px] lg:leading-none 2xl:text-[112px]"
        >
          Newsletter & Press Releases
        </div>
        <div
          data-gsap="up-stagger"
          className="flex items-center gap-[20px] max-lg:flex-col lg:h-[38vh] lg:gap-[56px]"
        >
          <div className="flex h-full w-full flex-1 items-center overflow-hidden rounded-lg max-lg:max-h-[38vh]">
            <Image
              src="/img/homepage/telescope.png"
              alt="Telescope"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-full w-full flex-1 items-center overflow-hidden rounded-lg max-lg:max-h-[38vh]">
            <Image
              src="/img/homepage/newsletter.png"
              alt="Newsletter"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <Link href="/telescope">
            <Button
              color="black"
              text={<HiOutlineArrowUpRight />}
              addClass="w-fit h-fit rounded-full p-[6px] text-2xl max-lg:hidden"
            />
          </Link>
          <Link href="/telescope">
            <Button
              color="green"
              text="View more"
              addClass="px-[20px] h-fit py-2 text-sm sm:text-base lg:hidden"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
