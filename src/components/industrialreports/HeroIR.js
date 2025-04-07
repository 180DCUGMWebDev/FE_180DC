import Link from "next/link";
import Image from "next/image";
import Button from "../global/Button";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const products = [
  {
    href: "/industrialreport/cafe-industry",
    image: "/img/industrialreport/CafeIndusThumb.png",
    alt: "Thumbnail of the Cafe Industry Report",
  },
  {
    href: "/industrialreport/tenun-lurik",
    image: "/img/industrialreport/tenunlurikthumb.png",
    alt: "Thumbnail of the Cafe Industry Report",
  },
];

export default function HeroIR() {
  return (
    <section className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-gray-900 to-gray-800 opacity-50">
        <Image
          src="/img/industrialreport/bg-indusrep.png"
          alt="Telescope"
          width={1000}
          height={1000}
          className="h-[70vw] w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative flex h-screen w-full flex-col items-center justify-center mb-[12vw] z-50">
        <div className="flex flex-col gap-[10px] px-[4%] py-[9vh] max-lg:pt-[10vw] lg:gap-[30px] justify-center items-center">
          <div className="font-avenirBlack text-2xl sm:text-4xl lg:text-[80px] lg:leading-none 2xl:text-[112px] mt-[8vw] text-lightWhite">
            Industrial Report
          </div>

          <div
            data-gsap="up-stagger"
            className="flex items-center gap-[20px] max-lg:flex-col lg:h-auto lg:gap-[56px]"
          >
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="group relative aspect-[11/16] w-full max-w-[300px] flex-1 overflow-hidden rounded-lg"
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
