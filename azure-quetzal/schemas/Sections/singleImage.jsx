import {ImageIcon} from '@sanity/icons'

export default {
  title: 'Section Single Image',
  name: 'sectionSingleImage',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Media Type',
      name: 'mediaType',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video URL', value: 'videoUrl'},
          {title: 'Video', value: 'video'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'altText',
      title: 'Alternative Text',
      type: 'string',
      hidden: ({parent}) => parent?.mediaType === 'video',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({parent}) => parent?.mediaType === 'video',
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      hidden: ({parent}) => parent?.mediaType !== 'videoUrl',
    },

    {
      name: 'video',
      title: 'Video',
      type: 'file',
      hidden: ({parent}) => parent?.mediaType !== 'video',
    },
  ],
}
