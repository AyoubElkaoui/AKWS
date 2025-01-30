import { getBlogsByCategory } from "@/sanity/lib/api";
import BlogItem from "@/components/Blog/BlogItem";

type Props = {
  params: { slug: string };
};

const CategoryPage = async ({ params }: Props) => {
  const blogs = await getBlogsByCategory(params.slug);

  if (!blogs.length) {
    return <p className="text-black dark:text-white">Geen blogs gevonden in deze categorie.</p>;
  }

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* ✅ Toegevoegde header */}
        <div className="animate_top mx-auto text-center">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
            Blogs in deze categorie
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Ontdek interessante artikelen en inzichten binnen deze categorie.
          </p>
        </div>

        {/* ✅ Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 mt-10">
          {blogs.map((blog) => {
            // ✅ **PortableText body ophalen en samenvatten**
            let summary = "Geen samenvatting beschikbaar.";
            if (Array.isArray(blog.body) && blog.body.length > 0) {
              const firstBlock = blog.body.find((block) => block._type === "block");
              if (firstBlock && firstBlock.children) {
                summary = firstBlock.children
                  .map((child) => (child._type === "span" ? child.text : ""))
                  .join(" ")
                  .slice(0, 150) + "...";
              }
            }

            return (
              <BlogItem
                key={blog._id}
                blog={blog} // ✅ blog correct doorgeven
                summary={summary} // ✅ Doorsturen samenvatting
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
