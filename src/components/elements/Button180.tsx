"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Button180Variants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap  font-lato-regular transition-all duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      color: {
        green:
          "bg-green-300 text-white hover:bg-green-400 shadow-md hover:shadow-lg border-green-400",
        black:
          "bg-black-300 text-white hover:bg-black-200 shadow-md hover:shadow-lg border-black-200",
        cyan: "bg-cyan-300 text-white hover:bg-cyan-400 shadow-md hover:shadow-lg border-cyan-400",
        lime: "bg-lime-300 text-white hover:bg-lime-400 shadow-md hover:shadow-lg border-lime-400",
        gray: "bg-gray-300 text-black-300 hover:bg-gray-200 shadow-md hover:shadow-lg border-gray-200",
        blue: "bg-blue-300 text-white hover:bg-blue-400 shadow-md hover:shadow-lg border-blue-400",
        white:
          "bg-white text-green-300 hover:bg-white/90 shadow-md hover:shadow-lg border-gray-200",
        red: "bg-red-500 text-white hover:bg-red-500/80 shadow-md hover:shadow-lg border-red-600",
        transparent:
          "bg-transparent text-current hover:bg-gray-100/10 shadow-md hover:shadow-lg border-gray-300",
      },
      size: {
        sm: "px-6 py-2 text-sm border-b-[2px] border-r-[1px] rounded-[10px]",
        md: "px-8 py-3 text-base border-b-[3px] border-r-[2px] rounded-[14px]",
        lg: "px-9 py-3 text-lg border-b-[4px] border-r-[3px] rounded-[18px]",
        icon: "h-14 w-14 border-b-[1px] border-r-[1px] rounded-[10px]",
      },
    },
    defaultVariants: {
      color: "green",
      size: "sm",
    },
  }
);

export interface Button180Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "green" | "lime" | "gray" | "cyan" | "blue" | "black" | "white" | "red" | "transparent";
  size?: "sm" | "md" | "lg" | "icon";
  text?: React.ReactNode;
  icon?: React.ReactNode;
  action?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | null;
  addClass?: string;
  disableForm?: boolean;
  href?: string;
}

export default function Button180({
  color = "green",
  size = "sm",
  text,
  icon,
  action = null,
  addClass = "",
  disableForm = false,
  href,
  className,
  ...props
}: Button180Props) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disableForm) return;

    if (href && href !== "#") {
      // Check if it's an internal route (starts with /)
      if (href.startsWith("/")) {
        router.push(href);
      } else {
        // External link - add https:// if not present
        const url =
          href.startsWith("http://") || href.startsWith("https://") ? href : `https://${href}`;
        window.open(url, "_blank", "noopener,noreferrer");
      }
    } else if (action) {
      action(e);
    } else {
      console.log("Clicked a non-functional button!");
    }
  };

  return (
    <button
      className={cn(
        Button180Variants({ color: color as any, size: size as any }),
        addClass,
        "font-avenir-regular cursor-pointer",
        icon && "group relative overflow-hidden",
        className
      )}
      disabled={disableForm}
      onClick={handleClick}
      {...props}
    >
      {icon ? (
        <span className="relative inline-flex items-center overflow-hidden">
          {/* Sliding icon from left */}
          <span className="absolute -left-6 opacity-0 transition-all duration-300 ease-out group-hover:left-0 group-hover:opacity-100">
            {icon}
          </span>

          {/* Text that shifts right */}
          <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-6">
            {text}
          </span>

          {/* Original icon that fades and slides */}
          <span className="ml-2 inline-block transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:opacity-0">
            {icon}
          </span>
        </span>
      ) : (
        text
      )}
    </button>
  );
}

export { Button180Variants };
