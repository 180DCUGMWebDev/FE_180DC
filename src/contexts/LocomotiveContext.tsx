"use client";

import { useEffect } from "react";
import PropTypes from "prop-types";
import LocomotiveScroll from "locomotive-scroll";

const LocomotiveProvider = ({ children }) => {
  useEffect(() => {
    new LocomotiveScroll();
  }, []);
  return <div>{children}</div>;
};

export default LocomotiveProvider;

LocomotiveProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
