"use client";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { Theme } from "../../utils/element";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme() as { theme: Theme };

  return (
    <Sonner
      theme={theme}
      position="top-right"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast rounded-xl shadow-lg font-avenir-regular text-sm",
          description: "group-[.toast]:text-white/80 text-xs",
          actionButton: "group-[.toast]:bg-white/20 group-[.toast]:text-white rounded-lg px-4 py-2 transition-all duration-200 hover:bg-white/30",
          cancelButton: "group-[.toast]:bg-white/10 group-[.toast]:text-white/80 rounded-lg px-4 py-2 transition-all duration-200",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
