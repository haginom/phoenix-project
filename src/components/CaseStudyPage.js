import React from "react";
import { PortableText } from "@portabletext/react";
import Layout from "../components/Layout";
import HeroCover from "../components/Polygon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { filterByProperty } from "../helpers/helpers";
import Hero from "./Hero";
import ProjectPreviewGrid from "../components/ProjectPreviewSlick";

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
        key={0}
        textColor={"text-light"}
        lgTxtColSpan={8}
        lgTxtOffset={0}
        lgPolColSpan={1}
        lgPolOffset={3}
        rowTextClassName="rowTextRight"
        rowTextOffset={3}
        rowTextSpan={9}
        bgColor="bg-primary"
        bgImageUrl={HeroSection.image?.asset.publicUrl}
        polygonClass="polygonRight"
        heading={HeroSection.heading}
        text={HeroSection.tagline}
      />
      <div className="padding-large">
        <Row>
          <Col md={3}>
            {mergedKeywords &&
              mergedKeywords.map((keyword, index) => (
                <Row key={index}>
                  <p>{keyword}</p>
                </Row>
              ))}
          </Col>
          {filteredData &&
            filteredData.map((item, index) => {
              return (
                <Col md={9} key={index}>
                  {item._type === "sectionIntro" && (
                    <h1 className="display-3 mb-5">{item.caseStudyIntro}</h1>
                  )}
                </Col>
              );
            })}
        </Row>

        {filteredData &&
          filteredData.map((item, index) => (
            <Row key={index}>
              {item._type === "sectionText" && (
                <Col md={{ span: 9, offset: 3 }}>
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
                </Col>
              )}
              {item._type === "sectionSingleImage" && (
                <Row>
                  <Col
                    className="d-flex justify-content-center align-items-center"
                    md={{ span: 12, offset: 0 }}
                  >
                    <img
                      className="my-5"
                      src={item.image?.asset.publicUrl}
                      alt=""
                    />
                  </Col>
                </Row>
              )}
              {item._type === "sectionImageGallery" &&
                item.images?.map((image, index) => {
                  const isEvenIndex = index % 2 === 0;
                  const colProps = isEvenIndex
                    ? { md: { span: 7 } }
                    : { md: { span: 7, offset: 5 } };
                  return (
                    <Row>
                      <Col {...colProps} key={index} className="my-3">
                        <img src={image.asset.publicUrl} alt="" />
                      </Col>
                    </Row>
                  );
                })}
            </Row>
          ))}
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
