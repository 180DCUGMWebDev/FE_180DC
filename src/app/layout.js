import "./globals.css";

import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export const metadata = {
  title: "180 DC UGM",
  description: "Coded by TETIzens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-black"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
