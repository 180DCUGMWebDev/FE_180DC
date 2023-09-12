import "./globals.css";

import Navbar from "@/components/global/Navbar";

export const metadata = {
  title: "180 DC UGM",
  description: "Coded by TETIzens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"p-[20px] bg-black"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
