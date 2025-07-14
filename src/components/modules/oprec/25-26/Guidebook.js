"use client";

import Link from "next/link";
import Button from "@/components/element/Button";
import { useState } from "react";

export default function Guidebook() {
  const [showGuidebook, setShowGuidebook] = useState(false);
  const toggleGuidebook = () => {
    setShowGuidebook(!showGuidebook);
  };
  return (
    <section className="relative w-full bg-gray-900 px-[5%] pb-10 pt-20 sm:px-[10%] lg:px-[4%]">
      <div className="relative">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-avenirBlack text-3xl text-white sm:text-4xl lg:text-5xl">
            Recruitment <span className="text-primary">Guidebook</span>
          </h2>
          <p className="mx-auto max-w-2xl font-latoRegular text-lg text-white/70">
            Download and read our comprehensive guidebook to understand the recruitment process and
            requirements.
          </p>
        </div>

        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:p-8">
          <iframe
            src="/file/ReapraReport.pdf#toolbar=0&navpanes=0&scrollbar=1"
            width="100%"
            height="600"
            title="180DC Recruitment Guidebook"
            className="h-[70vh] w-full rounded-lg bg-white [pointer-events:none] group-hover:[pointer-events:auto]"
            style={{ border: "none" }}
            loading="lazy"
            tabIndex="-1"
          />

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/file/ReapraReport.pdf"
              download="180DC_Recruitment_Guidebook.pdf"
              className="inline-block"
            >
              <Button
                color="green"
                text="Download Guidebook"
                addClass="w-full sm:w-auto px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
              />
            </Link>
            <Link
              href="/file/ReapraReport.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
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
