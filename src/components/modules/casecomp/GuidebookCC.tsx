import Image from "next/image";
import Button180 from "@/components/elements/Button180";
import { ArrowRight } from "lucide-react";

export function GuidebookCC() {
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
        {/* Guidebook placeholder container */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="150"
          data-aos-once="true"
          className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.8)] lg:grid-cols-12"
        >
          {/* Left Side: PDF Viewer (Iframe) */}
          <div className="relative h-[450px] w-full bg-[#1e1e1e] sm:h-[600px] lg:col-span-7 lg:h-[750px]">
            <div className="absolute inset-0 z-0 bg-[url('/img/videocasecomp/bg-vcc.webp')] bg-cover bg-center opacity-20" />
            
            {/* Loading state indicator for iframe */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white/40">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#8ADF60]" />
                <span className="font-lato-bold text-sm">Loading Guidebook Viewer...</span>
            </div>

            <iframe
              src="/file/Guidebook180DCCC.pdf#toolbar=0"
              className="relative z-10 h-full w-full"
              title="180DC Case Competition 2026 Guidebook"
              loading="lazy"
            />
            
            {/* Gradient overlays to blend the edges */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right Side: Content & Action */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-5 lg:p-16">
            <div className="mb-6 flex items-center gap-2">
                <div className="h-1 w-8 rounded-full bg-[#8ADF60]" />
                <span className="font-lato-bold text-xs tracking-[0.2em] text-[#58B9D1] uppercase">Official Guide</span>
            </div>
            
            <h3 className="font-avenir-black text-3xl leading-tight text-[#2B2B2B] sm:text-4xl">Everything You Need to Know</h3>
            <p className="font-lato-regular mt-4 text-gray-600 sm:text-lg">
              Get comprehensive details about the 180DC Case Competition 2026. This official guidebook covers everything from rules to technical requirements.
            </p>
            
            <ul className="mt-10 space-y-5">
                {[
                    "Competition Rules & Eligibility",
                    "Case Theme & Focus Areas",
                    "Submission & Format Guidelines",
                    "Judging Criteria & Scoring",
                    "Award & Prize Details"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 font-lato-bold text-gray-700">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8ADF60]/20">
                            <ArrowRight className="h-3 w-3 text-[#73B743]" />
                        </div>
                        <span className="leading-tight">{item}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button180
                text="Download PDF"
                href="/file/Guidebook180DCCC.pdf"
                color="green"
                size="md"
                className="font-avenir-heavy w-full rounded-full px-10 py-4 shadow-lg active:scale-95 sm:w-auto"
              />
              <a 
                href="/file/Guidebook180DCCC.pdf" 
                target="_blank" 
                className="flex items-center justify-center rounded-full border border-gray-200 px-10 py-4 font-avenir-heavy text-[#2B2B2B] transition-colors hover:bg-gray-50 active:scale-95"
              >
                Open in Full Screen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
