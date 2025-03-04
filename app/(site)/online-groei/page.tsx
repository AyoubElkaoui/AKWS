import { Metadata } from "next";
import LpHero from "@/components/LpHero";
import LpUSP from "@/components/LpUSP";
import LpDiensten from "@/components/LpDiensten";
import LpReviews from "@/components/LpReviews";
import LpFAQ from "@/components/LpFAQ";
import LpCTA from "@/components/LpCTA";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Webdesign, SEO & Google Ads | Meer Klanten Online | AK Web Solutions",
  description: "Boost je bedrijf met een snelle, SEO-geoptimaliseerde website. Webdesign, SEO, hosting en Google Ads op één plek. Plan een gratis strategiegesprek!",
  keywords: [
    "webdesign", "website laten maken", "SEO", "zoekmachine optimalisatie",
    "Google Ads", "SEA", "webhosting", "online marketing",
    "meer klanten", "hoger in Google", "WordPress", "Next.js"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Webdesign, SEO & Google Ads | AK Web Solutions",
    description: "Professionele websites, SEO en Google Ads voor meer klanten en online succes.",
    url: "https://www.akwebsolutions.nl/landingspagina",
    siteName: "AK Web Solutions",
    images: [
      {
        url: "https://www.akwebsolutions.nl/images/meta-image.jpg", // Pas deze aan naar je eigen afbeelding
        width: 1200,
        height: 630,
        alt: "Webdesign en SEO door AK Web Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@akwebsolutions", // Pas aan als je Twitter-account hebt
    title: "Webdesign, SEO & Google Ads | AK Web Solutions",
    description: "Professionele websites en online marketing voor bedrijven. Meer klanten? Start vandaag nog!",
    images: ["https://www.akwebsolutions.nl/images/meta-image.jpg"], // Pas aan naar je eigen afbeelding
  },
};

export default function Landingspagina() {
  return (
    <>
      <LpHero />
      <LpUSP />
      <LpDiensten />
      <LpCTA />
      <LpReviews />
      <LpFAQ />
      <Contact />
    </>
  );
}
