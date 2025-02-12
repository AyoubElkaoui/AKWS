import { client } from "@/sanity/lib/client";
import BlogList from "@/components/Blog/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - AK Web Solutions",
  description:
    "Lees de laatste blogs en inzichten over webdesign, digitale strategieën en online succes bij AK Web Solutions.",
  keywords:
    "blogs, AK Web Solutions, webdesign, digitale strategie, online succes, SEO, content marketing",
  robots: "index, follow",
  openGraph: {
    title: "Blogs - AK Web Solutions",
    description:
      "Lees de laatste blogs en inzichten over webdesign, digitale strategieën en online succes bij AK Web Solutions.",
    url: "https://akwebsolutions.nl/blog",
    type: "website",
    images: [
      {
        url: "https://akwebsolutions.nl/og-blog.jpg", // Zorg dat deze afbeelding beschikbaar is op je server
        width: 1200,
        height: 630,
        alt: "Blogs - AK Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs - AK Web Solutions",
    description:
      "Lees de laatste blogs en inzichten over webdesign, digitale strategieën en online succes bij AK Web Solutions.",
    images: ["https://akwebsolutions.nl/og-blog.jpg"],
    site: "@akwebsolutions",
  },
};

export const revalidate = 60; // ISR: herlaad blogs elke 60 seconden

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
