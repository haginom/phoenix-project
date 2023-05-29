import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroCover = ({
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
}) => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bgImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Container
      fluid
      style={containerStyle}
      className={`${bgColor} hero position-relative `}
    >
      <Row
        style={{ marginLeft: 0, marginRight: 0, padding: 0 }}
        className={`h-100 d-flex ${
          polygonClass === `polygonRight`
            ? "flex-wrap-reverse"
            : `flex-row-reverse flex-wrap-reverse`
        }`}
      >
        <Col
          className={`${bgColor} textBox ${textColor}`}
          xs={{ span: 12 }}
          lg={{ span: `${lgTxtColSpan}`, offset: `${lgTxtOffset}` }}
        >
          <Row>
            <Col
              className={rowTextClassName}
              lg={{ span: `${rowTextSpan}`, offset: `${rowTextOffset}` }}
            >
              <h1 className="display-3 ">{heading}</h1>
              <p className="w-90 mt-3">{text}</p>
            </Col>
          </Row>
        </Col>

        <Col
          className="position-relative"
          style={{ padding: 0 }}
          sm={{ span: 12 }}
          lg={{ span: `${lgPolColSpan}`, offset: `${lgPolOffset}` }}
        >
          <div className={polygonClass} />
          {chevron && <div className={`${chevron}`} />}
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCover;
