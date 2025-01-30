"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

type BlogItemProps = {
  blog: Blog;
  summary: string; // ✅ Voeg summary toe als expliciete prop
};

const BlogItem = ({ blog, summary }: BlogItemProps) => {
  const { mainImage, title, slug } = blog;

  // ✅ Zorg dat slug altijd een string is
  const slugString = typeof slug === "object" && slug !== null && "current" in slug
    ? String((slug as { current: string }).current)
    : String(slug || "");

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="animate_top rounded-lg border border-border dark:border-strokedark bg-white dark:bg-blacksection p-4 shadow-solid-8"
    >
      {/* ✅ Blog Afbeelding */}
      <Link href={`/blog/${slugString}`} className="relative block aspect-[368/239]">
        {mainImage ? (
          <Image
            src={urlFor(mainImage).url()}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        ) : (
          <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 h-48 rounded-lg">
            <span className="text-sm text-gray-500">Geen afbeelding</span>
          </div>
        )}
      </Link>

      <div className="px-4 py-3">
        {/* ✅ Blog Titel */}
        <h3 className="mb-3 text-md font-semibold text-black dark:text-white">
          <Link href={`/blog/${slugString}`} className="hover:text-primary dark:hover:text-primaryLight">
            {title.length > 60 ? `${title.slice(0, 60)}...` : title}
          </Link>
        </h3>

        {/* ✅ Body Tekst (Eerste 150 tekens) */}
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{summary}</p>

        {/* ✅ Lees Meer Link */}
        <div className="mt-4">
          <Link href={`/blog/${slugString}`} className="text-primary dark:text-primaryLight font-semibold hover:underline">
            Lees meer →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogItem;
