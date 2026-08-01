import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bosna Rehberi | Bosna Hersek Turları",
  description:
    "Saraybosna, Mostar, Travnik ve Yayçe turları. Yerel rehberlerle unutulmaz Bosna Hersek deneyimi.",
  keywords: [
    "Bosna turu",
    "Bosna Hersek turları",
    "Mostar turu",
    "Saraybosna turu",
    "Travnik turu",
  ],
  authors: [
    {
      name: "Bosna Rehberi",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}