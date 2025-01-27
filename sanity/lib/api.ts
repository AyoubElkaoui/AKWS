import { client } from "./client";

export async function getBlogs() {
  return await client.fetch(
    `*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      metadata,
      body,
      author,
      tags,
      publishedAt,
    }`
  );
}

export async function getBlogBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      metadata,
      body,
      author,
      tags,
      publishedAt,
    }`,
    { slug }
  );
}

export async function getCategories() {
  const query = `*[_type == "category"] {
    _id,
    title,
    slug
  }`;
  return await client.fetch(query);
}
