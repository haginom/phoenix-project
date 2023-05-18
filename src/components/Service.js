import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedBanner from "./AnimatedBanner";

const Service = ({
  serviceImage,
  title,
  titleDescription,
  subServices,
  miniIcon,
}) => {
  return (
    <>
      <AnimatedBanner
        text={[`${title}`, ` ${title}`, `${title}`]}
        miniIcon={miniIcon}
      />
      <Container fluid className="padding-large serviceTable w-100 mx-auto">
        <Row className="serviceTableTopRow mb-5 me-0">
          <Col className="ms-2" md={3}>
            {serviceImage}
          </Col>
          <Col md={5}>
            <h3 className="display-2 mb-4">{title}</h3>
            <p className="mb-5">{titleDescription}</p>
          </Col>
        </Row>
        <Row>
          {subServices.map((subService, index) => (
            <Col className="p-3" md={3} key={index}>
              <p className="mb-5 two-lines-height">
                <strong>{subService.title}</strong>
              </p>
              <p className="mb-5">{subService.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Service;
