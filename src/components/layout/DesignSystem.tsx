"use client";

import { useState } from "react";

import Button180 from "@/components/elements/Button";

export default function DesignSystem() {
  const [seeDesign, setSeeDesign] = useState(true);

  const changeDesign = () => {
    setSeeDesign(!seeDesign);
  };

  return (
    <section className="bg-brand-white-180 my-[40px] flex h-[100vmax] w-full flex-col gap-[52px] p-[100px]">
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
              <h1 className="font-mulish-extrabold text-[24px]">{"Fonts:"}</h1>
              <h1 className="font-mulish-light">{"This is font-mulish-light"}</h1>
              <h1 className="font-mulish-regular">{"This is font-mulish-regular"}</h1>
              <h1 className="font-mulish-semibold">{"This is font-mulishSemibold:"}</h1>
              <h1 className="font-mulish-bold">{"This is font-mulish-bold"}</h1>
              <h1 className="font-mulish-extrabold">{"This is font-mulish-extrabold"}</h1>
              <h1 className="font-avenir-black">{"This is font-avenir-black"}</h1>
              <h1 className="font-avenir-book">{"This is font-avenir-book"}</h1>
              <h1 className="font-avenir-heavy">{"This is font-avenir-heavy"}</h1>
              <h1 className="font-avenir-light">{"This is font-avenir-light"}</h1>
              <h1 className="font-avenir-regular">{"This is font-avenir-regular"}</h1>
              <h1 className="font-lato-bold">{"This is font-lato-bold"}</h1>
              <h1 className="font-lato-bold-italic">{"This is font-lato-bold-italic"}</h1>
              <h1 className="font-lato-regular">{"This is font-lato-regular"}</h1>
              <h1 className="font-lato-semibold">{"This is font-lato-semibold"}</h1>
              <h1 className="font-lato-semibold-italic">{"This is font-lato-semibold-italic"}</h1>
            </div>
            <div className="w-6/12">
              <h1 className="font-mulish-extrabold text-[24px]">{"Colors:"}</h1>
              <h1 className="bg-light-white text-brand-primary">{"This is text-brand-primary"}</h1>
              <h1 className="bg-light-white text-brand-secondary">
                {"This is text-brand-secondary"}
              </h1>
              <h1 className="bg-brand-black180 text-light-blue">{"This is text-light-blue"}</h1>
              <h1 className="bg-brand-black180 text-brand-grey">{"This is text-brand-grey"}</h1>
              <h1 className="bg-brand-black180 text-brand-light-white">
                {"This is text-brand-light-white"}
              </h1>
              <h1 className="bg-light-white text-brand-black180">
                {"This is text-brand-black180"}
              </h1>
              <h1 className="bg-light-white text-brand-grey-black180">
                {"This is text-brand-grey-black180"}
              </h1>
              <h1 className="bg-brand-black180 text-brand-grey-brand-white-180">
                {"This is text-brand-grey-brand-white-180"}
              </h1>
              <h1 className="bg-light-white text-blue180">{"This is text-blue180"}</h1>
              <h1 className="bg-light-white text-green180">{"This is text-green180"}</h1>
              <h1 className="bg-light-white text-yellow180">{"This is text-yellow180"}</h1>
              <h1 className="bg-light-white text-red180">{"This is text-red180"}</h1>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-6/12">
              <h1 className="font-mulish-extrabold text-[24px]">
                {"Headings: (Based on Mood Board #Unused)"}
              </h1>
              <h1 className="font-mulish-light text-brand-black180 text-[20px]">
                {"TYPOGRAPHY - Mulish Light 20px"}
              </h1>
              <h1 className="font-mulish-extrabold text-brand-black180 text-[48px]">
                {"Heading 1 - Mulish ExtraBold 48px"}
              </h1>
              <h1 className="font-mulish-regular text-brand-black180 text-[32px]">
                {"Heading 2 - Mulish Regular 32px"}
              </h1>
              <h1 className="font-mulish-regular text-brand-black180 text-[24px]">
                {"Heading 3 - Mulish Regular 24px"}
              </h1>
              <h1 className="font-mulish-extrabold text-brand-black180 text-[16px]">
                {"Heading 4 - Mulish Extrabold 16px"}
              </h1>
            </div>
            <div className="flex w-6/12 flex-col">
              <h1 className="font-mulish-extrabold text-[24px]">{"Contents:"}</h1>
              <div>
                <h1 className="text-gray-black180 font-mulish-light text-[14px]">{"Paragraph:"}</h1>
                <p className="text-gray-black180 font-mulish-semibold text-[18px]">
                  {
                    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. Mullish SemiBold 18px"
                  }
                </p>
              </div>
              <div>
                <h1 className="text-gray-black180 font-mulish-light text-[14px]">{"Caption:"}</h1>
                <p className="text-gray-black180 font-mulish-semibold text-[14px]">
                  {
                    "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. Mullish SemiBold 14px"
                  }
                </p>
              </div>
              <div>
                <h1 className="text-gray-black180 font-mulish-light text-[14px]">{"Link:"}</h1>
                <a
                  className="font-mulish-bold text-blue180 text-[16px] underline"
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
