"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Components
import { FaHandshake, FaHome, FaUserFriends, FaStore, FaBookOpen } from "react-icons/fa";
import { IoTelescope } from "react-icons/io5";

// Import Configs
import { navLinks, storeLink } from "@/config/Links";
import { directRoute } from "@/config/Functions";
import Link from "next/link";

const DropDown = ({ link, route, path }) => {
  // Extractor
  let options = new Array();
  let directs = new Array();

  Object.entries(link).forEach((link) => {
    const [key, value] = link;
    options.push(key);
    directs.push(value);
  });

  return (
    <div className="absolute top-[75px] flex w-[90px] flex-col gap-[5px] rounded-[5px] bg-[white] py-[5px] text-center font-avenirRegular text-[18px]">
      {options.map((item, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              directRoute(directs[idx], route, path);
            }}
            className="text-black"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default function NavFootItems({ ulClass, liClass, aClass, sidebar = false, callback = "" }) {
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
    const navbarIconClass = pathname === navLinks[val] ? "text-black" : "text-[#73757E]";

    switch (val) {
      case "Home":
        return <FaHome className={navbarIconClass} />;

      case "About Us":
        return <FaUserFriends className={navbarIconClass} />;

      case "Store":
        return <FaStore className={navbarIconClass} />;

      case "Academy":
        return <FaBookOpen className={navbarIconClass} />;

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
              " max-lg:flex max-lg:flex-col max-lg:items-center" +
              (sidebar // Changing colors of Sidebar Div depending on the page
                ? navLinks[val] === pathname
                  ? "bg-[#E9E9E9]"
                  : ""
                : "")
            }
            key={val}
            onClick={() => {
              directRoute(directs[idx], router, pathname);
              if (callback !== "") callback();
            }}
          >
            {sidebar ? obtainIconFunction(val) : ""}
            <span
              className={
                aClass +
                "text-[3.5vw] hover:cursor-pointer" +
                (sidebar // Changing colors of Sidebar Text depending on the page
                  ? navLinks[val] === pathname
                    ? "text-black"
                    : "text-[#73757E]"
                  : "")
              }
            >
              {val}
            </span>
            {/* {val === "Store" && <DropDown link={storeLink} route={router} path={pathname} />} */}
          </li>
        );
      })}
    </ul>
  );
}
