import Link from "next/link";

type Props = {
  slug: string;
  categories: { title: string; slug: { current: string } }[];
};

const SharePost = ({ slug, categories }: Props) => {
  const shareUrl = encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`);

  return (
    <div className="mt-11 flex flex-wrap gap-4 md:items-center md:justify-between md:gap-0">
      {/* Social media links */}
      <ul className="flex items-center gap-6">
        <li>
          <p className="text-black dark:text-white">Deel op:</p>
        </li>
        <li>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href={`https://www.linkedin.com/shareArticle?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={`https://api.whatsapp.com/send?text=${shareUrl}`} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </li>
      </ul>

      {/* Categorieën als tags */}
      <ul className="flex flex-wrap items-center gap-4">
        <li>
          <p className="text-black dark:text-white">Categorieën:</p>
        </li>
        {categories?.map((category) =>
          category?.slug?.current ? (
            <li key={category.slug.current}>
              <Link href={`/categorie/${category.slug.current}`} className="text-primary">
                #{category.title}
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default SharePost;
