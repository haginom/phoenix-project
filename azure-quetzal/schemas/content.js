export default {
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
    },
  ],
}