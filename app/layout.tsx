import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CartContextProvider from '@/lib/contexts/CartContextProvider'
import Navbar from "@/components/ui/homepage/navbar";
import BottomNavigation from "@/components/ui/homepage/bottomNav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Merrylow - UG based food delivery platform",
  description: "We deliver meals from your favourite restaurants on campus right to your doorstep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body>
        <CartContextProvider>
          <Navbar />
          {children}
          <BottomNavigation />
        </CartContextProvider>
      </body>
    </html>
  );
}