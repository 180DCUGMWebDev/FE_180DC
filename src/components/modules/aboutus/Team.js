"use client";

// Import Components
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

// Import Configs
import { createBackground } from "@/config/Functions";
import BoD from "./BoD";
import "./aboutus.css";
import { IoTriangle } from "react-icons/io5";
import BoDCard from "./BoDCard";

export default function Team() {
  // Content
  const terms = ["2024/2025", "2023/2024"];
  const [term, setTerm] = useState(terms[0]);
  const [open, setOpen] = useState(false);
  const [hydrate, setHydrate] = useState(false);
  const isBig = useMediaQuery({ query: "(min-width: 768px)" });

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
                <div className="relative z-[1] mt-[4%] flex aspect-[383/90] w-[40%] flex-row items-center justify-center rounded-[5%/20%] border-[2px] border-[#58B9D1] px-[2%] py-[0.5%] text-center font-avenirBook text-[2.6vw] font-[700] text-secondary outline-0 md:aspect-[383/74] md:w-[36%] md:border-[3px] lg:mt-[2%] lg:w-[16%] lg:text-[1.4vw] 2xl:text-[20px]">
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
                        key={JSON.stringify(item)}
                        value={item}
                        type="button"
                        disabled={!open}
                        onClick={() => handleChangeTerm(item)}
                        className="flex aspect-[383/90] w-full flex-row items-center justify-center bg-[white] px-[2%] py-[0.5%] text-center font-avenirBook text-[2.6vw] font-[700] text-secondary outline-0 transition-all duration-500 hover:bg-[#58B9D1] hover:text-white md:aspect-[383/74] lg:text-[1.4vw] 2xl:text-[20px]"
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
          <div className="relative flex h-fit min-h-[75vh] w-full flex-col items-center pb-[60px] lg:px-[130px] 2xl:mx-[50px]">
            {/* White Background */}
            <div className="absolute -z-[998] h-full w-full bg-white" />
            <h2 className="mt-[6px] font-latoBoldItalic text-[4vw] text-primary lg:text-[1.8vw]/[2vw] 2xl:text-[27.6px]/[30.7px]">
              {"Board of Directors"}
            </h2>
            {/* Cards Row */}
            <div className="relative mt-[3.6%] flex w-[90%] flex-col gap-[2%] md:w-[90%]">
              {hydrate &&
                BoD[term].map((row) => {
                  let rowMobile = [[...row]];
                  if (!isBig && rowMobile[0].length > 3) {
                    rowMobile = [row.slice(0, 2), row.slice(2)];
                  }
                  return rowMobile.map((rowItem, rowIndex) => {
                    return (
                      <div
                        // Hasil: "2024/2025-row-0-Clea_Amabelle-Nathaniel_C"
                        key={`${term}-row-${rowIndex}-${rowItem.map((item) => item.name).join("-")}`}
                        className="relative flex w-full flex-row justify-center gap-[7%]"
                      >
                        {rowItem.map((item) => {
                          return <BoDCard key={`${item.name}-${item.role}`} item={item} />;
                        })}
                      </div>
                    );
                  });
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
