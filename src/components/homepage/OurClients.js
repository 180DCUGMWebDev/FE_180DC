import Image from "next/image";
import Button from "../global/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

export function OurClients() {
  return (
    <section className="flex flex-col justify-between">
      {/* Our Previous Clients */}
      <div className="h-fit max-lg:py-7 lg:h-[30vh] w-[96%] relative">
        <Image
          src="/img/homepage/clients.png"
          alt="Clients"
          width={1000}
          height={1000}
          className="absolute z-10 inset-0 w-full h-full object-cover rounded-r-[18px]"
        />
        <div className="relative z-20 px-[4%] lg:pr-[2%] flex items-center justify-between h-full">
          <div className="text-2xl sm:text-4xl lg:text-[80px] 2xl:text-[112px] lg:leading-none text-white font-avenirBlack">
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
      <div className="max-lg:pt-[10vw] py-[9vh] px-[4%] flex flex-col gap-[10px] lg:gap-[30px]">
        <div className="text-2xl sm:text-4xl lg:text-[80px] 2xl:text-[112px] lg:leading-none font-avenirBlack">
          Newsletter & Press Releases
        </div>
        <div className="lg:h-[38vh] flex max-lg:flex-col gap-[20px] lg:gap-[56px] items-center">
          <div className="max-lg:max-h-[38vh] w-full flex items-center h-full flex-1 rounded-lg overflow-hidden">
            <Image
              src="/img/homepage/telescope.png"
              alt="Telescope"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-lg:max-h-[38vh] w-full flex items-center h-full flex-1 rounded-lg overflow-hidden">
            <Image
              src="/img/homepage/newsletter.png"
              alt="Newsletter"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
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
