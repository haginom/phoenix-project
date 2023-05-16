import React from "react";
import { Container } from "react-bootstrap";

const HeroCover = ({ bg, heading, text, bgImg, light }) => {
  return (
    <Container fluid className={`${bg}  hero position-relative`}>
      <div className="ms-5 ps-5 clip-path-polygon">
        <div className="polygonTextWrapper mt-3">
          <h1 className="display-3 ">{heading}</h1>
          <p className="w-93 mt-3">{text}</p>
        </div>
      </div>
      <div className="heroPolygon"></div>
    </Container>
  );
};

export default HeroCover;
