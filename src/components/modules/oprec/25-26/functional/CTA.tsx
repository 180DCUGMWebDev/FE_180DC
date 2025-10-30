import Link from "next/link";
import Button180 from "@/components/elements/Button";
import Image from "next/image";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative bg-linear-to-b from-gray-900 to-black px-[5%] py-10 sm:px-[10%] lg:px-[4%]"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-12">
          <h2 className="font-avenir-black mb-6 text-3xl text-white sm:text-4xl lg:text-5xl">
            Ready to <span className="text-brand-primary">Apply</span>?
          </h2>
          <p className="font-lato-regular mx-auto max-w-2xl text-lg text-white/70 lg:text-xl">
            After reading the guidebook, submit your application and start your journey as a 180DC
            UGM analyst.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="/img/oprec/check.png"
            alt="Checkmark"
            width={100}
            height={100}
            className="absolute top-[-60%] right-[-14%] rotate-[-20deg] sm:top-[-30%]"
          />
          <Link href="/oprec/25-26/functional/register" className="w-full">
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
