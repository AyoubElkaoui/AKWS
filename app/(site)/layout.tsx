import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CustomHead from "@/app/(site)/head";
import ClientProviders from "./ClientProviders"; // Onze client component
import GoogleTagManager from "@/components/GoogleTagManager";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
    <head>
      <CustomHead />
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
      />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FN01ZESQ91" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FN01ZESQ91');
          `}
      </Script>
    </head>
    <body className={`dark:bg-black ${inter.className}`}>
    <ClientProviders>
      <Lines />
      <Header />
      <GoogleTagManager />
      {children}
      <Analytics />
      <SpeedInsights />
      <Footer />
      <ScrollToTop />
    </ClientProviders>
    </body>
    </html>
  );
}
