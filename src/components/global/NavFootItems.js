"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Components
import { FaHandshake, FaHome, FaUserFriends, FaStore, FaBookOpen } from "react-icons/fa";
import { IoTelescope } from "react-icons/io5";
import {useRef} from "react";

// Import Configs
import { navLinks, storeLink } from "@/config/Links";
import { directRoute } from "@/config/Functions";
import Link from "next/link";
import "./navbar.css"

const DropDown = ({ childClass, aClass, link, route, path }) => {
  // Extractor
  let options = new Array();
  let directs = new Array();

  const router = useRouter();
  Object.entries(link).forEach((link) => {
    const [key, value] = link;
    options.push(key);
    directs.push(value);
  });

  return (
    <div className={`${childClass} transition-opacity duration-200 absolute top-[4.5vw] flex w-[90px] flex-col gap-[5px] rounded-[5px] py-[5px] text-center font-avenirRegular`}>
      {options.map((item, idx) => {
        return (
          <Link
            key={idx}
            // onClick={() => router.push(directs[idx])}
            href={directs[idx]}
            className={`${aClass} hover:cursor-pointer`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

const DropDownMobile = ({ childClass, aClass, link, route, path, callback }) => {
  // Extractor
  let options = new Array();
  let directs = new Array();

  Object.entries(link).forEach((link) => {
    const [key, value] = link;
    options.push(key);
    directs.push(value);
  });

  return (
    <div className={`${childClass} relative w-[140%] !text-[3.3vw]/[2.3vw] !font-latoRegular mt-[1vw] gap-[4vw] flex flex-col rounded-[5px] py-[5px] text-center`}>
      {options.map((item, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              directRoute(directs[idx], route, path);
              if(callback !== "") callback();
            }}
            className={`${aClass} hover:cursor-pointer`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default function NavFootItems({ ulClass, liClass, aClass, sidebar = false, callback = "", dropDown = false, dropDownMobile = false }) {
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
              `${liClass} ${val === 'Store' ? "storeParent" : ""}  max-lg:flex max-lg:flex-col max-lg:items-center` +
              (sidebar // Changing colors of Sidebar Div depending on the page
                ? navLinks[val] === pathname
                  ? "bg-[#E9E9E9]"
                  : ""
                : "")
            }
            key={val}
            onClick={() => {
              if(!(dropDownMobile && val === "Store")){
                directRoute(directs[idx], router, pathname);
                if (callback !== "") callback();
              }
            }}
          >
            {sidebar ? obtainIconFunction(val) : ""}
            <span
              className={
                 `${aClass} hover:cursor-pointer` +
                (sidebar // Changing colors of Sidebar Text depending on the page
                  ? navLinks[val] === pathname
                    ? "text-black"
                    : "text-[#73757E]"
                  : "")
              }
            >
              {val}
            </span>
            {dropDown && !dropDownMobile && val === "Store" && <DropDown childClass={"storeChild"} aClass={aClass} link={storeLink} route={router} path={pathname} />}
            {dropDownMobile && !dropDown && val === "Store" && <DropDownMobile childClass={"storeChildMobile"} aClass={aClass} link={storeLink} route={router} path={pathname} callback={callback} />}
          </li>
        );
      })}
    </ul>
  );
}
