// Import
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

import {
  mulishLight,
  mulishRegular,
  mulishSemibold,
  mulishBold,
  mulishExtrabold,
  avenirBlack,
  avenirBook,
  avenirHeavy,
  avenirLight,
  avenirRegular,
  latoBold,
  latoBoldItalic,
  latoRegular,
  latoLight,
  latoLightItalic,
  latoSemibold,
  latoSemiboldItalic,
} from "@/lib/font";
import { cn } from "@/lib/utils";

// Import Components
import Navbar from "@/components/element/Navbar/Navbar";
import Footer from "@/components/element/Footer";

import TooSmall from "@/components/element/TooSmall";
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
      <body
        className={cn(
          "select-none",
          mulishLight.variable,
          mulishRegular.variable,
          mulishSemibold.variable,
          mulishBold.variable,
          mulishExtrabold.variable,
          avenirBlack.variable,
          avenirBook.variable,
          avenirHeavy.variable,
          avenirLight.variable,
          avenirRegular.variable,
          latoBold.variable,
          latoBoldItalic.variable,
          latoRegular.variable,
          latoLight.variable,
          latoLightItalic.variable,
          latoSemibold.variable,
          latoSemiboldItalic.variable
        )}
      >
        <LocomotiveProvider>
          <GSAPProvider>
            <UtilsProvider>
              {/* Content > 250px */}
              <main className="hidden flex-col overflow-clip min-[250px]:flex">
                <Navbar />
                {children}
                <Footer />
              </main>
              {/* Second Option < 250px*/}
              <TooSmall />
            </UtilsProvider>
          </GSAPProvider>
        </LocomotiveProvider>

        {/* Toaster at body level for optimal rendering */}
        <Toaster />
      </body>
    </html>
  );
}
