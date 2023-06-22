import {CommentIcon} from '@sanity/icons'

export default {
  title: 'Clients',
  name: 'clients',
  type: 'document',
  icon: CommentIcon,
  fields: [
    {
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Order',
      name: 'order',
      type: 'number',
    },
    {
      title: 'Active',
      name: 'active',
      type: 'boolean',
    },
    {
      title: 'Quote',
      name: 'quote',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(200),
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
  ],
}
