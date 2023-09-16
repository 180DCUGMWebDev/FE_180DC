"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Configs
import { navLinks } from "@/config/Links";
import { directRoute } from "@/config/Functions";

export default function NavFootItems({ ulClass, liClass, aClass }) {
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

  // Component
  return (
    <ul className={ulClass + " select-none"}>
      {options.map((val, idx) => {
        return (
          <li className={liClass} key={val}>
            <p
              className={aClass + " hover:cursor-pointer"}
              onClick={() => {
                directRoute(directs[idx], router, pathname);
              }}
            >
              {val}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
