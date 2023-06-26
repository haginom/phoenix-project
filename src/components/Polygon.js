import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroCover = ({
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
        className={`h-100 d-flex  ${
          polygonClass === `polygonRight`
            ? "flex-wrap-reverse"
            : polygonClass === `polygonRightP`
            ? "flex-wrap-reverse"
            : `flex-row-reverse flex-wrap-reverse`
        }`}
      >
        <Col
          className={`d-flex flex-column justify-content-center ${bgColor}  ${textColor} ${adjustPolyWidth} h-100`}
          xs={{ span: 12 }}
          md={{ span: `${lgTxtColSpan}`, offset: `${lgTxtOffset}` }}
        >
          <Col
            className={rowTextClassName}
            md={{ span: `${rowTextSpan}`, offset: `${rowTextOffset}` }}
          >
            <h1 className="display-3 ">{heading}</h1>
            {text && <p className="w-90 mt-3">{text}</p>}
          </Col>
        </Col>

        <Col
          className="position-relative"
          style={{ padding: 0 }}
          sm={{ span: 12 }}
          md={{ span: `${lgPolColSpan}`, offset: `${lgPolOffset}` }}
        >
          <div className={polygonClass} />
          {chevron && <div className={`${chevron}`} />}
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCover;
