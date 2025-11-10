import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "font-avenir-regular inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-green-300/50 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-green-300 text-white hover:bg-green-400",
        secondary: "border-transparent bg-gray-300 text-black-300 hover:bg-gray-400",
        destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
        outline: "border-green-300 text-green-300 hover:bg-green-100",
        success: "border-transparent bg-green-400 text-white hover:bg-green-500",
        cyan: "border-transparent bg-cyan-300 text-white hover:bg-cyan-400",
        lime: "border-transparent bg-lime-300 text-white hover:bg-lime-400",
        blue: "border-transparent bg-blue-300 text-white hover:bg-blue-400",
        black: "border-transparent bg-black-300 text-white hover:bg-black-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
