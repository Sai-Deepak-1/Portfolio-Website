import React from 'react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Footer from '@/components/sections/footer';
import Navbar from '@/components/sections/navbar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sai Deepak | Portfolio",
  description: "Minimal portfolio showcasing Sai Deepak's work in web development, ML, and DevOps.",
  openGraph: {
    title: "Sai Deepak | Portfolio",
    description: "Minimal portfolio showcasing Sai Deepak's work in web development, ML, and DevOps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans scroll-smooth",
            geistSans.className,
            geistMono.className,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>

        </body >
      </html >
    </>
  );
}
