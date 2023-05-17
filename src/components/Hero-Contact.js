import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroCover = ({
  offset,
  size,
  notFound,
  bg,
  heading,
  text,
  contactCoverImage,
  bgImg,
  coverImage,
  light,
}) => {
  return (
    <Container
      fluid
      className={`${bg} ${bgImg} ${light} hero contact ${
        coverImage && `position-relative`
      }`}
    >
      <Row className="w-100 h-100 align-items-center no-gutters">
        <Col md={`${size}`} className={`offset-md-${offset} px-0`}>
          {notFound ? (
            <div className="">
              <h1 className="display-6 ">{heading}</h1>
              <p className="display-3 ">{text}</p>
            </div>
          ) : (
            <div className="text introText">
              <h1 className="display-3 ">{heading}</h1>
              <p>{text}</p>
            </div>
          )}
          {coverImage ? (
            <div className="coverCWrapper"> {coverImage} </div>
          ) : null}

          {contactCoverImage ? (
            <div className="coverXWrapper"> {contactCoverImage} </div>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCover;
