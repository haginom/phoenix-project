export default {
  title: 'Services',
  name: 'services',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
