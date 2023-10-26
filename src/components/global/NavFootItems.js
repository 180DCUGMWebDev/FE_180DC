"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Components
import { FaHandshake, FaHome, FaUserFriends } from "react-icons/fa";
import { IoTelescope } from "react-icons/io5";

// Import Configs
import { navLinks } from "@/config/Links";
import { directRoute } from "@/config/Functions";

export default function NavFootItems({
  ulClass,
  liClass,
  aClass,
  sidebar = false,
  callback = ""
}) {
  // Router Hook
  const router = useRouter();
  const pathname = usePathname();

  // Extractor
  let options = new Array();
  let directs = new Array();

  Object.entries(navLinks).forEach((link) => {
    const [key, value] = link;
    options.push(key);
    directs.push(value);
  });

  // Mobile Navbar Icons
  const obtainIconFunction = (val) => {
    const navbarIconClass =
      pathname === navLinks[val] ? "text-black" : "text-[#73757E]";

    switch (val) {
      case "Home":
        return <FaHome className={navbarIconClass} />;

      case "About Us":
        return <FaUserFriends className={navbarIconClass} />;

      case "Our Clients":
        return <FaHandshake className={navbarIconClass} />;

      case "Telescope":
        return <IoTelescope className={navbarIconClass} />;

      default:
        break;
    }
  };

  // Component
  return (
    <ul className={ulClass + " select-none"}>
      {options.map((val, idx) => {
        return (
          <li
            className={
              liClass +
              " " +
              (sidebar // Changing colors of Sidebar Div depending on the page
                ? (navLinks[val] === pathname
                  ? "bg-[#E9E9E9]"
                  : "")
                : "")
            }
            key={val}
            onClick={() => {
              directRoute(directs[idx], router, pathname);
              if (callback !== "")
                callback();
            }}
          >
            {sidebar ? obtainIconFunction(val) : ""}
            <p
              className={
                aClass +
                " hover:cursor-pointer " +
                (sidebar // Changing colors of Sidebar Text depending on the page
                  ? navLinks[val] === pathname
                    ? "text-black"
                    : "text-[#73757E]"
                  : "")
              }
            >
              {val}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
