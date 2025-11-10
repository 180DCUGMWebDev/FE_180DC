import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { AlertDescriptionProps, AlertProps, AlertTitleProps } from "@/utils/element";

const alertVariants = cva(
  "font-lato-regular relative w-full rounded-md border p-3 text-sm [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4",
  {
    variants: {
      variant: {
        default: "bg-white text-black-300 border-gray-300",
        destructive: "border-red-300 bg-red-50 text-red-800 [&>svg]:text-red-600",
        warning: "border-yellow-300 bg-yellow-50 text-yellow-800 [&>svg]:text-yellow-600",
        info: "border-blue-200 bg-blue-100 text-blue-400 [&>svg]:text-blue-300",
        success: "border-green-200 bg-green-100 text-green-400 [&>svg]:text-green-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
  )
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLDivElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 leading-none font-medium tracking-tight", className)}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLDivElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  )
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
