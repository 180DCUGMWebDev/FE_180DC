// Import Packages
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Background Function
export const createBackground = ( theme, className="" ) => {
  const bgTheme =
    theme === "light"
      ? " bg-white "
      : theme === "dark"
      ? " bg-black "
      : " bg-primary ";

  return (
    <div className={"absolute -z-[999] top-0 left-0 w-full h-full " + bgTheme + " " + className} />
  );
};

// Copy Function
export const copyContent = (content, context) => {
  // Toasters
  const toastOptions = () => {
    return {
      position: "top-center",
      autoClose: 1000,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    };
  };

  navigator.clipboard.writeText(content, context);
  toast.info(context + " sucessfully copied!", toastOptions());
};

// Routing Function
export const directRoute = (link, router, pathname) => {
  // console.log("Comparing to " + link + " with current " + pathname);

  if (pathname !== link) router.push(link);
};
