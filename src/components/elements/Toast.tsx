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
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-brand-primary group-[.toast]:text-brand-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
