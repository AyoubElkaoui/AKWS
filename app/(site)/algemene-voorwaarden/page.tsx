import { Metadata } from "next";
import ClientHeader from "./ClientHeader"; // Dit is een aparte client component voor de header

export const metadata: Metadata = {
  title: "Algemene Voorwaarden - AK Web Solutions",
  description:
    "Lees de algemene voorwaarden van AK Web Solutions, uw partner in professioneel webdesign, SEO-optimalisatie en digitale maatwerkoplossingen. Deze voorwaarden zijn van toepassing op alle opdrachten en overeenkomsten.",
  keywords:
    "algemene voorwaarden, AK Web Solutions, webdesign, digitale diensten, SEO, maatwerk, ZZP, voorwaarden",
  robots: "index, follow",
};

export default function AlgemeneVoorwaarden() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto pb-20 pt-40">
      {/* Header: client-only component voor animatie */}
      <ClientHeader
          smallText="Onze Voorwaarden"
          title="Algemene"
          subtitle="Lees onze voorwaarden voor de levering van webdesign, SEO-optimalisatie en digitale oplossingen door AK Web Solutions."
          decorativeText="Voorwaarden"
          ctaText="Neem contact op"
          ctaLink="/contact"
      />
      {/* Content Sections */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">1. Inleiding</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, opdrachten en overeenkomsten tussen AK Web Solutions, een zelfstandig ondernemer (ZZP) gevestigd in Nederland, en haar opdrachtgevers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">2. Definities</h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>
            <strong>Opdrachtgever:</strong> Iedere natuurlijke of rechtspersoon die diensten afneemt van AK Web Solutions.
          </li>
          <li>
            <strong>Opdracht:</strong> De overeengekomen werkzaamheden, zoals webdesign, SEO-optimalisatie, digitale strategie en andere gerelateerde diensten.
          </li>
          <li>
            <strong>Diensten:</strong> Alle werkzaamheden, adviezen en digitale oplossingen die door AK Web Solutions worden geleverd.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">3. Toepasselijkheid</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Deze voorwaarden zijn van toepassing op alle aanbiedingen, offertes, opdrachten en overeenkomsten met betrekking tot de levering van digitale diensten door AK Web Solutions, tenzij schriftelijk anders overeengekomen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">4. Offertes en Overeenkomsten</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Alle offertes zijn vrijblijvend, tenzij een geldigheidsduur is vermeld. Een overeenkomst komt tot stand na schriftelijke bevestiging of uitdrukkelijk akkoord van beide partijen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">5. Uitvoering van de Diensten</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wij streven ernaar de afgesproken diensten – waaronder professionele webdesign, SEO-optimalisatie en digitale maatwerkoplossingen – naar beste vermogen uit te voeren. Bij vertragingen door onvoorziene omstandigheden wordt de opdrachtgever tijdig geïnformeerd.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">6. Betaling en Facturatie</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Alle tarieven zijn exclusief BTW en andere heffingen, tenzij anders vermeld. Betaling dient binnen 14 dagen na factuurdatum te geschieden, anders is de opdrachtgever in verzuim en kunnen wettelijke rente en incassokosten in rekening worden gebracht.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">7. Intellectueel Eigendom</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Alle intellectuele eigendomsrechten met betrekking tot ontwerpen, concepten, teksten, afbeeldingen en andere materialen ontwikkeld door AK Web Solutions berusten bij AK Web Solutions of haar licentiegevers. Gebruik zonder schriftelijke toestemming is niet toegestaan.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">8. Aansprakelijkheid</h2>
        <p className="text-gray-600 dark:text-gray-400">
          AK Web Solutions is uitsluitend aansprakelijk voor directe schade die het gevolg is van opzet of grove nalatigheid. In overige gevallen is de aansprakelijkheid beperkt tot het bedrag dat in het specifieke geval door de aansprakelijkheidsverzekering wordt uitgekeerd.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">9. Overmacht</h2>
        <p className="text-gray-600 dark:text-gray-400">
          In geval van overmacht, zoals storingen, natuurrampen of andere onvoorziene omstandigheden, is AK Web Solutions niet gehouden tot enige prestatieverplichting. De uitvoeringstermijn wordt verlengd met de periode van overmacht.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">10. Wijzigingen in de Voorwaarden</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wij behouden ons het recht voor deze voorwaarden te wijzigen. Wijzigingen worden op de website gepubliceerd en gelden vanaf publicatie, tenzij anders overeengekomen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">11. Toepasselijk Recht en Geschillen</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Op deze voorwaarden is Nederlands recht van toepassing. Alle geschillen die voortvloeien uit of verband houden met de overeenkomst worden voorgelegd aan de bevoegde rechter in Nederland.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">12. Slotbepalingen</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Indien één of meer bepalingen in deze voorwaarden nietig of vernietigbaar blijken te zijn, blijven de overige bepalingen volledig van kracht.
        </p>
      </section>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Laatste update: 01-02-2025
      </p>
    </main>
  );
}
