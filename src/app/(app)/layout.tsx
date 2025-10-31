// Import
import "../../components/styles/globals.css";

import { Toaster } from "@/components/elements/Toast";

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
import Navbar from "@/components/elements/Navbar/Navbar";
import Footer from "@/components/elements/Footer/Footer";

import TooSmall from "@/components/layout/TooSmall";
import Script from "next/script";
import LocomotiveProvider from "@/contexts/LocomotiveContext";
import UtilsProvider from "@/contexts/UtilsContext";

export const metadata = {
  title: "180 Degrees Consulting UGM",
  description:
    "180 Degrees Consulting Universitas Gadjah Mada is the first Indonesian branch of the world's largest consultancy for non-profit and social enterprises.",
  icons: {
    icon: [
      { url: "/icon.ico", sizes: "any" },
      { url: "/icon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/icon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/icon.ico",
  },
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
        </LocomotiveProvider>

        {/* Toaster at body level for optimal rendering */}
        <Toaster />
      </body>
    </html>
  );
}
