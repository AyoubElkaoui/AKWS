import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neem Contact Op - AK Web Solutions",
  description: "Heb je vragen of wil je meer weten over onze diensten? Neem eenvoudig contact op via ons contactformulier.",
  openGraph: {
    title: "Neem Contact Op - AK Web Solutions",
    description: "Vul ons contactformulier in en wij nemen snel contact met je op!",
    url: "https://www.akwebsolutions.nl/contact",
    type: "website",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Neem Contact Op - AK Web Solutions",
      },
    ],
  },
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;