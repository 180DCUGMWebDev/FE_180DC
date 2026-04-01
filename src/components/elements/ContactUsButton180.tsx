"use client";

import React, { useState } from "react";
import Button180, { Button180Props } from "./Button180";
import { Phone } from "lucide-react";
import { socLinks } from "@/config/Links";

export default function ContactUsButton180({
  text = "Contact Us",
  color = "gray",
  size = "lg",
  icon = <Phone />,
  href = socLinks.WhatsApp,
  ...props
}: Partial<Button180Props>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button180
      {...props}
      text={isHovered ? "Partnership" : text}
      color={color}
      size={size}
      icon={icon}
      href={href}
      addClass="w-[180px] lg:w-[200px] font-avenir-heavy transition-all duration-300"
      onMouseEnter={(e) => {
        setIsHovered(true);
        if (typeof props.onMouseEnter === "function") {
          props.onMouseEnter(e);
        }
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        if (typeof props.onMouseLeave === "function") {
          props.onMouseLeave(e);
        }
      }}
    />
  );
}
