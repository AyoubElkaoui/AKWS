import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => (
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-black dark:text-white">{title}</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">{description}</p>
  </div>
);

export default SectionHeader;
