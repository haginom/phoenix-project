import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { mapEdgesToNodes } from "../library/helpers";

export const WorkPageQuery = graphql`
  query WorkQuery {
    featuredWork: allSanityFeaturedWork {
      edges {
        node {
          _id
          title
          description
          previewPoster {
            asset {
              url
              altText
            }
          }
        }
      }
    }
  }
`;

const WorkPage = (props) => {
  const { data, errors } = props;
  // if (errors) {
  //   return (
  //     <Layout>
  //       <GraphQLErrorList errors={errors} />
  //     </Layout>
  //   );
  // }

  const featuredWorkNodes = (data || {}).featuredWork
    ? mapEdgesToNodes(data.featuredWork)
    : [];
  console.log(featuredWorkNodes);
  return (
    <>
      {featuredWorkNodes ? (
        <p>
          {featuredWorkNodes.map((work, index) => (
            <div key={index}>
              <h1>{work.title}</h1>
              <p>{work.description}</p>
            </div>
          ))}
        </p>
      ) : null}
    </>
  );
};

export default WorkPage;
