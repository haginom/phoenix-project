import React from "react";
import { PortableText } from "@portabletext/react";
import Layout from "../components/Layout";
import HeroCover from "../components/Polygon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { filterByProperty, splitArray } from "../helpers/helpers";
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
  const property = "_type";
  const HeroSection = filterByProperty(caseStudyBuilder, property, "hero");
  const KeywordsSection = filterByProperty(
    caseStudyBuilder,
    property,
    "keywords"
  );
  const mergedKeywords = [
    ...KeywordsSection.tags,
    ...KeywordsSection.otherKeywords,
  ];
  const TitleSection = filterByProperty(
    caseStudyBuilder,
    property,
    "sectionIntro"
  );
  const TextSections = splitArray(
    filterByProperty(caseStudyBuilder, property, "sectionText")
  );
  const SingleImageSection = filterByProperty(
    caseStudyBuilder,
    property,
    "sectionSingleImage"
  );
  const ImageGallerySection = filterByProperty(
    caseStudyBuilder,
    property,
    "sectionImageGallery"
  );

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
            {mergedKeywords.map((keyword, index) => (
              <Row key={index}>
                <p>{keyword}</p>
              </Row>
            ))}
          </Col>
          <Col md={9}>
            <h1 className="display-3 mb-5">{TitleSection.caseStudyIntro}</h1>
            <div className="mt-2">
              {TextSections[0].map((textSection, index) => {
                return (
                  <div key={index} className="mb-5">
                    <h2>{textSection.subHeading}</h2>
                    {textSection._rawContent?.map((block, index) => {
                      return (
                        <div key={index}>
                          <PortableText
                            value={[block]}
                            components={myPortableTextComponents}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </Col>
          <Col md={12}>
            {SingleImageSection && (
              <img
                className="my-5"
                src={SingleImageSection.image?.asset.publicUrl}
                alt=""
              />
            )}
          </Col>
          <Col md={{ span: 10, offset: 2 }}>
            {TextSections[1] &&
              TextSections[1].map((textSection, index) => {
                return (
                  <div key={index}>
                    <h2>{textSection.subHeading}</h2>
                    {textSection._rawContent?.map((block, index) => {
                      return (
                        <div key={index}>
                          <PortableText
                            value={[block]}
                            components={myPortableTextComponents}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            <Row className="my-5">
              {ImageGallerySection &&
                ImageGallerySection.images?.map((image, index) => {
                  const isEvenIndex = index % 2 === 0;
                  const colProps = isEvenIndex
                    ? { md: { span: 7 } }
                    : { md: { span: 7, offset: 5 } };

                  return (
                    <Col {...colProps} key={index} className="my-3">
                      <img src={image.asset.publicUrl} alt="" />
                    </Col>
                  );
                })}
            </Row>
          </Col>
          <Col md={{ span: 10, offset: 2 }}>
            {TextSections[2] &&
              TextSections[2].map((textSection, index) => {
                return (
                  <div key={index}>
                    <h2>{textSection.subHeading}</h2>
                    {textSection._rawContent?.map((block, index) => {
                      return (
                        <div key={index}>
                          <PortableText
                            value={[block]}
                            components={myPortableTextComponents}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </Col>
        </Row>
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
