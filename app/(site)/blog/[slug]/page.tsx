import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import React from "react";
import Image from "next/image";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Link from "next/link";

// Props definitie voor de slug
type BlogProps = {
  params: Promise<{ slug: string }>;
};

async function getBlogData(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    mainImage,
    body,
    categories[]->{
      title,
      slug
    },
    author->{
      name,
      image
    },
    publishedAt
  }`;

  const data = await client.fetch(query, { slug });
  return data;
}

// Dynamisch metadata genereren op basis van de bloginhoud
export async function generateMetadata(props: BlogProps): Promise<Metadata> {
  const params = await props.params;
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return {
      title: "Blog niet gevonden - AK Web Solutions",
      description: "Deze blog is niet beschikbaar.",
    };
  }

  // Probeer een korte beschrijving uit de blogbody te genereren (max 160 tekens)
  let description = "";
  if (Array.isArray(blog.body) && blog.body.length > 0) {
    const firstBlock = blog.body.find(
      (block: any) => block._type === "block" && block.children
    );
    if (firstBlock) {
      description = firstBlock.children
        .map((child: any) => (child._type === "span" ? child.text : ""))
        .join(" ")
        .slice(0, 160);
    }
  }
  if (!description) {
    description = blog.title;
  }

  return {
    title: `${blog.title} - AK Web Solutions`,
    description,
    keywords: ["blog", "webdesign", "AK Web Solutions", blog.title],
    robots: "index, follow",
    openGraph: {
      title: `${blog.title} - AK Web Solutions`,
      description,
      url: `https://akwebsolutions.nl/blog/${params.slug}`,
      type: "article",
      images: blog.mainImage
        ? [
          {
            url: urlFor(blog.mainImage).url(),
            alt: blog.title,
            width: 1200,
            height: 630,
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} - AK Web Solutions`,
      description,
      images: blog.mainImage ? [urlFor(blog.mainImage).url()] : [],
      site: "@akwebsolutions",
    },
  };
}

export default async function BlogPage(props: BlogProps) {
  const params = await props.params;
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return (
      <p className="text-black dark:text-white">Blog niet gevonden</p>
    );
  }

  return (
    <section className="bg-white pb-20 pt-35 dark:bg-blacksection lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          {/* Sidebar met categorieën */}
          <div className="md:w-1/2 lg:w-[32%]">
            <div className="animate_top mb-10 rounded-lg border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
              <h4 className="mb-7.5 text-2xl font-bold text-black dark:text-white">
                Categorieën
              </h4>
              <ul>
                {blog.categories?.length > 0 ? (
                  blog.categories.map((category: any, index: number) => (
                    <li
                      key={index}
                      className="mb-3 text-gray-600 dark:text-gray-400"
                    >
                      {category?.slug?.current ? (
                        <Link
                          href={`/categorie/${category.slug.current}`}
                          className="hover:text-primary"
                        >
                          {category.title}
                        </Link>
                      ) : (
                        <span>{category.title}</span>
                      )}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">
                    Geen categorieën beschikbaar
                  </li>
                )}
              </ul>
            </div>

            <RelatedPost
              categories={
                blog.categories
                  ?.map((c: any) => c?.slug?.current)
                  .filter(Boolean) || []
              }
              currentSlug={params.slug}
            />
          </div>

          {/* Blog Content */}
          <div className="lg:w-2/3">
            <div className="border-border rounded-lg border bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection">
              <div className="mb-10">
                {blog.mainImage && (
                  <Image
                    src={urlFor(blog.mainImage).url()}
                    alt={blog.title}
                    width={800}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                )}
              </div>

              <h1 className="mb-5 text-4xl font-bold text-black dark:text-white">
                {blog.title}
              </h1>
              <div className="mb-5 text-sm text-gray-600 dark:text-gray-400">
                <p>
                  Gepubliceerd op:{" "}
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </p>
                {blog.author?.name && <p>Auteur: {blog.author.name}</p>}
              </div>

              <div className="blog-content space-y-4">
                <PortableText
                  value={blog.body}
                  components={{
                    block: {
                      h1: ({ children }) => (
                        <h1 className="my-4 text-4xl font-bold text-black dark:text-white">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="my-3 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="my-3 text-2xl font-medium text-gray-700 dark:text-gray-300">
                          {children}
                        </h3>
                      ),
                      normal: ({ children }) => (
                        <p className="my-2 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                          {children}
                        </p>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="my-2 ml-5 list-disc space-y-2 text-gray-600 dark:text-gray-400">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="my-2 ml-5 list-decimal space-y-2 text-gray-600 dark:text-gray-400">
                          {children}
                        </ol>
                      ),
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong className="font-bold text-gray-800 dark:text-gray-200">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-gray-700 dark:text-gray-300">
                          {children}
                        </em>
                      ),
                      link: ({ value, children }) => (
                        <a
                          href={value?.href}
                          target={value?.openInNewTab ? "_blank" : "_self"}
                          rel={
                            value?.openInNewTab
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="dark:text-primarylight text-primary underline"
                        >
                          {children}
                        </a>
                      ),
                    },
                    types: {
                      image: ({ value }) => (
                        <div className="my-5">
                          <img
                            src={urlFor(value.asset).url()}
                            alt={value.alt || "Afbeelding"}
                            className="mx-auto h-auto max-w-full rounded-lg shadow-lg"
                          />
                          {value.caption && (
                            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                              {value.caption}
                            </p>
                          )}
                        </div>
                      ),
                    },
                  }}
                />
              </div>

              <div className="border-border dark:border-darkborder bg-primary-light dark:bg-primarydark mt-10 rounded-lg border p-5">
                <h2 className="text-lg font-bold text-black dark:text-white">
                  Mis geen enkele update!
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Schrijf je in voor onze nieuwsbrief om op de hoogte te blijven.
                </p>
                <form action="#">
                  <div className="relative pt-3">
                    <input
                      type="email"
                      placeholder="Emailadres"
                      className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="Schrijf je in voor de nieuwsbrief"
                      className="absolute right-0 p-4"
                    >
                      <svg
                        className="fill-[#757693] hover:fill-primary dark:fill-white"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_48_1487)">
                          <path d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <SharePost slug={params.slug} categories={blog.categories} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
