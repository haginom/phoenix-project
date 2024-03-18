import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structureTool} from 'sanity/structure'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'phoenix-cms',
  projectId: '3i8bbloq',
  dataset: 'production',

  plugins: [
    structureTool({
      name: 'phoenix-cms',
      title: 'Phoenix CMS',
      structure: (S, context) => {
        const documentTypeListItems = S.documentTypeListItems().filter(
          (item) => item.getId() !== 'featuredWork'
        )
        return S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'featuredWork',
              title: 'Featured Work',
              S,
              context,
            }),
            ...documentTypeListItems,
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: [
      ...schemaTypes,
      {
        title: 'Featured Work',
        name: 'featuredWork',
        type: 'document',
        orderings: [orderRankOrdering],
        fields: [
          orderRankField({type: 'featuredWork'}),

          {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'research',
            type: 'boolean',
            title: 'Research',
            description: 'Is this case study a research piece?',
            initialValue: false,
          },
          {
            name: 'featured',
            type: 'boolean',
            title: 'Featured',
            description:
              'Should this case study be featured within the "Featured Work" section on the homepage?',
            initialValue: false,
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
            title: 'Case Study Builder',
            name: 'caseStudyBuilder',
            type: 'caseStudyBuilder',
          },
        ],
        preview: {
          select: {
            orderRank: 'orderRank',
            title: 'title',
          },
          prepare(selection) {
            const {orderRank, title, previewPoster} = selection
            return {
              title: title,
              media: previewPoster,
            }
          },
        },
      },
    ],
  },
})
