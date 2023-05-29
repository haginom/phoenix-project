import {TiersIcon} from '@sanity/icons'

export default {
  title: 'Services',
  name: 'services',
  type: 'document',
  icon: TiersIcon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Order',
      name: 'order',
      type: 'number',
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Mini Icon',
      name: 'miniIcon',
      type: 'image',
    },
    {
      title: 'subService',
      name: 'subService',
      type: 'array',
      of: [{type: 'subService'}],
    },
  ],
}
