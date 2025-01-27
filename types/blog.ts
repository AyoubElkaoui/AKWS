export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: string; // Aangepast van `any` naar `string` voor betere types
  metadata?: string;
  body?: string; // Blijft optioneel
  content?: string; // Nieuw veld voor unieke content
  mainImage?: string; // Specificeren als string
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};
