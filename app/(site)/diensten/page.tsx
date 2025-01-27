"use client";

import DienstenPricing from "@/components/DienstenPricing";
import DienstInfo from "@/components/PackageDetails";
import DienstenHero from "@/components/DienstenHero";
import CTA from "@/components/DienstenCTA";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

const DienstenPage = () => {
  return (
    <main>
      <DienstenHero />
      <DienstenPricing />
      <CTA />
      <DienstInfo />
      <Contact />
    </main>
  );
};

export default DienstenPage;
