"use client";

import { createContext, useState } from "react";

export const UtilsContext = createContext<any>({});

// Import Packages
import { toast, ToastContainer, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UtilsProvider = ({ children }) => {
  // Toast Notification Function
  const toastNotify = (content, status = "info") => {
    const toastOptions = {
      position: "top-center" as ToastPosition,
      autoClose: 1000,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    };

    // toast(content, toastOptions);
    if (status === "info") toast(content, toastOptions);
    else if (status === "success") toast(content, toastOptions);
  };
  const [isLogin, setIsLogin] = useState(false);
  return (
    <UtilsContext.Provider value={{ isLogin, setIsLogin, toastNotify }}>
      {children}
      <ToastContainer />
    </UtilsContext.Provider>
  );
};

export default UtilsProvider;
