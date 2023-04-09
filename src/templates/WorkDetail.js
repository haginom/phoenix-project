import * as React from "react";
import { graphql } from "gatsby";
import FeaturedWorkPage from "../components/FeaturedWorkPage";

export const query = graphql`
  query WorkQuery($id: String!) {
    featuredWork: sanityFeaturedWork(id: { eq: $id }) {
      id
      _id
      title
      description
      previewPoster {
        asset {
          _id
          url
          altText
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

export default WorkDetailPage;
