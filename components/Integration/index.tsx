"use client";
import { motion } from "motion/react";
import { FaHtml5, FaJs, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiWordpress, SiGoogleanalytics, SiTailwindcss, SiPhp, SiCss3} from "react-icons/si";
import Image from "next/image";

const projects = [
  {
    title: "AD-Loodgietersbedrijf",
    description:
      "Een loodgietersbedrijf website gebouwd in Next.js met JavaScript. Focus op snelheid, SEO, en gebruiksvriendelijkheid. Ideaal voor klanten die lokaal een loodgieter zoeken.",
    image: "/images/projects/ad_loodgieter.png",
    link: "https://www.adloodgietersbedrijf.nl/",
    tech: [RiNextjsFill, FaHtml5, FaJs, SiGoogleanalytics, SiTailwindcss, SiCss3, FaNodeJs  ],
  },
  {
    title: "Full-Stack Developer Portfolio",
    description:
      "Een moderne portfolio gebouwd voor een full-stack developer om vaardigheden en projecten te presenteren. De website, gebouwd in Next.js met TypeScript, legt de nadruk op een gestroomlijnde gebruikerservaring en optimale prestaties. Ideaal om klanten en werkgevers te overtuigen.",
    image: "/images/projects/ayoub_ek.png",
    link: "https://ayoubelkaoui.nl/",
    tech: [RiNextjsFill, SiTypescript, SiGoogleanalytics, SiTailwindcss, SiCss3, FaNodeJs  ],
  },
  {
    title: "ProBandenService",
    description:
      "Een servicegerichte website gebouwd met WordPress en het Astra-thema. SEO is volledig geïntegreerd voor lokale zichtbaarheid en klantenwerving.",
    image: "/images/projects/pro_banden_service.png",
    link: "https://www.probandenservice.nl/",
    tech: [SiWordpress, SiGoogleanalytics, SiPhp, SiCss3 ],
  },
];

export default function Projects() {
  return (
    <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
      <div className="mx-auto max-w-c-1154">
        <motion.h2
          className="mb-7 text-3xl font-bold text-black dark:text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Our Work
        </motion.h2>
        <motion.p
          className="mb-14 text-center text-sm md:text-base text-manatee dark:text-waterloo max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Een overzicht van de projecten waar we trots op zijn. Elk project
          is gericht op gebruiksvriendelijkheid, snelheid en de toepassing van
          SEO voor maximale online zichtbaarheid.
        </motion.p>
        <div className="space-y-18">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-8 items-center bg-white dark:bg-btndark rounded-lg p-10 shadow-solid-5`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -150 : 150,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              {/* Afbeelding */}
              <div className="flex-shrink-0 w-full md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={450}
                  className="rounded-lg mx-auto shadow-solid-3"
                />
              </div>

              {/* Inhoud */}
              <div className="flex-1 w-full">
                <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-manatee dark:text-waterloo hover:underline text-sm mb-4 block hover:text-black dark:hover:text-white"
                >
                  {project.link}
                </a>
                <p className="text-sm text-manatee dark:text-waterloo mb-6">
                  {project.description}
                </p>
                <div className="flex gap-4 mb-6">
                  {project.tech.map((Icon, i) => (
                    <Icon
                      key={i}
                      className="text-3xl text-manatee dark:text-white hover:text-primary transition"
                    />
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-manatee dark:text-waterloo py-3 hover:text-black dark:hover:text-white rounded-lg transition"
                >
                  Bekijk project <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
