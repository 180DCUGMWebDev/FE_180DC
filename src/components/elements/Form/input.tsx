import * as React from "react";

import { cn } from "@/lib/utils";
import { InputProps } from "@/utils/element";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "font-lato-regular bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-base transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:ring-2 focus:ring-green-300/50 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
