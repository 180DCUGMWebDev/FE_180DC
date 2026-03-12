"use client";

import { createContext, useState } from "react";
import { toast } from "sonner";

export const UtilsContext = createContext<any>({});

const UtilsProvider = ({ children }) => {
  // toastNotify(message, status) — status: "info" | "success" | "error"
  const toastNotify = (message: string, status = "info") => {
    const baseStyle = {
      borderRadius: "12px",
      fontWeight: "500",
      color: "#fff",
      border: "none",
      boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
    };

    if (status === "success") {
      toast.success(message, {
        duration: 3000,
        style: { ...baseStyle, background: "#77BA47" },
      });
    } else if (status === "error") {
      toast.error(message, {
        duration: 4000,
        style: { ...baseStyle, background: "#ef4444" },
      });
    } else {
      toast(message, {
        duration: 3000,
        style: { ...baseStyle, background: "#77BA47" },
      });
    }
  };

  const [isLogin, setIsLogin] = useState(false);
  return (
    <UtilsContext.Provider value={{ isLogin, setIsLogin, toastNotify }}>
      {children}
    </UtilsContext.Provider>
  );
};

export default UtilsProvider;

