import {BlockContentIcon} from '@sanity/icons'

export default {
  title: 'Role Description',
  name: 'roleDescription',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
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
}
