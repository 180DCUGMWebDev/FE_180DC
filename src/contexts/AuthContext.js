"use client";

import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [_username, setUsername] = useState("admin");
  // const [_password, setPassword] = useState("admin123");

  // const account = {
  //   username: "admi",
  //   password: "admin123",
  // };

  // const login = (username, password) => {
  //   if (username == account.username && password == account.password) {
  //     setUsername(username);
  //     setPassword(password);
  //   }
  // };

  // const logout = () => {
  //   setUsername(null);
  //   setPassword(null);
  // };

  const [isLogin, setIsLogin] = useState(false);
  return <AuthContext.Provider value={{ isLogin, setIsLogin }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
