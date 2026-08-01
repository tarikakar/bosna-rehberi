import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


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
    "Bosna'nın tarihi şehirlerini, Mostar Köprüsü'nü, Saraybosna'yı ve eşsiz güzelliklerini yerel rehberler eşliğinde keşfedin.",


  keywords: [
    "Bosna turları",
    "Mostar turu",
    "Saraybosna turu",
    "Bosna Rehberi",
    "Travnik turu",
    "Yayçe turu",
  ],


  openGraph: {

    title:
      "Bosna Rehberi | Mostar ve Saraybosna Turları",

    description:
      "Yerel rehberler eşliğinde unutulmaz Bosna deneyimi.",

    type: "website",

    locale: "tr_TR",

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

        {children}


      </body>


    </html>

  );

}