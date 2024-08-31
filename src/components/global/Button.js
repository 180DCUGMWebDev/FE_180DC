"use client";

export default function Button({
  color,
  text,
  action = "",
  addClass = "",
  disableForm = false,
  leftIcon = null,
  rightIcon = null,
  onClick,
  textcolor = "text-white",
}) {
  const btnColor =
    color === "green" ? "bg-primary" : color === "black" ? "bg-black" : "";

  return (
    <button
      className={
        btnColor +
        " " +
        addClass +
        ` flex items-center justify-center space-x-2 rounded-[40px] ${textcolor} px-auto font-latoRegular`
      }
      disabled={disableForm}
      onClick={onClick}
      // onClick={
      //   action !== ""
      //     ? (e) => action(e)
      //     : (e) => console.log("Clicked a non-functional button!")
      // }
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span>{text}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}
