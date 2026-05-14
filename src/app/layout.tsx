import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ConvertFast",
    template: "%s | ConvertFast",
  },

  description:
    "Free online file converter tools.",

  verification: {
    google: "Ea74bum3IGXsVbi2TmjoxnpVztWV-Ad7juL2NBN0_mg",
  },
};

/*<meta name="google-site-verification" content="Ea74bum3IGXsVbi2TmjoxnpVztWV-Ad7juL2NBN0_mg" />*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5837904009035101"
          crossOrigin="anonymous"
        />

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}