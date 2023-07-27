import * as React from "react";
import Layout from "../components/Layout";
import HeroCover from "../components/Polygon";
import Hero from "../components/Hero";
import CoverImage from "../images/research.jpg";
import { graphql } from "gatsby";
import ProjectPreviewGrid from "../components/ProjectPreviewSlick";
import { mapEdgesToNodes } from "../library/helpers";

export const query = graphql`
  query ResearchPageQuery {
    featuredWork: allSanityFeaturedWork(filter: { research: { eq: true } }) {
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
        }
      }
    }
  }
`;

const ResearchPage = (props) => {
  const { data, errors } = props;

  const featuredWorkNodes = (data || {}).featuredWork
    ? mapEdgesToNodes(data.featuredWork)
    : [];

  const SortedWorkByDate = featuredWorkNodes.sort(
    (a, b) => new Date(a._createdAt) - new Date(b._createdAt)
  );

  console.log(SortedWorkByDate);
  return (
    <Layout background="success">
      <HeroCover
        rectangle={"rectangleSuccess"}
        heroClass={"hero-top"}
        backgroundPositionCoverImage="backgroundImageResearch"
        chevron={"chevronPrimary"}
        key={0}
        textColor={"text-dark"}
        lgTxtColSpan={7}
        xlTxtColSpan={8}
        lgTxtOffset={0}
        lgPolColSpan={5}
        lgPolOffset={0}
        xlPolColSpan={4}
        rowTextOffset={1}
        rowTextSpan={10}
        rowTextClassName={"rowTextLeftResearch"}
        bgColor="bg-success"
        bgImageUrl={CoverImage}
        polygonClass="polygonLeftS"
        adjustPolyWidth="adjustPolyWidthAbout"
        heading="Thoughts, opinions and experiments around the world"
        text="Our teams expertiese is rooted in a desire to continue learning, thinking, and growing. Below are some of our recent studies and thoughts."
      />
      {SortedWorkByDate && (
        <ProjectPreviewGrid
          setTitleWidth
          title="Our latest research projects"
          nodes={SortedWorkByDate}
        />
      )}

      <Hero
        ctaSubscribe
        heroClass={"hero-mid"}
        linkTo="/contact"
        btnBorder={"btnBorder"}
        headingClass={"ctaHeading"}
        colSizeMax={9}
        colSizeMin={6}
        colSizeMid={6}
        offsetMax={3}
        offsetMid={3}
        offsetMin={2}
        bgImg="cta-hero"
        bg="bg-success"
        heading="Want to stay up to date on our latest findings? "
      />
    </Layout>
  );
};

export default ResearchPage;

export const Head = () => <title>Phoenix Research</title>;
