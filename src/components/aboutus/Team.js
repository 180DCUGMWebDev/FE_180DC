"use client";

// Import Components
import { use, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

// Import Configs
import { createBackground } from "@/config/Functions";
import BoD from "./BoD";
import { IoTriangle } from "react-icons/io5";

export default function Team() {
  // Content
  const terms = ["2024/2025", "2023/2024"];
  const [term, setTerm] = useState(terms[0]);
  const [open, setOpen] = useState(false);
  const [hydrate, setHydrate] = useState(false);

  const handleChangeTerm = async (item) => {
    if (hydrate) {
      setTerm(item);
      setOpen(!open);
    }
  };

  useEffect(() => {
    setHydrate(true);
  }, []);

  return (
    <section id="team" className="relative">
      {/* Background */}
      {createBackground("light")}

      {/* Content */}
      <div className="flex h-fit min-h-screen w-full flex-col items-center justify-center">
        <div className="flex h-fit min-h-full w-full flex-col items-center 2xl:w-[1536px]">
          {/* Title */}
          <div className="flex min-h-[15vh] w-full flex-col justify-end bg-white px-[50px] lg:min-h-[25vh]">
            {hydrate && (
              <div className="mb-[24px] flex w-full flex-col items-center justify-center text-center">
                <h1 className="mt-[8%] font-avenirBlack text-[5vw] text-primary lg:text-[4vw]/[3.9vw] 2xl:text-[61px]/[60px]">
                  Meet Our Team
                </h1>
                <div className="relative z-[1] mt-[4%] flex aspect-[383/74] w-[40%] flex-row items-center justify-center rounded-[5%/20%] border-[2px] border-[#58B9D1] px-[2%] py-[0.5%] text-center font-avenirBook text-[2.6vw] font-[700] text-secondary outline-0 md:w-[36%] md:border-[3px] lg:mt-[2%] lg:w-[16%] lg:text-[1.4vw] 2xl:text-[20px]">
                  <button
                    type="button"
                    value={term}
                    onClick={() => handleChangeTerm(term)}
                    className="z-[10] flex h-full w-full flex-row items-center justify-evenly gap-[5%] text-right"
                  >
                    <p className="flex w-full flex-row items-center justify-evenly gap-[5%] text-right">
                      {term}
                    </p>
                    <IoTriangle
                      className={`w-[8%] duration-500 ${open ? "rotate-0" : "rotate-180"}`}
                    />
                  </button>
                  <div
                    className={`${open ? "flex -translate-y-0 flex-col opacity-100" : "-translate-y-[100%] opacity-0"} absolute left-0 top-[101%] z-[9] h-fit w-full gap-0 rounded-b-lg border-[2px] border-[#58B9D1] py-[1%] transition-all duration-500 md:border-[3px]`}
                  >
                    {terms.map((item) => (
                      <button
                        key={item}
                        value={item}
                        type="button"
                        disabled={!open}
                        onClick={() => handleChangeTerm(item)}
                        className="flex aspect-[383/74] w-full flex-row items-center justify-center bg-[white] px-[2%] py-[0.5%] text-center font-avenirBook text-[2.6vw] font-[700] text-secondary outline-0 transition-all duration-500 hover:bg-[#58B9D1] hover:text-white lg:text-[1.4vw] 2xl:text-[20px]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* BoDs */}
          <div
            data-gsap="up-stagger"
            className="relative flex h-fit min-h-[75vh] w-full flex-col items-center pb-[60px] lg:px-[130px] 2xl:mx-[50px]"
          >
            {/* White Background */}
            <div className="absolute -z-[998] h-full w-full bg-white" />
            <h2 className="mt-[6px] font-latoBoldItalic text-[4vw] text-primary lg:text-[1.8vw]/[2vw] 2xl:text-[27.6px]/[30.7px]">
              {"Board of Directors"}
            </h2>
            {/* Cards Row */}
            <div data-gsap="up" className="relative mt-[3.6%] flex w-[60%] flex-col gap-[2%]">
              {hydrate &&
                BoD[term].map((row) => {
                  return (
                    <>
                      <div
                        key={row}
                        className="relative flex w-full flex-row justify-center gap-[10%]"
                      >
                        {row.map((item) => {
                          const [level, pos] = item.role.split("of");
                          return (
                            <div
                              key={item.role}
                              className="relative flex aspect-[320/507] w-[27%] flex-col"
                            >
                              <div className="relative aspect-square w-full">
                                <div className="absolute left-0 top-0 flex aspect-square w-full">
                                  <Image
                                    alt={item.role}
                                    src={item.src}
                                    className="h-full w-full"
                                    sizes="50vw"
                                    fill
                                  />
                                  <div className="absolute bottom-0 z-[10] h-[16%] w-full bg-gradient-to-t from-white/100 via-white/100 via-60% to-white/5" />
                                </div>
                              </div>
                              <div className="group relative flex w-full flex-col text-center">
                                <Link
                                  href={item.linkedin ?? "#team"}
                                  target={item.linkedin ? "_blank" : "_self"}
                                  className="relative flex flex-row flex-wrap justify-center gap-[3%] font-avenirBlack text-[30%] text-[#73B743] transition-all duration-500 hover:text-[#5DA236] sm:text-[60%] md:text-[85%] lg:text-[80%] xl:text-[110%] 2xl:text-[118%]"
                                >
                                  {item.name}
                                  <GoArrowUpRight className="w-[8.5%]" />
                                  <div className="absolute bottom-[-0.1em] left-0 right-0 mx-auto h-[2px] w-0 bg-[#5DA236] transition-all duration-500 group-hover:w-[80%]" />
                                </Link>
                                <p className="relative w-full text-center text-[35%] text-[#58B9D1] sm:text-[55%] md:text-[80%] lg:text-[75%] xl:text-[110%]">
                                  {level} of
                                  <br />
                                  {pos}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              {!hydrate && (
                <h2 className="text-avenirBlack text-center text-[green]">Loading...</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
