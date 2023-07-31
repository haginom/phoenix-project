import React from "react";
import { PortableText } from "@portabletext/react";
import Layout from "../components/Layout";
import HeroCover from "../components/Polygon";
import { filterByProperty } from "../helpers/helpers";
import Hero from "./Hero";
import ProjectPreviewGrid from "../components/ProjectPreviewSlick";
import { GatsbyImage } from "gatsby-plugin-image";
import Video from "./Video";

const myPortableTextComponents = {
  types: {
    h1: ({ children }) => <h1 className="display-3">{children}</h1>,
    p: ({ children }) => <p className="p">{children}</p>,
    normal: ({ children }) => <p>{children}</p>,
    paragraph: ({ children }) => <p c>{children}</p>,
    span: ({ children }) => <span>{children}</span>,
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
        <a href={value.href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    },
  },
};

function getGridStyles(index) {
  const gridStyles = [
    { gridRow: 1, gridColumn: "1 / span 2" }, // Item 1 (index 0)
    { gridRow: 1, gridColumn: "3 / span 1" }, // Item 2 (index 1)
    { gridRow: 2, gridColumn: "1 / span 1" }, // Item 3 (index 2)
    { gridRow: 2, gridColumn: "2 / span 2" }, // Item 4 (index 3)
  ];

  return gridStyles[index];
}

const FeaturedWorkPage = ({ SortedPreviews, FeatureWorks }) => {
  const { caseStudyBuilder } = FeatureWorks;
  const property = "_type";
  const HeroSection = filterByProperty(caseStudyBuilder, property, "hero");
  const KeywordsSection = filterByProperty(
    caseStudyBuilder,
    property,
    "keywords"
  );
  const QuoteSection = filterByProperty(
    caseStudyBuilder,
    property,
    "sectionQuote"
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

  return (
    <Layout>
      <HeroCover
        heroClass={"hero-top"}
        backgroundPositionCoverImage="backgroundPositionImage"
        chevron={"chevronSuccessCS"}
        key={0}
        textColor={"text-light"}
        lgTxtColSpan={8}
        lgTxtOffset={1}
        lgPolColSpan={4}
        lgPolOffset={0}
        rowTextOffset={0}
        rowTextSpan={12}
        rowTextClassName="rowTextLeft"
        bgColor="bg-primary"
        bgImageUrl={HeroSection.image?.asset.publicUrl}
        polygonClass="polygonRightP"
        heading={HeroSection.heading}
        text={HeroSection.tagline}
        adjustPolyWidth="adjustPolyWidth"
      />
      <div className="work-detail-container">
        <div
          className="work-detail-keywords"
          style={{ gridArea: "1 / 4 / span 5 / span 4" }}
        >
          {mergedKeywords &&
            mergedKeywords.map((keyword, index) => (
              <p className="fw6" key={index}>
                {keyword !== "other" && keyword}
              </p>
            ))}
        </div>
        {filteredData &&
          filteredData.map((item, index) => {
            const sectionSingleImageIndex = filteredData.findIndex(
              (elem) => elem._type === "sectionSingleImage"
            );
            const isAfterSingleImage =
              sectionSingleImageIndex !== -1 && index > sectionSingleImageIndex;

            return (
              <div
                key={index}
                className={`work-detail-main`}
                style={{
                  gridArea:
                    item._type === "sectionSingleImage"
                      ? "auto / 4 / auto / span 18"
                      : isAfterSingleImage
                      ? "auto / 5 / auto / span 18 "
                      : "auto / 9 / auto / span 12",
                }}
              >
                {item._type === "sectionIntro" && (
                  <h1 className="work-detail-intro display-3 mb-3 w-90">
                    {item.caseStudyIntro}
                  </h1>
                )}
                {item._type === "sectionText" && (
                  <div className="work-detail-section-text w-90">
                    <div className="my-4">
                      <h2 className="mb-4 display-5">{item.subHeading}</h2>
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
                {item._type === "sectionSingleImage" &&
                  item.mediaType === "image" && (
                    <div className="d-flex justify-content-center align-items-center work-detail-single-image my-5">
                      <GatsbyImage
                        image={item.image?.asset.gatsbyImageData}
                        alt=""
                      />
                    </div>
                  )}
                {item._type === "sectionSingleImage" &&
                  item.mediaType === "video" && (
                    <div className="d-flex justify-content-center align-items-center work-detail-single-image my-4">
                      <Video
                        className="video-container"
                        source={item.video?.asset?.url}
                      />
                    </div>
                  )}
                {item._type === "sectionImageGallery" &&
                  item.images?.length === 4 && (
                    <div className="work-detail-image-gallery-four w-90 my-3">
                      {item.images.map((image, index) => {
                        const { gridRow, gridColumn } = getGridStyles(index);

                        return (
                          <div
                            className={`my-3`}
                            style={{ gridRow, gridColumn }}
                            key={index}
                          >
                            {image._type === "image" && (
                              <GatsbyImage
                                image={image.asset.gatsbyImageData}
                                alt=""
                              />
                            )}
                            {image._type === "video" && (
                              <Video
                                className="video-container"
                                source={image.asset?.url}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                {item._type === "sectionImageGallery" &&
                  item.images?.length === 3 && (
                    <div
                      className="work-detail-image-gallery-three w-90 my-3"
                      key={index}
                    >
                      {item.images?.map((image, index) => {
                        return (
                          <div key={index} className="my-3 w-100">
                            {image._type === "image" && (
                              <GatsbyImage
                                image={image.asset.gatsbyImageData}
                                alt=""
                              />
                            )}
                            {image._type === "video" && (
                              <Video
                                className="video-gallery"
                                source={image.asset?.url}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                {item._type === "sectionImageGallery" &&
                  item.images?.length === 2 &&
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
                        className="work-detail-image-gallery w-90 my-3"
                        key={index}
                      >
                        {image._type === "image" && (
                          <div
                            className={`my-3`}
                            style={{ gridRow, gridColumn }}
                          >
                            <GatsbyImage
                              image={image.asset.gatsbyImageData}
                              alt=""
                            />
                          </div>
                        )}
                        {image._type === "video" && (
                          <div
                            className={`my-3`}
                            style={{ gridRow, gridColumn }}
                          >
                            <Video
                              className="video-container"
                              source={image.asset?.url}
                            />
                          </div>
                        )}
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
      <style jsx>{`



          @media (max-width: 992px) {
            .work-detail-container {
              display: flex;
              flex-direction: column;
              padding-left: 6rem;
              padding-right: 6rem;
            }

            .work-detail-intro{
              margin-top: 1rem;
            }
  
          }
          @media (max-width: 568px) {
            .work-detail-container {
              padding-left: 2rem;
              padding-right: 2rem;
            }

        
          }
          }
        `}</style>

      {QuoteSection.length !== 0 ? (
        <Hero
          heroClass={"hero-mid"}
          headingClass={
            QuoteSection.quote.length < 250
              ? `quoteHeading`
              : `quoteSmallHeading`
          }
          offsetMax={1}
          offsetMid={1}
          offsetMin={1}
          quote
          colSizeMax={10}
          colSizeMin={6}
          colSizeMid={7}
          bgImg="quote-hero"
          bg="bg-primary"
          heading={QuoteSection.quote}
          quoteName={QuoteSection.attribute}
          quoteText={QuoteSection.jobRole}
        />
      ) : (
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
          heading="The Phoenix team has been both valuable and a pleasure to partner with. Their research has provided thorough insights into user problems and needs, helping shape our product strategy and prioritization"
          quoteName="- Rosie"
          quoteText="PM, Noom, Inc."
        />
      )}

      {SortedPreviews && (
        <ProjectPreviewGrid
          title="Recent Work"
          nodes={SortedPreviews}
          browseMoreHref="/work"
        />
      )}
    </Layout>
  );
};

export default FeaturedWorkPage;
