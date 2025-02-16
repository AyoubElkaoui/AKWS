"use client";

import { FaCheckCircle, FaShieldAlt, FaChartLine, FaHandsHelping } from "react-icons/fa";

export const CoreValuesFeature = () => {
  return (
    <div id="coreValues" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="max-w-xl lg:pr-16 mb-10 lg:mb-0 text-center lg:text-left">
          <h5 className="mb-6 text-3xl font-extrabold leading-none text-gray-900 dark:text-gray-100">
            Onze Kernwaarden
          </h5>
          <p className="text-gray-700 dark:text-gray-400">
            Bij AK Web Solutions zetten wij ons in voor jouw digitale succes door onze kernwaarden centraal te stellen:
            innovatie, betrouwbaarheid, resultaatgerichtheid en klantgerichtheid. Met een moderne aanpak zorgen wij
            ervoor dat jouw bedrijf groeit in een steeds veranderende digitale wereld.
          </p>
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <div className="max-w-md flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-900">
              <FaCheckCircle className="w-8 h-8 text-indigo-500 dark:text-indigo-300" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900 dark:text-gray-100">
              Innovatie
            </h6>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              We gebruiken de nieuwste technologieën om jouw bedrijf voorop te houden.
            </p>
          </div>
          <div className="max-w-md flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-900">
              <FaShieldAlt className="w-8 h-8 text-indigo-500 dark:text-indigo-300" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900 dark:text-gray-100">
              Betrouwbaarheid
            </h6>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Altijd beschikbaar en klaar om jouw website of marketing te ondersteunen.
            </p>
          </div>
          <div className="max-w-md flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-900">
              <FaChartLine className="w-8 h-8 text-indigo-500 dark:text-indigo-300" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900 dark:text-gray-100">
              Resultaatgericht
            </h6>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              We streven naar meetbare resultaten die jouw bedrijf laten groeien.
            </p>
          </div>
          <div className="max-w-md flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-900">
              <FaHandsHelping className="w-8 h-8 text-indigo-500 dark:text-indigo-300" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900 dark:text-gray-100">
              Klantgericht
            </h6>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Jouw doelen staan centraal in alles wat wij doen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesFeature;
