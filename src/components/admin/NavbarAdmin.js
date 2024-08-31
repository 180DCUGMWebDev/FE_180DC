"use client";
import Image from "next/image";
import React from "react";
import Button from "../global/Button";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function NavbarAdmin() {
  const router = useRouter();

  const handleLogout = async () => {
    alert("Logout");
    try {
      const response = await axios.delete("/api/auth");
      if (response.status === 200) {
        // Redirect to homepage after successful logout
        router.push("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="absolute z-10 flex flex-row justify-between bg-white h-20 p-5 w-full ">
      <Image
        src="/img/global/logo180dctrns.png"
        alt="background"
        width={2000}
        height={2000}
        className="w-[40px] h-[40px] lg:w-[111px] lg:h-[111px] "
      />

      <Button
        leftIcon={<FiLogOut />}
        text="Logout"
        textcolor="text-red-500"
        addClass="px-6 h-fit py-2 lg:py-3 text-sm sm:text-base lg:text-lg text-black bg-[#F8F8F8]"
        onClick={handleLogout}
      />
    </div>
  );
}
