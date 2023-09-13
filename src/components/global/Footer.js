"use client";

import Image from "next/image";

export default function Footer() {
  const options = ["Home", "About Us", "Our Clients", "Telescope"];
  const directs = [
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.gmail.com",
    "https://www.facebook.com",
  ];

  const classHead = "font-mulishBold text-[24px]";

  return (
    <div className="flex flex-col w-full bg-black rounded-tl-[20px] rounded-tr-[20px] p-[20px] pb-0 gap-[32px]">
      <div className="flex w-full gap-[60px] text-lightWhite">
        <div className="w-2/12">
          <Image
            src="/img/footerlogo180dc.png"
            alt="logo footer 180dc"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            draggable="false"
          />
        </div>
        <div className="flex flex-col w-3/12 gap-[8px]">
          <h1 className={classHead}>
            Office
          </h1>
          <p className="text-[12px]">
          180 Degrees Consulting UGM Universitas Gadjah Mada Bulaksumur, Caturtunggal, Depok, Sleman, Yogyakarta 55281
          </p>
          <p className="text-[12px]">
          ugm@180dc.org
          </p>
        </div>
        <div className="flex flex-col w-2/12 gap-[8px]">
          <h1 className={classHead}>
            Navigation
          </h1>
          <ul className="flex flex-col w-full gap-[2.5px] text-[12px]">
            {options.map((val, idx) => {
              return (
                <li className="flex text-lightWhite font-mulishRegular hover:font-mulishBold w-full" key={val}>
                  <a href={directs[idx]} target="_blank">
                    {val}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-[41.67%]">Stay Connected</div>
      </div>
      <div className="flex justify-center w-full">
        <h3 className="text-primary font-mulishLight text-[12px]">
          ©2023 by 180 Degrees Consulting UGM
        </h3>
      </div>
    </div>
  );
}
