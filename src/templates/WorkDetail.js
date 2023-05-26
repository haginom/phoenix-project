import * as React from "react";
import { graphql } from "gatsby";
import FeaturedWorkPage from "../components/FeaturedWorkPage";

export const query = graphql`
  query WorkQuery($id: String!) {
    featuredWork: sanityFeaturedWork(id: { eq: $id }) {
      id
      _id
      _rawContent
      title
      keywords
      description

      previewPoster {
        asset {
          _id
          url
          altText
        }
      }
      poster {
        asset {
          _id
          url
          altText
        }
      }
      content {
        list
        style
        _type
        children {
          text
          marks
          _key
          _type
        }
      }
    }
  }
`;
const WorkDetailPage = (props) => {
  const { data, errors } = props;
  const FeatureWorks = data && data.featuredWork;

  if (errors) {
    return <p>error occured</p>;
  }
  return <FeaturedWorkPage {...FeatureWorks} />;
};

export const Head = () => <title>Phoenix Work Details</title>;

export default WorkDetailPage;
