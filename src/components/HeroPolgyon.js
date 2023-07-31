import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroCover = ({
  bg,
  left,
  heading,
  textColor,
  text,
  light,
  bgPolygon,
  svgColor,
  polygon,
  margin,
}) => {
  return (
    <Container fluid className={`${bg} hero hero-top`}>
      <Row
        style={{ marginLeft: 0, marginRight: "-1px", padding: 0 }}
        className="h-100"
      >
        <Col
          style={{ marginLeft: 0, marginRight: "0px", padding: 0 }}
          md={3}
          className={`position-relative ${polygon}
           ${light} ${bgPolygon} polygon-bkg-image`}
        />
        <div className={`heroPolygon${svgColor}`} />

        <Col
          className="serviceText"
          xs={{ span: 11, offset: 1 }}
          md={{ span: 7, offset: 5 }}
          lg={{ span: 7, offset: 4 }}
          xl={{ span: 7, offset: 3 }}
        >
          <h1 style={{ zIndex: "100" }} className="display-3 ">
            {heading}
          </h1>
          <p style={{ zIndex: "100" }} className="w-90 mt-3">
            {text}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCover;
