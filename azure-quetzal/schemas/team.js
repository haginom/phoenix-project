export default {
  title: 'Team',
  name: 'team',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(80),
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
      validation: (Rule) => Rule.required().min(30).max(262),
    },
  ],
}
