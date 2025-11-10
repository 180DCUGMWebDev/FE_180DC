import * as React from "react";
import { Slot, SlotProps } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ButtonProps } from "@/utils/element";

const buttonVariants = cva(
  "font-avenir-regular inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green-300/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-green-300 text-white hover:scale-105 hover:bg-green-400 shadow-sm hover:shadow-md disabled:text-black-300",
        destructive:
          "bg-red-500 text-white hover:scale-105 hover:bg-red-600 shadow-sm hover:shadow-md",
        outline:
          "border border-gray-300 bg-transparent text-black-300 hover:bg-gray-300 hover:text-black-300",
        secondary: "bg-gray-300 text-black-300 hover:bg-gray-400 shadow-sm hover:shadow-md",
        ghost: "hover:bg-gray-300 hover:text-black-300",
        link: "text-green-300 underline-offset-4 hover:underline",
        cyan: "bg-cyan-300 text-white hover:scale-105 hover:bg-cyan-400 shadow-sm hover:shadow-md",
        lime: "bg-lime-300 text-white hover:scale-105 hover:bg-lime-400 shadow-sm hover:shadow-md",
        blue: "bg-blue-300 text-white hover:scale-105 hover:bg-blue-400 shadow-sm hover:shadow-md",
        black:
          "bg-black-300 text-white hover:scale-105 hover:bg-black-400 shadow-sm hover:shadow-md",
        white:
          "bg-white text-green-300 hover:bg-gray-200 shadow-sm hover:shadow-md border border-gray-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
