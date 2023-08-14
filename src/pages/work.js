import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { mapEdgesToNodes } from "../library/helpers";
import Svg from "../svgs/Work.svg";
import ProjectPreview from "../components/ProjectPreview";
import { splitArrayIntoGroups } from "../helpers/helpers";
import Hero from "../components/Hero";
import X from "../images/phoeni-X-orange.png";


export const WorkPageQuery = graphql`
  query WorkQuery {
    featuredWork: allSanityFeaturedWork(filter: { research: { eq: false } }) {
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

const WorkPage = (props) => {
  const { data } = props;

  const featuredWorkNodes = (data || {}).featuredWork
    ? mapEdgesToNodes(data.featuredWork)
    : [];

  const SortedWorkByDate = featuredWorkNodes.sort(
    (a, b) => new Date(a._createdAt) - new Date(b._createdAt)
  );

  const GroupedWork = splitArrayIntoGroups(SortedWorkByDate, 5);

  return (
    <Layout background="success">
      <Hero
        heroClass="hero-top"
        light="text-dark"
        offsetMax={1}
        offsetMid={1}
        offsetMin={1}
        colSizeMax={10}
        colSizeMin={6}
        colSizeMid={7}
        svgImage={<Svg className="contact-hero" />}
        bg="bg-success"
        heading="Helping brands grow by reinventing their point of view."
        texts={[
          "We work closely with client teams to solve big challenges, from naming and positioning to where to expand to next. Our clients are brands that push the boundaries of personal progress, from health tech to transformational travel.",
        ]}
        coverImage={X}
        coverImageClassName="x-Mobile"
      />
      <div className="padding-large">
        <h3 className="subheading mb-5">Work</h3>
        {GroupedWork ? (
          <div>
            {GroupedWork.map((subarray, subarrayIndex) => {
              return (
                <div className="work-grid-container scroll-smooth" key={subarrayIndex}>
                  {subarray.map((work, index) => {
                    const isOffset = (index + 1) % 2 === 0;

                    return (
                      <React.Fragment>
                        <div
                          className={`work-grid preview-card-wrapper`}
                          key={index}
                        >
                          <ProjectPreview isOffset={isOffset} work {...work} />
                        </div>
                        {!isOffset && (
                          <>
                            <div className="work-grid empty-grid"></div>
                            <div className="work-grid empty-grid"></div>
                          </>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ) : null}
        <style jsx>{`
          @media (max-width: 768px) {
            .work-grid-container {
              display: flex;
              flex-direction: column;
              margin-top: 2rem;
            }
            .preview-card-wrapper{
              display: flex;
              flex-direction: column;
              margin-top: 2rem;
            }
          }

      
          }
        `}</style>
      </div>
      <Hero
        heroClass={"hero-mid"}
        headingClass={"quoteHeading"}
        offsetMax={1}
        offsetMid={1}
        offsetMin={1}
        quote
        colSizeMax={10}
        colSizeMin={6}
        colSizeMid={7}
        bgImg="quote-hero"
        bg="bg-primary"
        heading="I'm looking forward to working with Phoenix for many more years to come and can’t imagine a better partner in our corner"
        quoteName="Sophie Pless"
        quoteText="Director, International Strategy & Growth, Noom. 
        "
      />
      <Hero
        heroClass={"hero-mid"}
        cta
        linkTo="/contact"
        btnBorder={"btnBorder"}
        headingClass={"ctaHeading"}
        colSizeMax={8}
        colSizeMin={6}
        colSizeMid={6}
        offsetMax={3}
        offsetMid={3}
        offsetMin={2}
        bgImg="cta-hero"
        bg="bg-success"
        heading="Have a problem we can help you solve?"
      />
    </Layout>
  );
};
export const Head = () => <title>Phoenix Work</title>;

export default WorkPage;
