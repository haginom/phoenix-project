import React from "react";
import { PortableText } from "@portabletext/react";
import Layout from "../components/Layout";
import HeroCover from "../components/Polygon";
import { filterByProperty } from "../helpers/helpers";
import Hero from "./Hero";
import ProjectPreviewGrid from "../components/ProjectPreviewSlick";
import { GatsbyImage } from "gatsby-plugin-image";

const myPortableTextComponents = {
  types: {
    h1: ({ children }) => <h1 className="display-1">{children}</h1>,
    p: ({ children }) => <p className="display-1">{children}</p>,
    normal: ({ children }) => <p className="display-1">{children}</p>,
    paragraph: ({ children }) => <p className="display-1">{children}</p>,
    span: ({ children }) => <p className="display-1">{children}</p>,
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    strong: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    underline: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

const FeaturedWorkPage = ({ GroupedWork, FeatureWorks }) => {
  const { caseStudyBuilder } = FeatureWorks;

  console.log(caseStudyBuilder);
  const property = "_type";
  const HeroSection = filterByProperty(caseStudyBuilder, property, "hero");
  const KeywordsSection = filterByProperty(
    caseStudyBuilder,
    property,
    "keywords"
  );

  let mergedKeywords = [];

  if (
    KeywordsSection &&
    KeywordsSection.tags &&
    KeywordsSection.otherKeywords
  ) {
    mergedKeywords = [
      ...KeywordsSection.tags,
      ...KeywordsSection.otherKeywords,
    ];
  }

  const filteredData = caseStudyBuilder.filter(
    (obj) => obj._type !== "hero" && obj._type !== "keywords"
  );

  console.log(filteredData);

  return (
    <Layout>
      <HeroCover
        heroClass={"hero-top"}
        backgroundPositionCoverImage="backgroundPositionImage"
        chevron={"chevronSuccessCS"}
        key={0}
        textColor={"text-light"}
        lgTxtColSpan={7}
        lgTxtOffset={0}
        lgPolColSpan={4}
        lgPolOffset={0}
        rowTextOffset={1}
        rowTextSpan={11}
        rowTextClassName="rowTextLeft"
        bgColor="bg-primary"
        bgImageUrl={HeroSection.image?.asset.publicUrl}
        polygonClass="polygonRightP"
        heading={HeroSection.heading}
        text={HeroSection.tagline}
      />
      <div className="padding-large">
        <div className="work-detail-container">
          <div
            className="work-detail-keywords"
            style={{ gridColumn: "1 / span 2", gridRow: "1 / span 3" }}
          >
            {mergedKeywords &&
              mergedKeywords.map((keyword, index) => (
                <p key={index}>{keyword}</p>
              ))}
          </div>
          {filteredData &&
            filteredData.map((item, index) => {
              const isAfterSingleImage =
                index >
                filteredData.findIndex(
                  (elem) => elem._type === "sectionSingleImage"
                );

              return (
                <div
                  key={index}
                  className={`work-detail-main`}
                  style={{
                    gridColumn:
                      item._type === "sectionSingleImage"
                        ? "1 / span 3"
                        : isAfterSingleImage
                        ? "2/ span 2"
                        : "3 / span 1",
                  }}
                >
                  {item._type === "sectionIntro" && (
                    <h1 className="display-3 mb-4 w-75">
                      {item.caseStudyIntro}
                    </h1>
                  )}
                  {item._type === "sectionText" && (
                    <div className="work-detail-section-text w-90">
                      <div className="my-4">
                        <h2 className="mb-4">{item.subHeading}</h2>
                        {item._rawContent?.map((block, index) => (
                          <div key={index}>
                            <PortableText
                              value={[block]}
                              components={myPortableTextComponents}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {item._type === "sectionSingleImage" && (
                    <div className="d-flex justify-content-center align-items-center work-detail-single-image">
                      <GatsbyImage
                        className="my-5"
                        image={item.image?.asset.gatsbyImageData}
                        alt=""
                      />
                    </div>
                  )}
                  {item._type === "sectionImageGallery" &&
                    item.images?.map((image, index) => {
                      const isFirstRow = index < 3;
                      const isFirstColumn = index % 2 === 0;
                      const isLastColumn = index % 2 !== 0;
                      const gridRow = isFirstRow ? 2 : 3;
                      const gridColumn = isFirstColumn
                        ? "1 / span 4"
                        : isLastColumn
                        ? "3 / span 4"
                        : "3 / span 2";

                      return (
                        <div
                          className="work-detail-image-gallery w-90 my-2"
                          key={index}
                        >
                          <div
                            className={`my-3`}
                            style={{ gridRow, gridColumn }}
                          >
                            <GatsbyImage
                              image={image.asset.gatsbyImageData}
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                  {item._type === "textWithIllustration" && (
                    <div
                      className={`d-flex work-detail-text-illustration w-90 ${
                        item.imagePosition === "left" && "flex-row-reverse"
                      }`}
                      key={index}
                    >
                      <div>
                        {item.excerpt.split("\n\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                      <div className={`my-3`}>
                        <GatsbyImage
                          image={item.image?.asset.gatsbyImageData}
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      <Hero
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

      {GroupedWork && (
        <ProjectPreviewGrid
          title="Recent Work"
          nodes={GroupedWork}
          browseMoreHref="/work"
        />
      )}
    </Layout>
  );
};

export default FeaturedWorkPage;
