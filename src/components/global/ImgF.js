"use client"

import Image from "next/image";

export default function ImgF({ src, alt, action = "", className = "" }) {
  return (
    <Image
      src={src}
      alt={alt}
      onClick={
        action !== ""
          ? () => action()
          : () => console.log("")
      }
      className={className + (action !== "" ? " hover:cursor-pointer" : "")}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "100%" }}
      draggable="false"
    />
  );
}
