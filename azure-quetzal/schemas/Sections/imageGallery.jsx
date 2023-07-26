import {ImagesIcon} from '@sanity/icons'

export default {
  title: 'Section Image Gallery',
  name: 'sectionImageGallery',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    {
      title: 'Image Gallery',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },

        {
          type: 'video',
        },
      ],
      validation: (Rule) => Rule.max(4).warning('You can add up to 4 images.'),
    },
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare(selection) {
      const {images} = selection

      const galleryCount = images.length || 0
      const galleryText = galleryCount === 1 ? 'image' : 'images'

      return {
        title: `Image Gallery (${galleryCount} ${galleryText})`,
      }
    },
  },
}
