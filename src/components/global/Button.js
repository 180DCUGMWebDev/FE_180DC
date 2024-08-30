"use client";

export default function Button({ color, text, action = "", addClass = "", disableForm = false }) {
  const btnColor = color === "green" ? "bg-primary" : color === "black" ? "bg-black" : "";

  return (
    <button
      className={btnColor + " " + addClass + " px-auto rounded-[40px] font-latoRegular text-white"}
      disabled={disableForm}
      onClick={
        action !== "" ? (e) => action(e) : (e) => console.log("Clicked a non-functional button!")
      }
    >
      {text}
    </button>
  );
}
