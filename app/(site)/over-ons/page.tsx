
import { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { Step } from "@/components/Steps";
import Contact from "@/components/Contact";
import CTA from "@/components/DienstenCTA";
import Hero from "@/components/OverOnsHero";
import CoreValues from "@/components/CoreValues";
import Projects from "@/components/OverOnsProjects";
import Testimonial from "@/components/Testimonial";

// Uitgebreide metadata voor de Over Ons pagina
export const metadata: Metadata = {
  title: "Over Ons - AK Web Solutions",
  description:
    "Ontdek het verhaal achter AK Web Solutions, onze kernwaarden, projecten en hoe wij jouw digitale succes vormgeven. Maak kennis met ons team en onze visie op maat gemaakte digitale oplossingen.",
  keywords:
    "Over Ons, AK Web Solutions, webdesign, digitale oplossingen, kernwaarden, projecten, team, visie",
  robots: "index, follow",
};

const AboutUs = () => {
  return (
    <>
      <Hero />
      <CoreValues />
      <Step />
      <CTA />
      <Projects />
      <Testimonial />
      <Contact />
    </>
  );
};

const ValueCard = ({
                     title,
                     description,
                   }: {
  title: string;
  description: string;
}) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-bold text-black dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </div>
);

export default AboutUs;
