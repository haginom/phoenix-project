import client from "../services/sanity";
import imageUrlBuilder from "@sanity/image-url";

//image builder
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export function cn(...args) {
  return args.filter(Boolean).join(" ");
}
export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}
