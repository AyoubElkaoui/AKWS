import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import Head from "next/head";
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
    {/* Server component met metadata */}
    <CustomHead />
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      strategy="lazyOnload"
    />
    <body className={`dark:bg-black ${inter.className}`}>
    {/* Verpak client-only onderdelen in ClientProviders */}
    <ClientProviders>
      <Lines />
      <Header />
      <Script
        id="cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="6e30a39b-9c3c-4e6f-aeba-e10349d4a6a6"
        data-blockingmode="auto"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <GoogleTagManager />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FN01ZESQ91" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FN01ZESQ91');
          `}
      </Script>
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
