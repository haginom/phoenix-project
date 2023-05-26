import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroCover = ({
  bg,
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
    <Container fluid className={`${bg} hero `}>
      <Row
        style={{ marginLeft: 0, marginRight: 0, padding: 0 }}
        className="h-100"
      >
        <Col
          style={{ marginLeft: 0, marginRight: 0, padding: 0 }}
          sm={12}
          md={3}
          className={`position-relative ${polygon} ${light} ${bgPolygon}`}
        ></Col>
        <Col
          sm={12}
          md={{ span: 9 }}
          lg={{ span: 9 }}
          xl={{ span: 9 }}
          className={`d-flex  flex-column justify-content-center px-0 ${bgPolygon} ${textColor}`}
        >
          <Col
            className="serviceText"
            xs={{ span: 11, offset: 1 }}
            md={{ span: 7, offset: 5 }}
            lg={{ span: 7, offset: 4 }}
            xl={{ span: 7, offset: 3 }}
          >
            <h1 className="display-3 ">{heading}</h1>
            <p className="w-90 mt-3">{text}</p>
          </Col>
        </Col>
        <div className={`heroPolygon${svgColor}`}></div>
      </Row>
    </Container>
  );
};

export default HeroCover;
