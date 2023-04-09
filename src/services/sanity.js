import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "3i8bbloq",
  dataset: "production",
  // useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2023-04-08", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export default client;
