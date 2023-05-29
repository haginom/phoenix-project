import {BlockContentIcon} from '@sanity/icons'

export default {
  title: 'Section Text',
  name: 'sectionText',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    {
      title: 'Subheading',
      name: 'subHeading',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          title: 'Introduction',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      subHeading: 'subHeading',
    },
    prepare(selection) {
      const {subHeading} = selection
      const title = subHeading ? subHeading : 'Text'
      return {
        title: title,
      }
    },
  },
}
