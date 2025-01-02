import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
  variable: "--font-caption",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jody Gs · Fullstack Developper",
  description: "Web developper specialized on Next.js, React, Tailwind and TypeScript ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={cn(GeistSans.variable, AnekTelugu.variable, "font-sans h-full")}
      >
        {children}
      </body>
    </html>
  );
}
