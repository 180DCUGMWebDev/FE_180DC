"use client";

export default function Button({ color, text, action = "", addClass = "", disableForm = false }) {
  const btnColor = 
  color === "green" ? "bg-primary" :
  color === "black" ? "bg-black" :
  color === "white" ? "bg-white" : 
  "";

  const textColor = color === "white" ? "text-black" : "text-white";

  return (
    <button
      className={`${btnColor} ${addClass} px-auto rounded-[40px] font-latoRegular ${textColor}`}
      disabled={disableForm}
      onClick={
        action !== "" ? (e) => action(e) : (e) => console.log("Clicked a non-functional button!")
      }
    >
      {text}
    </button>
  );
}
