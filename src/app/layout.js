import "./globals.css";

// Import Components
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "180DC UGM",
  description: "Coded by TETIzens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"relative h-full w-full"}>
        {/* Background */}
        <div className="absolute -z-[999] top-0 left-0 w-full h-full bg-black" />

        {/* Content */}
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
