import Image from "next/image";
import Button180 from "@/components/elements/Button180";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import Container from "@/components/layout/Container";

export function OurClients() {
  return (
    <Container>
      {/* Our Previous Clients */}
      <div className="relative mt-[32px] h-fit w-[96%] max-lg:py-5 lg:h-[240px]">
        <Image
          src="/img/homepage/clients.png"
          alt="Clients"
          width={1000}
          height={1000}
          className="absolute inset-0 z-10 h-full w-full rounded-r-[14px] object-cover"
        />
        <div className="relative z-20 flex h-full items-center justify-between px-[4%] lg:pr-[2%]">
          <div className="font-avenir-black text-xl text-white sm:text-3xl lg:text-[58px] lg:leading-none 2xl:text-[72px]">
            Our Previous Clients
          </div>
          <Link href="/portofolio" className="max-lg:hidden">
            <Button180
              color="black"
              text={
                <>
                  <div>Read More</div>
                  <AiOutlineArrowRight />
                </>
              }
            />
          </Link>
          <Link href="/portofolio" className="lg:hidden">
            <Button180 color="green" text={<HiOutlineArrowUpRight />} />
          </Link>
        </div>
      </div>
      {/* Newsletter & Press Releases */}
      <div className="flex flex-col gap-[8px] py-[60px] lg:gap-[20px]">
        <div className="font-avenir-black text-xl sm:text-3xl lg:text-[58px] lg:leading-none 2xl:text-[72px]">
          Newsletter & Press Releases
        </div>
        <div className="flex items-center gap-[16px] max-lg:flex-col lg:h-[300px] lg:gap-[40px]">
          <Link
            className="group relative flex h-full w-full flex-1 items-center overflow-hidden rounded-lg max-lg:max-h-[300px]"
            href="/telescope/oersonalization-why-brand-knows-you-better-than-your-bestie"
          >
            <Image
              src="/img/homepage/Website_Cover.png"
              alt="Telescope"
              width={1000}
              height={1000}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="bg-black-300/30 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </Link>
          <Link
            className="group relative flex h-full w-full flex-1 items-center overflow-hidden rounded-lg max-lg:max-h-[300px]"
            href="/telescope/Fintech-Supporting-The-Economic-of-Indonesia"
          >
            <Image
              src="/img/homepage/Cover_article.png"
              alt="Newsletter"
              width={1000}
              height={1000}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="bg-black-300/30 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </Link>
          <Link href="/telescope" className="max-lg:hidden">
            <Button180 color="black" text={<HiOutlineArrowUpRight />} />
          </Link>

          <Link href="/telescope" className="lg:hidden">
            <Button180 color="green" text="View more" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
