import * as React from "react";
import { graphql } from "gatsby";
import FeaturedWorkPage from "../components/CaseStudyPage";
import { mapEdgesToNodes, splitArrayIntoGroups } from "../helpers/helpers";

export const query = graphql`
  query WorkQuery($id: String!) {
    featuredPreviews: allSanityFeaturedWork {
      edges {
        node {
          id
          _createdAt
          title
          description
          previewPoster {
            asset {
              _id
              url
              altText
              gatsbyImageData
            }
          }
        }
      }
    }
    featuredWork: sanityFeaturedWork(id: { eq: $id }) {
      id
      _id
      caseStudyBuilder {
        ... on SanityHero {
          _key
          _type
          heading
          image {
            _key
            _type
            _rawAsset
            _rawHotspot
            _rawCrop
            asset {
              publicUrl
              url
              gatsbyImageData
            }
          }
        }
        ... on SanitySectionIntro {
          _key
          _type
          caseStudyIntro
        }
        ... on SanityKeywords {
          _key
          _type
          otherKeywords
          tags
        }
        ... on SanitySectionText {
          _key
          _type
          subHeading
          _rawContent
        }
        ... on SanitySectionImageGallery {
          _key
          _type
          images {
            asset {
              publicUrl
              url
              gatsbyImageData
            }
          }
        }
        ... on SanityTextWithIllustration {
          _key
          _type
          imagePosition
          image {
            asset {
              publicUrl
              url
              gatsbyImageData
            }
          }
          excerpt
        }
        ... on SanitySectionSingleImage {
          _key
          _type
          image {
            asset {
              id
              url
              publicUrl
              gatsbyImageData
            }
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
          }
        }
      }
    }
  }
`;
const WorkDetailPage = (props) => {
  const { data, errors } = props;
  const FeatureWorks = data && data.featuredWork;
  const FeaturedPreviews = data.featuredPreviews
    ? mapEdgesToNodes(data.featuredPreviews)
    : [];
  const SortedWorkByDate = FeaturedPreviews.sort(
    (a, b) => new Date(a._createdAt) - new Date(b._createdAt)
  );

  const GroupedWork = splitArrayIntoGroups(SortedWorkByDate, 5);
  if (errors) {
    return <p>error occured</p>;
  }

  return (
    <FeaturedWorkPage FeatureWorks={FeatureWorks} GroupedWork={GroupedWork} />
  );
};

export const Head = () => <title>Phoenix Work Details</title>;

export default WorkDetailPage;
