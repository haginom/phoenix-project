import {UsersIcon} from '@sanity/icons'

export default {
  title: 'Team',
  name: 'team',
  type: 'document',
  icon: UsersIcon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Job Title',
      name: 'jobTitle',
      type: 'string',
    },
    {
      title: 'Order',
      name: 'order',
      type: 'number',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Short Bio',
      name: 'shortBio',
      type: 'string',
      validation: (Rule) => Rule.required().min(30).max(362),
    },
  ],
}
