"use client";

import { motion } from "framer-motion";

type CardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  id: string; // ID for linking to the relevant section
  highlight?: boolean;
};

const PricingCards = () => {
  const packages: CardProps[] = [
    {
      title: "Starter Website",
      price: "v/a €500",
      description: "Een eenvoudige, responsieve website voor kleine bedrijven.",
      features: ["Tot 5 pagina's", "Basis SEO-optimalisatie", "1 maand support"],
      id: "starter-website", // Correct ID for smooth scroll
    },
    {
      title: "Pro Boost",
      price: "v/a €750",
      description: "Een compleet pakket voor bedrijven die alles-in-één willen.",
      features: [
        "Professional Website",
        "SEO Pro",
        "SEA Basis",
        "3 landingspagina's",
      ],
      id: "pro-boost", // Correct ID for smooth scroll
      highlight: true,
    },
    {
      title: "SEO Pro",
      price: "v/a €250",
      description: "Vergroot jouw online zichtbaarheid.",
      features: [
        "Uitgebreid zoekwoordenonderzoek",
        "Optimalisatie van 10 pagina's",
        "Technische SEO",
      ],
      id: "seo-pro", // Correct ID for smooth scroll
    },
    {
      title: "Enterprise Website",
      price: "Prijs op aanvraag",
      description: "Voor de meest veeleisende projecten.",
      features: [
        "Volledig maatwerk",
        "Meertaligheid",
        "API-integraties",
        "6 maanden support",
      ],
      id: "enterprise-website", // Correct ID for smooth scroll
    },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 text-gray-900 dark:text-gray-100 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0"
      >
        <div className="animate_top mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold">Kies jouw pakket</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Onze pakketten zijn ontworpen om aan de behoeften van elk bedrijf
            te voldoen, of het nu gaat om websitebouw, SEO, SEA of een combinatie
            daarvan.
          </p>
        </div>
        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:px-0">
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {packages.map((pkg, index) => (
              <Card key={index} {...pkg} onLinkClick={handleScroll} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

type CardComponentProps = CardProps & {
  onLinkClick: (id: string) => void;
};

const Card = ({
                title,
                price,
                description,
                features,
                id,
                highlight,
                onLinkClick,
              }: CardComponentProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`group relative flex flex-col justify-between rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[50%] lg:w-1/3 xl:p-12.5 h-full ${
      highlight ? "border-primary" : ""
    }`}
  >
    {highlight && (
      <div className="absolute -right-7 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-white font-medium uppercase">
        Uitgelicht
      </div>
    )}
    <div>
      <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white">
        {title}
      </h3>
      <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
        {price}
      </h4>
      <p className="text-gray-600">{description}</p>
      <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
        <ul>
          {features.map((feature, index) => (
            <li
              key={index}
              className="mb-4 text-black last:mb-0 dark:text-manatee"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <button
      onClick={() => onLinkClick(id)}
      className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary mt-auto"
    >
      Bekijk dit pakket →
    </button>
  </motion.div>
);

export default PricingCards;
