import { defineType } from 'sanity';

export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    // Tekstblokken
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 1', value: 'h1' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Heading 5', value: 'h5' },
        { title: 'Heading 6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
      },
    },
    // Afbeeldingen
    {
      type: 'image',
      options: { hotspot: true },
    },
    // Video's
    {
      type: 'object',
      name: 'video',
      title: 'Video',
      fields: [
        {
          name: 'url',
          title: 'Video URL',
          type: 'url',
          description: 'Voer de URL van de video in (bijv. YouTube of Vimeo).',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optioneel: voeg een bijschrift toe.',
        },
      ],
      preview: {
        select: {
          title: 'url',
          subtitle: 'caption',
        },
      },
    },
  ],
});
