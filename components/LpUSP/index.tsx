"use client";
import featuresData from "@/components/Features/featuresData";
import SingleFeature from "@/components/Features/SingleFeature";
import SectionHeader from "@/components/Common/SectionHeader";

const LpFeatures = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "Waarom AK Web Solutions?",
            subtitle: "Jouw Voordelen",
            description: `Wij helpen bedrijven groeien met snelle, veilige en goed vindbare websites. Van design tot marketing: alles op één plek.`,
          }}
        />

        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
          {featuresData.map((feature, key) => (
            <SingleFeature feature={feature} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LpFeatures;
