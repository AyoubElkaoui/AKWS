"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Kies jouw pakket`,
                description: `Onze pakketten zijn ontworpen om aan de behoeften van elk bedrijf te voldoen, of het nu gaat om websitebouw, SEO, SEA of een combinatie daarvan.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* Starter Website */}
            <div className="animate_top group relative flex flex-col justify-between rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 h-full">
              <div>
                <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  €500{" "}
                  <span className="text-regular text-waterloo dark:text-manatee">
                    /eenmalig
                  </span>
                </h3>
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Starter Website
                </h4>
                <p>Een eenvoudige, responsieve website voor kleine bedrijven.</p>
                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                  <ul>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Tot 5 pagina's
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Basis SEO-optimalisatie
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      WordPress met Astra-thema
                    </li>
                    <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                      1 maand support
                    </li>
                  </ul>
                </div>
              </div>
              <button className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary mt-auto">
                <span className="duration-300 group-hover/btn:pr-2">
                  Kies dit pakket
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* Pro Boost */}
            <div className="animate_top group relative flex flex-col justify-between rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 h-full">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                Uitgelicht
              </div>
              <div>
                <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  €2.000{" "}
                  <span className="text-regular text-waterloo dark:text-manatee">
                    eenmalig + €500/maand
                  </span>
                </h3>
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Pro Boost
                </h4>
                <p>Een compleet pakket voor bedrijven die alles-in-één willen.</p>
                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                  <ul>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Professional Website (WordPress of maatwerk)
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      SEO Pro
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      SEA Basis
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      3 landingspagina's
                    </li>
                  </ul>
                </div>
              </div>
              <button className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary mt-auto">
                <span className="duration-300 group-hover/btn:pr-2">
                  Kies dit pakket
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* SEO Start */}
            <div className="animate_top group relative flex flex-col justify-between rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 h-full">
              <div>
                <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  €250{" "}
                  <span className="text-regular text-waterloo dark:text-manatee">
                    /maand
                  </span>
                </h3>
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  SEO Start
                </h4>
                <p>Een instappakket voor bedrijven die hun online zichtbaarheid willen vergroten.</p>
                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                  <ul>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Basis zoekwoordenonderzoek
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Optimalisatie van 5 pagina's
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Lokale zoekoptimalisatie
                    </li>
                    <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                      1 maandelijkse rapportage
                    </li>
                  </ul>
                </div>
              </div>
              <button className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary mt-auto">
                <span className="duration-300 group-hover/btn:pr-2">
                  Kies dit pakket
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Bekijk alle pakketten */}
          <div className="mt-20 text-center">
            <h4 className="mb-4 text-lg font-bold text-black dark:text-white">
              Op zoek naar een ander pakket?
            </h4>
            <p className="mb-6 text-manatee dark:text-waterloo">
              Ontdek al onze beschikbare opties op de dienstenpagina.
            </p>
            <a
              href="/diensten"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryho transition"
            >
              Bekijk alle pakketten <span>→</span>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
