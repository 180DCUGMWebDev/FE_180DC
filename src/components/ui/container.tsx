import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <section
      className={cn(
        `mx-auto flex w-full max-w-[85rem] flex-col items-center gap-4 px-6 py-10 sm:px-8`,
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
