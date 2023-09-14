"use client";

import { navLinks } from "@/config/Links";

export default function NavFootItems({ ulClass, liClass, aClass }) {
  let options = new Array();
  let directs = new Array();

  Object.entries(navLinks).forEach((link) => {
    const [key, value] = link;
    options.push(key);
    directs.push(value);
  });

  return (
    <ul className={ulClass}>
      {options.map((val, idx) => {
        return (
          <li className={liClass} key={val}>
            <a className={aClass} href={directs[idx]}>
              {val}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
