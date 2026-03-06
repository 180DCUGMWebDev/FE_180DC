"use client";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { Theme } from "../../utils/element";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme() as { theme: Theme };

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white dark:group-[.toaster]:bg-black-300 group-[.toaster]:text-foreground group-[.toaster]:border-green-300/30 dark:group-[.toaster]:border-green-300/20 group-[.toaster]:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:group-[.toaster]:shadow-[0_8px_30px_rgba(119,186,71,0.05)] group-[.toaster]:rounded-xl transition-all duration-300 hover:border-green-300/50",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-green-300 group-[.toast]:text-white font-mulish-bold rounded-lg px-4 py-2 transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_12px_rgba(119,186,71,0.4)]",
          cancelButton:
            "group-[.toast]:bg-gray-300 dark:group-[.toast]:bg-black-200 group-[.toast]:text-black-400 dark:group-[.toast]:text-white rounded-lg px-4 py-2 transition-all duration-300 hover:bg-gray-400 dark:hover:bg-black-100",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
