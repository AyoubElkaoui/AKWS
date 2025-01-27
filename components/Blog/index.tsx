import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog: React.FC = () => {
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
          {BlogData.slice(0, 3).map((blog) => (
            <BlogItem blog={blog} key={blog._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
