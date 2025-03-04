"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import Link from "next/link";

const services = [
  {
    title: "Webdesign",
    desc: "Unieke en conversiegerichte websites, perfect voor elk bedrijf.",
    link: "/diensten"
  },
  {
    title: "SEO - Zoekmachine Optimalisatie",
    desc: "Scoor hoger in Google en trek meer klanten aan met effectieve SEO-strategieën.",
    link: "/diensten"
  },
  {
    title: "Google Ads (SEA)",
    desc: "Meer leads en klanten via gerichte advertenties in Google Search & Display.",
    link: "/diensten"
  },
  {
    title: "Hosting & Onderhoud",
    desc: "Snelle, veilige en betrouwbare hosting met continue ondersteuning.",
    link: "/diensten"
  },
];

const LpDiensten = () => {
  return (
    <section className="py-10 lg:py-15 xl:py-20">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Title */}
        <SectionHeader
          headerInfo={{
            title: "Onze Diensten",
            subtitle: "Alles voor Jouw Online Groei",
            description: `Of je nu een nieuwe website nodig hebt, beter gevonden wilt worden in Google of meer klanten wilt via advertenties - wij hebben de oplossing.`,
          }}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5 py-7.5">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-7.5 shadow-solid-3 dark:bg-blacksection transition-all duration-300 hover:shadow-solid-4 hover:bg-gray-50 dark:hover:bg-hoverdark"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-700 dark:text-waterloo">{service.desc}</p>
              <Link href={service.link}>
                <button className="mt-4 inline-flex items-center gap-2 text-primary hover:underline font-medium">
                  Meer weten? →
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LpDiensten;
