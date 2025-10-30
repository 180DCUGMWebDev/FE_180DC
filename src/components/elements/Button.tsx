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
      ? "bg-brand-primary hover:bg-brand-primary/80"
      : color === "black"
        ? "bg-brand-black hover:bg-brand-black/80"
        : color === "white"
          ? "bg-white hover:bg-white/80"
          : color === "red"
            ? "bg-red-500 hover:bg-red-500/80"
            : "";

  const textColor = color === "white" ? "text-brand-primary" : "text-white";

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
        `${btnColor} ${addClass} px-auto font-lato-regular rounded-[40px] transition-all duration-300 ${textColor}`,
        className
      )}
      disabled={disableForm}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );
}
