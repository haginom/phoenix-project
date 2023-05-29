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
              {title: 'Market analysis', value: 'Market analysis'},
              {title: 'Qualitative research', value: 'Qualitative research'},
              {title: 'Quantitative research', value: 'Quantative research'},
              {title: 'Design and execution', value: 'Design and execution'},
              {title: 'Focus Groups', value: 'Focus groups'},
              {title: 'Key insight development', value: 'Key insight development'},
              {title: 'Brand positioning', value: 'Brand positioning'},
              {title: 'Messaging exploration', value: 'Messaging exploration'},
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
      of: [{ type: 'string' }],
      hidden: ({ parent }) => !parent?.tags?.includes('other'),
    },
  ],
  preview: {
    select: {
      title: 'Tags',
    },
  prepare(selection){
    return {
      title: 'Keywords'
    }
  }
}
}