export default {
  title: 'Open Roles',
  name: 'openRoles',
  type: 'document',
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
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(80),
    },
  ],
}
