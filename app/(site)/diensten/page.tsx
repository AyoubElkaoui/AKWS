import DienstInfo from "@/components/PackageDetails";
import DienstenHero from "@/components/DienstenHero";
import Contact from "@/components/DienstenContact";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Diensten - AK Web Solutions",
  description:
    "Ontdek de diensten van AK Web Solutions. Van professionele websites tot digitale maatwerkoplossingen, wij helpen jouw bedrijf online te groeien met conversiegerichte strategieën.",
  keywords:
    "diensten, webdesign, digitale oplossingen, maatwerk, SEO, online succes, AK Web Solutions",
  robots: "index, follow",
};

const DienstenPage = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <DienstenHero />
        <DienstInfo />
        <Contact />
      </Suspense>
    </main>
  );
};

export default DienstenPage;
