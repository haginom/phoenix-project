export default {
  title: 'Quotes',
  name: 'quote',
  type: 'document',
  fields: [
    {
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
