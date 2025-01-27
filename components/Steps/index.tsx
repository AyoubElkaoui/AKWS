"use client";

import React from "react";

export const Step: React.FC = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400 text-teal-900 dark:bg-teal-800 dark:text-teal-300">
            Wat maakt ons uniek
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto dark:text-gray-100">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-200 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block dark:text-gray-700"
            >
              <defs>
                <pattern
                  id="dots-pattern"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#dots-pattern)" width="52" height="24" />
            </svg>
            <span className="relative">De</span>
          </span>{" "}
          snelle, slimme manier om te groeien
        </h2>
        <p className="text-base text-gray-700 md:text-lg dark:text-gray-400">
          Ontdek hoe onze gestructureerde aanpak jouw bedrijf helpt met
          duurzame oplossingen en innovatie.
        </p>
      </div>
      <div className="relative grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px dark:bg-gray-700" />
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5 dark:text-gray-100">
              Analyse
            </p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-teal-400 bg-indigo-50 dark:text-teal-300 dark:bg-gray-700">
              1
            </p>
          </div>
          <p className="text-sm text-gray-900 dark:text-gray-400">
            Wij bespreken jouw doelen en wensen om een helder beeld te krijgen
            van wat nodig is.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5 dark:text-gray-100">
              Ontwerp
            </p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-teal-400 bg-indigo-50 dark:text-teal-300 dark:bg-gray-700">
              2
            </p>
          </div>
          <p className="text-sm text-gray-900 dark:text-gray-400">
            We creëren een design dat aansluit bij jouw merkidentiteit en doelen.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5 dark:text-gray-100">
              Implementatie
            </p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-teal-400 bg-indigo-50 dark:text-teal-300 dark:bg-gray-700">
              3
            </p>
          </div>
          <p className="text-sm text-gray-900 dark:text-gray-400">
            Wij ontwikkelen jouw oplossing met de nieuwste technologieën.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5 dark:text-gray-100">
              Ondersteuning
            </p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-teal-400 bg-indigo-50 dark:text-teal-300 dark:bg-gray-700">
              4
            </p>
          </div>
          <p className="text-sm text-gray-900 dark:text-gray-400">
            Doorlopende ondersteuning om jouw bedrijf te laten groeien.
          </p>
        </div>
      </div>
    </div>
  );
};
