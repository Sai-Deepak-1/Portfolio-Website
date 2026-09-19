import React from 'react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Footer from '@/components/sections/footer';
import Navbar from '@/components/sections/navbar';
import LenisScroll from "@/components/shared/lenis-scroll";
import { siteConfig } from "@/data";
import { siteUrl } from "@/lib/metadata";

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
  metadataBase: siteUrl,
  title: {
    default: `${siteConfig.name} | Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.heroTagline,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Portfolio`,
    description: siteConfig.heroTagline,
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | Portfolio`,
    description: siteConfig.heroTagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
        <body
          className={cn(
            "min-h-screen bg-background font-sans scroll-smooth",
            geistSans, geistMono
          )}
          >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: siteConfig.name,
                url: siteConfig.siteUrl,
                description: siteConfig.heroTagline,
                sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Hyderabad",
                  addressCountry: "IN",
                },
              }),
            }}
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <LenisScroll />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>

        </body>
      </html>
  );
}
