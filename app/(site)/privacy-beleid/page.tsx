import { Metadata } from "next";
import ClientHeader from "@/app/(site)/algemene-voorwaarden/ClientHeader";

export const metadata: Metadata = {
  title: "Privacybeleid - AK Web Solutions",
  description:
    "Lees het privacybeleid van AK Web Solutions. Wij hechten veel waarde aan de bescherming van uw persoonsgegevens en verwerken deze zorgvuldig in overeenstemming met de AVG.",
  keywords:
    "privacybeleid, AK Web Solutions, persoonsgegevens, AVG, GDPR, privacy, beveiliging, ZZP",
  robots: "index, follow",
};

export default function Privacybeleid() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto pb-20 pt-40">
      <ClientHeader
        smallText="Privacybeleid"
        title="Privacy"
        subtitle="Wij beschermen uw persoonsgegevens in overeenstemming met de AVG."
        decorativeText="beleid"
        ctaText="Neem contact op"
        ctaLink="/contact"
      />

      {/* Content Sections */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">1. Inleiding</h2>
        <p className="text-gray-600 dark:text-gray-400">
          AK Web Solutions, een zelfstandig ondernemer (ZZP) gevestigd in Nederland, respecteert uw privacy en beschermt uw persoonsgegevens. In dit privacybeleid leggen wij uit hoe wij omgaan met de gegevens die u aan ons verstrekt wanneer u onze website bezoekt of gebruikmaakt van onze diensten.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">2. Verzameling en Gebruik van Persoonsgegevens</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wij verzamelen en verwerken persoonsgegevens die u ons vrijwillig verstrekt, bijvoorbeeld wanneer u contact opneemt, een offerte aanvraagt of zich inschrijft voor onze nieuwsbrief. Deze gegevens kunnen onder meer bestaan uit uw naam, e-mailadres, telefoonnummer en andere relevante informatie.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">3. Rechtsgrondslag voor de Verwerking</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wij verwerken uw persoonsgegevens uitsluitend op basis van wettelijke grondslagen, zoals de uitvoering van een overeenkomst, uw toestemming of een gerechtvaardigd belang.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">4. Bewaartermijn</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is voor het doel waarvoor zij zijn verzameld, tenzij een langere bewaartermijn wettelijk verplicht is.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">5. Delen van Gegevens</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Uw gegevens worden niet verkocht of gedeeld met derden, tenzij dit noodzakelijk is voor de uitvoering van onze diensten of wettelijk verplicht is. In dat geval treffen wij de nodige beveiligingsmaatregelen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">6. Beveiliging</h2>
        <p className="text-gray-600 dark:text-gray-400">
          AK Web Solutions neemt passende technische en organisatorische maatregelen om uw persoonsgegevens te beveiligen tegen verlies, diefstal en onbevoegde toegang.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">7. Uw Rechten</h2>
        <p className="text-gray-600 dark:text-gray-400">
          U heeft het recht op inzage, correctie of verwijdering van uw persoonsgegevens. Ook kunt u bezwaar maken tegen de verwerking en heeft u recht op gegevensoverdraagbaarheid. Voor verzoeken of vragen kunt u contact met ons opnemen via de contactgegevens op onze website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">8. Wijzigingen in dit Privacybeleid</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wij behouden ons het recht voor dit privacybeleid te wijzigen. Eventuele wijzigingen worden op deze pagina gepubliceerd en treden in werking op de datum van publicatie.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">9. Contact</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Voor vragen over dit privacybeleid of de verwerking van uw persoonsgegevens kunt u contact met ons opnemen via de contactgegevens op onze website.
        </p>
      </section>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Laatste update: 01-02-2025
      </p>
    </main>
  );
}
