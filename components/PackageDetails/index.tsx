"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const DienstenInfo = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset zodat de titel zichtbaar is
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="overflow-hidden pb-20 pt-15 text-gray-900 dark:text-gray-100 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1390 space-y-20 px-4 md:px-8 2xl:px-0">
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-bold">Onze Pakketten</h1>
          <p
            id="starter-website"
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Kies het pakket dat bij jouw behoeften past. Van websites tot
            complete marketingoplossingen.
          </p>
        </div>

        {/* Website Pakketten */}
        <motion.div
          id=""
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-center text-3xl font-bold">
            Website Pakketten
          </h2>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-3">
            <PackageCard
              title="Starter Website"
              subtitle="Voor kleine bedrijven die snel online willen."
              description="Gemaakt met WordPress en een gebruiksvriendelijk thema zoals Astra. Perfect voor ZZP'ers en kleine bedrijven."
              price="€500 - eenmalig"
              features={[
                "Responsive website (tot 5 pagina's)",
                "Basis SEO-optimalisatie",
                "Gratis support voor 1 maand",
              ]}
            />
            <PackageCard
              title="Professional Website"
              subtitle="Voor bedrijven die professioneel willen overkomen."
              description="Gebouwd in WordPress of Next.js. Geoptimaliseerd voor snelheid, SEO, en een modern ontwerp."
              price="€1.500 - eenmalig"
              features={[
                "Tot 10 pagina's + Blog",
                "Geavanceerde SEO-optimalisatie",
                "Snelle laadtijd",
                "3 maanden gratis support",
              ]}
            />

            <PackageCard
              id= "seo-pro"
              title="Enterprise Website"
              subtitle="Voor grote projecten en maatwerk oplossingen."
              description="Volledig op maat gemaakt in Next.js of WordPress, inclusief geavanceerde functies zoals meertaligheid en API-integraties."
              price="€3.000+ - op maat"
              features={[
                "Meertaligheid",
                "UX/UI-ontwerp inbegrepen",
                "6 maanden gratis support"
              ]}
            />

          </div>
        </motion.div>

        {/* SEO/SEA Pakketten */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-center text-3xl font-bold">
            SEO/SEA Pakketten
          </h2>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
            <PackageCard
              title="SEO Start"
              subtitle="Voor bedrijven die lokaal beter gevonden willen worden."
              description="Inclusief zoekwoordenonderzoek en optimalisatie van bestaande pagina's."
              price="€250/maand"
              features={[
                "Basis zoekwoordenonderzoek",
                "Optimalisatie van 5 pagina's",
                "1 rapportage per maand",
              ]}
            />
            <PackageCard
              title="SEO Pro"
              subtitle="Voor bedrijven die maximale online zichtbaarheid willen."
              description="Uitgebreide SEO-optimalisatie inclusief technische verbeteringen en contentcreatie."
              price="€500/maand"
              features={[
                "Uitgebreid zoekwoordenonderzoek",
                "Optimalisatie van 10 pagina's",
                "Technische SEO",
                "Blogpost (2 per maand)",
              ]}
            />
            <PackageCard
              title="SEA Basis"
              subtitle="Voor bedrijven die willen starten met Google Ads."
              description="Opzetten en beheren van Google Ads-campagnes met basisrapportage."
              price="€300/maand"
              features={[
                "Doelgroepenonderzoek",
                "Google Ads-campagne opzetten",
                "Basisrapportage",
              ]}
            />
            <PackageCard
              id="pro-boost"
              title="SEA Pro"
              subtitle="Voor bedrijven die hun advertenties willen optimaliseren."
              description="Geavanceerde Google Ads-optimalisatie inclusief A/B-testen en gedetailleerde rapportage."
              price="€700/maand"
              features={[
                "Geavanceerde Google Ads-optimalisatie",
                "A/B-testen van advertenties",
                "Gedetailleerde maandelijkse rapportage",
              ]}
            />
          </div>
        </motion.div>

        {/* Combinatie Pakketten */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-center text-3xl font-bold">
            Combinatie Pakketten
          </h2>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-3">
            <PackageCard
              title="Start Smart"
              subtitle="Voor kleine bedrijven die willen starten met alles-in-één."
              description="Starter Website gecombineerd met SEO en SEA om jouw bedrijf te laten groeien."
              price="€750 - eenmalig"
              features={[
                "Starter Website",
                "Basis SEO-optimalisatie",
                "Google My Business aanmelding",
              ]}
            />
            <PackageCard
              title="Pro Boost"
              subtitle="Voor bedrijven die alles willen: professioneel en vindbaar."
              description="Combineert een professionele website met volledige SEO- en SEA-optimalisatie."
              price="€2.000 - eenmalig + €500/maand"
              features={[
                "Professional Website",
                "SEO Pro",
                "SEA Basis",
                "Landingspagina's voor advertenties",
              ]}
            />
            <PackageCard
              id="enterprise-website"
              title="Full-Service Marketing"
              subtitle="Voor bedrijven die volledig ontzorgd willen worden."
              description="Enterprise Website met doorlopende ondersteuning, contentcreatie en meer."
              price="€5.000+ - op maat"
              features={[
                "Enterprise Website",
                "SEO Pro + SEA Pro",
                "Content creatie (blog, sociale media)",
              ]}
            />
          </div>
        </motion.div>

        {/* Maatwerk */}
        <motion.div
          id="maatwerk"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-center text-3xl font-bold">Maatwerk</h2>
          <div className="rounded-lg border bg-white p-12.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection">
            <p className="mb-6 text-center text-md text-black dark:text-manatee">
              Voor klanten met unieke wensen die buiten de standaard pakketten
              vallen. Wij combineren websitebouw, SEO, SEA en maatwerkfuncties
              voor jouw behoeften.
            </p>
            <p className="text-center font-bold text-black dark:text-white">
              Prijs op aanvraag.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PackageCard = ({
                       id,
                       title,
                       subtitle,
                       description,
                       price,
                       features,
                     }: any) => (
  <motion.div

    className="rounded-lg p-12.5 shadow-solid-10 border dark:border-strokedark bg-white dark:bg-blacksection w-full flex flex-col justify-between h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div>
      <h3 id={id} className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h3>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
        {subtitle}
      </p>
      <p className="text-sm text-black dark:text-manatee mb-4">{description}</p>
      <p className="text-black dark:text-white font-semibold mb-6">{price}</p>
      <ul className="space-y-3">
        {features.map((feature: string, index: number) => (
          <li
            key={index}
            className="flex items-center gap-2 text-black dark:text-manatee"
          >
            <FaCheckCircle className="text-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default DienstenInfo;
