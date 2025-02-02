"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Script from "next/script";
import Head from "next/head";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-FN01ZESQ91"></script>

    </Head>
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
      <Analytics />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
    <Script id="gtag-init" strategy="afterInteractive">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FN01ZESQ91');
          `}
    </Script>
    </body>
    </html>
  );
}
