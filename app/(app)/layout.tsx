// Import
import "../globals.css";

import { Toaster } from "@/components/elements/Toast";
import { Analytics } from "@vercel/analytics/next";

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
  latoBlack,
  latoBlackItalic,
} from "@/lib/font";
import { cn } from "@/lib/utils";

// Import Components
import Navbar from "@/components/elements/Navbar/Navbar";
import Footer from "@/components/elements/Footer/Footer";
import { getPayload } from "payload";
import config from "@payload-config";

import TooSmall from "@/components/layout/TooSmall";
import EightyChatbot from "@/components/layout/EightyChatbot";
import Script from "next/script";
import LocomotiveProvider from "@/contexts/LocomotiveContext";
import UtilsProvider from "@/contexts/UtilsContext";
import { AnimationProvider } from "@/hooks/AnimationProvider";

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

export default async function RootLayout({ children }) {
  const payload = await getPayload({ config });
  const hero = await payload.find({
    collection: "hero",
    limit: 1,
    sort: "-createdAt",
    depth: 1,
  });

  const notification = hero.docs?.[0]?.notification;

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
          // matches the footer, so short pages show dark under it rather than
          // a strip of white page background
          "bg-black-300 select-none",
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
          latoSemiboldItalic.variable,
          latoBlack.variable,
          latoBlackItalic.variable
        )}
      >
        <UtilsProvider>
          {/* Content > 250px */}
          {/* min-h-screen + a growing content wrapper keeps the footer resting
              at the bottom of the viewport on short pages, so the page
              background is never exposed beneath it */}
          <main className="hidden min-h-screen flex-col overflow-clip min-[250px]:flex">
            <Navbar notification={notification as string | undefined} />
            <div className="flex flex-1 flex-col">
              <AnimationProvider>{children}</AnimationProvider>
            </div>
            <Footer />
          </main>
          {/* Second Option < 250px*/}
          <TooSmall />
        </UtilsProvider>

        {/* Global Chatbot UI */}
        <EightyChatbot />

        {/* Toaster at body level for optimal rendering */}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
