import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "File Converter",
  description: `File Converter is a free online tool that allows you to convert any file to the format you need. Convert video, audio, image, and document files to any format you need.`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SiteHeader />
        <main className="container">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
