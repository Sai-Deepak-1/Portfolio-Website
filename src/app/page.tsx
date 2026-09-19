import type { Metadata } from "next";
import HomeSection from "@/components/sections/home";
import { siteConfig } from "@/data";

export const metadata: Metadata = {
  description: siteConfig.heroTagline,
};

export default function Home() {
  return <HomeSection />;
}
