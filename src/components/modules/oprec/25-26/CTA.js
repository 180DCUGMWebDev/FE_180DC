import Link from "next/link";
import Button180 from "@/components/element/Button";
import Image from "next/image";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative bg-gradient-to-b from-gray-900 to-black px-[5%] py-10 sm:px-[10%] lg:px-[4%]"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-12">
          <h2 className="mb-6 font-avenirBlack text-3xl text-white sm:text-4xl lg:text-5xl">
            Ready to <span className="text-primary">Apply</span>?
          </h2>
          <p className="mx-auto max-w-2xl font-latoRegular text-lg text-white/70 lg:text-xl">
            After reading the guidebook, submit your application and start your journey as a 180DC
            UGM consultant.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="/img/oprec/check.png"
            alt="Checkmark"
            width={100}
            height={100}
            className="absolute right-[-14%] top-[-60%] rotate-[-20deg] sm:top-[-30%]"
          />
          <Link href="/oprec/25-26/register" className="w-full">
            <Button180
              color="green"
              text="Apply Now"
              addClass="mt-6 w-full px-8 py-4 text-lg font-bold transition-all duration-200 hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
