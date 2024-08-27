// Import
import "./globals.css";

// Import Components
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { ToastContainer } from "react-toastify";
import TooSmall from "@/components/misc/TooSmall";
import Script from "next/script";

export const metadata = {
  title: "180DC UGM",
  description: "Coded by TETIzens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3J45MR3ZCW"
      ></Script>
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-3J45MR3ZCW');
        `}
      </Script>
      <body className="select-none">
        {/* First Option */}

        <div className="hidden min-[250px]:flex flex-col overflow-clip">
          {/* Content */}
          <div className="relative z-[1]">
            <Navbar />
          </div>
          <div className="relative z-[0]">{children}</div>
          <div className="relative z-[1]">
            <Footer />
          </div>
        </div>
        {/* Toastify */}
        <ToastContainer />

        {/* Second Option */}
        <TooSmall />
      </body>
    </html>
  );
}
