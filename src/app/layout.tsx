import type { Metadata } from "next";
import { Rajdhani, Rubik } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
