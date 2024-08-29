"use client";

export default function Button({
  color,
  text,
  action = "",
  addClass = "",
  disableForm = false,
}) {
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
      disabled={disableForm}
      onClick={
        action !== ""
          ? (e) => action(e)
          : (e) => console.log("Clicked a non-functional button!")
      }
    >
      {text}
    </button>
  );
}
