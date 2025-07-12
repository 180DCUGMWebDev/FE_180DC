"use client";
import { useRouter } from "next/navigation";

export default function Button({ color, text, action = "", addClass = "", disableForm = false, href }) {

  const router = useRouter();

  const btnColor = 
  color === "green" ? "bg-primary" :
  color === "black" ? "bg-black" :
  color === "white" ? "bg-white" : 
  "";

  const textColor = color === "white" ? "text-primary" : "text-white";

  const handleClick = (e) => {
    if (disableForm) return; 

    if (href) {
      window.open(`https://${href}`, '_blank', 'noopener,noreferrer')
    } else if (action) {
      action(e); 
    } else {
      console.log("Clicked a non-functional button!");
    }
  };

  return (
    <button
      className={`${btnColor} ${addClass} px-auto rounded-[40px] font-latoRegular ${textColor}`}
      disabled={disableForm}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
