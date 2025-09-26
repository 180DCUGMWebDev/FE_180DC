"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Components
import { FaHandshake, FaHome, FaUserFriends, FaStore, FaBookOpen } from "react-icons/fa";
import { IoTelescope } from "react-icons/io5";

// Import Configs
import { childLink, navLinks} from "@/config/Links";
import { directRoute } from "@/config/Functions";
import Link from "next/link";
import "./navbar.css";

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
    <div
      className={`${childClass} absolute top-[4.5vw] flex w-[90px] flex-col gap-[5px] rounded-[5px] py-[5px] text-center font-avenir-regular transition-opacity duration-200`}
    >
      {options.map((item, idx) => {
        return (
          <Link
            key={JSON.stringify({ item: item, idx: idx })}
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
    <div
      className={`${childClass} relative mt-[1vw] flex w-[140%] flex-col gap-[4vw] rounded-[5px] py-[5px] text-center font-lato-regular! text-[3.3vw]/[2.3vw]! transition-opacity duration-200 md:text-[1.1vw]/[0.8vw]! lg:text-[1.8vw]/[1.3vw]! xl:text-[1.3vw]/[1vw]!`}
    >
      {options.map((item, idx) => {
        return (
          <button
            key={JSON.stringify({ item: item, idx: idx })}
            onClick={() => {
              directRoute(directs[idx], route, path);
              if (callback !== "") callback();
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

export default function NavFootItems({
  ulClass,
  liClass,
  aClass,
  sidebar = false,
  callback = null,
  dropDown = false,
  dropDownMobile = false,
  identifier = "",
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
    const navbarIconClass = pathname === navLinks[val] ? "text-black" : "text-[#73757E]";

    switch (val) {
      case "Home":
        return <FaHome className={navbarIconClass} />;

      case "About Us":
        return <FaUserFriends className={navbarIconClass} />;

      case "Event":
        return <FaHandshake className={navbarIconClass} />;

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

  const containDropdown = ["Store", "Event", "Telescope"];
  const classDropdown = {
    Store: ["storeChild", "storeChildMobile", "storeParent"],
    Event: ["eventChild", "eventChildMobile", "eventParent"],
    Telescope: ["telescopeChild", "telescopeChildMobile", "telescopeParent"],
  };

  // Component
  return (
    <div className={ulClass + " select-none"}>
      {options.map((val, idx) => {
        return (
          <div
            key={JSON.stringify({ val: val, idx: idx, indentifier: identifier })}
            className={
              `${liClass} ${containDropdown.includes(val) && classDropdown[val][2]} max-lg:flex max-lg:flex-col max-lg:items-center` +
              (sidebar // Changing colors of Sidebar Div depending on the page
                ? navLinks[val] === pathname
                  ? "bg-[#E9E9E9]"
                  : ""
                : "")
            }
            onClick={() => {
              if (!(dropDownMobile && val === "Store")) {
                directRoute(directs[idx], router, pathname);
                if (callback) callback();
              }
            }}
          >
            {sidebar ? obtainIconFunction(val) : ""}
            <span
              className={
                `${aClass} transition-all duration-500 hover:font-bold` +
                (sidebar // Changing colors of Sidebar Text depending on the page
                  ? navLinks[val] === pathname
                    ? "text-black"
                    : "text-[#73757E]"
                  : "")
              }
            >
              {val}
            </span>
            {containDropdown.includes(val) && (
              <>
                {dropDown && !dropDownMobile && (
                  <DropDown
                    childClass={classDropdown[val][0]}
                    aClass={aClass}
                    link={childLink[val]}
                    route={router}
                    path={pathname}
                  />
                )}
                {dropDownMobile && !dropDown && (
                  <DropDownMobile
                    childClass={classDropdown[val][1]}
                    aClass={aClass}
                    link={childLink[val]}
                    route={router}
                    path={pathname}
                    callback={callback}
                  />
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
