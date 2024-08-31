import Content from "@/components/admin/Content/Content";
import NavbarAdmin from "@/components/admin/NavbarAdmin";
import React from "react";

export default function page() {
  return (
    <div className="relative">
      <NavbarAdmin />
      <Content />
    </div>
  );
}
