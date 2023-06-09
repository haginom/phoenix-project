import {CaseIcon} from '@sanity/icons'

export default {
  name: 'featuredWork',
  type: 'document',
  title: 'Featured Work',
  icon: CaseIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      rows: 3,
      title: 'Description',
      description: 'Describe your blog for search engines and social media.',
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
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
    {
      name: 'caseStudyBuilder',
      title: 'Case Study Builder',
      type: 'caseStudyBuilder',
    },
  ],
}
