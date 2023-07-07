import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroCover = ({
  rectangle,
  heroClass,
  backgroundPositionCoverImage,
  chevron,
  textColor,
  bgColor,
  bgImageUrl,
  polygonClass,
  rowTextClassName,
  rowTextOffset,
  rowTextSpan,
  xlPolColSpan,
  xlTxtColSpan,
  lgTxtColSpan,
  lgTxtOffset,
  lgPolColSpan,
  lgPolOffset,
  heading,
  text,
  adjustPolyWidth,
}) => {
  const containerStyle = {
    backgroundImage: `url(${bgImageUrl})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <Container
      fluid
      style={containerStyle}
      className={`${bgColor} hero position-relative ${heroClass} ${backgroundPositionCoverImage} backgroundImagePolygonHeaderStyles overflow-hidden`}
    >
      <Row
        style={{ marginLeft: 0, marginRight: 0, padding: 0 }}
        className={`h-100 d-flex hero-content ${
          polygonClass === `polygonRight`
            ? "flex-wrap-reverse"
            : polygonClass === `polygonRightP`
            ? "flex-wrap-reverse"
            : `flex-row-reverse flex-wrap-reverse`
        }`}
      >
        <Col
          className={`h-100 text-container d-flex flex-column justify-content-center ${bgColor}  ${textColor} ${adjustPolyWidth} h-100`}
          xs={{ span: 12 }}
          md={{ span: `${lgTxtColSpan}`, offset: `${lgTxtOffset}` }}
          lg={{ span: `${xlTxtColSpan}`, offset: `${lgTxtOffset}` }}
        >
          <Col
            className={rowTextClassName}
            md={{ span: `${rowTextSpan}`, offset: `${rowTextOffset}` }}
            lg={{ span: `${rowTextSpan}`, offset: `${rowTextOffset}` }}
          >
            <h1 style={{ zIndex: "100" }} className="display-3 ">
              {heading}
            </h1>
            {text && (
              <p style={{ zIndex: "100" }} className="w-90 mt-3">
                {text}
              </p>
            )}
          </Col>
        </Col>

        <Col
          className="position-relative h-100 "
          style={{ padding: 0 }}
          sm={{ span: 12 }}
          md={{ span: `${lgPolColSpan}`, offset: `${lgPolOffset}` }}
          lg={{ span: `${xlPolColSpan}`, offset: `${lgPolOffset}` }}
        >
          {rectangle && <div className={`${rectangle}`} />}

          <div className={polygonClass} />
          {chevron && <div className={`${chevron}`} />}
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCover;
