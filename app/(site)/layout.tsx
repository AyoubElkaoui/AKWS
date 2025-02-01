"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Script from "next/script";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      strategy="lazyOnload"
    />
    <body className={`dark:bg-black ${inter.className}`}>
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme="light"
    >
      <Lines />
      <Header />
      <ToasterContext />
      {children}
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
    </body>
    </html>
  );
}
