import {createClient} from '@sanity/client'

const client = createClient({
  title: 'phoenix-cms',
  projectId: '3i8bbloq',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export default client
