import {BlockquoteIcon} from '@sanity/icons'

export default {
  title: 'Section Quote ',
  name: 'sectionQuote',
  type: 'object',
  icon: BlockquoteIcon,
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
    {
      name: 'attribute',
      title: 'Attribute',
      type: 'string',
    },
    {
      name: 'jobRole',
      title: 'Job Role',
      type: 'string',
    },
  ],
}
