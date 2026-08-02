import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "./components/GoogleAnalytics";
import AnalyticsEvents from "./components/AnalyticsEvents";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  title: "Bosna Rehberi | Mostar ve Saraybosna Turları",

  description:
    "Bosna'nın tarihi şehirlerini Mostar, Saraybosna, Travnik ve Yayçe rotalarını yerel rehberler eşliğinde keşfedin.",


  keywords: [
    "Bosna turları",
    "Mostar turu",
    "Saraybosna turu",
    "Travnik turu",
    "Yayçe turu",
    "Bosna Rehberi",
  ],


  openGraph: {

    title:
      "Bosna Rehberi | Mostar ve Saraybosna Turları",

    description:
      "Yerel rehberler eşliğinde unutulmaz Bosna deneyimi.",

    type: "website",

    locale: "tr_TR",

  },


  verification: {

    google: "googlea89f0f548027a8f1",

  },

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="tr" suppressHydrationWarning>


      <body

        className={`
        ${geistSans.variable}
        ${geistMono.variable}
        antialiased
        `}

      >


        <GoogleAnalytics />


        <AnalyticsEvents />


        {children}


      </body>


    </html>

  );

}