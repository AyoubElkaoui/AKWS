import { Metadata } from "next";
import { getBlogsByCategory } from "@/sanity/lib/api";
import BlogItem from "@/components/Blog/BlogItem";

type Props = {
  params: Promise<{ slug: string }>;
};

// Dynamische metadata genereren op basis van de slug
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const title = `Blogs in de categorie ${slug} - AK Web Solutions`;
  const description = `Ontdek interessante artikelen en inzichten binnen de categorie ${slug}. Lees onze blogs op AK Web Solutions.`;

  return {
    title,
    description,
    keywords: ["blogs", slug, "AK Web Solutions", "webdesign", "digital", "inzicht"],
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: `https://akwebsolutions.nl/blog/category/${slug}`,
      type: "website",
      images: [
        {
          url: "https://akwebsolutions.nl/og-image.jpg", // Pas dit aan naar een relevante afbeelding
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://akwebsolutions.nl/og-image.jpg"],
      site: "@akwebsolutions",
    },
  };
}

const CategoryPage = async (props: Props) => {
  const params = await props.params;
  const blogs = await getBlogsByCategory(params.slug);

  if (!blogs.length) {
    return (
      <p className="text-black dark:text-white">
        Geen blogs gevonden in deze categorie.
      </p>
    );
  }

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Pagina header */}
        <div className="animate_top mx-auto text-center">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
            Blogs in deze categorie
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Ontdek interessante artikelen en inzichten binnen deze categorie.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 mt-10">
          {blogs.map((blog) => {
            // PortableText body ophalen en samenvatten
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
              <BlogItem
                key={blog._id}
                blog={blog}
                summary={summary}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
