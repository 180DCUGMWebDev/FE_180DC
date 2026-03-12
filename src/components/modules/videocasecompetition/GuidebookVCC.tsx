import Image from "next/image";
import Button180 from "@/components/elements/Button180";

export function GuidebookVCC() {
  return (
    <section id="guidebook" className="relative z-20 w-full py-12 lg:py-24">
      {/* Polyangle decorations */}
      <div className="pointer-events-none absolute bottom-[10%] left-0 z-10 h-[160px] w-[160px] opacity-60 lg:h-[220px] lg:w-[220px]">
        <Image
          src="/img/videocasecomp/polyangle.webp"
          alt=""
          width={250}
          height={250}
          className="h-full w-full object-contain blur-md"
        />
      </div>
      <div className="pointer-events-none absolute top-[5%] right-0 z-10 h-[120px] w-[120px] opacity-50 lg:h-[170px] lg:w-[170px]">
        <Image
          src="/img/videocasecomp/polyangle.webp"
          alt=""
          width={200}
          height={200}
          className="h-full w-full object-contain blur-sm"
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-once="true"
        className="relative mb-16 w-full items-center justify-center border-y border-black/50 py-5 sm:py-6"
      >
        <div className="absolute inset-0 w-full bg-gradient-to-r from-[#58B9D1]/10 via-[#73B743] to-[#58B9D1]/10" />
        <h2
          className="font-avenir-black relative z-10 text-center text-xl italic sm:text-3xl md:text-4xl lg:text-5xl"
          style={{
            background: "linear-gradient(90deg, #8ADF60, #58B9D1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "1.5px black",
            filter: "drop-shadow(3px 4px 5px rgba(0,0,0,0.8))",
          }}
        >
          Guidebook
        </h2>
      </div>

      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center px-4 lg:px-6">
        {/* Guidebook embed container */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="150"
          data-aos-once="true"
          className="relative mx-auto w-full max-w-[1000px] rounded-[1.5rem] bg-gradient-to-tr from-[#319ab5] via-[#5db8c9] to-[#8ADF60] p-[3px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] sm:rounded-[2.5rem] sm:p-[6px]"
        >
          <iframe
            src="/file/Guidebook180DCVCC.pdf"
            className="h-[400px] w-full rounded-[1.3rem] sm:rounded-[2.2rem] md:h-[650px] lg:h-[800px]"
            title="VCC Guidebook"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="250"
          data-aos-once="true"
          className="mt-8 sm:mt-12"
        >
          <Button180
            text="Download Guidebook"
            href="https://180dcugm.com/GuidebookVCC"
            color="green"
            size="md"
          />
        </div>
      </div>
    </section>
  );
}
