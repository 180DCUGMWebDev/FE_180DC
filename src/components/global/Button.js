"use client";

export default function Button({ color, text, action = "", addClass = "" }) {
  const btnColor =
    color === "green" ? "bg-primary" : color === "black" ? "bg-black" : "";

  return (
    <button
      className={
        btnColor +
        " " +
        addClass +
        " rounded-[40px] text-white px-auto font-latoRegular"
      }
      onClick={
        action !== ""
          ? () => action()
          : () => console.log("Clicked a non-functional button!")
      }
    >
      {text}
    </button>
  );
}
