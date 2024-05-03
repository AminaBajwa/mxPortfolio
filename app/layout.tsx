import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import ContactUs from "@/components/main/ContactUs";
import EmailSection from "@/components/main/EmailSection";
import Header from "@/components/main/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custom Software Solutions by MetaXperts",
  description: "Elevate your business with MetaXperts. Explore our portfolio for cutting-edge software solutions, crafted for innovation and success.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        {/* <Navbar /> */}
        <Header/>
        {children}
        {/* <ContactUs/> */}
        {/* <EmailSection/> */}
        <Footer />
      </body>
    </html>
  );
}
