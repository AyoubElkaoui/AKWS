"use client";

import React from "react";

interface Package {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
}

const packages: Package[] = [
  {
    title: "Starter Website",
    price: "€500 - eenmalig",
    description: "Een eenvoudige, responsieve website voor kleine bedrijven.",
    features: ["5 Pagina's", "Basis SEO", "1 maand support"],
    buttonText: "Bekijk pakket",
    buttonLink: "/diensten/starter-website",
  },
  {
    title: "Professional Website",
    price: "€1.500 - eenmalig",
    description: "Voor bedrijven die een professionele uitstraling zoeken.",
    features: ["10 Pagina's", "Geavanceerde SEO", "3 maanden support"],
    buttonText: "Bekijk pakket",
    buttonLink: "/diensten/professional-website",
  },
  {
    title: "Enterprise Website",
    price: "€3.000+ - op maat",
    description: "Maatwerkoplossingen voor de meest veeleisende projecten.",
    features: ["Volledig op maat", "Volledige SEO", "6 maanden support"],
    buttonText: "Bekijk pakket",
    buttonLink: "/diensten/enterprise-website",
  },
];

const PricingComparison: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Vergelijk Pakketten</h2>

        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-left">
            <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3">Kenmerken</th>
              {packages.map((pkg, index) => (
                <th key={index} className="px-4 py-3 text-center">
                  {pkg.title}
                  <br />
                  <span className="text-sm text-gray-500">{pkg.price}</span>
                </th>
              ))}
            </tr>
            </thead>
            <tbody>
            {["5 Pagina's", "SEO-optimalisatie", "Ondersteuning"].map((feature, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-3">{feature}</td>
                {packages.map((pkg, j) => (
                  <td key={j} className="px-4 py-3 text-center">
                    {pkg.features[i]}
                  </td>
                ))}
              </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Kaarten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">{pkg.title}</h3>
              <p className="text-gray-500 mb-4">{pkg.price}</p>
              <p className="text-gray-700 mb-6">{pkg.description}</p>
              <a
                href={pkg.buttonLink}
                className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                {pkg.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
