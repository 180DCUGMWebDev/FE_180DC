// Import
import "./globals.css";

// Import Components
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { ToastContainer } from "react-toastify";
import { Children } from "react";

export const metadata = {
  title: "180DC UGM",
  description: "Coded by TETIzens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Content */}
        <Navbar />
        {children}
        <Footer />
        {/* Toastify */}
        <ToastContainer />
      </body>
    </html>
  );
}
