import { client } from "@/sanity/lib/client";
import BlogList from "@/components/Blog/BlogList";

export const metadata = {
  title: "Blogs - Solid SaaS Boilerplate",
  description: "Dit is de blogpagina voor Solid Pro",
};

export const revalidate = 60; // ISR: herlaad blogs elke 60 seconden

// ✅ Server Component voor het ophalen van blogdata
export default async function BlogOverview() {
  const query = `*[_type == "blog"]{
    _id,
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    categories[]->{
      _id,
      title
    }
  }`;

  const blogs = await client.fetch(query);

  return <BlogList blogs={blogs} />;
}
