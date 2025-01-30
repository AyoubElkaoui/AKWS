"use client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import SectionHeader from "../Common/SectionHeader";

const BlogList = ({ blogs }: { blogs: any[] }) => {
  if (!blogs || blogs.length === 0) {
    return <p className="text-black dark:text-white">Geen blogs gevonden</p>;
  }

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* ✅ Toegevoegde sectietitel zoals in Blog.tsx */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NIEUWS & BLOGS`,
              subtitle: `Laatste nieuws & blogs`,
              description: `Blijf op de hoogte van de laatste trends, tips en inzichten om je bedrijf online te laten groeien.`,
            }}
          />
        </div>

        {/* ✅ Blog grid */}
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {blogs.map((blog) => {
              // ✅ Samenvatting van de eerste 150 tekens uit de body
              let summary = "Geen samenvatting beschikbaar.";
              if (Array.isArray(blog.body) && blog.body.length > 0) {
                const firstBlock = blog.body.find(
                  (block) => block._type === "block"
                );
                if (firstBlock && firstBlock.children) {
                  summary =
                    firstBlock.children
                      .map((child) =>
                        child._type === "span" ? child.text : ""
                      )
                      .join(" ")
                      .slice(0, 150) + "...";
                }
              }

              return (
                <Link
                  href={`/blog/${blog.slug?.current}`}
                  key={blog._id}
                  className="block group"
                >
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
                    {/* ✅ Afbeelding */}
                    {blog.mainImage ? (
                      <Image
                        src={urlFor(blog.mainImage).url()}
                        alt={blog.title}
                        width={368}
                        height={239}
                        className="w-full h-40 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                        <p className="text-gray-500 dark:text-gray-400">
                          Geen afbeelding
                        </p>
                      </div>
                    )}

                    {/* ✅ Titel */}
                    <h2 className="mt-4 text-xl font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primaryLight transition-colors duration-300">
                      {blog.title}
                    </h2>

                    {/* ✅ Samenvatting van body */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {summary}
                    </p>

                    {/* ✅ Datum */}
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                      Gepubliceerd op:{" "}
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </p>

                    {/* ✅ Lees Meer Link */}
                    <div className="mt-4">
                      <p className="text-primary dark:text-primaryLight font-semibold hover:underline">
                        Lees meer →
                      </p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
