"use client";

import { createContext, useState } from "react";
import { toast } from "sonner";

export const UtilsContext = createContext<any>({});

const UtilsProvider = ({ children }) => {
  // toastNotify(message, status) — status: "info" | "success" | "error"
  const toastNotify = (message: string, status = "info") => {
    if (status === "success") {
      toast.success(message, {
        duration: 3000,
        style: {
          background: "#fff",
          border: "1px solid rgba(119,186,71,0.4)",
          borderRadius: "12px",
          color: "#1a1a1a",
        },
      });
    } else if (status === "error") {
      toast.error(message, {
        duration: 4000,
        style: {
          background: "#fff",
          border: "1px solid rgba(239,68,68,0.4)",
          borderRadius: "12px",
          color: "#1a1a1a",
        },
      });
    } else {
      toast(message, {
        duration: 3000,
        style: {
          background: "#fff",
          border: "1px solid rgba(119,186,71,0.3)",
          borderRadius: "12px",
          color: "#1a1a1a",
        },
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

