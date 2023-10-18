export default {
  title: 'subService',
  name: 'subService',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().max(85),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required().max(170),
    },
  ],
}
