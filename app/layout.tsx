import type { Metadata } from "next";
import "./globals.css";

import TheNavBar from "@/components/TheNavBar";
import TheFooter from "@/components/TheFooter";

export const metadata: Metadata = {
  title: "XAuth Ecosystem | Professional Identity Management",
  description: "A high-performance modular suite for Minecraft: Bedrock Edition. Providing industry-standard security since 2021.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TheNavBar />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
