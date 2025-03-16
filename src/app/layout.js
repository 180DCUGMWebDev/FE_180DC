// Import
import "./globals.css";

// Import Components
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

import TooSmall from "@/components/misc/TooSmall";
import Script from "next/script";
import LocomotiveProvider from "@/contexts/LocomotiveContext";
import GSAPProvider from "@/contexts/GSAPContext";
import UtilsProvider from "@/contexts/UtilsContext";

export const metadata = {
  title: "180DC UGM",
  description: "Code by IT 180dcugm",
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
            <UtilsProvider>
              <div className="hidden flex-col overflow-clip min-[250px]:flex">
                {/* Content */}
                <Navbar />
                {children}

                <Footer />
              </div>
              {/* Toastify */}

              {/* Second Option */}
              <TooSmall />
            </UtilsProvider>
          </GSAPProvider>
        </LocomotiveProvider>
      </body>
    </html>
  );
}
