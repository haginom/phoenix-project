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
    featuredWork: allSanityFeaturedWork {
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
      <div className="padding-large mw-large">
        <h3 className="subheading mb-5">Work</h3>
        {GroupedWork ? (
          <div>
            {GroupedWork.map((subarray, subarrayIndex) => {
              const numRows = subarray.length;
              const rowFractions =
                "0.23fr ".repeat(numRows - 1) + "0.25fr 0.25fr";
              return (
                <div
                  className="work-grid-container"
                  style={{ gridTemplateRows: rowFractions }}
                  key={subarrayIndex}
                >
                  {subarray.map((work, index) => {
                    const isFifthWork = (index + 1) % 5 === 0;
                    const isOffset = (index + 1) % 2 === 0;

                    return (
                      <div
                        className={`work-grid preview-card-wrapper-${index}`}
                        key={index}
                      >
                        <ProjectPreview
                          isOffset={isOffset}
                          isFifthWork={isFifthWork}
                          work
                          {...work}
                        />
                      </div>
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
              flex-direction: column
            
            }
            .work-grid{
              display: flex;
              flex-direction: column;
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
        heading="Their work helped us roadmap, but also have fruitful conversations across teams internally."
        quoteName="Nil Onal"
        quoteText="Global Consumer Product Marketing Lead at WhatsApp. 
        "
      />
      <Hero
        cta
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
        heading="Have a problem we can help you solve?"
      />
    </Layout>
  );
};
export const Head = () => <title>Phoenix Work</title>;

export default WorkPage;
