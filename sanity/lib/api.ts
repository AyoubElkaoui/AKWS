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
export async function getLatestBlogs() {
  return await client.fetch(
    `*[_type == "blog"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      mainImage,
      metadata,
      body,
      author,
      tags,
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
    { slug },
  );
}

export async function getRelatedBlogs(categories: string[], currentSlug: string) {
  return await client.fetch(
    `*[_type == "blog" && references($categories) && slug.current != $currentSlug] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug { current },
      mainImage
    }`,
    { categories, currentSlug }
  );
}
// Haalt alle blogs op die horen bij een specifieke categorie
export async function getBlogsByCategory(categorySlug: string) {
  return await client.fetch(
    `*[_type == "blog" && references(*[_type=="category" && slug.current == $categorySlug]._id)] {
      _id,
      title,
      slug { current },
      mainImage,
      metadata,
      body,
      author,
      tags,
    }`,
    { categorySlug }
  );
}
