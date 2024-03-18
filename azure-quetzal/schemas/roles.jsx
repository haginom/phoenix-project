import {AddCircleIcon} from '@sanity/icons'

export default {
  title: 'Open Roles',
  name: 'openRoles',
  type: 'document',
  icon: AddCircleIcon,
  fields: [
    {
      title: 'Role Title',
      name: 'roleTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Role Description',
      name: 'roleDescription',
      type: 'roleDescription',
      validation: (Rule) => Rule.required(),
    },
  ],
}
