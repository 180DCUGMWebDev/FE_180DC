"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPProvider({ children }) {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const gsapSelectors = document.querySelectorAll("[data-gsap]");

      gsapSelectors.forEach((selector, index) => {
        const type = selector.getAttribute("data-gsap");
        const timeline = gsap.timeline();
        switch (type) {
          case "up":
            timeline.from(selector, { y: 200, duration: 1, opacity: 0 });
            break;
          case "down":
            timeline.from(selector, { y: -200, duration: 1, opacity: 0 });
            break;
          case "left":
            timeline.from(selector, { x: 200, duration: 1, opacity: 0 });
            break;
          case "right":
            timeline.from(selector, { x: -200, duration: 1, opacity: 0 });
            break;
          case "right-up":
            timeline.from(selector, {
              x: -200,
              y: 200,
              duration: 1,
              opacity: 0,
            });
            break;
          case "left-up":
            timeline.from(selector, {
              x: 200,
              y: 200,
              duration: 1,
              opacity: 0,
            });
            break;
          case "up-stagger":
            timeline.from(selector, {
              y: 200,
              duration: 1,
              opacity: 0,
              stagger: {
                grid: [1, 4],
                from: "center",
                amount: 1.5,
              },
            });
            break;
          default:
            break;
        }
        if (index < 5) {
          ScrollTrigger.create({
            trigger: selector,
            start: "top 90%",
            end: "bottom 10%",
            ease: "power3.inOut",
            animation: timeline,
          });
        } else if (index === 5) {
          ScrollTrigger.create({
            trigger: selector,
            start: `top 230%`,
            end: `top bottom`,
            ease: "power3.inOut",
            animation: timeline,
          });
        } else {
          ScrollTrigger.create({
            trigger: selector,
            start: `top ${150 + (index + 1) * 10}%`,
            end: `top bottom ${10 + (index + 1) * 9.5}%`,
            ease: "power3.inOut",
            animation: timeline,
          });
        }
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return <div>{children}</div>;
}

GSAPProvider.propTypes = {
  children: PropTypes.bool.isRequired,
};
