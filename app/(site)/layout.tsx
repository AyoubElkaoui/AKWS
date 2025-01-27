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
import { Head } from "next/document";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
    <Head>
      {/* Metadata */}
      <title>AK Web Solutions - Professionele Websites op Maat</title>
      <meta
        name="description"
        content="Bij AK Web Solutions bouwen we moderne en gebruiksvriendelijke websites die resultaat opleveren."
      />
      <meta name="keywords" content="webdesign, webdevelopment, maatwerk websites, SEO, AK Web Solutions" />
      <meta name="author" content="AK Web Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1E293B" />

      {/* Open Graph Metadata */}
      <meta property="og:title" content="AK Web Solutions - Professionele Websites op Maat" />
      <meta
        property="og:description"
        content="Wij bouwen moderne en gebruiksvriendelijke websites die resultaat opleveren."
      />
      <meta property="og:url" content="https://www.akwebsolutions.nl" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="/images/og-image.jpg"
      />

      {/* Twitter Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AK Web Solutions" />
      <meta
        name="twitter:description"
        content="Professionele websites en maatwerkoplossingen voor jouw online succes."
      />
      <meta name="twitter:image" content="/images/twitter-card.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
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
