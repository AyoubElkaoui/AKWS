const BlogCTA = () => {
  return (
    <div className="mt-10 rounded-md border bg-primary p-8 text-white shadow-solid-13">
      <h3 className="mb-4 text-2xl font-semibold">Wil je meer leren?</h3>
      <p className="mb-6">
        Ontdek hoe je jouw bedrijf naar een hoger niveau kunt tillen met onze uitgebreide gidsen en tools.
      </p>
      <a
        href="/contact"
        className="rounded bg-white px-6 py-3 font-semibold text-primary shadow-md transition-all duration-300 hover:bg-gray-200"
      >
        Neem contact op
      </a>
    </div>
  );
};

export default BlogCTA;
