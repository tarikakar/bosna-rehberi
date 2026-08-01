import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  title: "Bosna Rehberi | Bosna Turları, Mostar ve Saraybosna Gezileri",

  description:
    "Bosna Rehberi ile Mostar, Saraybosna, Travnik ve Yayçe turlarını keşfedin. Profesyonel rehber eşliğinde unutulmaz Bosna Hersek gezileri.",


  keywords: [
    "Bosna turu",
    "Bosna Hersek turları",
    "Mostar turu",
    "Saraybosna turu",
    "Travnik turu",
    "Yayçe turu",
    "Bosna gezisi",
  ],


  authors: [
    {
      name: "Bosna Rehberi",
    },
  ],


  openGraph: {

    title:
      "Bosna Rehberi | Unutulmaz Bosna Turları",

    description:
      "Mostar, Saraybosna ve Bosna'nın tarihi şehirlerini profesyonel rehberlerle keşfedin.",

    type: "website",

    locale: "tr_TR",

  },


  robots: {
    index: true,
    follow: true,
  },


};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="tr">

      <body>

        {children}

      </body>

    </html>

  );

}