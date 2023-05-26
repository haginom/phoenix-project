import React from "react";
import { PortableText } from "@portabletext/react";
import Layout from "../components/Layout";
import HeroCover from "../components/HeroPolgyon";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import sanityConfig from "../services/sanity";

const FeaturedWorkPage = ({ ...props }) => {
  const { _rawContent, keywords, title } = props;
  const myPortableTextComponents = {
    types: {
      image: ({ value }) => {
        const imageData = getGatsbyImageData(
          value?.asset?._ref,
          { width: 1024 },
          sanityConfig
        );
        return <GatsbyImage alt="" image={imageData} />;
      },
      h1: ({ children }) => <h1 className="display-1">{children}</h1>,
    },

    marks: {
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

  return (
    <Layout>
      <HeroCover
        offset={2}
        size={6}
        svgColor="SuccessPlus"
        margin="me-5"
        polygon="clip-path-polygon-opposite"
        bgPolygon="bg-primary"
        bg="bg-light"
        heading={title}
      />
      <div className="padding-large">
        <Row>
          <Col md={3}>
            {keywords.map((word, index) => (
              <Row key={index}>
                <p>{word}</p>
              </Row>
            ))}
          </Col>
          {_rawContent.map((block, index) => {
            console.log(block._type);
            return (
              <React.Fragment key={index}>
                {block._type === "image" ? (
                  <Col md={11} className="offset-1">
                    <PortableText
                      value={[block]}
                      components={myPortableTextComponents}
                    />
                  </Col>
                ) : (
                  <Col md={9} className="offset-3">
                    <PortableText
                      value={[block]}
                      components={myPortableTextComponents}
                    />
                  </Col>
                )}
              </React.Fragment>
            );
          })}
        </Row>
      </div>
    </Layout>
  );
};

export default FeaturedWorkPage;
