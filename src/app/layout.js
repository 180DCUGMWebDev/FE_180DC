// Import
import "./globals.css";

// Import Components
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { ToastContainer } from "react-toastify";
import TooSmall from "@/components/misc/TooSmall";
import Script from "next/script";
import LocomotiveProvider from "@/contexts/LocomotiveContext";
import GSAPProvider from "@/contexts/GSAPContext";
import AuthProvider from "@/contexts/AuthContext";

export const metadata = {
  title: "180DC UGM",
  description: "Coded by TETIzens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3J45MR3ZCW"></Script>
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
        <LocomotiveProvider>
          <GSAPProvider>
            <AuthProvider>
              <div className="hidden flex-col overflow-clip min-[250px]:flex">
                {/* Content */}
                <Navbar />
                {children}
                <Footer />
              </div>
              {/* Toastify */}
              <ToastContainer />

              {/* Second Option */}
              <TooSmall />
            </AuthProvider>
          </GSAPProvider>
        </LocomotiveProvider>
      </body>
    </html>
  );
}
