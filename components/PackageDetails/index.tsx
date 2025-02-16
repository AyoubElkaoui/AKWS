"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CTA from "@/components/DienstenCTA";

const DienstenInfo = () => {
  const [includeBtw, setIncludeBtw] = useState(false);

  const toggleBtw = () => setIncludeBtw(!includeBtw);

  return (
    <section id="dienstenInfo" className="overflow-hidden pb-20 pt-15 text-gray-900 dark:text-gray-100 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1390 space-y-20 px-4 md:px-8 2xl:px-0">
        {/* BTW Toggle */}
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-bold">Onze Pakketten</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Kies het pakket dat bij jouw behoeften past.
            <strong> Prijzen zijn exclusief 21% BTW</strong> (klik hieronder om
            inclusief BTW te bekijken).
          </p>
          <label className="inline-flex items-center cursor-pointer mt-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={includeBtw}
              onChange={toggleBtw}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {includeBtw ? "Toon prijzen exclusief BTW" : "Toon prijzen inclusief BTW"}
            </span>
          </label>
        </div>

        {/* All-in pakketten */}
        <ServiceSection
          title="All-in Pakketten"
          intro="Complete oplossingen voor bedrijven die alles-in-één willen."
        >
          <PackageCard
            packageTitle="All-in Pakketten"
            title="Start Smart"
            basePrice={1000}
            monthly="Eenmalig"
            includeBtw={includeBtw}
            description="Een website, basis SEO en SEA om jouw bedrijf online te laten groeien."
            features={["Starter Website", "Basis SEO-optimalisatie", "Google My Business aanmelding"]}
          />
          <PackageCard
            packageTitle="All-in Pakketten"
            title="Pro Boost"
            basePrice={2000}
            monthly="Eenmalig"
            includeBtw={includeBtw}
            description="Professionele website, volledige SEO en SEA-optimalisatie."
            features={["Professional Website", "SEO Pro", "SEA Basis"]}
          />
          <PackageCard
            packageTitle="All-in Pakketten"
            title="Full-Service Marketing"
            basePrice={5000}
            monthly="Eenmalig"
            includeBtw={includeBtw}
            description="Enterprise Website, doorlopende marketing en ondersteuning."
            features={["Enterprise Website", "SEO Pro + SEA Pro", "Content creatie"]}
          />
        </ServiceSection>

        {/* Website Pakketten */}
        <ServiceSection
          title="Website Pakketten"
          intro="Voor klanten die een website of webshop willen laten bouwen."
        >
          <PackageCard
            packageTitle="Website Pakketten"
            title="Starter Website"
            basePrice={500}
            monthly="Eenmalig"
            includeBtw={includeBtw}
            description="Een basiswebsite voor kleine bedrijven die snel online willen."
            features={["Tot 5 pagina's", "Basis SEO-optimalisatie", "1 maand gratis support"]}
          />
          <PackageCard
            packageTitle="Website Pakketten"
            title="Professional Website"
            basePrice={1500}
            monthly="Eenmalig"
            includeBtw={includeBtw}
            description="Professionele website voor bedrijven die willen groeien."
            features={["Tot 10 pagina's + Blog", "Geavanceerde SEO", "3 maanden support"]}
          />
          <PackageCard
            packageTitle="Website Pakketten"
            title="Enterprise Website"
            basePrice={3000}
            monthly="Eenmalig"
            includeBtw={includeBtw}
            description="Volledige maatwerkoplossing inclusief API-koppelingen."
            features={["Meertaligheid", "UX/UI-ontwerp", "6 maanden support"]}
          />
        </ServiceSection>

        <CTA />

        {/* Hosting en Mailing */}
        <ServiceSection
          title="Hosting & Mailing"
          intro="Voor klanten die betrouwbare hosting en e-maildiensten willen."
        >
          <PackageCard
            packageTitle="Hosting en Mailing"
            title="Webhosting Basis"
            basePrice={10}
            monthly="Maandelijks"
            includeBtw={includeBtw}
            description="Betrouwbare hosting voor kleine websites."
            features={["1GB opslag", "SSL-certificaat", "Dagelijkse backups"]}
          />
          <PackageCard
            packageTitle="Hosting en Mailing"
            title="Webhosting Pro"
            basePrice={25}
            monthly="Maandelijks"
            includeBtw={includeBtw}
            description="Snelle hosting voor grotere websites."
            features={["10GB opslag", "Premium support", "Automatische updates"]}
          />
          <PackageCard
            packageTitle="Hosting en Mailing"
            title="Zakelijke Mail"
            basePrice={5}
            monthly="Maandelijks"
            includeBtw={includeBtw}
            description="Professioneel e-mailadres met je eigen domeinnaam."
            features={["10GB opslag", "Spamfilter", "Webmail toegang"]}
          />
        </ServiceSection>

        {/* SEO/SEA Pakketten */}
        <ServiceSection
          title="SEO/SEA Pakketten"
          intro="Voor bedrijven die beter gevonden willen worden op Google."
          className="seo-sea-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5" // Tailwind classes voor grid-layout
        >
          <PackageCard
            packageTitle="SEO en SEA Pakketten"
            title="SEO Start"
            basePrice={250}
            monthly="Maandelijks"
            includeBtw={includeBtw}
            description="Basis optimalisatie voor meer online zichtbaarheid."
            features={["5 pagina's optimalisatie", "1 maandelijkse rapportage"]}
            className="rounded-lg p-12.5 shadow-solid-10 border dark:border-strokedark bg-white dark:bg-blacksection flex flex-col justify-between h-full" // Aangepaste styling voor SEO/SEA-pakketten
          />
          <PackageCard
            packageTitle="SEO en SEA Pakketten"
            title="SEO Pro"
            basePrice={500}
            monthly="Maandelijks"
            includeBtw={includeBtw}
            description="Uitgebreide SEO-optimalisatie met blogcontent."
            features={["10 pagina's optimalisatie", "2 blogs per maand"]}
            className="rounded-lg p-12.5 shadow-solid-10 border dark:border-strokedark bg-white dark:bg-blacksection flex flex-col justify-between h-full" // Aangepaste styling voor SEO/SEA-pakketten
          />
          <PackageCard
            packageTitle="SEO en SEA Pakketten"
            title="SEA Start"
            basePrice={400}
            monthly="Maandelijks"
            includeBtw={includeBtw}
            description="Basis Google Ads-campagnes."
            features={["Eenvoudige campagnes", "Maandelijkse rapportage"]}
            className="rounded-lg p-12.5 shadow-solid-10 border dark:border-strokedark bg-white dark:bg-blacksection flex flex-col justify-between h-full0" // Aangepaste styling voor SEO/SEA-pakketten
          />
          <PackageCard
            packageTitle="SEO en SEA Pakketten"
            title="SEA Pro"
            basePrice={700}
            monthly="Maandelijks"
            includeBtw={includeBtw}
            description="Geavanceerde Google Ads-campagnes."
            features={["A/B-testen", "Gedetailleerde maandrapportage"]}
            className="rounded-lg p-12.5 shadow-solid-10 border dark:border-strokedark bg-white dark:bg-blacksection flex flex-col justify-between h-full" // Aangepaste styling voor SEO/SEA-pakketten
          />
        </ServiceSection>

        {/* Maatwerk */}
        <motion.div className="w-full rounded-lg border bg-white p-12.5 text-center shadow-solid-10 dark:border-strokedark dark:bg-blacksection">
          <h2 className="mb-4 text-3xl font-bold">Maatwerk</h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Voor bedrijven met unieke wensen bieden wij op maat gemaakte oplossingen.
          </p>
          <p className="font-bold text-black dark:text-white">Prijs op aanvraag.</p>
          <a
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark"
          >
            Neem contact op
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Sectie-component voor consistentie
const ServiceSection = ({
                          title,
                          intro,
                          children,
                          className = "", // Standaard lege class
                        }: {
  title: string;
  intro: string;
  children: React.ReactNode;
  className?: string; // Optionele class
}) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="mb-4 text-center text-3xl font-bold">{title}</h2>
    <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-400">{intro}</p>
    <div className={`grid grid-cols-1 gap-7.5 md:grid-cols-3 ${className}`}>{children}</div>
  </motion.div>
);

// Pakketkaart-component
const PackageCard = ({
                       title,
                       basePrice,
                       monthly,
                       includeBtw,
                       description,
                       features,
                       packageTitle,
                       className = "", // Optionele class voor aangepaste styling
                     }: {
  title: string;
  basePrice: number;
  monthly: string;
  includeBtw: boolean;
  description: string;
  features: string[];
  packageTitle: string;
  className?: string; // Optionele class
}) => {
  const price = includeBtw ? (basePrice * 1.21).toFixed(2) : basePrice.toFixed(2);
  const priceText = `€${price} ${monthly} ${includeBtw ? "(incl. BTW)" : "(excl. BTW)"}`;
  const router = useRouter();

  const handleSelectPackage = () => {
    const currentUrl = window.location.pathname;
    const queryParams = new URLSearchParams({
      package: encodeURIComponent(packageTitle),
      service: encodeURIComponent(title),
      subject: "Aanvraag Offerte",
    });
    router.push(`${currentUrl}?${queryParams.toString()}#contact`);
  };

  return (
    <motion.div className={`rounded-lg p-12.5 shadow-solid-10 border dark:border-strokedark bg-white dark:bg-blacksection flex flex-col justify-between h-full ${className}`}>
      <div>
        <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h3>
        <p className="text-sm text-black dark:text-manatee mb-4">{description}</p>
        <p className="text-black dark:text-white font-semibold mb-6">{priceText}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-black dark:text-manatee">
              <FaCheckCircle className="text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleSelectPackage}
        className="mt-6 block text-center px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark"
      >
        Kies dit pakket
      </button>
    </motion.div>
  );
};

export default DienstenInfo;