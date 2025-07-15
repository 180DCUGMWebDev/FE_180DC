"use client";

import { useState } from "react";

import Button180 from "@/components/element/Button";

export default function DesignSystem() {
  const [seeDesign, setSeeDesign] = useState(true);

  const changeDesign = () => {
    setSeeDesign(!seeDesign);
  };

  return (
    <section className="my-[40px] flex h-[100vmax] w-full flex-col gap-[52px] bg-white180 p-[100px]">
      <div className="flex w-full">
        <Button180
          color={"black"}
          text={"See Design System"}
          action={() => {
            changeDesign();
          }}
          addClass={"text-[16px] px-[20px] py-[9px]"}
        />
      </div>

      <div className="overflow-clip">
        <div
          className={
            (seeDesign ? "flex flex-col" : "translate-y-[-200%]") +
            " w-full gap-[20px] transition-transform duration-300"
          }
        >
          <div className="flex w-full">
            <div className="w-6/12">
              <h1 className="font-mulishExtrabold text-[24px]">{"Fonts:"}</h1>
              <h1 className="font-mulishLight">{"This is font-mulishLight"}</h1>
              <h1 className="font-mulishRegular">{"This is font-mulishRegular"}</h1>
              <h1 className="font-mulishSemibold">{"This is font-mulishSemibold:"}</h1>
              <h1 className="font-mulishBold">{"This is font-mulishBold"}</h1>
              <h1 className="font-mulishExtrabold">{"This is font-mulishExtrabold"}</h1>
              <h1 className="font-avenirBlack">{"This is font-avenirBlack"}</h1>
              <h1 className="font-avenirBook">{"This is font-avenirBook"}</h1>
              <h1 className="font-avenirHeavy">{"This is font-avenirHeavy"}</h1>
              <h1 className="font-avenirLight">{"This is font-avenirLight"}</h1>
              <h1 className="font-avenirRegular">{"This is font-avenirRegular"}</h1>
              <h1 className="font-latoBold">{"This is font-latoBold"}</h1>
              <h1 className="font-latoBoldItalic">{"This is font-latoBoldItalic"}</h1>
              <h1 className="font-latoRegular">{"This is font-latoRegular"}</h1>
              <h1 className="font-latoSemibold">{"This is font-latoSemibold"}</h1>
              <h1 className="font-latoSemiboldItalic">{"This is font-latoSemiboldItalic"}</h1>
            </div>
            <div className="w-6/12">
              <h1 className="font-mulishExtrabold text-[24px]">{"Colors:"}</h1>
              <h1 className="bg-lightWhite text-primary">{"This is text-primary"}</h1>
              <h1 className="bg-lightWhite text-secondary">{"This is text-secondary"}</h1>
              <h1 className="bg-black180 text-lightBlue">{"This is text-lightBlue"}</h1>
              <h1 className="bg-black180 text-grey">{"This is text-grey"}</h1>
              <h1 className="bg-black180 text-lightWhite">{"This is text-lightWhite"}</h1>
              <h1 className="bg-lightWhite text-black180">{"This is text-black180"}</h1>
              <h1 className="bg-lightWhite text-grey-black180">{"This is text-grey-black180"}</h1>
              <h1 className="bg-black180 text-grey-white180">{"This is text-grey-white180"}</h1>
              <h1 className="bg-lightWhite text-blue180">{"This is text-blue180"}</h1>
              <h1 className="bg-lightWhite text-green180">{"This is text-green180"}</h1>
              <h1 className="bg-lightWhite text-yellow180">{"This is text-yellow180"}</h1>
              <h1 className="bg-lightWhite text-red180">{"This is text-red180"}</h1>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-6/12">
              <h1 className="font-mulishExtrabold text-[24px]">
                {"Headings: (Based on Mood Board #Unused)"}
              </h1>
              <h1 className="font-mulishLight text-[20px] text-black180">
                {"TYPOGRAPHY - Mulish Light 20px"}
              </h1>
              <h1 className="font-mulishExtrabold text-[48px] text-black180">
                {"Heading 1 - Mulish ExtraBold 48px"}
              </h1>
              <h1 className="font-mulishRegular text-[32px] text-black180">
                {"Heading 2 - Mulish Regular 32px"}
              </h1>
              <h1 className="font-mulishRegular text-[24px] text-black180">
                {"Heading 3 - Mulish Regular 24px"}
              </h1>
              <h1 className="font-mulishExtrabold text-[16px] text-black180">
                {"Heading 4 - Mulish Extrabold 16px"}
              </h1>
            </div>
            <div className="flex w-6/12 flex-col">
              <h1 className="font-mulishExtrabold text-[24px]">{"Contents:"}</h1>
              <div>
                <h1 className="text-gray-black180 font-mulishLight text-[14px]">{"Paragraph:"}</h1>
                <p className="text-gray-black180 font-mulishSemibold text-[18px]">
                  {
                    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. Mullish SemiBold 18px"
                  }
                </p>
              </div>
              <div>
                <h1 className="text-gray-black180 font-mulishLight text-[14px]">{"Caption:"}</h1>
                <p className="text-gray-black180 font-mulishSemibold text-[14px]">
                  {
                    "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. Mullish SemiBold 14px"
                  }
                </p>
              </div>
              <div>
                <h1 className="text-gray-black180 font-mulishLight text-[14px]">{"Link:"}</h1>
                <a
                  className="font-mulishBold text-[16px] text-blue180 underline"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {"Link Mullish Bold 16px"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
