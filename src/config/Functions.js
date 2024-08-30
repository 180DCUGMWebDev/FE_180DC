// Import Packages
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Background Function
export const createBackground = (theme, className = "") => {
  const bgTheme =
    theme === "light" ? " bg-white " : theme === "dark" ? " bg-black " : " bg-primary ";

  return (
    <div className={"absolute left-0 top-0 -z-[999] h-full w-full " + bgTheme + " " + className} />
  );
};

// Copy Function
export const copyContent = (content, context) => {
  // Toasters
  navigator.clipboard.writeText(content, context);
  toastNotify(context + " sucessfully copied!");
};

// Toast
export const toastNotify = (content, status = "info") => {
  const toastOptions = () => {
    return {
      position: "top-center",
      autoClose: 1000,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    };
  };

  if (status === "info") toast.info(content, toastOptions());
  else if (status === "success") toast.success(content, toastOptions());
};

// Routing Function
export const directRoute = (link, router, pathname) => {
  // console.log("Comparing to " + link + " with current " + pathname);

  if (pathname !== link) router.push(link);
};
