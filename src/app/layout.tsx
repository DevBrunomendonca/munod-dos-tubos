import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ["900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mundo do Tubos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
