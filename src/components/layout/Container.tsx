import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  color?: "light" | "dark" | "green";
}

const Container = ({ children, className, color }: ContainerProps) => {
  const bgColor =
    color === "light"
      ? "bg-white"
      : color === "dark"
        ? "bg-black-300"
        : color === "green"
          ? "bg-green-300"
          : "";

  return (
    <section
      className={cn(`relative mx-auto flex w-full flex-col gap-4 px-6 py-10 sm:px-8`, bgColor)}
    >
      <div className={cn("mx-auto w-full max-w-[2160px]", className)}>{children}</div>
    </section>
  );
};

export default Container;
