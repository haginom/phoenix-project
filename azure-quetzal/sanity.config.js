import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import {deskStructure, defaultDocumentNodeResolver} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'azure-quetzal',

  projectId: '3i8bbloq',
  dataset: 'production',

  plugins: [
    deskTool({structure: deskStructure, defaultDocumentNode: defaultDocumentNodeResolver}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
