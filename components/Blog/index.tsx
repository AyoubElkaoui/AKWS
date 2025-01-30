import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { getLatestBlogs } from "@/sanity/lib/api";
import BlogItem from "./BlogItem";

const Blog = async () => {
  const blogs = await getLatestBlogs();
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Sectietitel Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NIEUWS & BLOGS`,
              subtitle: `Laatste nieuws & blogs`,
              description: `Blijf op de hoogte van de laatste trends, tips en inzichten om je bedrijf online te laten groeien.`,
            }}
          />
        </div>
        {/* <!-- Sectietitel Einde --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {blogs.map((blog) => {
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

            return <BlogItem blog={blog} key={blog._id} summary={summary} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
