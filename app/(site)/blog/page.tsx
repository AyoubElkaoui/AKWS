import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export const revalidate = 60; // ISR: herlaad blogs elke 60 seconden

export default async function BlogOverview() {
  // Query voor het ophalen van blogs
  const query = `*[_type == "blog"]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    categories[]->{
      _id,
      title
    }
  }`;
  const blogs = await client.fetch(query);

  // Als er geen blogs zijn, een fallback
  if (!blogs || blogs.length === 0) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Geen blogs gevonden</h1>
      </div>
    );
  }

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold mb-6">Blogs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog: any) => (
              <Link
                href={`/blog/${blog.slug?.current}`}
                key={blog._id}
                className="block group"
              >
                {/* Afbeelding */}
                {blog.mainImage ? (
                  <img
                    src={urlFor(blog.mainImage).url()}
                    alt={blog.title}
                    className="w-full h-40 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
                    <p className="text-gray-500">Geen afbeelding</p>
                  </div>
                )}

                {/* Titel */}
                <h2 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {blog.title}
                </h2>

                {/* Datum */}
                <p className="text-gray-500 text-sm">
                  Gepubliceerd op: {new Date(blog.publishedAt).toLocaleDateString()}
                </p>

                {/* Categorieën */}
                {blog.categories && blog.categories.length > 0 && (
                  <div className="mt-2 text-sm text-gray-500">
                    Categorieën:{" "}
                    {blog.categories
                      .map((category: any) => category.title)
                      .join(", ")}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
        );
        }
