"use client";

import { useEffect } from "react";
import PropTypes from "prop-types";

const LocomotiveProvider = ({ children }) => {
  useEffect(() => {
    const init = async () => {
      // eslint-disable-next-line import/no-unresolved
      const { default: LocomotiveScroll } = await import("locomotive-scroll");
      // eslint-disable-next-line no-new
      new LocomotiveScroll();
    };
    init();
  }, []);
  return <div>{children}</div>;
};

export default LocomotiveProvider;

LocomotiveProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
