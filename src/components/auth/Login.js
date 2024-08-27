"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image component from next/image
import Button from "@/components/global/Button"; // Import your Button component
import { useRouter } from "next/navigation"; // Import Next.js router
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth", {
        username,
        password,
      });
      if (response.status === 200) {
        Cookies.set("token", response.data.token, { path: "/" });
        router.push("/admin");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="bg-white h-screen w-full p-5 flex flex-col relative">
      <header className="absolute">
        <Image
          src="/img/global/logo180dctrns.png"
          alt="background"
          width={2000}
          height={2000}
          className="w-[40px] h-[40px] lg:w-[111px] lg:h-[111px]"
        />
      </header>
      <div className="flex h-full flex-col  w-full items-center justify-center font-latoRegular">
        <div className="max-w-sm w-full  flex flex-col">
          <h2 className="text-2xl  mb-6 text-center">Admin Login</h2>

          {error && (
            <div className="mb-4 text-red-500 text-center">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-[12px] ">
                Username
              </label>
              <input
                type="text"
                placeholder="Input your username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2 text-[12px]">
                Password
              </label>
              <input
                type="password"
                placeholder="Input your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              color="green"
              text="Login"
              addClass="w-full h-fit py-2 lg:py-3 text-sm sm:text-base lg:text-lg text-black"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
