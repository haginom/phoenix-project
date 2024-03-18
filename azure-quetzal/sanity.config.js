import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import {deskStructure} from './deskStructure'
import {deskTool} from 'sanity/desk'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'phoenix-cms',
  projectId: '3i8bbloq',
  dataset: 'production',

  plugins: [deskTool({structure: deskStructure}), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (prev) => [...prev],
  },
})
