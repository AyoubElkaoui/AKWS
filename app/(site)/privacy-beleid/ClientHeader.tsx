"use client";
import { motion } from "motion/react";
import Image from "next/image";

type AnimatedHeaderProps = {
  smallText: string;
  title: string;
  subtitle: string;
  decorativeText?: string;
  ctaText?: string;
  ctaLink?: string;
};

export default function AnimatedHeader({
                                         smallText,
                                         title,
                                         subtitle,
                                         decorativeText,
                                         ctaText,
                                         ctaLink,
                                       }: AnimatedHeaderProps) {
  return (
    <div className="relative mb-12 text-center">
      {/* Achtergrondvorm */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 -z-10 h-16 w-16">
        <Image
          src="/images/shape/shape-dotted-light.svg"
          alt="Decoratieve vorm"
          fill
          className="dark:hidden"
        />
        <Image
          src="/images/shape/shape-dotted-light.svg"
          alt="Decoratieve vorm"
          fill
          className="hidden dark:block"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="px-4"
      >
        <span className="font-medium uppercase text-black dark:text-white">
          {smallText}
        </span>
        <h1 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
          {title}
          {decorativeText && (
            <span className="relative inline-block ml-2 before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
              {decorativeText}
            </span>
          )}
        </h1>
        <p className="mb-6 text-sm text-manatee dark:text-waterloo">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="group inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            <span className="duration-300 group-hover:pr-2">{ctaText}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                fill="currentColor"
              />
            </svg>
          </a>
        )}
      </motion.div>
    </div>
  );
}
