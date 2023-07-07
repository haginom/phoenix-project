import {TagIcon} from '@sanity/icons'

export default {
  title: 'Keywords',
  name: 'keywords',
  type: 'object',
  icon: TagIcon,
  fields: [
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            layout: 'tags',
            list: [
              {
                title: 'Brand Fundamentals, Workshops & Roadmaps',
                value: 'Brand Fundamentals, Workshops & Roadmaps',
              },
              {
                title: 'Brand Positioning, Architecture & Naming',
                value: 'Brand Positioning, Architecture & Naming',
              },
              {
                title: 'Cultural & Ethnographic Research',
                value: 'Cultural & Ethnographic Research',
              },
              {title: 'Trends & Semiotics', value: 'Trends & Semiotics'},
              {title: 'Creative Strategy', value: 'Creative Strategy'},
              {
                title: 'Digital, Social, Content & Influencer strategy',
                value: 'Digital, Social, Content & Influencer strategy',
              },
              {
                title: 'Culture x Market x Product fit research',
                value: 'Culture x Market x Product fit research',
              },
              {
                title: 'Audience Understanding & Segmentation',
                value: 'Audience Understanding & Segmentation',
              },
              {
                title: 'Product research for new market expansion & optimization',
                value: 'Product research for new market expansion & optimization',
              },
              {
                title: 'New market positioning, messaging & creative strategy approach',
                value: 'New market positioning, messaging & creative strategy approach',
              },
              {
                title: 'Ongoing insight models',
                value: 'Ongoing insight models',
              },
              {
                title: 'Signals, trends & innovation research',
                value: 'Signals, trends & innovation research',
              },
              {
                title: 'UX/UI research, models and CX mapping to shape product strategy',
                value: 'UX/UI research, models and CX mapping to shape product strategy',
              },
              {
                title: 'Concept development, experimentation & testing',
                value: 'Concept development, experimentation & testing',
              },
              {
                title: 'Roadmapping, insight & workshops',
                value: 'Roadmapping, insight & workshops',
              },
              {
                title: 'Future-proofing workshops',
                value: 'Future-proofing workshops',
              },
              {
                title: 'Comms Architecture &  Key Messaging',
                value: 'Comms Architecture &  Key Messaging',
              },
              {title: 'Other', value: 'other'},
            ],
          },
        },
      ],
    },
    {
      name: 'otherKeywords',
      title: 'Other Keywords',
      type: 'array',
      of: [{type: 'string'}],
      hidden: ({parent}) => !parent?.tags?.includes('other'),
    },
  ],
  preview: {
    select: {
      title: 'Tags',
    },
    prepare(selection) {
      return {
        title: 'Keywords',
      }
    },
  },
}
