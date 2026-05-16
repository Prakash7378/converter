import type { Metadata } from "next";
import "./globals.css";

import Script from "next/script";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "ConvertFast",
  description:
    "Free online image converter tools.",
  verification: {
    google:
      "Ea74bum3IGXsVbi2TmjoxnpVztWV-Ad7juL2NBN0_mg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5837904009035101"
          crossOrigin="anonymous"
        />

        <Navbar />

        {children}
      </body>
    </html>
  );
}