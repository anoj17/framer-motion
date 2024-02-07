import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import { montserrat, montserratRegular, nunitoSans, playFair, poppins, ptSans } from "./components/Font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} 
      ${montserrat.variable}
       ${poppins.variable} ${playFair.variable} ${nunitoSans.variable} ${ptSans.variable} ${montserratRegular.variable}`}>
        <NavBar />
        {children}</body>
    </html>
  );
}
