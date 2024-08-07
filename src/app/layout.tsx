import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/sections/navbar";
import { TooltipProvider } from "@/components/ui/magicui/tooltip";
import BackToTop from "@/components/ui/backtotop";
import MotionWrap from "@/components/ui/motion-wrap";
import Contact from "@/components/sections/contact";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Deepak Portfolio",
  description: "Sai Deepaks Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='scroll-smooth' style={{ scrollBehavior: 'smooth' }} lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            {children}
            <MotionWrap className="mt-14 flex w-full items-center justify-center">
              <section id="ContactMe"><Contact /></section>
            </MotionWrap>
            <Navbar />
            <Toaster />
            <BackToTop />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
