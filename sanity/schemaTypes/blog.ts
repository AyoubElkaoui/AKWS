import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Afbeelding',
      type: 'image',
    }),
    defineField({
      name: 'body',
      title: 'Inhoud',
      type: 'blockContent',
    }),
    defineField({
      name: 'categories',
      title: 'Categorieën',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Gepubliceerd op',
      type: 'datetime',
    }),
  ],
});
