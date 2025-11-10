"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface AnimationProviderProps {
  children: React.ReactNode;
}

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <>{children}</>;
};
