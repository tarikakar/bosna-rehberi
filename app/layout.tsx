import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsapp from "./components/FloatingWhatsapp";


export const metadata: Metadata = {

  title: "Bosna Pusulası | Mostar ve Saraybosna Turları",

  description:
    "Bosna Pusulası ile Mostar, Saraybosna, Travnik ve Jajce turlarını keşfedin.",

  icons: {
    icon: "/favicon.png",
  },

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="tr" suppressHydrationWarning>

      <body>

        {children}

        <FloatingWhatsapp />

      </body>

    </html>

  );

}