import * as React from "react";
import { graphql } from "gatsby";
import FeaturedWorkPage from "../components/CaseStudyPage";
import { mapEdgesToNodes } from "../helpers/helpers";

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
              gatsbyImageData
              altText
              publicUrl
              url
              _id
            }
          }
          logo {
            asset {
              gatsbyImageData
              publicUrl
              url
              _id
            }
          }
          caseStudyBuilder {
            ... on SanityKeywords {
              _type
              otherKeywords
              tags
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
          tagline
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
            ... on SanityImage {
              _key
              _type
              asset {
                gatsbyImageData
                publicUrl
                url
              }
            }
            ... on SanityVideo {
              _key
              _type
              asset {
                url
              }
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
        ... on SanitySectionQuote {
          _type
          attribute
          jobRole
          quote
        }
        ... on SanitySectionSingleImage {
          _key
          _type
          mediaType
          video {
            asset {
              id
              url
            }
          }
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

  //Function to remove current case study from the list of previews
  const removeFeaturedWorkFromPreviews = (previews, featureWorksItem) => {
    const areObjectsEqual = (obj1, obj2) => {
      return obj1.id === obj2.id;
    };

    return previews.filter(
      (preview) => !areObjectsEqual(preview, featureWorksItem)
    );
  };

  const newFeaturedPreviews = removeFeaturedWorkFromPreviews(
    FeaturedPreviews,
    FeatureWorks
  );

  //Function to access the Keyword Tags
  const getKeywordTags = (node) => {
    let keywords = node.caseStudyBuilder.filter(
      (item) => item._type === "keywords"
    );
    return keywords.map((obj) => obj.tags);
  };

  // Function to calculate the number of common elements between two arrays
  const countCommonElements = (arr1, arr2) => {
    return arr1.filter((item) => arr2.includes(item)).length;
  };

  // Function to sort FeaturedPreviews based on relevance to referenceTags
  const sortByRelevance = (FeaturedPreviews, referenceTags) => {
    return FeaturedPreviews.sort((previewA, previewB) => {
      const tagsA = getKeywordTags(previewA);
      const tagsB = getKeywordTags(previewB);

      // Count the number of common keyword tags between each preview and referenceTags
      const relevanceA = countCommonElements(tagsA.flat(), referenceTags);
      const relevanceB = countCommonElements(tagsB.flat(), referenceTags);

      // Sort in descending order (most relevant first)
      return relevanceB - relevanceA;
    });
  };

  const referenceTags = getKeywordTags(FeatureWorks);

  // Call the sorting function
  const sortedPreviews = sortByRelevance(newFeaturedPreviews, referenceTags);

  if (errors) {
    return <p>error occured</p>;
  }

  return (
    <FeaturedWorkPage
      FeatureWorks={FeatureWorks}
      SortedPreviews={sortedPreviews}
    />
  );
};

export const Head = () => <title>Phoenix Work Details</title>;

export default WorkDetailPage;
