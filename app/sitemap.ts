import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://akwebsolutions.nl";

  // Statische pagina's (gebruik de paden die je op je site hebt)
  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/diensten`, lastModified: new Date() },
    { url: `${baseUrl}/over-ons`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacybeleid`, lastModified: new Date() },
    { url: `${baseUrl}/algemene-voorwaarden`, lastModified: new Date() },
    { url: `${baseUrl}/veel-gestelde-vragen`, lastModified: new Date() },
  ];

  // Dynamische blogpagina's ophalen uit Sanity
  const blogQuery = `*[_type == "blog"]{ "slug": slug.current }`;
  const blogs = await client.fetch(blogQuery);
  const blogPages = blogs.map((blog: { slug: string }) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
  }));

  // Dynamische categoriepagina's ophalen uit Sanity
  const categoryQuery = `*[_type == "category"]{ "slug": slug.current }`;
  const categories = await client.fetch(categoryQuery);
  const categoryPages = categories.map((cat: { slug: string }) => ({
    url: `${baseUrl}/categorie/${cat.slug}`,
    lastModified: new Date(),
  }));

  // Combineer statische en dynamische pagina's
  return [...staticPages, ...blogPages, ...categoryPages];
}
