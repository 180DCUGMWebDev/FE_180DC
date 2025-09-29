"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button180Props } from "@/utils/navbar";

export default function Button180({
  color,
  text,
  action = null,
  addClass = "",
  disableForm = false,
  href,
  className,
  ...props
}: Button180Props) {
  const router = useRouter();

  const btnColor =
    color === "green"
      ? "bg-primary hover:bg-primary/80"
      : color === "black"
        ? "bg-black hover:bg-black/80"
        : color === "white"
          ? "bg-white hover:bg-white/80"
          : color === "red"
            ? "bg-red-500 hover:bg-red-500/80"
            : "";

  const textColor = color === "white" ? "text-primary" : "text-white";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disableForm) return;

    if (href && href !== "#") {
      window.open(`https://${href}`, "_blank", "noopener,noreferrer");
    } else if (action) {
      action(e);
    } else {
      console.log("Clicked a non-functional button!");
    }
  };

  return (
    <button
      className={cn(
        `${btnColor} ${addClass} px-auto rounded-[40px] font-lato-regular transition-all duration-300 ${textColor}`,
        className,
      )}
      disabled={disableForm}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );
}
