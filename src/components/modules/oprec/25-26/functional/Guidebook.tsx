"use client";

import Link from "next/link";
import Button180 from "@/components/element/Button";
import { useState } from "react";

export default function Guidebook() {
  const [showGuidebook, setShowGuidebook] = useState(false);
  const toggleGuidebook = () => {
    setShowGuidebook(!showGuidebook);
  };
  return (
    <section className="relative w-full bg-gray-900 px-[5%] pb-10 pt-20 sm:px-[10%] lg:px-[4%]">
      <div className="relative flex flex-col md:flex-row md:items-center">
        <div className="mb-12 text-center">
          <div>
            <h2 className="mb-4 font-avenir-black text-3xl text-white sm:text-4xl lg:text-5xl">
              Recruitment <span className="text-primary">Guidebook</span>
            </h2>
            <p className="mx-auto max-w-2xl font-lato-regular text-lg text-white/70">
              Download and read our comprehensive guidebook to understand the recruitment process
              and requirements.
            </p>
          </div>
          <div className="mt-4 hidden flex-col gap-4 sm:flex-row sm:justify-center md:flex">
            <Link
              href="/file/FAOprecGuidebook.pdf"
              download="180DC_Recruitment_Guidebook.pdf"
              className="inline-block"
            >
              <Button180
                color="green"
                text="Download Guidebook"
                addClass="w-full sm:w-auto px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
              />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1l5cZZiw5AKvcu7T3MVmk5JLt_5PPkS0X/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button180
                color="transparent"
                text="Open in New Tab"
                addClass="w-full sm:w-auto border border-white/20 px-8 py-3 text-lg text-white hover:bg-white/10 transition-all duration-200"
              />
            </Link>
          </div>
        </div>

        <div className="group w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs md:w-[80%] lg:p-8">
          <iframe
            src="/file/FAOprecGuidebook.pdf#toolbar=0&navpanes=0&scrollbar=1"
            width="100%"
            height="600"
            title="180DC Recruitment Guidebook"
            className="h-[70vh] w-full rounded-lg bg-white pointer-events-none group-hover:pointer-events-auto"
            style={{ border: "none" }}
            loading="lazy"
            tabIndex= {-1}
          />
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center md:hidden">
            <Link
              href="/file/FAOprecGuidebook.pdf"
              download="180DC_Recruitment_Guidebook.pdf"
              className="inline-block"
            >
              <Button180
                color="green"
                text="Download Guidebook"
                addClass="w-full sm:w-auto px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
              />
            </Link>
            <Link
              href="/file/FAOprecReport.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button180
                color="transparent"
                text="Open in New Tab"
                addClass="w-full sm:w-auto border border-white/20 px-8 py-3 text-lg text-white hover:bg-white/10 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
