"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Step } from "@/components/Steps";
import Contact from "@/components/Contact";
import CTA from "@/components/DienstenCTA";
import Hero from "@/components/OverOnsHero";
import CoreValues from "@/components/CoreValues";
import Projects from "@/components/OverOnsProjects";
import Testimonial from "@/components/Testimonial";


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

const ValueCard = ({ title, description }: { title: string; description: string }) => (
  <motion.div
    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="text-xl font-bold text-black dark:text-white mb-3">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </motion.div>
);

export default AboutUs;
