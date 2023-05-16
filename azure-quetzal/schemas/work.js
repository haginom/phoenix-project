// siteSettings.js
export default {
  name: 'featuredWork',
  type: 'document',
  title: 'Featured Work',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Preview Poster',
      name: 'previewPoster',
      type: 'image',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alternative text',
          description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alternative text',
          description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
        },
      ],
    },

    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },

    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          title: 'Introduction',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
          },
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: 'author',
    //   type: 'reference',
    //   description: 'Publish an author and set a reference to them here.',
    //   title: 'Author',
    //   to: [{type: 'author'}],
    // },
  ],
}
