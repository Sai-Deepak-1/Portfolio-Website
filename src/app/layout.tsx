import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteChrome } from "@/components/portfolio/site-chrome";
import { SiteFooter } from "@/components/portfolio/site-footer";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.example"),
  title: {
    default: "[PLACEHOLDER] Portfolio",
    template: "%s | [PLACEHOLDER] Portfolio",
  },
  description: "[PLACEHOLDER] A developer portfolio. Replace this with an approved description before launch.",
  openGraph: {
    type: "website",
    title: "[PLACEHOLDER] Portfolio",
    description: "[PLACEHOLDER] A developer portfolio.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "[PLACEHOLDER] Portfolio",
    description: "[PLACEHOLDER] A developer portfolio.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteChrome />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
