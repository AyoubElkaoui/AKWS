import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getRelatedBlogs, getLatestBlogs } from "@/sanity/lib/api";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  categories: string[];
  currentSlug: string;
};

const RelatedPost: React.FC<Props> = async ({ categories, currentSlug }) => {
  let relatedBlogs = await getRelatedBlogs(categories, currentSlug);

  // Als er geen gerelateerde blogs zijn, toon de 3 nieuwste blogs
  if (!relatedBlogs || relatedBlogs.length === 0) {
    relatedBlogs = await getLatestBlogs();
  }

  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Gerelateerde blogs
      </h4>

      <div>
        {relatedBlogs.slice(0, 3).map((post) => (
          <div
            className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
            key={post._id}
          >
            <div className="max-w-45 relative h-18 w-45">
              {post.mainImage ? (
                <Image
                  fill
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  className="rounded-lg object-cover"
                />
              ) : (
                "Geen afbeelding"
              )}
            </div>
            <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
              <Link href={`/blog/${post.slug.current}`}>
                {post.title.slice(0, 40)}...
              </Link>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;
