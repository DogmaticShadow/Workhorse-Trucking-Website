import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // If using next/font/google
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// We previously defined --font-geist-sans in CSS assuming Next.js default setup kept the font loader.
// If I'm rewriting layout, I need to make sure I include the font loader or remove the var references if I can't use it.
// Next.js 15 template usually has:
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Workhorse Trucking | Dependable Hauling Services Alaska",
  description: "Workhorse Trucking LLC provides elite hauling, construction support, and transportation services in Alaska and the US. Veteran Owned.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-gray-100 selection:bg-brand-red selection:text-white`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
